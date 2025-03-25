async function deleteData(userName) 
{
    try 
    {
        const response = await fetch('http://localhost:1000/users');
        if (!response.ok) 
        {
            throw new Error(`Error ! Status: ${response.status}`);
        }
        const users = await response.json();

        const user = users.find(u=> u.name.toLowerCase() === userName.toLowerCase())
        if(!user)
        {
            console.log(`No such USer Found : ${userName}`);
            return
        }

        const deleteResponse = await fetch(`http://localhost:1000/users/${user.id}`, {
            method:'DELETE'
        })  
        if(!deleteResponse)
        {
            console.log("Error deleting the User :");
        }
        console.log(`${userName} is deleted Successfully !`);
    }

    catch(error)
    {
        console.log("Error while deleting the User !");
    }
}

deleteData("soham Tarabada")