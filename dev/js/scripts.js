var li_items = document.querySelectorAll(".accordion_wrap ul li");
var ul = document.querySelector(".accordion_wrap ul");

li_items.forEach(function(item){
	item.addEventListener("click", function(){
		li_items.forEach(function(item){
			item.classList.remove("active");
		})
		item.classList.add("active");
	});
});

ul.addEventListener("mouseleave", function(){
	li_items.forEach(function(item){
		item.classList.remove("active");
	})
});


// code to follow w3 school 
// var accordion = document.getElementsByClassName("accordion")

// var i;

// for (i = 0; i < accordion.length; i++){
//     accordion[i].addEventListener("click", function(){ 
//         this.classList.toggle ("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.maxWidth) {
//             panel.style.maxWidth = "null";
//         } else {
//         panel.style.maxWidth = panel.scrollWidth + "px";
//         }  
//     });
// }