setInterval(casovac, 100);

function casovac(){
    
    const d = new Date();
    
    var seconds = decNaBin(d.getSeconds())
    var minutes = decNaBin(d.getMinutes())
    var hours =   decNaBin(d.getHours())
    
    for(var i = 1; i < 7; i++)
    {
        if(hours.charAt(i) == 1)
        {
            if(i != 1){
            ukaz("1" + i);
            }
        }
        else
        {
            if(i != 1)
            {
                skry("1" + i);
            }
        }

        if(minutes.charAt(i) == 1)
        {
            ukaz("2" + i);
        }
        else
        {
            skry("2" + i);
        }

        if(seconds.charAt(i) == 1)
        {
            ukaz("3" + i);
        }
        else
        {
            skry("3"+i);
        }
        
    }
}


function ukaz(position) 
    {
        document.getElementById(position).style.backgroundColor = "#5bd10d";
        document.getElementById(position).style.boxShadow = "0px 0px 15px 5px #5bd10d"
    }

    function skry(position) 
    {
        document.getElementById(position).style.backgroundColor = "#c6f4f5";
        document.getElementById(position).style.boxShadow = "0px 0px 0px 0px #000000";
    }

function decNaBin(decimal) 
{
    var temp = (decimal >>> 0).toString(2);
    while(temp.length <7)
    {
        temp = "0" + temp;
    }
    
    return temp;
}

    