var verbs_ar=[];
var verbs_er=[];
var verbs_ir=[];
var verbs;
//['estoy','estás','está','está','estamos','estáis','están','están']
var subjects=['yo','tu','el','ella','nosotros','vosotros','ellos','ellas'];
var imperfect_verbs=['ser','comer','estudiar','trabajar','correr','dibujar','descansar','pintar','manejar','enseñar','preguntar','estar','desayunar','dormir','almorzar','buscar','abrir','bailar','cantar','cocinar','celebrar','decorar','nadar','ganar','jugar','esquiar','patinar','saltar','caminar','charlar','escribir','cortar','mandar','borrar','pegar','llamar','acampar','pescar','regatear','ver','ir'];

const nouns=0;

function sort(){
    verbs=[["to eat","comer"],["to study","estudiar"],["to work","trabajar"],["to drink","beber"],["to run","correr"],["to draw","dibujar"],["to rest","descansar"],["to paint","pintar"],["to drive","manejar"],["to teach","enseñar"],["to arrive","llegar"],["to ask","preguntar"],["to finish","terminar"],["to answer","contestar"],["to forget","olvidar"],["to have breakfast","desayunar"],["to start","empezar"],["to close","cerrar"],["to understand","entender"],["to order","pedir"],["to sleep","dormir"],["to return","volver"],["to serve","servir"],["to have lunch","almorzar"],["to go up","subir"],["to come","venir"],["to say","decir"],["to tell","decir"],["to give","dar"],["to put","poner"],["to leave","salir"],["to bring","traer"],["to look for","buscar"],["to open","abrir"],["to receive","recibir"],["to dance","bailar"],["to sing","cantar"],["to cook","cocinar"],["to celebrate","celebrar"],["to sweep","barrer"],["to decorate","decorar"],["to swim","nadar"],["to win","ganar"],["to ski","esquiar"],["to skate","patinar"],["to jump","saltar"],["to have lunch","almorzar"],["to swim","nadar"],["to walk","caminar"],["to play","jugar"],["to scuba dive","bucear"],["to cough","toser"],["to sneeze","estornudar"],["to row","remar"],["to chat","charlar"],["to write","escribir"],["to begin","comenzar"],["to sell","vender"],["to end","terminar"],["to walk","caminar"],["to camp","acampar"],["to fish","pescar"],["to bargain","regatear"]];
    verbs.forEach(function (v,i,a){if(v[1][v[1].length-2]=='e'){verbs_er.push(v);}else if(v[1][v[1].length-2]=='a'){verbs_ar.push(v);}else if(v[1][v[1].length-2]=='i'){verbs_ir.push(v);}})
}
//0:present progressive
//
//


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
    }

    return res;
}