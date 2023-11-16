function alterarFrase(fraseJorge) {
    let fraseAlterada = fraseJorge.replace("verde", "rosa");

    fraseAlterada = fraseAlterada.replace("azul", "laranja");

    console.log(fraseAlterada);
    console.log('A frase contém as palavras "verde" e "laranja":', fraseAlterada.includes("verde", "laranja"));

    fraseAlterada = fraseAlterada.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR");

    console.log(fraseAlterada);
}

const fraseJorge = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"';

console.log(fraseJorge);

alterarFrase(fraseJorge);