## Instructions
To run the project either run `npm start` or `yarn start`.
It has so far pretty much been styled to look best using the mobile device mode of Google Chrome Dev Tools.

## Questions
What would make this process easier in the future?
  - A clearer way of getting the backend running locally

What would you do differently to your implementation if you had more time?
  - Added form field validations
  - Created TextField components that can handle the updating of their own values, as long as their validations.
  - Disable form until all validations have passed.
  - A dedicated typography stylesheet to encapsulate the font size and family styles.
  - Generally slightly more in depth component composition eg a dedicated button component for the form submission.
  - Handled form Success / Error state. (Due to CORS problems and not getting the backend running locally I never got to a stage of getting a successful response from the API)
  - More and better testing

What testing did (or would) you do, and why?
  - Just very basic rendering tests because of lack of time.
  - Would liked to tested that the form is submitted with correct data and can handle Success / Error states

What would I have done differently?
  - If I knew I would have trouble actually submitting the form data, I would have used the time to add nice form field validations.

## Available Scripts

In the project directory, you can run:

### `npm start`

OR

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

OR

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

OR

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
