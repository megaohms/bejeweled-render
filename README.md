# Bejeweled Render

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This small rendering app was designed to simulate a Bejeweled game in which there are no 'given' sequences. The rendered app should not have any 3 consecutive 'jewels' of the same color in the horizontal and vertical directions.

Start the app and load the page to see a rendered, valid grid. Reload the page to see a new one.

## Getting started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

## Thoughts for discussion
- 'Walking-thru' grid, comparing forward, backward, upward and downward; always by 2
- Mapping vs iterating and replacing
- `isInvalid` vs `isValid` naming conventions
- testing logic for validating neighbors