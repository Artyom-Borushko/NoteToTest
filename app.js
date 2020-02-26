const yargs = require("yargs")
const notes = require("./notes")

yargs.command({
    command: 'add',
    describe: 'Добавить заметку',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            describe: 'Название заметки'
        },
        body: {
            type: 'string',
            demandOption: true,
            describe: 'Текст заметки'
        }
    },
    handler({ title, body }) {
        notes.addNote(title, body)
    }
});

yargs.command({
    command: 'list',
    describe: 'Список заметок',
    handler() {
        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'Читает заметку',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            describe: 'Название заметки'
        }
    },
    handler({title}) {
        notes.readNote(title)
    }
});

yargs.command({
    command: 'remove',
    describe: 'Удаляет заметку',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            describe: 'Название заметки'
        }
    },
    handler({title}) {
        notes.removeNote(title)
    }
});

yargs.parse()