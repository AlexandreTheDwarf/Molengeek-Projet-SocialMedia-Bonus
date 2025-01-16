const apiKey = '';

document.getElementById("channelForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement de la page
    const channelAlias = document.getElementById("channelInput").value.trim();
    if (channelAlias) {
        fetchChannelStats(channelAlias);
    }
});

function fetchChannelStats(channelAlias) {
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${channelAlias}&type=channel&key=${apiKey}`;

    fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length) {
                const channelId = data.items[0].snippet.channelId;
                document.getElementById("channelName").textContent = data.items[0].snippet.title;

                const statsUrl = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;

                return fetch(statsUrl);
            } else {
                throw new Error(`Channel not found: ${channelAlias}`);
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length) {
                const { statistics: { subscriberCount, videoCount, viewCount } } = data.items[0];

                animateNumber("NbrSubscribber", 0, subscriberCount, 3000);
                animateNumber("NbrVideo", 0, videoCount, 3000);
                animateNumber("NbrView", 0, viewCount, 3000);
            }
        })
        .catch(error => {
            console.error('Error fetching channel data:', error);
            document.getElementById("channelName").textContent = "Channel not found";
        });
}

// Fonction d'animation
function animateNumber(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    const range = end - start;
    const startTime = performance.now();

    function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // Proportion du temps écoulé (entre 0 et 1)
        const easeProgress = progress * progress; // Accélération exponentielle

        const current = Math.floor(start + range * easeProgress);
        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            element.textContent = end; // Assure d'atteindre la valeur finale exacte
        }
    }

    requestAnimationFrame(step);
}
