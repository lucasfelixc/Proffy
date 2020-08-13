module.exports = async function (db, { proffyValue, classesValue, classScheduleValues }) {
    // Inserir dados na table de proffys:
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

    // Inserir dados na table de class:

    const insertedClasses = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classesValue.subject}",
            "${classesValue.cost}",
            "${proffy_id}"
        );
    `)

    const classes_id = insertedClasses.lastID

    // Inserir dados na table classes_schedule:

    const insertedClassScheduleValues = classScheduleValues.map((value) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${classes_id}",
                "${value.weekday}",
                "${value.time_from}",
                "${value.time_to}"
            );
                
        `)
    })

    // Aqui será executado todos os db.run() das class_schedule, utilizando o Promisse.all() que executa um array de promessas todo.
    await Promise.all(insertedClassScheduleValues);

}
