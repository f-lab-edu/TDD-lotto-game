import './style.css';
import Input from './src/Input';
import Lotto from './src/Lotto';

document.querySelector('#app').innerHTML = `
  <div class="mainContainer">
    <h1>🎱 행운의 로또</h1>
    ${Input()}
    <div id="resultContainer"></div>
  </div>
`;

const form = document.querySelector('#lottoForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const amount = document.querySelector('#amount').value;

    if (amount <= 0) {
        alert('유효한 금액을 입력해주세요.');
        return;
    }

    try {
        const tickets = Lotto.buy(Number(amount));
        const resultContainer = document.querySelector('#resultContainer');
        resultContainer.innerHTML = `
          <div class="showNumberToggle">
            <p>총 ${tickets.length}개를 구매하였습니다.</p>
            <p>번호 보기 
              <label class="switch">
                <input type="checkbox" id="toggleSwitch">
                <span class="slider"></span>
              </label>
            </p>
          </div>
          <div id="ticketNumbers" style="display: none;">
            ${tickets.map((ticket) => `<p class="ticket">🎟️ ${ticket.value.join(', ')}</p>`).join('')}
          </div>
          <div id="ticketIcons">
            ${Array(tickets.length).fill('<p>🎟️</p>').join('')}
          </div>
        `;

        document.getElementById('toggleSwitch').addEventListener('change', () => {
            const ticketNumbers = document.getElementById('ticketNumbers');
            const ticketIcons = document.getElementById('ticketIcons');
            if (document.getElementById('toggleSwitch').checked) {
                ticketNumbers.style.display = 'block';
                ticketIcons.style.display = 'none';
            } else {
                ticketNumbers.style.display = 'none';
                ticketIcons.style.display = 'flex';
            }
        });
    } catch (error) {
        alert(error.message);
        console.log(error);
    }
});
