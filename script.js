// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
});

// TYPING EFFECT
const text = "Hi, I'm Yerra Vamsi Markandeya";
let index = 0;
const typingTarget = document.querySelector(".typing-text");

function type() {
  if (index < text.length) {
    typingTarget.textContent += text.charAt(index);
    index++;
    setTimeout(type, 80);
  }
}
type();

// SCROLL REVEAL + SKILL BARS
const reveals = document.querySelectorAll(".reveal");
const bars = document.querySelectorAll(".bar div");

window.addEventListener("scroll", () => {
  reveals.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight * 0.85) {
      sec.classList.add("show");
    }
  });

  bars.forEach(bar => {
    if (bar.getBoundingClientRect().top < window.innerHeight * 0.85) {
      bar.style.width = bar.dataset.width;
    }
  });
});

// MOUSE FOLLOW GLOW
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
/* ============================= */
/* RESUME MODAL */
/* ============================= */

function openResumeModal() {
  document.getElementById("resumeModal").style.display = "block";
}

function closeResumeModal() {
  document.getElementById("resumeModal").style.display = "none";
}

/* Close modal on background click */
window.addEventListener("click", (e) => {
  const modal = document.getElementById("resumeModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

/* ============================= */
/* DOWNLOAD WITH PROGRESS */
/* ============================= */

function startDownload() {
  const progressContainer = document.querySelector(".download-progress");
  const progressBar = document.querySelector(".progress-bar");

  progressContainer.style.display = "block";
  progressBar.style.width = "0%";

  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);

      // Trigger actual download
      const link = document.createElement("a");
      link.href = "resume.pdf";
      link.download = "Vamsi_Markandeya_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        progressContainer.style.display = "none";
      }, 800);
    }
  }, 150);
}
/* ============================= */
/* COPY EMAIL */
/* ============================= */

function copyEmail() {
  navigator.clipboard.writeText("yerravamsimarkandeya@gmail.com");

  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
/* ============================= */
/* SCROLL SPY */
/* ============================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".floating-nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
/* ============================= */
/* CUSTOM CURSOR MOVE */
/* ============================= */

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
// REMOVE INTRO AFTER LOAD
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    if (intro) intro.remove();
  }, 3000);
});


