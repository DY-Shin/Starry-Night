import csv
import time
import os
import paramiko
from datetime import datetime
import urllib
import json
from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
from urllib.parse import urlencode
import ssl

# 시작 - 기상청 기준 위치 정보 로딩
weather_geo_info_f = open('weather_geo_info.csv', 'r', encoding='utf-8')
rdr = csv.reader(weather_geo_info_f)
weather_geo = [row for row in rdr] # 읽기

weather_geo_info_f.close()
# 끝 - 기상청 날씨 기준 위치 정보 로딩

# 시작 - 행정구역별 날씨 크롤링
cnt = 1
context = ssl._create_unverified_context() # 요청 SSL 적용
baseURL = 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&'
weather_file_name = datetime.now().strftime('%y%m%d') + '_weather.json'
weather_api_result_f = open('./weather_data/' + weather_file_name, 'w+', encoding='utf-8')

cnt = 0
for grid in weather_geo:
    grid_json = dict()

    grid_json["x"] = grid[0]
    grid_json["y"] = grid[1]
    address = grid[2]

    url = baseURL + urlencode({"query": address + " 날씨"})
    headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS x 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36'}
    req = Request(url, headers=headers)
    webpage = urlopen(req)
    soup = BeautifulSoup(webpage, 'html.parser')
    temps = soup.find('div', 'temperature_text')
    if temps is None:
        print("주소 에러")
        continue;

    weatherBaseTime = 23 # 예보 기준 시각
    tonight = soup.find('div', 'graph_inner _hourly_weather').find('dt', 'time', string=str(weatherBaseTime) + '시')

    # 미세먼지 : 좋음(0~30), 보통(~80), 나쁨(~150), 매우나쁨(151~)
    fineDust = soup.find('strong', string='미세먼지').parent.find('span', 'txt').text
    ultraFineDust = soup.find('strong', string='초미세먼지').parent.find('span', 'txt').text
    temperature = tonight.parent.find('span', 'num').text[:-1].strip()
    # 구름양 : 맑음(0~50%), 구름많음(~80%), 흐림(81%~)
    sky = tonight.parent.dd.i.span.text

    # 온도 데이터는 시간 값으로 직접 찾기 가능
    # 습도데이터는 시간 값과 별개로 순차적으로 들어오기 때문에, 현재 시각과 예보 시각의 차이를 구해서 뽑아야 함
    humidityOrder = weatherBaseTime - datetime.now().hour - 1 # 현재 시각으로 부터 23시까지의 차이를 구한다.
    humidities = soup.find('div', 'humidity_graph_box').findAll('li', 'data') # 습도 데이터 불러오기
    humidity = humidities[humidityOrder].span.text.strip()

    print('[', cnt, ']', address)
    print('[' + str(weatherBaseTime) + '시 기준] ' + '하늘상태: ' + sky + ', 습도: ' + humidity + ', 온도: ' + temperature + ', 미세:', fineDust, ', 초미세:', ultraFineDust)
    grid_json["no"] = cnt
    grid_json["weatherBaseTime"] = weatherBaseTime
    grid_json["sky"] = sky
    grid_json["humidity"] = humidity
    grid_json["temperature"] = temperature
    grid_json["fineDust"] = fineDust
    grid_json["ultraFineDust"] = ultraFineDust
    json.dump(grid_json, weather_api_result_f, ensure_ascii=False)
    weather_api_result_f.write('\n')
    weather_api_result_f.flush()
    cnt += 1

weather_api_result_f.close()
# 끝 - 행정구역별 날씨 크롤링
