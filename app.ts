import { userService } from "./services/user.service";

// const func = (str: number): Function => {
//     console.log(str);
//     return () => console.log('aaa');
// }

// func(5);
// func(3);

// interface IUser<T> {
//     name: string,
//     age: number,
//     status: boolean,
//     data:T
// }

// const user: IUser<number[]> = {
//     name: 'Simon',
//     status: true,
//     age: 15,
//     data: [1,2,3]
// }

// const user2: IUser<string> = {
//     name: 'Simon',
//     status: true,
//     age: 15,
//     data: "zzz"
// }

// const user3: Partial<IUser<number>> = {

// }

class User {
  constructor(private id: number, private name: string, private age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }
}

const user = new User(15, "sss", 5);
console.log(user.getName());

interface IShapeActions {
  area: () => number;
  perimeter: () => number;
}

interface IGreeting {
  print: () => void;
}

class Rectangle implements IShapeActions, IGreeting {
  constructor(private a: number, private b: number) {}
  area(): number {
    return this.a * this.b;
  }

  perimeter(): number {
    return this.a + this.b + this.b + this.b;
  }

  print(): void {
    console.log("hello");
  }
}

class Triangle implements IShapeActions {
  constructor(private a: number, private b: number, private c: number) {}
  area(): number {
    const pp = (this.a + this.b + this.c) / 2;
    return Math.sqrt(pp * (pp - this.a) * (pp - this.b) * (pp - this.c));
  }

  perimeter(): number {
    return this.a + this.b + this.c;
  }
}

const rect = new Rectangle(5, 4);
rect.print();

const shapes: IShapeActions[] = [
  new Rectangle(1, 2),
  new Rectangle(3, 4),
  new Triangle(1, 2, 2),
];

for (let shape of shapes) {
  console.log(shape.area());
  console.log(shape.perimeter());
}

const asd = () => {
  return 18;
};

type MyNumber = number;

type MyFuncType = ReturnType<typeof asd>;

const g: MyFuncType = 1;

userService
  .getAll()
  .then((value) => value.data)
  .then((users) => {
    for (const user of users) {
      console.log(user.email);
    }
  });

// const start = async () => {
//   const res = await userService.getAll();
//   const users = res.data;
//   for (const user of users) {
//     console.log(user.email);
//   }
// };

// start();

enum DaysOfWeek {
  MON = 0,
  TUE = 1,
  WED = 3,
}
