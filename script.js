function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthLevel = document.getElementById('strength-level');
    const feedback = document.getElementById('feedback');
    let strength = 0;
  
    if (password.length >= 8) strength += 1;
  
    if (/[A-Z]/.test(password)) strength += 1;
  
    if (/\d/.test(password)) strength += 1;
  
    if (/[\W]/.test(password)) strength += 1;
  
    switch (strength) {
      case 0:
        strengthLevel.style.width = '0%';
        feedback.textContent = '';
        break;
      case 1:
        strengthLevel.style.width = '25%';
        strengthLevel.style.backgroundColor = '#ff6b6b';
        feedback.textContent = 'Weak';
        feedback.className = 'weak';
        break;
      case 2:
        strengthLevel.style.width = '50%';
        strengthLevel.style.backgroundColor = '#ffb74d';
        feedback.textContent = 'Medium';
        feedback.className = 'medium';
        break;
      case 3:
        strengthLevel.style.width = '75%';
        strengthLevel.style.backgroundColor = '#66bb6a';
        feedback.textContent = 'Strong';
        feedback.className = 'strong';
        break;
      case 4:
        strengthLevel.style.width = '100%';
        strengthLevel.style.backgroundColor = '#2e7d32';
        feedback.textContent = 'Very Strong';
        feedback.className = 'strong';
        break;
    }
  }
  