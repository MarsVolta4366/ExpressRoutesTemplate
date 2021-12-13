const router = require("express").Router()

router.get("/", (req, res) => {
    res.send("Users page")
})

router.get("/New", (req, res) => {
    res.render("users/New")
})

router.get("/Delete", (req, res) => {
    res.render("users/Delete")
})

router.post("/", (req, res) => {
    // res.send("Create user page")
    console.log(req.body.firstName)
    res.send(req.body.firstName)
})

// Lets you get, update, or delete by id
router.route("/:id")
    .get((req, res) => {

        // req.user exists because of router.param on line 34
        console.log(req.user)

        res.send(`Get user with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update user with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete user with ID ${req.params.id}`)
    })

    const users = [{name: "Derek"}, {name: "Drew"}]

    // If param string is found, code inside function is run
    router.param("id", (req, res, next, id) => {
        req.user = users[id]
        next()
    })

module.exports = router