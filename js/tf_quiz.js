var tf_q= [];
var tf_ind=0;
var tf_ans=[];
var tf_c_set=[];

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