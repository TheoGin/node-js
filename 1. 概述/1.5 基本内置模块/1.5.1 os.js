const os = require('os');

/** 1. EOL（）: string。The operating system-specific end-of-line marker.
       \n on POSIX
       \r\n on Windows
*/
console.log(os.EOL); // \r\n

// 2. arch()：Architecture; type Architecture = | "arm" | "arm64" | "ia32" | "loong64" | "mips" | "mipsel" | "ppc64" | "riscv64" | "s390x" | "x64";
console.log(os.arch()); // x64

// 3. cpus(): CpuInfo[]; Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available, such as if the /proc file system is unavailable.
console.log(os.cpus().length); // 12（逻辑处理器）
// console.log(os.cpus());
/* The properties included on each object include:
[
  {
    model: 'AMD Ryzen 5 4600H with Radeon Graphics         ',
    speed: 2994,
    times: {
      user: 94473671,
      nice: 0,
      sys: 103869281,
      idle: 806220375,
      irq: 14010359
    }
  },
  {
    model: 'AMD Ryzen 5 4600H with Radeon Graphics         ',
    speed: 2994,
    times: {
      user: 73270468,
      nice: 0,
      sys: 53785328,
      idle: 877507375,
      irq: 2031437
    }
  },
  ……
]
* */

// 4. freemen(): number Returns the amount of free system memory in bytes as an integer.
console.log(os.freemem()); // 2288467968 / 1024 ** 3 = 2.1313018798828125 GB
console.log(os.freemem() / 2 ** 30); // 2.1313018798828125 GB（1024 = 2^10）

// 5. homedir(): string; Returns the string path of the current user's home directory.
console.log(os.homedir()); // C:\Users\25596

// 6. hostname(): string; Returns the host name of the operating system as a string.
console.log(os.hostname()); // LAPTOP-3KSAH9TG

// 7. tmpdir(): string; Returns the operating system's default directory for temporary files as a string.
console.log(os.tmpdir()); // C:\Users\25596\AppData\Local\Temp
