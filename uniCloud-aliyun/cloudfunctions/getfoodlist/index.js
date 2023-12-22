'use strict';
const db = uniCloud.database();

exports.main = async (event, context) => {    
    // 在数据库中查找匹配的数据
    let getRes = await db.collection('orderfood').get();
	return getRes;	
    
};
