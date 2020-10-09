//creation de serv
const express = require('express');
const indexRoutes = require('./routes/indexRoutes');


//express
const app = express();


//lecture fichier ejs
app.set('view engine', 'ejs');

//rendu du css en public
app.use(express.static('public'));

app.listen(3000, function () {
    console.log('listening on 3000')
})

//router
app.use(indexRoutes);


app.get('/about', (req, res) => {

    res.render('about');
});
app.get('/shop', (req, res) => {

    res.render('shop');
});
app.get('/shop-detail', (req, res) => {

    res.render('shop-detail');
});
app.get('/cart', (req, res) => {

    res.render('cart');
});
app.get('/checkout', (req, res) => {

    res.render('checkout');
});
app.get('/my-account', (req, res) => {

    res.render('my-account');
});
app.get('/wishlist', (req, res) => {

    res.render('wishlist');
});
app.get('/gallery', (req, res) => {

    res.render('gallery');
});
app.get('/contact-us', (req, res) => {

    res.render('contact-us');
});

app.use((req, res) => {
    res.status(404).render('404');
});