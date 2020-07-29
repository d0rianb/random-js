const Random = require('../lib/main.js')


const exampleArray = [1, 2, 3, 4, 5]


for (let i = 0; i < 10; i++) {
    console.log(Random.choice(exampleArray))
}