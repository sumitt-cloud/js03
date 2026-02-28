
// LENGTH

var arr = [34,56,21,87,54]
console.log(arr.length)

// INDEX OF()

var brr = [12,76,38,5,19]
console.log(brr.indexOf(5))

// INCLUDES()

var crr = ["SUMIT","SANNU",5,3000]
console.log(brr.includes("SUMIT"))
console.log(brr.includes(5))

// PUSH()

var drr = [56,23,89,""]
drr.push("SANNU")
drr.push("LOVE's","SUMIT")
console.log(drr)

//  QUESTION  -->
 var x = [3,4,5,6].push(7,8,9,10)
 console.log(x)

//POP()

var err = [32,58,6,2,90,4]
console.log(err.pop())
console.log(err)

// UNSHIFT()

var frr = [23,56,87,3,9]
frr.unshift("A")
console.log(frr)

var y = frr.unshift("A")
console.log(y)

// SHIFT ()

var grr = [3,56,87,"SN"]
console.log(grr.shift())
console.log(grr)

// SPLICE ()

var hrr = [565,"",256,51,5]
hrr.splice(3,1,"SUMIT","YOO!",32)
console.log(hrr)

hrr.splice(3)
console.log(hrr)

var z =hrr.splice(3,1,"SUMIT","YOO!",32)
console.log(z)

// SLICE()

var irr = [32,65,"",null,12]

var irr1 = irr.slice(2,5)
console.log(irr1)

var irr2 = irr.slice(2)
console.log(irr2)

console.log(irr)