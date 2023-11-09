FROM docker.digikey.us/devops/node:18

LABEL name="next js template"
LABEL maintainer=""

WORKDIR /usr/src/app

USER root
COPY .npmrc .
COPY package*.json /usr/src/app/
RUN npm ci --omit=dev --ignore-scripts

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]