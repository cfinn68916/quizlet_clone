var g_q;
var g_ind;
var g_res;


function grammar_init(){
    document.getElementById('set_selector').style.display = 'none';
    document.getElementById('grammar-topic-selector').style.display = 'block';
    
}

function g_begin(num){
    g_q=gen_q(num,10);
    g_ind=0;
    g_res=[];
    
    document.getElementById('grammar-topic-selector').style.display = 'none';
    document.getElementById('grammar-test').style.display = 'block';
    document.getElementById('g_q').innerHTML=g_q[g_ind][0];
}

function g_next(){
    g_ind+=1;
    document.getElementById('grammar-test').style.display = 'none';
    if(g_ind==10){
        g_end();
    }
    document.getElementById('grammar-res').style.display = 'block';
    if(g_q[g_ind-1][1]==document.getElementById('g_space').value){
        document.getElementById('g_q_result').innerHTML="Correct";
        g_res.push(1);
    }else{
        document.getElementById('g_q_result').innerHTML="Incorrect";
        g_res.push(0);
    }
    document.getElementById('g_q2').innerHTML='Definition: '+g_q[g_ind-1][0];
    document.getElementById('g_your_ans').innerHTML='Your answer: '+document.getElementById('g_space').value;
    document.getElementById('g_correct_ans').innerHTML='Correct answer: '+g_q[g_ind-1][1];

}
function g_end_view(){
    document.getElementById('g_q').innerHTML=g_q[g_ind][0];
    document.getElementById('grammar-test').style.display = 'block';
    document.getElementById('grammar-res').style.display = 'none';
    document.getElementById('g_space').value='';
}

function g_end(){
    document.getElementById('grammar-test').style.display = 'none';
    document.getElementById('grammar-res').style.display = 'none';
    var c=0;
    var t=0;
    g_res.forEach(function(v,i,a){t+=1;c+=v;});
    alert(c+" out of "+t+" correct("+(100*c/t)+"%)");
    window.location.reload();

}