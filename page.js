function loadComponent(url, containerId) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
            return response.text();
        })
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => console.error(`Error loading ${url}:`, error));
}

// Function to dynamically load the head content
function loadHeadContent(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
            return response.text();
        })
        .then(html => {
            // Append the loaded head content to the current page's <head>
            document.head.innerHTML += html;
        })
        .catch(error => console.error(`Error loading head content from ${url}:`, error));
}

// Load the head content dynamically
loadHeadContent('./head.html');

// Load header and footer
loadComponent('./header.html', 'header-container');
loadComponent('./footer.html', 'footer-container');