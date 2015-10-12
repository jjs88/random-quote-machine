window.onload = function() {
	
	
	var btn = document.getElementById('btn');
	var quote = document.getElementById('newQuote')
	quote.style.visibility = "hidden";
	

	
	btn.addEventListener('click', function(e) {
		
		
		var request = new XMLHttpRequest();
		request.open('GET', 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en', true);
		
		request.send();
				
		request.onload = function() {
			if(request.status >= 200 && request.status < 400) {
				var data = JSON.parse(request.responseText);
				//add quote to the element
				quote.innerHTML = data.quoteText + "<br>" + "-"+ data.quoteAuthor;
				console.log("worked");
			} else {
				console.log("error");
				quote.innerHTML = "couldn't get the data";
				
			}
		};
		
		request.onerror = function() {
			console.log("error");
		};
		
	    quote.style.visibility = "visible";
		
	})
	
	
	
}