var gUsername;

$(document).ready(function(){
  if(gUsername != null || gUsername != undefined){
    $('#showName').text == gUsername;
  }
  else {
    $('#showNameDiv').hide();
  }
});

$('.washer').click(function(){
  $('#washerModal').modal('show');
});

$('#loggInnBtn').click(function(){
  $('#loggInnModal').modal('show');
});

$('#reserver').click(function(){
  $('#reserverModal').modal('show');
})

$('#logginnBtnConfirm').click(function(){
  if(gUsername == null || gUsername == undefined){
    gUsername = $('#inputUsername').val();
  }
});

$('#chosenBtn').click(function(){
  var x = $('#selectedProgram').prop('selectedIndex');
  switch (x) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      break;
    default:
  }
});
