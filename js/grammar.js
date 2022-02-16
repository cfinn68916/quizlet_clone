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
    enter_code=3;
    key_handle=3;
    document.getElementById("g_space").focus();
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
        document.getElementById('g_overide').style.display='none';
        g_res.push(1);
    }else{
        document.getElementById('g_q_result').innerHTML="Incorrect";
        document.getElementById('g_overide').style.display='block';
        g_res.push(0);
    }
    document.getElementById('g_q2').innerHTML='Definition: '+g_q[g_ind-1][0];
    document.getElementById('g_your_ans').innerHTML='Your answer: '+document.getElementById('g_space').value;
    document.getElementById('g_correct_ans').innerHTML='Correct answer: '+g_q[g_ind-1][1];
    enter_code=4;
    document.getElementById("g_space").focus();
}
function g_end_view(){
    document.getElementById('g_q').innerHTML=g_q[g_ind][0];
    document.getElementById('grammar-test').style.display = 'block';
    document.getElementById('grammar-res').style.display = 'none';
    document.getElementById('g_space').value='';
    enter_code=3;
}

function g_end(){
    enter_code=0;
    key_handle=0;
    document.getElementById('grammar-test').style.display = 'none';
    document.getElementById('grammar-res').style.display = 'none';
    var c=0;
    var t=0;
    g_res.forEach(function(v,i,a){t+=1;c+=v;});
    alert(c+" out of "+t+" correct("+(100*c/t)+"%)");
    window.location.reload();
}

function g_add_accent(){
    document.getElementById('g_space').value=document.getElementById('g_space').value.replace("'a",'á');
    document.getElementById('g_space').value=document.getElementById('g_space').value.replace("'e",'é');
    document.getElementById('g_space').value=document.getElementById('g_space').value.replace("'i",'í');
    document.getElementById('g_space').value=document.getElementById('g_space').value.replace("'o",'ó');
    document.getElementById('g_space').value=document.getElementById('g_space').value.replace("'u",'ú');

    document.getElementById('g_space').value=document.getElementById('g_space').value.replace("~n",'ñ');
}


function g_overide(){
    g_res.pop();
}