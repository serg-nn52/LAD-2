// const prom = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("ok");
//   }, 2000);
// });

// prom.then((err) => console.log(err));

// prom.then(() => {
//   console.log("test");
// });

// const obj = Object.create({});
// console.log(obj);

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayGav() {
    console.log("sayGav ", this.name);
  }
}
const dog = new Dog("Sharik", 5);

class Cat extends Dog {
  constructor(name, age, isTail) {
    super(name, age);
    this.isTail = isTail;
  }

  sayMiay() {
    console.log("Miay ", this.name);
  }
}

const cat = new Cat("Murzik", 3, true);

const bird = {
  name: "aist",
};

console.dir(Cat.prototype);
