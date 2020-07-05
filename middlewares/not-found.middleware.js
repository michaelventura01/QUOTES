const path = require('path');

function render(file, response){
    return response.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

module.exports = function(request, response, next){
    // return response.status(404).send({
    //     message: "Page Not Found"
    // });
    return render("error", response);
}