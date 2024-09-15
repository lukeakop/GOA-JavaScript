document.addEventListener('DOMContentLoaded', function(){
  // This event listener ensures that the code runs only after the DOM is fully loaded

  // Get references to the form and result span elements
  const form = document.getElementById('ageForm');
  const yearsSpan = document.getElementById('years');
  const monthsSpan = document.getElementById('months');
  const daysSpan = document.getElementById('days');

  // Add a submit event listener to the form
  form.addEventListener('submit', function(e){
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the input values and convert them to integers
    const day = parseInt(form.elements.day.value);
    const month = parseInt(form.elements.month.value);
    const year = parseInt(form.elements.year.value);

    // Create a Date object for the birthday (month - 1 because months are 0-indexed in JavaScript)
    const birthday = new Date(year, month - 1, day);
    // Get the current date
    const now = new Date();

    // Check if the date is valid and in the past
    if(isValidDate(birthday) && birthday <= now){
      // Calculate the age
      const age = calculateAge(birthday, now);
      // Display the result
      displayResult(age);
    } else {
      // Display an error if the date is invalid
      displayError();
    }
  });

  // Function to check if a date is valid
  function isValidDate(date){
    return date instanceof Date && !isNaN(date);
  }

  // Function to calculate the age
  function calculateAge(birthday, now){
    let years = now.getFullYear() - birthday.getFullYear();
    let months = now.getMonth() - birthday.getMonth();
    let days = now.getDate() - birthday.getDate();

    // Adjust years and months if necessary
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    // Adjust days if necessary
    if(days < 0){
      const prevMonth = new Date(now.getFullYear(), now.getMonth() - 1, birthday.getDate());
      days = Math.floor((now - prevMonth) / (1000 * 60 * 60 * 24));
      months--;
    }

    return {years, months, days};
  }

  // Function to display the result
  function displayResult(age){
    yearsSpan.textContent = age.years;
    monthsSpan.textContent = age.months;
    daysSpan.textContent = age.days;
  }

  // Function to display an error
  function displayError(){
    yearsSpan.textContent = '--';
    monthsSpan.textContent = '--';
    daysSpan.textContent = '--';
    alert('Please enter a valid date');
  }
});