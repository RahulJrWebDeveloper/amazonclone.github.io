let arr=['a','b','c','d','e']
let num=[0]
function next(){
    num++
    if(num>=arr.length){
        num=0
    }
    document.getElementById('img_box').innerHTML=`<img src="img/${arr[num]}.jpg">`
}
function prev(){
    num--
    if(num<0){
        num=arr.length-1
    }
    document.getElementById('img_box').innerHTML=`<img src="img/${arr[num]}.jpg">`
}setInterval(next,3000)


