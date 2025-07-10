document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const statusMsg = document.getElementById("statusMsg");

    if (!name || !email || !message) {
        statusMsg.textContent = "Please fill in all fields.";
        statusMsg.style.color = "red";
        return;
    }

    // Simulate successful submission
    statusMsg.textContent = "Message sent successfully!";
    statusMsg.style.color = "green";

    // Reset form fields
    document.getElementById("contactForm").reset();
});