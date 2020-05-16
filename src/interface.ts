interface Person {
    readonly name: string;
    age: number;
    nickName?: string;
    [propName: string]: any;
    
}
const student:Person = {name: 'Lily', age: 18}
// student.name = 'Kaka' wrong


function addStudent(student: Person) {
    return student
}

const newStudent = addStudent({name: 'Tony',age:20, live: '深圳市'})

// 函数接口： 接口可以用来描述函数
// (...函数参数): void

interface SearchFunc {
    (source: string, subString: string): boolean;
  }

let mySearch: SearchFunc;
mySearch = function(source, subString) {
  let result = source.search(subString);
  return result > -1;
}

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
    [x: string]: Dog;
    [x: number]: Dog;

}
interface ClockConstructor {
    new (hour: number, minute: number);  // 这里的返回值是什么 
}

class Clock implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {  //定义了 structor 的返回值是 tick() 吗；
    tick();
}




