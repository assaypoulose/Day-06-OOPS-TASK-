class Person {
    // Define properties with their types and default values
    constructor(firstName = '', lastName = '', age = 0, gender = '', address = '') {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.address = address;
    }
  
    // Define methods to get and set the properties
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    setFullName(fullName) {
      const names = fullName.split(' ');
      this.firstName = names[0];
      this.lastName = names[1];
    }
  
    toString() {
      return `Person: ${this.getFullName()}, Age: ${this.age}, Gender: ${this.gender}, Address: ${this.address}`;
    }
  }
  //You can create an instance of this class and set its properties like this:

  const person = new Person('Assay Poulose', 'Peenikkaparamban', 30, 'Female', 'Germany');
  console.log(person.toString()); // Output- Person: Assay Poulose Peenikkaparamban, Age: 30, Gender: Female, Address: Germany

  //Or, you can create an instance with default values and then set the properties later:

  //const person = new Person();
//person.setFullName('Assay Poulose');
//person.age = 30;
//person.gender = 'Female';
//person.address = 'Germany';
//console.log(person.toString()); // Output: Person: Assay Poulose, Age: 30, Gender: Female, Address: Germany