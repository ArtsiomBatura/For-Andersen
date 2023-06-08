var arr = prompt("Введите элементы массива через пробел");
var array = arr.split(" ").map(item => item.replace(/\s/g, ""));
for (var i = 0; i < array.length; i++) {
  if (parseInt(array[i]) % 3 === 0){
    console.log(array[i]);
  }
}
