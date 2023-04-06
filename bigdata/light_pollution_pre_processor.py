import csv

# <광공해 맵 데이터 전처리기>

# STEP.1 데이터 용량 최적화
# 맵데이터의 사이즈 : 5k X 6k = 3000만
# 데이터를 액세스할 때 위, 경도 범위 내의 데이터를 조회하기 때문에, 스케일 별로 최적화가 필요함
# 1,2,4,8,16,32 단위로 데이터를 절삭한다. 숫자가 2배 될때마다 데이터는 4배씩 줄어든다.
# [1] = 3000만,400MB [32] = 3만, 400kb 
# 네이버 지도 축적 6단계에 스케일을 각각 적용함

# STEP.2 2차원 데이터 직렬화
# 행, 열 2차원으로 표현된 광공해 데이터를 -> [위도, 경도, 값] 형태를 가지도록 분리한다.
# 스파크 데이터 처리를 용이하게 하기 위함

print('읽기 시작')
# csv 파일 읽기
with open('pre_processing_light_pollution_map.csv', 'r') as f:
    reader = csv.reader(f)
    data = [row for row in reader]

cnt = 1
print('읽기 완료')
for z in range(0, 6):
    # n의 배수의 행, 열만 남기고 삭제하기
    n = 2 ** z # 2, 4, 8, 16, 32
    new_data = []
    for i, row in enumerate(data):
        if i % n == 0: # n의 배수인 행만 남기기
            new_row = []
            for j, value in enumerate(row):
                if j % n == 0: # n의 배수인 열만 남기기
                    new_row.append(value)
            new_data.append(new_row)


    # 2차원 데이터 직렬화
    split_data = []
    for i in range(1, len(new_data[0])):
        for j in range(1, len(new_data)):
            print(str(i))
            cnt += 1
            split_data.append([new_data[j][0], new_data[0][i], new_data[j][i]])

    # 새로운 csv 파일로 저장하기
    with open('light_pollution_map_w' + str(z) + '.csv', 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['lat', 'lng', 'value'])
        for row in split_data:
            writer.writerow(row)
