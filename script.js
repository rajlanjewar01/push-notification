//Notification API

//default/granted/denied
console.log(Notification.permission);  //initial -  denied

//permission granted
if(Notification.permission === 'granted'){
    showNotifications();
}
//if user not said Yes and also not says No
else if(Notification.permission != 'denied'){
    Notification.requestPermission().then(permission => {
        if(permission === 'granted'){
            showNotifications();
        }
    })
}
//user denied
else{

}




function showNotifications(){
    const notification = new Notification(
        "Hi, this is example text",
        {
            body: 'hi there this is body for this notification.',
            icon: 'https://dynamic.brandcrowd.com/asset/logo/131b4e77-8e4b-443d-9302-c014c3099b46/logo-search-grid-1x?v=637674441484170000'
        }
        );
        notification.onclick = (e) => {
            window.location.href="https://dribbble.com/stories"
        }
}