let userArr = [
    { bookPhoto: "book-img.jfif", bookname: "Wimpy Kid", genre: "story", price: "16 $" },
    { bookPhoto: "book-img.jfif", bookname: "Capitan Grant Ship", genre: "tale", price: "13 $" },
    { bookPhoto: "book-img.jfif", bookname: "Harry Potter", genre: "story", price: "18 $" },
    { bookPhoto: "book-img.jfif", bookname: "Invisible Man", genre: "tale", price: "10 $" },
    { bookPhoto: "book-img.jfif", bookname: "Wimpy Kid", genre: "story", price: "16 $" },
    { bookPhoto: "book-img.jfif", bookname: "Capitan Grant Ship", genre: "tale", price: "13 $" },
    { bookPhoto: "book-img.jfif", bookname: "Harry Potter", genre: "story", price: "18 $" },
    { bookPhoto: "book-img.jfif", bookname: "Invisible Man", genre: "tale", price: "10 $" },
    { bookPhoto: "book-img.jfif", bookname: "Wimpy Kid", genre: "story", price: "16 $" },
    { bookPhoto: "book-img.jfif", bookname: "Capitan Grant Ship", genre: "tale", price: "13 $" },
    { bookPhoto: "book-img.jfif", bookname: "Harry Potter", genre: "story", price: "18 $" },
    { bookPhoto: "book-img.jfif", bookname: "Invisible Man", genre: "tale", price: "10 $" },
    { bookPhoto: "book-img.jfif", bookname: "Wimpy Kid", genre: "story", price: "16 $" },
    { bookPhoto: "book-img.jfif", bookname: "Capitan Grant Ship", genre: "tale", price: "13 $" },
    { bookPhoto: "book-img.jfif", bookname: "Harry Potter", genre: "story", price: "18 $" },
    { bookPhoto: "book-img.jfif", bookname: "Invisible Man", genre: "tale", price: "10 $" },
    { bookPhoto: "book-img.jfif", bookname: "Wimpy Kid", genre: "story", price: "16 $" },
    { bookPhoto: "book-img.jfif", bookname: "Capitan Grant Ship", genre: "tale", price: "13 $" },
    { bookPhoto: "book-img.jfif", bookname: "Harry Potter", genre: "story", price: "18 $" },
    { bookPhoto: "book-img.jfif", bookname: "Invisible Man", genre: "tale", price: "10 $" },
    { bookPhoto: "book-img.jfif", bookname: "Wimpy Kid", genre: "story", price: "16 $" },
    { bookPhoto: "book-img.jfif", bookname: "Capitan Grant Ship", genre: "tale", price: "13 $" },
    { bookPhoto: "book-img.jfif", bookname: "Harry Potter", genre: "story", price: "18 $" },
    { bookPhoto: "book-img.jfif", bookname: "Invisible Man", genre: "tale", price: "10 $" },
    { bookPhoto: "book-img.jfif", bookname: "Wimpy Kid", genre: "story", price: "16 $" },
    { bookPhoto: "book-img.jfif", bookname: "Capitan Grant Ship", genre: "tale", price: "13 $" },
    { bookPhoto: "book-img.jfif", bookname: "Harry Potter", genre: "story", price: "18 $" },
    { bookPhoto: "book-img.jfif", bookname: "Invisible Man", genre: "tale", price: "10 $" },
    { bookPhoto: "book-img.jfif", bookname: "Wimpy Kid", genre: "story", price: "16 $" },
    { bookPhoto: "book-img.jfif", bookname: "Capitan Grant Ship", genre: "tale", price: "13 $" },
    { bookPhoto: "book-img.jfif", bookname: "Harry Potter", genre: "story", price: "18 $" },
    { bookPhoto: "book-img.jfif", bookname: "Invisible Man", genre: "tale", price: "10 $" },
    { bookPhoto: "book-img.jfif", bookname: "Wimpy Kid", genre: "story", price: "16 $" },
    { bookPhoto: "book-img.jfif", bookname: "Capitan Grant Ship", genre: "tale", price: "13 $" },
    { bookPhoto: "book-img.jfif", bookname: "Harry Potter", genre: "story", price: "18 $" },
    { bookPhoto: "book-img.jfif", bookname: "Invisible Man", genre: "tale", price: "10 $" },
    { bookPhoto: "book-img.jfif", bookname: "Wimpy Kid", genre: "story", price: "16 $" },
    { bookPhoto: "book-img.jfif", bookname: "Capitan Grant Ship", genre: "tale", price: "13 $" },
    { bookPhoto: "book-img.jfif", bookname: "Harry Potter", genre: "story", price: "18 $" },
    { bookPhoto: "book-img.jfif", bookname: "Invisible Man", genre: "tale", price: "10 $" }

];
let jsontxt = JSON.stringify(userArr);
localStorage.setItem("userArr", jsontxt);
let myJson = localStorage.getItem("userArr");
let myarr = JSON.parse(myJson);
let i;

function boxCreate(ad, janr, qiymet) {
    let col4 = $(`
    <div class:"col-4">
     <div class="box">
        <img src="book-img.jfif" alt="">
        <p>Name: <span>${ad}</span></p>
        <p>Genre: <span>${janr}</span></p>
        <p>Price: <span>${qiymet}</span></p>
       </div>
    </div>`);
    $(".users").append(col4);
};

for (i = 0; i < 8; i++) {

    boxCreate(myarr[i].bookname, myarr[i].genre, myarr[i].price);
};

$(document).scroll(function() {
    if (Math.ceil($(document).scrollTop()) + $(window).height() == $(document).height()) {
        let y = i + 4
        if (y < myarr.length) {
            for (i; i <= y; i++) {

                boxCreate(myarr[i].bookname, myarr[i].genre, myarr[i].price);
            }
        }
    }
})



$("#search").submit(function(e) {
    e.preventDefault()
    $(".users").empty()
        // let names = ["Wimpy Kid","Capitan Grant Ship","Harry Potter","Invisible Man"]
    let searchTxt = $("#searchTxt").val()
    for (let i = 0; i < userArr.length; i++) {
        let arrelment = userArr[i].toLowerCase()
        searchTxt = searchTxt.toLowerCase()
        if (arrelement.indexOf(searchTxt) != -1) {
            // console.log(userArr[i].bookname)
            boxCreate(i, userArr[i].bookname, userArr[i].genre, userArr[i].price)
        }

    }
})