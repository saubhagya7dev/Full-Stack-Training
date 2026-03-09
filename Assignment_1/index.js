const students = [
 { name: "Aman", marks: 85, subject: "Math" },
 { name: "Riya", marks: 42, subject: "Science" },
 { name: "Kabir", marks: 67, subject: "Math" },
 { name: "Sneha", marks: 91, subject: "English" },
 { name: "Arjun", marks: 38, subject: "Science" },
 { name: "Meera", marks: 74, subject: "Math" },
 { name: "Rohan", marks: 59, subject: "English" },
 { name: "Diya", marks: 88, subject: "Science" },
 { name: "Kunal", marks: 46, subject: "Math" },
 { name: "Isha", marks: 95, subject: "English" }
];


// 1st task : Filter students who passed (marks >= 50) and failed (marks < 50)
const passStudents = students.filter(student => student.marks >= 50);
const failStudents = students.filter(student => student.marks < 50);

console.log("Pass Students:", passStudents);
console.log("Fail Students:", failStudents);

// 2nd task : Calculate the average marks of all students
const averageMarks =
  students.reduce((sum, student) => sum + student.marks, 0) / students.length;

console.log("Average Marks:", averageMarks);

// 3rd task : Find the student with the highest marks (topper)
const topper = students.reduce((top, student) =>
  student.marks > top.marks ? student : top
);

console.log("Topper:", topper);

// 4th task : Group students by their subjects
const groupBySubject = students.reduce((group, student) => {
  if (!group[student.subject]) {
    group[student.subject] = [];
  }

  group[student.subject].push(student);

  return group;
}, {});

console.log(groupBySubject);