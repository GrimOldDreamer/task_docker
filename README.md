### Description

This service show number of webpage visits

Counter information stores in JSON file at /.node-persist/storage folder

### How to start

Docker Image Build command:
docker build -t nodejs-app .

Docker Run command:
docker run -d --env PORT=4000 --env HOST="0.0.0.0" -p 4000:4000 --name test-app  nodejs-app

Docker Run command without building image:
docker run -d --env PORT=4000 --env HOST="0.0.0.0" -p 4000:4000 --name test-app  grimolddreamer/nodejs-app:1.0

### Environment Variables


|Name |  Description | Default value  |
| ------------ | ------------ | ------------ |
| PORT | LISTENING PORT | No default value |
| HOST | LISTENING IP | "0.0.0.0" |

IP Address of listenig host should be in "" (example | "0.0.0.0")
