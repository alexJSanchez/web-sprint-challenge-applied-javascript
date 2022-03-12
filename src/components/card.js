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

  // create card
  

  
 article.forEach(element => {
    element.forEach(myElement => {
      let card = document.createElement('div');
      let headline = document.createElement('div');
      headline.classList = 'headline';
      card.appendChild(headline);

      let author = document.createElement('div');
      author.classList = 'author';
      card.appendChild(author)

      let imgContainer = document.createElement('div');
      imgContainer.classList = 'img-container'
      author.appendChild(imgContainer);

      let image = document.createElement('img')
      imgContainer.appendChild(image)

      let authorName = document.createElement('span');
      card.appendChild(authorName);

      card.addEventListener('click', Event => {
        console.log(Event)
      })

      headline.textContent = myElement.headline;
      
      image.src = myElement.authorPhoto;
      authorName.textContent = myElement.authorName;  
      console.log(card)
    })
  });
 

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

    axios.get('http://localhost:5001/api/articles')
    .then(resp => {
      let bootstrap = resp.data.articles.bootstrap;
      let javascript = resp.data.articles.javascript;
      let jquery = resp.data.articles.jquery;
      let node = resp.data.articles.node;
      let technology = resp.data.articles.technology;

      let allArticles = [];
      allArticles.push(bootstrap,javascript,jquery,node,technology);
      console.log(allArticles);
      document.querySelector(selector).appendChild(Card(allArticles));
     
    })

}

export { Card, cardAppender }
