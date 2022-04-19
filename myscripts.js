var onmouseover = document.getElementById("onmouseover");
        var onmousedownimiz =  document.getElementById("onmousedown");
        var onclick = document.getElementById("onclick");
        var resim = document.getElementsByTagName("img")[0];

        var input = document.getElementsByTagName("input")[0];


        onmouseover.onmouseover = function(){
            onmouseover.innerHTML = "Mouse üzerine geldi."
        };

        
        onmouseover.onmouseout = function(){
            onmouseover.innerHTML = "Mouse üzerinden gitti";
        };

        
        onmousedownimiz.onmousedown = function(){
            onmousedownimiz.innerHTML = "Mouse'a basildi.";
        };
        onmousedownimiz.onmouseup = function(){
            onmousedownimiz.innerHTML = "Mouse'tan el kaldirildi.";
        };
            

        input.onchange = function(){
            input.value = input.value.toUpperCase();
        };

        
        input.onkeyup = function(){
            input.value = input.value.toUpperCase();
        };

        
        
        input.onblur = function(){
            input.value = "Degisti.";
        }

        input.onfocus = function(){
            input.value = "Focuslandi.";

        };
        
        
        onclick.onclick = function(){
            onclick.innerHTML = "DIV'e tıklandi";
        };
        resim.onclick = function(){
            resim.src = "img/2.jpg";
        };
        
        

