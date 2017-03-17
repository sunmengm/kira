
/*因为定义过滤器的时候使用的是对象，即将一个对象导出去，
所导入的时候需要用解构的方法导入*/
import {date} from './date.js';
import {addzero} from './addzero.js';

export default{
	date,
	addzero
}