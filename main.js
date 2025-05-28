 document.addEventListener("DOMContentLoaded", function () {
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById("mobile-menu-button");
        const mobileMenu = document.getElementById("mobile-menu");

        mobileMenuButton.addEventListener("click", function () {
          mobileMenu.classList.toggle("hidden");
          if (mobileMenu.classList.contains("hidden")) {
            mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
          } else {
            mobileMenuButton.innerHTML = '<i class="ri-close-line ri-lg"></i>';
          }
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll("a");
        mobileLinks.forEach((link) => {
          link.addEventListener("click", function () {
            mobileMenu.classList.add("hidden");
            mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
          });
        });
      });

      document.addEventListener("DOMContentLoaded", function () {
        // Form submission
        const contactForm = document.getElementById("contact-form");
        const formSuccess = document.getElementById("form-success");
        const formError = document.getElementById("form-error");

        contactForm.addEventListener("submit", function (e) {
          e.preventDefault();

          // Simulate form submission
          setTimeout(function () {
            contactForm.reset();
            formSuccess.classList.remove("hidden");

            setTimeout(function () {
              formSuccess.classList.add("hidden");
            }, 5000);
          }, 1000);
        });
      });
