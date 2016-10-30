# A Simple Introduction to ReactJS

## What is React?

React is a front end framework created by Facebook.

You know how sometimes when you're scrolling through Facebook and you see that a post has a new like or the number of comments has changed? It's React at work. When React gets information the page has updated with new information, it compares the new DOM with the current DOM you have and only updates the components that has changed in real time.

Can't you do that with jQuery?

Yes you can, but if you use React, you don't have to worry about selecting the correct element and all that stuff related to updating the DOM.

## React Features

### Components

One of my favorite reason for using React is that everything is written into it's own component. This will allow you to easily find a specific piece of code you want to work on.

Components can be nested within each other and then you can pass data between those components.

### States

States are used so that when the data is updated, the page is automatically updated. It saves a lot of problems people have with jQuery.

The number of likes or comment has their own state. So as it gets updated, you see

## Getting Started

###Setting Everything Up

Start by reading the Getting Started section of my [Introduction To Node and Express](https://github.com/alfredlam42/intro-to-node-express).

Here are more packages to install:
```
npm install express react react-dom --save
```

```
npm install babel-core babel-loader css-loader jsx-loader react-hot-loader style-loader webpack webpack-dev-server --save-dev
```

Now setup your package.json file by adding the following piece of code. These will be used to start up your server and stuff. If you don't have these, you have to type every single command everytime you want to run your servers.
```JSON
  "scripts": {
    "dev": "webpack-dev-server --content-base lib/app/views --progress --colors",
    "build": "webpack -p --config webpack.config.js --profile --progress --colors",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

Now create a new file called
```
webpack.config.js
```

and paste the following snippet of code into it.

```javascript
var webpack = require('webpack');

module.exports = {
  entry: ['./src/App.jsx'],
  output: {
    path: './lib/app/public',
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]"} ,
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, loader: "babel-loader?stage=0", exclude: '/node_modules/' },
      { test: /\.jsx$/, loaders: ['jsx-loader', "babel-loader?stage=0"] }
    ]
  },
  plugins: []
};
```

The most important part of note is the entry and the output.

The entry field should contain the path to the main .jsx file that will start the app.

The output should contain the path on where you want to store the compiled file of code. And the filename is whatever you want to name it.

Next up is what should go into the entry file. You can put whatever you want in it but the main point is the code at the end of the file. It should be something like this:

```javascript
ReactDOM.render(<App />, document.getElementById('root'))
```

### Starting Your Server

Use this command when you're developing. You don't have to reload every time you update the page.
```
npm run dev
```

The thing is that this runs it on a phantom Express server so you can't really change the routes or anything. So if you want to work on a specific page, you'll have to modify the entry file with the component you're working on.

If you want to run the actual website you'll first have to run the build command.
```
npm run build
```

This will compile all your code into it's own file.

Then run the following on the main Ruby file. It'll probably be something like app.rb or index.rb.
```
ruby <filename>
```

Any time you make a change, you'll need to recompile the build as well as running the Ruby file.

## Stepping Away From Sinatra

If you want to use React for another framework, you set it up almost the exact same way. There might be some minor differences depending on what you're using though, so Google it.

There is a gem for Rails called [react-rails](https://github.com/reactjs/react-rails) which you can check out if you're interested in using React in Phase 3.


