let myJsonObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
// value of second key

let ans1 = myJsonObject["key2"];

let myArray = ["value", "value2", "value3"];
// value of 3rd element
delete myArray[1];
console.log(myArray);
let ans2 = myArray[2];

let arrayOfJsonObjs = [{ key1: "value1" }, { key2: "value2" }];
// key of second element
// value of first

let ans3 = Object.keys(arrayOfJsonObjs[1]);
console.log("anser2: " + ans3);

let ans4 = arrayOfJsonObjs[0].key1;

let arrayOfJsonObjs2 = [
  { key1: "value1", key2: "value2" },
  { key3: "value3", key4: "value4" },
];
// key4
// value3

delete arrayOfJsonObjs2[1].key3;
delete arrayOfJsonObjs2[1].key4;
console.log(arrayOfJsonObjs2);

arrayOfJsonObjs2.push({ key5: "value5" });
console.log(arrayOfJsonObjs2);
let ans5 = Object.keys(arrayOfJsonObjs2[1])[1];
let ans6 = arrayOfJsonObjs2[1].key3;

let myJsonObjectWithArrays = {
  array1: [0, 2, 3, 5],
  array2: [5, 7, 9, 4],
  array3: [2, 0, 5, 4],
};
//3 element of array 2

let ans7 = myJsonObjectWithArrays["array2"][2];
myJsonObjectWithArrays["array4"] = [5, 6, 67];
console.log(myJsonObjectWithArrays);

console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(ans4);
console.log(ans5);
console.log(ans6);
console.log(ans7);
