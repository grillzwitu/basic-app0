// importing locally saved images
import never_lie_img from "./images/never_lie_img.jpg"
import hardest_hidden_pic_img from "./images/hardest_hidden_pics_img.jpg"
import the_teacher_img from "./images/the_teacher_img.jpg"

const book1 = {
    author: "J. D. Vance",
    image:  "https://images-na.ssl-images-amazon.com/images/I/81ytGlIkLoL._AC_UL600_SR600,400_.jpg",
    title: "Hillbilly Elegy: A Memoir of a Family and Culture in Crisis",
    id: 1
}

const book2 = {
    author: "Rebecca Yarros",
    image:  "https://images-na.ssl-images-amazon.com/images/I/9101MLPcFTL._AC_UL600_SR600,400_.jpg",
    title: "Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)",
    id: 2
}

const book3 = {
    author: "Amelia Hepworth",
    image:  "https://images-na.ssl-images-amazon.com/images/I/81mpSoJzv4L._AC_UL600_SR600,400_.jpg",
    title: "I Love You to the Moon and Back",
    id: 3
}

const book4 = {
    author: "Freida McFadden",
    image:  never_lie_img,
    title: "Never Lie",
    id: 4
}

const book5 = {
    author: "Freida McFadden",
    image:  the_teacher_img,
    title: "The Teacher",
    id: 5
}

const book6 = {
    author: "Highlights Learning",
    image:  hardest_hidden_pic_img,
    title: "The Hardest Hidden Pictures Book Ever",
    id: 6
}

const listOfBooks = [book1, book2, book3, book4, book5, book6]

export default listOfBooks
