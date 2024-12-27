fetch('./header.html')
    .then(response => {
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        return response.text();
    })
    .then(html => {
        document.getElementById('header-container').innerHTML = html;
    })
    .catch(error => console.error('Error loading the header:', error));