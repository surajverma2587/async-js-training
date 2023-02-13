const URL = "https://api.github.com/users/surajverma2587";

const fetchData = async () => {
  const response = await fetch(URL);

  const data = await response.json();

  console.log(data);
};

fetchData();
