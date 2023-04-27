FROM nginx
COPY ./dist /usr/share/nginx/html
COPY ./frontend_nginx.conf /etc/nginx/conf.d
EXPOSE 80