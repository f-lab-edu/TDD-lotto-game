const Input = () => {
    return `
      <div>
        <p>구입할 금액을 입력해주세요.</p>
        <form id="lottoForm">
          <input type="text" id="amount" placeholder="금액 입력" />
          <button type="submit">확인</button>
        </form>
      </div>
    `;
};

export default Input;
