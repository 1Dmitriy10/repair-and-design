export function renderRepair() {
    // фон header
    const header = document.querySelector(".header")
    header.style.background =
        'url(./assets/img/header/services-bg.png)';
    header.style.backgroundRepeat = "no-repeat";
    header.style.backgroundSize = "cover";

    //модификация кнопок
    const btn = document.querySelectorAll(".header__directions-item")
    btn[1].style.opacity = "0"
    btn[1].style.zIndex = "15"
    // btn[0].style.opacity = "0"
    btn[0].style.zIndex = "5"
    btn[2].style.zIndex = "5"

    //создание баннера
    const banner = document.createElement("div");
    banner.classList.add("header__banner")
    banner.classList.add("header__banner-repair")
    banner.insertAdjacentHTML("beforeend", `
     <h3 class="header__banner-title">Услуги по ремонту</h3>
     <p class="header__banner-subtitle">С другой стороны реализация намеченных плановых заданий требуют от нас анализа.</p>
     <button class="header__btn-down header__banner-btn"></button>
     `);
    btn[1].before(banner)

    //заголовок в header
    const title = document.querySelector(".header__title")
    title.innerHTML = ""
    title.insertAdjacentHTML("beforeend", `
     <span class="header__title-white ">Виды работ по ремонту</span><br>
     в Москве и Московской области
     `)
    title.style['-webkit-text-stroke'] = '1px #ffffff';
    title.style.color = "transparent"
    title.style.textShadow = "none"
    title.style.zIndex = "20"

}