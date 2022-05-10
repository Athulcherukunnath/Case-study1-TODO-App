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

    for(var i=0;i<list.length;i++){
        let rowno = table.rows.length;
        var row = table.insertRow(rowno);
       
        var cell1 = row.insertCell(0);
        cell1.innerHTML = list[i].id;
       
        var cell2 = row.insertCell(1);
        cell2.innerHTML = list[i].title;

        var cell3 = row.insertCell(2);
        var element = document.createElement("input");
        element.type = "checkbox";

        if(list[i].completed == true){
            element.setAttribute("checked","true");
            element.setAttribute("disabled","true");
        }
        element.addEventListener('change',(Event)=>{
            if(Event.currentTarget.checked){
                count++;
                countcheck();
            }
            else{
                count--;
            }
        })
        cell3.appendChild(element);
    }
}
// checking the count
var count = 0;
function countcheck(){

    let promise = new Promise(function(resolve,reject){
        if(count==5){
            resolve("Congrats, you have been successfully completed the 5 Tasks");
        }
    })
    promise.then(function(t){
        alert(t);
    })
}
