$('#es').on('click',function(){
    location.reload()
})

var x=1
var y=0
$("#ab").click(function(){
    if(x==1){
        $('#ab').text('X')
    }
    else{
        $('#ab').text('O')
    }
    check()
    x*=-1
    y++
    
})
$("#ac").click(function(){
    if(x==1){
        $('#ac').text('X')
    }
    else{
        $('#ac').text('O')
    }
    x*=-1
    y++
    check()
    
})
$("#ad").click(function(){
    if(x==1){
        $('#ad').text('X')
    }
    else{
        $('#ad').text('O')
    }
    x*=-1
    y++
    check()
})
$("#ba").click(function(){
    if(x==1){
        $('#ba').text('X')
    }
    else{
        $('#ba').text('O')
    }
    x*=-1
    y++
    check()
})
$("#bc").click(function(){
    if(x==1){
        $('#bc').text('X')
    }
    else{
        $('#bc').text('O')
    }
    x*=-1
    y++
    check()
})
$("#bd").click(function(){
    if(x==1){
        $('#bd').text('X')
    }
    else{
        $('#bd').text('O')
    }
    x*=-1
    y++
    check()
})
$("#ca").click(function(){
    if(x==1){
        $('#ca').text('X')
    }
    else{
        $('#ca').text('O')
    }
    x*=-1
    y++
    check()
})
$("#cb").click(function(){
    if(x==1){
        $('#cb').text('X')
    }
    else{
        $('#cb').text('O')
    }
    x*=-1
    y++
    check()
})
$("#cd").click(function(){
    if(x==1){
        $('#cd').text('X')
    }
    else{
        $('#cd').text('O')
    }
    console.log($("#cd").text())
    x*=-1
    y++
check()
})

function check(){
console.log($('#ab').text())
    if ($("#ab").text()!=="" && $('#ab').text()==$('#ac').text() &&$('#ac').text()==$('#ad').text()  ){
        if($('#ab').text()==='X'){
           $('.msg').append('Winner Player 1, Player 2 next time :) ')}
        else $('.msg').append('Winner Player 2, Player 1 next time :) ')}
    
    
      
     else if($("#ad").text()!=="" && $("#ad").text()==$("#bd").text()  && $("#bd").text()==$("#cd").text()){
    
        if($('#ad').text()==='X'){
            $('.msg').append('Winner Player 1, Player 2 next time :) ')}
        else $('.msg').append('Winner Player 2, Player 1 next time :) ')}

    else if($("#ac").text()!=="" && $("#ac").text()==$("#bc").text()  && $("#bc").text()==$("#cb").text()){
          if($('#bc').text()==='X'){
            $('.msg').append('Winner Player 1, Player 2 next time :) ')}
        else $('.msg').append('Winner Player 2, Player 1 next time :) ')}

    else if ($("#ba").text()!=="" && $("#ba").text()==$("#bc").text()  && $("#bc").text()==$("#bd").text()){
        if($('#ba').text()==='X'){
            $('.msg').append('Winner Player 1, Player 2 next time :) ')}
        else $('.msg').append('Winner Player 2, Player 1 next time :) ')}
         
    
    else if ($("#ab").text()!=="" && $('#ab').text()==$('#bc').text()&& ($("#bc").text()!==" " &&$('#bc').text()==$('#cd').text())){
        if($('#ab').text()==='X'){
           $('.msg').append('Winner Player 1, Player 2 next time :) ')}
            else $('.msg').append('Winner Player 2, Player 1 next time :) ')} 

    else if ($("#ac").text()!=="" && $('#ac').text()==$('#bc').text()&& ($("#bc").text()!==" " &&$('#cb').text()==$('#cd').text())){
        if($('#ac').text()==='X'){
            $('.msg').append('Winner Player 1, Player 2 next time :) ')}
            else $('.msg').append('Winner Player 2, Player 1 next time :) ')} 

    
    else if ($("#ab").text()!=="" && $('#ab').text()==$('#ba').text()&& ($("#ba").text()!==" " &&$('#ba').text()==$('#ca').text())){
        if($('#ab').text()==='X'){
               $('.msg').append('Winner Player 1, Player 2 next time :) ')}
            else $('.msg').append('Winner Player 2, Player 1 next time :) ')}

    else if($("#ad").text()!=="" && $("#ad").text()==$("#bc").text()  && ($("#bc").text()==$("#ca").text())) {
        if($('#ad').text()==='X'){
               $('.msg').append('Winner Player 1, Player 2 next time :) ')}
        else $('.msg').append('Winner Player 2, Player 1 next time :) ')}


    else if($("#ca").text()!=="" && $("#ca").text()===$("#cb").text()  && $("#cb").text()===$("#cd").text()) {
        if($('#cb').text()==='X'){
              $('.msg').append('Winner Player 1, Player 2 next time :) ')}
        else $('.msg').append('Winner Player 2, Player 1 next time :) ')}
   
    
}







