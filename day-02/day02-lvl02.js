console.log('--01--')
//Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log(`The quote '\x1b[32mThere is no exercise better for the heart than reaching down and lifting people up.\x1b[0m' by John Holmes teaches us to \x1b[34mhelp\x1b[0m one another.`)

console.log('--02--')
// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(`\x1b[34m"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
\x1b[0m Mother Teresa`)

console.log('--03--')
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let numberten = '10'
if (typeof numberten === 'number' && parseInt(numberten) === 10) {
    console.log(` '10' == 10 `)
}
else {
    numberten = parseInt(numberten)
    console.log(` ${numberten} `)
}


console.log('--04--')
// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
const check = () => {
    let num = parseFloat('9.8');
    num = num == 10 ? num : Math.ceil(num)
    return num
}
console.log(check())


console.log('--05--')
// Check if 'on' is found in both python and jargon
function findWordInString(word, string1, string2 = word) {
    let result = string1.includes(word) && string2.includes(word) ? true : false
    return console.log(result)
}

findWordInString('on', 'Python', 'Jargon')

console.log('--06--')
// I hope this course is not full of jargon. Check if jargon is in the sentence.
function findWordInString2(word, string1) {
    let result = string1.includes(word) ? true : false
    return console.log(result)
}

findWordInString2('jargon', 'I hope this couse is not full of jargon')

console.log('--07--')
// Generate a random number between 0 and 100 inclusively.
let random = (min, max) => {
    result = Math.floor((max - min + 1) * Math.random()) + min;
    console.log(result)
}
random(0, 100)

console.log('--08--')
// Generate a random number between 50 and 100 inclusively.
random(50, 100)

// Generate a random number between 0 and 255 inclusively.
console.log('--08--')
random(0, 255)
// Access the 'JavaScript' string characters using a random number.
console.log('--09--')
let randomindex = (string) => {
    let index = Math.floor(Math.random() * string.length);
    result = string[index]
    console.log(result)
}
randomindex("JavaScript")

console.log('--09--')
// Use console.log() and escape characters to print the following pattern.
console.log(
    ' 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125 '
)

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log('--10--')
// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let removebecause = (string2) => {
    let init = string2.indexOf('because')
    let because = 'because because because'
    let end = because.length
    let newstring = string2.substr(init, end)
    console.log(newstring)
}

removebecause('You cannot end a sentence with because because because is a conjunction')
// Exercises: Level 3
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
console.log('--11--')

let countstrings = (string, word) => {
    let regex = new RegExp(word, 'gi')
    let array = string.match(regex)
    console.log(array.length)
}
let str1 = `Love is the best thing in this world. Some found their love and some are still looking for their love.`

countstrings(str1, 'love')

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('--11--')
let str2 = 'You cannot end a sentence with because because because is a conjunction'
countstrings(str2, 'because')

console.log('--12--')
// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//     const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
var removeEspecial = (string) => {
    var newstring = ''
    for (let n = 0; n <= string.length - 1; n++) {
        let RegExp = /[^a-zA-Z0-9\s]/g
        if (!RegExp.test(string[n])) {
            newstring = newstring + string[n]
        }
    } return newstring
}


let str3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'


let newstring = removeEspecial(str3)
console.log(newstring)
//[x]remova os caracteres especiais
//[x]coloque as palavras em um array
//[x]remover repetidas
//[]comparar cada palavra com a string e contar quantas vezes ocorreu
//[]colocar essa palavra no maior e verificar sempre se tem um maior

function mostFrequent(string) {
    var words = string.toLowerCase().split(' ')
    // words = [...new Set(words)]
    var mostFrequentWord = ''
    var maxCount = 0
    var wordCount = {}

    for (const word of words) {
        // console.log(word.length)
        if (word.length > 0) {

            if (wordCount[word]) {
                wordCount[word]++
            } else {
                wordCount[word] = 1

            }

            if (wordCount[word] >= maxCount) {
                maxCount = wordCount[word];
                mostFrequentWord = word;
            }


        }
    }

    console.log(`${mostFrequentWord} : ${maxCount}`)

}



mostFrequent(newstring)


console.log('--13--')
// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
var string13 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

function annualincome(string) {
    const regex = /\d+/g; // Expressão regular para encontrar números

    const numbers = string.match(regex);
    const income = parseInt(numbers[0]) * 12 + parseInt(numbers[1]) + parseInt(numbers[2]) * 12
    console.log(income)
}

annualincome(string13)