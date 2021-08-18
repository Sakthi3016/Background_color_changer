		let letters="0123456789ABCDEF";
		const bg=document.querySelector('body');
		const colorelement=document.querySelector('#color');

		function getColor(){
			let color='#';
			for(let i=0;i<6;i++){
				color+=letters[Math.floor(Math.random()*letters.length)];
			}

			bg.style.backgroundColor=color;
			colorelement.innerHTML=color;
		}
