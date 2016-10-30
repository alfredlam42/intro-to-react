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

States are used so that when you update the data on a page, you can update the page easily. It saves a lot of problems people have with jQuery.

This is how the number of likes and comments are updated on Facebook.

### Before and After Mounting Components

You can easily write code with things to do before and after mounting components. The after part might not be a big deal since you can easily do that with jQuery. But doing things before the component loads is a big deal.