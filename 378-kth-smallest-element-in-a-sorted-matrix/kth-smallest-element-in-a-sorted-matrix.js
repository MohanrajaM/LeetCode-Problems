/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  

  var margedArray=[]
    for ( var i of matrix){

        for( var j of i){
            margedArray.push(j)
        }
        
    }
    margedArray = margedArray.sort((a,b)=>a-b);

    var output = margedArray[k-1];
    console.log(margedArray)
console.log(output)

    return output
};