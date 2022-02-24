const btns = [1,2,3,"+","AC",4,5,6,"-",7,8,9,"*","DEL",0,"/","="]
const calculadoraBtns = document.querySelector(".calculadora__body__btns")
const inputCalculadora = document.querySelector(".calculadora__head__input")

const oprationsFunctions = {
    "+" : (n1,n2) => n1 + n2,
    "-" : (n1,n2) => n1 - n2,
    "*" : (n1,n2) => n1 * n2,
    "/" : (n1,n2) => n1 / n2,
}

const operationKeys = Object.keys(oprationsFunctions)

let valor1, valor2, fn, symbol, number = 1

btns.forEach( n => { 
    let btn = document.createElement("button")
    btn.textContent = n
    btn.setAttribute("id",n)
    btn.style.gridArea = `a${number}`

    btn.addEventListener("click" , e => {

        inputCalculadora.value += e.target.textContent
        inputValue = inputCalculadora.value
        actualText = e.target.textContent

        if(actualText === "AC"){

            inputCalculadora.value = inputValue.substring(0, inputValue.length - 3)

        }else if(actualText === "DEL"){

            inputCalculadora.value = ""

        }else if(operationKeys.find(n => n === actualText) && !inputValue.includes(symbol)){

            valor1 = inputValue.substring(0,inputValue.length - 1)
            symbol = actualText
            fn = oprationsFunctions[symbol]
            //console.log("first layer:",valor1, valor2, fn)

        }else if(actualText === "="){

            valor2 = inputValue.substring(valor1.length + 1,inputValue.length - 1)
            inputCalculadora.value = fn(valor1 *= 1,valor2 *= 1)
            symbol = undefined
            //console.log("second layer:",valor1,valor2)
        }

        //console.log("global layer:",valor1,valor2)
    })

    calculadoraBtns.append(btn)
    number++
})

