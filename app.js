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

let valor1, valor2, fn

btns.forEach( n => { 
    let btn = document.createElement("button")
    btn.classList.add(`btn-${n}`)
    btn.textContent = n
    btn.setAttribute("id",n)

    btn.addEventListener("click" , e => {

        inputCalculadora.value += e.target.textContent
        if(operationKeys.find(n => n === e.target.textContent)
            && !inputCalculadora.value.includes(operationKeys.map(n => n))){
            valor1 = inputCalculadora
            .value
            .substring(0,inputCalculadora.value.length - 1)
            fn = oprationsFunctions[e.target.textContent]
        }else if(e.target.textContent === "="){
            valor2 = inputCalculadora
            .value
            .substring(valor1.length + 1,inputCalculadora.value.length - 1)
            valor1 = parseFloat(valor1)
            valor2 = parseFloat(valor2)
            inputCalculadora.value = fn(valor1,valor2)
            
        }
    })

    calculadoraBtns.append(btn)
})

