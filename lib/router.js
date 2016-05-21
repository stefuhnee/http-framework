'use strict'

// Constructor that creates a routes object to store method objects with url keys associated with callback functions
const Router = module.exports = function() {
  this.routes = {};
};

// If a GET object doesn't already exist on a router instance, create one. Otherwise, set the url as a key on the GET object with the callback as its value.
Router.prototype.get = function(url, cb) {
  if (!this.routes.GET) this.routes.GET = {};
  this.routes.GET[url] = cb;
};

Router.prototype.post = function(url, cb) {
  if (!this.routes.POST) this.routes.POST = {};
  this.routes.POST[url] = cb;
};

Router.prototype.put = function(url, cb) {
  if (!this.routes.PUT) this.routes.PUT = {};
  this.routes.PUT[url] = cb;
};

Router.prototype.delete = function(url, cb) {
  if (!this.routes.DELETE) this.routes.DELETE = {};
  this.routes.DELETE[url] = cb;
};

// From within the createServer function, we call this method, which returns a callback function passed to createServer. This CB function steps into the routes object to find our desired callback for the route. Bind binds this as the reference to our instance of Router instead of referring to the createServer function.
Router.prototype.route = function() {
  return function(req, res) {
    this.routes[req.method][req.url](req, res);
    send(req, res);
  }.bind(this);
};

// Formulates response to the client
function send(req, res) {
  res.send = function(str) {
    res.writeHead(200, {
      'Content-type':'text/html'
    });
    res.write(str);
    res.end();
  }
}
