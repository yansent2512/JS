(function() {
	window.addEventListener('message', function(event) {
		$("#menu").css('display', event.data.showmenu ? "block" : "none");
	});
	$(window).keydown(function(e){
		if(e.which == 27){/*escape*/
			var location = window.location.href;
			var directoryPath = location.substring(6, location.lastIndexOf("/")+1);
			$.post('http://'+directoryPath+'close');
		}
	});
	$("#close").click(function(){
		var location = window.location.href;
		var directoryPath = location.substring(6, location.lastIndexOf("/")+1);
		$.post('http://'+directoryPath+'close');
	});
	$("#title").html($("title").text()).click(function(){resetButtonColours();});
	$(".tabbutton").click(function(){
		$(".tab").css("display", "none");
		$(".tabbutton").css("background-color", "#555");
		var tab = $(this).html();
		var trimtab = tab.replace(/\s/g,'');
		$("#"+trimtab).css("display", "block");
		var colourR = Math.floor((Math.random() * 256));
		var colourG = Math.floor((Math.random() * 256));
		var colourB = Math.floor((Math.random() * 256));
		$(this).css("background-color", "rgb(" + colourR + "," + colourG + "," + colourB + ")");
	});
	$("#tabdefault").trigger("click");
	$("#SearchBar").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$(".Searchable").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
		});
	});
	$('#SearchBarExact').keyup(function(){
		var a = $(this).val();
		if (a.length){
			var containing = $('.Searchable').filter(function(){
				var regex = new RegExp('\\b'+a+'\\b', 'i');
				return regex.test($(this).text());
			}).slideDown();
			$('.Searchable').not(containing).hide();
		}else{
			$('.Searchable').show();
		}
	});
	$('button').click(function(){
		if (document.getElementById("switch").checked == true){
			colourSelectedButton(this);
		}else{
			colourOnlySelectedButton(this);
		}
	});
});

function colourSelectedButton(button) {
	var colourR = Math.floor((Math.random() * 256));
	var colourG = Math.floor((Math.random() * 256));
	var colourB = Math.floor((Math.random() * 256));
	$(button).css("background-color", "rgb(" + colourR + "," + colourG + "," + colourB + ")");
}

function colourOnlySelectedButton(button) {
	//Removes the background colour of all buttons not selected so only 1 button looks selected
	$("button").css("background-color", "");
	var colourR = Math.floor((Math.random() * 256));
	var colourG = Math.floor((Math.random() * 256));
	var colourB = Math.floor((Math.random() * 256));
	$(button).css("background-color", "rgb(" + colourR + "," + colourG + "," + colourB + ")");
}

function resetButtonColours() {
	//Removes the background colour of all buttons
	$("button").css("background-color", "");
}