const ResultLottoInput = () => {
    return `
    <div class="resultInput">
      <p>지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.</p>
      <div class="resultInputcomment">
        <p class="winningNumberInputDivFirst">당첨 번호</p>
        <p class="winningNumberInputDivSecond">보너스 번호</p>
      </div>
      <form id="lottoResultForm">
        <div class="resultInputDiv">
          <div class="winningNumberInputDivFirst">
            <input type="text" class="lottoWinningNumberInput" />
            <input type="text" class="lottoWinningNumberInput" />
            <input type="text" class="lottoWinningNumberInput" />
            <input type="text" class="lottoWinningNumberInput" />
            <input type="text" class="lottoWinningNumberInput" />
            <input type="text" class="lottoWinningNumberInput" />
          </div>
          <div class="winningNumberInputDivSecond">
            <input type="text" class="lottoBonusNumberInput" />
          </div>
        </div>
      </form>
      <button type="submit" id="showResultBtn">결과 확인하기</button>
    </div>
  `;
};

export default ResultLottoInput;
