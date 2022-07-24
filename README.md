# React: Slideshow App

## Environment 

- React Version: 18.2.0
- Node Version: ^14.17.3
- Default Port: 3001

## Project Specifications 
The app has one component named Articles. The list of articles to be displayed is already provided in the app.

## The app must have the following functionalities:

## The list of articles is passed to the App component as a prop in the form of an array of objects.
- Each article has the following three properties:
- title: The title of the article [STRING]
- upvotes: The number of upvotes for an article [NUMBER]
- date: The publish date for the article in the format YYYY-MM-DD [STRING]
- By default, the articles should be displayed in the table ordered by the number of upvotes in descending order.
- Clicking on the “Most Upvoted” button should reorder and display the articles by the number of upvotes in descending order.
- Clicking on the “Most Recent” button should reorder and display the articles by date in descending order.
- You can assume that each article has a unique publish date and number of upvotes.
- Your task is to complete the implementation of src/App.js and src/components/Articles.js.

<img src="https://s4.gifyu.com/images/Screen-Recording-2022-07-24-at-1.22.10-PM.gif" alt="sorting.gif"/>
