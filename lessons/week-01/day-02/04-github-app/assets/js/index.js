// target the form
const searchForm = document.getElementById("search-form");

// target container for repos
const githubRepos = document.getElementById("github-repos");

// create event handler function
const handleSubmit = async (event) => {
  event.preventDefault();

  // get username from input
  const searchInput = document.getElementById("search-input");
  const username = searchInput.value;

  // get the error element
  const errorElement = document.getElementById("search-input-error");

  // handle error
  if (!username) {
    const errorMessage = "Please enter a valid GitHub username.";

    errorElement.innerHTML = errorMessage;
    githubRepos.innerHTML = "";
  } else {
    try {
      // clear any previous errors
      errorElement.innerHTML = "";

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
  }
};

const renderRepos = (repos) => {
  // check if repos is empty
  if (repos.length === 0) {
    // render no repos
    const warningComponent = `<div class="alert alert-warning" role="alert">
      No repositories found. Please try a different username.
    </div>`;

    githubRepos.innerHTML = warningComponent;
  } else {
    // construct repo callback function
    const constructRepo = (repo) => {
      // create a repo component
      const repoComponent = `<div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${repo.name}</h5>
        <a href="${repo.html_url}" class="card-link">Repo link</a>
      </div>
    </div>`;

      return repoComponent;
    };

    // map through repos and for each repo build
    const reposToRender = repos.map(constructRepo).join("");

    // append repo to parent container
    githubRepos.innerHTML = reposToRender;
  }
};

const renderError = (error) => {
  const errorComponent = `<div class="alert alert-danger" role="alert">
    ${error.message}
  </div>`;

  githubRepos.innerHTML = errorComponent;
};

// register the event to the handler function
searchForm.addEventListener("submit", handleSubmit);
