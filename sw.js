// sw.js

self.addEventListener('install', event => {
    console.log('Service Worker installing.');
    // Perform install steps, such as caching assets
});

self.addEventListener('activate', event => {
    console.log('Service Worker activating.');
    // Perform activation steps, such as clearing old caches
});

self.addEventListener('sync', event => {
    if (event.tag === 'your-sync-tag') {
        console.log('Sync event detected');
        event.waitUntil(
            // Perform sync actions here, such as sending data to the server
            fetch('/sync-endpoint', {
                method: 'POST',
                body: JSON.stringify({ /* Your data */ }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            }).then(data => {
                console.log('Sync completed successfully:', data);
            }).catch(error => {
                console.error('Sync failed:', error);
            })
        );
    }
});
