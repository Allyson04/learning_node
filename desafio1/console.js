//importing function getFlag()
const getFlag = require("./getFlag.js")

flags = [
    "--name",
    "--greetings"
]

let values = {}

//getting the value after the flag
flags.forEach((element) => {
    getFlag(element, values)
})

// console.log(values)
console.log(`${values['--greetings']} ${values['--name']}`)