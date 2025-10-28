FROM oven/bun

WORKDIR /app
COPY . .
RUN bun install
RUN bun run build

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000
CMD ["bun", "start"]