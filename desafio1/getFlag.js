//here we are exporting the function directly! if we exported undirectly this we couldn't use only the function
module.exports = function getFlag(flag, arrayOfValues) {
    let indexOfFlag = process.argv.indexOf(flag)
    const indexOfFlagValue = parseInt(indexOfFlag) + 1
    let value = process.argv[indexOfFlagValue]
    // console.log(`"${value}" is at position ${indexOfFlagValue}`)

    arrayOfValues[flag] = value;
    return value
}