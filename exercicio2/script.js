function corrigirString(minhaString) {
    const stringSemEspaco = minhaString.trim();
    console.log(`A variável antes de remover o excesso de espaço tinha ${minhaString.length} caracteres.`);
    console.log(`A variável depois da remoção dos espaços tem ${stringSemEspaco.length} caracteres.`);
    const stringSemTravessao = stringSemEspaco.replace("________", "sticioso");
    console.log(stringSemTravessao)

}

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

corrigirString(minhaString);