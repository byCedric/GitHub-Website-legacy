FROM bycedric/ci-node as build
ARG GITHUB_USERNAME
ENV REACT_APP_GITHUB_USERNAME=$GITHUB_USERNAME
WORKDIR /code
COPY . .
RUN npm install --no-save && npm run build

FROM bycedric/serve-webapp
COPY --from=build /code/build /var/www/http
EXPOSE 80
