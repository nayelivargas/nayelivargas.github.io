var numero1 = 0
var numero2 = 0
var cual = 0
var cadena = "0"

function concatenar(numero)
{  
    if(cual == 0)
    {
        if(cadena === "0")
        {
           cadena = numero.toString()
           console.log(cadena)
           document.getElementById("numeros").value = cadena
          
        }  
        else
        {
            var aux = numero.toString()
            cadena+=aux
            console.log(cadena)
            document.getElementById("numeros").value = cadena
        }      
    }
    else if(cual != 0)
    {
        if(cadena === "0")
        {
            cadena = numero.toString()
            console.log(cadena)
            document.getElementById("numeros").value = cadena
        }
        else
        {
            var aux = numero.toString()
            cadena+=aux
            console.log(cadena)
            document.getElementById("numeros").value = cadena
        }
    }   
}

function signo(esta)
{
    console.log(esta.toString())
    numero1 = parseFloat(cadena)
    cadena = "0"
    if(esta === 1)
        cual = 1
    if(esta === 2)
        cual = 2
    if(esta === 3)
        cual = 3
    if(esta === 4)
        cual = 4
}

function suma(numero1,numero2)
{
    return(numero1+numero2)
}

function resta(numero1,numero2)
{
    return(numero1-numero2);
}

function multiplicar(numero1,numero2)
{
    return(numero1*numero2);
}

function dividir(numero1,numero2)
{
    return(numero1/numero2);
}

function resultado()
{
    var resultado = 0
    numero2 = parseFloat(cadena)
    cadena = "0"
    switch(cual)
    {
        case 1:
            resultado = parseInt(this.suma(numero1,numero2))
            console.log(resultado.toString())
            break;
        
        case 2:
            resultado = parseInt(this.resta(numero1,numero2))
            console.log(resultado.toString())
            break;
        
        case 3:
            resultado = parseInt(this.multiplicar(numero1,numero2))
            console.log(resultado.toString())
            break;
        
        case 4:
            resultado = parseInt(this.dividir(numero1,numero2))
            console.log(resultado.toString())
            break;

    }
    cual = 0
    document.getElementById("numeros").value = resultado.toString()
    
}