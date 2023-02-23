const unreadMessages = document.querySelectorAll(".card");
const unread = document.getElementById("noti");
const markAll = document.getElementById("mar");
unread.innerText=unreadMessages.length

unreadMessages.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.remove("card");
        const newUnreadMessages = document.querySelectorAll(".card");
        card.innerText = newUnreadMessages.length;
    })
})
markAll.addEventListener("click", () => {
    unreadMessages.forEach(message => message.classList.remove("card"))
    const newUnreadMessages = document.querySelectorAll(".card");
    card.innerText = newUnreadMessages.length;
})