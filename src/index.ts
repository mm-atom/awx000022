import awx2 from '@mmstudio/awx000002';

/**
 * 设置local存储
 * @param mm 固定参数
 * @param key 键
 * @param val 值(只能引用)
 */
export default function set<T>(mm: awx2, key: string, val: T) {
	const local = mm.data.local as { [key: string]: unknown; };
	local[key] = val;
}
