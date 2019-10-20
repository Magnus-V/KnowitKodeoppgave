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
  console.log("COMEON");
});

$('#loggInnBtn').click(function(){
  $('#loggInnModal').modal('show');
});

$('#logginnBtnConfirm').click(function(){
  if(gUsername == null || gUsername == underfined){
    gUsername = $('#inputUsername').val();
  }
});
