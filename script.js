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

const destination = [...videos]

const timeless = [
  {
    video: "public/videos/video1.mp4",
    title: "TARI KECAK",
    description: 'Tari Kecak is a mesmerizing traditional Balinese performance that combines the power of synchronized chanting with dynamic storytelling. Originating from ancient rituals, the dance dramatizes episodes from the epic Ramayana, particularly the battle of Rama against the demon king Ravana. Unique for its absence of musical instruments, the hypnotic "cak-cak-cak" chant from dozens of performers creates an immersive and spiritual atmosphere.'
  },
  {
    video: "public/videos/video1.mp4",
    title: "TARI KECAK",
    description: 'Tari Kecak is a mesmerizing traditional Balinese performance that combines the power of synchronized chanting with dynamic storytelling. Originating from ancient rituals, the dance dramatizes episodes from the epic Ramayana, particularly the battle of Rama against the demon king Ravana. Unique for its absence of musical instruments, the hypnotic "cak-cak-cak" chant from dozens of performers creates an immersive and spiritual atmosphere.'
  },
  {
    video: "public/videos/video1.mp4",
    title: "TARI KECAK",
    description: 'Tari Kecak is a mesmerizing traditional Balinese performance that combines the power of synchronized chanting with dynamic storytelling. Originating from ancient rituals, the dance dramatizes episodes from the epic Ramayana, particularly the battle of Rama against the demon king Ravana. Unique for its absence of musical instruments, the hypnotic "cak-cak-cak" chant from dozens of performers creates an immersive and spiritual atmosphere.'
  },
  {
    video: "public/videos/video1.mp4",
    title: "TARI KECAK",
    description: 'Tari Kecak is a mesmerizing traditional Balinese performance that combines the power of synchronized chanting with dynamic storytelling. Originating from ancient rituals, the dance dramatizes episodes from the epic Ramayana, particularly the battle of Rama against the demon king Ravana. Unique for its absence of musical instruments, the hypnotic "cak-cak-cak" chant from dozens of performers creates an immersive and spiritual atmosphere.'
  },
]

const carouselData = [
  { id: 1, link: "wayang", title: "Wayang Kulit", imgSrc: "public/wayang.svg" },
  { id: 2, link: "keris", title: "Keris", imgSrc: "public/keris.svg" },
  { id: 3, link: "batik", title: "Batik", imgSrc: "public/batik.svg" },
  { id: 4, link: "gamelan", title: "Gamelan", imgSrc: "public/gamelan.png" }
];

const footerData = [
  {
    title: "OUR TEAMS",
    icon: "public/icons/top-right-arrow-footer.svg",
    link: "https://nevtik.org"
  },
  {
    title: "INSTAGRAM",
    icon: "public/icons/top-right-arrow-footer.svg",
    link: "https://www.instagram.com/nevtikacademy/"
  },
  {
    title: "LINKEDIN",
    icon: "public/icons/top-right-arrow-footer.svg",
    link: "https://www.linkedin.com/company/nevtik/"
  },
  {
    title: "YOUTUBE",
    icon: "public/icons/top-right-arrow-footer.svg",
    link: "https://www.youtube.com/c/NEVTIKAcademy",
  },
]

let currentIndex = 0;
const randomVideo = videos[Math.floor(Math.random() * videos.length)];

document.getElementById("video-background").src = randomVideo.video;
document.getElementById("video-title").textContent = randomVideo.title;
document.getElementById("video-description").textContent = randomVideo.description;

const carousel = document.getElementById("carousel");
const footerList = document.getElementById("footer")
const mainVideo = document.getElementById("main-video");
const smallVideo = document.getElementById("small-video");
const indicatorContainer = document.getElementById("indicator-container");
const videoTitle = document.getElementById("video-title-carousel");
const videoDescription = document.getElementById("video-description-carousel");
const content = document.getElementById("content");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtnLegacy = document.getElementById("prev-btn-legacy");
const nextBtnLegacy = document.getElementById("next-btn-legacy");

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  document.querySelector("#content").style.paddingTop = "50vh";
  document.querySelector("#content").style.paddingBottom = "50vh";

  timeless.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add(
      "flex",
      "items-center",
      "gap-4",
      "rounded-[20px]",
      "p-4",
      "bg-[#131313]",
      "text-white",
      "opacity-0", // Awal transparan
      "translate-y-10", // Awal lebih rendah
      "scale-0.95" // Awal lebih kecil
    );

    if (index % 2 !== 0) {
      card.classList.add("flex-row-reverse");
    }

    card.innerHTML = `
     <div class="flex flex-col lg:flex-row items-start gap-6">
  <!-- Video -->
  <div class="w-full lg:w-[459px] h-[284px] rounded-lg overflow-hidden flex">
    <video class="w-full h-full object-cover" controls>
      <source src="${item.video}" type="video/mp4" />
    </video>
  </div>

  <!-- Vertical Line and Dot -->
  <div class="hidden lg:flex flex-col items-center gap-2">
    <div
      class="w-[36px] h-[36px] bg-[#B57442] rounded-full flex justify-center items-center text-sm text-white font-bold"
    ></div>
    <hr class="h-[249px] w-[3px] bg-white" />
  </div>

  <!-- Text Content -->
  <div class="flex flex-col gap-[4px] relative lg:top-[-5px] text-center lg:text-left">
    <h1 class="text-xl font-bold">${item.title}</h1>
    <hr class="w-[177px] border-[#B57442] border-[1.5px] mx-auto lg:mx-0" />
    <p
      class="text-white font-normal text-base text-justify tracking-wider max-w-full lg:max-w-[453px] w-full mt-[19px]"
    >
      ${item.description}
    </p>
  </div>
</div>

    `;

    document.querySelector("#content").appendChild(card);

    // Timeline untuk animasi kartu
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top center",
        end: "top -20%",
        scrub: true,
        pin: index === timeless.length - 1, // Pin kartu terakhir
        toggleActions: "play none none reverse",
      },
    });

    // Animasi kartu biasa
    timeline
      .fromTo(
        card,
        { opacity: 0, y: 100, scale: 0.95 },
        { opacity: 1, y: 200, scale: 1, delay: 1.5, duration: 1.2, ease: "power4.out" }
      )
      .to(card, {
        opacity: 0,
        y: -100,
        duration: 1.2,
        ease: "power4.in",
      });

    // Animasi zoom-out untuk kartu terakhir
    if (index === timeless.length - 1) {
      timeline
        .to(card, {
          scale: 1.2,
          opacity: 0,
          duration: 1.5,
          ease: "power4.inOut",
        })
        .to(card, { display: "none" }); // Sembunyikan kartu terakhir
    }

    // Kontrol video
    ScrollTrigger.create({
      trigger: card,
      start: "top center",
      end: "top -20%",
      onEnter: () => card.querySelector("video").play(),
      onLeave: () => card.querySelector("video").pause(),
      onLeaveBack: () => card.querySelector("video").pause(),
    });
  });

  // Transisi ke section lain
  const lastSection = document.querySelector("section.relative");
  ScrollTrigger.create({
    trigger: "#content",
    start: "bottom center", // Mulai transisi saat kartu terakhir hampir selesai
    onEnter: () => {
      gsap.to(window, {
        scrollTo: lastSection, // Pindahkan viewport ke section berikutnya
        duration: 1.5,
        ease: "power4.out",
      });
    },
  });
});

