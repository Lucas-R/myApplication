FROM node:20-alpine AS builder
ARG EXPOSE
WORKDIR /backend
RUN npm install -g npm@11.3.0
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /backend
RUN npm install -g npm@11.3.0
COPY --from=builder /backend/dist ./dist
COPY --from=builder /backend/node_modules ./node_modules
COPY --from=builder /backend/package*.json ./

EXPOSE $EXPOSE
CMD ["node", "dist/index.js"]