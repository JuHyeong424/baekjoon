/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const split = s.split('');
    console.log(split);

    for (let i = 0; i < split.length; i++) {
        if ((stack[stack.length - 1] === '(' && split[i] === ')') || (stack[stack.length - 1] === '[' && split[i] === ']') || (stack[stack.length - 1] === '{' && split[i] === '}')) {
            stack.pop();
        } else {
            stack.push(split[i]);
        }
    }

    return stack.length > 0 ? false : true;
};