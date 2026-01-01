const fs = require("node:fs");
const path = require("node:path");

const fileName = path.resolve(__dirname, './myFiles/a.txt');
/* 1、回调方式
export function stat(
    path: PathLike,
    callback: (err: (NodeJS.ErrnoException | null), stats: (Stats | BigIntStats)) => void,
): void
* */
fs.stat(fileName, (err, stats) =>{
  console.log(stats);
/*
Stats {
  dev: 3763538664,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 2251799815588641,
  size: 50, // 50个字节（默认 UTF-8，字母占一个字节，中文占3个字节2）
  blocks: 0,
  atimeMs: 1767191119941.235,
  mtimeMs: 1767188798576.7622,
  ctimeMs: 1767188798576.7622,
  birthtimeMs: 1767188689584.381,
  atime: 2025-12-31T14:25:19.941Z,
  mtime: 2025-12-31T13:46:38.577Z,
  ctime: 2025-12-31T13:46:38.577Z,
  birthtime: 2025-12-31T13:44:49.584Z
}
* */
});

/* 2、Promise方式
function stat(
    path: PathLike,
    opts?: StatOptions & {
        bigint?: false | undefined;
    },
): Promise<Stats>;
* */
(async function () {
  const dirName = path.resolve(__dirname, './myFiles');
  const stats = await fs.promises.stat(dirName);
  console.log(stats);
  console.log("是否是目录: ", stats.isFile()); // 是否是目录: false
  console.log("是否是文件: ", stats.isDirectory()); // 是否是文件: true
/*
Stats {
  dev: 3763538664,
  mode: 16822,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 1125899910299072,
  size: 0, // 文件夹的字节为 0，是因为是用指针指向内部的文件
  blocks: 0,
  atimeMs: 1767191767615.9778,
  mtimeMs: 1767189936487.5085,
  ctimeMs: 1767189936487.5085,
  birthtimeMs: 1767105705720.046,
  atime: 2025-12-31T14:36:07.616Z,
  mtime: 2025-12-31T14:05:36.488Z,
  ctime: 2025-12-31T14:05:36.488Z,
  birthtime: 2025-12-30T14:41:45.720Z
}
* */
})()