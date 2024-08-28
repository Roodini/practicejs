
function add7(num) {
	return num + 7;



}

console.log(add7(7))


function multiply(num1, num2) {
	return num1 * num2;



}

console.log(multiply(7, 2))






function capitalize(string) {
	let newStr = ""

	for (let i = 0; i < string.length; i++) {

		let charCode = string[i].charCodeAt()

		if (i == 0) {


			if (charCode >= 97 && charCode <= 122) {
				newStr += String.fromCharCode(charCode - 32)

			} else {
				newStr += string[i]
			}

		} else {
			if (charCode >= 65 && charCode <= 90) {
				newStr += String.fromCharCode(charCode + 32)

			} else {
				newStr += string[i]

			}
		}
	}
	return newStr
}
console.log(capitalize("HeLlO"))

function lastLetter(string) {
	return string.charAt(string.length - 1);



}

console.log(lastLetter("Hello"))
