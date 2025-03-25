function checkloaneligibility(age,income,isMember,hascriminalRecord)
{
    if(age>=18 && age<=70)
    {
        if(income>=25000)
        {
            if(!hascriminalRecord)
            {
                console.log("Person is Eligible for Loan !");
                if(isMember)
                {
                    console.log("Has Premium !");       
                }
                else
                {   
                    console.log("Should Access to Premium feature !");  
                }
            }
            else
            {
                console.log("Not Eligible for Loan due to criminal records !");
            }
        }
        else
        {
            console.log("Not Eligible for Loan due to insufficient Income !");
        }
    }
    else
    {
        console.log("Not Eligible for a Loan due to Age restrictions !");
    }
}

checkloaneligibility(10,30000,true,true);
checkloaneligibility(10,30000,true,false);
checkloaneligibility(10,30000,false,true);
checkloaneligibility(40,30000,false,true);
checkloaneligibility(40,30000,true,true);
checkloaneligibility(40,30000,true,false);