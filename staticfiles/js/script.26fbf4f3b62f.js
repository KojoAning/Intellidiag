var dataArray = [
  {
    imageSrc: "/static/images/chest.png",
    title: "GI Tract Image Segmentation",
    description: "Image Segmentations for GI Tract analysis",
    url: "/segmentation/",
  },

  {
    imageSrc: "/static/images/chest.png",
    title: "Lung Image Segmentation",
    description: "Medical images analysis for chest scans",
    url: "/segmentation/",
  },
  {
    imageSrc: "/static/images/breast.png",
    title: "Breast Image Segmentation",
    description: "Medical images analysis for breast scans",
    url: "/home222/",
  },
  {
    imageSrc: "/static/images/brain.png",
    title: "Brain Image Segmentation",
    description: "Medical images analysis for brain scans",
    url: "/home222/",
  },
];

// Get the container where the dynamic cards will be added
var container = document.getElementById("dynamicCardsContainer");

//Last Section
// Loop through the array and create cards dynamically
dataArray.forEach(function (item) {
  // Create card elements
  var card = document.createElement("div");
  card.classList.add("card");

  var image = document.createElement("img");
  image.src = item.imageSrc;
  image.alt = "Card Image";

  // Create and configure title element
  var title = document.createElement("strong");
  title.textContent = item.title;

  // Create and configure description element
  var description = document.createElement("div");
  description.textContent = item.description;

  // Create and configure image element

  // Append title, image, and description to the card
  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);
  card.addEventListener("click", function () {
    console.log("Card clicked:", item.title, "URL:", item.url); // Debug information
    window.location.href = item.url;
  });

  // Append card to the container
  container.appendChild(card);
  // Segmentation.appendChild(card)
});

// First Section
var Segmentation = document.getElementById("Segmentation");
dataArray.forEach(function (item) {
  // Create card elements
  var card = document.createElement("div");
  card.classList.add("card");

  var image = document.createElement("img");
  image.src = item.imageSrc;
  image.alt = "Card Image";

  // Create and configure title element
  var title = document.createElement("strong");
  title.textContent = item.title;

  // Create and configure description element
  var description = document.createElement("div");
  description.textContent = item.description;

  // Create and configure image element

  // Append title, image, and description to the card
  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(description);
  card.addEventListener("click", function () {
    console.log("Card clicked:", item.title, "URL:", item.url); // Debug information
    window.location.href = item.url;
  });

  // Append card to the container

  Segmentation.appendChild(card);
});

function showContent(contentId) {
  // Hide all content divs
  var contentDivs = document.querySelectorAll(".content > div");
  contentDivs.forEach(function (div) {
    div.classList.add("hidden");
  });

  var selectedContent = document.getElementById("content" + contentId);
  selectedContent.classList.remove("hidden");

  var buttons = document.querySelectorAll(".middlesec button");
  buttons.forEach(function (button) {
    button.classList.remove("active");
  });

  var clickedButton = document.querySelector(
    ".middlesec button:nth-child(" + contentId + ")"
  );
  clickedButton.classList.add("active");

  sessionStorage.setItem("currentContentIndex", contentId);
}

window.onload = function () {
  var currentContentIndex = sessionStorage.getItem("currentContentIndex");
  if (currentContentIndex) {
    showContent(currentContentIndex);
  } else {
    showContent(1);
  }
};

function toggleSidebar() {
  console.log("i am clicked");
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("sidebar-visible");
  sidebar.classList.toggle("fixed");
}

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var toggle = document.getElementById("toggle");
  var close = document.getElementById("close");

  sidebar.style.display = "flex";
  sidebar.style.position = "fixed";
  toggle.style.display = "none";
  close.style.display = "flex";
  console.log(close.style.display);

  sidebar.classList.toggle("sidebar-visible");
}
