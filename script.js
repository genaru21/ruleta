const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar);
giros = 0;
function girar(){
  if (giros < 10) {
    let rand = Math.random() * 7200;
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'ruleta.mp3');
    document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros; 
  }else{
    Swal.fire({
      icon: 'success',
      title: 'GAME OVER',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    }).then((result)=>{
      if (result.value == true) {
        giros = 0;
         document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;        
      }
    })
  }


function premio(premios){

  document.querySelector('.elije').innerHTML = 'TU CORTESIA ES: ' + premios;

}


 function calcular(rand) {

  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";

  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 45:
     window.alert('I want to work with you, apple');
     break;
     case valor > 45 && valor <= 90:
     window.alert('My product is not engraved');
     break;
     case valor > 90 && valor <= 135:
     window.alert('Installments');
     break; 
     case valor > 135 && valor <= 180:
     window.alert('Replace screen protector');
     break;
     case valor > 180 && valor <= 225:
     window.alert('Change my account');
     break; 
     case valor > 225 && valor <= 270:
     window.alert('Aide au partage familial');
     break;
     case valor > 270 && valor <= 315:
     window.alert('EPP, please');
     break;
     case valor > 315 && valor <= 360:
     window.alert('I want to know your sales');
     break;
  }

 }, 5000);

}
}
