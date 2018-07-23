function saveMonster(){
    const mon = {};
    mon.nameM = (document.getElementById("monName").value);
    mon.location = (document.getElementById("monLocation").value);
    mon.str = parseInt(document.getElementById("monStr").value);
    mon.dex = parseInt(document.getElementById("monDex").value);
    mon.sta = parseInt(document.getElementById("monSta").value);
    mon.health = mon.sta * 10;
    mon.exp = (mon.str + mon.dex + mon.sta) / 4;
    mon.gold = (mon.str + mon.dex + mon.sta);

    $.ajax({
        url:"/saveMon",
        type:"PUT",
        data: JSON.stringify(mon),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    alert("You added the monster " + mon.name);
}

function loadMonster() {

    monId = (document.getElementById("playerin").value);
    mon = $.ajax({
        url:"/loadMon/" +  monId,
        type:"GET",
    })
    document.getElementById("monsterN").innerHTML=mon.nameM;
    document.getElementById("monsterL").innerHTML=mon.location;
    document.getElementById("monsterH").innerHTML=mon.health;
    document.getElementById("monsterSTR").innerHTML=mon.str;
    document.getElementById("monsterDEX").innerHTML=mon.dex;
    document.getElementById("monsterSTA").innerHTML=mon.sta;
    document.getElementById("monsterGold").innerHTML=mon.gold;
    document.getElementById("monsterEXP").innerHTML=mon.exp;
    return monster;
}