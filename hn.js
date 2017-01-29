let cheerio = require('cheerio');
let jsonframe = require('jsonframe-cheerio');

let $ = cheerio.load('https://news.ycombinator.com');
jsonframe($); 												// initializes the plugin

var frame = {
	"companies": {                                          // setting the parent item as "companies"
		"selector": ".storylink",                           // defines the elements to search for
        "data": [{

			console.log('yolo'),
        }]                                         			// "data": [{}] defines a list of items
	}
};

var companiesList = $('.list.items').scrape(frame);
console.log(companiesList);                                 // Output the data in the terminal