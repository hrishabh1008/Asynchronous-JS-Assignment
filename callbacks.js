// Simulate a delay using a callback
function simulateDelay(callback) {
    setTimeout(() => {
      callback();
    }, 5000);
  }
  
  // Fetch data from API using a callback
  function fetchData(callback) {
    fetch('https://dummyjson.com/posts')
      .then((response) => response.json())
      .then((data) => {
        callback(data.posts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  
  // Handle button click
  document.getElementById("callbackBtn").addEventListener("click", () => {
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = "Waiting for callback...";
  
    simulateDelay(() => {
      fetchData((posts) => {
        outputDiv.innerHTML = `<h3>Callback executed after 5 seconds</h3>`;
        posts.forEach((post) => {
          const postDiv = document.createElement("div");
          postDiv.textContent = `Title: ${post.title}`;
          outputDiv.appendChild(postDiv);
        });
      });
    });
  });
  