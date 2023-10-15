const judulfilm = document.querySelectorAll("h2");
const sinopsis = document.querySelectorAll("p");

judulfilm.forEach((judul, index) => {
    judul.addEventListener("click", () => {
        if(sinopsis[index].style.display === "none"){
            sinopsis[index].style.display = "block";
        } else{
            sinopsis[index].style.display = "none";
        }
    })
})