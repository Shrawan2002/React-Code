import UserContext from "./UserContext";
import React from "react";
export default function UserContextProvider({children}){

    let [user, setUser] = React.useState(null);

    return( 
    <UserContext.Provider value={{user, setUser}} >
        {children}
    </UserContext.Provider>
    )
}