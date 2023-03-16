<template>
    <div class="content">
        <div class="container">
            <form action="" class="Form">
                <div class="logo">
                    <h1>Nuxxi</h1>
                </div>
                <div class="inputs">
                    <input type="text" id="email" v-model="email" required>
                    <label for="email">Your Email</label>
                </div>
                <div class="inputs">
                    <input type="password" id="password" v-model="password" required>
                    <label for="password">Password</label>
                </div>
                <div class="inputs red">
                    <input type="button" id="button" @click="singIn()">
                    <label for="button">Enter</label>
                </div>
                <div class="register">
                    <NuxtLink to="/register">
                        <p>You still don't have a account?</p>
                    </NuxtLink>
                </div>
                <div class="icons">
                    <Icon name="logos:google-icon" size="3rem" />
                    <Icon name="logos:facebook" size="3rem" />
                    <Icon name="radix-icons:github-logo" size="3rem" />
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth"
import { useConexion } from '../stores/isConnect'


const Conected = useConexion()
Conected.logOut()
const { $swal } = useNuxtApp()

const password = ref("")
const email = ref("")



const singIn = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
            const user = getAuth().currentUser;
            let name = user.displayName

            $swal.fire({
                title: "Welcome " + name,
                icon: 'success',
                text: 'We are happy to see you again',
                confirmButtonColor: '#44AF69',
                confirmButtonText: 'Go to Home',
            }).then((result) => {
                if (result.isConfirmed) {
                    return navigateTo('/')
                }
            })
        }).catch((err) => {
            console.log(err)
            switch (err.code) {
                case "auth/invalid-email":
                    $swal.fire({
                        title: 'Invalid email',
                        icon: 'error',
                        text: 'Try again',
                    })
                    break
                case "auth/user-disabled":
                    $swal.fire({
                        icon: 'error',
                        title: 'User disabled',
                        text: 'Try again',
                    })
                    break
                case "auth/user-not-found":
                    $swal.fire({
                        icon: 'error',
                        title: 'User not found',
                        text: 'Try again',
                    })
                    break
                case "auth/wrong-password":
                    $swal.fire({
                        icon: 'error',
                        title: 'Wrong password',
                        text: 'Try again',
                    })
                    break
                default:
                    $swal.fire({
                        icon: 'error',
                        title: 'Something wrong',
                        text: 'Try again',
                    })
            }
        })
}
</script>

<style scoped>
.icons {
    margin-top: 25px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 90%;

}

p {
    margin-top: 15px;
    color: white;
    font-family: "Bebas neue", sans-serif;
    letter-spacing: 1px;
}

.logo {
    letter-spacing: 1.5px;
    color: #44AF69;
    transform: scale(1.5);

    position: absolute;
    top: 15%;
}

.content {
    position: absolute;
    top: 0;
    left: 0;

    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgb(255, 255, 255);
}

.container {
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    gap: 5%;
}

.Form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #2B2D42;
    height: 80%;
    width: 50%;

    border-radius: 16px;
    position: relative;
}

input {
    width: 100%;
    height: 100%;

    border: none;
    outline: none;

    border-radius: 16px;

    padding: 15px;
    padding-top: 35px;
    font-size: 1.5rem;
}

.inputs {
    margin-bottom: 15px;

    height: 10%;
    width: 90%;

    position: relative;
    transition: 450ms ease;
}

label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #A30B37;
    font-size: 16px;
    font-family: "Bebas neue", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    transition: 450ms ease;
}

.inputs input:focus,
.inputs input:valid {
    border: 3px solid #44AF69;
    font-family: "Bebas neue", sans-serif;
}

.inputs input:focus~label,
.inputs input:valid~label {
    top: 5%;
    left: 0;
    transform: scale(0.7);
    color: #44AF69
}

.red>label {
    color: white;
}

.red>input {
    background-color: #A30B37;
}

.red input:focus~label,
.red input:valid~label {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}


/* Ultrawide Monitors */
@media screen and (min-width: 1921px) and (max-width: 2560px) {
    .container {
        width: 1920px;
        overflow-x: hidden;

    }

    .Form {
        width: 40%;
        height: 90%;
    }
}

/* FullHD Monitors */
@media screen and (min-width: 1441px) and (max-width: 1920px) {
    .container {
        width: 1440px;
    }
}

/* HD Monitors */
@media screen and (min-width: 1024px) and (max-width: 1440px) {
    .container {
        width: 1024px;
    }

    .logo {
        letter-spacing: 1.5px;
        color: #44AF69;
        transform: scale(0.6);

        position: absolute;
        top: 0;
    }
}

/* Tablets Monitors */
@media screen and (min-width: 768px) and (max-width: 1023px) {
    .container {
        width: 100%;
    }

    .Form {
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
}

/* Phones Monitors */
@media screen and (max-width: 767px) {
    .container {
        width: 100%;
        padding-left: 10px;
        padding-right: 10px;
    }

    .Form {
        width: 100vw;
        height: 100vh;
        border-radius: 0;
    }
}
</style>