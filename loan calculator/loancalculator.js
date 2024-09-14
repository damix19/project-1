function calculateLoan(){
    loanAmountValue = document.getElementById
    ("loan-amount").value
    intrestRateValue = document.getElementById
    ("intrest-rate").value
    monthToPay = document.getElementById
    ("month-pay").value

}script.js
// Login form submission handler
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // TO DO: Implement login logic
});

// Register form submission handler
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // TO DO: Implement registration logic
});