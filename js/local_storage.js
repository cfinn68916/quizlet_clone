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