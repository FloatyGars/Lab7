const form = document.getElementById('incomeForm');

// Array of valid Trip IDs
const validTripIds = ["TRIP001", "TRIP002", "TRIP003", "TRIP004"];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const tripId = document.getElementById('tripId').value.trim();
    const tripDate = document.getElementById('tripDate').value;
    const bus = document.getElementById('bus').value;
    const grossIncome = document.getElementById('grossIncome').value;
    const bondDeducted = document.getElementById('bondDeducted').value;

    // Validate Trip ID
    if (!validTripIds.includes(tripId)) {
        alert(`Invalid Trip ID! Valid Trip IDs are: ${validTripIds.join(", ")}`);
        return; // Stop form submission
    }

    console.log({
        tripId,
        tripDate,
        bus,
        grossIncome,
        bondDeducted
    });

    alert('Income record saved successfully!');
    form.reset();
});

function cancelForm() {
    if (confirm('Are you sure you want to cancel?')) {
        form.reset();
    }
}
