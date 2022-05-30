let img = document.querySelector("img")
let btn_0 = document.querySelector(".st_0")
let btn_01 = document.querySelector(".st_01")
let btn_1 = document.querySelectorAll(".st_1")
let h1 = document.querySelector("h1")
let btn_st2 = document.querySelector(".st_2")
let p = document.querySelector("p")


btn_0.onclick = () => {
    img.style.height = "350px"
    btn_0.style.border = "3px solid #0071E3"
    btn_01.style.border = "1px solid gray"

}
btn_01.onclick = () => {
    img.style.height = "492px"
    btn_01.style.border = "3px solid #0071E3"
    btn_0.style.border = "1px solid gray"

}
btn_1.forEach(i => {
    i.onclick = () => {
        btn_1.forEach(clr => {
            clr.classList.remove('act')
        });
        img.src = i.getAttribute("data-info")
        i.classList.add("act")
    }
});


btn_st2.onclick = () => {
    h1.innerHTML = `Корзина пусто<br><span style="font-size:32px">Iphone 13 Pro & Pro Max</span><br>
    <span style="font-size:34px">Приостановлен от производства</span>`
    p.innerHTML = `<b style="color: red;">Но оплату принимаем</b>`
    btn_st2.style.border = "3px solid #0071E3"
    btn_st2.innerHTML = "<b>Для отказа дважды кликните</b>"
}
btn_st2.ondblclick = () => {
    h1.innerHTML = `спасибо за ваше понимание`
    p.innerHTML = `Мы рады вам сообщит скоро будет
    <b> Iphone 14`
    btn_st2.innerHTML = "<b>Корзина</b>"
    btn_st2.style.border = "1px solid gray"
}

