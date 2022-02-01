var write_ans=[];
var write_q=[];
var write_val=[];//[q,a]
var write_ind=0;
function write_test(set=get_set(setnum)){
    document.getElementById('write_test').style.display = 'block';
    document.getElementById('write_q').innerHTML = set[0][0];
    set.forEach(function(v,i,a){write_q.push(v[0]);});
    set.forEach(function(v,i,a){write_ans.push(v[1]);});
    write_val=[];
    write_ind=0;
}

function write_next(){
    document.getElementById('write_ans').style.display = 'block';
    document.getElementById('write_test').style.display = 'none';
    
    var correct=write_ans[write_ind]==document.getElementById('write_space').value;
    write_val.push(correct);
    if(correct){
        document.getElementById('write_q_result').innerHTML ="Correct";
    }else{
        document.getElementById('write_q_result').innerHTML ="Incorrect";
    }
    document.getElementById('write_q2').innerHTML = "Definition: "+write_q[write_ind];
    document.getElementById('write_your_ans').innerHTML = "Your answer: "+document.getElementById('write_space').value;
    document.getElementById('write_correct_ans').innerHTML = "Correct answer: "+write_ans[write_ind];
}
function end_view(){
    document.getElementById('write_ans').style.display = 'none';
    document.getElementById('write_test').style.display = 'block';
    write_ind+=1;
    if(write_ind==write_q.length){
        end_test();
    }
    document.getElementById('write_q').innerHTML = write_q[write_ind];
    document.getElementById('write_space').value="";
}


function end_test(){
    document.getElementById('write_test').style.display = 'none';
    document.getElementById('write_ans').style.display = 'none';
    var c=0;
    var t=0;
    write_val.forEach(function(v,i,a){t+=1;if(v){c+=1;}});
    alert(c+" out of "+t+" correct("+(100*c/t)+"%)");
    begin(setnum);
}