const object1 = {
    message: 'hello world',
    price: 34
};

const { price, message } = object1;
console.log(price);
console.log(message);

const object2 = {
    message,
    method(){
        console.log('method');
    }
};

console.log(message)
object2.method()