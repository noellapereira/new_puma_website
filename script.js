<script>
  const toggleBtn = document.getElementById("theme-toggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    toggleBtn.textContent =
      document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
</script>

<script>
function toggleReadMore() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btn = document.getElementById("readMoreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btn.textContent = "Read More";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btn.textContent = "Read Less";
  }
}

// Initially hide the extra text
document.getElementById("more").style.display = "none";
</script>

<script>
  const images = [
    "img32.png",
    "img33.png",
    "img34.png",
    "img35.png",
    "img36.png"
  ];

  let currentIndex = 0;
  const mainImage = document.getElementById("mainImage");

  function showImage(index) {
    mainImage.src = images[index];
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
</script>

<script>
const navbar = document.querySelector(".navbar");
const navOffset = navbar.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY > navOffset) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
</script>

<script>
const links = document.querySelectorAll('.dropdown-content a');
const dropBtn = document.querySelector('.dropbtn');

// CLICK highlight
links.forEach(link => {
  link.addEventListener('click', () => {
    // remove previous active
    links.forEach(l => l.classList.remove('active'));

    // add active to clicked link
    link.classList.add('active');

    // highlight dropdown button
    dropBtn.classList.add('active');
  });
});

// SCROLL highlight
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 120;

  links.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));

    if (
      section &&
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      dropBtn.classList.add('active');
    }
  });
});
</script>

<script>
(function () {
  emailjs.init("5Fc8LkfSZauVzXBM9");
})();

function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("number").value.trim();

  if (!name || !email || !phone) {
    alert("Please fill all fields");
    return;
  }

  // 🔹 SAVE TO LOCAL STORAGE
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  contacts.push({
    name: name,
    email: email,
    phone: phone,
    time: new Date().toLocaleString()
  });

  localStorage.setItem("contacts", JSON.stringify(contacts));

  // 🔹 SEND EMAIL TO OWNER
  emailjs.send("service_dt8xq7h", "template_wollfva", {
    name: name,
    email: email,
    phone: phone
  })
  .then(() => {
    alert("Details sent successfully!");
    document.querySelector(".contact-form").reset();
  })
  .catch((error) => {
    console.error("FAILED", error);
    alert("Saved locally, but email failed.");
  });
}
</script>
