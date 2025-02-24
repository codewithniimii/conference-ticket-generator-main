document.addEventListener("DOMContentLoaded", function () {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const github = localStorage.getItem("github");
    const avatarUrl = localStorage.getItem("avatarUrl");

    if (!name || !email || !github || !avatarUrl) {
        window.location.href = "index.html"; // Redirect if no data
        return;
    }

    // Create the Congrats Message
    const congratsMessage = `
        <p class="congrats-message">
            🎉 Congrats <strong>${name}</strong>! Your ticket is ready, and we have sent it to <strong>${email}</strong>.
        </p>
    `;
    document.getElementById("congratsMessage").innerHTML = congratsMessage;

    // Generate the ticket HTML
    const ticketContent = `
        <div>
            <img src="${avatarUrl}" alt="Avatar" class="ticket-avatar">
            <h3>${name}</h3>
            <p>Email: ${email}</p>
            <p>GitHub: <a href="https://github.com/${github}" target="_blank">@${github}</a></p>
        </div>
    `;
    document.getElementById("ticketContent").innerHTML = ticketContent;
});

// Clear ticket and return to form
function clearTicket() {
    localStorage.clear();
    window.location.href = "index.html"; // Redirect to form
}
