docker :

docker build -t nest-cloud-run .
docker run -p80:3000 nest-cloud-run

Add a NODE_ENV environment variable
ENV NODE_ENV production
