'use strict';
const db = uniCloud.database();

exports.main = async (event, context) => {
    let { address, mobile, name, number } = event;
    
    // 检查数据库中是否存在相同的number
    let queryRes = await db.collection('consumer').where({ number: number }).get();
    if (queryRes.data && queryRes.data.length > 0) {
        // 如果存在相同的number，则执行更新操作
        let updateRes = await db.collection('consumer').where({ number: number }).update({
            name: name,
            address: address,
            mobile: mobile
        });
        return updateRes;
    } else {
        // 如果不存在相同的number，则执行添加数据操作
        let addRes = await db.collection('consumer').add({
            name,
            address,
            mobile,
            number
        });
        return addRes;
    }
};
