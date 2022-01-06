var write_ans=[];
var write_q=[];
var write_val=[];
var write_ind=0;
function write_test(set=get_set(setnum)){
    document.getElementById('write_test').style.display = 'block';
    document.getElementById('write_q').innerHTML = set[0][0];
    write_q=set.forEach(function(v,i,a){v[0]});
    write_ans=set.forEach(function(v,i,a){v[1]});
    write_val=[];
    write_ind=0;
}

function write_next(){
    write_ind+=1;

}

function end_test(){
    document.getElementById('write_test').style.display = 'none';
    begin(setnum);
}