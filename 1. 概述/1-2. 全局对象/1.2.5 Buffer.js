const arrayBuffer = Buffer.from("abcdefg", "utf-8");
// 3. 计算机中存储的基本单位：字节
// 4. 使用时、输出时可能需要用十六进制表示。以下是用两位十六进制表示，即一个字节（一个十六进制 = 4个二进制）
console.log(arrayBuffer); // <Buffer 61 62 63 64 65 66 67>