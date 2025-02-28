document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const dropZone = document.getElementById("dropZone");
    const fileInput = document.getElementById("avatarInput");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const github = document.getElementById("github").value;
        const file = fileInput.files[0];

        if (!file) {
            alert("Please upload an image.");
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const avatarUrl = e.target.result;

            // Save form data in localStorage
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("github", github);
            localStorage.setItem("avatarUrl", avatarUrl);

            // ✅ Redirect to ticket.html
            window.location.href = "ticket.html";
        };

        reader.readAsDataURL(file);
    });

    // Handle drag and drop
    dropZone.addEventListener("click", () => fileInput.click());
    dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZone.classList.add("highlight");
    });

    dropZone.addEventListener("dragleave", () => dropZone.classList.remove("highlight"));

    dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropZone.classList.remove("highlight");

        const droppedFiles = e.dataTransfer.files;
        if (droppedFiles.length > 0) {
            fileInput.files = droppedFiles;
        }
    });

    fileInput.addEventListener("change", function () {
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const reader = new FileReader();

            reader.onload = function (e) {
                dropZone.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image" style="width: 100px; height: 100px; border-radius: 50%;">`;
            };

            reader.readAsDataURL(file);
        }
    });
});
