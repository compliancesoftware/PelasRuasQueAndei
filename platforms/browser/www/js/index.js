var toBeTransfered = "0";

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
    ev.target.appendChild(el);
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

function isMobile(){
    var uA = navigator.userAgent;
    var hasMobile = uA.indexOf("Mobile");
    if(hasMobile < 0){
        hasMobile = uA.indexOf("mobile");
        if(hasMobile < 0){
            return false;
        }
        return true;
    }
    return true;
}

function cardOnClick(event){
    toBeTransfered = "#"+event.currentTarget.id;
    return false;
}

function cardContainerOnClick(event){
    var card = $(toBeTransfered);
    
    var target = "#"+event.currentTarget.id;
    if(target == "#origin-container"){
        var el = document.getElementById(toBeTransfered.substr(toBeTransfered.indexOf("#")+1));
        $(card).removeClass("bg-success");
        $(card).addClass("bg-info");
        $(card).remove();
        $(target).append(el);
    }
    else if(target == "#destination-container"){
        var el = document.getElementById(toBeTransfered.substr(toBeTransfered.indexOf("#")+1));
        $(card).removeClass("bg-info");
        $(card).addClass("bg-success");
        $(card).remove();
        $(target).append(el);
    }

    toBeTransfered = "0";
    
}

$("document").ready(function(){
    console.log("Device ready");
    
    //verifica se é executado em ambiente mobile e adiciona suporte a click event
    if(isMobile()){
        console.log("It's a mobile device!");
        
        $(".card").click(cardOnClick);
        $(".card-container").click(cardContainerOnClick);
    }
    else{
        console.log("It's a browser app!");
    }
});