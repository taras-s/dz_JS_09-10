
$(function () {


    $('.jcarousel').jcarousel();

    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

	$('.jcarousel-control-next')
		.on('jcarouselcontrol:active', function() { $(this).removeClass('inactive');  })
		.on('jcarouselcontrol:inactive', function() {  $(this).addClass('inactive');  })
		.jcarouselControl({  target: '+=1'  });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .jcarouselPagination();


// ===================== Menu animate

	$( '.dropdown' ).hover(

	    function(){
	        $(this).children('.sub-menu').slideDown(200);
	    	$(this).animate({ backgroundColor:"#232" }, 300 );
    		// console.log('enter');
	    },

	    function(){
			$(this).animate({ backgroundColor:"#565" }, 200 );
			$(this).filter('.toplevel').animate({ backgroundColor:"#575" }, 300 );
			$(this).children('.sub-menu').slideUp(200);
			// console.log('leave');
	    }
	);



// ========================== Check Box

	$(".niceCheck").on('click',	function() {
		console.log('click box');
		changeCheck($(this));
	} );


	$(".niceCheck").each( function() {  changeCheckStart( $(this) );  });


	function changeCheck(el){
		var el = el,
		input = el.find("input").eq(0);
		if(!input.attr("checked")) {
			el.css("background-position","0 -17px");	
			input.attr("checked", true)
		} else {
			el.css("background-position","0 0");	
			input.attr("checked", false)
		}
	     return true;
	}


	function changeCheckStart(el){
		var el = el,
		input = el.find("input").eq(0);
		if(input.attr("checked")) {  el.css("background-position","0 -17px");  }
		return true;
	}


// ==================================== Drop Down Box

	$("#selbox").selectbox();


});

 


/* ================================== 


 ================================== */