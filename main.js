

function tiradaNormal()
{
    let tirada = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    console.log("Tirada: "+ tirada);
    let resultado = 0;
    switch(tirada)
    {
        case 1: resultado = "-8"; break;
        case 2: resultado = "-7"; break;
        case 3: resultado = "-6"; break;
        case 4: resultado = "-5"; break;
        case 5: resultado = "-4"; break;
        case 6: resultado = "-3"; break;
        case 7: resultado = "-2"; break;
        case 8: resultado = "-1"; break;
        case 9: resultado = "-1"; break;
        case 10: resultado = "+0"; break;
        case 11: resultado = "+0"; break;
        case 12: resultado = "+1"; break;
        case 13: resultado = "+1"; break;
        case 14: resultado = "+2"; break;
        case 15: resultado = "+3"; break;
        case 16: resultado = "+4"; break;
        case 17: resultado = "+5"; break;
        case 18: resultado = "+6"; break;
        case 19: resultado = "+7"; break;
        case 20: resultado = "+8"; break;
    }
    console.log("Resultado: "+ resultado);
    alert("Resultado: " + resultado);
}

function tiradaReducida()
{
    let tirada = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    console.log("Tirada: "+ tirada);
    let resultado = 0;
    switch(tirada)
    {
        case 1: resultado = "-4"; break;
        case 2: resultado = "-3"; break;
        case 3: resultado = "-3"; break;
        case 4: resultado = "-2"; break;
        case 5: resultado = "-2"; break;
        case 6: resultado = "-1"; break;
        case 7: resultado = "-1"; break;
        case 8: resultado = "+1"; break;
        case 9: resultado = "+0"; break;
        case 10: resultado = "+0"; break;
        case 11: resultado = "+0"; break;
        case 12: resultado = "+0"; break;
        case 13: resultado = "+1"; break;
        case 14: resultado = "+1"; break;
        case 15: resultado = "+1"; break;
        case 16: resultado = "+2"; break;
        case 17: resultado = "+2"; break;
        case 18: resultado = "+3"; break;
        case 19: resultado = "+3"; break;
        case 20: resultado = "+4"; break;
    }
    console.log("Resultado: "+ resultado);
    alert("Resultado: " + resultado);
}

function tiradaNormalALT()
{
    let tiradas = [];
    tiradas.push(Math.floor(Math.random() * 17)-8);
    tiradas.push(Math.floor(Math.random() * 17)-8);
    tiradas.push(Math.floor(Math.random() * 17)-8);
    tiradas.sort((a,b) => a-b);
    
    console.log("Tiradas: " + tiradas);

    alert("Resultado: " + tiradas[1]);
}

function tiradaReducidaALT()
{
    let tiradas = [];
    tiradas.push(Math.floor(Math.random() * 9)-4);
    tiradas.push(Math.floor(Math.random() * 9)-4);
    tiradas.push(Math.floor(Math.random() * 9)-4);
    tiradas.sort((a,b) => a-b);
    
    console.log("Tiradas: " + tiradas);

    alert("Resultado: " + tiradas[1]);
}