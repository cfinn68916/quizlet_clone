var verbs_ar=[];
var verbs_er=[];
var verbs_ir=[];
var verbs;
//['estoy','estás','está','está','estamos','estáis','están','están']
var subjects=['yo','tu','el','ella','nosotros','vosotros','ellos','ellas'];
var imperfect_verbs=['ser','comer','estudiar','trabajar','correr','dibujar','descansar','pintar','manejar','enseñar','preguntar','estar','desayunar','buscar','abrir','bailar','cantar','cocinar','celebrar','decorar','nadar','ganar','jugar','esquiar','patinar','saltar','caminar','escribir','cortar','mandar','borrar','pegar','llamar','acampar','pescar','regatear','ver','ir','dar','saber','empezar'];

const nouns=0;

function replace_all(st, i, o) {
    var res = st;
    while (res.includes(i)) {
        res = res.replace(i, o);
    }
    return res;
}

function sanatize(input) {
    input = replace_all(input, '&', '&amp');
    input = replace_all(input, '"', '&quot');
    input = replace_all(input, '\'', '&#39');
    input = replace_all(input, '<', '&lt');
    input = replace_all(input, '>', '&gt');
    return input;
}

function sort(){
    verbs=[["to eat","comer"],["to study","estudiar"],["to work","trabajar"],["to drink","beber"],["to run","correr"],["to draw","dibujar"],["to rest","descansar"],["to paint","pintar"],["to drive","manejar"],["to teach","enseñar"],["to arrive","llegar"],["to ask","preguntar"],["to finish","terminar"],["to answer","contestar"],["to forget","olvidar"],["to have breakfast","desayunar"],["to start","empezar"],["to close","cerrar"],["to understand","entender"],["to order","pedir"],["to sleep","dormir"],["to return","volver"],["to serve","servir"],["to have lunch","almorzar"],["to go up","subir"],["to come","venir"],["to say","decir"],["to tell","decir"],["to give","dar"],["to put","poner"],["to leave","salir"],["to bring","traer"],["to look for","buscar"],["to open","abrir"],["to receive","recibir"],["to dance","bailar"],["to sing","cantar"],["to cook","cocinar"],["to celebrate","celebrar"],["to sweep","barrer"],["to decorate","decorar"],["to swim","nadar"],["to win","ganar"],["to ski","esquiar"],["to skate","patinar"],["to jump","saltar"],["to have lunch","almorzar"],["to swim","nadar"],["to walk","caminar"],["to play","jugar"],["to scuba dive","bucear"],["to cough","toser"],["to sneeze","estornudar"],["to row","remar"],["to write","escribir"],["to begin","comenzar"],["to sell","vender"],["to end","terminar"],["to walk","caminar"],["to camp","acampar"],["to fish","pescar"],["to bargain","regatear"]];
    verbs.forEach(function (v,i,a){if(v[1][v[1].length-2]=='e'){verbs_er.push(v);}else if(v[1][v[1].length-2]=='a'){verbs_ar.push(v);}else if(v[1][v[1].length-2]=='i'){verbs_ir.push(v);}})
}

function end_change(inp){
    if(inp[inp.length-2]=='a'){
        if(inp[inp.length-3]=='c'){
            return inp.replace('car','quar');
        }
        if(inp[inp.length-3]=='g'){
            return inp.replace('gar','guar');
        }
        if(inp[inp.length-3]=='z'){
            return inp.replace('zar','car');
        }
    }
    return inp;
}

//0:present progressive
//1:imperfect
//2:subjunctive


