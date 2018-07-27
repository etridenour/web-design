
//Inheritance
console.log('-----Inheritance-----')

var mom = { 
    firstName: 'Alice', 
    lastName: 'Wong', 
    eyeColor: 'brown', 
    hairColor: 'black' 
}; 

var daughter = { 
    firstName: 'Ilene', 
    hairColor: 'brown' 
};

daughter.__proto__ = mom;

console.log(`Daughter first name : ${daughter['firstName']}
Daughter last name : ${daughter['lastName']}
Daughter eye color : ${daughter['eyeColor']}
Daughter hair color : ${daughter['hairColor']}`);


//Person
console.log('-----Person-----');

class Person{
    constructor(name){
        this.name = name;
        this.createGreeting = this.createGreeting.bind(this);
        this.friends = [];
    }

    addFriend(friend) {
        this.friends.push(friend);
    }

    createGreeting(other){
        return (`Yo ${other.name}! from ${this.name}.`)
    }

    greet(other){
        console.log(this.createGreeting(other));
    }

    lazyGreet(other){
        setTimeout(() => {
            console.log(this.createGreeting(other));
        }, 2000);
    }
    
    createGreetingsForFriends(){
        var friendM = this.friends.map(function(friend){
            console.log(this.createGreeting(friend))
        })
        // console.log(this.friends);
    }
}

var me = new Person('Eric');
var you = new Person('Big Worm');

me.lazyGreet(you);

var alfie = new Person('Alfie'); 
var anushka = new Person('Anushka'); 
var henrique = new Person('Henrique'); 
henrique.addFriend(alfie);
henrique.createGreetingsForFriends();
alfie.addFriend(anushka); 
alfie.addFriend(henrique); 
alfie.createGreetingsForFriends();






