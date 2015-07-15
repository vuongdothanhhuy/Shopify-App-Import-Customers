var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

var shopifyAPI = require('shopify-node-api');


var Shopify = new shopifyAPI({
    shop: 'MYSHOP', // MYSHOP.myshopify.com
    shopify_api_key: '', // Your API key
    shopify_shared_secret: '', // Your Shared Secret
    shopify_scope: 'write_products',
    redirect_uri: 'http://localhost:3000/finish_auth'
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});