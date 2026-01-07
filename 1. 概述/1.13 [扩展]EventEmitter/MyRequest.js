// const { EventEmitter } = require("node:events");
const EventEmitter = require("node:events");
const http = require("node:http");

module.exports = class MyRequest extends EventEmitter {
  constructor(url, options) {
    super();
    this.url = url;
    this.options = options;
  }

  send(body = '') {
    const handleResponseCallback = (response) => {
      let responseBody = "";
      response.on("data", (chunk) => {
        responseBody += chunk.toString("utf-8");
      });

      response.on("end", () => {
        this.emit("response", response.headers, responseBody);
      });
    };
    const request = http.request(this.url, this.options, handleResponseCallback);

    request.write(body);
    // 如果没有请求体需要
    request.end();
  }
};