const e = Math.E;

function sin(x) { return Math.sin(x * Math.PI / 180); }
function cos(x) { return Math.cos(x * Math.PI / 180); }
function tan(x) { return Math.tan(x * Math.PI / 180); }
function sqrt(x) { return Math.sqrt(x); }
function log(x) { return Math.log10(x); }
function ln(x) { return Math.log(x); }
function factorial(n) {
    n = Math.floor(Math.abs(n));
    if (n <= 1) return 1;
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
}

let expr = '';
let justCalc = false;

function press(val) {
    if (justCalc) {
        if (!isNaN(val) || val === '.') expr = '';
        justCalc = false;
    }
    expr += val;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = expr || '0';
}

function ac() {
    expr = '';
    justCalc = false;
    updateDisplay();
}

function del() {
    expr = expr.slice(0, -1);
    updateDisplay();
}

function calculate() {
    if (!expr) return;
    try {
        let toEval = expr
            .replace(/π/g, '(Math.PI)')
            .replace(/×/g, '*')
            .replace(/÷/g, '/');
        let result = eval(toEval);
        if (typeof result !== 'number' || !isFinite(result)) throw new Error();
        result = parseFloat(result.toPrecision(10));
        expr = String(result);
        justCalc = true;
        updateDisplay();
    } catch (_) {
        document.getElementById('display').value = 'Error';
        expr = '';
        justCalc = false;
    }
}
