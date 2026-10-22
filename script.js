const DEMO_USERS = {
  farmer: { mobile: '9876543210', pin: '1234', label: 'Farmer' },
  fpo: { mobile: '9812345678', pin: '1234', label: 'FPO Lead' },
  driver: { mobile: '9898989898', pin: '1234', label: 'Reefer Driver' }
};

let currentRole = 'farmer';

function selectRole(role, element) {
  currentRole = role;
  
  document.querySelectorAll('.role-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');

  const userData = DEMO_USERS[role];
  document.getElementById('mobile').value = userData.mobile;
  document.getElementById('pin').value = userData.pin;
  document.getElementById('btn-text').innerText = `Log In as ${userData.label}`;
}

function handleLogin(event) {
  event.preventDefault();
  const mobile = document.getElementById('mobile').value;
  const pin = document.getElementById('pin').value;
  const expected = DEMO_USERS[currentRole];

  if (mobile === expected.mobile && pin === expected.pin) {
    alert(`Successfully logged in as ${expected.label}!`);
  } else {
    alert('Invalid Credentials! Please check default demo logins.');
  }
}

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});