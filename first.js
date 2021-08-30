 

let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");
let btn1 = document.getElementById("btn1");

form1.addEventListener("input",function(){
                let a =this.value;
                a = +a
                
                
                
                form2.addEventListener("input",function(){
                    let b =this.value;
                    b= +b;


                    btn1.addEventListener("click",function(){
                        let c = a * b;
                        

                        form3.value = c;
    
    
                        
                        
        })

        btn2.addEventListener("click",function(){
            let c = a + b;

            form3.value = c;


            
            
})

btn3.addEventListener("click",function(){
    let c = a - b;

    form3.value = c;


    
    
})

btn4.addEventListener("click",function(){
    let c = a / b;
    

    form3.value = c;


    
    
})
                    
    })



})

let btn5 = document.getElementById("btn5");
btn5.addEventListener("click",function(){
    form3.value = " ";
    form1.value = " ";
    form2.value = " ";
})