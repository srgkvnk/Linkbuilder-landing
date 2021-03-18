const menuBtn = document.querySelector(".mobile-menu");
const menuList = document.querySelector(".first-section-mobile_menu_items");


function addMenuList () {
menuBtn.addEventListener('click', function() {
    menuList.classList.add("first-section-mobile_menu_items__active");
    removeMenuList ();
});
}
function removeMenuList () {
menuBtn.addEventListener('click', function() {
    menuList.classList.remove("first-section-mobile_menu_items__active");
    addMenuList ();
})
}






addMenuList ();