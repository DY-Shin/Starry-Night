from pyspark.sql import SparkSession
from pyspark.sql.functions import udf
from pyspark.sql.types import StringType
from pyspark.sql.functions import col
from pyspark.sql.functions import struct
from pyspark.sql.functions import lit
import grid 
import redis

spark = SparkSession.builder \
        .appName('light_weather_analyzer') \
        .getOrCreate()

# 로그 스케일 조절용인데 권장하지 않음 / 모든 로그 제어 불가
spark.sparkContext.setLogLevel('WARN')

# 천체기상도 판정 공식 함수
def calc_sky_weather(l, h, fd, ufd, hm):
    sum = 0
    l = float(l)
    h = int(h)

    if l <= 10:
        sum += 6.0
    elif l <= 16:
        sum += 5.5
    elif l <= 25:
        sum += 5.0
    elif l <= 40:
        sum += 4.5
    elif l <= 64:
        sum += 4.0
    elif l <= 102:
        sum += 3.5
    elif l <= 161:
        sum += 3.0
    elif l <= 255:
        sum += 2.5

    if h <= 60:
        sum -= 0
    elif h <= 80:
        sum -= 0.5
    elif h <= 90:
        sum -= 1.0
    elif h <= 100:
        sum -= 1.5

    if fd == '좋음':
        sum -= 0
    elif fd == '보통':
        sum -= 0.5
    elif fd == '나쁨':
        sum -= 1.0
    elif fd == '매우나쁨':
        sum -= 1.5

    if ufd == '좋음':
        sum -= 0
    elif ufd == '보통':
        sum -= 0.5
    elif ufd == '나쁨':
        sum -= 1.0
    elif ufd == '매우나쁨':
        sum -= 1.5

    if hm == 1:
        return 6 - sum;
    else: 
        return sum;

# UDF
mapToX = udf(lambda lat, lng: grid.mapToX(float(lat), float(lng)), StringType())
mapToY = udf(lambda lat, lng: grid.mapToY(float(lat), float(lng)), StringType())
udf_calc_sky_weather = udf(calc_sky_weather)

# 날씨 데이터 로드
wt = spark.read.json('file:///home/j8d206/light_weather/weather_data/today_weather.json')

# 광공해 + 날씨 JOIN 및 천체기상도 공식 적용
print('>>>> Magnitude 공식 계산')
lp = spark.read.csv('file:///home/j8d206/light_weather/light_pollution_map_data/light_pollution_map_w0.csv', header=True) 
joined_df = lp.join(wt, (mapToX(lp.lat, lp.lng) == wt.x) & (mapToY(lp.lat, lp.lng) == wt.y))
joined_df.show()
joined_df = joined_df.select(
        col('lat'),
        col('lng'),
        udf_calc_sky_weather(col('value'), col('humidity'), col('fineDust'), col('ultraFineDust'), lit(0))
)
joined_df.write.csv('file:///home/j8d206/light_weather/spark_result/magnitude') 

# HeatMap 렌더링을 위한 천체기상도 계산 (값을 거꾸로 뒤집어 준다.)
for i in range(0, 6): # 광공해 지도 스케일 0~5
    print('>>>>>>>>>>>>>' + str(i) + '번째 window join 실행')
    # 광공해 지도 파일 로드
    lp = spark.read.csv('file:///home/j8d206/light_weather/light_pollution_map_data/light_pollution_map_w' + str(i) + '.csv', header=True) 

    joined_df = lp.join(wt, (mapToX(lp.lat, lp.lng) == wt.x) & (mapToY(lp.lat, lp.lng) == wt.y))
    joined_df.show()

    joined_df = joined_df.select(
            col('lat'),
            col('lng'),
            udf_calc_sky_weather(col('value'), col('humidity'), col('fineDust'), col('ultraFineDust'), lit(1))
    )

    joined_df.write.csv('file:///home/j8d206/light_weather/spark_result/heatmap' + str(i)) 
