const path = require('path');
const DB_PATH = path.join(__dirname+`/../data/db.json`)
let database = require(DB_PATH);
const filesystem = require('fs');

function render(file, response){
    return response.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class QuotesController{
    
    async index(request, response){
        return render("quotes", response);
    }

    async get(request, response){
        return response.send(database);
    }

    async add(request, response){
        const  { body: quote} = request;
        const lastQuote = database[database - 1];
        const {id} = lastQuote;
        quote.id = id;
        database.push(quote);
        filesystem.writeFileSync(DB_PATH, JSON.stringify(database));
        return response.status(201).send();
    }

}

module.exports = new QuotesController();