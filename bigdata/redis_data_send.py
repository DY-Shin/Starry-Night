import os
import redis
import csv
import json

# Redis에 연결합니다
r = redis.Redis(host='j8d206.p.ssafy.io', port=6400, db=0, encoding='utf-8')
# Redis 인증
r.auth('dlgmltn0114')

# Redis Pipeline 객체를 만듭니다
pipe = r.pipeline()

# 날씨 데이터 전송

with open('./weather_data/today_weather.json', 'r') as f:
    weather_str = f.read()

#weathers = weather_str.strip().split('\n')
weathers = [json.loads(data) for data in weather_str.strip().split('\n')]
idx = 0
for w in weathers:
    if idx % 150 == 0:
        print('weather :', round((idx/6000)*100, 2), '%')
    field = w['x'] + ':' + w['y']
    r.hset("weather", field, json.dumps(w))
    idx = idx + 1

# 천체기상도 데이터 전송
print('천체기상도 데이터 전송 시작')
path = './spark_result/magnitude'
for filename in os.listdir(path):
    if filename.startswith('part'):
        with open(os.path.join(path, filename), 'r', encoding='utf-8') as f:
            rdr = csv.reader(f)
            lp_data = [row for row in rdr]

            cnt = 0
            for geo in lp_data:
                key = 'magnitude'
                cur = (float(geo[1]), float(geo[0]), geo[2]+':'+str(idx))
                pipe.geoadd(key, cur)
                cnt += 1
                idx += 1

                # 일정한 간격마다 Pipeline 실행
                if cnt % 10000 == 0:
                    print('pipeline executed:', round((idx/20000000)*100, 2), '%')
                    pipe.execute()
                    pipe = r.pipeline()

            # Pipeline 실행
            pipe.execute()

# 히트맵 데이터 전송
print('히트맵 데이터 전송 시작')
idx = 0
for i in range(0, 6): # 광공해 지도 스케일 0~5
    path = './spark_result/heatmap' + str(i)
    for filename in os.listdir(path):
        if filename.startswith('part'):
            with open(os.path.join(path, filename), 'r', encoding='utf-8') as f:
                rdr = csv.reader(f)
                lp_data = [row for row in rdr]

                # 위도 경도 데이터를 Redis Pipeline에 일괄 삽입합니다
                cnt = 0
                for geo in lp_data:
                    key = 'heat_map_scale_' + str(i)
                    cur = (float(geo[1]), float(geo[0]), geo[2]+':'+str(idx))
                    pipe.geoadd(key, cur)
                    cnt += 1
                    idx += 1

                    # 일정한 간격마다 Pipeline 실행
                    if cnt % 10000 == 0:
                        print('pipeline executed:', round((idx/20000000)*100, 2), '%')
                        pipe.execute()
                        pipe = r.pipeline()

                # Pipeline 실행
                pipe.execute()
