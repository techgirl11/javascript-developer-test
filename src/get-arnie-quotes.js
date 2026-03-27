const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  const quoteResponse = await Promise.all(urls.map((url) => httpGet(url)));

  return quoteResponse.map((result) => {
    if (result.status === 200) {
      return { "Arnie Quote": JSON.parse(result.body).message };
    } else {
      return { FAILURE: JSON.parse(result.body).message };
    }
  });
};

module.exports = {
  getArnieQuotes,
};
