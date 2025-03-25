function addDetails(name,age)
{
    try 
    {
        if(!name)
        {
            console.log("Name field cannot be empty");
        }
        if(age<=0 || isNaN(age))
        {
            console.log("Please enter vaid Age")
        }
    } 
    catch(error) 
    {
        console.log(err)
    }
    finally
    {
        console.log("Thank You !")
    }
}