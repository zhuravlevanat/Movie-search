const movieSearchSelect = document.getElementById('movie-search');
const PAGINATION_ITEM_CLASS = 'pagination-item';
const ACTIVE_PAGINATION_CLASS = 'active';
const pagination = document.getElementById('pagination');
const paginationItemTemplate = document.getElementById('paginationItemTemplate').innerHTML;

movieSearchSelect.addEventListener('change', onMovieSearchSelectChange);
pagination.addEventListener('click', onPaginationClick);

const NUMBER_OF_PAGES = 50;


let currentPage = 1;
let numberOfPagesToDisplay = 10;


// import MovieDB from './movieDB';
// import UI from './ui';

const movie = new MovieDB();
const ui = new UI();

let arrGenres;

function clearOutput() {
  ui.output.innerHTML="";  
}

function displayMovie(list) {
  clearOutput();
  list.forEach(element => {
    const genres = getGenreTitle(element.genre_ids);   
    ui.showData(element, genres);        
  }); 
}

function getGenreTitle(idGenre) {
  let genreName =[];
  arrGenres.filter(data => {
    idGenre.forEach(elem => {
      if (elem === data.id) {
        genreName.push(data.name);
      }
    });
  });
  return genreName;
}

function getListOfMovies() {
  return movie['get'+ currentSection](currentPage).then(data => displayMovie(data));
}

function onMovieSearchSelectChange(event) {
  currentSection = event.target.value;
  movie.getMovieGenres().then(data => arrGenres = data);  
  clearOutput();
  setPaginationData();
  getListOfMovies();

 
  // switch (event.target.value) {
  //   case 'Now playing movie':
  //     clearOutput();
  //     movie.getNowPlaying().then(data => displayMovie(data));
  //   break;
  //   case 'Most popular movie':
  //     clearOutput();
  //     movie.getPopular().then(data => displayMovie(data));
  //   break;
  //   case 'Highest rated movies':
  //     clearOutput();
  //     movie.getTopRated().then(data => displayMovie(data));
  //   break;
  // }  
}

function onPaginationClick(e){
  switch (true){
      case e.target.classList.contains(PAGINATION_ITEM_CLASS):
        onPageClick(e.target.dataset.pageIndex);        
        break;
  }
}

function setClassActive(pageIndex) {
  let elems = Array.prototype.slice.call(pagination.children); 
  elems.forEach(elem => {
    if (elem.dataset.pageIndex == pageIndex) {
      elem.classList.add(ACTIVE_PAGINATION_CLASS);
    } else {
      elem.classList.remove(ACTIVE_PAGINATION_CLASS)
    }
  });  
}

function setPaginationData(){
  currentPage = currentPage || 1;

  if (currentPage > NUMBER_OF_PAGES){
      currentPage = 1;
  }

  renderPagination(numberOfPagesToDisplay);
}

function renderPagination(numberOfPages){
  let pagesHtml = [
      paginationItemTemplate.replace('{{index}}', 'prev')
                          .replace('{{title}}', '<<<')
  ];

  for (let i=numberOfPages-9; i<=numberOfPages; i++){
      pagesHtml.push(paginationItemTemplate.replace('{{index}}', i)
                          .replace('{{title}}', i));
  }

  pagesHtml.push(paginationItemTemplate.replace('{{index}}', 'next')
      .replace('{{title}}', '>>>'));

  pagination.innerHTML = pagesHtml.join('\n');
  setClassActive(1);
}

function onPageClick(index){
  if (currentPage > NUMBER_OF_PAGES) currentPage = 1;
  if (currentPage < 1) currentPage = NUMBER_OF_PAGES - 1;
 
  switch(index){
    case 'prev':
      if (currentPage == 1) {
        currentPage = NUMBER_OF_PAGES;
        numberOfPagesToDisplay = NUMBER_OF_PAGES;
        setPaginationData();
        setClassActive(currentPage)
        return;
      }
      if(currentPage == numberOfPagesToDisplay-9) {
        numberOfPagesToDisplay -= 10;
        setPaginationData();
      }
      currentPage = +currentPage - 1;
    break 
    case 'next': 
      if (currentPage > NUMBER_OF_PAGES) {
        currentPage = 1;
        numberOfPagesToDisplay = 10;
        setPaginationData();
        setClassActive(currentPage)
        return
      }
      if (currentPage == numberOfPagesToDisplay) {
        numberOfPagesToDisplay += 10;
        setPaginationData();
      }
      currentPage = +currentPage + 1; 
    break
    default: currentPage = index;
  }

  setClassActive(currentPage);
  getListOfMovies();
}

