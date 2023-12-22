'use strict';
const db = uniCloud.database();

exports.main = async (event, context) => {
  let { mobile, time } = event; // 解构 mobile 和 time 属性

  // 使用where条件查询数据库中匹配的项
	let getRes = await db.collection('orderfood').where({ mobile: mobile, time: time }).remove();


	return getRes;
};