//section function hamburger menu
const menu = document.querySelector(".mobile-menu");
const hamburger = document.querySelector(".hamburger");
const menuItems = document.querySelectorAll(".menuItem");

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
});

function toggleMenu() {
  if (menu.classList.contains("translate-x-full")) {
    menu.classList.remove("translate-x-full");
    menu.classList.add("translate-x-0");
  } else {
    menu.classList.add("translate-x-full");
    menu.classList.remove("translate-x-0");
  }
}

function smoothScroll(event) {
  // event.preventDefault();
  menu.classList.add("translate-x-full");
  menu.classList.remove("translate-x-0");

  hamburger.classList.remove("active");

  const targetId = event.currentTarget.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  const offsetPosition = targetElement.offsetTop - 1;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", smoothScroll);
});

//section button back to hero
const backToTopButton = document.getElementById("backToTop");
const heroSection = document.querySelector("section");

// Fungsi that show button if melewati hero section
function handleScroll() {
  const heroBottom = heroSection.getBoundingClientRect().bottom;
  console.log(">>>>", heroBottom);

  if (window.scrollY > heroBottom) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
}

window.addEventListener("scroll", handleScroll);

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//section function card
const techStack = [
  {
    name: "HTML",
    imgSrc: "public/assets/svg/html_svg.svg",
    color: "orange-300",
  },
  { name: "CSS", imgSrc: "public/assets/svg/css_svg.svg", color: "blue-300" },
  {
    name: "JavaScript",
    imgSrc: "public/assets/svg/javascript_svg.svg",
    color: "yellow-200",
  },
  {
    name: "TypeScript",
    imgSrc: "public/assets/svg/typescript_svg.svg",
    color: "blue-300",
  },
  {
    name: "Bootstrap",
    imgSrc: "public/assets/svg/bootstrap_svg.svg",
    color: "purple-300",
  },
  {
    name: "Tailwind",
    imgSrc: "public/assets/svg/tailwind_svg.svg",
    color: "teal-100",
  },
  {
    name: "Sass",
    imgSrc: "public/assets/svg/sass_svg.svg",
    color: "pink-300",
  },
  {
    name: "Github",
    imgSrc: "public/assets/svg/github_svg.svg",
    color: "slate-400",
  },
  {
    name: "Gitlab",
    imgSrc: "public/assets/svg/gitlab_svg.svg",
    color: "orange-500",
  },
  {
    name: "React",
    imgSrc: "public/assets/svg/react_svg.svg",
    color: "sky-200",
  },
  {
    name: "Node Js",
    imgSrc: "public/assets/svg/nodejs_svg.svg",
    color: "green-200",
  },
  {
    name: "Express",
    imgSrc: "public/assets/svg/express_svg.svg",
    color: "slate-300",
  },
  {
    name: "NestJS",
    imgSrc: "public/assets/svg/nestjs_svg.svg",
    color: "red-300",
  },
  {
    name: "MySql",
    imgSrc: "public/assets/svg/mysql_svg.svg",
    color: "slate-100",
  },
  {
    name: "postgresql",
    imgSrc: "public/assets/svg/postgresql_svg.svg",
    color: "blue-400",
  },
];

const techStackContainer = document.getElementById("tech-stack");

techStack.forEach((tech) => {
  const techCard = document.createElement("div");
  techCard.classList.add(
    "flex",
    "justify-between",
    "items-center",
    `bg-${tech.color}`,
    "p-2",
    "w-[130px]",
    "border",
    "border-black",
    "rounded-lg",
    "max-w-[130px]",
    "h-8",
    "lg:h-10"
  );

  techCard.innerHTML = `
    <img src="${tech.imgSrc}" alt="${tech.name}_svg" class="h-6" />
    <span>${tech.name}</span>
  `;

  techStackContainer.appendChild(techCard);
});

