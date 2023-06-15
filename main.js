var GuestName = document.getElementById("name1").value;
namesOfPeople.push(GuestName);
namesOfPeople.sort();

function searching()
{
    var s= document.getElementById("name2")
    var found=0;
    var j;
    for(j=0; j<mamesOfPeople.lemgth; j++)
    {
        if(s==namesOfPeople[j]){
            found=found+1;
        }
    }
    document.getElementById("resultado4").innerHTML="Nome encontrado"+found+"vez(es)";
    console.log("nome encontrado" +found+ "vez(es)");
}