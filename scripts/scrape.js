var axios = require("axios");
var cheerio = require("cheerio");

var scrape = function() {
    return axios.get("https://www.foxnews.com/")
    .then(function(res) {
        const $ = cheerio.load(res.data);
        console.log("scraping now... ");
        
        //creating a variable for articles
        var articles = []
        $(".info").each(function(i, element) {
            var title = $(this)
            .children(".info-header")
            .children(".title")
            .children("a").text();

            var url = $(this)
            .children(".info-header")
            .children(".title")
            .children("a").attr("href");

            var summary = $(this)
            .children(".content")
            .children(".related")
            .children("ul")
            .children(".related-item")
            .children("a").text();


            if (title && url && summary) {
                var dataToAdd = {
                    title: title,
                    url: url,
                    summary: summary
                };
                articles.push(dataToAdd)
            }
        }); 
        console.log(articles)
        return articles;
        
    })
}
module.exports = scrape;