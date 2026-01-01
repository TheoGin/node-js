const fs = require("node:fs");
const path = require("node:path");

const fileName = path.resolve(__dirname, "./myFiles/w.txt");

// 写入内容
const writeContent = "abc写入";

// 写入 Buffer
const buffer = Buffer.from(writeContent, "utf-8");
/* 1、writeFile
function writeFile(
    path: PathOrFileDescriptor,
    data: string | NodeJS.ArrayBufferView,
    callback: NoParamCallback,
): void;
*/
fs.writeFile(fileName, writeContent, () => {
  console.log("写入成功");
});
/*
function writeFile(
    file: PathOrFileDescriptor,
    data: string | NodeJS.ArrayBufferView,
    options: WriteFileOptions,
    callback: NoParamCallback,
): void;
* */
fs.writeFile(fileName, buffer, {
  flag: "a", // append：以追加的方式写
}, () => {
  console.log("写入成功");
});

/* 2、writeFileSync
function writeFileSync(
    file: PathOrFileDescriptor,
    data: string | NodeJS.ArrayBufferView,
    options?: WriteFileOptions,
): void;
* */
fs.writeFileSync(fileName, writeContent, {flag: "a"});
console.log("同步写入后才会输出");

/*
function writeFile(
    file: PathLike | FileHandle,
    data:
        | string
        | NodeJS.ArrayBufferView
        | Iterable<string | NodeJS.ArrayBufferView>
        | AsyncIterable<string | NodeJS.ArrayBufferView>
        | Stream,
    options?:
        | (ObjectEncodingOptions & {
            mode?: Mode | undefined;
            flag?: OpenMode | undefined;
            flush?: boolean | undefined;
        } & Abortable)
        | BufferEncoding
        | null,
): Promise<void>;
* */
(async function () {
  await fs.promises.writeFile(fileName, buffer, {
    flag: "a",
  });
  console.log("写入成功");
})()