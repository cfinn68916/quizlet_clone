var phase=getlocal(ph=true);

onload= function(){
    document.getElementById('flashcards').style.display = 'none';
    document.getElementById('tf_test').style.display = 'none';
    if(getlocal(dark_light=true)=='light'){
        to_light_mode();
    }else{
        to_dark_mode();
    }
    if(phase=='1'){
        flashcards();
    }
    if(phase=='2'){
        test_a();
    }
};

onunload = function(){
    setlocal(phase=phase);
}

function test_a(set=get_set()){
    if(phase==1){
        phase=2;
        setlocal(phase=phase);
    }
    
    document.getElementById('flashcards').style.display = 'none';
    document.getElementById('tf_test').style.display = 'block';
    tf_q= [];
    tf_ind=0;
    tf_ans=[];
    tf_c_set=set;
    function cq(v,i,a){
        if(Math.random()>0.5){
            tf_q.push([v[0]+' | '+v[1],1]);
        }else{
            tf_q.push([v[0]+' | '+a[Math.floor(Math.random() * a.length)][1],0]);
        }
    }
    set.forEach(cq);
    document.getElementById('tf_question').innerHTML=tf_q[0][0];
}

function invert_mode(){
    if(document.getElementById('dark-light').classList.contains('light-mode')){
        to_dark_mode();
        setlocal(phase=null,dark_light='dark');
    }else{
        to_light_mode();
        setlocal(phase=null,dark_light='light');
    }
}

function to_light_mode(){
    document.getElementById('dark-light').innerHTML="switch to dark mode";
    document.querySelectorAll(".dark-mode").forEach(function(v,i,a){v.classList.add("light-mode");v.classList.remove('dark-mode')});
}
function to_dark_mode(){
    document.getElementById('dark-light').innerHTML="switch to light mode";
    document.querySelectorAll(".light-mode").forEach(function(v,i,a){v.classList.add("dark-mode");v.classList.remove('light-mode')});
}