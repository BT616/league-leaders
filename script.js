fetch('https://americas.api.riotgames.com/lor/ranked/v1/leaderboards?api_key=RGAPI-e42c067f-8ee2-466c-8a42-d55d307eddce')
  .then((response) => response.json())
  .then((data) => console.log(data));
