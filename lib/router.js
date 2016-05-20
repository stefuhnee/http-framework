'use strict'

const Router = module.exports = function() {
  this.routes = {};
};

Router.prototype.get = function(url, cb) {
  if (!this.routes.GET) this.routes.GET = {};
  this.routes.GET[url] = cb;
};

Router.prototype.post = function() {
  if (!this.routes.POST) this.routes.POST = {};
  this.routes.POST[url] = cb;
};

Router.prototype.put = function() {
  if (!this.routes.PUT) this.routes.PUT = {};
  this.routes.PUT[url] = cb;
};

Router.prototype.delete = function() {
  if (!this.routes.DELETE) this.routes.DELETE = {};
  this.routes.DELETE[url] = cb;
};

Router.prototype.route = function(req, res) {
  return function(req, res) {
    send(req, res);
    this.routes[req.method][req.url](req, res);
  }.bind(this);

function send(req, res) {
  res.send = function(str) {
    res.writeHead(200, {
      'Content-type':'text/html'
    });
    res.write(str);
    res.end();
    }
  }
