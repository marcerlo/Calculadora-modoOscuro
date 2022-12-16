const suma= () => {
let num = document.getElementById("num").value;
let num2 = document.getElementById("num2").value;
if (num == "" || num2 == "") {
    document.getElementById("res").value = "";
}
else{
    let resultado = parseInt(num) + parseInt(num2);
document.getElementById("res").value = resultado;
}
}
const multi= () => {
    let num = document.getElementById("num").value;
    let num2 = document.getElementById("num2").value;

    if (num == "" || num2 == "") {
        document.getElementById("res").value = "";
    }
    else{
        let resultado = parseInt(num) * parseInt(num2);
        document.getElementById("res").value = resultado;
    }
    }
const resta = () => {
    let num = document.getElementById("num").value;
    let num2 = document.getElementById("num2").value;

    if (num == "" || num2 == "") {
        document.getElementById("res").value = "";
    }
    else{
        let resultado = parseInt(num) - parseInt(num2);
        document.getElementById("res").value = resultado;
    }
    }
    const divi = () => {
        let num = document.getElementById("num").value;
        let num2 = document.getElementById("num2").value;
        if (parseInt(num) == 0 ||  parseInt(num2)== 0 || num == "" || num2 == "") { 
       setTimeout(() => {

            alert("No se puede dividir por 0 oh quizas esta dejado espacios en blanco");
            document.getElementById("num").value="";
             document.getElementById("num2").value="";
      }, "2000")
        }
        else{
            let resultado = parseInt(num) / parseInt(num2);
            document.getElementById("res").value = resultado;
        } 
    }
    const reset=()=>{
        document.getElementById("num").value = "";
        document.getElementById("num2").value = "";
        document.getElementById("res").value = "";
    }
    const raiz=()=>{
  let num3 = document.getElementById("num3").value;
  ra = parent.Math.sqrt(num3);

if(parseInt(num3) < 0 || num3 == ""){
 alert("Nose puede sacar raiz de un numero negativo o de un espacio en blanco");
 setTimeout(() => {
    document.getElementById("num3").value = "";
    document.getElementById("res").value = "";
}, 1000);

}else{
    ra = parent.Math.sqrt(num3);
    document.getElementById("res").value = ra;
    setTimeout(() => {
        document.getElementById("num3").value = "";
        document.getElementById("res").value = "";
    }, 3000);
}
    }
   const oscuro=()=>{
   if(document.body.style.backgroundColor === "white"){
       document.getElementById("titulo").style.color = "white";
       document.body.style.backgroundColor = "black";
       document.body.style.transition = "all 2s";
       document.getElementById("oscuro").value="MODO CLARO";
    
}else{
    document.body.style.backgroundColor = "white";  
    document.getElementById("titulo").style.color = "black";
    document.getElementById("oscuro").value="MODO OSCURO";
}
   }