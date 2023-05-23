document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;

    const content = `Name: ${name}\nEmail: ${email}\nFeedback: ${feedback}`;

    const blob = new Blob([content], { type: "text/plain" });

    const anchor = document.createElement("a");
    anchor.download = "user_input.txt";
    anchor.href = URL.createObjectURL(blob);
    anchor.click();

    // Clean up
    URL.revokeObjectURL(anchor.href);
});
 const darkModeToggle = document.getElementById("darkModeToggle");
            const body = document.body;

            darkModeToggle.addEventListener("click", function() {
                body.classList.toggle("dark-mode");
            });