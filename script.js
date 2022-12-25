const notifications = document.querySelectorAll(".notifications")
const dots = document.querySelectorAll(".notificationsText_point");
const readButton = document.querySelector(".divNotification_readButton");
const notificationNumber = document.querySelector(".divNotification_number");


let random = Math.floor(Math.random() * (7-1) + 1) ;
createNotifications(random);

let unreadNotifications = searchNotifications();
notificationNumber.textContent = unreadNotifications;

hoverNotifications();


function createNotifications(number){
    for(let i= number  ; i<notifications.length ;i++){
        notifications[i].style.backgroundColor = "hsl(0, 0%, 100%)";
        dots[i].style.display = "none";
    }
}



readButton.addEventListener("mouseover",(e)=>{
    e.target.style.color="hsl(219, 85%, 26%)";
});

readButton.addEventListener("mouseleave",(e)=>{
    e.target.style.color="hsl(219, 12%, 42%)";
})


readButton.addEventListener("click",(e)=>{
    readAllNotifications();
    //let unreadCount = searchNotifications();
    
    let unreadCount = searchNotifications();
    notificationNumber.textContent = unreadCount;
    notificationNumber.style.backgroundColor = "hsl(219, 14%, 63%)";
})


function readAllNotifications(){
    for(let i= 0  ; i<notifications.length ;i++){
        notifications[i].style.backgroundColor = "hsl(0, 0%, 100%)";
        dots[i].style.display = "none";
    
    }
}

function searchNotifications(){

    let readCount = 0 ;

    for(let i = 0 ; i < dots.length;i++){
        if(dots[i].style.display == "none"){
            readCount++; 
        }

    }

    let unreadCount = notifications.length - readCount;
    
    return unreadCount;

}

function hoverNotifications(){
    let countDisplay = 0 ;

    for(let i = 0; i < notifications.length;i++){
        notifications[i].addEventListener("mouseover",(e)=>{
            notifications[i].style.backgroundColor= "hsl(205, 33%, 90%)" ;
            dots[i].style.display = "none";
            countDisplay = countActive();

            let unreadNotifications = notifications.length - countDisplay;
            notificationNumber.textContent = unreadNotifications;

            if(unreadNotifications == 0){

                notificationNumber.style.backgroundColor = "hsl(219, 14%, 63%)";

            }


        })

        notifications[i].addEventListener("mouseleave",(e)=>{
            notifications[i].style.backgroundColor ="white";       
        })

        
    }




}

function countActive(){
    
    let countDisplay = 0;
    
    for(let j = 0 ; j<notifications.length;j++){
        if(dots[j].style.display=="none"){
            countDisplay = countDisplay+1;    
        }
    }
    return countDisplay;
}





