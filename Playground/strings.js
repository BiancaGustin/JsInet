 function invertir(n){
     console.log("valor original: ", numero);
     numero= numero+""
     numero=numero.split("").reverse().join("");
     console.log("valor invertido:", numero);
 }
 var numero=12345;
invertir(numero);

function alfabetico(str)
{
    console.log("fraseoriginal: ", str);
    str = str + "";
    str= str.split("").sort().join("");
    console.log("frase en orden alfabetico: ", str);
}
alfabetico("webmaster");

function capitalize(frase)
{
    console.log("Original: ", frase);
    
    var separado=frase.split(" ");
    var result="";
    separado.forEach(element => {
        result+=element.charAt(0).toUpperCase()+element.slice(1)+" ";
    });
    console.log("Capitalizado:",result);
    
    return result;
}


var x = "prince of persia";
capitalize(x);

function longestWord(str)
{
    var separado=str.split(" ");
    var result=""
    separado.forEach(element =>{
        if(result.length<element.length)
        {
            result=element;
        }
    });
    console.log("Palabra mas larga: ",result)

    return result;
}

longestWord(x);