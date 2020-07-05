const path = require('path');

function render(file, response){
    return response.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class HomeController {

    async index(request, response ){
        // return response.send({
        //     message: "Hola tous"
        // });
        return render("home", response);
    }

    async quotes(request, response) {
        return render ('quotes', response);
    }

    async about(request, response) {
        return render ('about', response);
    }
}

module.exports =  new HomeController();