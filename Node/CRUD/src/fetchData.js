async function fetchData() {
    try 
    {
        const response = await fetch('http://localhost:1000/users');
        if (!response.ok) 
        {
            throw new Error(`Error ! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } 
    
    catch (error) 
    {
        console.error('Error fetching data:', error);
    }
}

fetchData();