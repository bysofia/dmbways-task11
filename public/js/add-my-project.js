let dataBlog = []

function addBlog(event) {
    event.preventDefault()

    let projectName = document.getElementById("projectName").value
    let startDate = document.getElementById("startDate").value
    let endDate = document.getElementById("endDate").value
    let description = document.getElementById("description").value
    let technologi = document.getElementById("nodejs", "reactjs", "nextjs", "typescript").value
    let image = document.getElementById("input-blog-image").files[0]


    image = URL.createObjectURL(image)
    console.log(image)

    let blog = {
        projectName,
        startDate,
        endDate,
        description,
        technologi,
        image,
        postAt: new Date(),
        author: "Rizky Abdulah"
    }

    dataBlog.push(blog)
    console.log(dataBlog)

    renderBlog()
}

function renderBlog() {
    document.getElementById("blog").innerHTML = ''

    for (let index = 0; index < dataBlog.length; index++) {
        console.log("test",dataBlog[index])

        document.getElementById("blog").innerHTML += `
        <div class="blog-box">
            <div class="blog-img">
                <img src="${dataBlog[index].image}">
            </div>
            <div class="blog-text">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Blog</button>
                </div>
                <h1>
                    <a href="blog-detail.html" target="_blank">
                        ${dataBlog[index].projectName}
                    </a>
                </h1>
                <div class="detail-blog-content">
                ${getFullTime(dataBlog[index].postAt)} | ${dataBlog[index].author}
                </div>
                <p>
                    ${dataBlog[index].description}
                </p>
                <div>
                <p style="font-size: 15px; color: grey">${getDistanceTime(dataBlog[index].postAt)}</p>
                </div>
            </div>
        </div>
        `
    }
}

function getFullTime(time) {
    // time = new Date()
    // console.log(time)

    let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    // console.log(monthName[9])

    // 14
    let date = time.getDate()
    console.log(date)

    // 9
    let monthIndex = time.getMonth()
    console.log(monthIndex)

    // 2022
    let year = time.getFullYear()
    console.log(year)

    let hours = time.getHours()
    let minutes = time.getMinutes()

    console.log(hours)

    if (hours <= 9) {
        hours = "0" + hours
    } 
    
    if (minutes <= 9) {
        minutes = "0" + minutes
    }

    // 14 Oct 2022 09:07 WIB
    return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`
}

function getDistanceTime(time) {
    let timeNow = new Date()
    let timePost = time

    let distance = timeNow - timePost //milisecond
    console.log(distance)

    let milisecond = 1000 // milisecond
    let secondInHours = 3600 // 1 jam = 3600 detik
    let hoursInDay = 24 // 1 hari = 24 jam

    let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay))
    let distanceHours = Math.floor(distance / (milisecond * 60 * 60))
    let distanceMinutes = Math.floor(distance / (milisecond * 60))
    let distanceSecond = Math.floor(distance / milisecond)

    if (distanceDay > 0) {
        return `${distanceDay} day(s) ago`
    } else if (distanceHours > 0) {
        return `${distanceHours} hour(s) ago`
    } else if (distanceMinutes > 0) {
        return `${distanceMinutes} minute(s) ago`
    } else {
        return `${distanceSecond} second(s) ago`
    }
}

// 1#
setInterval(function() {
    renderBlog()
}, 3000)

// 2#
// setInterval(intervalFunction, 3000)

// function intervalFunction() {
//     renderBlog()
// }