// section function accordion
// array of object for job
const jobDatas = [
  {
    img: "public/assets/pics/logo-phincon.png",
    title: "Front end Developer",
    achievements: [
      "Created a CRM (Customer Relationship Management) application tailored for a finance company.",
      "Successfully integrated 10 critical feature APIs into the application.",
      "Completed 4 unit testing, achieving at least 85% test coverage for each.",
      "Worked closely with UI/UX designers, backend developers, and business analysts, employing agile practices and using Jira for project management.",
      "Addressed and resolved software bugs and issues to ensure the application’s functionality remained seamless.",
      "Applied the Atomic Design methodology to implement a system design focused on reusable and responsive web components.",
    ],
  },
];

const jobContainer = document.getElementById("job-container");

// mapping jobDatas data intu div
jobDatas.forEach((jobs) => {
  const jobElement = document.createElement("div");
  jobElement.innerHTML = `
    <div class="accordion w-full flex bg-[#0B7F55] text-white justify-between items-center p-3 transition ease-in-out delay-150 rounded-xl">
      <img src="${jobs.img}" alt="logo" width="150"/>
      <span>${jobs.title}</span>
    </div>
    <div class="panel mx-2 p-0 my-1 px-4 rounded-lg bg-[#D6EF8] bg-opacity-70 backdrop-blur-xl text-white max-h-0 overflow-hidden transition-[max-height] duration-200 ease-out">
      <ul id="list_job"></ul>
    </div>
  `;

  // create list accievments
  const listElement = jobElement.querySelector(".panel ul");
  jobs.achievements.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("list-disc", "p-2", "mx-2");
    li.textContent = item;
    listElement.appendChild(li);
  });

  jobContainer.appendChild(jobElement);
});

// Menambahkan event listener untuk accordion
let accordion = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//section funtion for project
const slidesData = [
  {
    title: "Plant E-Commerce",
    imgSrc: "public/assets/pics/plants.png",
    githubLink: "https://github.com/violeteverg/plants_ecommerce",
    liveLink: "https://plants-ecommerce.vercel.app",
  },
  {
    title: "Clone Twitter",
    imgSrc: "public/assets/pics/twitter.png",
    githubLink: "https://github.com/Kelompok-2-HSBC8/final-project-kel2",
    liveLink: "https://final-project-kel2.vercel.app",
  },
  {
    title: "Expense Tracker",
    imgSrc: "public/assets/pics/expense.png",
    githubLink: "https://github.com/violeteverg/project_assignment",
    liveLink: "https://project-assignment-sooty.vercel.app",
  },
  {
    title: "Maen Yuk",
    imgSrc: "public/assets/pics/maenyuk.png",
    githubLink: "https://github.com/violeteverg/dari-aku-buat-kamu",
    liveLink: "https://dari-aku-buat-kamu.vercel.app",
  },
];

const slideshowContainer = document.getElementById("slideshow-container");

// Fungsi untuk membuat div secara dinamis berdasarkan data
slidesData.forEach((slide, index) => {
  const slideDiv = document.createElement("div");
  slideDiv.className = "mySlides fade";
  slideDiv.innerHTML = `
    <div class="relative container bg-slate-300 border w-[90%] mx-auto group">
      <img src="${slide.imgSrc}" alt="slide_${
    index + 1
  }" class="block w-full h-auto" />
      <div class="absolute bottom-0 left-0 right-0  overflow-hidden w-full h-0 transition-all duration-500 ease-in-out group-hover:h-full">
        <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
        <div class="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <span class="text-4xl font-semibold">${slide.title}</span>
          <div class="flex justify-center items-center gap-3 mt-2">
          ${
            slide.githubLink
              ? `<a href="${slide.githubLink}" target="_blank" class="text-2xl"><i class="fab fa-github"></i></a>
`
              : ""
          }
          ${
            slide.liveLink
              ? `<a href="${slide.liveLink}" target="_blank" class="text-2xl"><i class="fas fa-globe"></i></a>`
              : ""
          }
          </div>
        </div>
      </div>
    </div>
  `;

  slideshowContainer.appendChild(slideDiv);
});

//section slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
