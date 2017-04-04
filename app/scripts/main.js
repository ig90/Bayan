var bttn = document.getElementById("view-all-work-bttn");

bttn.addEventListener("click", showAllwork );

function showAllwork() {

		for (i = 0; i < 8; i++) { 
			var nextdiv = document.createElement('div');
			nextdiv.className='box';
			document.getElementsByClassName('work-wrapper')[0].appendChild(nextdiv);
			bttn.style.display = 'none';
	}
}


