function findlength(str){
    return Math.max(...str.split(' ').map(mapTop));

}
function mapTop(elem){
    return elem.length;
}
console.log(findlength("my name is  Aabiru"));