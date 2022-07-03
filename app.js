//Constructer
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Do not delete this function I am warn you
// Display Constructer
function Display() {

}

//Add method to display prototype
Display.prototype.add = function (book) {

    tableBody = document.getElementById("tableBody");
    let uiString = `
                      <tr>
                        <th scope="row" style="">${book.name}</th>
                        <th scope="row">${book.author}</th>
                        <th scope="row">${book.type}</th>
                    </tr>`
    tableBody.innerHTML += uiString;

}
//clear the form function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

// Implementing the validate function
Display.prototype.validate = function (book) {
    if ((book.name.length < 2) || (book.author.length < 2)) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                     `
    setTimeout(function () {
        message.innerHTML = '';
    }, 5000);

}


//Add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    //radio button intialize here
    let fictions = document.getElementById("fictions");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");
    //input type="radio" is intialize the variable type
    let type;

    //First fictions
    if (fictions.checked) {
        type = fictions.value;
    }
    //Second programming
    else if (programming.checked) {
        type = programming.value;
    }
    //Third cooking
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);
    console.log("You are submitted the form.");

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        //Alert : Show Successfully add your book message
        display.show("success", "Your book is successfully added.");
    }
    else {
        //Alert : Show UnSuccessfully add your book message
        display.show("danger", "Your book is unsuccessfully to added.");

    }
    //to freeze that does not show in the consol.log
    e.preventDefault();
}

