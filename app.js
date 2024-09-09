// app.js

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);

            // Check if background sync is supported and register sync
            if ('SyncManager' in window) {
                registration.sync.register('your-sync-tag').then(() => {
                    console.log('Sync registration successful.');
                }).catch(error => {
                    console.error('Sync registration failed:', error);
                });
            } else {
                console.warn('Background Sync is not supported.');
            }
        }).catch(error => {
            console.log('Service Worker registration failed:', error);
        });
    });
}
