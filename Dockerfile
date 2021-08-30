

FROM steebchen/nginx-spa:stable

# adapt the `dist/` folder to the output directory your build tool uses (such as `dist/`, `build/` or `www/`).
COPY build /app

EXPOSE 80

CMD ["nginx"]
