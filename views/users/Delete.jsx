const React = require("react")
const id = "2"

function Delete() {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            <h1>Delete User Page</h1>
            <form action={`/users/${id}?_method=DELETE`} method="POST">
                <input type="submit" value="Delete" />
            </form>
        </body>
        </html>
    )
}

module.exports = Delete