const _form = date => ("00" + date).slice(-2)  
const comments =  require('./comments.js')
module.exports = () => {
    return { 
        _date(){
            const d = new Date(); 
            return `${d.getFullYear()}-${_form(d.getMonth() + 1)}.${_form(d.getDate())} ${_form(d.getHours())}:${_form(d.getMinutes())}:${_form(d.getSeconds())}`
        }, 
        comments
    };
} 