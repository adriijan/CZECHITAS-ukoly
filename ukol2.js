const pocet = prompt('Kolik kusů chcete objednat?');
let cenaZaKus;

if(pocet<50)
{
    cenaZaKus = 300;
}
else if(pocet<=200)
{
    cenaZaKus = 250;
}
else if(pocet<=500)
{
    cenaZaKus = 200;
}
else if(pocet<=1000)
{
    cenaZaKus = 150;
}
else {
    cenaZaKus = 120;
}

const celkovaCena = pocet*cenaZaKus;
document.body.innerHTML += `Objednáváte ${pocet} ks, celková cena Vaší objednávky je ${celkovaCena} Kč (cena za 1 ks je ${cenaZaKus} Kč).`;
