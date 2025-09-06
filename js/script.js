"use strict";
const data = [
  {
    logo: "./assets/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

// selectes elements
const btnTheme = document.getElementById("btn--theme");
const body = document.querySelector("body");
const logo = document.getElementById("logo");
const themeIcon = document.getElementById("theme--icon");
const allFilterBtn = document
  .querySelector(".filter__button")
  .querySelectorAll(".btn");

// select extensions elements
const extContainer = document.querySelector(".extension__card-wrapper");

// Function display extensions from data
const displayExtensions = function () {
  extContainer.innerHTML = "";
  for (let [index, item] of data.entries()) {
    // console.log(item);
    const isActive = item.isActive ? "active" : "";
    const extCard = `<div class="extension__card">
          <div class="extension__card-body">
            <div class="extension__card-logo">
              <img src="${item.logo}" alt="extension-icon"
                class="extension-icon">
            </div>
            <div class="extension__card-context">
              <p class="extension__card-heading">${item.name}</p>
              <p class="extension__card-description">
                ${item.description}
              </p>
            </div>

          </div>
          <div class="extension__button">
            <button class="btn btn__remove btn--secondary">Remove</button>
            <button class="btn__toggle ${isActive}" data-index='${index}'>
              <div class="btn__toggle-switch"></div>
            </button>
          </div>
        </div>`;
    extContainer.innerHTML += extCard;
  }
};

// Function filter active display
const displayExtensionsActive = function () {
  extContainer.innerHTML = "";
  for (let [index, item] of data.entries()) {
    // console.log(item);
    if (!item.isActive) continue;
    const isActive = item.isActive ? "active" : "";
    const extCard = `<div class="extension__card">
          <div class="extension__card-body">
            <div class="extension__card-logo">
              <img src="${item.logo}" alt="extension-icon"
                class="extension-icon">
            </div>
            <div class="extension__card-context">
              <p class="extension__card-heading">${item.name}</p>
              <p class="extension__card-description">
                ${item.description}
              </p>
            </div>

          </div>
          <div class="extension__button">
            <button class="btn btn__remove btn--secondary">Remove</button>
            <button class="btn__toggle ${isActive}" data-index='${index}'>
              <div class="btn__toggle-switch"></div>
            </button>
          </div>
        </div>`;
    extContainer.innerHTML += extCard;
  }
};

// Function filter Inactive display
const displayExtensionsInActive = function () {
  extContainer.innerHTML = "";
  for (let [index, item] of data.entries()) {
    // console.log(item);
    if (item.isActive) continue;
    const isActive = item.isActive ? "active" : "";
    const extCard = `<div class="extension__card">
          <div class="extension__card-body">
            <div class="extension__card-logo">
              <img src="${item.logo}" alt="extension-icon"
                class="extension-icon">
            </div>
            <div class="extension__card-context">
              <p class="extension__card-heading">${item.name}</p>
              <p class="extension__card-description">
                ${item.description}
              </p>
            </div>

          </div>
          <div class="extension__button">
            <button class="btn btn__remove btn--secondary">Remove</button>
            <button class="btn__toggle ${isActive}" data-index='${index}'>
              <div class="btn__toggle-switch"></div>
            </button>
          </div>
        </div>`;
    extContainer.innerHTML += extCard;
  }
};

// Display extensions
displayExtensions();

// Toggle active extension
extContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn__toggle");
  if (!btn) return;
  if (btn.classList.contains("btn__toggle")) {
    // console.log(e.target);
    const index = btn.dataset.index;
    // console.log(index);
    // console.log(!data[index].isActive);
    // console.log(data[index]);
    data[index].isActive = !data[index].isActive;
    for (let [i, item] of allFilterBtn.entries()) {
      if (item.classList.contains("btn__all")) {
        item.classList.add("btn--active");
        item.classList.remove("btn__inactive");
      } else {
        item.classList.remove("btn--active");
        item.classList.add("btn__inactive");
      }
    }
    displayExtensions();
  }
});

// dark mode feature
btnTheme.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    logo.src = "./assets/images/logo.png";
    themeIcon.src = "./assets/images/icon-sun.svg";
  } else {
    logo.src = "./assets/images/logo.svg";
    themeIcon.src = "./assets/images/icon-moon.svg";
  }
});

// Button filter extension
for (let [i, item] of allFilterBtn.entries()) {
  item.addEventListener("click", () => {
    item.classList.add("btn--active");
    item.classList.remove("btn__inactive");
    if (item.classList.contains("btn__all")) {
      displayExtensions();
    } else if (item.classList.contains("btn__active")) {
      displayExtensionsActive();
    } else {
      displayExtensionsInActive();
    }
    for (let [j, btn] of allFilterBtn.entries()) {
      console.log(!(btn[j] === item[i]));
      if (j !== i) {
        btn.classList.remove("btn--active");
        btn.classList.add("btn__inactive");
      }
    }
  });
}

// Remove extension
