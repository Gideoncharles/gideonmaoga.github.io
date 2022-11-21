//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const messagesNotification = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages')


//remove active class from all menu items
 const changeActiveItem = () => {
     menuItems.forEach(item => {
         item.classList.remove('active');
     })
}
// function changeActiveItem(){
//     menuItems.forEach(i; )
// }


menuItems.forEach(item =>{
    item.addEventListener('click', () => {
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').
            style.display = 'none';
        }else{
            document.querySelector('.notification-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

//=========================== MESSAGES ==================================
messagesNotification.addEventListener('click', () =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
})




