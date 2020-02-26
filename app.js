const yargs = require("yargs")
const notes = require("./notes")

yargs.command({
    command: 'add',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
        },
        body: {
            type: 'string',
            demandOption: true,
        }
    },
    handler({ title, body }) {
        notes.addNote(title, body)
    }
});

yargs.command({
    command: 'list',
    handler() {
        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
        }
    },
    handler({title}) {
        notes.readNote(title)
    }
});

yargs.command({
    command: 'remove',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
        }
    },
    handler({title}) {
        notes.removeNote(title)
    }
});

yargs.parse()