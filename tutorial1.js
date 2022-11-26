const sum = (num1,num2) => num1 + num2;
const PI =3.14;
class SomeMathObjects{
    constructor(){
        console.log('object created');
    }
}
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathObjects = SomeMathObjects;

module.exports ={sum : sum, PI : PI, SomeMathObjects : SomeMathObjects}