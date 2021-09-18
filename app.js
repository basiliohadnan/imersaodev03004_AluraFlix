var listaRecomendacoes = [
  "https://images-na.ssl-images-amazon.com/images/I/81Di7YpouiL.jpg",
  "https://images.squarespace-cdn.com/content/v1/55eb2900e4b079d8e4aebba2/1441574514852-BTNNVFZK32BBMDPTM3E6/image-asset.jpeg",
  "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4dd7e14831adeededf97d2c4030fb7b8b7818d61e4f475d6050b1fa15b947071._RI_V_TTW_.jpg",
];

//   for (i = 0; i < listaRecomendacoes.length; i++) {
//     document.write("<img src=" + listaRecomendacoes[i] + ">");
//   }

listaRecomendacoes.forEach((element) =>
  document.write("<img src=" + element + ">")
);

// var i = 0
// while (i < listaRecomendacoes.length) {
//     document.write("<img src=" + listaRecomendacoes[i] + ">");
//     i++;
// }

function validaURL(url) {
  try {
    new URL(url);
  } catch (e) {
    resultado.innerHTML = "URL inválida, insira outra, por favor :3";
    return false;
  }
  return true;
}

// function checkURL(url) {
//   if (typeof url !== "string") {
//     alert("URL inválida, insira outra, por favor :3");
//     return false;
//   } else {
//     return url.match(/\.(jpg|jpeg|gif|png)$/) != null;
//   }
// }

function adicionarRecomendacao() {
  var resultado = document.getElementById("resultado");
  var inputValor = document.getElementById("input-url").value;
  var urlValida = validaURL(inputValor);
  if (urlValida) {
    if (listaRecomendacoes.includes(inputValor)) {
      resultado.innerHTML =
        "Recomendação já cadastrada, insira outra, por favor :3";
    } else {
      listaRecomendacoes.push(inputValor);
      var img = document.createElement("img");
      img.src = inputValor;
      document.body.appendChild(img);
    }
  }
}
