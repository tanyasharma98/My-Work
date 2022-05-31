console.log("This is a Module");

function average(arr){
     let sum =0;
    arr.forEach(element => {
        sum = sum + element;
    });
    return sum/arr.length;
}
// module.exports ={ 
//     avg: average,
//     name: "Tanya",
//     repo: "All"
// }

module.exports.name="Tanya"