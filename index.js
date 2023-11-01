window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
var kol=document.getElementById('kol');
const btnResultNode=document.querySelector('.js-btn-result');
const outputNode=document.querySelector('.js-output');
var konf=document.getElementById('konf');


konf.addEventListener('change',function(){
    listener(konf);
});
kol.addEventListener('change',function(){
    listener(konf);
});
function listener(elem){
    var cena=elem.querySelector(':checked').getAttribute('data-price'),
    kol1=kol.value;
   
    totalPrice=cena*kol1;
}
btnResultNode.addEventListener('click',function(){
    var regex = /^\d+$/;
    if (!regex.test(totalPrice)) {
        outputNode.innerHTML = "Недопустимые символы";
      } else {
    outputNode.innerHTML="ИТОГО:"+totalPrice;}
});}
