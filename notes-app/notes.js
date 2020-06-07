const fs = require('fs')
const chalk = require('chalk')


const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.green.inverse('New Note added'))
    } else {
        console.log(chalk.red.inverse('Note is a duplicate'))
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note is Removed'))
    } else {
        console.log(chalk.red.inverse('No Such Note Found'))
    }

    saveNotes(notesToKeep)
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your Notes'))

    notes.forEach((note) => {
        console.log(chalk.blue(note.title))
    })
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.blue.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Not not Present'))
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
