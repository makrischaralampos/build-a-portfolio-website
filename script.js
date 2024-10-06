document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to my portfolio!");
}),
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      var t = document.getElementById("name").value.trim(),
        n = document.getElementById("email").value.trim(),
        e = document.getElementById("message").value.trim();
      if (t && n && e)
        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/.test(n)) {
          alert("Message sent successfully!"),
            document.getElementById("contactForm").reset();
          const l = document.createElement("p");
          (l.textContent = "Form has been reset."),
            (l.style.color = "green"),
            document.getElementById("contact").appendChild(l),
            setTimeout(() => {
              l.remove();
            }, 3e3);
        } else alert("Please enter a valid email address");
      else alert("All fields are required.");
    });
