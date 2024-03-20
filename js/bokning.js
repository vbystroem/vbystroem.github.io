// Funktion för att uppdatera sammanfattningen
function updateSummary() {
    // Hämta värden från formuläret
    var startDate = document.getElementById('startDate').value;
    var daySpan = document.getElementById('daySpan').value;
    var liftkortChecked = document.getElementById('liftkort').checked;
    var selectedPackage = document.querySelector('input[name="packageType"]:checked').parentNode.innerText.trim();
    var age = document.getElementById('age').value;
    var shoeSize = document.getElementById('shoeSize').value;
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var tel = document.getElementById('tel').value;
    var address = document.getElementById('address').value;
    var postalCode = document.getElementById('postalCode').value;
    var city = document.getElementById('city').value;

    // Hämta sammanfattningselementen
    const summaryElements = document.querySelectorAll('#summary .column');

    // Loopa igenom varje element och kolla om det finns ett värde

    // Uppdatera sammanfattningen med de fångade värdena
    document.getElementById('summary').innerHTML = `
    <h3 class="mb-4 text-center">Dina val</h3>
    <p><strong>Bokningsperiod:</strong> fr.o.m.: ${startDate}, ${daySpan} dagar</p>
    <p><strong>Liftkort:</strong> ${liftkortChecked ? 'Ja' : 'Nej'}</p>
    <p><strong>Utrustning:</strong> ${selectedPackage}</p>
    <p><strong>Ålder:</strong> ${age}</p>
    <p><strong>Skostorlek:</strong> ${shoeSize}</p>
    <p><strong>Längd:</strong> ${height} cm</p>
    <p><strong>Vikt:</strong> ${weight} kg</p>
    <p><strong>Namn:</strong> ${fname} ${lname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${tel}</p>
    <p><strong>Adress:</strong> ${address}, ${postalCode}, ${city}</p>
  `;

}

// Lyssna på förändringar i formuläret och uppdatera sammanfattningen
var formInputs = document.querySelectorAll('input, select');
formInputs.forEach(input => {
    input.addEventListener('change', updateSummary);
});

// Uppdatera sammanfattningen när användaren väljer pakettyp
var packageRadios = document.querySelectorAll('input[name="packageType"]');
packageRadios.forEach(radio => {
    radio.addEventListener('change', updateSummary);
});
