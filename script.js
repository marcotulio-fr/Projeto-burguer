const menuOptions = [
    { name: 'X-Salada', price: 30, vegan: false, src: '/img/xsalada.jpeg' },
    { name: 'X-Bacon', price: 34, vegan: false, src: '/img/xbacon.png' },
    { name: 'X-Bacon Egg', price: 39, vegan: false, src: '/img/bacon-egg.png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: '/img/monstruoso.png' },
    { name: 'Big Vegano', price: 55, vegan: true, src: '/img/xvegan.png' },
    { name: 'X-Vegan', price: 45, vegan: true, src: '/img/monstruoso-vegan.png' }
]

let containerProdutos = document.querySelector(".frame_produtos")
const buttonMapear = document.getElementById("mapear")

function mostrarProdutos() {

    let htmlProdutos = ""
    let priceFormated = ""
    menuOptions.forEach(prd => {
        priceFormated = new Intl.NumberFormat("pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }).format(prd.price)

        htmlProdutos = htmlProdutos + ` 
        <li>
            <img src= "${prd.src}">
            <p>${prd.name}</p>
            <p class="price">${priceFormated}</p>
        </li>`
        containerProdutos.innerHTML = htmlProdutos

    })

}

function mapearPrice() {

    const newPrice = menuOptions.map(price => {
        price.price = price.price - (price.price / 10)

        return price

    })
    buttonMapear.textContent = "Desconto Ativo";
    buttonMapear.disabled = true;

    mostrarProdutos()

}

function reducePrice() {

    const somaTotal = menuOptions.reduce((acc, price) => {
        return acc + price.price
    }, 0)

    let somaTotalFormated = new Intl.NumberFormat("pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }).format(somaTotal)

    containerProdutos.innerHTML = `<li>
            <p>O valor total da sua compra foi:</p>
            <p class="price">${somaTotalFormated}</p>
        </li>`

}


function FilterProdutos() {

    const produtosFiltrados = menuOptions.filter(prd => prd.vegan === true)

    let htmlFiltrados = ""
    let priceFormatedFilter = ""

    produtosFiltrados.forEach(prd => {

        priceFormatedFilter = new Intl.NumberFormat("pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }).format(prd.price)



        htmlFiltrados = htmlFiltrados + `<li>
            <img src= "${prd.src}">
            <p>${prd.name}</p>
            <p class="price">${priceFormatedFilter}</p>
        </li>`
    })
    containerProdutos.innerHTML = htmlFiltrados

}

window.addEventListener('DOMContentLoaded', () => {

    mostrarProdutos()

})