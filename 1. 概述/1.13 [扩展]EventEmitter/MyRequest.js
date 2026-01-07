// const { EventEmitter } = require("node:events");
const EventEmitter = require("node:events");
const http = require("node:http");

module.exports = class MyRequest extends EventEmitter {
  constructor(url, options) {
    super();
    this.url = url;
    this.options = options;
    this.request();
  }

  request() {
    http.request(this.url, (response) => {
      let responseBody = "";
      response.on("data", (chunk) => {
        responseBody += chunk.toString("utf-8");
      });

      response.on("end", () => {
        this.emit("response", response.headers, responseBody);
      });

      response.on("close", () => {
        this.emit("response", response.headers, responseBody);
      });
    });
  }
};