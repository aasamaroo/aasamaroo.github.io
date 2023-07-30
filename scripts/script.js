// script.js

// Dummy job data (you can replace this with real data from the server)
const jobData = [
    {
      title: "Software Developer",
      description: "Create robust, state-of-the-art software that incorporates modern software engineering practices used by the most successful businesses.",
    },
    {
      title: "Copywriting",
      description: "Create a business plan suited to your needs, tailored to your target audience.",
    },
    {
      title: "Content Creation",
      description: "Use the power of social media to grab the attention of millions with eye-catching content, creating with cutting edge technology.",
    },
  ];

  // Function to generate dynamic job listings
  function generateJobListings() {
    const jobListingsContainer = document.getElementById("jobListings");

    let jobListingsHTML = "";
    jobData.forEach((job) => {
      jobListingsHTML += `
        <div class="job">
          <h3>${job.title}</h3>
          <p>${job.description}</p>
        </div>
      `;
    });

    jobListingsContainer.innerHTML = jobListingsHTML;
  }

  // Call the function to generate job listings on page load
  window.onload = generateJobListings;

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

