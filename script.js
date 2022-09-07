function copiar() {
  encriptado.select();
  navigator.clipboard.writeText(encriptado.value);
  encriptado.value = "Texto copiado";
}

function esAlfaNumerico(mensaje)
{
  return /^[a-z0-9]+$/gi.test(mensaje);
}

function encriptar()
 {
    let textoSinEncriptar = document .getElementById("encriptar") .value.toLowerCase();
    if (textoSinEncriptar.length == 0) 
    {
        alert("No hay nada que encriptar");
        return;
    }

    if(!esAlfaNumerico(textoSinEncriptar))
    {
      alert("No se aceptan carácteres especiales");
      return;
    }

    let codificado = "";
    for (let i = 0; i < textoSinEncriptar.length; i++) 
    {
        switch (textoSinEncriptar[i]) 
        {
            case "a":
                codificado += "ai";
                break;
            case "e":
                codificado += "enter";
                break;
            case "i":
                codificado += "imes";
                break;
            case "o":
                codificado += "ober";
                break;
            case "u":
                codificado += "ufat";
                break;
            default:
                codificado += textoSinEncriptar[i];
        }
    }
    document.getElementById("encriptado").value = codificado;
}

function desencriptar() {
  let textoEncriptado = document.getElementById("encriptar") .value.toLowerCase();
  if (textoEncriptado.length == 0) 
  {
    alert("No hay nada que desencriptar");
    return;
  }

  if(!esAlfaNumerico(textoEncriptado))
  {
    alert("No se aceptan carácteres especiales");
    return ;
  }
  textoEncriptado = textoEncriptado.replace(/imes/g, "i");
  textoEncriptado = textoEncriptado.replace(/ai/g, "a");
  textoEncriptado = textoEncriptado.replace(/enter/g, "e");
  textoEncriptado = textoEncriptado.replace(/ober/g, "o");
  textoEncriptado = textoEncriptado.replace(/ufat/g, "u");
  document.getElementById("encriptado").value = textoEncriptado;

 
}