A = ""
B = 0
output = 0
function calculate(N) {
    if (N == "=") {
        document.getElementById("operation").textContent = "="
        if (operation == 1) {
            output = Number(B) + Number(A);
            console.log(output);
            document.getElementById("firstvalue").textContent = ""
            document.getElementById("secondvalue").textContent = output
        }
        else if (operation == 2) {
            output = Number(B) - Number(A);
            console.log(output);
            document.getElementById("firstvalue").textContent = ""
            document.getElementById("secondvalue").textContent = output
        }
        else if (operation == 3) {
            output = Number(B) * Number(A);
            console.log(output);
            document.getElementById("firstvalue").textContent = ""
            document.getElementById("secondvalue").textContent = output
        }
        else if (operation == 4) {
            output = Number(B) / Number(A);
            console.log(output);
            document.getElementById("firstvalue").textContent = ""
            document.getElementById("secondvalue").textContent = output
        }
        operation = 0
        A = ""
        B = 0
    }
    else if (N == "+") {
        document.getElementById("operation").textContent = "+"
        operation = 1
        B = A
        document.getElementById("firstvalue").textContent = B
        document.getElementById("secondvalue").textContent = ""
        console.log(B);
        A = ""
    }
    else if (N == "-") {
        document.getElementById("operation").textContent = "-"
        operation = 2
        B = A
        document.getElementById("firstvalue").textContent = B
        document.getElementById("secondvalue").textContent = ""
        A = ""
    }
    else if (N == "*") {
        document.getElementById("operation").textContent = "*"
        operation = 3
        B = A
        document.getElementById("firstvalue").textContent = B
        document.getElementById("secondvalue").textContent = ""
        A = ""
    }
    else if (N == "/") {
        document.getElementById("operation").textContent = "/"
        operation = 4
        B = A
        document.getElementById("firstvalue").textContent = B
        document.getElementById("secondvalue").textContent = ""
        A = ""
    }
    else {

        A = A + String(N)
        A = Number(A)
        document.getElementById("secondvalue").textContent = A
        console.log(A);
    }
}
