function getName(){
    let name=prompt('Adınız?')
    let inputName=document.getElementById("name").innerHTML=`${name} Hoş Geldiniz.`
}
function getDate(){

    let date= new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let session=date.getDay();

    if (session==0) {
        session="Pazar";
    }else if (session==1) {
        session="Pazartesi";
    }else if (session==2) {
        session="Salı";
    }else if (session==3) {
        session="Çarsamba";
    }else if (session==4) {
        session="Perşembe";
    }else if (session==5) {
        session="Cuma";
    }else if (session==6) {
        session="Cumartesi";
    }  

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    
    let time=h+":"+m+":"+s+"   "
    let inputClock=document.getElementById("clock").innerHTML=time

    let month=date.getMonth();
    
    if (month==1) {
        month="Ocak";
    }else if (month==2) {
        month="Şubat";
    }else if (month==3) {
        month="Mart";
    }else if (month==4) {
        month="Nisan";
    }else if (month==5) {
        month="Mayıs";
    }else if (month==6) {
        month="Haziran";
    }else if (month==7) {
        month="Temmuz";
    }else if (month==8) {
        month="Ağustos";
    }else if (month==9) {
        month="Eylül";
    }else if (month==10) {
        month="Ekim";
    }else if (month==11) {
        month="Kasım";
    }else if (month==12) {
        month="Aralık";
    }   
    
    let day=date.getDate();
    let year=date.getFullYear();
    let years=day+" "+month+" "+year+" "+session
    let inputYear=document.getElementById("year").innerHTML=years

    setTimeout(getDate,1000)
}
getName();
getDate();