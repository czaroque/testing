var counter = 101;
	while((counter<0)||(counter>100)) {
		if (confirm("Hello! Can you please give me a chance to tell you how I feel?")) {
			username.innerHTML = "I like you, Kath.";
			counter = 0;
		} else {
			alert("Are you sure? Don't you want to know? I have been hiding these feelings for you for a while now.");
		}
	}