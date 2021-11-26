class web{
    static registration(){
        var mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let x = document.forms["myform"]["fname"].value;
        if(x == ""){
            alert("name must be filled out");
            return false;
        }
        let y = document.forms["myform"]["address"].value;
        if(y == ""){
            alert("address must be filled out");
            return false;
        }
        if(!document.forms["myform"]["email"].value.match(mail))
        {
            alert("email must be filled out");
            return false;
        }
        let z = document.forms["myform"]["dob"].value;
        if(z == ""){
            alert("dob  must be filled out");
            return false;
        }
        if(document.forms["myform"]["mobno"].value == "")
        {
            alert("Mobile Number must be filled out");
            return false;
        }
        if(document.forms["myform"]["username"].value == "")
        {
            alert("username must be filled out");
            return false;
        }
        var pass = document.forms["myform"]["password"].value
        var rpass = document.forms["myform"]["rpassword"].value

        if(pass == "")
        {
            alert("password must be filled out");
            return false;
        }
        if(rpass == "")
        {
            alert("password must be filled out");
            return false;
        }
        if(pass!=rpass)
        {
            alert("passsword does not match ");
            return false;
        }
    }
}