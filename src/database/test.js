const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados
    proffyValue = {
        name: 'Lucas Felix',
        avatar: 'https://avatars0.githubusercontent.com/u/64923932?s=460&u=66f98b7481af8a74a239b44e814daef68629b9f8&v=4',
        whatsapp: '83991849798',
        bio: 'Apaixonado pelos números e por fazer as pessoas os entenderem. Tem em mente que a matemática sofre de um forte preconceito, e seu principal objetivo é fazer as pessoas verem a sua beleza em meio a tanto medo'
    }

    classesValue = {
        subject: 1,
        cost: '100'
        // O proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        // O class_id virá pelo banco de dados, após cadastrarmos a aula
        {
            weekday: 1,
            time_from: 720,
            time_to: 1250
        },
        {
            weekday: 0,
            time_from: 550,
            time_to: 1250
        }
    ]

    await createProffy(db, {proffyValue, classesValue, classScheduleValues})


    // Consultar os dados inseridos

    // Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys);

    // Consultar as classes de um professor e trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    // console.log(selectedProffys)
    // Considerando que exista um professor que está disponível das 8h às 18h
    // O horário solicitado precisa maior ou igual ao time_from (8h),
    // E menor que o time_to

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "550"
        AND class_schedule.time_to > "550"
    `)

    console.log(selectClassesSchedules)
})