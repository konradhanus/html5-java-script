(function() {

function Vaildator(form) {
    this.form = form;
    this.fields = this.form.querySelectorAll("[required]");
    this.errors = [];

    if(!this.fields.length) return;

    this.message();


}

Vaildator.prototype.message = function() {
    alert("wiadomość");
}


var vaildator = new Vaildator(document.querySelector("#form"));


})();