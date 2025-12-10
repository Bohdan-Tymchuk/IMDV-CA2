(() => {
    const focusEl = document.getElementById('hero-focus');
    const focusTopics = [
        'Blazor WebAssembly on Azure',
        'Bootstrap-driven UI systems',
        'accessible, responsive layouts',
        'practical cloud-first workflows'
    ];
    let focusIndex = 0;

    const rotateFocus = () => {
        if (!focusEl) return;
        focusIndex = (focusIndex + 1) % focusTopics.length;
        focusEl.textContent = focusTopics[focusIndex];
    };

    if (focusEl) {
        setInterval(rotateFocus, 3200);
    }

    window.copyToClipboard = function(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };
})();