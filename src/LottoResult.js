export default class LottoResult {
    static checkResults(lotto, winningLotto, bonusNumber) {
        const matchedNumbers = lotto.matchCount(winningLotto);
        const hasBonus = lotto.contains(bonusNumber);

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
    }

    static getLottoPrize(Lotto, winningLotto, bonusNumber){
        const lottoRangking = this.checkResults(Lotto,winningLotto,bonusNumber);

        switch(lottoRangking){
            case '1등':
                return 2000000000;
            case '2등':
                return 30000000;
            case '3등':
                return 1500000;
            case '4등':
                return 50000;
            case '5등':
                return 5000;
            default:
                return 0;
        }
    }
}
