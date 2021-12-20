function getlocal(ph=false){
    if(ph){
        var phase=localStorage.getItem('phase');
        if(phase==null){
            return '1';
        }
        return phase;
    }
}

function setlocal(phase=null){
    if (phase!=null){
        localStorage.setItem('phase',phase);
    }
}