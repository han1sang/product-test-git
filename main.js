document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  if (generateBtn) {
    generateBtn.addEventListener('click', generateLottoNumbers);
  }
});

function generateLottoNumbers() {
  const container = document.getElementById('lotto-numbers');
  const numbers = [];

  // 1-45 사이의 중복 없는 6개 숫자 생성
  while (numbers.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }

  // 숫자 정렬
  numbers.sort((a, b) => a - b);

  // 컨테이너 초기화
  container.innerHTML = '';

  // 각 번호에 대해 공 요소 생성
  numbers.forEach((num, index) => {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    
    // 번호대별 클래스 부여 (색상)
    if (num <= 10) ball.classList.add('color-1');
    else if (num <= 20) ball.classList.add('color-11');
    else if (num <= 30) ball.classList.add('color-21');
    else if (num <= 40) ball.classList.add('color-31');
    else ball.classList.add('color-41');

    ball.textContent = num;
    
    // 초기 투명도 및 위치 설정
    ball.style.opacity = '0';
    ball.style.transform = 'translateY(20px)';
    ball.style.transition = 'all 0.5s ease';
    
    container.appendChild(ball);

    // 약간의 딜레이와 함께 표시되도록 애니메이션 효과
    setTimeout(() => {
      ball.style.opacity = '1';
      ball.style.transform = 'translateY(0)';
    }, index * 100 + 50); // 약간의 딜레이 추가
  });
}
