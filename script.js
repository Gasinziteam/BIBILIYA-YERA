const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️ Light Mode";
    }else{
        themeBtn.innerHTML = "🌙 Dark Mode";
    }
});

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {
    let value = searchInput.value.toLowerCase();

    document.querySelectorAll(".verse").forEach(v => {
        if(v.innerText.toLowerCase().includes(value)){
            v.style.display = "block";
        }else{
            v.style.display = "none";
        }
    });
});
