
document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('.name');
    const designationElement = document.querySelector('.designation');
  
    
    const name = prompt('Enter your name:');
    const designation = prompt('Enter your designation:');
    
    nameElement.textContent = name || 'Mr./Miss Name Here';
    designationElement.textContent = designation || '(Designation Here)';
  });
  