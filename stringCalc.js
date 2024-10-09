const add = (stringsNums) => {
    if(typeof stringsNums !== "string") throw new Error('Input must be a string.');
}

module.exports = { add };