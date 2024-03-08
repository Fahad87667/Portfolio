/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("user-is-tabbing");

    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove("user-is-tabbing");

  window.removeEventListener("mousedown", handleMouseDownOnce);
  window.addEventListener("keydown", handleFirstTab);
};

window.addEventListener("keydown", handleFirstTab);

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("myForm");
  var thankYouMessage = document.getElementById("thankYouMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Submit the form to Formspree
    fetch("https://formspree.io/f/mrgnkjwa", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          // Success: Show thank-you message
          form.style.display = "none";
          thankYouMessage.style.display = "block";
        } else {
          // Error: Log the error or handle as needed
          console.error("Form submission failed:", response);
        }
      })
      .catch((error) => {
        console.error("Error during form submission:", error);
      });
  });
});
// Initialize circular progress bars
var pythonCircle = new Circles.create({
  id: 'python',
  radius: 60,
  value: 85,
  maxValue: 100,
  width: 10,
  colors: ['#3498db', '#d5d5d5'],
  duration: 800,
  text: function (value) {
    return value + '%';
  }
});

// Repeat the above code for other skills with appropriate IDs and values
