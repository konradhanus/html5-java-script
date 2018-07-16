(function() {

    function Validator(form) {
        this.form = form;
        this.fields = this.form.querySelectorAll("[required]");
        this.errors = [];

        if (!this.fields.length) return;

        this.form.onsubmit = function (e) {
            e.preventDefault();

            var formValid = this.validate();

            if (formValid) {
                this.form.submit();
            } else {
                return false;
            }

    }.bind(this);
}

    Validator.prototype.validate = function() {
    for (var i = 0; i < this.fields.length; i++) {
        this.validateField(this.field[i]);
    }

    if (!this.errors.length) {
        return true;
    } else {
        return false;
    }
}
Validator.prototype.validateField = function(field) {
    var fieldValid = field.validity.valid;

    if (fieldValid) {
        this.markAsValid(field);
    } else {
        this.errors.push(field.dataset.errorMessage);
        this.markAsInvalid(field);
    }
}

Validator.prototype.markAsValid = function(field) {
    field.classList.remove("invalid");
    field.classList.add("valid");

}

Validator.prototype.markAsInalid = function(field) {
    field.classList.remove("valid");
    field.classList.add("invalid");

}


//var validator1 = new Validator(document.querySelector("#form"));
var validator1 = new Validator(document.querySelector("#form"));

}   ) ();