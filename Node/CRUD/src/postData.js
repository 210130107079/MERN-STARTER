async function postData() 
{
    const newUser = {
        name:"Soham Tarabda",
        email:"soham9898@gmail.com"
    }

    try
    {
        const response = await fetch('http://localhost:1000/users' ,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(newUser)
        })
        if(!response.ok)
        {
            console.log(`Error : Status - ${response.status}`);
        }
        const data = await response.json()
        console.log("User data Added : ",newUser);
    }

    catch(error)
    {
        console.log("Error while posting Data !");
    }
}

postData()