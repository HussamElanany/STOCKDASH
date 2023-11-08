const userContent = document.querySelector('.user-content')
const contentPage = document.querySelector('.content')
const dataEntery = document.querySelector('.inputs')
let postContent;
if (localStorage.thePostContent != null) {
    postContent = JSON.parse(localStorage.thePostContent)
} else {
    postContent = []
}

function addContent() {
    let dateFunc = new Date()
    let date = dateFunc.toString()
    console.log(date);
    let newContent = {
        userContent: userContent.value,
        getDate: date.slice(0, 25)

    }
    postContent.push(newContent)
    console.log(postContent);
    localStorage.setItem('thePostContent', JSON.stringify(postContent))
    showCommunityContent()
    clearTextArea()
    dataEntery.style.display = 'none'
}

function showCommunityContent() {
    if (postContent != []) {
        let html = '';
        for (let i = 0; i < postContent.length; i++) {

            html += `
            <div class="post bg-body-secondary">
            <div class="header">
                <div class="img-container">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        alt="">
                </div>
                <div class="profile-container">
                    <p class="profile-name"> User Admin </p>

                </div>
                <p class="date-hour">${postContent[i].getDate}</p>

            </div>
            <div class="post-body bg-light"> ${postContent[i].userContent}</div>
            <div class="reactions">
                <button class="btn btn-success">Agree</button><button class="btn btn-danger">Disagree</button>
            </div>

        </div>
             `
            // <td><button type="button" onclick="
            // deleteItem(${i})
            // showData()
            // " class="btn btn-outline-primary">-</button></td>
            console.log(postContent[i].userContent);
        }

        let theContent = document.querySelector('.content')
        theContent.innerHTML = html
    }


}

showCommunityContent()

function displayPostOption() {
    dataEntery.style.display = 'block'
}
function clearTextArea() {
    userContent.value = ''
}