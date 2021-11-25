class log{
    static validateform(){
        let x = document.forms["myform"]["name"].value;
    if(x == ""){
        alert("username must be filled out");
        return false;
    }
    let y = document.forms["myform"]["password"].value;
    if(y == ""){
        alert("invalid password");
        return false;
    }

}
}