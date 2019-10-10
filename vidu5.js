const array1 = [1,2,3,4];
const array2 = [... array1,5,6,7];

const name = {
    name1: 'Hoang 1',
    name2: 'Hoang 2',

};
const dsLop = {
    ... name,
    name3: 'Hoang 3',
    name4: 'Hoang 4',
    name5: 'Hoang 5',
};
console.log(name);
console.log(dsLop);
console.log(array1);
console.log(array2);


//Toan Tu Rest

const f1 =(...danhsach) => {
    console.log(danhsach);
}
f1(12,13,14,15,16)
f1(1,2,3,4,5,6,7,8,9);