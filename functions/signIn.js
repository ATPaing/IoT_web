import {
    getAuth,
    signInWithEmailAndPassword,
} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.7.1/firebase-auth.js"



const auth = getAuth();
const form = document.querySelector('form')
const noti_wrapper = document.querySelector('.notification_wrapper')
const noti_desc = document.querySelector('.noti_desc')
const noti_close = document.querySelector('.noti_close')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    noti_wrapper.style.display = 'flex'
    const dotInterval = increaseDots()
    setTimeout(async () => {
        clearInterval(dotInterval);
        try {
            noti_wrapper.style.display = 'none'
            const email = form.username.value
            const password = form.pwd.value
            
            const cred = await signInWithEmailAndPassword(auth, email, password)
            
            const authToken = cred.user.uid

            sessionStorage.setItem('userId', authToken)
            window.location.href = `../pages/index.html?type=${authToken[0]}`
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                noti_desc.textContent = 'User not found'
            } else if (error.code === 'auth/wrong-password') {
                noti_desc.textContent = 'Wrong password'
            } else if (error.code === 'auth/invalid-email') {
                noti_desc.textContent = 'Invalid email'
            } else if (error.code === 'auth/missing-password') {
                noti_desc.textContent = 'Missing password'
            } else if (error.code === 'auth/network-request-failed') {
                noti_desc.textContent = 'Network failed'
            } else if (error.code === 'auth/invalid-credential') {
                noti_desc.textContent = 'Incorrect username or password'
            }
            else {
                noti_desc.textContent = error.code
            }
            noti_wrapper.style.display = 'flex'
    
        }
        form.reset()
    }

    , 1000)
    
})

noti_close.addEventListener('click', () => {
    noti_wrapper.style.display = 'none'
    noti_desc.textContent = 'Please wait'
})

function increaseDots() {
    let dots = '' 
    const dotInterval = setInterval(() => {
        dots += '. '
        if (dots.length > 10) {
            dots = '. '
        }
        noti_desc.textContent = `Please wait ${dots}`
    }, 500)
    return dotInterval
}