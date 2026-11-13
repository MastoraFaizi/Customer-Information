const customerName= "Sana";
const customerAge= 25;
let AvailableBalance= 250;

console.log("Customer Name" , customerName);
console.log("Customer Age" , customerAge);
console.log("Available Balance: $" , AvailableBalance);


console.log("      Resturant Menu     ");
console.log("Item Number | Food Item | Price");
console.log("1 | Burger | $10");
console.log("2 | Pizza | $15");
console.log("3 | Sandwich | $8");
console.log("4 | Pasta | $12");
console.log("5 | Salad | $8");
console.log("6 | Exit | 0");
console.log("                                  ")

let choice = 2;
switch (choice){
    case 1 :
        console.log("You selected burger. Price $10");
        break;

        case 2 :
            console.log("You selected Pizza. Price $15");
            break;

            case 3 :
            console.log("You selected Salad. price $8");
            break;

                case 4:
                    console.log("Thank You For Visiting!");
                    break;

                    default:
                        console.log("Invalid Selection");

}

let quantity = 2;
let foodPrice = 15;

let TotalPrice = quantity * foodPrice;
console.log("Food Price $" , foodPrice);
console.log("Total Price $" , TotalPrice);

let remainingBalance = AvailableBalance - TotalPrice;
console.log("Remaining Balance $" , remainingBalance);

let AdditionalItemsCost = foodPrice * 3;
console.log("Cost of 3 Additional Items: $" , AdditionalItemsCost);




console.log("Is Customer older than 18?", customerAge >= 18);
console.log("Is the available balance greater than the total price?" , AvailableBalance > TotalPrice);
console.log("Is the quantity greater than 1?" , quantity > 1);
console.log("Is the total price equal to zero?" , TotalPrice === 0);
console.log("Is the remaining balance greater than or equal to zero?" , remainingBalance >= 0);

if (customerAge < 18){
console.log("You re underage.");
}
else if (AvailableBalance  < TotalPrice){
    console.log("Insufficient balance.")
}
else {
    console.log("Your order has been placed successfully!");
}


console.log("     Payment Method    ");
console.log("| 1 | Cash |");
console.log("| 2 | Credit Card |");
console.log("| 3 | Bank Transfer |");

let  PaymentMethod = 3;
switch (PaymentMethod){
    case 1 :
        console.log("Payment Method: Cash");
        break;
        
        case 2: 
        console.log("Payment Method: Credit Card");
        break;

        case 3: 
        console.log("Payment Method: Bank Transfer");
        break;
    
        default: 
        console.log("Invalid Payment Method!");

}
