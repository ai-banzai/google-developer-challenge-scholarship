/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

    // check divisibility
    // print Julia, James, or JuliaJames
    // increment x
while (x<=20) {
    var output = x%5===0&&x%3===0?"JuliaJames":x%3===0?"Julia":x%5===0?"James":x
    console.log(output)
    x++
}
