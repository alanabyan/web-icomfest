
function handleClick() {
    window.location.href = "/index.html"
}
const footerData = [
    {
        title: "OUR TEAMS",
        icon: "../public/icons/top-right-arrow-footer.svg",
    },
    {
        title: "INSTAGRAM",
        icon: "../public/icons/top-right-arrow-footer.svg",
    },
    {
        title: "LINKEDIN",
        icon: "../public/icons/top-right-arrow-footer.svg",
    },
    {
        title: "YOUTUBE",
        icon: "../public/icons/top-right-arrow-footer.svg",
    },
];

const footerList = document.getElementById("footer");

footerData.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add(
        "flex",
        "flex-col",
        "gap-y-[6px]",
        "w-full",
        "group",
        "px-[90px]"
    );
    card.innerHTML = `
    <div class="flex justify-between items-center w-full">
        <p class="text-[#A5A5A5] font-bold text-[35px] radio group-hover:text-black transition-colors duration-300">${item.title}</p>
        <img
            src="${item.icon}"
            alt="icon"
            class="w-[40px] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-[345deg] transition-all duration-300"
        />
    </div>
    <hr class="bg-[#A5A5A5] group-hover:bg-black h-[2px] w-full transition-colors duration-300" />
    `;
    footerList.appendChild(card);
});

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Data untuk konten scroll
    const timeless = [
        {
            title: "Pengertian",
            description:
                "Kuta Beach is one of Bali’s most iconic tourist destinations.",
        },
        {
            title: "Sejarah",
            description:
                "Sejarah Kuta Beach dimulai sejak tempat ini menjadi desa nelayan sederhana.",
        },
    ];

    timeless.forEach((item, index) => {
        // Membuat elemen card
        const card = document.createElement("div");
        card.classList.add("flex", "flex-col");

        card.innerHTML = `
            div class="flex flex-col">
    <h1 class="text-[#B57442] poppins font-bold text-4xl">${item.title}</h1>
    <p class="font-normal text-xl neue text-white text-justify">
       ${item.description}
    </p>
</div>
`;

        document.querySelector("#content").appendChild(card);

        // Animasi menggunakan GSAP
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: "top center",
                end: "top -20%",
                scrub: true,
                toggleActions: "play none none reverse",
            },
        });

        timeline
            .fromTo(
                card,
                { opacity: 0, y: 100, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out" }
            )
            .to(card, {
                opacity: 0,
                y: -100,
                duration: 1.2,
                ease: "power4.in",
            });
    });

    // Transisi ke section lain
    const lastSection = document.querySelector("section.relative");
    ScrollTrigger.create({
        trigger: "#content",
        start: "bottom center",
        onEnter: () => {
            gsap.to(window, {
                scrollTo: lastSection,
                duration: 1.5,
                ease: "power4.out",
            });
        },
    });
});