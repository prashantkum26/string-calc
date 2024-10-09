const add = (stringsNums) => {
    if (typeof stringsNums !== "string") throw new Error('Input must be a string.');
    
    const input = stringsNums.replace(/\s+/g, '');
    if (input === '') return 0;

    const cleanedInput = stringsNums.replace(/[^\d,;\n-]+/g, ' ');
    const numArray = cleanedInput.split(/[\s,*\n;]+/);
    let result = 0;
    for (let i = 0; i < numArray.length; i++) {
        const val = numArray[i];
        if (Number(val)) {
            result += Number(val)
        }
    }
    return result;
}

// const a = add("1,2;5\n\n\nr4******6");
// console.log(a)

module.exports = { add };