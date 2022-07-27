const input = document.getElementById("input-value");
const inputValue = input.value;

const getInputValue = () =>{
    document.getElementById("tasks").innerHTML = inputValue;
}