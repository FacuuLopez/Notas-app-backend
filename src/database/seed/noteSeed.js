import {Note} from "../models/index.js"; // Importa tu modelo de Sequelize

const noteSeed = async () => {
    // Crea un arreglo de objetos para las notas a ser creadas
    const notasUsuario2 = [
        {
            title: "Go to the ofice",
            description: "Tengo que ir a la oficina y entregar los documentos que hacian falta",
            img: "imagen1.jpg",
            userId: 2,
            date: new Date("2023-07-12T09:00:00"), // Agrega 4 horas a la fecha de inicio (9:00 AM)
        },
        {
            title: "Go to the beach",
            description: "A esa hora sale el vuelo a mar del plata",
            img: "imagen2.jpg",
            userId: 2,
            date: new Date("2023-07-16T11:00:00"), // Agrega 5 horas a la fecha de inicio (10:00 AM)
        },
    ];

    const notasUsuario3 = [
        {
            title: "Take the exam",
            description: "Tengo el examen final de TP2",
            img: "imagen3.jpg",
            userId: 3,
            date: new Date("2023-07-02T19:00:00"), // Agrega 8 horas a la fecha de inicio (1:00 PM)
        },
        {
            title: "Go to the hospital",
            description: "tengo turno con el clinico",
            img: "imagen4.jpg",
            userId: 3,
            date: new Date("2023-07-06T14:00:00"), // Agrega 9 horas a la fecha de inicio (2:00 PM)
        },
    ];
    try {
        await // Realiza el bulkCreate para crear las notas en la base de datos
            Note.bulkCreate([...notasUsuario2, ...notasUsuario3])
                .then(() => {
                    console.log("Notas creadas exitosamente.");
                })
                .catch((error) => {
                    console.error("Error al crear las notas:", error);
                });
    } catch (error) {
        console.error(error)
    }
}

export default noteSeed;


// ...
