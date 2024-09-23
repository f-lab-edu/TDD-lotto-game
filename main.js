import './style.css';
import Input from './src/Input';
import Lotto from './src/Lotto';
import ResultLottoInput from './src/ResultLottoInput';
import LottoResult from './src/LottoResult';
import Modal from './src/Modal';

document.querySelector('#app').innerHTML = `
  <div class="mainContainer">
    <h1>🎱 행운의 로또</h1>
    ${Input()}
    <div id="resultContainer"></div>
    ${ResultLottoInput()}
  </div>
`;

let tickets = [];
let amount = 0;

const form = document.querySelector('#lottoForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    amount = document.querySelector('#amount').value;

    if (amount <= 0) {
        alert('유효한 금액을 입력해주세요.');
        return;
    }

    try {
        tickets = Lotto.buy(Number(amount));
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
            ${tickets.map((ticket) => `<p class="ticket">🎟️ ${ticket.value.sort((a, b) => a - b).join(', ')}</p>`).join('')}
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

const resultBtn = document.getElementById('showResultBtn');
resultBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const winningNumbers = Array.from(document.querySelectorAll('.lottoWinningNumberInput')).map((input) =>
        Number(input.value)
    );
    const winningLotto = new Lotto(winningNumbers);
    const bonusNumber = Number(document.querySelector('.lottoBonusNumberInput').value);

    if (winningNumbers.includes(NaN) || isNaN(bonusNumber)) {
        alert('모든 번호를 올바르게 입력해주세요.');
        return;
    }

    const prizeResults = tickets.map((ticket) => {
        return LottoResult.getLottoPrize(ticket, winningLotto, bonusNumber);
    });

    console.log('당첨 로또:', winningLotto);
    console.log('보너스 번호:', bonusNumber);
    prizeResults.forEach((prize, index) => {
        console.log(`티켓 ${index + 1} 당첨금: ${prize}`);
    });

    Modal.displayModal(prizeResults, amount);
});
