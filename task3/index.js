function isValidParentheses(str) {
    let n = 0;
    if (str[0] === ')' && str.length > 100) return false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') n++;
        if (str[i] === ')') n--;
    }
    return n === 0;
}


console.log(isValidParentheses("()" )); //=>  true
console.log(isValidParentheses(")(()))"));//=>  false
console.log(isValidParentheses("("   ));//=>  false
console.log(isValidParentheses("(())((()())())"));//=>  true

