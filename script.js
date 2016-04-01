$(document).ready(function(){
	var suggestions = [
		"Alaska", 
		"Alabama", 
		"Arkansas", 
		"Arizona", 
		"California", 
		"Colorado"
	];
	var input = $('.autocomplete > input');
	var list = $('.autocomplete > ul');
	input.keyup(function(){
		var str = $(this).val();
		list.empty();
		if (str !== '') {
			$.each(suggestions, function(index, item){
				if (item.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
					list.append('<li>' + item + '</li>');
				}
			});
			$('.autocomplete li').click(function(){
				input.val($(this).html());
				list.empty();
			});
		}	
	});
});