const Database = require('../database/db')

const {
    subjects,
    weekdays, 
    getSubject,
    convertHoursToMinutes
} = require('../utils/format')

class SaveClass {
    constructor (body, redirect) {
        this.data = body
        this.redirect = redirect
    }

    async register() {
        const createProffy = require('../database/createProffy')

        const proffyValue = {
            name: this.data.name,
            avatar: this.data.avatar,
            whatsapp: this.data.whatsapp,
            bio: this.data.bio
        }

        const classesValue = {
            subject: this.data.subject,
            cost: this.data.cost
        }

        const classScheduleValues = this.data.weekday.map((weekday, index) => {
            return {
                weekday,
                time_from: convertHoursToMinutes(this.data.time_from[index]),
                time_to: convertHoursToMinutes(this.data.time_to[index])
            }
        })
        
        try {
            const db = await Database
            await createProffy(db, { proffyValue, classesValue, classScheduleValues })

            // let queryString = '?subject=' + this.data.subject[0]
            // queryString += '&weekday=' + this.data.weekday[0]
            // queryString += '&time=' + this.data.time_from[0]
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = SaveClass