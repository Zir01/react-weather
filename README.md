# How to run this weather app

Create an **.env** file in the root of the application with the following environment variables:

    REACT_APP_OPEN_WEATHER_URL=https://api.openweathermap.org/data/2.5/weather
    REACT_APP_OPEN_WEATHER_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

You can grab an **API_KEY** by registering for an account at: https://openweathermap.org/

To install and run the local development server execute the following commands:
    
    npm i
    npm start

Access the app at: http://localhost:3000


# Deployment options

To build the app for production purposes.

    npm run build

Files are output to the build folder