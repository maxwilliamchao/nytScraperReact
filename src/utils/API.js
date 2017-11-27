import axios from 'axios';
import authKeys from "./authKeys";

const Key = authKeys["api-key"];

export default {
  getArticles: (search, startDate, endDate) => {
    return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${Key}&page=1&q=${search}&start_date=${startDate}}0101&end_date=${endDate}0101`).then(function(results) {
  //     console.log("Axios Results", results.data.response);
  //     return results.data.response;
  //   });
  //     }
  // getArticles('sports', 2016, 2017).then((res) => {
    const articles = results.data.response.docs;
    const scrapedArticles = [];

    articles.forEach((abc) => {
      let art = {
      title: abc.snippet,
      link: abc.web_url,
      publish:abc.pub_date
    }
    scrapedArticles.push(art);
    })
      // res.json(art);
      return scrapedArticles
      // console.log(scrapedArticles);
    });
  }
}





// runQuery: function(term, start, end) {

//     // Adjust to get search terms in proper format
//     var formattedTerm = term.trim();
//     var formattedStart = start.trim() + "0101";
//     var formattedEnd = end.trim() + "1231";


//     console.log("Query Run");
//     // Run a query using Axios. Then return the results as an object with an array.
//     // See the Axios documentation for details on how we structured this with the params.
//     return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
//       params: {
//         "api-key": APIKey,
//         "q": formattedTerm,
//         "begin_date": formattedStart,
//         "end_date": formattedEnd
//       }
//     })
//     .then(function(results) {
//       console.log("Axios Results", results.data.response);
//       return results.data.response;
//     });
//   }






















//       .then(function (res) {
//         const articles = res.data.response.docs;
//         const scrapedArticles = [];

//         articles.forEach(function(abc) {
//           let art = {
//           title: abc.snippet,
//           link: abc.web_url,
//           publish:abc.pub_date
//         };
//         scrapedArticles.push(art);
//         });
//       res.json(art);
//     });
//   };
// };