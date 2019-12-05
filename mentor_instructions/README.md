# Mentor instructions

---

## Introduction
Give an brief [introduction](01.md) and explain how to [thinking and understanding React Compments](02.md)

## Setup

1.  Create react app (`npx create-react-app emoji-eats`)
2.  Delete all unecessary files
3.  Replace app.css with https://gist.github.com/saussayjesica/c1bfd17803560aaddc8fe373a388ddab
4.  Add google font to index.html (Go to public/index.html in your repo. Add the following <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600" rel="stylesheet"> underneath the shortcut icon link element on line 13)

5.  Make file in folder src/data/menuData.js and copy code from https://gist.github.com/saussayjesica/50f6801bcb3b689e777c2c6fc017c0db
6.  Run `yarn` if not already
7.  Delete all code in App.js
8.  [Create App component](03.md) from scratch - import react, create class, render, return, export default etc. 
9.  Explain [JSX](04.md) and mention it should be wrapped in an enclosing tag.

## Create Header component

1.  Make class component and later when we go over state we can make it a stateless functional component
2.  Add the Header into App.js

## Create MenuItem component

1.  Create another class component and hardcode the data for one menu item. Don't make the `handleClick` method yet.
2.  Explain how the component isn't reusable if we hardcode the data. To make it reuseable we need to use props. [Pass Props to a Stateless Functional Component](05.md)
3.  Import the menuData in the App.js file as well as the menuItem component. Add the following props to menuItem - emoji, label, name, description, price
4.  Assign the data for the first item in the menuData to the props eg. `name={menuData[0].name}`
5.  Explain how we could have a menuItem in App.js for every item on our menu but this isn't very dynamic. So we want to use the map method so we can dynamically render a menuItem for every item in the data. Explanation for map is in the README. Make sure you update the `props` and add a `key` using the index.

## Adding state

1.  Add state to the App.js file (we add it to App.js because it's used in both menuItem and Order). Order will be an empty array and cost will be 0.
2.  Create the handleUpdate function in App.js. Explain [parameters, arguments](https://codeburst.io/parameters-arguments-in-javascript-eb1d8bd0ef04), setState and concatenate
3.  The button is in MenuItem so when we click on the button we need to call the method in App.js. To do this we will need to pass the method to menuItem as a prop and call the prop with onClick
4.  Use the react devtools to see state updating when the button is clicked