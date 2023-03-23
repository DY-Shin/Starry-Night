FROM adoptopenjdk/openjdk11
WORKDIR /usr/app
COPY build/libs/*.jar starry-night-server-dev.jar
ENV	USE_PROFILE local
CMD ["java","-Dspring.profiles.active=${USE_PROFILE}", "-jar","s    tarry-night-server-dev.jar"]