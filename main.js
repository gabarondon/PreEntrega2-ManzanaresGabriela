
let userName='';
let userContact='';
let choiceCart='';
let totalCart=0;
let choiceCartArray =[];
let userArray = [];
let suplement;

class User {
    constructor(name,contact){
        this.name = name;
        this.contact = contact; 
    }
}
class Supplement {
    constructor(name, price, stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    sell(mount) {
        if (mount <= this.stock) {
        this.stock = this.stock - mount;
        return this.price * mount;
        } else {
        return "Sin stock";
        }
    }
}

function entranceGreeting () {
alert('¡Bienvenido a MercaFit!')
}

function nameContact (userName, userContact) {
    let user= userArray.find(element=>element.name==userName||element.contact==userContact); 
    if (!user){
    userArray.push (new User(userName, userContact));
    }
alert ('Gracias por tu compra '+ '' + userName + ' te contactaremos al '+ '' + userContact + '' + 'cuando tu pedido esté en camino.'); 
}

function payment () {
    alert ('Esta es la cantidad a pagar ' + totalCart);

userName=prompt ('Para finalizar la compra ingresa tu nombre:');

userContact=prompt ('También ingresa tu número de whatsapp para contactarte:');

nameContact (userName, userContact);

}


entranceGreeting ();

while(choiceCart !=9){
    const proteins = wheyProteinStock(['Cookies and cream🍪.', 'Fresa🍓', 'Chocolate🍫'],50, 5);
    const pills = pillsStock(['Fit9', 'Restore'],58, 4);
    const collagens = collagenStock(['Strawberry🍓-Lemonade🍋', 'Watermelon🍉', 'Chocolate🍫'],60, 10);
    const headerText = 'Selecciona el producto que deseas agregar al carrito: \n';
    let promptText = '';
    let nextValue = 1;
    const stock = proteins.concat(pills, collagens);

    for(let element in stock){
        console.log(stock[element]);
        promptText += `${nextValue}. ${stock[element].name}. \n`;
        nextValue ++;
    }

    choiceCart= prompt(headerText+ promptText+`${nextValue}. Pagar.`);

switch(choiceCart) {
    
    case '1': 
        suplement = stock[choiceCart-1];
        if(suplement.sell(1) == 'Sin stock'){
            alert('Sin stock');
        }
        else{
            alert(suplement.name + ' $'+suplement.price + ' , agregado al carrito ✅');
            totalCart= totalCart+suplement.price;
            choiceCartArray.push(suplement);
            console.log(totalCart);
            console.log(choiceCartArray);
        }
        break;
    
     
    case '2':
        suplement = stock[choiceCart-1];
        if(suplement.sell(1) == 'Sin stock'){
            alert('Sin stock');
        }
        else{
            alert(suplement.name + ' $'+suplement.price + ' , agregado al carrito ✅');
            totalCart= totalCart+suplement.price;
            choiceCartArray.push(suplement);
            console.log(totalCart);
            console.log(choiceCartArray);
        }
        break;

    case '3':
    suplement = stock[choiceCart-1];
        if(suplement.sell(1) == 'Sin stock'){
            alert('Sin stock');
        }
        else{
            alert(suplement.name + ' $'+suplement.price + ' , agregado al carrito ✅');
            totalCart= totalCart+suplement.price;
            choiceCartArray.push(suplement);
            console.log(totalCart);
            console.log(choiceCartArray);
        }
        break;
    
    case '4':
    suplement = stock[choiceCart-1];
        if(suplement.sell(1) == 'Sin stock'){
            alert('Sin stock');
        }
        else{
            alert(suplement.name + ' $'+suplement.price + ' , agregado al carrito ✅');
            totalCart= totalCart+suplement.price;
            choiceCartArray.push(suplement);
            console.log(totalCart);
            console.log(choiceCartArray);
        }
        break;

    case '5':
    suplement = stock[choiceCart-1];
        if(suplement.sell(1) == 'Sin stock'){
            alert('Sin stock');
        }
        else{
            alert(suplement.name + ' $'+suplement.price + ' , agregado al carrito ✅');
            totalCart= totalCart+suplement.price;
            choiceCartArray.push(suplement);
            console.log(totalCart);
            console.log(choiceCartArray);
        }
        break;

    case '6':
    suplement = stock[choiceCart-1];
        if(suplement.sell(1) == 'Sin stock'){
            alert('Sin stock');
        }
        else{
            alert(suplement.name + ' $'+suplement.price + ' , agregado al carrito ✅');
            totalCart= totalCart+suplement.price;
            choiceCartArray.push(suplement);
            console.log(totalCart);
            console.log(choiceCartArray);
        }
        break;

    case '7':
    suplement = stock[choiceCart-1];
        if(suplement.sell(1) == 'Sin stock'){
            alert('Sin stock');
        }
        else{
            alert(suplement.name + ' $'+suplement.price + ' , agregado al carrito ✅');
            totalCart= totalCart+suplement.price;
            choiceCartArray.push(suplement);
            console.log(totalCart);
            console.log(choiceCartArray);
        }
        break;

    case '8':
    suplement = stock[choiceCart-1];
        if(suplement.sell(1) == 'Sin stock'){
            alert('Sin stock');
        }
        else{
            alert(suplement.name + ' $'+suplement.price + ' , agregado al carrito ✅');
            totalCart= totalCart+suplement.price;
            choiceCartArray.push(suplement);
            console.log(totalCart);
            console.log(choiceCartArray);
        }
        break;

    case '9':
        alert('Estamos procesando tu pago');
        payment ();
    break;
    
    default: 
    alert('Esta opcion no esta disponible, intenta de nuevo.');
break;
   
}
}

function wheyProteinStock(flavors, price, stock){
    let arrayResult = [];
    for(let flavor in flavors){
        arrayResult.push(new Supplement('Whey protein de '+ flavors[flavor],price,stock));
    }

    return arrayResult;
}

function collagenStock(flavors, price, stock){
    let arrayResult = [];
    for(let flavor in flavors){
        arrayResult.push(new Supplement('Collagen de '+ flavors[flavor],price,stock));
    }

    return arrayResult;
}

function pillsStock(flavors, price, stock){
    let arrayResult = [];
    for(let flavor in flavors){
        arrayResult.push(new Supplement(flavors[flavor],price,stock));
    }

    return arrayResult;
}


console.log(userArray);






