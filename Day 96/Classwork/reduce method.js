const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, cur) => {
    return acc + cur
}, 10) //საწყისი მნიშვნელობა

console.log(sum)

//reduce ფუნქციას გადაეცემა 2 არგუმენტი, პირველი არის ფუნქცია და მეორე საწყისი მნიშვნელობა, reduce ამ კონკრეტულ საწყის ფუნქციას გადასცემს ორ მნიშვნელობას, accumulator და ამჟამინდელ მნიშვნელობას 
//accumulator არის რაღაც მოქმედებების შედეგად მინიჭებული შედეგი




//Reduce Clone:

const manualReduce = (arr, func, startingVal = 0) => {
    let accumulator = startingVal;
    
    for(const value of arr){
        acc = func(arr, value);
    }
    
    return acc
}

console.log(manualReduce(numbers, (acc, cur) => acc + cur, 10))