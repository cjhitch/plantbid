FROM docker.digikey.us/devops/node:18

LABEL name="Configurable Part Box Builder App"
LABEL maintainer="dl_IT_DK_Plus_Devs@digikey.com"

WORKDIR /usr/src/app

USER root
COPY .npmrc .
COPY package*.json /usr/src/app/
RUN npm ci --production --ignore-scripts

COPY . .
RUN npm prune --production
RUN npm run build

EXPOSE 3000
CMD ["/bin/bash", "/usr/bin/load_env.sh", "/usr/bin/node", "--max-http-header-size=81000", "/usr/src/app/.next/server/app/page.js"]