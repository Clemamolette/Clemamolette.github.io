
window.addEventListener("scroll", () => {
  const kitty = document.getElementById("sleepy-kitty");
  if (window.scrollY > 0) {
    kitty.classList.add("hidden");
  } else {
    kitty.classList.remove("hidden");
  }
});


const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((button, idx) => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.style.display = 'none');

        button.classList.add('active');
        tabContents[idx].style.display = 'block';
    });
});


