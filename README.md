# realtime-web-chat-test

An simple realtime web application that uses the following packages:

 - [body-parser](https://www.npmjs.com/package/body-parser])
 - [Express 4](http://expressjs.com/)
 - [Pug formely known as Jade](https://pugjs.org)
 - [Socket.io](http://socket.io/)

## Running Locally

Make sure you have [Node.js](http://nodejs.org) and [Git](https://git-scm.com/) installed.

Download the source code by executing the following command:
```sh
    $ git clone -b develop https://github.com/raymondasbreuk/realtime-web-chat-test
```

Install the necessary package by using the [NPM package manager](https://www.npmjs.com). 
Go to the root of you project (package.json) and execute the following command:
```sh
    $ npm install
```

Start you application
```sh
    $ node app.js
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Folder structure

* **app.js** - initializes the app and glues everything together
* **package.json** - Hold the package that your app depends on and their version
* **public/** - contains all static files like images, styles and javascript
* **routes/** - defines your app routes and their logic
* **views/** - provides templates which are rendered and served by your routes
