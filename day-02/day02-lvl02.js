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



// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
// Check if 'on' is found in both python and jargon
// I hope this course is not full of jargon. Check if jargon is in the sentence.
// Generate a random number between 0 and 100 inclusively.
// Generate a random number between 50 and 100 inclusively.
// Generate a random number between 0 and 255 inclusively.
// Access the 'JavaScript' string characters using a random number.
// Use console.log() and escape characters to print the following pattern.


// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

// Exercises: Level 3
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Clean the following text and find the most frequent word (hint, use replace and regular expressions).


//     const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'