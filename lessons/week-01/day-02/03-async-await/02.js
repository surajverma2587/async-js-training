const URL = "https://api.github.com/users/qwertyuiop";

const fetchData = async () => {
  try {
    const response = await fetch(URL);

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    } else {
      const data = await response.json();

      console.log(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();
