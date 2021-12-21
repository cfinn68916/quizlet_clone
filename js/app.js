var flashcards_ind=0;
var flashcards_state=0;
var tmp_set=[];
var phase=getlocal(ph=true);

var tf_q= [];//new Map();
var tf_ind=0;
var tf_ans=[];
var tf_c_set=[];



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


function flashcards(set=get_set()){
    document.getElementById('flashcards').style.display = 'block';
    document.getElementById('stage2').style.display = 'none';
    document.getElementById('space').innerHTML=set[0][0];
    tmp_set=set;
    flashcards_ind=0;
    flashcards_state=0;
}
function flip(){
    flashcards_state=1-flashcards_state;
    document.getElementById('space').innerHTML=tmp_set[flashcards_ind][flashcards_state];
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
function process_tf_res(){
    var wrong=[];
    tf_ans.forEach(function(v,i,a){
        if(v!=tf_q[i][1]){
            wrong.push(tf_q[i][0].split('|'));
            
    }});
    document.getElementById('tf_test').style.display = 'none';
    
    var w2=wrong.filter(function(v){return v[0];});
    var new_set=[];
    tf_c_set.forEach(function(v,i,a){if(!w2.includes(v[0])){new_set.push(v)}});
    console.log(tf_c_set[5])
    flashcards(set=new_set);
}


function process_tf_ans(ans){
    tf_ans.push(ans);
    tf_ind+=1;
    if(tf_ans.length==tf_q.length){
        process_tf_res();
        return;
    }
    document.getElementById('tf_question').innerHTML=tf_q[tf_ind][0];
    
}



function next(){
    flashcards_state=0;
    flashcards_ind=flashcards_ind+1;
    if(flashcards_ind==tmp_set.lenmgth){
        document.getElementById('stage2').style.display = 'block';
        //document.getElementById('space').innerHTML=tmp_set[flashcards_ind][flashcards_state];
    }else{
        document.getElementById('space').innerHTML=tmp_set[flashcards_ind][flashcards_state];
    }
    
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