FROM nginx
COPY ./dist /usr/share/nginx/html
COPY ./login-demo.conf /etc/nginx/conf.d
EXPOSE 80