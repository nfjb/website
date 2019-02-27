

$( document ).ready(function() {

        $(".bottom-login-text").hover(function () {

            $("body").css("transition", "all 0.3s ease-in-out 0s").css("background-color", "#222a35");
            $(".dark-blue").css("transition", "all 0.3s ease-in-out 0s").css("background-color", "#f7f7f7");
            $(".main").css("transition", "all 0.3s ease-in-out 0s").css("color", "white");
            $(".text-inner-subtext").css("transition", "all 0.3s ease-in-out 0s").css("color", "lightgray");
            $(".bottom-subtext").css("transition", "all 0.3s ease-in-out 0s").css("color", "lightgray");
            $(".login-span-text").css("transition", "all 0.3s ease-in-out 0s").css("color", "rgb(34, 42, 53)");
            $(".login-span-text-button").css("transition", "all 0.3s ease-in-out 0s").css("color", "rgb(34, 42, 53)");
            $(".login-button").css("transition", "all 0.3s ease-in-out 0s").css("border-color", "rgb(34, 42, 53)");
            $(".logo > .fas").css("transition", "all 0.3s ease-in-out 0s").css("color", "lightgray");
            $(".logo > .fab").css("transition", "all 0.3s ease-in-out 0s").css("color", "lightgray");




                //  $(".link-hover-animation").css("opacity", "1").css("transition", "all 0.3s ease-in-out 0s").css("transform", "scaleX(1)");
          },
          
          function() {

            $("body").css("transition", "all 0.3s ease-in-out 0s").css("background-color", "#f7f7f7");
            $(".dark-blue").css("transition", "all 0.3s ease-in-out 0s").css("background-color", "#222a35");
            $(".main").css("transition", "all 0.3s ease-in-out 0s").css("color", "black");
            $(".text-inner-subtext").css("transition", "all 0.3s ease-in-out 0s").css("color", "#505050");
            $(".bottom-subtext").css("transition", "all 0.3s ease-in-out 0s").css("color", "#505050");
            $(".login-span-text").css("transition", "all 0.3s ease-in-out 0s").css("color", "white");
            $(".login-span-text-button").css("transition", "all 0.3s ease-in-out 0s").css("color", "white");
            $(".login-button").css("transition", "all 0.3s ease-in-out 0s").css("border-color", "white");
            $(".logo > .fas").css("transition", "all 0.3s ease-in-out 0s").css("color", "rgb(34, 42, 53)");
            $(".logo > .fab").css("transition", "all 0.3s ease-in-out 0s").css("color", "rgb(34, 42, 53)");


            //  $(".link-hover-animation").css("transition", "all 0.2s ease-in-out 0s").css("opacity", "0");
            //  setTimeout(
            //      function() {
            //      $(".link-hover-animation").css("transition", "all 0.0s ease-in-out 0s").css("transform", "scaleX(0)");
            //      }, 200);
             });
        



            
        });



let loginHead = document.querySelector(".text-inner-heading").querySelector("h1");
let loginSubtext= document.querySelector(".text-inner-subtext");
let loginButtonText= document.querySelector(".login-button").querySelector("span");
let loginButton= document.querySelector("#login-b");


firstTime = true;

document.getElementById("login-b").onclick = function () {
   
    if (firstTime == true) {
        firstTime = false;
        $(loginButton).css("transition", "all 0.3s ease-in-out 0s").css("opacity", "0");    
        
    
        window.location.href = "mailto:hey@nicolas.app";

        loginHead.style.opacity = 0;
        document.querySelector(".text-inner-subtext").querySelector("h2").style.opacity = 0;
        setTimeout(function () {
            loginHead.style.opacity = 1;
            loginHead.innerHTML = ":)";
            loginSubtext.style.opacity = 1;
            loginSubtext.innerHTML = "Thanks for your message!";



            
            
            
        }, 180);

        setTimeout(function () {
            $(loginButton).css("transition", "all .7s ease-in-out 0s").css("opacity", "1");    
           
            
        }, 700);

       
    } else {

        window.location.href = "mailto:hey@nicolas.app";



            loginHead.style.opacity = 1;
            loginHead.innerHTML = "<a style='color: rgb(34, 42, 53); text-decoration: unset;' href='mailto:hey@nicolas.app'>hey@nicolas.app<a>";
            loginSubtext.style.opacity = 1;
            loginSubtext.innerHTML = "Problem sending the message?";
            firstTime == true;

    }
      
};


  