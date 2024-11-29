let removeMenu = document.getElementById('remove_menu_btn')
let menu = document.getElementById('menu')
let show_menu_btn = document.getElementById('show_menu_btn')

show_menu_btn.addEventListener('click', e => {
    menu.classList.add('active')
})

removeMenu.addEventListener('click', e => {
    menu.classList.remove('active')
})