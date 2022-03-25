import './style.css';
import maincourse from './images/main-course.jpg'
import dessert from './images/dessert.jpg'
import starters from './images/starters.jpg'
import cozy from './images/cozy.jpg'
import double from './images/double.jpg'
import delux from './images/delux.jpg'

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
addEventListener()
}

function removeHeader(){
    document.querySelector('.header').remove()
}

function navigation(tab){
    if(tab=='menu'){
        removeHeader()
        makeHeader('.menuheader')
        document.querySelector('.main').classList.add('hidden')
        document.querySelector('.menu').classList.remove('hidden')
    }
    if(tab=='pricing'){
        removeHeader()
        makeHeader('.pricingheader')
        document.querySelector('.main').classList.add('hidden')
        document.querySelector('.pricing').classList.remove('hidden')
        document.querySelector('.menu').classList.add('hidden')
    }
    if(tab=='main'){
        document.querySelector('.main').classList.remove('hidden')
        removeHeader()
        makeHeader('.mainheader')
        document.querySelector('.menu').classList.add('hidden')
        document.querySelector('.pricing').classList.add('hidden')
    }

}


createDiv('main','#content','div','')
createDiv('mainheader','.main','div','')
makeHeader('.mainheader')
createDiv('slogan','.main','div','World Class 5☆ Hotels')
createDiv('text-left','.main','div','')
createDiv('nAn','.text-left','div','Member Save')
createDiv('nAn','.text-left','div','20%')
createDiv('bookBtn','.main','div','Book Now')

//menu page
function imageElement(element,imageClass,textClass,primaryText,secondaryText,source,containerName){
   let item=createDiv(containerName,element,'div','')
   let img= createDiv(imageClass,"."+item.className,'img','')
    let textclass=createDiv(textClass,"."+item.className,'div','')
    createDiv('top',"."+textclass.className,'div',primaryText)
    createDiv('bottom',"."+textclass.className,'div',secondaryText)
    document.querySelector("."+textclass.className).classList.add('hidden')
    document.querySelector("."+img.className).src=source
}

createDiv('menu','#content','div','')
createDiv('menuheader','.menu','div','')
document.querySelector('.menu').classList.add('hidden')
createDiv('top-images','.menu','div','')

imageElement('.top-images','left-image','img-txt-left','Main-courses From','$50',maincourse,'image-container1')
imageElement('.top-images','right-image','img-txt-right','Desserts Starting From','$20',dessert,'image-container2')
imageElement('.menu','bottom-image','img-txt-btm','Desserts Starting From','$20',starters,'image-container3')


function imageTextShow(imagename,condition){
    if(imagename=='left-image'){
        if(condition==true){
        document.querySelector('.img-txt-left').classList.remove('hidden')
        }
        if(condition==false){
            document.querySelector('.img-txt-left').classList.add('hidden')
        }
    }
    if(imagename=='right-image'){
        if(condition==true){
        document.querySelector('.img-txt-right').classList.remove('hidden')
        }
        if(condition==false){
            document.querySelector('.img-txt-right').classList.add('hidden')
        }
    }
    if(imagename=='bottom-image'){
        if(condition==true){
        document.querySelector('.img-txt-btm').classList.remove('hidden')
        }
        if(condition==false){
            document.querySelector('.img-txt-btm').classList.add('hidden')
        }
    }

}
//event listener
document.querySelector('.bookBtn').addEventListener('click', ()=>{
    navigation("pricing")
})
function addEventListener(){
document.querySelector('.logo').addEventListener('click', ()=>{
    navigation("main")
})
}

let imageshvr=document.querySelectorAll('img')
imageshvr.forEach(item=>{
    item.addEventListener('mouseover',()=>{
         item.style.opacity="0.3"
         imageTextShow(item.className,true)
    })
})
imageshvr.forEach(item=>{
    item.addEventListener('mouseout',()=>{
         item.style.opacity="1"
         imageTextShow(item.className,false)
    })
})
