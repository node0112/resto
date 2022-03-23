import './style.css';

const content=document.getElementById('content')
let className
let show=false
let obj
let type
let text
let tab
function createDiv(className,element,type,text){
    obj=document.createElement(type)
    obj.classList.add(className)
    document.querySelector(element).appendChild(obj)
    if(text!=''){
        obj.textContent=text
    }
    return obj
}

function makeHeader(element){
createDiv('header',element,'div','')
//document.querySelector('.header').classList.add('hidden')
createDiv('logo','.header','div','W.J Marriott')
createDiv('ul','.header','ul')
createDiv('li','ul','li','Menu')
createDiv('li','ul','li','Pricing')
createDiv('li','ul','li','Location')
let li=document.querySelectorAll('.li')
li.forEach(item =>{
    item.addEventListener('click', ()=>{
        if(item.textContent=="Menu"){
            navigation('menu')
        }
        else if(item.textContent=="Pricing"){
            navigation('pricing')
        }
        else if(item.textContent=="Location"){
            alert("This page is still under Developement 💻")
        }
    })
})
}

function navigation(tab){
    if(tab=='menu'){
        document.querySelector('.main').classList.add('hidden')
        document.querySelector('.menu').classList.remove('hidden')
        makeHeader('#content')
        document.querySelector('.pricing').classList.add('hidden')
    }
    if(tab=='pricing'){
        document.querySelector('.main').classList.add('hidden')
        document.querySelector('.pricing').classList.remove('hidden')
        makeHeader('#content')
        document.querySelector('.menu').classList.add('hidden')
    }
    if(tab=='main'){
        document.querySelector('.main').classList.remove('hidden')
        document.querySelector('.pricing').classList.add('hidden')
        makeHeader('#content')
        document.querySelector('.menu').classList.add('hidden')
    }

}

//main page
createDiv('main','#content','div','')
makeHeader('.main')
createDiv('slogan','.main','div','World Class 5☆ Hotels')
createDiv('text-left','.main','div','')
createDiv('nAn','.text-left','div','Member Save')
createDiv('nAn','.text-left','div','20%')
createDiv('bookBtn','.main','div','Book Now')

//menu page
function imageElement(element,imageClass,textClass,primaryText,secondaryText){
   let item=createDiv('image-container',element,'div','')
   let img= createDiv(imageClass,".image-container",'img','')
    createDiv(textClass,item.className,'div','')
    createDiv('nAn',textClass,'div',primaryText)
    createDiv('nAn',textClass,'div',secondaryText)
    document.querySelector(img.className).src="./images/main-course.jpg"
}

createDiv('menu','#content','div','')
document.querySelector('.menu').classList.add('hidden')
createDiv('top-images','.menu','div','')
imageElement('.top-images','left-image','img-txt-left','Main-courses From','$50')