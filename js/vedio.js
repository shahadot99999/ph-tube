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


const cardDemo = {
    "category_id": "1001",
    "video_id": "aaaa",
    "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
    "title": "Shape of You",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
            "profile_name": "Olivia Mitchell",
            "verified": ""
        }
    ],
    "others": {
        "views": "100K",
        "posted_date": "16278"
    },
    "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}


const loadVidoes = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    //.then((res)=>console.log(res))
    .then((res)=>res.json())
    //.then((data)=>console.log(data.videos))
    .then((data)=>displayVideos(data.videos))
   
    .catch((error)=>console.log(error));
 }

 const displayVideos = (videos)=>{

    const vidoContent = document.getElementById("vedios");
    videos.forEach((video)=>{
        console.log(video);

        const card = document.createElement("div");
        card.classList = "card card-compact "
        card.innerHTML = 
        `
         <figure>
           <img
             src=${video.thumbnail}
             alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
             <button class="btn btn-primary">Buy Now</button>
           </div>
           </div>
        `;
        vidoContent.appendChild(card)
    });
    
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

loadVidoes();