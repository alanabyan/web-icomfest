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

const destination = [
  {
    video: "public/videos/video1.mp4", // Path video relatif dari folder public
    title: "Pantai Kuta, Bali",
    description: "Kuta Beach is one of Bali’s most iconic tourist destinations, renowned for its soft white sand, perfect waves for surfing, and stunning sunsets. Located just minutes from Ngurah Rai Airport, Kuta is a haven for travelers seeking a complete tropical experience.",
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

const mapLinks = [
"  https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63098.133649589945!2d115.13033313606121!3d-8.726321728682041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246bc2ab70d43%3A0x82feaae12f4ab48e!2sPantai%20Kuta!5e0!3m2!1sid!2sid!4v1736946653072!5m2!1sid!2sid",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15934.500590623474!2d99.0781766!3d2.5780881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30316531afad2557%3A0x5f677a35dd5c0d03!2sDanau%20Toba!5e0!3m2!1sen!2sid!4v1700000000001!5m2!1sen!2sid",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15869.26015088934!2d105.8837856!3d-6.08819205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4186aeccb6c0f1%3A0x1f555b24c077b26f!2sPantai%20Anyer!5e0!3m2!1sid!2sid!4v1736945516634!5m2!1sid!2sid",
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
const indicatorContainer = document.getElementById("indicator-container");

function createIndicators() {
  indicatorContainer.innerHTML = ""; // Kosongkan indikator lama
  destination.forEach((_, index) => {
    const indicator = document.createElement("div");
    indicator.className = "indicator";
    if (index === currentIndex) indicator.classList.add("active");
    indicatorContainer.appendChild(indicator);
  });
}

function updateIndicators() {
  document.querySelectorAll(".indicator").forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

function updateVideos() {
  mainVideo.src = destination[currentIndex].video;
  videoTitle.textContent = destination[currentIndex].title;
  videoDescription.textContent = destination[currentIndex].description;

  const smallMap = document.getElementById("small-map");
  smallMap.innerHTML = `<iframe 
    src="${mapLinks[currentIndex]}" 
    width="261" 
    height="147" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>`;
}

// Event Listeners
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  updateVideos();
  updateIndicators();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % videos.length;
  updateVideos();
  updateIndicators();
});

// Initialize
createIndicators();
updateIndicators(); 
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
    }
  );
});
