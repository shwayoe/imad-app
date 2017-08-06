var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    // create request
    var request = new XMLHttpRequest();
    
    request.onstatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            
            if(request.status === 200){
                var counter = resquest.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();            
            }
        }
    };
    
    request.open('GET','http://tinmgmgyin.imad.hasura-app.io/counter',true);
    request.send(null);
    
};
