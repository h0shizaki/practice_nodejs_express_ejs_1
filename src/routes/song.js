const dbCon = require("../connection/connection");

module.exports = {
    addSong : (req ,res)=>{
        res.render('addSong.ejs',{
            title : 'Add Song'
        })
    },
    postSong : async(req, res)=>{
        const songName = req.body.songName;
        const bandName = req.body.bandName;
        const lang = req.body.lang;
        const thumbnail_url = req.body.thumbnail_url;

        await dbCon.query("INSERT INTO music(name, band, lang, thumbnail_url) VALUES(?,?,?,?)",
        [songName, bandName, lang, thumbnail_url],
        (error, result, field)=>{
            if(error){ 
                throw error
            }

            console.log('DATA ADDED')
            res.redirect('/')
        } 
        )

    }
}