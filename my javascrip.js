const time = 30;
const snowing = true;
const ame = "ade";
if (time <= 3 && !snowing){
    console.log(`${ame} can go out!!` );
}else{
    let myMessage = "its dangerous out there!!";
    if(time > 3){
        myMessage += "its cold out here";
    }
    if(snowing){
        myMessage += "you are not free to go out";
    }
    console.log(myMessage);
}



const age = 16;
const isCitizen = true;
const isRegistered = true;
if(age >=18 && isCitizen && isRegistered){
    console.log("you can vote!");
}else
{ 
    let myName = "sorry you are ineligible to vote because";
    if(age < 18){
        myName += "you are underage"
}
if(!isCitizen){
myName += "you are not a citizen";
}if(!isRegistered){
    myName +="you are not registered";
}
console.log(myName);
}


const drinks = "pepsi";
let price;
switch(drinks){
    case "water":
    price = 30;
    break;
    case "malt":
        price = 20;
        break;
        case "pepsi":
            price = 30;
            break;
            case "mirinder":
                price = 30;
                break;
                 case 7+"up":
                price = 30;
                break;
                default:
                price ="the price is not available";
                break;
}
console.log(`the price of ${drinks} is #${price}!!!!`);



const day = 4
let theDay;
switch(day){
    case 1:
        theDay ="monday";
        break;
        case 1:
        theDay ="tuesday";
        break;
        case 2:
        theDay ="wednesday";
        break;
        case 3:
        theDay ="thursday";
        break;
        case 4:
        theDay ="friday";
        break;
        default:
            theDay ="unavailable";
}
console.log(`day ${day} is ${theDay}!!`)



const food = "hamburgerl";
const foodPrice = "hamburger"? 8 :" lasagna" ? 15 : 20;
const beverage = "water";
const beveragePrice = "water"? 0 : "soda" ? 3 : 5;
subTotal = foodPrice + beveragePrice;
const tax = .08 * subTotal;
const tip = "good";
const tipReward = "bad" ? .05*subTotal : "good" ? .15*subtotal : .20;
const finalBill = tax + tip;
console.log( `the price of ${food} : ${foodPrice}
the price of ${beverage} : ${beveragePrice}
the tax : ${tax}
the tip : ${tipReward}
the final bill : ${finalBill}` 

);

const seasion = "dry";
const seasionPeriod = seasion === "summer" ? 3 : seasion==="autum"? 4 : seasion ==="spring" ? 2 : 8;
console.log(seasionPeriod);



const declareNum = (nur)=> {
    return nur / 2;
}
console.log(declareNum(8));
console.log(declareNum(6));
console.log(declareNum(9));
console.log(declareNum(11));

const greet =(nime) => {return `hello ${nime}`;
}
console.log(greet("tade"));

const arrayAverage =(num1,num2,num3) => {
    return (num1 + num2 + num3) / 3;
}
console.log(arrayAverage(3,4,5));

const counterFunc = (counter) => {
    if(counter > 100) {
        counter = 0;
    } else{
        counter++ ;
    }
    return counter;
}
console.log(counterFunc(50))

const nameAge = (name, age) => {
    console.log("hello"+ name);
    console.log("you are "+ age + "years old");
};

function getDay(day){
    return day   * 24;
}
function getHours(day){
   return day * 60;
}
function getMinutes(day){
    return day * 60;
}

console.log(getMinutes(3))
    