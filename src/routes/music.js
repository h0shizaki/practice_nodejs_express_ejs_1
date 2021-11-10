const dbCon = require("../connection/connection");

module.exports = {
    addSong : (req ,res)=>{
        res.render('addSong.ejs',{
            title : 'Add Song'
        })
    },
    postSong : async(req, res)=>{

    }
}