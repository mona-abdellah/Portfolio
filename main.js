var msg="FullStack developer using .net and Angular framework with some experince in programming language.";
   
function write(msg,id,speed){
    var i=0;
    var ms=document.getElementById(id);
    function type(){
        if(i<msg.length){
            ms.innerHTML += msg[i];
            i++;
            setTimeout(type,speed);
        }
    }
    type();
}

write(msg,'msg',100);

var msg2="FullStack developer using .net and Angular framework with some experince in programming language graduated from faculty of computer and artificial intellegance.";
write(msg2,'msg2',100);