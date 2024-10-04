import { createContext, useContext } from "react"


export const defaultProfileData = {
    userId: "",
    email: "",
    uri: "",
    link: "",
    profileImage: "",
}


export const SpotifyProfileContext = createContext(defaultProfileData);


export function useSpotifyProfileData(){
    return useContext(SpotifyProfileContext);
}


export function SpotifyProfileProvider({children}){

    return (
        <SpotifyProfileContext.Provider>
            {children}
        </SpotifyProfileContext.Provider>
    )
}