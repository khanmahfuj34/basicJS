function gost(employe, name) {
    employe(name);
}
const employe = function(name) {
    console.log("hello employe", name);

}
const employe2 = function(name) {
    console.log("hello employe2", name);
}
const worker = function(name) {
    console.log("hello worker", name);
}
gost(employe, "Hero alom");
gost(employe2, "Salman shah");
gost(worker, "Razzak");