// to validate the username and password. if it is true then call the callback functn
function validation(callback){
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if(email.value.trim()=="admin" && password.value.trim()=="12345"){
        callback();
    }
    else{
        alert("Invalid username or password");
        return false;
    }
}
// callback functn to redirect to the home page
function redirect(){
    window.location.assign("homepage.html");
}

// to get datas
function displaylist(){
    var httprequest = new XMLHttpRequest();
    httprequest.onreadystatechange=function(){
        try{
            if(httprequest.readyState===XMLHttpRequest.DONE){
                if(this.status===200){
                    // console.log(httprequest.responseText);
                    display(httprequest.responseText);
                }
                else{
                    alert("Error from API");
                }
            }
            
        }
        catch(e){
            alert(e.description);
        }
        
    };
    httprequest.open('GET','https://jsonplaceholder.typicode.com/todos',true);
    httprequest.send();
}

// to display the table, calling from the abov functn displaylist
function display(data){
    var list = JSON.parse(data);
    let table = document.getElementById("todotable");
}
