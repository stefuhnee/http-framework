# __route-me__

Route-me is a lightweight framework designed for quickly and easily setting up routes for a local server. Using route-me, you can define the behavior of your server by specifying a route using a RESTFUL method (currently only handles GET, POST, PUT, PATCH, and DELETE), path, and callback function. Route-me will handle the rest!

---

## Installation
Open your favorite shell terminal and install the route-me framework via npm:
```sh
$ npm i route-me
```

---

## Basic Use
Simply require route-me as a dependency, and instantiate a new router to which you can add your own custom routes.

Define your custom routes within a separate module. For these examples, we are using the filename routes.js within the root directory of the application.  You will need to export the router at the bottom of the file, after definining the routes.  Then, require this module into your server file.

file: _routes.js_
```javascript
const Router = require('route-me');
const router = new Router();
// routes defined here
router = module.exports;
```

---

## Defining Routes
Create methods on your router by specifying a RESTFUL method (.get, .post, .put, .patch, or .delete), URL path, and callback function. This is the general template:

__file: routes.js__
```javascript
const router = require('route-me');
const router = new Router();

router.get('/testPath', function(req, res) {
    res.write('Your message to the client here');
    res.end();
});

router = module.exports;
```

---

## Using the routes within a server
Require in the routes file that you have created and pass a call to router.route into your server.

file: _server.js_
```javascript
const http = require('http');
const router = require('./routes'); //Wherever your routes are defined

http.createServer(router.route())
    .listen(3000);
```

---

## Todos

 - Handle other RESTFUL methods beyond GET, POST, PUT, PATCH, and DELETE
 - Handle many types of data
 - Enable responses beyond writing to the client


License
----

MIT
