let students=[
    { name: "sharan", status:"fail"},
    { name: "teja",status:"success"},
    { name: "sai", status:"success"}
];

let successfulStudents=students.filter(student=>student.status==="success")
console.log(successfulStudents)