function gen_q(num,qty){
    alert('set may not fully work');
    var res=[];
    if(num==0){
        for(var i=0;i<qty;i++){
            var verb=verbs[Math.floor(Math.random()*verbs.length)][1];
            let tmp=Math.floor(Math.random()*subjects.length);
            var subj=subjects[tmp];
            let conj=['estoy','estás','está','está','estamos','estáis','están','están'][tmp];
            if(verb[verb.length-2]=='e'){
                res.push([subj+'  |  '+verb,conj+' '+verb.replace('er','iendo').replace('eiendo','eyendo')]);
            }else if(verb[verb.length-2]=='a'){
                res.push([subj+'  |  '+verb,conj+' '+verb.replace('ar','ando')]);
            }else if(verb[verb.length-2]=='i'){
                res.push([subj+'  |  '+verb,conj+' '+verb.replace('ir','iendo').replace('eiendo','eyendo')]);
            }

        }
        
    }else if(num==1){
        for(var i=0;i<qty;i++){
            var verb=imperfect_verbs[Math.floor(Math.random()*imperfect_verbs.length)];
            let tmp=Math.floor(Math.random()*subjects.length);
            let a_conj=['aba','abas','aba','aba','ábamos','abais','aban','aban'][tmp];
            let ie_conj=['ía','ías','ía','ía','íamos','íais','ían','ían'][tmp];
            var subj=subjects[tmp];
            if(verb=='ser'){
                res.push([subj+'  |  '+verb,['era','eras','era','era','éramos','erais','eran','eran'][tmp]]);
            }else if(verb=='ver'){
                res.push([subj+'  |  '+verb,['veía','veías','veía','veía','veíamos','veíais','veían','veían'][tmp]]);
            }else if(verb=='ir'){
                res.push([subj+'  |  '+verb,['iba','ibas','iba','iba','íbamos','ibais','iban','iban'][tmp]]);
            }else if(verb[verb.length-2]=='e'){
                res.push([subj+'  |  '+verb,verb.replace('er',ie_conj)]);
            }else if(verb[verb.length-2]=='a'){
                res.push([subj+'  |  '+verb,verb.replace('ar',a_conj)]);
            }else if(verb[verb.length-2]=='i'){
                res.push([subj+'  |  '+verb,verb.replace('ir',ie_conj)]);
            }
    }
    }else if(num==2){
        for(var i=0;i<qty;i++){
            var verb=imperfect_verbs[Math.floor(Math.random()*imperfect_verbs.length)];
            let tmp=Math.floor(Math.random()*subjects.length);
            var subj=subjects[tmp];
            let a_conj=['e','es','e','e','emos','éis','en','en'][tmp];
            let ie_conj=['a','as','a','a','amos','áis','an','an'][tmp];
            if(verb=='ser'){
                res.push([subj+'  |  '+verb,'ojalá que '+['sea','seas','sea','sea','seamos','seáis','sean','sean'][tmp]]);
            }else if(verb=='dar'){
                res.push([subj+'  |  '+verb,'ojalá que '+['dé','des','dé','dé','demos','déis','den','den'][tmp]]);
            }else if(verb=='ir'){
                res.push([subj+'  |  '+verb,'ojalá que '+['vaya','vayas','vaya','vaya','vayamos','vayáis','vayan','vayan'][tmp]]);
            }else if(verb=='estar'){
                res.push([subj+'  |  '+verb,'ojalá que '+['esté','estés','esté','esté','estemos','estéis','estén','estén'][tmp]]);
            }else if(verb=='saber'){
                res.push([subj+'  |  '+verb,'ojalá que '+['sepa','sepas','sepa','sepa','sepamos','sepáis','sepan','sepan'][tmp]]);
            }else if(verb[verb.length-2]=='e'){
                res.push([subj+'  |  '+verb,'ojalá que '+verb.replace('er',ie_conj)]);
            }else if(verb[verb.length-2]=='a'){
                res.push([subj+'  |  '+verb,'ojalá que '+end_change(verb).replace('ar',a_conj)]);
            }else if(verb[verb.length-2]=='i'){
                res.push([subj+'  |  '+verb,'ojalá que '+verb.replace('ir',ie_conj)]);
            }

        }

    }

    return res;
}
