document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const themeBtn = document.getElementById('theme-btn');
  const body = document.body;

  const savedTheme = localStorage.getItem('theme') || 'light';
  body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (generateBtn) {
    generateBtn.addEventListener('click', generateFiveSets);
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
});

function updateThemeIcon(theme) {
  const themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    themeBtn.textContent = theme === 'light' ? '🌙' : '☀️';
  }
}

function generateFiveSets() {
  const container = document.getElementById('lotto-numbers');
  container.innerHTML = '';

  for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');
    row.classList.add('lotto-row');
    
    const numbers = generateLottoNumbers();
    
    numbers.forEach((num, index) => {
      const ball = createBall(num);
      row.appendChild(ball);
      
      // 행과 열의 위치에 따른 시간 지연 애니메이션
      setTimeout(() => {
        ball.style.opacity = '1';
        ball.style.transform = 'translateY(0)';
      }, (i * 150) + (index * 50));
    });
    
    container.appendChild(row);
  }
}

function generateLottoNumbers() {
  const numbers = [];
  while (numbers.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers.sort((a, b) => a - b);
}

function createBall(num) {
  const ball = document.createElement('div');
  ball.classList.add('ball');
  
  if (num <= 10) ball.classList.add('color-1');
  else if (num <= 20) ball.classList.add('color-11');
  else if (num <= 30) ball.classList.add('color-21');
  else if (num <= 40) ball.classList.add('color-31');
  else ball.classList.add('color-41');

  ball.textContent = num;
  ball.style.opacity = '0';
  ball.style.transform = 'translateY(20px)';
  
  return ball;
}
