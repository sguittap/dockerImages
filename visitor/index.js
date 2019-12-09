const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient();
client.set('visits', 0);

app.get('/', (req, res)=>{
   client.get('visits',(err, visits) => {
        res.send("Number of visits" + visits)
        client.set('visits', parseInt(visits) + 1)
   })
});

const port = 8081
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});