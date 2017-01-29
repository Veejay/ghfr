let cheerio = require('cheerio');
let jsonframe = require('jsonframe-cheerio');

let $ = cheerio.load('https://www.growthhacking.fr');
jsonframe($); 																// initializes the plugin

var frame = {
    "post": { 																// setting the parent item as "companies"
        "selector": ".tbody", 												// defines the elements to search for
        "data": [{
            "name": ".title",
            "description": "",
            "url": {
                "selector": ".title",
                "attr": "href",
            },
        }] 																	// "data": [{}] defines a list of items
    },
};

var postsList = $('.body').scrape(frame);
console.log(postsList); 												// Output the data in the terminal