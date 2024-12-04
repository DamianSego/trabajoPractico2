// configura todo lo que es express

const express = require ('express')

const productRoutes = require('./routes/products')

app.use('/v1, productRoutes')

module.exports = app