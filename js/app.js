let bookings = [];
    const addBooking = (ev) => {
      ev.preventDefault();
      var data = new FormData(ev.target);
      var booking = Object.fromEntries(data);
      bookings.push(booking);

      localStorage.setItem('Bokningar', JSON.stringify(bookings));
      window.location.href = 'bokning_genomford.html';
    };

    const writeBooking = (ev) => {
      document.getElementById("confirmer").innerHTML += bookings.values();
    }


   /*  const writeBooking = (ev) => {
      let bokningar = JSON.parse(window.localStorage.getItem("Bokningar"));
      document.getElementById("confirmer").innerHTML += bokningar.values;
    } */

    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('confirmButton').addEventListener("click", writeBooking())
      document.forms.myForm.addEventListener('submit', addBooking);
    });
    
    
  



