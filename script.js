// For google chrome search 
document.querySelector("#formSearch").onsubmit = function() {
    window.location = "http://www.google.com/search?q=" + document.getElementById("googleSearchBox").value;
    return false;
}

// Clickable link 
document.querySelector(".aboutClickJS").onclick = function() {
    window.location = "about.html";
}

document.querySelector(".projectClickJS").onclick = function() {
    window.location = "project.html";
}

document.querySelector(".contactClickJS").onclick = function() {
    window.location = "contact.html";
}

document.querySelector(".moreClickJS").onclick = function() {
    window.location = "education.html";
}

document.querySelector(".skillClickJS").onclick = function() {
    window.location = "skill.html";
}
