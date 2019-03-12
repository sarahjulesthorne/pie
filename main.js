const pies = [
{
    name: 'Dutch Apple Pie',
    ingredients: 'apples, cinamon, ginger, lemon',
    bakeTemp: 5000,
    drinkPair: 'tea',
    image: '',
    instructor: 'Zoey',
iceCream: 'vanilla',
},
{
    name: 'Burban Pecan',
},
{
    name: 'Chocolate Cream',
},
{
    name: 'lemon silk',
},
{
    name: 'Caramel peanut butter',
},
];
const printToDom = (divId, textToPrint) => {
const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML = textToPrint;
};

const buildDomString = () => {
let domString = '';

pies.forEach((pie) => {
domString += `<h3>`;
domString += `${pie.name}`;
domString += `</h3>`;
})
printToDom('pieDiv', domString);
};
const init = () => {
buildDomString();
};
init();