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

class Collection<T extends number | string |  boolean> {
    //private _items: T[] = []

    constructor (private _items: T[] = []) {}

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }

    get items(): T[] {
        return this._items
    }
}

// const strings = new Collection (['I', 'am', 'grooot'])
// strings.add('!')
// strings.remove('am')
// console.log(strings.items)

// const numbers = new Collection ([1,2,3])
// numbers.add(5)
// numbers.remove(2)
// console.log(numbers.items)

// const objs = new Collection ({a: 1}, {b: 2})
// objs.remove({b: 2})
// console.log(objs.items)

// ========= обьяснение джаваскрипту о соблюдение своих же правил 

interface Car {
    model: string
    year: number
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {}

    if (model.length > 3) {
        car.model = model
    }

    if (year > 2000) {
        car.year = year
    }

    return car as Car
}

//// 

const cars: Readonly<Array<string>> = ['Ford', 'Audi']
// cars.shift() выдает ошибку
// cars[1]

const ford: Readonly<Car> = {
    model: 'Ford',
    year: 2020
}

// ford.model = 'ferrari' ошибка (дженерики это обертки для дополнительной информации о даных)