const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const IsOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = IsOpen
    ? "fa-solid fa-square-xmark"
    : "fa-solid fa-bars"

}
