"use strict";
var Form;
(function (Form) {
    class Myform {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    Form.myForm = new Myform('email.com');
})(Form || (Form = {}));
console.log(Form.myForm);
//# sourceMappingURL=namespaces.js.map