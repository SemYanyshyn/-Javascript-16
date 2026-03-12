class User {
  static counter = 1;

  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.id = String(User.counter);
    User.counter++;
  }

  getInfo() {
    return `USER:\n${this.name}\n${this.email}\n${this.id}`;
  }

  printInfo() {
    console.log(this.getInfo());
  }
}

class Admin extends User {
  getInfo() {
    return `ADMIN:\n${this.email}`;
  }
}

const user1 = new User("Semen", "sem_yan@gmail.com");
const user2 = new User("Yuriy", "yuriy@gmail.com");
const user3 = new User("Ivan", "ivan@gmail.com");

user1.printInfo();
user2.printInfo();
user3.printInfo();

// ******************

const admin1 = new Admin("Sasha", "sandora@gmail.com");
const admin2 = new Admin("Igor", "igor_cursaches@gmail.com");
const admin3 = new Admin("Andriy", "andriy_tat@gmail.com");

admin1.printInfo();
admin2.printInfo();
admin3.printInfo();

const users = [user1, user2, user3];

users.forEach((user) => user.printInfo());
