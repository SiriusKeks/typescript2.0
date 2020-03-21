// const cars: string[] = ['Ford', 'Devatka']
// const cars2: Array<string> = ['Ford', 'Devatka']

// const promise = new Promise<string>(resolve => {
//     setTimeout(() => {
//         resolve('Promise resolved')
//     }, 2000)
// })

// promise.then(data => {
//     console.log(data.toLocaleUpperCase().trim().toLocaleLowerCase())
// })

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}
const merged = mergeObjects({name: 'serj'}, {age: '99'})
const merged2 = mergeObjects({name: 'Lada'}, {age: '92'})

// const merged3 = mergeObjects('aaa', 'bbb')
// console.log(merged3)
// console.log(merged.age)  

/// ============
    
interface ILength {
    length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
return {
    value,
    count: `В этом обьекте ${value.length} символов`
}
}

// console.log(withCount('шо ты тут забыл 0о?'))
// console.log(withCount(['I', ' am', 'array']))
// console.log(withCount(20))
// console.log(withCount({length: 20}))

// =========

// function getObjectValue<T extends object,R extends keyof T>(obj: T, key: R) {
//     return obj[key]
// }

// const person = {
//     name: 'Serj',
//     age: 29,
//     job: 26
// }
// console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'age'))
// console.log(getObjectValue(person, 'job'))

// =========