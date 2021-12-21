var tf_q= [];
var tf_ind=0;
var tf_ans=[];
var tf_c_set=[];

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
    console.log(w2)
    console.log(tf_c_set);
    tf_c_set.forEach(function(v,i,a){
        if(w2.find(function(v2,i2,a2){return (v[0]==v2[0])&&(v[1]==v2[1]);})){
            new_set.push(v)
        }
    });
    console.log(new_set);
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