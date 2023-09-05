const modal = document.querySelector(".modal");

const span = document.querySelector(".close");

const pokeList = document.querySelector(".poke-list");

pokeList.addEventListener("click", () => {

    if (pokeList.hasChildNodes()) {
        const btn = document.getElementsByClassName("pokemon")
        console.log(btn)

        for(element of btn) {
            element.addEventListener("click", () => {
                console.log("clicked")
                modal.style.display = "block";
            })
        }
    }
})

span.addEventListener("click", () => {
    modal.style.display = "none";
})

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}