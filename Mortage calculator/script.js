const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    const amount = parseFloat(document.getElementById('amount').value);
    const term = parseFloat(document.getElementById('term').value);
    const rate = parseFloat(document.getElementById('rate').value);

    if (isNaN(amount) || isNaN(term) || isNaN(rate) || amount <= 0 || rate <= 0 || term <= 0) {
        alert("Please enter valid positive numbers for all fields.");
        return;
    }

    // Calculate the monthly payment
    const monthlyPayment = calculateMortgage(amount, rate, term);

    // Display the result in the "result-section" paragraph
    document.querySelector('.result-section').innerHTML = `Your monthly payment is Rs ${monthlyPayment}`;
});

function calculateMortgage(principal, annualRate, years) {
    // Convert the annual interest rate to a monthly rate (decimal form)
    const monthlyRate = annualRate / 100 / 12;

    // Total number of payments (years * 12 months)
    const totalPayments = years * 12;

    // Calculate the monthly payment using the formula
    const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow((1 + monthlyRate), -totalPayments));

    return monthlyPayment.toFixed(2); // Return the payment rounded to 2 decimal places
}
