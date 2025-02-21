console.log("vedio file are added");

//fetch, load and show categories on html

//create loadCategory



const loadCategories = () =>{
   // console.log("loadCategories created");

   fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
   //.then((res)=>console.log(res))
   .then((res)=>res.json(res))
   //.then((data)=>console.log(data.categories))
   .then((data)=>displayCategories(data.categories))
   .catch((error)=>console.log(error));
}


//create displayCategories

const displayCategories = (data) =>{
    console.log(data)
    
}


loadCategories();