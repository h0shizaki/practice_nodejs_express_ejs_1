const express = require('express');
const {getIndex , testPost} = require('./src/routes/index')
const {addSong, postSong} = require('./src/routes/music')
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.set('views', path.join(__dirname,'src','views'));
app.set('view engine', 'ejs');


app.get('/', getIndex);
app.post('/post' , testPost)

app.get('/add', addSong)

const PORT = process.env.PORT || 3000 ;
app.listen(PORT , ()=>console.log(`Server is running on port: ${PORT}`))