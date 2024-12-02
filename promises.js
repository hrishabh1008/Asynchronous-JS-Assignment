// Function to fetch data with a Promise
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject("Operation timed out");
      }, 5000);
  
      fetch('https://dummyjson.com/posts')
        .then((response) => {
          clearTimeout(timeout); // Clear the timeout if the fetch succeeds
          return response.json();
        })
        .then((data) => resolve(data.posts))
        .catch((error) => reject(`Error fetching data: ${error.message}`));
    });
  }
  
  // Handle button click
  document.getElementById("promiseBtn").addEventListener("click", () => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = "Loading...";
  
    fetchDataWithPromise()
      .then((posts) => {
        outputDiv.textContent = "Data fetched successfully:";
        posts.forEach((post) => {
          const postDiv = document.createElement("div");
          postDiv.textContent = `Title: ${post.title}`;
          outputDiv.appendChild(postDiv);
        });
      })
      .catch((error) => {
        outputDiv.textContent = `Error: ${error}`;
      });
  });
  