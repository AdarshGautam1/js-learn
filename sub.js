function Subscribe(){
    const isSub = document.querySelector('.sub');

    if (isSub.innerText === 'Subscribe'){
        isSub.innerText = 'Subscribed';
    } else{
        isSub.innerText = 'Subscribe';
    }
}