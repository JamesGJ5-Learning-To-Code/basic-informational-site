# Suggestions from TOP:

1. Rewrite this site using express
2. All that should be necessary:
    1. One app.js file
    2. A few app.get()s


# My plans:

1. DONE Rename index.js to app.js

2. DONE Install express as is done under the "Using npm" heading at https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment#using_npm (Express Application Generator would be overkill so won't use it). Ensure "main" in the package.json is "app.js"

3. Rewrite app.js:
    1. DONE Initialise the express application in a constant called app
    2. DONE Initialise a port constant as "3000"
    3. DONE Write an app.get for "/", using res.sendFile to send index.html accordingly
        - See https://www.geeksforgeeks.org/express-js-res-sendfile-function/ and https://www.digitalocean.com/community/tutorials/use-expressjs-to-deliver-html-files for sendFile
    4. DONE Write an app.get for "/about", using res.sendFile to send about.html accordingly
    5. DONE Write an app.get for "/contact-me", using res.sendFile to send contact-me.html accordingly
    6. DONE Write an app.get for "/404", using res.sendFile to send 404.html accordingly. Then 
    write an app.get for '*', after all of the previous routes, that res.redirects to 
    "/404", like a default. See https://stackoverflow.com/questions/22673218/default-route-in-express-js
    7. DONE Write a TODO to replace the above with proper routing and 404 status codes etc.
    8. Write a TODO to implement error-handling


4. Update the links in the html files accordingly
