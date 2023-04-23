window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    
    if (window.scrollY > 100) {
        nav.classList.add('nav-transparent');
    } else {
        nav.classList.remove('nav-transparent');
    }
  });


  function validateForm() {
    const firstName = document.querySelector('input[name="first_name"]').value;
    const lastName = document.querySelector('input[name="last_name"]').value;
    const numTickets = document.querySelector('input[name="num_tickets"]').value;
  
    if (/\d/.test(firstName)) {
      alert('First name cannot contain numbers');
      return false;
    }
  
    if (/\d/.test(lastName)) {
      alert('Last name cannot contain numbers');
      return false;
    }
  
    if (isNaN(numTickets) || numTickets < 1) {
      alert('Number of tickets must be a positive number');
      return false;
    }
    return true;

    
  }

  function validateForm2() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const letters = /^[A-Za-z]+$/;
    
    if (!fname.match(letters) || !lname.match(letters)) {
      alert("First name and Last name must only contain letters.");
      return false;
    }
  }
  