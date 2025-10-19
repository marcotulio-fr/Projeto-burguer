const list = document.querySelector(".frame_produtos")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapItens = document.querySelector(".map-itens")
const buttonSumAll = document.querySelector(".sum-all")
const buttonFilterItens = document.querySelector(".filter-all")

function FormatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
    return newValue
}

function showall(arrayProd) {

    let myLi = ""

    arrayProd.forEach(prd => {

        myLi += `
        <li>
            <img src= "${prd.src}">
            <p>${prd.name}</p>
            <p class="price">${FormatCurrency(prd.price)}</p>
        </li>`
    })

    list.innerHTML = myLi
}

function mapItensDescont() {
    const newPrice = menuOptions.map((prd) => ({
        ...prd,
        price: prd.price * 0.9,

    }))
    showall(newPrice)

}

function sumAllItens() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `<li>
            <p>O valor total da sua compra foi:</p>
            <p class="price">${FormatCurrency(totalValue)}</p>
        </li>`
}

function filterItens() {
    const filterJusVengan = menuOptions.filter(prd => prd.vegan)

    showall(filterJusVengan)

}
buttonShowAll.addEventListener('click', () => showall(menuOptions))
buttonMapItens.addEventListener('click', mapItensDescont)
buttonSumAll.addEventListener('click', sumAllItens)
buttonFilterItens.addEventListener('click', filterItens)
