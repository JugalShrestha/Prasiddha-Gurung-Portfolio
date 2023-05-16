
// For Nav bar and Page Shifting

const Pages = document.querySelectorAll('#page')
const PageLinks = document.querySelectorAll('.nav-link')
const NavBar = document.querySelector('.nav-bar')
const ClosePage = document.querySelectorAll('.page-closer')

Pages[0].style.zIndex = "1"
setTimeout(()=>{
    Pages[0].style.opacity = '100%'
},100)

PageLinks.forEach((pageLink,index)=>{
    pageLink.addEventListener('click',()=>{
        ClosePages();
        Pages[index].style.zIndex = "1"
        setTimeout(()=>{
            Pages[index].style.opacity = '100%'
        },100)
    })
})

ClosePage.forEach(closer=>{
    closer.addEventListener('click',ClosePages)
})

function ClosePages(){
    Pages.forEach(page=>{
        page.style.opacity = '0'
        page.style.zIndex = "-1"
    })
}

// For Portfolio