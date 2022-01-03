var flashcards_ind=0;
var flashcards_state=0;
var tmp_set=[];
function flashcards(set=get_set(setnum)){
    document.getElementById('flashcards').style.display = 'block';
    document.getElementById('space').innerHTML=set[0][0];
    tmp_set=set;
    flashcards_ind=0;
    flashcards_state=0;
}
function flip(){
    flashcards_state=1-flashcards_state;
    console.log(tmp_set);
    console.log(tmp_set[flashcards_ind]);
    console.log(flashcards_ind);
    document.getElementById('space').innerHTML=tmp_set[flashcards_ind][flashcards_state];
}
function next(){
    flashcards_state=0;
    flashcards_ind=flashcards_ind+1;
    if(flashcards_ind==tmp_set.length){
        document.getElementById('flashcards').style.display = 'none';
        begin(setnum);
        //document.getElementById('space').innerHTML=tmp_set[flashcards_ind][flashcards_state];
    }else{
        document.getElementById('space').innerHTML=tmp_set[flashcards_ind][flashcards_state];
    }
    
}