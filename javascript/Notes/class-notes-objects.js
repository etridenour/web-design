var course = new Object();

course.title = 'yeah';
course.fun = 'yes';
console.log(course);


//uppercase funciton name means its constructor function
function Course(title, instructor, level, published, views){
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;  
}

var Course1 = new Course("Digital Crafts 16 Week Bootcamp", "Veronica", 1, true, 0);
var Course2 = new Course("24 Week Flex Class", "Paul", 1, true, 0);
var Course3 = new Course("Digital Crafts 16 Week Bootcamp", "Azam", 1, true, 0);

console.log(Course3);

var array = [Course1, Course2, Course3];

console.log(array);

//access elements - access instructor name - Paul
console.log(array[1].instructor);

//delete - instructor deletes from course1, not course2

delete Course1['instructor'];
console.log(Course1);
console.log(Course2);

//new way to for loop

var person = [1, 2, 3, 4];
for (var attribute in person) {
    var value = person[attribute];
    console.log(`${attribute}: ${value}`);
  }

//prototypes

var X = function(j) {
    this.i = 0; //setting default value
    this.j = j;
    this.getJ = function(){
        return this.j;
    };
};

var x1 = new X(3);
var x2 = new X(4);
console.log(X);
console.log(x1);
console.log(x2);

