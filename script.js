// Example: Print a message to the console when the page loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to my portfolio!");
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation logic
    if (!name || !email || !message) {
      alert("All fields are required.");
      return;
    }

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // If validation passes
    alert("Message sent successfully!");
    document.getElementById("contactForm").reset(); // Reset form fields

    // Optional: Show a form reset confirmation
    const resetMessage = document.createElement("p");
    resetMessage.textContent = "Form has been reset.";
    resetMessage.style.color = "green";
    document.getElementById("contact").appendChild(resetMessage);

    // Remove the reset message after 3 seconds
    setTimeout(() => {
      resetMessage.remove();
    }, 3000);
  });
