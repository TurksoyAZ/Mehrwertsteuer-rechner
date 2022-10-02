
let netto = document.getElementById("netto");
let brutto = document.getElementById("brutto");

let percent19=document.getElementById("percent19")
let percent7=document.getElementById("percent7")

let textInput=document.getElementById("textInput")

let output1=document.getElementById("output1")
let output2=document.getElementById("output2")




function sendInfo(){

if(netto.checked && percent19.checked){
    let a = textInput.value * 0.19
    let b = textInput.value * 1.19
    let c =a.toFixed(1)
    let d =b.toFixed(1)

    output1.innerHTML=c
    output2.innerHTML=d

} else if( netto.checked && percent7.checked){
    let a1= textInput.value * 0.07
    let b1 = textInput.value * 1.07
    let c1 =a1.toFixed(2)
    let d1 =b1.toFixed(2)

    output1.innerHTML=c1
    output2.innerHTML=d1

} else if (brutto.checked && percent19.checked){
    let a2 = textInput.value / 119 * 19;
    let b2 = textInput.value / 1.19
    let c2 =a2.toFixed(1)
    let d2 =b2.toFixed(1)

    output1.innerHTML=c2
    output2.innerHTML=d2

} if (brutto.checked && percent7.checked) {
    let a3 = textInput.value / 107 * 7;
    let b3 = textInput.value / 1.07
    let c3 =a3.toFixed(2)
    let d3 =b3.toFixed(2)

    output1.innerHTML=c3
    output2.innerHTML=d3
}

}