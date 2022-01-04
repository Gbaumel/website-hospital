let show = true;
const form = document.querySelector(".form")
const html = document.querySelector("html")
const buttonForm = document.querySelector(".button-form")
const openForm = buttonForm.querySelector(".open-form")
buttonForm.addEventListener("click", () => {

    html.style.overflow = show ? "hidden" : "initial"
    form.style.display = show ? "flex" : "none"
    form.style.zIndex = show ? "10" : "-10"


    buttonForm.classList.toggle("on", show)
    show = !show

})