const Database = require('../database/db')

const {
    subjects,
    weekdays, 
    getSubject,
    convertHoursToMinutes
} = require('../utils/format')

const SaveClasses = require('../models/SaveClassesModel')
const SaveClass = require('../models/SaveClassesModel')

exports.index = (req, res) => {
    res.render('give-classes.html', { subjects, weekdays })
}

exports.register = async (req, res) => {
    const saveClass = new SaveClass(req.body, res.redirect)
    try {
        await saveClass.register()
        res.redirect('/sucess')
    } catch (error) {
        
    }
    // const createProffy = require('../database/createProffy')

    // const data = req.body

    // const proffyValue = {
    //     name: data.name,
    //     avatar: data.avatar,
    //     whatsapp: data.whatsapp,
    //     bio: data.bio
    // }

    // const classesValue = {
    //     subject: data.subject,
    //     cost: data.cost
    // }

    // const classScheduleValues = data.weekday.map((weekday, index) => {
    //     return {
    //         weekday,
    //         time_from: convertHoursToMinutes(data.time_from[index]),
    //         time_to: convertHoursToMinutes(data.time_to[index])
    //     }
    // })

    // try {
    //     const db = await Database
    //     await createProffy(db, { proffyValue, classesValue, classScheduleValues })

    //     let queryString = '?subject=' + data.subject[0]
    //     queryString += '&weekday=' + data.weekday[0]
    //     queryString += '&time=' + data.time_from[0]

    //     return res.redirect('/sucess')
    // } catch (error) {
    //     console.log(error)
    // }
}