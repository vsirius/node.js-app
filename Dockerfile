FROM ubuntu

# Install Node.js
RUN sed -i s/http/ftp/ /etc/apt/sources.list && apt-get update
RUN apt-get install --yes curl
RUN curl -sL https://deb.nodesource.com/setup_6.x |  bash - 
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential

COPY . /src

# Install app dependencies
RUN cd /src; npm install

CMD ["node", "/src/client_5.js"]
