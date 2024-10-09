const add = (stringsNums) => {
    if (typeof stringsNums !== "string") throw new Error('Input must be a string.');
    
    const input = stringsNums.replace(/\s+/g, '');
    if (input === '') return 0;

}

module.exports = { add };