/// <reference path="form-namespaces.ts" />

namespace Form{
    class Myform {
        private type:  FormType = 'inline'
        private state: FormState = 'active'
    
        constructor(public email: string) {
        }

        getInfo(): FormInfo {
            return {
                type:  this.type,
                state: this.state
            }
        }
    }

    export const myForm = new Myform('email.com')
}

console.log(Form.myForm)

// console.log(myForm)