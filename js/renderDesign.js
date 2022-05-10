export function renderDesign() {
    // фон header
    const header = document.querySelector(".header")
    header.style.background =
        'url(./assets/img/header/design-bg.png)';
    header.style.backgroundRepeat = "no-repeat";
    header.style.backgroundSize = "cover";

    //модификация кнопок
    const btn = document.querySelectorAll(".header__directions-item")
    btn[2].style.opacity = "0"
    btn[2].style.zIndex = "15"
    btn[1].style.zIndex = "5"

    //создание баннера
    const banner = document.createElement("div");
    banner.classList.add("header__banner")
    banner.classList.add("header__banner-design")
    banner.insertAdjacentHTML("beforeend", `
     <h3 class="header__banner-title">Услуги по ремонту</h3>
     <p class="header__banner-subtitle">С другой стороны реализация намеченных плановых заданий требуют от нас анализа.</p>
     <button class="header__btn-down header__banner-btn"></button>
     `);
    btn[2].before(banner)

    //заголовок в header
    const title = document.querySelector(".header__title")
    title.innerHTML = ""
    title.insertAdjacentHTML("beforeend", `
     <span class="header__title-white ">Дизайн интерьера</span><br>
     в Москве и Московской области
     `)
    title.style['-webkit-text-stroke'] = '1px #ffffff';
    title.style.color = "transparent"
    title.style.textShadow = "none"
    title.style.zIndex = "20"

}