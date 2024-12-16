//Write a program that takes the marks of
// 5 subjects calculates the grade and displays the grade sheet.
function GradeSheet(){

    //take marks from user
    let sub1 = parseInt(document.getElementById('subject1').value);
    let sub2 = parseInt(document.getElementById('subject2').value);
    let sub3 = parseInt(document.getElementById('subject3').value);
    let sub4 = parseInt(document.getElementById('subject4').value);
    let sub5 = parseInt(document.getElementById('subject5').value);

    if(isNaN(sub1)||isNaN(sub2)||isNaN(sub3)||isNaN(sub4)||isNaN(sub5)){
        document.getElementById('displayMarkSheet').innerHTML="Invalid Marks";
        return;
    }
    let totalMarks = sub1+sub2+sub3+sub4+sub5;
    let averageMarks = totalMarks/5;
    let grade;
    if(averageMarks<0 || averageMarks >100){
        grade = "Invalid Marks";
        return;
    }
    else if(averageMarks > 90 && averageMarks <=100){
        grade = "A";
    }else if(averageMarks > 80 && averageMarks <=90){
        grade = "A-";
    }else if(averageMarks >70 && averageMarks <=80){
        grade = "B";
    }else if(averageMarks >60 && averageMarks <=70){
        grade = "B-";
    }else if(averageMarks >50 && averageMarks <=60){
        grade = "C";
    }else if(averageMarks >40 && averageMarks <=50){
        grade = "C-";
    }else{
        grade = "Less than C-";
    }
    //display marks in Gradesheet form
    document.getElementById('displayMarkSheet').innerHTML = `
    <table border="1">
        <tr>
            <th>Subject</th>
            <th>Marks</th>
        </tr>
        <tr>
            <td>Subject1</td>
            <td>${sub1}</td>
        </tr>
        <tr>
            <td>Subject2</td>
            <td>${sub2}</td>
        </tr>
         <tr>
            <td>Subject3</td>
            <td>${sub3}</td>
        </tr>
        <tr>
            <td>Subject4</td>
            <td>${sub4}</td>
        </tr>
        <tr>
            <td>Subject5</td>
            <td>${sub5}</td>
        </tr>
        <tr>
            <td><strong>Total Marks</strong></td>
            <td><strong>${totalMarks}</strong></td>
        </tr>
        <tr>
            <td><strong>Average Marks</strong></td>
            <td><strong>${averageMarks.toFixed(2)}</strong></td>
        </tr>
          <tr>
            <td><strong>Grade</strong></td>
            <td><strong>${grade}</strong></td>
        </tr>   
    `;
}
