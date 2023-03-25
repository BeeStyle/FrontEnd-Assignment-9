var bookMarkName = document.getElementById("siteName")
var siteURL = document.getElementById("siteUrl")
var bookmarks;
if (localStorage.getItem("list") == null) {
    bookmarks = []
} else {
    bookmarks = JSON.parse(localStorage.getItem("list"))
    displaybookmarks()
}
function submit() {
    var Bmark = {
        name: bookMarkName.value,
        url: siteURL.value
    }
    bookmarks.push(Bmark)
    displaybookmarks()
}
function displaybookmarks() {
    localStorage.setItem("list", JSON.stringify(bookmarks))
    var temp = ''
    for (var i = 0; i < bookmarks.length; i++) {
        temp += `<div class="webwell"><h2 class="d-inline-block pe-5">` + bookmarks[i].name + `</h2><a class="btn btn-primary" href="http://` + bookmarks[i].url + `" target="_blank">visit</a>
<button class="btn btn-danger">Delete</button></div>`
    }
    document.getElementById("bookmarkList").innerHTML = temp
}