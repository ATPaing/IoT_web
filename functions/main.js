const titles = document.querySelectorAll('.titles div')
const infoSection = document.querySelector('.info_section')

const studentId = document.querySelector('.student_id')
const studentName = document.querySelector('.student_name')
const studentYear = document.querySelector('.student_year')

const logoutBtn = document.querySelector('.log_out')

// Get the current URL
var url = window.location.href;

// Use URLSearchParams to parse the query parameters
var params = new URLSearchParams(url);

// Retrieve the value of the 'type' parameter
var typeValue = params.get('type');

const userID = sessionStorage.getItem('userId') || typeValue

import {
    getAuth,
    signOut
} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.7.1/firebase-auth.js";



addUserData()
for (const title of titles) {
    title.addEventListener('click', () => {
        removeAllSelect()
        title.classList.add('selected')
        infoSection.innerHTML = showInfo(title.textContent)
    })
}

function removeAllSelect() {
    for (const title of titles) {
        title.classList.remove('selected')
    }
}

function showInfo(title) {
    const trimmedTitle = title.trim()
    if (trimmedTitle === "Attendance record") {
        return `
            <div class="info_section__container">
                <p>CRP: &nbsp &nbsp<span>100%</span></p>
            </div>
            <div class="info_section__container">
                <p>IoT: &nbsp &nbsp<span>66.45%</span></p>
            </div>
            <div class="info_section__container">
                <p>AP: &nbsp &nbsp<span>80.33%</span></p>
            </div>
            <div class="info_section__container">
                <p>BPS: &nbsp &nbsp<span>94.24%</span></p>
            </div>
        `
    } else if (trimmedTitle === "Grades") {
        return `
            <div class="info_section__year_wrapper">
            <div class="info_section__year">
                <h4>First year</h4>
            </div>
            <div>
                <div class="info_section__container">
                    <p>Programming: &nbsp &nbsp<span>D</span></p>
                </div>
                <div class="info_section__container">
                    <p>Database: &nbsp &nbsp<span>D</span></p>
                </div>
                <div class="info_section__container">
                    <p>Networking: &nbsp &nbsp<span>D</span></p>
                </div>
                <div class="info_section__container">
                    <p>Professional Practice: &nbsp &nbsp<span>D</span></p>
                </div>
                <div class="info_section__container">
                    <p>Web Development: &nbsp &nbsp<span>D</span></p>
                </div>
                <div class="info_section__container">
                    <p>PACP: &nbsp &nbsp<span>D</span></p>
                </div>
                <div class="info_section__container">
                    <p>Security: &nbsp &nbsp<span>D</span></p>
                </div>
                <div class="info_section__container">
                    <p>SDLC: &nbsp &nbsp<span>D</span></p>
                </div>
            </div>
        </div>
        <div class="info_section__year_wrapper">
            <div class="info_section__year">
                <h4>Second year</h4>
            </div>
            <div>
                <div class="info_section__container">
                    <p>Programming: &nbsp &nbsp<span>-</span></p>
                </div>
                <div class="info_section__container">
                    <p>Database: &nbsp &nbsp<span>-</span></p>
                </div>
                <div class="info_section__container">
                    <p>Networking: &nbsp &nbsp<span>-</span></p>
                </div>
                <div class="info_section__container">
                    <p>Professional Practice: &nbsp &nbsp<span>-</span></p>
                </div>
                <div class="info_section__container">
                    <p>Web Development: &nbsp &nbsp<span>-</span></p>
                </div>
                <div class="info_section__container">
                    <p>PACP: &nbsp &nbsp<span>-</span></p>
                </div>
                <div class="info_section__container">
                    <p>Security: &nbsp &nbsp<span>-</span></p>
                </div>
                <div class="info_section__container">
                    <p>SDLC: &nbsp &nbsp<span>-</span></p>
                </div>
            </div>
        </div>
        `
    }else if (trimmedTitle === "Schedule") {
        return `<image src="../images/timetable.png" alt="Schedule image"/>`
    }
}

async function addUserData() {
    const res = await fetch('https://iotweb-c6665-default-rtdb.asia-southeast1.firebasedatabase.app/cardInfo.json')
    const data = await res.json()

    for (const userData of data) {
        if (userID != null && userID === userData.userInfo.userID) {
            studentId.textContent = userData.userInfo.studentID
            studentName.textContent = userData.userInfo.userName
            studentYear.textContent = userData.userInfo.year
        }
    }

    
}

addUserData()

const auth = getAuth()
logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.href = `../pages/signIn.html`
    }).catch((error) => {
        console.log(error.code)
    });
})