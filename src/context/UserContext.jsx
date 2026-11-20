import { createContext, useState } from "react";
import Task29Oct from "../Pages/Task29Oct";

const UserContext = createContext()

export function UserProvider({children}){
    const [lightMode, setLightMode] = useState(true)

    const ThemeSwitcher = () =>{
       <button onClick={setLightMode(!lightMode)}>ThemeSwitcher</button>
    }

    const user = {
        name: "rohan",
        age: 21,
        email: "rohan@12gmail.com"
    }

    const[language, setLanguage] = useState("English")
   

    


return (
    <UserContext.Provider value={{lightMode, setLightMode, ThemeSwitcher, user ,language,setLanguage}}>
        {children}
    </UserContext.Provider>
)

}
export default UserContext