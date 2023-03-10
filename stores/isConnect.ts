import { useLocalStorage, useStorage } from "@vueuse/core";
import { getAuth } from "firebase/auth";


export const useConexion = definePiniaStore('connected', {
    state: () => ({
        isConnected: useLocalStorage('conexion', false),
        name: useStorage('macaco', ''), 
    }),
    actions: {
        connect() {
            const auth = getAuth();
            const user = auth.currentUser;
            if (user) {
                useLocalStorage('macaco',  user.displayName)
                useLocalStorage('conexion',  true)
                this.name = user.displayName!
                this.isConnected = true
            } else {
                useLocalStorage('conexion', false)
                this.isConnected = false
            }
        }
    },
    
})