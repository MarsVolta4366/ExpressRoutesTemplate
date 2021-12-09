const React = require("react")

function New() {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
        </head>
        <body>
            <form action="/users" method="POST">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" />
                <input type="submit" value="Submit" />
            </form>
        </body>
        </html>
    )
}

module.exports = New