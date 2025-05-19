/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck es un arreglo de string
 * @returns {Array<String>} retorna una carta y la elimina
 */

export const pedirCarta = (deck) => {
    if(!deck || deck.length === 0) throw new Error('No hay cartas en el deck');
    const carta = deck.pop();
    return carta;
}