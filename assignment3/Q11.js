

let InputData = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

let result = {};
for (let student in InputData){
    // console.log(student);
    
    let subjects = InputData[student];
    // console.log(subjects);
    let marks = Object.values(subjects)
    // console.log(marks);

    let average = marks.reduce((acc, curr)=> acc+curr, 0)/marks.length;
    // console.log(average);
    

    result[student]={average}
    
    
}
console.log(result);
