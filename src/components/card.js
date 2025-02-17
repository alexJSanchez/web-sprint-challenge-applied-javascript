import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  let articlesNameArray = [];
  //for in loop to make an array of names
  for (let subject in article.articles) {
    articlesNameArray.push(subject);
  }
  console.log(articlesNameArray)

  // for(let i = 0;i < articlesNameArray.length; i++){
  //   if(article.articles === articlesNameArray[i]){
  //     console.log('yes')
  //   }else{
  //     console.log('no')
  //   }
  // }

  // create card

  console.log(article);

    let card = document.createElement("div"); 
      let headline = document.createElement("div");
      let author = document.createElement("div");
      let imgContainer = document.createElement("div");
      let image = document.createElement("img");
      let authorName = document.createElement("span");

      card.classList.add("card");
      headline.classList.add("headline");
      author.classList.add("author");
      imgContainer.classList.add("img-container");

      headline.textContent = article.headline;
      image.src = article.authorPhoto;
      authorName.textContent = `By ${article.authorName}`;

      card.appendChild(headline);
      card.appendChild(author);
      author.appendChild(imgContainer);
      imgContainer.appendChild(image);
      author.appendChild(authorName);
    
    console.log(card)
    return card;
  
 
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios
    .get("http://localhost:5001/api/articles")
    .then((resp) => {
      for(let keys in resp.data.articles){
        resp.data.articles[keys].forEach(element => {
          console.log(element)
          document.querySelector(selector).appendChild(Card(element));
        });
      }
      
    })
    .catch((err) => {
      console.log(err);
    });
};

export { Card, cardAppender };
