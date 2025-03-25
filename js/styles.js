function getScreenWidth(){
    return window.innerWidth >= 700;
}

function introHoverIn(){
    if (getScreenWidth()) {
        document.getElementById('intro').style.width = '100%';
    }
}

function introHoverOut(){
    if (getScreenWidth()) {
        document.getElementById('intro').style.width = '65%';
    } 
}

function showMenu(){
    document.getElementById('menu').style.display = 'block';
}

function hideMenu(){
    document.getElementById('menu').style.display = 'none';
}

function printFuntion(){

    window.print();
}


// Command Menu
document.addEventListener("keydown", function(event) {
    console.log("Key Pressed:", event.key); 

    if (event.altKey &&  event.key.toLowerCase() === "o") {
        // window.location.href = "https://www.google.com";
        document.getElementById('menu').style.display = 'block';
    }

    if (event.altKey && event.key.toLowerCase() === "c") {
        document.getElementById('menu').style.display = 'none';
        // window.open("https://www.youtube.com", "_blank");
    }

    if (event.altKey && event.key.toLowerCase() === "p") {
        window.location.href = "https://srinadhch07.github.io/Portfolio"; 
    }   

    if (event.altKey && event.key.toLowerCase() === "w") {
        window.location.href = "https://api.whatsapp.com/send/?phone=9346070083&text=%22Hi%20How%20are%20you%20?%22"; 
    }

    if (event.altKey && event.key.toLowerCase() === "g") {
        window.location.href = "https://www.google.com/search?q=srinadh+chintakindi"; 
    }
    if (event.altKey && event.key.toLowerCase() === "y") {
        window.location.href = "https://www.youtube.com/results?search_query=srinadh+chintakindi"; 
    }
    if(event.altKey && event.key.toLowerCase() === "l"){
        window.location.href = "https://www.linkedin.com/in/srinadh-chintakindi-887550232/";
    }
    if(event.altKey && event.key.toLowerCase() === "h"){
        window.location.href = "https://www.github.com/Srinadhch07";
    }
    if (event.altKey && event.key.toLowerCase() === "i") {
        window.location.href = "https://www.instagram.com/mr_srinadhch07/"; 
    }
    if (event.altKey && event.key.toLowerCase() === "t") {
        window.location.href = "https://x.com/srinadhch07"; 
    }
});