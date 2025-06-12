const btn = document.getElementById("botoncito");
      btn.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
      });

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector("button.md\\:hidden");
  const mobileNav = document.getElementById("navPequeña");

  toggleButton.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
  });
});

