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
    },
    editSong : async(req, res)=>{
        let id = req.params.id ;
        await dbCon.query("SELECT * FROM music WHERE id = ?", id , (error, result, field)=>{
            if(error) throw error ;
            res.render('editSong.ejs',{
                title: 'Edit Song',
                data: result
            })
        })
    },

    putSong : async(req, res)=>{
        const id = req.body.songId;
        const songName = req.body.songName;
        const bandName = req.body.bandName;
        const lang = req.body.lang;
        const thumbnail_url = req.body.thumbnail_url;

        await dbCon.query("UPDATE music SET name = ?, band = ?, lang = ?, thumbnail_url = ? WHERE id = ?", 
        [songName, bandName, lang, thumbnail_url, id] , (error, result, field)=>{
            if(error) throw error;
            res.redirect('/')
        })
    },

    delSong : async(req, res)=>{
        const id = req.params.id ;
        await dbCon.query("DELETE FROM music WHERE id = ?",id, (error, result, field)=>{
            if(error) throw error;
            res.redirect('/');
        })
    }

}