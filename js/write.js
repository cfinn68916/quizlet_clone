var write_ans=[];
var write_q=[];
var write_ind=0;
function write_test(set=get_set(setnum)){
    document.getElementById('write_test').style.display = 'block';
    document.getElementById('write_q').innerHTML = set[0][0];
    write_q=set;
}

function end_test(){
    document.getElementById('write_test').style.display = 'none';
    begin(setnum);
}