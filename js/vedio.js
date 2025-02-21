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


// {category_id: '1001', category: 'Music'}


//create displayCategories

const displayCategories = (categories) =>{
    //console.log(data)
    const categoryContainer =  document.getElementById("catagories");
    categories.forEach((item)=>{
        console.log(item);

        //create button
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;

        //add button to category
        categoryContainer.appendChild(button);
    })
    
}


loadCategories();