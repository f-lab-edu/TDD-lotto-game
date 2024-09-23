export default class Modal {
    static displayModal(prizeResults, totalSpent) {
        const prizes = {
            '3개': { count: 0, prize: 5000 },
            '4개': { count: 0, prize: 50000 },
            '5개': { count: 0, prize: 1500000 },
            '5개 + 보너스볼': { count: 0, prize: 30000000 },
            '6개': { count: 0, prize: 2000000000 },
        };

        let totalPrize = 0;

        prizeResults.forEach((result) => {
            let matchKey = '';

            if (result === 5000) {
                matchKey = '3개';
            } else if (result === 50000) {
                matchKey = '4개';
            } else if (result === 30000000) {
                matchKey = '5개 + 보너스볼';
            } else if (result === 1500000) {
                matchKey = '5개';
            } else if (result === 2000000000) {
                matchKey = '6개';
            }

            if (prizes[matchKey]) {
                prizes[matchKey].count++;
                totalPrize += prizes[matchKey].prize || 0;
            }

            console.log(`매칭 결과: ${matchKey}, 총 상금: ${totalPrize}`);
        });

        totalSpent = totalSpent || 0;

        const roi = totalSpent > 0 ? ((totalPrize / totalSpent) * 100).toFixed(2) : '0.00';

        console.log(`총 상금: ${totalPrize}`);
        console.log(`총 구매 금액: ${totalSpent}`);
        console.log(`총 수익률: ${roi}%`);

        const modalContent = Object.entries(prizes)
            .map(([matches, info]) => {
                return `<tr class="resultTable">
                  <td>${matches}</td>
                  <td>${info.prize.toLocaleString()}원</td>
                  <td>${info.count}</td>
              </tr>`;
            })
            .join('');

        const modalHTML = `
          <div class="modal">
              <div class="modal-content">
                  <span class="close-button">×</span>
                  <h2>🏆 당첨 통계 🏆</h2>
                  <table>
                      <thead>
                          <tr>
                              <th>일치 개수</th>
                              <th>당첨금</th>
                              <th>당첨 갯수</th>
                          </tr>
                      </thead>
                      <tbody>
                          ${modalContent}
                      </tbody>
                  </table>
                  <p>당신의 총 수익률은 ${roi}% 입니다.</p>
                  <button onclick="location.reload()">다시 시작하기</button>
              </div>
          </div>
      `;

        document.body.innerHTML += modalHTML;

        document.querySelector('.close-button').addEventListener('click', () => {
            const modal = document.querySelector('.modal');
            modal.style.display = 'none';
        });
    }
}
