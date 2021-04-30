
let result_words = [];

function pigLt(input) {
    
    let value_array = input.split(" ");
    for (let i=0; i<value_array.length; i++) {
        section_array(value_array[i])
    }   
    console.log(result_words)
}

function section_array(value_array) {
    let word = value_array.split("");
    let first_letter = word.shift();

    for (let i=0; i < word.length; i++) {
        result_words += word[i];
    }
    
    result_words += first_letter + "ay" + " ";
}

pigLt("Hello world")