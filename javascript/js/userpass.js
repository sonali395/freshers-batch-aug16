var c = 3;
function check()
{
                var username = document.getElementById("uname").value;
                var password = document.getElementById("pass").value;
                if ( username == "admin" && password == "ad")
                {
                                alert ("Login successful! Hello " + username);
                                return false;
                }
                else
                {
                                c --;
                                alert("You have left "+c+" attempt;");
                                if( c == 0)
                                {
                                                document.write("<h1>Error! Incorrect id pass!!.</h1>");
                                }
                }
}
