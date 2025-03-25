// Code-1
let score = prompt("Eneter your Percentage of 12th !\n");

if(score>100){
    console.log("Eneter valid percentage !");
}

else if(score>=90){
    console.log("Grade A !");
}

else if(score>=80 && score<90){
    console.log("Grade B !");
}

else if(score>=70 && score<80){
    console.log("Grade C !");
}

else if(score>=60 && score<70){
    console.log("Grade D !");
}

else if(score>=50 && score<60){
    console.log("Grade E !");
}

else{
    console.log("Sorry, You've Failed !");
}

console.log("Thank you for Using this Platform !");




//Code-2
function calcfinalPrice(cartValue,membershiplevel,couponCode)
{
    let discount = 0;

    if(membershiplevel==="Platinum"){
        if(cartValue>1000){
            discount=0.4;
        }
        else if(cartValue>500){
            discount=0.3;
        }
        else{
            discount=0.2;
        }
    }

    if(membershiplevel==="Gold"){
        if(cartValue>1000){
            discount=0.35;
        }
        else if(cartValue>500){
            discount=0.25;
        }
        else{
            discount=0.15;
        }
    }

    if(membershiplevel==="Silver"){
        if(cartValue>1000){
            discount=0.3;
        }
        else if(cartValue>500){
            discount=0.2;
        }
        else{
            discount=0.1;
        }
    }

    if(membershiplevel==="Bronze"){
        if(cartValue>1000){
            discount=0.25;
        }
        else if(cartValue>500){
            discount=0.15;
        }
        else{
            discount=0.05;
        }
    }

    if(couponCode==="SAVE10"){
        discount+=0.1;
    }
    else if(couponCode==="SAVE20"){
        discount+=0.2;
    }

    const finalPrice = cartValue*(1-discount);   
    console.log(finalPrice);   
}

calcfinalPrice(1500,"Gold","SAVE10");
calcfinalPrice(3000,"Silver","SAVE20");