FROM node:20.13-slim AS base

# ビルドステージ
FROM base AS builder
WORKDIR /app/frontend
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend ./
RUN npm run build

# 実行ステージ
FROM base AS runner
WORKDIR /app/frontend
COPY --from=builder /app/frontend/package*.json ./
RUN npm install

COPY --from=builder /app/frontend/.next ./.next

CMD ["npm", "run", "start"]