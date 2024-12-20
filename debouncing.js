// Debounce function implementation
function debounce(func, delay) {
    let timer;
    return function (...args) {
        const context = this;
        clearTimeout(timer); // Clear previous timer
        timer = setTimeout(() => func.apply(context, args), delay); // Set new timer
    };
}

// Fetch and display results from JSONPlaceholder
const fetchResults = debounce(async (query) => {
    const resultsElement = document.querySelector("#results");
    resultsElement.innerHTML = ""; // Clear previous results

    if (!query.trim()) {
        return; // Exit if query is empty
    }

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`);
        const results = await response.json();

        if (results.length > 0) {
            results.forEach((result) => {
                const li = document.createElement("li");
                li.textContent = result.title;
                resultsElement.appendChild(li);
            });
        } else {
            resultsElement.innerHTML = "<li>No results found</li>";
        }
    } catch (error) {
        console.error("Error fetching results:", error);
        resultsElement.innerHTML = "<li>Error fetching results</li>";
    }
}, 500);

// Add event listener to the input element
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("#search");
    searchInput.addEventListener("input", (e) => {
        fetchResults(e.target.value);
    });
});
