const menu = document.querySelector('.menu-links')

const iconmenu = document.querySelectorAll('.toggle')

for (const button of iconmenu) {
  button.addEventListener('click', function () {
    menu.classList.toggle('show')
  })
}
