var uname = document.getElementById('username');

function valid(){
    if (uname.value == "") {
        alert ('enter your username');
        return false;
    }
}