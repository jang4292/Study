const express = require('express');
const app = express();
const uuidAPIkey = require('uuid-apikey');

const server = app.listen(3001, () => {
    console.log(' start Server :  localhost :3001')
});

app.get('/api/users/:apikey/:type', async (req, res) => {
    let {
        apikey,
        type
    } = req.params;

    if(!uuidAPIkey.isAPIKey(apikey)) {
         res.send('api key is wrong');
         return
    }

    // console.log(`ok ${uuidAPIkey.create()}`); // if you want to create new uuid api key

    if(!uuidAPIkey.check(apikey, key.uuid)) {
        res.send('key is not valid')
        return 
    }

    if (type == 'seoul') {
        res.send('seoul');
    } else {
        res.send(data);
    }
});

const key = {
    apiKey: '48E4SCW-KR84V3S-P4PR33N-0Z2M5SD',
    uuid: '221c4cb3-9e10-4d8f-b12d-818e07c542e5'
}
const data = [
    { name: "홍길동", city: "seoul" },
    { name: "서울동", city: "seoul" },
    { name: "홍서울", city: "seoul" },
    { name: "대구야", city: "daegu" },
    { name: "이대구", city: "daegu" },
    { name: "그대구", city: "daegu" },
    { name: "부산은", city: "busan" },
    { name: "전주는", city: "jeonju" },
]