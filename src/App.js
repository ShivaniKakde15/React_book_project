import React from 'react';
import ReactDOM from 'react-dom';


const books = [
  {
    title: 'Java',
    link: 'https://docs.oracle.com/javase/specs/jls/se8/html/index.html ',
    image: require('./images/java.png'),
  },
  {
    title: 'Python',
    link: 'https://www.javatpoint.com/free-python-ebooks',
    image:  require('./images/python.png'),
  },
  {
    title: 'JavaScript',
    link: 'https://exploringjs.com/impatient-js/downloads/impatient-js-preview-book.pdf',
    image:  require('./images/javascript.jpg'),
  },
  {
    title: 'C++',
    link: 'https://www.freebookcentre.net/programming-books-download/C++-Programming-by-Wikibooks.org.html',
    image:  require('./images/c++.jpg'),
  },
  {
    title: 'C',
    link: 'https://www.unf.edu/~wkloster/2220/ppts/cprogramming_tutorial.pdf',
    image:  require('./images/c.jpg'),
  },
];

function BookList() {
  return (
  <div>
    <h1>Book Lists</h1>
    <div className='books'>
      {books.map((book, index) => (
        <div key={index}>
          <h2>{book.title}</h2>
          <a href={book.link} target="_blank" rel="noopener noreferrer">
            <p>Click Here</p>
          </a>
          <img src={book.image} alt={book.title} />
        </div>
      ))}
    </div>
    </div>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));
