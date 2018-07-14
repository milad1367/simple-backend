const express = require('express')
const app = express()
var port = 9000;
app.listen(port);
const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.json());

console.log('The magic happens on port ' + port);
//app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/authenticate',(req, res,next) => {
    res.send({
        cats: [{ name: 'lilly' }, { name: 'lucy' }]
      });
})
app.post('/api/authenticate',(req, res,next) => {
    if((req.body.username == "admin")&&(req.body.password == "1")) {
        console.log(req.body)

        res.send ({ username: "admin", token: "TOKEN" , pic: "admin.jpg"});
    }
    else {
        res.send (401);
    }    
})
//app.listen(3000, () => console.log('Example app listening on port 3000!'))