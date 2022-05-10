import { renderServices } from "./renderServices.js"
import { renderDesign } from "./renderDesign.js"
import { renderRepair } from "./renderRepair.js"
import { renderWork } from "./renderWork.js"


//элементы из dom дерева
const ev = document.querySelectorAll(".header__directions-item")
ev.forEach(item => {
    item.addEventListener("mouseenter", choiceBtn)
    item.addEventListener("mouseleave", remove)
})
const oldBg = document.querySelector(".header__bg")
const headerColor = document.querySelectorAll(".nav__item-link")
const logo = document.querySelector(".header__logo")
const title = document.querySelector(".header__title")
const iconHeader = document.querySelectorAll(".header__location svg")
const header = document.querySelector(".header")
const btnHeader = document.querySelector(".header__request")


//функция определяет на какую кнупку наведен курсор
function choiceBtn(e) {
    //общие действия всех элементов при наведении
    iconHeader.forEach(item => {
        item.style.fill = "white"
    })
    headerColor.forEach(item => {
        item.style.color = "white"
    })

    logo.style.background = "url(../assets/img/header/header-logo-white.svg)"


    oldBg.style.background = "none"

    btnHeader.classList.add("header__request-hover")

    //выбор кнопки
    switch (e.currentTarget.textContent) {
        case 'Услуги по ремонту':
            renderServices()
            break;
        case 'Виды работ':
            renderRepair()
            break;
        case 'Дизайн интерьера':
            renderDesign()
            break;
        case 'Ремонт помещений':
            renderWork()
            break;
    }
}
//возвращает все элементы к исходному виду после того, как курсор ушел с кнопки
function remove(e) {
    iconHeader.forEach(item => {
        item.style.fill = "black"
    })

    btnHeader.classList.remove("header__request-hover")

    const banner = document.querySelector(".header__banner")

    header.style.background = 'none';

    oldBg.style.backgroundImage = `url(./assets/img/header/header-bg.png)`;

    banner.remove()
    ev.forEach(item => {
        item.style.opacity = "1"
    })

    headerColor.forEach(item => {
        item.style.color = " rgba(34, 34, 34, 0.7)"
    })

    logo.style.background = "url(../assets/img/header/header-logo.svg)"

    title.innerHTML = ""
    title.insertAdjacentHTML("beforeend", `
    <span class="header__title--black">Ремонт</span> и <span class="header__title--black">дизайн</span><br>
    в Москве и Московской области
    `)
    title.style['-webkit-text-stroke'] = '1px #222222';

}
