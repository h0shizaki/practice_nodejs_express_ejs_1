const dbCon = require("../connection/connection");

module.exports = {
    getIndex : async(req, res)=>{
        await dbCon.query('SELECT * FROM music', (error, result)=>{
            if(error) throw error;

            res.render('index.ejs' , {
                title: "Index",
                data: result
            })
        })


    },

}