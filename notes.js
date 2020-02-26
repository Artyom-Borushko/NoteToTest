
const fs = require("fs")

const readNotes = (callback) => {
    fs.readFile("./notes-storage.json", "utf-8", (err, content) => {
        if (err) {
            throw new Error(err)
        }
    try {
        callback(JSON.parse(content))
    } catch (error) {
        callback([])
    }
})
}



const writeNotes = (content) => {
    fs.writeFile("./notes-storage.json", JSON.stringify(content), err => {
        if (err) {
            throw new Error(err)
        }
    })
}

const addNote = (title, body) => {
    readNotes(notes => {
        const duplicateTitle = notes.find(eachNote => eachNote.title === title);

        if (duplicateTitle) {
            console.log(`Note with such title: "${title}" already exists`);
        } else {
            notes.push({ title, body })
            writeNotes(notes)
            console.log('Note was added successfully');
        }
    })
}


const listNotes = () => {
    readNotes(notes => {
        if (notes.length) {
            console.log('Ваши заметки: ');
            notes.forEach(note => {
                console.log(note.title);
            });

        } else {
            console.log('There\'s no notes yes')
        }
    })
}


const readNote = (title) => {
    readNotes(notes => {
        const note = notes.find(eachNote => eachNote.title === title)
        if (note) {
            console.log(note.title);
            console.log(note.body);
        } else {
            console.log(`There is no such note: "${title}" in memory`);
        }
    })
}


const removeNote = (title) => {
    readNotes(notes => {
        const arrayAfterRemovingNotes = notes.filter(eachNote => eachNote.title !== title)

        if (arrayAfterRemovingNotes.length !== notes.length) {
            writeNotes(arrayAfterRemovingNotes)
            console.log(`Note with title "${title}" was successfully deleted`);
        } else {
            console.log(`There is nothing to delete with title: "${title}"`);
        }
    })
}


module.exports = {
    addNote: addNote,
    listNotes: listNotes,
    readNote: readNote,
    removeNote: removeNote
}