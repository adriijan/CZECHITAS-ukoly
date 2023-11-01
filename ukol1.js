const jmeno = prompt('Napište své křestní jméno (bez diakritiky):').trim();
const jmenoCast = jmeno.slice(0,3).toLowerCase();
const prijmeni = prompt('Zadejte příjmení (bez diakritiky):').trim();
const prijmeniCast = prijmeni.slice(0,5).toLowerCase();
const domena = '@fit.cvut.cz';

document.body.innerHTML += `${prijmeniCast}${jmenoCast}${domena}`;
