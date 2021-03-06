const coinDeskService = axios.create({
  baseURL: "http://api.coindesk.com/v1/bpi/historical/close.json"
});

async function getHistoricalData(currency) {
  let result = "";

  await coinDeskService
  .get('', {
    params: {
      currency: currency
    }
  })
  .then( response => {
    result = response.data;
  })
  .catch( error => console.log(`ERROR: ${error}`));

  return result;
}

async function getHistoricalDataByDate(currency, dateA, dateB) {
  let result = "";

  await coinDeskService
  .get('', {
    params: {
      start: dateA,
      end: dateB,
      currency: currency
    }
  })
  .then( response => {
    result = response.data;
  })
  .catch( error => console.log(`ERROR: ${error}`));

  return result;
}