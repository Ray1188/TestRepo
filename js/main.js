// // let textData = document.querySelector('.header__list')
// //  console.log( textData.children[1].textContent)

// let arr = ['hello','goodbye','fishing','car','money']
// // console.dir(textData)
// // function getCount(){
// // 	let count = 0;
// // 	for (let el of textData.children) {
// // 		console.log(el.firstElementChild.)
// // 		count++;
// // 	}
// // 	console.log('Count element', count)
// // }
// // getCount()
// function changeList(){
// 	let linkText = document.querySelectorAll('.header__link')
	
// 	 for(let i = 0; i<linkText.length; i++){
// 		for (let attr of linkText[i].attributes) { // (4) весь список
// 			console.log( `${attr.name} = ${attr.value}` );
// 		  }
// 		//   console.log(linkText[i])
// 		// linkText[i].textContent = arr[i]
// 	 }
	
// }
// changeList()

// let link = document.querySelectorAll('a')
// console.log(link.hasAttribute('href'))
// function changeColor(){
// let link = document.querySelectorAll('a')
// for (let element of link) {
	// for (let attr of element.attributes) { // (4) весь список
	// 	// console.log( `${attr.name} = ${attr.value}` );
	
	// 	if(attr.value.includes('://')&&!attr.value.startsWith('http://internal.com')){
	// 	// console.log(attr.value)
	// 		element.style.color='orange'
	// 	}
	//   }
// 	let hr = element.getAttribute('href')
// 	if(hr.includes('://')&&!hr.startsWith('http://internal.com'))
// 	{
// 		element.style.color='orange'
// 	}
// }

// }
// changeColor()
let data = {
	"Рыбы": {
	  "форель": {},
	  "лосось": {}
	},
  
	"Деревья": {
	  "Огромные": {
		"секвойя": {},
		"дуб": {}
	  },

	  "Цветковые": {
		"яблоня": {},
		"магнолия": {}
	  }
	}
  };
  for (let key in data) {
	 console.log(key)
  }
 let div = document.createElement('div')
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
document.body.appendChild(div)
