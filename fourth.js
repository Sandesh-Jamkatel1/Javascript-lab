// First matrix
let row1 = parseInt(prompt("Enter the number of rows for the first matrix: "));
let col1 = parseInt(prompt("Enter the number of columns for the first matrix: "));
let matrix1 = new Array(row1);
for (let i = 0; i < row1; i++) {
    matrix1[i] = new Array(col1);
    for (let j = 0; j < col1; j++) {
        matrix1[i][j] = parseInt(prompt(`Enter value for matrix1[${i}][${j}]: `));
    }
}

// Second matrix
let row2 = parseInt(prompt("Enter the number of rows for the second matrix: "));
let col2 = parseInt(prompt("Enter the number of columns for the second matrix: "));
if (col1 !== row2) {
    alert("Matrix multiplication is not possible. The number of columns in the first matrix must be equal to the number of rows in the second matrix.");
} else {
    let matrix2 = new Array(row2);
    for (let i = 0; i < row2; i++) {
        matrix2[i] = new Array(col2);
        for (let j = 0; j < col2; j++) {
            matrix2[i][j] = parseInt(prompt(`Enter value for matrix2[${i}][${j}]: `));
        }
    }

    // Perform matrix multiplication
    let resultMatrix = new Array(row1);
    for (let i = 0; i < row1; i++) {
        resultMatrix[i] = new Array(col2).fill(0)  ;
        for (let j = 0; j < col2; j++) {
            for (let k = 0; k < col1; k++) {
                resultMatrix[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    // Display the first matrix in a table
    document.write(`<h3>First Matrix:</h3>`);
    document.write(`<table border='1'>`);
    for (let i = 0; i < row1; i++) {
        document.write("<tr>");
        for (let j = 0; j < col1; j++) {
            document.write(`<td style='padding: 8px;'>${matrix1[i][j]}</td>`);
        }
        document.write("</tr>");
    }
    document.write("</table><br><br>");

    // Display the second matrix in a table
    document.write(`<h3>Second Matrix:</h3>`);
    document.write(`<table border='1'>`);
    for (let i = 0; i < row2; i++) {
        document.write("<tr>");
        for (let j = 0; j < col2; j++) {
            document.write(`<td style='padding: 8px;'>${matrix2[i][j]}</td>`);
        }
        document.write("</tr>");
    }
    document.write("</table><br><br>");

    // Display the result matrix in a table
    document.write(`<h3>Result of Matrix Multiplication:</h3>`);
    document.write(`<table border='1'>`);
    for (let i = 0; i < row1; i++) {
        document.write("<tr>");
        for (let j = 0; j < col2; j++) {
            document.write(`<td style='padding: 8px;'>${resultMatrix[i][j]}</td>`);
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
