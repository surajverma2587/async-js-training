const displayData = (response) => {
  console.log(response);
};

const displayError = (error) => {
  console.log(error);
};

const URL = "https://api.github.com/users/surajverma2587";

const getDataFromServer = fetch(URL);

getDataFromServer.then(displayData).catch(displayError);

console.log("End of app");
