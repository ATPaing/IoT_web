const titles = document.querySelectorAll('.titles div')
const infoSection = document.querySelector('.info_section')
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
        return `<image src="./images/timetable.png"/>`
    }
}