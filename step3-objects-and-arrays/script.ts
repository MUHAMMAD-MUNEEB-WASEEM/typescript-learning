//ARRAYS

//array of string

let names = ['john', 'smith', 'jordan']
names.push('anna')//works fine as string

// Now in above list, we cannot enter any other types like number or boolean
// names.push(5) -> gives an error
// names = 'muneeb' -> error as names should be string

//array of string

let numbers = [1, 2, 3]
numbers.push(4)//works fine as number

// Now in above list, we cannot enter any other types like number or boolean
// names.push('hi) -> gives an error
// names = 'smith' -> error as names should be string
// names[0] = true -> as number

//array of different types

let mixed = [1, 'john', true]

//Now this array can accepts number, string and boolean

mixed.push(4)//works fine as number
mixed.push('anthony')//works fine as string
mixed.push(false)//works fine as bool

//OBJECTS

let ninja= {
    name: 'mario',
    belt: 'black',
    age: 30   
}

ninja.age = 20;
ninja.name = 'henry'

//error
//ninja.age = 'hello' //cannot be string as num
//ninja.belt = true //error as string but giving bool
//ninja.skills = 'fighting' //cannot be enter as ninja only contain 3 key value pairs
// ninja = ['hello'] -> as object not array
