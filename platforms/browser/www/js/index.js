function allowDrop(ev) {
    var tgt = "#"+ev.target.id;
    if(tgt == "#destination-container" || tgt == "#origin-container"){
        ev.preventDefault();
    }
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var el = document.getElementById(data);
    console.log(el);
    ev.target.appendChild(el);
}

function dropped(el){
    var id = "#"+el.id;
    var parent_id = "#"+$(id).parent().attr("id");
    if(parent_id == "#origin-container"){
        $(id).removeClass("bg-success");
        $(id).addClass("bg-info");
    }
    else if(parent_id == "#destination-container"){
        $(id).removeClass("bg-info");
        $(id).addClass("bg-success");
    }
    else{
        $(id).removeClass("bg-success");
        $(id).addClass("bg-info");
        $(id).remove();
        $(parent_id).append(el);
    }
}

$("document").ready(function(){
    console.log("Device ready");
});