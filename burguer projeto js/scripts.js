const list = document.querySelector('ul')
const mostrar = document.querySelector(".mostrar")
const mapear = document.querySelector(".mapear")
const somar = document.querySelector(".somar")
const filtrar = document.querySelector(".filtrar")


function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style:'currency',
        currency:'BRL',

    })
    return newValue
}


function mostrarTudo (arrayProducts) {
    let myLi = ''
    
    arrayProducts.forEach ((product) => {

    myLi += ` 
        <li>
            <img src=${product.src}>
            <p class="name-product">${product.name}</p>
            <p class="item-price">R$ ${formatCurrency(product.price)}</p>
        </li>
`
})

list.innerHTML = myLi
}

function mapearDesconto() {

const menu = menuOptions.map ((product) => ({
    ...product, // spreed operator - deixa alterar as coisas
    price: product.price - (product.price / 100) * 10, // ou *0.9 tbm da 10% de desconto
    
}))

mostrarTudo(menu)

}

function somarTudo () {

    const total = menuOptions.reduce ((acc, value) => {
        return acc + value.price
    },0)

    list.innerHTML = ` <li>
   
    <p>O valor total dos itens é R$ ${total.toFixed(2)}</p>
    </li>`

}

function filtrarVegan (){
const vegano = menuOptions.filter ((product) => product.vegan === true) 
        
    mostrarTudo(vegano)
}   





filtrar.addEventListener('click', filtrarVegan)
somar.addEventListener('click', somarTudo)
mostrar.addEventListener('click', () => mostrarTudo(menuOptions))
mapear.addEventListener('click', mapearDesconto) 