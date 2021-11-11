const express = require('express');
const {getIndex } = require('./src/routes/index')
const {addSong, postSong, editSong, putSong} = require('./src/routes/song')
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.set('views', path.join(__dirname,'src','views'));
app.set('view engine', 'ejs');

app.get('/', getIndex);

app.get('/add', addSong);
app.post('/add', postSong);

app.get('/edit:id', editSong);
app.post('/put' , putSong);

const PORT = process.env.PORT || 3000 ;
app.listen(PORT , ()=>console.log(`Server is running on port: ${PORT}`))