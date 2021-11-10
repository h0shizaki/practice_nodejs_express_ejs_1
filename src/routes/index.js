const dbCon = require("../connection/connection");

module.exports = {
    getIndex : (req, res)=>{
        res.render('index.ejs' , {
            title: "Index",
            data: ''
        })
    },
    testPost : (req, res)=>{
        console.log(req.body)
        
        res.redirect('/')
    }
}