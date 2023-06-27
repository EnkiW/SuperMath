let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come Back ;(";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
})
class SuperMath {
    check(obj) {
        const { X, Y, znak } = obj;
        if (this.isValidOperator(znak)) {
            const confirmed = confirm(`Ви бажаєте виконати ${znak} з числами ${X} і ${Y}?`);
            if (confirmed) {
                const result = this.calculate(X, Y, znak);
                console.log(`Відповідь: ${result}`);
            } else {
                this.input();
            }
        } else {
            console.log('Введено неправильний знак.');
            this.input();
        }
    }
    isValidOperator(operator) {
        const operators = ['+', '-', '/', '*', '%'];
        return operators.includes(operator);
    }
    calculate(X, Y, operator) {
        switch (operator) {
            case '+':
                return X + Y;
            case '-':
                return X - Y;
            case '/':
                return X / Y;
            case '*':
                return X * Y;
            case '%':
                return X % Y;
        }
    }
    input() {
        const X = Number(prompt('Введіть число X:'));
        const Y = Number(prompt('Введіть число Y:'));
        const znak = prompt('Введіть оператор (+, -, /, *, %):');
        const obj = { X, Y, znak };
        this.check(obj);
    }
}
// ПРиклад використання:
const obj = { X: 48, Y: 8, znak: "*" };
const p = new SuperMath();
p.check(obj);