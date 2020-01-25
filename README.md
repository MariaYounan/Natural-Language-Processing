# Project Name
Natural Language Processing

# Scope
This is a web tool that allows you to run Natural Language Processing (NLP) on articles or blogs found on other websites.

# Before running any script
Please run `npm install` to include all libraries used in the project. Not uploaded with the code as it gives error "too many files"

# Testing
Tests are done using jest, There are test scripts for testing js functions and files using script `npm run test` 
  
There are 2 environments in this project you can run:

- Development
`npm run build-dev`

- Production
`npm run build-prod`
`npm start` 
access the app using 'http://localhost:3001/' as it will be running on port 3001

Service Wworkers is installed and registered for offline access.

# How to use
A single input field form that you should fill with your desired text. the NLP for this entered text will appear below the field after clicking on submit button.
If you submit the form with empty field, an error will appear to fill in the form before submission.











We're ready to go! The API has a lot of different endpoints you can take a look at [here](https://docs.aylien.com/textapi/endpoints/#api-endpoints). And you can see how using the SDK simplifies the requests we need to make. 

I won't provide further examples here, as it's up to you to create the various requests and make sure your server is set up appropriately.

## After the Aylien API

Once you are hooked up to the Aylien API, you are most of the way there! Along with making sure you are following all the requirements in the project rubric in the classroom, here are a few other steps to make sure you take.

- Parse the response body to dynamically fill content on the page.
- Test that the server and form submission work, making sure to also handle error responses if the user input does not match API requirements. 
- Go back to the web pack config and add the setup for service workers.  
- Test that the site is now available even when you stop your local server 

## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.
