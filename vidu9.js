const numbers = [1, 3, 5, 7, 9];

const num1s = numbers.map((n) =>{ 
     return n * 2;
});

const num2s = numbers.filter(n => n === 3);

const locSanPham = (...dssanpham) => {
     return dssanpham.filter( n => n === 1 );
     
    };
console.log(locSanPham(1, 2, 3, 4, 1));
console.log(locSanPham(1, 3, 4, 6, 7,8,9));

console.log(numbers);
console.log(num1s);
console.log(num2s)