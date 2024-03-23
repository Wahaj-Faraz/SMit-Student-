        // Question 01
// var age=19;
// alert("I am " + age + " years old");

        // Question 02
        let visitCount = localStorage.getItem("page_view");
        if (!visitCount) {
        visitCount = 1;
        localStorage.setItem("page_view", visitCount);
        } else {
        visitCount = Number(visitCount) + 1;
       localStorage.setItem("page_view", visitCount);
        }
        document.write(`You have visited this site ${visitCount} times.`);

        // Question 03
//  var birthYear=2005;
//  document.write("My birth year is" + birthYear + "<br>" +  "data type of my declared variable is number" ); 
  
        // Question 04
//  var visitorName="John Doe";
//  var productTitle="T-shirt(s)";
//  var quantity=5;

//  document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing Store");

 





        





















