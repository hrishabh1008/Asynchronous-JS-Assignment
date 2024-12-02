// Function to fetch data with async/await
async function fetchDataWithAsyncAwait() {
    const outputDiv = document.getElementById("output");
    try {
      outputDiv.textContent = "Loading...";
      const response = await fetch('https://dummyjson.com/posts');
  
      // Simulate a network delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
  
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
  
      outputDiv.textContent = "Data fetched successfully:";
      data.posts.forEach((post) => {
        const postDiv = document.createElement("div");
        postDiv.textContent = `Title: ${post.title}`;
        outputDiv.appendChild(postDiv);
      });
    } catch (error) {
      outputDiv.textContent = `Error: ${error.message}`;
    }
  }
  
  // Handle button click
  document.getElementById("asyncAwaitBtn").addEventListener("click", fetchDataWithAsyncAwait);
  