footerData.forEach((item) => {
  console.log(item.link);
  const card = document.createElement("a"); // Gunakan <a> sebagai elemen utama
  card.classList.add("flex", "flex-col", "gap-y-[6px]", "w-full", "group", "px-[90px]");
  card.href = item.link; // Atur href langsung ke URL absolut
  card.target = "_blank"; // Buka di tab baru (opsional)
  card.rel = "noopener noreferrer"; // Tambahkan untuk keamanan jika membuka tab baru

  card.innerHTML = `
  <div class="flex justify-between items-center w-full">
    <p class="text-[#A5A5A5] font-bold text-[28px] sm:text-[35px] radio group-hover:text-black transition-colors duration-300">${item.title}</p>
    <img
      src="${item.icon}"
      alt="icon"
      class="w-[30px] sm:w-[40px] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-[345deg] transition-all duration-300"
    />
  </div>
  <hr class="bg-[#A5A5A5] group-hover:bg-black h-[2px] w-full transition-colors duration-300" />
  `;

  footerList.appendChild(card);
});



// Ambil elemen "timeless" sebagai array data


function updateCarousel() {
  carousel.innerHTML = "";


  const visibleSlides = [
    carouselData[currentIndex % carouselData.length],
    carouselData[(currentIndex + 1) % carouselData.length],
    carouselData[(currentIndex + 2) % carouselData.length]
  ];

  visibleSlides.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("flex", "flex-col", "items-center", "gap-y-3", "poppins", "shadow-lg", "w-[303px]", "h-[193px]", "bg-transparent");
    card.setAttribute("data-link", item.link);
    card.innerHTML = `
      <div class="relative w-full h-full group">
        <img src="${item.imgSrc}" alt="${item.title}" class="w-full h-full rounded-[10px] object-cover" />
        <div class="absolute gap-x-[20px] inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-[10px] opacity-0 group-hover:opacity-90 transition-opacity">
          <span class="text-white text-[50px] leading-[60px] neue font-bold uppercase">
            ${item.title.length > 7 ? item.title.substring(0, 7) : item.title}
          </span>
          <img src="public/icons/top-right-arrow.svg" alt="arrow" class="mb-2 w-[16px]" />
        </div>
        <div class="text-center text-white text-xl font-light mt-[12px]">${item.title}</div>
      </div>
    `;

    card.addEventListener("click", () => {
      const link = card.getAttribute("data-link");

      window.location.href = `/detailProduct/${link}.html`;
    })


    carousel.appendChild(card);

  });
}

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
  currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length; // Pindah ke slide sebelumnya
  updateCarousel();
  updateIndicators();
});

nextBtnLegacy.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselData.length; // Pindah ke slide berikutnya
  updateCarousel();
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

updateCarousel();
createIndicators();
updateIndicators();
updateVideos();

const animateText = (text) => {
  const textElement = document.getElementById("scramble-text");
  textElement.textContent = ""; // Pastikan elemen kosong sebelum memulai animasi

  // Buat elemen span untuk setiap karakter teks
  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char; // Gunakan non-breaking space untuk spasi
    textElement.appendChild(span);
  });

  // Animasi fade-in karakter dengan GSAP
  gsap.fromTo(
    "#scramble-text span",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, stagger: 0.05, duration: 1 }
  );
};

// Jalankan animasi dengan teks dari randomVideo
animateText(randomVideo.scrambleText);

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
        markers: false
      }
    }
  )

  gsap.fromTo(
    ".nusantara-locomotion",
    { x: "100%", opacity: 0 }, // Mulai dari luar layar (kanan)
    {
      x: "0%", // Kembali ke posisi default
      opacity: 1,
      duration: 5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".nusantara-locomotion",
        start: "+=500 center", // Animasi dimulai saat elemen terlihat di viewport
        end: "+=500 top", // Berhenti di tengah viewport
        scrub: true,
        markers: false,
      },
    }
  );

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
        markers: false
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
