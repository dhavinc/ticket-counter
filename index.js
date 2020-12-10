let numberProducts = 0;
function countTicketsNdTotal() {
    let total = 0;
    let ticketNb = 0;
    let cashRemains = 0;
    console.log(document.getElementsByClassName('inputs-number'))
    Array.prototype.forEach.call(document.getElementsByClassName('inputs-number'), input => {
        console.log(input.value)
        total += parseFloat(input.value);
    });
    ticketNb = Math.floor(parseFloat(total) / 6.3);
    cashRemains = Number(total % 6.3);
    return { total, ticketNb: parseFloat(ticketNb), cashRemains: cashRemains.toFixed(2) };
}

document.addEventListener('change', (event) => {
    console.log("shit happening")
    console.log(event.target.id)
    if (event.target.id.includes('price-')) {
        let results = countTicketsNdTotal();
        document.getElementById("result-span").innerText = results.total;
        document.getElementById("cash-remains").innerText = results.cashRemains;
        document.getElementById("nb-tickets").innerText = results.ticketNb;
    } else if (elem.id.includes('delete-price')) {
        document.getElementById(`input-${elem.id.split('-')[2]}`).remove();
        document.getElementById("result-span").innerText = results.total;
        document.getElementById("nb-tickets").innerText = results.ticketNb;
        document.getElementById("cash-remains").innerText = results.cashRemains;
    }
});

document.getElementById('add-price').addEventListener('click', (event) => {
    numberProducts++;
    const newInput = document.createElement('div');
    newInput.setAttribute('id', `input-${numberProducts}`);
    newInput.innerHTML = `
    <input class="inputs-number" id="price-${numberProducts}" type="number" name="price" value="0">
    <button id="delete-price-${numberProducts}">-</button>
    `;
    document.getElementById('inputs').appendChild(newInput);
});
document.getElementById('inputs').addEventListener('click', (event) => {
    numberProducts++;
    const newInput = document.createElement('div');
    newInput.setAttribute('id', `input-${numberProducts}`);
    newInput.innerHTML = `
    <input class="inputs-number" id="price-${numberProducts}" type="number" name="price">
    <button id="delete-price-${numberProducts}">-</button>
    `;
});

