const express = require("express") 
const app = express()

app.use(express.static("public"))
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended: true}))
app.use(logger)

app.get("/", (req, res) => {
    res.render("Index")
})

app.use("/users", require("./controllers/users"))

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)