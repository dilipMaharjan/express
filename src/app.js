const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');

const app=express();

app.disable('x-powered-by');

app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql:true
}));

const PORT='4000';
app.listen(PORT,()=>{
    console.log(`Server is running at port:${PORT}`)
});
