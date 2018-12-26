	
  $(document).ready(function(){
      $('#uninstallLink').click(function(){
          $(this).toggleClass('active');
          $("#uninstall").slideToggle("slow",function(){
              $(this).addClass('active').removeClass('fade');
        });
      });


 		$("body").click(function(e) {
                $('#myModal').modal('hide');
        });
     }); 
    


  