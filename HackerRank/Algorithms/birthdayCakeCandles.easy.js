function birthdayCakeCandles(candles) {
    let tallestCandlesUnits = 0;
    let maxHeight = Math.max(...candles);
    for(let i = 0; i < candles.length; i++){
        if(candles[i] == maxHeight){
            tallestCandlesUnits += 1;
        };
    };
    return tallestCandlesUnits;
}


birthdayCakeCandles([3, 2, 1, 3]);

