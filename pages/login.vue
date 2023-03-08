<template>
    <div class="content">
        <div class="container">
            <form action="" class="Form">
                <div class="logo">
                    <h1>Nuxxi</h1>
                </div>
                <div class="inputs">
                    <input type="email" required>
                    <label for="email">Your Email</label>
                </div>
                <div class="inputs">
                    <label for="password">Password</label>
                    <input type="password" required>
                </div>
                <div class="inputs red">
                    <label for="button">Enter</label>
                    <input type="button">
                </div>
                <div class="register">
                    <NuxtLink to="/register">
                        <p>You still don't have a account?</p>
                    </NuxtLink>
                </div>
                <div class="icons">
                    <Icon name="logos:google-icon" size="3rem"/>
                    <Icon name="logos:facebook" size="3rem"/>
                    <Icon name="radix-icons:github-logo" size="3rem"/>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {

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

a {
    text-decoration: none;
    letter-spacing: 1px;
    font-size: 16px;
    font-family: 'Bebas neue';
}

p {
    margin-top: 15px;
    color: white;
    text-decoration: none;
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

    background-color:#2B2D42;
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
    font-size: 1rem;
}

.inputs {
    margin-bottom: 15px;

    height: 10%;
    width: 90%;

    position: relative;
}

label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #44AF69;
    font-size: 16px;
    font-family: "Bebas neue", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
}

.red > label {
    color: white;
}
.red > input {
    background-color: #A30B37;
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