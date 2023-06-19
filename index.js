// app 1

// EVENT FOR NAVIGATION LINKS 
const links = document.querySelectorAll('body .container nav ul.list li a');
links.forEach(function(elemLink,index,arr){
    elemLink.addEventListener('click',function(){
        switch(index){
            case 0:
                activeLink(index);
                hideCard('showAll');
                break;
            case 1:
                activeLink(index);
                hideCard('nature');
                break;
            case 2:
                activeLink(index);
                hideCard('car');
                break;
            case 3:
                activeLink(index);
                hideCard('people');
                break;
        }
    });
});

// function hide Card
function hideCard(dataName){
    const cards = document.querySelectorAll('body .container .album .card');
    cards.forEach(function(elemCard){
        if(elemCard.getAttribute('data-name').toLowerCase() == dataName || dataName == 'showAll'){
            elemCard.classList.remove('hide');
        }
        else{
            elemCard.classList.add('hide');
        }
    });
}

// function active Link 
function activeLink(index){
    const links = document.querySelectorAll('body .container nav ul.list li a');
    links.forEach(function(elmLink,key){
        if(index === key){
            elmLink.classList.add('active');
        }
        else{
            elmLink.classList.remove('active');
        }
    });
}

// function DOM Content Loaded
window.addEventListener('DOMContentLoaded',function(e){
    console.log("DOM fully loaded and parsed");
    activeLink(2);
    hideCard('car');
})