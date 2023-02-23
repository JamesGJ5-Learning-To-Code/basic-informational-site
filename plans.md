# Suggestions from TOP:

1. Don't worry too much about the content of each page
2. node.js server file should be index.js
3. Add to index.js the code needed to serve the right page according to the url:
    1. localhost:8080 should take users to index.html
    2. localhost:8080/about should take users to about.html
    3. localhost:8080/contact-me should take users to contact-me.html
    4. 404.html should display any time the user tries to go to a page not listed above

# My plans:

1. DONE Fill index.html with relevant content
2. DONE Fill about.html with relevant content
3. DONE Fill contact-me.html with relevant content
4. DONE Fill 404.html with relevant content
5. DONE Plan out index.js:

    1. DONE See https://www.w3schools.com/nodejs/nodejs_http.asp for req.url; this will allow 
    us to check if the part of the request after the domain name IS "/", "/about" or 
    "/contact-me". Not going to use a regular expression to check this, going to check 
    for an equality instead because queries etc. won't be accepted.

    2. DONE See https://www.w3schools.com/nodejs/nodejs_filesystem.asp for "Read Files": going 
    to do the check above and, based on what is found, write the contents of one of 
    home.html, about.html, contact-me.html and 404.html to the result, then return res.end().

    3. DONE Going to listen on port 8080.

6. DONE Complete index.js
7. Try out the debugger with this application as in https://www.youtube.com/watch?v=2oFKNL7vYV8
8. Try out the Chrome DevTools debugger with this application
