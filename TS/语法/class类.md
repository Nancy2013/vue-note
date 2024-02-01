# class 类

## 使用

```js
class Person {}
const p = new Person();
```

## class 类属性

```js
class Person{
    age:number, // 无默认值
    gender='男' // 有默认值
}
```

## class 类构造函数

```js
class Person{
    age:number,
    gender:string,

    // 构造函数用来给实例对象赋初始值
    // 需要给构造函数的参数添加类型注解，但是不需要返回值类型
    constructor(age:number,gender:string){
        this.age=age;
        this.gender=gender;
    }
}

const p = new Person(18,'男')；
```

## class 实例方法

```js
class Point {
  x = 1;
  y = 2;

  scale(n: number) {
    this.x *= n;
    this.y *= n;
  }
}

const p = new Point();
p.scale(10);
```

## class extends 继承父类

```js
class Animal {
  move() {
    console.log('Move along');
  }
}

class Dog extends Animal {
  name = '二哈';
  bark() {
    console.log('汪汪汪');
  }
}

const dog = new Dog();
```

## class implements 实现接口

```js
interface Singable {
    name:string,
    sing():void,
}

class Person implement Singable{
    name="Jack";
    sing(){
        console.log("我的祖国");
    }
}
```

## 类成员的可见性

可以控制 class 内部的属性和方法，对 class 外部的代码是否可见

### 可见性修饰符

- public 公有的
- protected 受保护的
- private 私有的

```js
class Animal{
    // 公有方法，不加public时，默认为公有的
    public move(){
        console.log('Move along');
    }
}
```

```js
// protected 在声明的类及子类中可以访问，在父类及子类的实例对象中不能访问
class Animal{
    protected move(){
        console.log('Move along');
    }

    run(){
        // 可以访问
        this.move();
    };

}

class Dog extends Animal{
    bark(){
        console.log("汪汪汪");
        // 可以访问
        this.move();
    };

}

const dog=new Dog();

// dog.move() // 在实例对象中不能访问
```

```js
// private 私有类型只在当前类中可以访问，在实例对象及子类中不可以访问
class Animal{
    private move(){
        console.log('Move along');
    }

    run(){
        // 可以访问
        this.move();
    };

}

class Dog extends Animal{
      back(){
          this.run(); // 可以访问
          this.move(); // private方法不可以访问
      }
}
```

### 只读修饰符 readonly

```js
class Person{
    // 设置默认值，readonly只能修饰属性，不能修饰方法
    // 设置默认值，不指定类型只赋初始值时，age类型会固定为初始值字面量类型
    readonly age:number=18
    constructor(age:number{
        this.age=age; // 只读修饰符只能在构造函数中赋值
    }

    // 错误演示
    // setAge(){
    //     this.age=20; // 不能执行，不能修改只读属性
    // }
}
```

readonly 可以用在 interface 接口或者对象类型内部，表示只读属性
