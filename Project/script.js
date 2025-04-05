window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let navLinks = document.querySelectorAll("nav ul li a");

    if (window.scrollY > 50) {
        header.style.background = "#1a263ea8"; /* Solid black when scrolled */
    } else {
        header.style.background = "rgba(0, 0, 0, 0)"; /* Transparent when at top */
    }
});

function openModal(videoId) {
    let modal = document.getElementById("videoModal");
    let videoElement = document.getElementById("modalVideo");

    let videoSrc = {
        "video1": "video/game.mp4",
        "video2": "video/wedding.mp4",
        "video3": "video/documentary.mp4",
        "video4": "video/anime.mp4",
        "video5": "video/ecommerce.mp4",
        "video6": "video/long.mp4",
        "video7": "video/ytshorts.mp4",
        "video8": "video/sport.mp4",
        "video9": "video/product.mp4"
    };

    let videoText = {
        "video1": "Watch our best gaming videos with cinematic effects!",
        "video2": "Capture the best moments of your special day.",
        "video3": "Explore the world through compelling documentaries.",
        "video4": "High-quality anime video edits and AMVs.",
        "video5": "Boost your business with professional eCommerce ads.",
        "video6": "Long-form videos for deep content.",
        "video7": "Engaging YouTube Shorts for viral content.",
        "video8": "Dynamic sports edits to capture the thrill.",
        "video9": "Professional product advertisements for marketing."
    };

    if (videoSrc[videoId]) {
        videoElement.src = videoSrc[videoId];
        document.getElementById("modalText").innerText = videoText[videoId];
        modal.style.display = "flex";
    }
}

function closeModal() {
    let modal = document.getElementById("videoModal");
    let videoElement = document.getElementById("modalVideo");

    modal.style.display = "none";
    videoElement.pause(); // Stop video playback when closing
    videoElement.src = ""; // Reset video source to prevent looping issues
}
//responsive
function toggleMenu() {
    let navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
}
// ✅ Close menu when clicking a link
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        const nav = document.querySelector("nav ul");
        nav.classList.remove("active"); // Close menu
    });
});

//submit contact data

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    var form = new FormData(this);
    fetch("https://script.google.com/macros/s/AKfycbwrDEfxDdzC1JT8ucqRSm30cW92v2HgywmhshAUX9p47hKZUhOmDL_vsqoEkPAZAlZE/exec", {
        method: "POST",
        body: form
    })
        .then(response => response.text())
        .then(data => {
            alert("Form submitted successfully!");
            this.reset();  // Clears the form fields after submission
        })
        .catch(error => console.error("Error!", error.message));
});
