import { useLocalStorage, useStorage } from "@vueuse/core";
import { getAuth } from "firebase/auth";


export const useConexion = definePiniaStore('connected', {
    state: () => ({
        isConnected: useLocalStorage('isConnected', false),
        name: useStorage('name', ''),
        profilePic: useStorage('profilePic', 'https://media.ipassio.com/media/blog/benefits-of-solving-rubiks-cube/blog_icon/benefits-of-solving-rubiks-cube.jpg'),
        isLoading: true
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
            }
        },
        Loading() {
            this.isLoading = false
        },
        logOut() {
            const auth = getAuth();
            auth.signOut().then(() => {
                this.initialize()
            })
        },
        initialize() {
            useLocalStorage('macaco', '', { mergeDefaults: true }).value = null
            useLocalStorage('name', '', { mergeDefaults: true }).value = null
            useLocalStorage('profilePic', 'https://media.ipassio.com/media/blog/benefits-of-solving-rubiks-cube/blog_icon/benefits-of-solving-rubiks-cube.jpg', { mergeDefaults: true }).value = null
            useLocalStorage('isConnected', false, { mergeDefaults: true }).value = null
            this.name = ''
            this.profilePic = 'https://media.ipassio.com/media/blog/benefits-of-solving-rubiks-cube/blog_icon/benefits-of-solving-rubiks-cube.jpg'
            this.isConnected = false
        }
    },

})