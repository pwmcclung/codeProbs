function calculate(str) {
    let newStr = str.replace(/(plus)/gi, '+').replace(/(minus)/gi, '-');
    return String(eval(newStr));
    }