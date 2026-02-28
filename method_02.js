
// MAP()

var arr = [3,5,7,1]

// 01
var arr1 = arr.map(function(item,index){

    console.log(item,index)
    return 2*item
})
console.log(arr1)

// 02
var arr2 = arr.map((x,i)=>{
    return 2*x
})
console.log(arr2)

// 03
 var arr3 = arr.map(x=>2*x)
console.log(arr3)

// QUESTION -->

var arr4 = arr.map((x)=>x>5)
console.log(arr4)
// Length remain same

// IMPERATIVE WAY...
// for(let i = 0 ;i<arr.length;i++){
//     arr1[i] = 2*arr[i]
// }

// console.log(arr1)

// FILTER()

var brr = [1,2,3,4,5,6,7]
var brr1 = brr.filter((item,index)=>{
    return item%2 == 0
})
console.log(brr1)

// REDUCE()

var crr = [2,3,4,5,6,7,8,9]
var sum = arr.reduce(function(total,item,index){

    return total += item
},10) // initial value of total 

console.log(sum)

// SORT ()
var drr = [8,5,,7,6,9,43]

drr.sort((a,b)=>{
    return a-b
})
console.log(drr)

var drr1 = drr.sort((a,b)=>{
    return b-a
})
console.log(drr1)

//FIND()

var err = [4,5,6,7,2,9,1]
var err1 = err.find((item,index)=>{
    return item%2 == 0
})

console.log(err1)

// FINDINDEX()

var frr = [3,4,5,1,7,89,0]
var frr1 = frr.findIndex((item,index)=>{
    return item % 2== 0
})

console.log(frr1)

// SOME()

var grr = [4,6,8,"",null]
var grr1 = grr.some((item,index)=>{
    return item>7
})

console.log(grr1)

//  EVERY()


var hrr = [4,6,8,"",null]
var hrr1 = hrr.every((item,index)=>{
    return item>7
})

console.log(hrr1)

// REVERSE()

var irr = [3,4,5,61,8,9]
var irr1 = irr.reverse()
console.log(irr1)

// JOIN()

var jrr = ["S","U","M","I","T"]
var jrr1 = jrr.join("")
console.log(jrr1)

// SPILT()

var jrr2 = jrr1.split("")
console.log(jrr2)

// CONCAT ()

var krr = ["LOVE's"]
var krr1 = ["SUMIT"]
var krr2 = ["SANNU"]

var krr3 = [].concat(krr1,krr,krr2)
console.log(krr3)

// FLAT()

var lrr = [
    [1,2,3,4],
    [54,78],
    ["SUMIT","YOOO"]
]

var lrr1 = lrr.flat(1)
console.log(lrr1)

var lrr2 = [
    [3,[4,[65,[54,[789]]]]],
    [[[[[[[[[[["SUMIT"]]]]]]]]]]],
    [[[[[[[[[[[[["SANNU"]]]]]]]]]]]]]
]
var lrr3 = lrr2.flat(Infinity)

console.log(lrr3)