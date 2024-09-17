export default class LottoResult {
    constructor(lottos, winningNumbers, bonusNumber) {
        this.lottos = lottos;
        this.winningNumbers = winningNumbers;
        this.bonusNumber = bonusNumber;
    }

    checkResults() {
        console.log(this.lottos);
        return this.lottos.map((lotto) => {
            const matchedNumbers = this.getMatchedCount(lotto.value, this.winningNumbers);
            const hasBonus = this.hasBonusNumber(lotto.value, this.bonusNumber);

            switch (matchedNumbers) {
                case 6:
                    return '1등';
                case 5:
                    return hasBonus ? '2등' : '3등';
                case 4:
                    return '4등';
                case 3:
                    return '5등';
                default:
                    return '꽝';
            }
        });
    }

    getMatchedCount(lottoNumbers, winningNumbers) {
        return lottoNumbers.filter((number) => winningNumbers.includes(number)).length;
    }

    hasBonusNumber(lottoNumbers, bonusNumber) {
        return lottoNumbers.includes(bonusNumber);
    }
}
