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

// Load header and footer
loadComponent('./header.html', 'header-container');
loadComponent('./footer.html', 'footer-container');