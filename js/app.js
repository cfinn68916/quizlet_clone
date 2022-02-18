var phase;
var setnum;
var enter_code=0;
var key_handle=0;

onload= function(){
    document.getElementById('flashcards').style.display = 'none';
    document.getElementById('grammar-topic-selector').style.display = 'none';
    document.getElementById('tf_test').style.display = 'none';
    document.getElementById('write_test').style.display = 'none';
    document.getElementById('study_selector').style.display = 'none';
    document.getElementById('write_ans').style.display = 'none';
    document.getElementById('grammar-test').style.display = 'none';
    document.getElementById('grammar-res').style.display = 'none';
    document.getElementById('add_set').style.display = 'none';
    document.getElementById('tf_ans').style.display = 'none';
    [1,2,3,4].forEach(function(v,i,a){if(cs_exists(v)){document.getElementById('set_cs_'+v).value=cs_name(v);}});
    if(getlocal(dark_light=true)=='light'){
        to_light_mode();
    }else{
        to_dark_mode();
    }
    local_verify();
    sort();
    
};
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }


function begin(iset){
    document.getElementById('set_selector').style.display = 'none';
    document.getElementById('study_selector').style.display = 'block';
    setnum=iset;
}

onunload = function(){
    
    //setlocal(phase=phase);
}

function hide_study(){
    document.getElementById('study_selector').style.display = 'none';
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
    setlocal(dark_light='light');
}
function to_dark_mode(){
    document.getElementById('dark-light').innerHTML="switch to light mode";
    document.querySelectorAll(".light-mode").forEach(function(v,i,a){v.classList.add("dark-mode");v.classList.remove('light-mode')});
    setlocal(dark_light='dark');
}
function replace_all(st,i,o){
    var res=st;
    while(res.includes(i)){
        res=res.replace(i,o);
    }
    return res;
}


function rf(inp){
    return inp.trim().toLowerCase();
}



document.onkeydown = function (keyevent) {
    //enter_code
    //0:none
    //1:write see response
    //2:write hide response
    //3:grammar next
    //4:grammar end view
    if (keyevent.key == "Enter") {
        if(enter_code==1){
            write_next();
        }else if(enter_code==2){
            end_view();
        }else if(enter_code==3){
            g_next();
        }else if(enter_code==4){
            g_end_view();
        }
    }
    //key_handle
    //0:none
    //1:t/f
    //2:write accent
    //3:grammar accent
    if(key_handle==1){
        if (keyevent.key == "t") {
            document.getElementById('tf_true').click();
        }
        if (keyevent.key == "f") {
            document.getElementById('tf_false').click();
        }
    }else if(key_handle==2){
        w_add_accent();
    }else if(key_handle==3){
        g_add_accent();
    }
    


}