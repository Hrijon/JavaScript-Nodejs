
//utilizing constructor pattern to create object(Student)
//and populating the student properties
function Student(fn,sn,a,d) {
    this.firstName = fn;
    this.surName = sn;
    this.age = a;
    this.degree = d;
    this.displayStudent = function(){
        console.log("First Name: ", this.firstName);
        console.log("Surname: ", this.surName);
        console.log("Age: ", this.age);
        console.log("Degree: ", this.degree);

    };
}//no semi-colon
//create new object
var student =  new Student("Rijan","Chapagain", 19, "Bsc");
student.displayStudent(); //print 
