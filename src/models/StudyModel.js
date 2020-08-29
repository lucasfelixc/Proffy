const Database = require('../database/db');

const {
    subjects,
    weekdays, 
    getSubject,
    convertHoursToMinutes
} = require('../utils/format')


class PageStudy {
    constructor (req, res) {
        const filters = req.query
        const resposta = res
    }

    gen() {
        resposta.render('study')
    }

}

module.exports = PageStudy