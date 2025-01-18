const videos = [
  {
    video: "public/videos/video1.mp4",
    title: "Pantai Kuta, Bali, Indonesia",
    description: "Pantai Anyer terletak di sumatra barat, terkenal karena lautan yang bagus indah asri dan dikenal sebagai surga dunia",
    scrambleText: "Wonderful Indonesia"
  },
  {
    video: "public/videos/video2.mp4",
    title: "Danau Toba, Sumatera Utara",
    description: "Salah satu danau vulkanik terbesar di dunia.",
    scrambleText: "A Natural Beauty"
  },
  {
    video: "public/videos/video3.mp4",
    title: "Candi Borobudur, Jawa Tengah",
    description: "Salah satu keajaiban dunia yang penuh sejarah.",
    scrambleText: "Cultural Heritage"
  }
];

const destination = [
  {
    video: "public/videos/video1.mp4",
    title: "Pantai Kuta, Bali, Indonesia",
    description: "Kuta Beach is one of Bali’s most iconic tourist destinations, renowned for its soft white sand, perfect waves for surfing, and stunning sunsets. Located just minutes from Ngurah Rai Airport, Kuta is a haven for travelers seeking a complete tropical experience.",
    scrambleText: "Wonderful Indonesia"
  },
  {
    video: "public/videos/video2.mp4",
    title: "Danau Toba, Sumatera Utara",
    description: "Salah satu danau vulkanik terbesar di dunia.",
    scrambleText: "A Natural Beauty"
  },
  {
    video: "public/videos/video3.mp4",
    title: "Candi Borobudur, Jawa Tengah",
    description: "Salah satu keajaiban dunia yang penuh sejarah.",
    scrambleText: "Cultural Heritage"
  }
];

const mapLinks = [
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63098.133649589945!2d115.13033313606121!3d-8.726321728682041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246bc2ab70d43%3A0x82feaae12f4ab48e!2sPantai%20Kuta!5e0!3m2!1sid!2sid!4v1736946653072!5m2!1sid!2sid",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15934.500590623474!2d99.0781766!3d2.5780881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30316531afad2557%3A0x5f677a35dd5c0d03!2sDanau%20Toba!5e0!3m2!1sen!2sid!4v1700000000001!5m2!1sen!2sid",
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15869.26015088934!2d105.8837856!3d-6.08819205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4186aeccb6c0f1%3A0x1f555b24c077b26f!2sPantai%20Anyer!5e0!3m2!1sid!2sid!4v1736945516634!5m2!1sid!2sid"
];

const carouselData = [
  { title: "Wayang Kulit", imgSrc: "public/wayang.svg" },
  { title: "Keris", imgSrc: "public/keris.svg" },
  { title: "Batik", imgSrc: "public/batik.svg" },
  { title: "Gamelan", imgSrc: "public/gamelan.png" }
];

let currentIndex = 0;
const randomVideo = videos[Math.floor(Math.random() * videos.length)];

document.getElementById("video-background").src = randomVideo.video;
document.getElementById("video-title").textContent = randomVideo.title;
document.getElementById("video-description").textContent = randomVideo.description;

const carousel = document.getElementById("carousel");
const mainVideo = document.getElementById("main-video");
const smallVideo = document.getElementById("small-video");
const indicatorContainer = document.getElementById("indicator-container");
const videoTitle = document.getElementById("video-title-carousel");
const videoDescription = document.getElementById("video-description-carousel");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtnLegacy = document.getElementById("prev-btn-legacy");
const nextBtnLegacy = document.getElementById("next-btn-legacy");

const visibleSlides = [
  carouselData[currentIndex % carouselData.length],
  carouselData[(currentIndex + 1) % carouselData.length],
  carouselData[(currentIndex + 2) % carouselData.length]
];

visibleSlides.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("flex", "flex-col", "items-center", "gap-y-3", "poppins", "shadow-lg", "w-[303px]", "h-[193px]", "bg-transparent");
  card.innerHTML = `
    <img src="${item.imgSrc}" alt="${item.title}" class="w-full rounded-[10px] object-cover" />
    <div class="text-center text-white text-xl font-light">${item.title}</div>
  `;
  carousel.appendChild(card);
});

function createIndicators() {
  indicatorContainer.innerHTML = "";
  carouselData.forEach((_, index) => {
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
  videoDescription.textContent = destination[currentIndex].description
}

prevBtnLegacy.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
  updateIndicators();
});

nextBtnLegacy.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselData.length;
  updateIndicators();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  updateVideos();
  // updateIndicators();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % videos.length;
  updateVideos();
  // updateIndicators();
});

createIndicators();
updateIndicators();
updateVideos();

const scrambleText = (text, duration = 2) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let scrambledArray = text.split("").map((char) => (char.trim() ? chars[Math.floor(Math.random() * chars.length)] : char));
  let scrambledText = scrambledArray.join("");
  document.getElementById("scramble-text").textContent = scrambledText;
  const steps = 10;
  const interval = duration / steps;
  let counter = 0;

  const intervalId = setInterval(() => {
    scrambledArray = scrambledArray.map((char) => (char.trim() ? chars[Math.floor(Math.random() * chars.length)] : char));
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

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollSmoother);
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 5.5,
    normalizeScroll: true,
    effects: true
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".wonderful-locomotion",
    { x: "-100%", opacity: 0 },
    {
      x: "0%",
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".wonderful-locomotion",
        start: "top bottom",
        end: "top top",
        scrub: true,
        markers: true
      }
    }
  )

  gsap.fromTo(
    ".nusantara-locomotion",
    { x: "100%", opacity: 0 },
    {
      x: "0%",
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".nusantara-locomotion",
        start: "+=500 center",
        end: "+=500 top",
        scrub: true,
        markers: true
      }
    }
  )

  gsap.fromTo(
    ".stretch",
    { scaleX: 0.5 },
    {
      scaleX: 1.5,
      scrollTrigger: {
        trigger: ".stretch",
        start: "top bottom",
        end: "top top",
        scrub: true,
        markers: true
      },
      transformOrigin: "left center",
      ease: "none"
    }
  );
});


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#smooth-wrapper"),
  smooth: true,
  multiplier: 1,
});

// Sinkronisasi dengan GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.scrollerProxy("#smooth-wrapper", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("#smooth-wrapper").style.transform
    ? "transform"
    : "fixed",
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// Animasi Tulisan Bergerak Horizontal
gsap.to(".moving-text", {
  scrollTrigger: {
    trigger: ".text-animation-container",
    scroller: "#smooth-wrapper",
    scrub: 1,
    start: "top center",
    end: "bottom top",
  },
  x: "100%", // Gerak ke kanan
  ease: "none",
});

// Animasi SDM Memenuhi Layar
gsap.to("#smd-container", {
  scrollTrigger: {
    trigger: "#smd-container",
    scroller: "#smooth-wrapper",
    scrub: 1,
    start: "top bottom",
    end: "top top",
  },
  width: "100%",
  ease: "power2.inOut",
});