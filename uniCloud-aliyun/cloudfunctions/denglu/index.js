'use strict';
const db = uniCloud.database();

exports.main = async (event, context) => {
    let { name, number } = event;
    
    // 在数据库中查找匹配的数据
    let queryRes = await db.collection('consumer').where({ name: name, number: number }).get();
    if (queryRes.data && queryRes.data.length > 0) {
        // 如果存在匹配的数据，则返回相应的数据
        return queryRes.data[0];
    } else {
        // 如果不存在匹配的数据，则返回错误信息
        return {
            code: -1,
            message: "登录失败，用户名或号码不匹配"
        };
    }
};