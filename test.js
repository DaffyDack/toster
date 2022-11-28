var arr = [1, 2, 3, 4, 5]

function getSum(arr) {
    var result = []
    if (!arr.length) return result

    var total = arr.reduce((sum, item) => {
        result.push(sum)
        return sum + item
    })

    result.push(total)

    return result
}

console.log('результат суммы', getSum(arr));


// function sum(n) {
//     sum.result += n;

//     return sum;
// }
// sum.result = 0;
// sum.valueOf = sum.toString = _ => sum.result;

// // console.info(sum(1)(2)(3));
// console.log(sum(1));
// console.log(sum(1));
// console.log(sum(45));

let z = 0

function test() {
    return z++
}
console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());


// 1. как объединить 3 массива. 
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let t = [...arr1, ...arr2, ...arr3]
console.log(t)
    // ну или все в один массив 
function name(...arrs) { return [].concat(...arrs) }
console.log(name(arr1, arr2, arr3))

//2
let arr4 = [2];
let arr5 = [2];
let arr6 = { name: 'Ivan' };
let arr7 = { name: 'Ivan' };

console.log('task 3:', arr4 == 2, arr4 == arr5, arr6 == arr7)

// 4 Найти уникальные значения в массиве.
let numbers = ['one', 'two', 'three', 'five', 'two', 'three', 'four', 'two'];

let a = [...new Set(numbers)]

// 5. Какова последовательность console.log
setTimeout(() => console.log(1), 0)

console.log(2);

Promise.resolve().then(() => console.log(3));

console.log(4);


//Что будет выведено в console
for (let i = 0; i < 10; ++i) {
    setTimeout(function() {
        console.log(i);
    }, 100);
}