// Countdown timer
const endDate = new Date();
endDate.setDate(endDate.getDate() + 5);

function updateCountdown() {
    const now = new Date();
    const diff = endDate - now;

    if (diff < 0) {
        document.getElementById("countdown").innerHTML = "Offer expired!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Newsletter popup
window.onload = function() {
    setTimeout(() => {
        document.getElementById("popup").style.display = "flex";
    }, 3000);
};

document.getElementById("closePopup").onclick = function() {
    document.getElementById("popup").style.display = "none";
};

// Dark mode toggle
document.getElementById("toggleDark").onclick = function() {
    document.body.classList.toggle("dark");
};
