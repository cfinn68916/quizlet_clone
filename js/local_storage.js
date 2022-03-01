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

function write_set(num,set){
    localStorage.setItem('cs'+num,set);
}


function local_verify(){
    local_cq('storage_version',version);
    local_cq('g_0','');
    local_cq('g_1','');
    local_cq('g_2','');   
}

function add_res(nm,res){
    let prv=localStorage.getItem(nm);
    prv=prv+'^';
    res.forEach(function(v,i,a){prv=prv+v+',';});
    if(prv[prv.length-1]==','){
        prv=prv.slice(0,-1)
    }
    if(prv[0]=='^'){
        prv=prv.substring(1);
    }
    localStorage.setItem(nm,prv)
}


function local_cq(val,r){
    if(localStorage.getItem(val)==null){
        localStorage.setItem(val,r);
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

function cs_exists(num){
    return null!=localStorage.getItem('cs'+num);
}

function cs_set(num){
    var res=[];
    localStorage.getItem('cs'+num).split('<>')[1].split('^').forEach(function(v,i,a){res.push([v.split(':')[0].trim(),v.split(':')[1].trim()]);});
    return res;
}

function get_qty(){
    let tmp=localStorage.getItem('set_l');
    if(tmp==null){
        localStorage.setItem('set_l',10)
        return 10;
    }else{
        return tmp;
    }
}


function cs_name(num){
    return localStorage.getItem('cs'+num).split('<>')[0];
}