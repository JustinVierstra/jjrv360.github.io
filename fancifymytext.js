function bigger()
{
    document.getElementById('textarea').style.fontSize = '24pt';
    alert1();

}

function fancyschmancy()
{
    document.getElementById("textarea").style.fontWeight = 'bold';
    document.getElementById("textarea").style.color = "blue";
    document.getElementById("textarea").style.textDecoration = "underline";
    alert2();
}

function boringbetty()
{
    document.getElementById("textarea").style.fontWeight = 'initial';
    document.getElementById("textarea").style.color = "initial";
    document.getElementById("textarea").style.textDecoration = "initial";
    alert3();
}
function moo() 
{
    let str = document.getElementById("textarea").value;
    let parts = str.split(".");
    str = parts.join("-Moo");
    document.getElementById("textarea").value = str;
    document.getElementById("textarea").style.textTransform = 'uppercase'
}

function alert2()
{
    alert("Fancified!");
}

function alert3()
{
    alert("Boring!");
}