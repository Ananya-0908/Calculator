let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerText == 'C'){
      string = " "
      document.querySelector('input').value = string;
    }
    else if (e.target.innerText == 'M+') { // Memory Add
      memory += parseFloat(string);
      string = "";
      document.querySelector('input').value = string;
  } else if (e.target.innerText == 'M-') { // Memory Subtract
      memory -= parseFloat(string);
      string = "";
      document.querySelector('input').value = string;
  } else if (e.target.innerText == 'AC') { // Clear Entry
    string = string.slice(0, -1); // Remove the last character
    document.querySelector('input').value = string;
}
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})