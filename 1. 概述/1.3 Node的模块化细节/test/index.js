console.log('current directory test index');

require('../test');
require('../test/index');
require('../test/index.js');
// 只会加载模块一次，因为有缓存
// current directory test index
