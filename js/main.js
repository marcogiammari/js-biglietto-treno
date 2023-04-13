function calcPrice() {
    let km = parseInt(prompt("Quanti chilometri devi percorrere?"));
    let age = parseInt(prompt("Quanti anni hai?"));
    let price = km*0.21;
    if (isNaN(km) || isNaN(age)) {
        alert("Oops, alcuni dati sono errati. Riprova!");
        calcPrice();
    }
    else {
        if (age < 18) {
            price -= price / 100 * 20;
        }
        else if (age > 65) {
            price -= price / 100 * 40;
        }
        price = parseFloat(price).toFixed(2);
        document.getElementById("price").innerText = price + " €";        
    }
}

