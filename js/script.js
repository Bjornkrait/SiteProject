/* special */

const btn = document.querySelectorAll(".spcl-btn")

const spclItem = document.querySelectorAll(".spcl-item")

const btnRem = btn[0]

const btnNav = document.querySelector(".nav-btn")

const navMenu = document.querySelector(".head-a")

const btnForm = document.querySelector(".form-b1")

navMenu.classList.add('head-a-active')

btnForm.addEventListener('click', () => {
    alert("Спасибо, что выбрали нас!")
})

btnNav.addEventListener('click', () => {
    if (!navMenu.classList.contains('head-a-first-active')) {
        navMenu.classList.add('head-a-first-active')
    }
    else {
        navMenu.classList.toggle('head-a-active')
        navMenu.classList.toggle('head-a-disabled')
    }
    btnNav.classList.toggle('nav-menu-active')
})

btn.forEach((elm) => {

    elm.addEventListener('click', function () {
        btn.forEach((j) => {
            j.removeAttribute('disabled', "")
        })

        spclItem.forEach((i) => {
            i.classList.remove('spcl-item-show')
            i.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: 500,
            })
        })


        elm.setAttribute("disabled", "")
        setTimeout(() => {
            if (elm.classList.contains('spcl-btn1')) {
                spclItem[0].classList.add("spcl-item-show")
            }
            if (elm.classList.contains('spcl-btn2')) {
                spclItem[1].classList.add("spcl-item-show")
            }
            if (elm.classList.contains('spcl-btn3')) {
                spclItem[2].classList.add("spcl-item-show")
            }
            if (elm.classList.contains('spcl-btn4')) {
                spclItem[3].classList.add("spcl-item-show")
            }
            if (elm.classList.contains('spcl-btn5')) {
                spclItem[4].classList.add("spcl-item-show")
            }
        }, 500)

    })

});
