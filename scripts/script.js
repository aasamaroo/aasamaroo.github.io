// script.js

// Dummy job data (you can replace this with real data from the server)
const jobData = [
    {
      title: "Software Developer",
      description: "Create robust, state-of-the-art software that incorporates modern software engineering practices used by the most successful businesses.",
    },
    {
      title: "Long-Form Content",
      description: "Created YouTube videos for small content creators, and gave them a significant boost in viewership and engagement.",
    },
    {
      title: "Short-Form Content",
      description: "Created short form content such as TikTok videos to help promote small content creators on YouTube and Twitch.",
    },
  ];

  // Function to generate dynamic job listings
  function generatepastProjects() {
    const pastProjectsContainer = document.getElementById("pastProjects");

    let pastProjectsHTML = "";
    jobData.forEach((job) => {
      pastProjectsHTML += `
        <div class="job">
          <h3>${job.title}</h3>
          <p>${job.description}</p>
        </div>
      `;
    });

    pastProjectsContainer.innerHTML = pastProjectsHTML;
  }

  // Call the function to generate job listings on page load
  window.onload = generatepastProjects;

// script.js

// ... Previous JavaScript code ...

// Function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add 'fade-in' class to sections in the viewport
function fadeInSections() {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
      if (isElementInViewport(section)) {
          section.classList.add("fade-in");
      }
  });
}

// Call the 'fadeInSections' function on page load and scroll
window.addEventListener("load", fadeInSections);
window.addEventListener("scroll", fadeInSections);

