const URL = require("url");

const urlString = "http://127.0.0.1:80?a=1&b=2#abc";
// const url2 = URL.parse(urlString); // Deprecated: Use the WHATWG URL API instead.
// console.log(url2);

// new(url: string | URL, base?: string | URL): URL;
const url = new URL.URL(urlString);
// console.log(URL === URL.URL); // false
console.log(url);
console.log(url.searchParams.has('a')); // true
console.log(url.searchParams.has('b')); // true
console.log(url.searchParams.has('c')); // false
/*
URL {
  href: 'http://127.0.0.1/?a=1&b=2#abc',
  origin: 'http://127.0.0.1',
  protocol: 'http:',
  username: '',
  password: '',
  host: '127.0.0.1',
  hostname: '127.0.0.1',
  port: '',
  pathname: '/',
  search: '?a=1&b=2',
  searchParams: URLSearchParams { 'a' => '1', 'b' => '2' },
  hash: '#abc'
}
*/

const Url = {
  origin: "http://127.0.0.1",
  protocol: "http:",
  username: "",
  password: "",
  host: "127.0.0.1",
  hostname: "127.0.0.1",
  port: "",
  pathname: "/",
  search: "?a=1&b=2",
  hash: "#abc",
};

// function format(urlObject: UrlObject | string): string;
const href = URL.format(Url);
console.log(href); // http://127.0.0.1:80/?a=1&b=2#abc

