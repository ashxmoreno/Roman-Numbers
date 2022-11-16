
function toRomanNum(num) {

    if (typeof num === "string" && !num) return "Invalid input, is empty";

    num = +num;

    if (num < 0 || num >= 2000)
        return "Number should be between 1 and 2000";

    if (num >= 1000)
        return "M".repeat(num / 1000) + toRomanNum(num % 1000);
    else if (num >= 900)
        return "CM" + toRomanNum(num % 100);
    else if (num >= 500)
        return "D".repeat(num / 500) + toRomanNum(num % 500);
    else if (num >= 400)
        return "CD" + toRomanNum(num % 100);
    else if (num >= 100)
        return "C".repeat(num / 100) + toRomanNum(num % 100);
    else if (num >= 90)
        return "XC" + toRomanNum(num % 10);
    else if (num >= 50)
        return "L".repeat(num / 50) + toRomanNum(num % 50);
    else if (num >= 40)
        return "XL" + toRomanNum(num % 10);
    else if (num >= 10)
        return "X".repeat(num / 10) + toRomanNum(num % 10);
    else if (num === 9)
        return "IX";
    else if (num >= 5)
        return "V".repeat(num / 5) + toRomanNum(num % 5);
    else if (num === 4)
        return "IV";

    return "I".repeat(num);
}
console.log(toRomanNum(18));
module.exports = toRomanNum;