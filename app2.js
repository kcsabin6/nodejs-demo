const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1 + num2 + ' sum total ');
});
eventEmitter.on('listener',()=>{
    console.log('event happened');
})

eventEmitter.emit('tutorial',1,2);
eventEmitter.emit('listener');


class Person extends EventEmitter{  //Person class object can refence EventEmitter class also
   constructor(name){
    super();
    this._name = name;
   } 

   get name(){
    return this._name;
   }
}

let newObj = new Person('Kabita');
newObj.on('call',()=>{
    console.log('My name is '+newObj.name);
});

let objectClass = new Person('Sabin');      //object created 
objectClass.on('name',()=>{         //listener defined
    console.log('my name is '+objectClass.name);
});

newObj.emit('call');
objectClass.emit('name');       //event listened or captured
newObj.emit('call');    //event is synchronously called (ordered)