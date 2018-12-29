function typeAnswer () {
	var answer = document.getElementById("name").value;
	var answerInLowerCase = answer.toLowerCase();
	console.log(answerInLowerCase);
	if (answerInLowerCase==="yes") {
		var goodReaction = "Kitty Mya Mya Mya";
		document.getElementById("reaction").textContent = goodReaction;
		document.getElementById("image").src = "http://pawstories.net/wp-content/uploads/2016/11/Smiling-Cat-1.jpg";
	} else if (answerInLowerCase==="no") {
        var badReaction = "Kitty Bite Bite Bite";
        document.getElementById("reaction").textContent = badReaction;
        document.getElementById("image").src = "http://zphotoblog.com/wp-content/uploads/2009/03/angry-cat.jpg";
	} else {
		var wrongAnswer = "Please say 'yes' or 'no'";
		document.getElementById("reaction").textContent = wrongAnswer;
		document.getElementById("image").src = "https://www.petmd.com/sites/default/files/Overweight%20tabby%20cat.jpg";
	}
}