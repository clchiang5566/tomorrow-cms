FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache libc6-compat python3 make g++

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=1337

RUN npm prune --omit=dev \
  && mkdir -p .tmp

EXPOSE 1337

CMD ["npm", "run", "start"]
