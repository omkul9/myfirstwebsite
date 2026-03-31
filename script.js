function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function showMessage() {
    alert("Thank you for visiting! Contact via email.");
}