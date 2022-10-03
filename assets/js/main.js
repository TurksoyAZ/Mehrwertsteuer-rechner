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
    let c = a.toFixed(2) + "".concat(" €");
    let e = c.replace(".", ",");
    let d = b.toFixed(2) + "".concat(" €");
    let f = d.replace(".", ",");
    output1.innerHTML = e;
    output2.innerHTML = f;
    brutto_or_netto.innerHTML= "Bruttobetrag (Endpreis)" 


  } else if (netto.checked && percent7.checked) {
    let a1 = textInput.value * 0.07;
    let b1 = textInput.value * 1.07;
    let c1 = a1.toFixed(2) + "".concat(" €");
    let e1 = c1.replace(".", ",");
    let d1 = b1.toFixed(2) + "".concat(" €");
    let f1 = d1.replace(".", ",");
    output1.innerHTML = e1;
    output2.innerHTML = f1;
    brutto_or_netto.innerHTML= "Bruttobetrag (Endpreis)" 

  } else if (brutto.checked && percent19.checked) {
    let a2 = (textInput.value / 119) * 19;
    let b2 = textInput.value / 1.19;
    let c2 = a2.toFixed(2) + "".concat(" €");
    let e2 = c2.replace(".", ",");
    let d2 = b2.toFixed(2) + "".concat(" €");
    let f2 = d2.replace(".", ",");
    output1.innerHTML = e2;
    output2.innerHTML = f2;
    brutto_or_netto.innerHTML= "Nettobetrag" 

  } if (brutto.checked && percent7.checked) {
    let a3 = (textInput.value / 107) * 7;
    let b3 = textInput.value / 1.07;
    let c3 = a3.toFixed(2) + "".concat(" €");
    let e3 = c3.replace(".", ",");
    let d3 = b3.toFixed(2) + "".concat(" €");
    let f3 = d3.replace(".", ",");
    output1.innerHTML = e3;
    output2.innerHTML = f3;
    brutto_or_netto.innerHTML= "Nettobetrag" 

  }

}
