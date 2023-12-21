// Написати функцію, яка приймає один параметр.При першому виклику вона запам'ятовує його, при другому — 
// підсумовує переданий параметр з тим, що передали перший раз і тд. Все це із замиканнями, наприклад: 
function outerSum() {
    let previousValue = 0;

    function sum(value) {

        previousValue += value;

        return previousValue;
    }

    return sum;
}

const sum = outerSum();

console.log(sum(3)) // 3 
console.log(sum(5)) // 8 
console.log(sum(20)) // 28