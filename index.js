var name = "Phoebe";
var count_max = prompt('How high should we count?');
var make_sure = confirm("are you sure you want to count to " + count_max "?");

for(var i = 0; i<count_max; i++){
    if (i%2 === 0) {
    console.log(i + " is even");
    }
}
console.log(name + ", " + "hello!!!");

