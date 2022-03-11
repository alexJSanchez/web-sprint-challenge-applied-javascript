const Header = (title, date, temp) => {
  // create div
  let header = document.createElement('div');
  header.classList = 'header';
  //create span
  let dateInfo = document.createElement('span');
  dateInfo.classList = 'date';
  dateInfo.textContent = date;
  header.appendChild(dateInfo);
//create h1
  let titleInfo = document.createElement('h1');
  titleInfo.classList = 'title';
  titleInfo.textContent = title;
  header.appendChild(titleInfo)
  // create temp
  let tempInfo = document.createElement('span');
  tempInfo.classList = "temp";
  tempInfo.textContent = temp;
  header.appendChild(tempInfo);
  
  return header;
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  document.querySelector(selector).appendChild(Header("Lambda", 'March 11, 2022', "67*"))
}

export { Header, headerAppender }
