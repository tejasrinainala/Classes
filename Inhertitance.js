class student{
    constructor(name,rollno,course)
    {
        this.name=name
        this.rollno=rollno
        this.course=course
    }
}
class grade extends student
{
    constructor(name,rollno,course,marks)
    {
        super(name,rollno,course)
        this.marks=marks
    }
}
const student1= new grade('lilly',518,'cse','100')
console.log(student1)



//output
grade { name: 'lilly', rollno: 518, course: 'cse', marks: '100' }
