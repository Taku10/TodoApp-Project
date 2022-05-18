//line through todos
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
});

//Delete todos
$("ul").on("click", "span", function (event){
	$(this).parent().fadeOut(600, function(){				
		$(this).remove();
	});
	event.stopPropagation();								//to only click on the <span> or X

});

//adding todos
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){									//check if keypress is "Enter"
		const todoText = $(this).val();
		$(this).val("");										
		$("ul").append("<li><span class = ' fa fa-trash'></span> " + todoText + "</li>");			//append or add html elements to selected parent
	}

});