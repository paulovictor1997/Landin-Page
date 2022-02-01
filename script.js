//Mobile menu
const openMenu = () =>{
    const openButton = document.querySelector('.open-button');
    const closeButton = document.querySelector('.close-button');
    const menu = document.querySelector('.menu');

    openButton.classList.add('hidden');
    closeButton.classList.remove('hidden');
    menu.classList.add('show');
}

const closeMenu = ()=>{
    const openButton = document.querySelector('.open-button');
    const closeButton = document.querySelector('.close-button');
    const menu = document.querySelector('.menu');

    openButton.classList.remove('hidden');
    closeButton.classList.add('hidden');
    menu.classList.remove('show');
}

//Dropdown menu
document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
    })
  })