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

    let result = 0;
    for (let i = 0; i < numArray.length; i++) {
        const val = numArray[i];
        if (Number(val) && Number(val) <= 1000) {
            result += Number(val)
        }
    }
    return result;
}
// const a = add('1');
// const a = add('1,2,3,4,5,6,7,8,9');
// const a = add("1,2;5\n\n\nr4******6");
// const a = add('1,-2,3,-4')
// const a = add('10000\n8')
// const a = add('//[***]\n1***2***3')
// const a = add('//[*][%]\n1*2%3')
// console.log(a)

module.exports = { add };