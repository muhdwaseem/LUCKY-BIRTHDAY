const dateofBirth = document.querySelector("#date-of-birth");

const luckyNumber  = document.querySelector("#lucky-number");
const CheckButton = document.querySelector("#check-number");
const OutputBox = document.querySelector("#output-box");

CheckButton.addEventListener("click",checkBirthDateIsLucky)

function calculatedSum(dob){
    dob = dob.replaceAll("-","")
    let sum=0;
    for(index=0;index<dob.length;index++){
        sum= sum+Number(dob.charAt(index));
    }
    return sum;
}
function compareValues(){
    if(sum&&luckyNumber==0){
        OutputBox.innerText ="Your birthday is lucky";
    }
    else{
        OutputBox.innerText = "Your birthday is not lucky";
    }
}
function checkBirthDateIsLucky(){
    const dob= dateofBirth.value;
    const sum =  calculatedSum(dob);
    if(sum&&dob)
        compareValues(sum,luckyNumber.value)
        else
        OutputBox.innerText = "Please enter both fields";
  
}




























// const calculatedSum =(date) => {
//     let sum=0;
//     date = date.replaceAll("-","");
//     for(let digit of date){
//         sum = sum + Number(digit);
//     }
//     return sum;
// };
// const checkIsNumberLucky = (sumOfDate ,numbertToCheck)=>{
//     console.log(sumOfDate,numbertToCheck);
//     if(sumOfDate % numbertToCheck==0){
//         return showMessage("ur birthday is lucky");

//     }
//          showMessage("ur birthday is not lucky");
//     };


// const showMessage = (msg)=>{
// displayMessage.innerText = msg;
// };


// CheckButton.addEventListener("click" , ()=>{
//     const date = dateofBirth.value;
    
//     const numbertToCheck = luckyNumber.value;
//     if(date&& numbertToCheck){
//         const sumOfDate = calculatedSum(date);
// checkIsNumberLucky(sumOfDate,numbertToCheck);
//     }
//     else{
//         showMessage("please enter both fields");
//     }
// });