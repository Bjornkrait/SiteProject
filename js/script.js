/* special */

const btn = document.querySelectorAll(".spcl-btn")
console.log(btn)
const spclItem = document.querySelectorAll(".spcl-item")
console.log(spclItem)
const btnRem = btn[0]

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
            elm.setAttribute("disabled", "")
        }, 500)



    })
});