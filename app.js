const btns = [1,2,3,"+",4,5,6,"-",7,8,9,"*",0,"/","="]
const calculadoraBtns = document.querySelector(".calculadora__body__btns")
const inputCalculadora = document.querySelector(".calculadora__head__input")

const oprationsFunctions = {
    "+" : (n1,n2) => n1 + n2,
    "-" : (n1,n2) => n1 - n2,
    "*" : (n1,n2) => n1 * n2,
    "/" : (n1,n2) => n1 / n2,
}

const operationKeys = Object.keys(oprationsFunctions)

let valor1, valor2, fn, symbol

btns.forEach( n => { 
    let btn = document.createElement("button")
    btn.textContent = n
    btn.setAttribute("id",n)

    btn.addEventListener("click" , e => {

        inputCalculadora.value += e.target.textContent
        inputValue = inputCalculadora.value
        actualText = e.target.textContent

        if(operationKeys.find(n => n === actualText) && !inputValue.includes(symbol)){

            valor1 = inputValue.substring(0,inputValue.length - 1)
            symbol = actualText
            fn = oprationsFunctions[symbol]

        }else if(actualText === "="){

            valor2 = inputValue.substring(valor1.length + 1,inputValue.length - 1)
            inputCalculadora.value = fn(valor1 -= 0,valor2 -= 0)

        }
    })

    calculadoraBtns.append(btn)
})

