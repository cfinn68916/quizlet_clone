var tf_q= [];
var tf_ind=0;
var tf_ans=[];
var tf_c_set=[];

function make_tf(set=get_set(setnum)){    
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
            wrong.push(tf_c_set[i]);
    }});
    document.getElementById('tf_test').style.display = 'none';
    var w2=[]
    wrong.forEach(function(v,i,a){w2.push([v[0].trim(),v[1].trim()]);});
    var new_set=[];
    tf_c_set.forEach(function(v,i,a){
        if(w2.find(function(v2,i2,a2){return (v[0]==v2[0])&&(v[1]==v2[1]);})){
            new_set.push(v)
        }
    });
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