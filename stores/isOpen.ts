export const useMenu = definePiniaStore('menu', {
    state: () => ({
        isOpen: false
    }),
    actions: {
        toggleMenu() {
            if (this.isOpen === false) {
                this.isOpen = true
            } else {
                this.isOpen = false
            }
        }
    }
})