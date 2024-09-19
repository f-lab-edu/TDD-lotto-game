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
}
