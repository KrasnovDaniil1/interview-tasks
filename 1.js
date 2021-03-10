/*
Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.
 */
function Hi(word) {
let word_before = word.toUpperCase()    
let word_arr = []   
let word_after = '' ;
    for (let i=0; i < word_before.length; i++) {
        word_arr[i] = word_before[word_before.length-i-1]
        word_after = word_after + word_arr[i]
    }
    if (word_before === word_after) {
        console.log(`Слово ${word} палиндром ` , true)
    } else {
        console.log(`Слово ${word} не палиндром ` , false )
    }
}
Hi('Ollo')