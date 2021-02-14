# Frontend Mentor - Dine Website Challenge

![Design preview for the Dine Website Challenge coding challenge](./public/preview.jpg)

## The challenge

The challenge is to build out this 2-page website and get it looking as close to the design as possible. Figma file is provided with style guide.

### Motivation

I've started learning React, and I thought this multipage design is the perfect way to apply what I've learned so far.

### User stories

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- See the correct content for the Family Gatherings, Special Events, and Social Events section when the user clicks each tab
- Receive an error message when the booking form is submitted if:
  - The `Name` or `Email Address` fields are empty. Alert shown would be "This field is required"
  - The `Email Address` is not formatted correctly. Alert shown would be "Please use a valid email address"
  - Any of the `Pick a date` or `Pick a time` fields are empty. Alert shown would be "This field is incomplete"
  - The `Pick a time` fields are between 12am - 8am. Alert shown would be "Invalid time"
- Receive a message for correctly completing the form. Alert shown would be "Success! Your request has been submitted"

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run: `npm start` to run the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learning Outcomes

- The overarching lesson for me in developing the site was project structure. I was unfamiliar with how to access images, and there were several ways to choose from in terms of linking styles to the components. For the images, I eventually used named imports coming from one [js file](./src/assets/index.js). I chose to create a separate style folder utilizing 7-1 for CSS.

- Creating the form and validation logic was the hardest part of the project. Not reaching out to the DOM directly and letting state be maintained by React was a challenge.

- There's a few things to improve that I wasn't able to address before submission:

  - The form jumps with validation

  - Implement the dropdown for the `select` choices as it is in the design files

  - Reset the form upon successful submit

## My profile at Frontendmentor

[emestabillo](https://www.frontendmentor.io/profile/emestabillo)
