
let displayValue = "";

function Display(value) {
   if(displayValue === "0" && value === "0"){
       return;
   }
   if(displayValue === "0" && value !== "." && !/^[0-9]$/.test(value)){
       displayValue = value
   }else{
       displayValue += value;
   }
    document.getElementById("display").innerText = displayValue;

}

function clearDisplay(){
    displayValue = "";
    document.getElementById("display").innerText= '0';
}

function calculate(){
    try{
        const result = eval(displayValue);
        document.getElementById("display").innerText = result;
        displayValue = result.toString();
    }catch (error){
        document.getElementById("display").innerText = "Error";
        displayValue = "";
    }

}
