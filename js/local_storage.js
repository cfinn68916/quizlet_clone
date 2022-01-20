function item_exists(i){
    if(localStorage.getItem(i)==null){
        return false;
    }
    return true;
}

function create_new(){
    if(!item_exists('dark-light')){
        localStorage.setItem('dark-light','light');
    }
    if(!item_exists('1')){
        localStorage.setItem('1','1');
    }
    if(!item_exists('2')){
        localStorage.setItem('2','1');
    }
    if(!item_exists('3')){
        localStorage.setItem('3','1');
    }
    if(!item_exists('4')){
        localStorage.setItem('4','1');
    }
    if(!item_exists('5')){
        localStorage.setItem('5','1');
    }
    if(!item_exists('6')){
        localStorage.setItem('6','1');
    }
    if(!item_exists('7')){
        localStorage.setItem('7','1');
    }
    if(!item_exists('8')){
        localStorage.setItem('8','1');
    }
    if(!item_exists('9')){
        localStorage.setItem('9','1');  
    }
}

function getlocal(ph=false, dark_light=false){
    if(ph){
        var phase=localStorage.getItem('phase');
        if(phase==null){
            return '1';
        }
        return phase;
    }
    if(dark_light){
        var dl=localStorage.getItem('dark-light');
        if(dl==null){
            setlocal(phase=null,dark_light='light');
            to_light_mode();
            return 'light';
        }
        return dl;
    }
}

function setlocal(phase=null,dark_light=null){
    if (phase!=null){
        localStorage.setItem('phase',phase);
    }
    if(dark_light!=null){
        localStorage.setItem('dark-light',dark_light);
    }
}