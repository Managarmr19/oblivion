let curiosidades = [];

curiosidades[0] = `El nombre "Iscariote" podría derivar de la palabra hebrea "Ish Kerioth", que significa "Hombre de Kerioth", lo que indica su conexión geográfica con un lugar específico.`;
curiosidades[1] = `La traición de Judas a Jesús es uno de los episodios más conocidos y debatidos en la historia bíblica, particularmente en el contexto de la Pasión de Cristo.`;
curiosidades[2] = `Después de la traición, los apóstoles sintieron la necesidad de restaurar el número completo de doce, simbolizando la totalidad y la continuidad del grupo selecto. Se eligió a Matías para ocupar el lugar de Judas.`;
curiosidades[3] = `Judas se quejó de la generosidad de María al decir que el perfume debería haberse vendido y el dinero dado a los pobres, revelando su falta de comprensión espiritual.`;
curiosidades[4] = `Según algunas versiones, Judas se ahorcó, mientras que otras indican que cayó de cabeza y se reventó por la mitad, derramando todas sus entrañas.`;
curiosidades[5] = `Algunos eruditos sugieren que "Iscariote" podría derivar de la palabra hebrea "Ish Kerioth", mientras que otros proponen que podría ser una corrupción de la palabra latina "sicarius", que se refería a un miembro de los Sicarios, un grupo de rebeldes judíos.`;
curiosidades[6] = `Este documento, aunque no reconocido como canonico, presenta a Judas como el discípulo preferido de Jesús y sugiere que no fue quien lo traicionó, sino que siguió sus órdenes.`;

let numeroCuriosidad;

pau = 1;
console.log(`curiosidades${pau}`);

for (i = 1; i < 6; i ++) {
    numeroCuriosidad = Math.floor(Math.random() * 5);
    document.getElementById(`curiosidad${i}`).textContent = curiosidades[numeroCuriosidad];
}

