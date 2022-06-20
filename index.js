const fs = require('fs');

const crud = {
    posts: [],
    read() {
        crud.posts = JSON.parse(fs.readFileSync('./db.json', { encoding: 'utf-8' }));
        return crud.posts;
    },
    create({ id, content }) {
        const dados = { id, content };
        crud.posts.push(dados);
        fs.writeFileSync('./db.json', JSON.stringify(crud.posts), { encoding: 'utf-8' });
    }
}

// Read
console.log(crud.read());

// Create
crud.create({ id: Date.now(), content: 'Hello World' });


// Update


// Delete