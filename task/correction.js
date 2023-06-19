const prompt = require ('prompt-sync')();
const id = prompt('enter ID: \t')
const available = prompt('Enter count:\t')
const name = prompt('Enter name: \t')
const author = prompt('Enter author: \t')

let Library = {
    id: parseInt(id),
    available: Boolean,
    count: parseInt(count),
    name: name,
    author: author,

}
console.log('name -> ', Library.name)