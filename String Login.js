function letmecheck()
{
    var Name = document.getElementById("Name").value;
    var ZipCode = document.getElementById("ZipCode").value;

    if (Name.length < 20)
    {
        if (ZipCode > 10000 || ZipCode < 99999)
        {
            location.replace("String.html");
        }
        else
        {
            alert("invalid zipcode")
        }
        
    }
    else
    {
        alert("invalid for Name")
    }
}