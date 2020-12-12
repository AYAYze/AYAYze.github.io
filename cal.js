let date = new Date();

let cal = {
    today : {
        yy : date.getFullYear(),
        mm : date.getMonth(),
        dd : date.getDate()
    },
    getFirst : (yy,mm) => {return new Date(yy,mm, 1)},
    getLast : (yy,mm) => {return new Date(yy, mm+1, 0)},
    active : {
        yy : date.getFullYear(),
        mm : date.getMonth(),
        dd : date.getDate()
    },
    nextMonth : function (){
        let d = new Date();
        d.setDate(1);
        d.setMonth(++this.active.mm);
        return d;
    },
    prevMonth : function(){
        let d = new Date();
        d.setDate(1);
        d.setMonth(--this.active.mm);
        return d;
    }
}

function titleYM(yy,mm) {
    let calY = document.getElementById("yy");
    let calM = document.getElementById("mm");
    let d = new Date(yy, mm);
    let m = d.getMonth() + 1;
    calY.innerHTML = `${d.getFullYear()}년`
    calM.innerHTML = `${m.toString().length != 1 ? m : '0'+m}월`
}

function change(yy, mm){
    console.log('asdf')
    let call = document.getElementById("days");
    call.innerHTML = '';
    요일(call);
    for(let i = 0; i < parseInt(cal.getFirst(yy,mm).getDay()); i++){
        call.innerHTML += `<div class="empty"></div>`;
    }
    for(let i = 0; i < parseInt(cal.getLast(yy,mm).getDate()); i++ ){
        if(yy == cal.today.yy && mm == cal.today.mm && (i + 1) == cal.today.dd){
            call.innerHTML += `<div class="day today"> ${i+1} </div>`
        }else{
            call.innerHTML += `<div class="day"> ${i+1} </div>`
        }
    }
    titleYM(yy, mm);
    
}

function init(){
    titleYM(cal.today.yy, cal.today.mm);
    change(cal.today.yy, cal.today.mm);
}
init();

function prev(){
    let d = cal.prevMonth();
    console.log(d.getMonth())
    change(d.getFullYear(), d.getMonth())
}

function next(){
    let d = cal.nextMonth();
    change(d.getFullYear(), d.getMonth())
}

function 요일(dom){
    dom.innerHTML += `
    <div class="day yo">일</div>
    <div class="day yo">월</div>
    <div class="day yo">화</div>
    <div class="day yo">수</div>
    <div class="day yo">목</div>
    <div class="day yo">금</div>
    <div class="day yo">토</div>
    `;
}
