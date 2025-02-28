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
            🎉 Congrats <strong>${name}</strong>! Your ticket is ready.
        </p>
        <h6> We've emailed your ticket to <strong>${email}</strong> and will send updates in the run up to the event.</h6>
    `;
    document.getElementById("congratsMessage").innerHTML = congratsMessage;

    // Generate the ticket HTML
    const ticketContent = `
        <div>
            <img src="${avatarUrl}" alt="Avatar" class="ticket-avatar">
            <div class="ticketHolder">
            <h3>${name}</h3>
            <p>Email: ${email}</p>
            <p>GitHub: <a href="https://github.com/${github}" target="_blank">@${github}</a></p>
            </div>
        </div>
    `;
    document.getElementById("ticketContent").innerHTML = ticketContent;
});


