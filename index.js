import express from 'express';
import eg from 'express-graphql'

import {schema} from './data/schema'

const app = express();


app.get('/', (req, res) => {
    res.send("Hello")
})




app.listen(5000, () => console.log("Server started :)"))

app.use('/graphql', eg({
    schema,
    graphiql: true,
}))

