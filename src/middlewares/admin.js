module.exports = [
    function(req,res,next){

        let nombre = req.query.user

        if (nombre == "Ada" || nombre == "Greta" || nombre == "Vim" || nombre == "Tim") {
            next()
        } else {
            res.send("no tenes los privilegios para ingresar");
        }
    }
]