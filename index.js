// Get the hamburger button and header
const hamburger = document.querySelector(".hamburger");
const header = document.getElementById("main-header");
let lastScrollTop = 0;
let scrollTimeout;

// Navbar scroll behavior
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Clear the existing timeout
  clearTimeout(scrollTimeout);

  // Hide the header when scrolling down
  if (scrollTop > lastScrollTop && scrollTop > 50) {
    header.classList.add("hidden");
  } else if (scrollTop < lastScrollTop) {
    // Show the header when scrolling up
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;

  // Set a timeout to show the header after scrolling stops
  scrollTimeout = setTimeout(function () {
    header.classList.remove("hidden");
  }, 500); // Show header 0.5 seconds after scrolling stops
});

// Create mobile menu dynamically
const mobileMenu = document.createElement("ul");
mobileMenu.className =
  "logo mobile-menu hidden bg-green-900 opacity-90 text-white fixed inset-y-0 right-0 w-0 overflow-hidden flex flex-col items-center gap-8 text-4xl justify-center transition-all duration-300 ease-in-out";
mobileMenu.innerHTML = `
  <li>
    <a href="#about" class="menuItem hover:text-green-500 hover:underline">About</a>
  </li>
  <li>
    <a href="#experience" class="menuItem hover:text-green-500 hover:underline">Experience</a>
  </li>
  <li>
    <a href="#project" class="menuItem hover:text-green-500 hover:underline">Project</a>
  </li>
  <li>
    <a href="#contact" class="menuItem hover:text-green-500 hover:underline">Contact</a>
  </li>
`;

// Append mobile menu to the body
document.body.appendChild(mobileMenu);

// Add click event listener for hamburger menu
hamburger.addEventListener("click", function () {
  this.classList.toggle("active");

  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    // Use setTimeout to ensure the transition is visible
    setTimeout(() => {
      mobileMenu.classList.add("block");
    }, 10);
  } else {
    mobileMenu.classList.remove("block");
    // Wait for the transition to finish before adding 'hidden'
    mobileMenu.addEventListener("transitionend", function handler() {
      mobileMenu.classList.add("hidden");
      mobileMenu.removeEventListener("transitionend", handler);
    });
  }
});

// Close mobile menu when clicking on a menu item
const menuItems = mobileMenu.querySelectorAll(".menuItem");
menuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    // Prevent immediate default action
    event.preventDefault();

    // Close the menu
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("block");

    // Wait for the transition to finish
    mobileMenu.addEventListener(
      "transitionend",
      function handler() {
        mobileMenu.classList.add("hidden");
        mobileMenu.removeEventListener("transitionend", handler);

        // After the menu is closed, navigate to the href
        window.location.href = item.getAttribute("href");
      },
      { once: true }
    );
  });
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
// Add AOS attributes to tech cards

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
  techCard.setAttribute("data-aos", "flip-left");
  techCard.setAttribute("data-aos-easing", "ease-out-cubic");
  techCard.setAttribute("data-aos-duration", "1000");

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
      "Addressed and resolved software bugs and issues to ensure the application's functionality remained seamless.",
      "Applied the Atomic Design methodology to implement a system design focused on reusable and responsive web components.",
    ],
  },
];

const jobContainer = document.getElementById("job-container");

// mapping jobDatas data intu div
jobDatas.forEach((jobs) => {
  const jobElement = document.createElement("div");
  jobElement.innerHTML = `
    <div class="accordion w-full flex bg-[#0B7F55] text-white justify-between items-center p-3 transition ease-in-out delay-150 rounded-xl" data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
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

// add event listener for accordion
// Function to handle accordion behavior
// This function adds click event listeners to all elements with the "accordion" class
// When an accordion is clicked, it toggles the "active" class and expands/collapses the associated panel

// Loop through all accordion elements
// For each accordion:
//   - Add a click event listener
//   - Toggle the "active" class on click
//   - Expand or collapse the associated panel based on its current state

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
