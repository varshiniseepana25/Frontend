let counterElement = document.getElementById("countervalue");
function Increment() {
    let previouscounterElement = counterElement.textContent;
    let updatedcounterElement = parseInt(previouscounterElement) + 1;
    if(updatedcounterElement >0)
    {
        counterElement.style.color="green";
    }
    else if(updatedcounterElement<0)
    {
        counterElement.style.color="red";
    }
    else{
        counterElement.style.color="black";
    }
    counterElement.textContent = updatedcounterElement;
}

function Decrement() {
    let previouscounterElement = counterElement.textContent;
    let updatedcounterElement = parseInt(previouscounterElement) - 1;
    if(updatedcounterElement >0)
    {
        counterElement.style.color="green";
    }
    else if(updatedcounterElement<0)
    {
        counterElement.style.color="red";
    }
    else{
        counterElement.style.color="black";
    }
    counterElement.textContent = updatedcounterElement;
}

function Reset() {
    let countervalue = 0;
    counterElement.textContent = countervalue;
    counterElement.style.color="black";

}