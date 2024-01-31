// function declaration
function reverse(arr) {
    var start = 0;
    var end = arr.length-1

    while (start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
    
}
  // test case
var myArr = ['a', 'b', 'c', 'd', 'e'];
    
  // function call
  console.log(reverse(myArr)); // returns ["e", "d", "c", "b", "a"]