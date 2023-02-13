const getResponse = (response) => {
  const data = response.json();
  return data;
};

const displayData = (data) => {
  console.log(data);
};

const displayError = (error) => {
  console.log(error);
};

const URL = "https://api.github.com/users/surajverma2587";

const getDataFromServer1 = fetch(URL);

getDataFromServer1.then(getResponse).then(displayData).catch(displayError);

console.log("End of app");
