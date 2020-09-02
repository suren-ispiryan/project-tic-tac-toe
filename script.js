var click = 0;
var buttonReload = document.getElementsByClassName('btn')[0];
var message = document.getElementById('resultBoard');
var div0 = document.getElementsByClassName('little-Divs')[0];
var div1 = document.getElementsByClassName('little-Divs')[1];
var div2 = document.getElementsByClassName('little-Divs')[2];

var div3 = document.getElementsByClassName('little-Divs')[3];
var div4 = document.getElementsByClassName('little-Divs')[4];
var div5 = document.getElementsByClassName('little-Divs')[5];

var div6 = document.getElementsByClassName('little-Divs')[6];
var div7 = document.getElementsByClassName('little-Divs')[7];
var div8 = document.getElementsByClassName('little-Divs')[8];

$(message).hide();

// Click toadd X or 0 
$(".little-Divs").click(function(){
	if ($(this).is(':empty')) {
		
		if (click % 2 == 0) {
			$(this).text("x");
			click++;
			// Checking the winning Combinations 				
			// Horizontal x 
			if ($(div0).text() == "x" && $(div1).text() == "x" && $(div2).text() == "x" ||
				$(div3).text() == "x" && $(div4).text() == "x" && $(div5).text() == "x" ||
				$(div6).text() == "x" && $(div7).text() == "x" && $(div8).text() == "x" ||
			// Vertical x 
				$(div0).text() == "x" && $(div3).text() == "x" && $(div6).text() == "x" ||
				$(div1).text() == "x" && $(div4).text() == "x" && $(div7).text() == "x" ||
				$(div2).text() == "x" && $(div5).text() == "x" && $(div8).text() == "x" ||
			// Corner x 
				$(div0).text() == "x" && $(div4).text() == "x" && $(div8).text() == "x" ||
				$(div2).text() == "x" && $(div4).text() == "x" && $(div6).text() == "x") {
				$(message).show().text("Congratulations, Player X Wins !!!");
			}	
		}
 
		else{
			$(this).text("o");	
			click++;
			// Checking the winning Combinations 	
			// Horizontal 0 
			if ($(div0).text() == "o" && $(div1).text() == "o" && $(div2).text() == "o" ||
				$(div3).text() == "o" && $(div4).text() == "o" && $(div5).text() == "o" ||
				$(div6).text() == "o" && $(div7).text() == "o" && $(div8).text() == "o" ||
			// Vertical x 
				$(div0).text() == "o" && $(div3).text() == "o" && $(div6).text() == "o" ||
				$(div1).text() == "o" && $(div4).text() == "o" && $(div7).text() == "o" ||
				$(div2).text() == "o" && $(div5).text() == "o" && $(div8).text() == "o" ||
			// Corner x 
				$(div0).text() == "o" && $(div4).text() == "o" && $(div8).text() == "o" ||
				$(div2).text() == "o" && $(div4).text() == "o" && $(div6).text() == "o") {
				$(message).show().text("Congratulations, Player o Wins !!!");
			}	
		}

	}
});


$(buttonReload).click(function(){
	location.reload()
});

	

