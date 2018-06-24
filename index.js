const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema.js')
const app = express()

app.use('/', expressGraphQL({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log("The server is running on port 4000...")
})
