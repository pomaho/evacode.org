FROM node:18.16.0

ENV APP_ROOT /web

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN curl -fsSL https://bun.sh/install | bash

RUN bun install

RUN bun run build
CMD node .output/server/index.mjs
