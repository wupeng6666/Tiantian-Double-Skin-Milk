'use strict';
const db = uniCloud.database();

exports.main = async (event, context) => {
    let { food, mobile, name, butt,total,address,time} = event;
    

        let addRes = await db.collection('orderfood').add({
			food, 
			mobile,
			name,
			butt,
			total,
			address,
			time
        });
        return addRes;
};
