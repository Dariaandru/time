const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const add = document.getElementById('add');
const res = document.getElementById('res');


const hour1 = document.getElementById('hour1');
const minute1 = document.getElementById('minute1');
const second1 = document.getElementById('second1');

const substract = document.getElementById('substract');
const reset = document.getElementById('reset');






let resH = Number(0);
let resM = Number(0);
let resS = Number(0);
let resD = Number(0);

let result = 0;

add.addEventListener('click', () => {
    substract.style.display = "block";
    resH += Number(hour.value);
    resM += Number(minute.value);
    resS += Number(second.value);

    while (resH >= 24 || resM >= 60 || resS >= 60)
    {
    if (resH >= 24 ||  Number(hour.value) >= 24)
    {
        resD += 1;
        resH -= 24;
    }

    if (resM >= 60 ||  Number(minute.value) >= 60)
    {
        resH += 1;
        resM -= 60;
    }

    if (resS >= 60 ||  Number(second.value) >= 60)
        {
            resM += 1;
            resS -= 60;
        }

    }
    if (resD == 0)
    {
        result = resH + ":" + resM + ":" + resS;
    }
    else
    {
        result = resD + " day  " + resH + ":" + resM + ":" + resS;
    }

    res.innerHTML = result;

    hour.value = null;
    minute.value = null;
    second.value = null;
});

reset.addEventListener('click', () => {
    resH = Number(0);
    resM = Number(0);
    resS = Number(0);
    resD = Number(0);

    res.innerHTML = null;
});






substract.addEventListener('click', () => {
    resH -= Number(hour1.value);
    resM -= Number(minute1.value);
    resS -= Number(second1.value);

    while (resH < 0 || resM < 0 || resS < 0)
    {
    if (resH < 0)
    {
        resD -= 1;
        resH += 24;
    }

    if (resM < 0)
    {
        resH -= 1;
        resM += 60;
    }

    if (resS < 0)
        {
            resM -= 1;
            resS += 60;
        }

    }
    if (resD == 0)
    {
        result = resH + ":" + resM + ":" + resS;
    }
    else
    {
        result = resD + " day  " + resH + ":" + resM + ":" + resS;
    }

    if (resD < 0)
    {
        substract.style.display = "none";
        resH = Number(0);
        resM = Number(0);
        resS = Number(0);
        resD = Number(0);

        result = "0:0:0";
        
    }

    res.innerHTML = result;

    hour1.value = null;
    minute1.value = null;
    second1.value = null;
});

