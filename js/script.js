let form_search =document.getElementById("search-f") ;
let search_input = document.getElementById("search");
let newul= document.createElement("ul") ;
let newli=document.createElement("li") ;
let imgg = "";
let newspan = document.createElement("span") ;
form_search.appendChild(newul) ;
/**********fetch function***********/
async function get() {
let response = await fetch("api/suggestions.json") ;
let data = await response.json() ;
let searchArr = [] ;
let result = "";
for(let i = 0 ;i < data.length ;i++) {
    result = data[i].country;
    searchArr.push(result)
}
// console.log(searchArr);
// document.write(searchArr)
search_input.addEventListener('keyup',function(e){
    let searchvalue = search_input.value ;
    if(searchvalue ==="" ) {
    e.preventDefault() ;
    newul.remove() ;
    newul =document.createElement("ul")
    form_search.appendChild(newul) ;
    } else if(searchvalue !="") {
        newul.remove() ;
        newul =document.createElement("ul") ;
        form_search.appendChild(newul) ;
    let arr= searchArr.filter((x)=>x.indexOf(searchvalue)!== -1)
    // console.log(arr.length) ;
if(arr.length > 0) {
for(let i = 0 ;i<arr.length ;i++){
    newli = document.createElement("li")
    imgg=document.createElement("img") ;
    newspan = document.createElement("span") ;
    newul.appendChild(newli) ;
    newul.appendChild(imgg) ;
    newul.appendChild(newspan) ;
    newli.innerHTML = arr[i];
    newli.style.cssText=" font-weight:bold;list-style:none;color:white;fontSize: 17px;" ;
    newul.style.cssText="opacity:.8;z-index:3 ;margin-top:20px;height:150px;overflow:auto;background-color:green";
    imgg.style.cssText="width:70px;height:45px;rgb(17, 114, 182)" ;
    newspan.style.cssText="margin-left:15px ; color:black ;font-weight:bold;"
    let img_src = searchArr.findIndex(ele=>ele===newli.innerHTML) ;
    imgg.src = data[img_src].img
    newspan.innerHTML = data[img_src].notice ;
        let ress = newli.innerHTML ;
     newli.addEventListener('click',function(){
    search_input.value = ress ;
    newul.remove() ;  
    })
} } 
else{
    newli = document.createElement("li")
    newul.appendChild(newli) ;
    newli.innerHTML = "WE FOUND NO THING" ;
    newli.style.cssText=" font-weight:bold;list-style:none;color:white;fontSize: 17px;" ;
    newul.style.cssText="opacity:.7;z-index:3 ;padding-top:35px";
}  
}
})
}
get()
/*************end of fetch  */


console.log(search_input.offsetLeft);



