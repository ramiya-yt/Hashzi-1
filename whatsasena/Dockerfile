FROM fusuf/whatsasena:latest
#ASENA COOMAND
#HEROKU
#HEROKU
#HEROKU
#API TOKEN
#j#HEROKU
RUN git clone https://github.com/Neotro23/Neotro /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
