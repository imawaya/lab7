window.onload= function() {
	const text = 'Lab7';
	document.title = text;
	const h1 = document.querySelector("h1");
	h1.innerText = "Lab7 Assignment";
	h1.setAttribute("style", "color: blue");
	const hr_1 = document.createElement("hr");
	document.body.appendChild(hr_1);
	const h2_1 = document.createElement("h2");
	h2_1.innerText = "Task";
	h2_1.style = "color: red";
	document.body.appendChild(h2_1);
	const p_1 = document.createElement("p");
	p_1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques: ";
	document.body.appendChild(p_1);
	const ul_1 = document.createElement("ul");
	const li_1 = document.createElement("li");
	li_1.innerHTML = "find elements in the DOM (<b>5 points</b>);";
	const li_2 = document.createElement("li");
	li_2.innerHTML = "create/add/remove elements (<b>5 points</b>);";
	const li_3 = document.createElement("li");
	li_3.innerHTML = "change content of the elements (<b>5 points</b>);";
	const li_4 = document.createElement("li");
	li_4.innerHTML = "change styles of the elements (<b>5 points</b>);";
	const li_5 = document.createElement("li");
	li_5.innerHTML = "change attributes of the elements (<b>5 points</b>);";
	const li_6 = document.createElement("li");
	li_6.innerHTML = "change classes of the elements (<b>5 points</b>).";
	ul_1.append(li_1, li_2, li_3, li_4, li_5, li_6);
	document.body.appendChild(ul_1);
	const hr_2 = document.createElement("hr");
	document.body.appendChild(hr_2);
	const h2_2 = document.createElement("h2");
	h2_2.innerText = "Submission";
	h2_2.style = "color: red";
	document.body.appendChild(h2_2);
	const p_2 = document.createElement("p");
	p_2.innerHTML = "To submit your work, follow these instructions:";
	document.body.appendChild(p_2);
	const ul_2 = document.createElement("ul");
	const li_7 = document.createElement("li");
	li_7.innerHTML = " Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).";
	const li_8 = document.createElement("li");
	li_8.innerHTML = " Clone this repository to your local machine and work inside it.";
	const li_9 = document.createElement("li");
	li_9.innerHTML = " Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with \"Hello, World!\" message (<b>1 point</b>).";
	const li_10 = document.createElement("li");
	li_10.innerHTML = " Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).";
	const li_11 = document.createElement("li");
	li_11.innerHTML = " Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).";
	const li_12 = document.createElement("li");
	li_12.innerHTML = " Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).";
	const li_13 = document.createElement("li");
	li_13.innerHTML = " After you finish your work, submit it to the Github (<b>2 points</b>).";
	ul_2.append(li_7, li_8, li_9, li_10, li_11, li_12, li_13);
	document.body.appendChild(ul_2);
	const hr_3 = document.createElement("hr");
	document.body.appendChild(hr_3);
	const lis = document.getElementsByTagName("li");
	for (let i = 0; i < lis.length; i++) {
	  if (i % 2 == 0) {
	  	lis[i].setAttribute("class", "odd");
	  } else {
	  	lis[i].setAttribute("class", "even");
	  }
	}
	const odds = document.getElementsByClassName("odd");
	for (i = 0; i < odds.length; i++) {
	  odds[i].setAttribute("style", "color: green");
	}
	const evens = document.getElementsByClassName("even");
	for (i = 0; i < evens.length; i++) {
	  evens[i].setAttribute("style", "color: purple");
	}
};
