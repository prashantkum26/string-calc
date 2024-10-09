const add = (stringsNums) => {
    if (typeof stringsNums !== "string") throw new Error('Input must be a string.');
    
    const input = stringsNums.replace(/\s+/g, '');
    if (input === '') return 0;

    const cleanedInput = stringsNums.replace(/[^\d,;\n-]+/g, ' ');
    const numArray = cleanedInput.split(/[\s,*\n;]+/);

    const negativeArr = numArray.filter(num => Number(num) < 0);

    if (negativeArr.length > 0) {
        throw new Error(`Negatives not allowed: ${negativeArr.join(", ")}`);        
    }

    return numArray.reduce((acc, curr) => acc + (Number(curr) > 1000 ? 0 : Number(curr)), 0);
}

module.exports = { add };