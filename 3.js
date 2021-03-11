/*
Анаграмма
Так называют слово, которое содержит все буквы другого слова в том же количестве, но ином порядке.
Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
strin.charCodeAt() (Выводит кодировку данной строки)
 */

function Anagramma(one = 'hello' , two = 'lloeh') {
    let bite_one = 0;
    let bite_two = 0;
    if (one.length === two.length) {
        for (let i=0; i < one.length; i++) {
            bite_one += one[i].charCodeAt()
        } 
        for (let i=0; i < two.length; i++) {
            bite_two += two[i].charCodeAt()
        } 
        if (bite_one === bite_two) {
            console.log(`Слова ${one} и ${two} являются анаграммами`)
        }
    } else {
        console.log(`Слова ${one} и ${two} не являются анаграммами`)
    }
}
Anagramma()
