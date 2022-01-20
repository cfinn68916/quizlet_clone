var phase;
var setnum;
onload= function(){
    document.getElementById('flashcards').style.display = 'none';
    document.getElementById('tf_test').style.display = 'none';
    document.getElementById('write_test').style.display = 'none';
    document.getElementById('study_selector').style.display = 'none';
    document.getElementById('write_ans').style.display = 'none';
    if(getlocal(dark_light=true)=='light'){
        to_light_mode();
    }else{
        to_dark_mode();
    }
};

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
}
function to_dark_mode(){
    document.getElementById('dark-light').innerHTML="switch to light mode";
    document.querySelectorAll(".light-mode").forEach(function(v,i,a){v.classList.add("dark-mode");v.classList.remove('light-mode')});
}