function staircase(n) {
    let stairCase = [];
    let caracter = `*`
    if(0 < n && n <= 100){
        for(let i = 0; i < n; i++){
            stairCase.push(caracter.repeat(i + 1));
        }
    }
    stairCase.forEach(stair => {
        const spaces = ' '.repeat(n - stair.length);
        console.log(spaces + stair);
    })
};

staircase(6);