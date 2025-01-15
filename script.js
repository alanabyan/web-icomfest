// Data video
const videos = [
  {
    video: "public/videos/video1.mp4", // Path video relatif dari folder public
    title: "Pantai Kuta, Bali",
    description: "Pantai Anyer terletak di sumatra barat , terkenal karena lautan yang bagus indah asri dan dikenal sebagai surga dunia",
    scrambleText: "Wonderful Indonesia"
  },
  {
    video: "public/videos/video2.mp4", // Path video relatif dari folder public
    title: "Danau Toba, Sumatera Utara",
    description: "Salah satu danau vulkanik terbesar di dunia.",
    scrambleText: "A Natural Beauty"
  },
  {
    video: "public/videos/video3.mp4", // Path video relatif dari folder public
    title: "Candi Borobudur, Jawa Tengah",
    description: "Salah satu keajaiban dunia yang penuh sejarah.",
    scrambleText: "Cultural Heritage"
  },
];

let currentIndex = 0;

// Pilih video acak
const randomVideo = videos[Math.floor(Math.random() * videos.length)];

// Masukkan data ke elemen
document.getElementById("video-background").src = randomVideo.video;
document.getElementById("video-title").textContent = randomVideo.title;
document.getElementById("video-description").textContent = randomVideo.description;
const mainVideo = document.getElementById("main-video");
const smallVideo = document.getElementById("small-video");
const videoTitle = document.getElementById("video-title-carousel");
const videoDescription = document.getElementById("video-description-carousel");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateVideos() {
  mainVideo.src = videos[currentIndex].video;
  videoTitle.textContent = videos[currentIndex].title;
  videoDescription.textContent = videos[currentIndex].description;

  const nextIndex = (currentIndex + 1) % videos.length;
  smallVideo.src = videos[nextIndex].video;
}

// Event Listeners
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  updateVideos();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % videos.length;
  updateVideos();
});

// Initialize
updateVideos();

// Scramble text function
const scrambleText = (text, duration = 2) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let scrambledArray = text.split("").map((char) =>
    char.trim() ? chars[Math.floor(Math.random() * chars.length)] : char
  );
  let scrambledText = scrambledArray.join("");
  document.getElementById("scramble-text").textContent = scrambledText;

  const steps = 10;
  const interval = duration / steps;
  let counter = 0;

  const intervalId = setInterval(() => {
    scrambledArray = scrambledArray.map((char) =>
      char.trim() ? chars[Math.floor(Math.random() * chars.length)] : char
    );
    scrambledText = scrambledArray.join("");
    document.getElementById("scramble-text").textContent = scrambledText;

    counter++;

    if (counter >= steps) {
      clearInterval(intervalId);
      setTimeout(() => {
        document.getElementById("scramble-text").textContent = text;
      }, 300);
    }
  }, interval * 1000);
};

scrambleText(randomVideo.scrambleText, 2);

// GSAP Animations
document.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(
    ".line-animation",
    { x: "-100%", opacity: 0 },
    { x: "0%", opacity: 1, duration: 1.5, ease: "power2.out" }
  );

  gsap.fromTo(
    ".wonderful-text",
    { y: "-50%", opacity: 0 },
    { y: "0%", opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 }
  );

  gsap.fromTo(
    ".pantai-text",
    { y: "-50%", opacity: 0 },
    { y: "0%", opacity: 1, duration: 1.5, ease: "power2.out", delay: 1 }
  );
});

// Pastikan GSAP dan ScrollSmoother sudah tersedia
document.addEventListener("DOMContentLoaded", () => {
  // Register plugin ScrollSmoother
  gsap.registerPlugin(ScrollSmoother);

  // Create ScrollSmoother for the entire page
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper", // Wrapper untuk seluruh halaman
    content: "#smooth-content", // Konten utama halaman
    smooth: 5.5,               // Kecepatan smoothing (semakin tinggi, semakin lambat)
    normalizeScroll: true,     // Normalisasi scroll untuk semua perangkat
    effects: true,             // Aktifkan efek parallax global
  });
});


  document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
  ".stretch",
  { scaleX: 1 },
  {
    scaleX: 2, // Final state (to)
    scrollTrigger: {
      trigger: ".stretch", // Element to trigger animation
      start: "top bottom", // Start when `.stretch` top hits viewport bottom
      end: "top center", // End when `.stretch` top hits viewport center
      scrub: true, // Smoothly map scrolling to animation
      markers: true, // Show debugging markers (optional)
    },
    transformOrigin: "left center", // Expand from left
    ease: "none", // Linear progression
  },
);
});


