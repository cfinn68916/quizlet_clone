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

}
function local_update(fv){
    
}


function local_verify(){
    if(localStorage.getItem("storage-version")==null){
        localStorage.setItem("storage-version",'v1')
    }else if(localStorage.getItem("storage-version")!=version){
        local_update(localStorage.getItem("storage-version"));
    }
}

function getlocal(dark_light=false){
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

function setlocal(dark_light=null){
    if(dark_light!=null){
        localStorage.setItem('dark-light',dark_light);
    }
}