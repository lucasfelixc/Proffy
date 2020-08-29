const {
    subjects,
    weekdays, 
    getSubject,
    convertHoursToMinutes
} = require('./src/utils/format')


function pageGiveClasses (req, res) {
    return res.render('give-classes.html', { subjects, weekdays });
}

function pageSucess (req, res) {
    return res.render('sucess.html')
}

module.exports = {
    pageGiveClasses,
    pageSucess
}