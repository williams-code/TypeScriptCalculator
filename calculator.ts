// This program is a calculator that accepts a string as an input.
// Example usage: calculate("1+(9-3)");

function calculate(s: string): number {
    let num: number = 0;
    let sign: number = 1;
    const numStack: number[] = [0];
    const signStack: number[] = [];

    for (let i = 0; i < s.length; i++) {
        const c: string = s[i];

        if (c === ' ') {
            continue;
        } else if ('0123456789'.includes(c)) {
            num = num * 10 + parseInt(c);
        } else if (c === '+') {
            numStack[numStack.length - 1] += num * sign;
            num = 0;
            sign = 1;
        } else if (c === '-') {
            numStack[numStack.length - 1] += num * sign;
            num = 0;
            sign = -1;
        } else if (c === '(') {
            numStack.push(0);
            signStack.push(sign);
            num = 0;
            sign = 1;
        } else if (c === ')') {
            const prevNum: number = (numStack.pop()! + num * sign) * signStack.pop()!;
            numStack[numStack.length - 1] += prevNum;
            num = 0;
            sign = 1;
        }
    }
    return numStack[numStack.length - 1] + num * sign;
}
