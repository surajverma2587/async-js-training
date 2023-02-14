// target the form
const searchForm = document.getElementById("search-form");

// create event handler function
const handleSubmit = async (event) => {
  event.preventDefault();

  // get username from input
  const searchInput = document.getElementById("search-input");
  const username = searchInput.value;

  try {
    // construct URL with username
    const url = `https://api.github.com/users/${username}/repos`;

    // fetch data from URL
    const response = await fetch(url);

    if (response.status !== 200) {
      throw new Error("Something went wrong. Please try again!!");
    }

    const data = await response.json();

    // render repos
    renderRepos(data);
  } catch (error) {
    // handle error
    renderError(error);
  }
};

const renderRepos = (repos) => {
  // log repos
  console.log(repos);

  // map through repos and for each repo build
  /**
   * <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Repo title</h5>
          <a href="#" class="card-link">Repo link</a>
        </div>
      </div>
   */

  // append repo to parent container
};

const renderError = (error) => {
  // log repos
  console.log(error);
  /**
   * <div class="alert alert-danger" role="alert">
        error
      </div>
   */
};

// register the event to the handler function
searchForm.addEventListener("submit", handleSubmit);
