// API Key
const options ={
    method: 'GET',
    Headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTllYTliZTkyZmJiMTEyNjVmOWVmZTZjY2FhODEyOSIsIm5iZiI6MTc0MzU1ODg4OS41Miwic3ViIjoiNjdlYzk4ZTk4MzZjOGVkYTdjYWFkYWY4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.-rbBx-jZdJm_-6qeru_qYHJkpBhS875bEckPdBzLvV0'
    }
};


// Exibir loading
function toggleLoading() {
    let loader = document.querySelector(".loader");
    loader.style.display = loader.style.display == "none" ? "block" : "none";
}

// Page Scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});