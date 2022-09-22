// $("div").mouseenter(function(){
//     $(".box").css("background-color", "red");
//   });

// $("div").mouseleave(function(){
//     $(".box").css("background-color", "black");
//   });

// $(document).ready(function(){
//     $(".box").on("click", function(){

//         var classNames = $(this).attr("class").split(" ")
//         console.log(this);
//         console.log(classNames);
//         $("." + classNames[1]).css("background-color", "red");
//         console.log(classNames[1]);
//     });
// });

$(document).ready(function() {
    $(".box").on("click", function() {
    	/**
    	 * When we click on an element that has
    	 * a 'box' class, this event will be fired.
    	 */
    	var classNames = $(this).attr("class").split(" ");
        console.log(classNames);
    	var boxClass = classNames[0];
        console.log("bxclass", boxClass);
    	var className = classNames[1];
        console.log("Cname", className);
    	if ($(this).css("background-color") == "rgb(255, 0, 0)") {
    		// If this object is already red, turn it black
    		$("." + className).css("background-color", "#000"); 
    	} else {
    		// Else turn all elements with a box class black
    		// and then change the color of all elements
    		// with the same class name as the clicked element
    		// to red.
    		$("." + boxClass).css("background-color", "#000");
    		$("." + className).css("background-color", "red");
    	}
    });
})