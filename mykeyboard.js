


$(function(){
    var $write_box = $('#write_box');
    var shift = false;
    var capslock = false;

    $('#keyboard li').click(function(){
    	var $this = $(this);
    	var character = $this.html();

    	if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) 
    	{
          $('.letter span').toggle();
    	  $('.symbol span').toggle();
     
    	  shift = (shift === true) ? false : true;
    	  capslock = false;
          return false;
        }
        
        if ($this.hasClass('capslock')) 
        {
    		$('.letter span').toggle();
    		capslock = true;
    		return false;
        }

        if ($this.hasClass('delete')) 
        {
    		var html = $write_box.val();
    		$write_box.val(html.substr(0, html.length - 1));
    		return false;
		}

		if ($this.hasClass('letter'))
		{
			character = $('span:visible', $this).html();
		} 

		if ($this.hasClass('symbol'))
		{
			character = $('span:visible', $this).html();
		} 

		if ($this.hasClass('space')) 
		{
			character = ' ';
		}
		if ($this.hasClass('tab')) 
		{
			character = "\t";
		}
		if ($this.hasClass('return')) 
		{
			character = "\n";
		}

		if (shift === true) 
		{
            $('.symbol span').toggle();
            if (capslock === false) $('.letter span').toggle();
             
            shift = false;
        }
         
        $write_box.val($write_box.val() + character);
    });
});