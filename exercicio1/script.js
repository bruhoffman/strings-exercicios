function imprimirComidasFavoritas() {
    const nomeUsuario = prompt("Olá, qual o seu nome?");
    const comida1 = prompt("Digite a sua 1ª comida favorita.");
    const comida2 = prompt("Digite a tua 2ª comida favorita.");
    const comida3 = prompt("E fim, digita a tua 3ª comida favorita.");

    console.log(`Estas são as comidas favoritas de ${nomeUsuario}:
    \n- ${comida1}
    \n- ${comida2}
    \n- ${comida3}`);
}

imprimirComidasFavoritas();