let netto = document.getElementById("netto");
let brutto = document.getElementById("brutto");

let percent19 = document.getElementById("percent19");
let percent7 = document.getElementById("percent7");

let textInput = document.getElementById("textInput");

let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");

let forText = document.getElementById("forText");
let brutto_or_netto=document.getElementById("brutto_or_netto")



function choose() {

  if (netto.checked)
    forText.innerHTML = "Nettobetrag (Preis ohne Mehrwersteuer) in Euro <b>*</b>";
  
  else if (brutto.checked)
    forText.innerHTML = "Bruttobetrag (Preis inkulisive Mehrwersteuer) in Euro <b>*</b>";
      
}

function sendInfo() {

  if (netto.checked && percent19.checked) {
    let a = textInput.value * 0.19;
    let b = textInput.value * 1.19;
    output1.innerHTML = a.toFixed(2).replace(".",",")+" €";
    output2.innerHTML = b.toFixed(2).replace(".",",")+" €";
    brutto_or_netto.innerHTML= "Bruttobetrag (Endpreis)";


  } else if (netto.checked && percent7.checked) {
    let a1 = textInput.value * 0.07;
    let b1 = textInput.value * 1.07;
    output1.innerHTML = a1.toFixed(2).replace(".",",")+ " €";
    output2.innerHTML = b1.toFixed(2).replace(".",",")+ " €";
    brutto_or_netto.innerHTML= "Bruttobetrag (Endpreis)";


  } else if (brutto.checked && percent19.checked) {
    let a2 = textInput.value / 119 * 19;
    let b2 = textInput.value / 1.19;
    output1.innerHTML = a2.toFixed(2).replace(".",",")+" €";
    output2.innerHTML = b2.toFixed(2).replace(".",",")+" €";
    brutto_or_netto.innerHTML= "Nettobetrag"; 


  } if (brutto.checked && percent7.checked) {
    let a3 = textInput.value / 107 * 7;
    let b3 = textInput.value / 1.07;
    output1.innerHTML = a3.toFixed(2).replace(".",",")+ " €";
    output2.innerHTML = b3.toFixed(2).replace(".",",")+ " €";
    brutto_or_netto.innerHTML= "Nettobetrag"; 
  }

}
