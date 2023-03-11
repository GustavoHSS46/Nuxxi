import { useLocalStorage, useStorage } from "@vueuse/core";
import { getAuth } from "firebase/auth";


export const useConexion = definePiniaStore('connected', {
    state: () => ({
        isConnected: useLocalStorage('isConnected', false),
        name: useStorage('name', ''),
        profilePic: useStorage('profilePic', '')
    }),
    actions: {
        connect() {
            const auth = getAuth();
            const user = auth.currentUser;
            if (user) {
                this.name = user.displayName!
                this.profilePic = user.photoURL!
                this.isConnected = true
                useLocalStorage('profilePic', this.profilePic, { mergeDefaults: true })
                useLocalStorage('isConnected', this.isConnected, { mergeDefaults: true })
                useLocalStorage('name', this.name, { mergeDefaults: true })
            } else {
                this.initialize()
            }
        },
        logOut() {
            const auth = getAuth();
            auth.signOut().then(() => {
                console.log("sign out nigga")
                this.initialize()
                console.log("logged out")
            })
        },
        initialize() {
            console.log("logged out123123123")
            useLocalStorage('macaco', '', { mergeDefaults: true }).value = null
            useLocalStorage('name', '', { mergeDefaults: true }).value = null
            useLocalStorage('profilePic', 'default', { mergeDefaults: true }).value = null
            useLocalStorage('isConnected', false, { mergeDefaults: true }).value = null
            this.name = ''
            this.profilePic = ''
            this.isConnected = false
        }
    },

})