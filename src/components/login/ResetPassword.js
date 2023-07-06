import React, {useState} from"react";

export default function ResetPassword(){
    
    const [email, setEmail] = useState({
        email:''
    })

    const handleSend = async (e) =>{
        e.preventDefault();
        const response = await fetch('https://traind.azurewebsites.net/api/User/reset-password',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            body : JSON.stringify(email)
        })
        if(response.ok){
            const data = await response.json();
            console.log(`${JSON.stringify(data)}`)
        }
        else{
            console.error(`${response.status}`)
        }
    }

    const handleChange = (event) =>{
        const {name, value} = event.target
        setEmail(prev => ({...prev, [name]:value}))
    }

    return(
        <div>
            <form onSubmit={handleSend}>
                <input 
                    name="email"
                    value={email.email}
                    type="email" 
                    required
                    onChange={handleChange}
                    placeholder="E-mail"
                />
            <button type="submit" >Send</button>
            </form>
        </div>
    )
}