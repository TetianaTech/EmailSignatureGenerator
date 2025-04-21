FROM node:18-alpine

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY frontend/package.json ./frontend/
COPY shared/package.json ./shared/

RUN pnpm install

WORKDIR /app/frontend

EXPOSE 5173

CMD ["pnpm", "dev", "--host"]