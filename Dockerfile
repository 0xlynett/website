FROM node:22 AS build

RUN curl -fsSL https://bun.sh/install | bash

WORKDIR /app
COPY . .
RUN ~/.bun/bin/bun install
RUN ~/.bun/bin/bun run build

FROM oven/bun
WORKDIR /app
COPY --from=build /app/.output .
COPY --from=build /app/package.json .

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000
CMD ["bun", "start"]