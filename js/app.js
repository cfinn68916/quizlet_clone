var flashcards_ind=0;
var flashcards_state=0;
var tmp_set=[];
var phase=getlocal(ph=true);

var tf_q= [];//new Map();
var tf_ind=0;
var tf_ans=[];



onload= function(){
    document.getElementById('flashcards').style.display = 'none';
    document.getElementById('tf_test').style.display = 'none';
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
    function cq(v,i,a){
        if(Math.random()>0.5){
            tf_q.push([v[0]+'|'+v[1],1])
        }
    }
    set.forEach(cq)
    

    
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
