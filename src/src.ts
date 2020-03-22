class Person {
    constructor(private name: string) {
    }
}

const anon = new Person('Serjjjj')

// Demoooo 

// const btn = document.querySelector('#btn')!

// btn.addEventListener('click', () => {
//     console.log('AAaaaaaaaa!')
// })

// =======

let anyFlag

const globalvar = 'message'

function logInfo(data: string, _?: number) {
    // const message = 'string'
    console.log(data)
    anyFlag = true
    console.log(anyFlag)
}

logInfo('I am Groot')

function multiple (a:number, b: number) {
    if(a && b) {
        return a* b
    }
    return 0
}