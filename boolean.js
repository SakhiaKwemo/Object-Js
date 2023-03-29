const lied = true
console.log(typeof lied)

const equation = 5 > 6
console.log(typeof equation)


//OR
const truth = (5 > 6) || (6 > 7)
const truth = false || false
const truth = false 

//
false || false --> false
0 + 0 = 0
false || true --> true
0 + 1 = 1
true || false --> true
1 + 0 = 1
true || true --> true
1 + 1 = 2

false -> 0
true -> 1
|| -> +
&& -> *

//AND
const truth = (5 > 6) && (6 > 7)
const truth = false && false
const truth = false 

//
false && false --> false
0 * 0 = 0
false && true --> false
0 * 1 = 0
true && false --> false
1 * 0 = 0
true && true --> true
1 * 1 = 1