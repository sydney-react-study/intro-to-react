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
8.  [Create App component](03.md) from scratch - import react, create class, render, return, export default etc. Explain JSX and mention it should be wrapped in an enclosing tag

## Create Header component

1.  Make class component and later when we go over state we can make it a stateless functional component
2.  Add the Header into App.js