const dateofBirth = document.querySelector("#date-of-birth");

const luckyNumber  = document.querySelector("#lucky-number");
const CheckButton = document.querySelector("#check-number");
const displayMessage = document.querySelector("output-container");
const calculatedSum =(date) => {
    let sum=0;
    date = date.replaceAll("-","");
    for(let digit of date){
        sum = sum + Number(digit);
    }
    return sum;
};
const checkIsNumberLucky = (sumOfDate ,numbertToCheck)=>{
    console.log(sumOfDate,numbertToCheck);
    if(sumOfDate % numbertToCheck==0){
        return showMessage("ur birthday is lucky");

    }
         showMessage("ur birthday is not lucky");
    };


const showMessage = (msg)=>{
displayMessage.innerText = msg;
};


CheckButton.addEventListener("click" , ()=>{
    const date = dateofBirth.value;
    
    const numbertToCheck = luckyNumber.value;
    if(date&& numbertToCheck){
        const sumOfDate = calculatedSum(date);
checkIsNumberLucky(sumOfDate,numbertToCheck);
    }
    else{
        showMessage("please enter both fields");
    }
});