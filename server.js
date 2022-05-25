const express = require('express');
const app = express();
const port = 3000;
const getData = require('./controller/getData');
const products = require('./models/products');
const productsdata = getData()


app.set('view engine', 'ejs');
app.set('views', './Views');


app.get('/', (req,res) => {
    res.render('home', {pageTitle: 'Home Page', pageHeader: 'WELCOME HOME!!'
 } )
})
app.get('/products',(req,res) => {
    res.render('products',{pageTitle: 'Products', pageHeader: 'My Products',  data: productsdata})
})
app.get('/products/new',(req,res) => {
res.render('new-products')
})
app.get('/products/:id',(req,res) => {
    console.log(req.params);
    res.send(products[req.params.id])
})

app.post('/products',(req,res) => {
    console.log(req.body);
})
// productsdata.push(req.body)
// res.redirect('/products/')

app.get('/products/search/:brand', (req,res) => {
    console.log(req.params.brand);
    const result = products.filter(item => item.brand === req.params.brand)
    console.log(result);
})


app.listen(port, () => {
    console.log(`we running`)
})
