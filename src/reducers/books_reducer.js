const books_reducer = () => {
  return [
    { title: 'Javascript: The Good Parts',
      description: 'This is a description for the book mentioned above' +
      'This is a description for the book mentioned above' +
      'This is a description for the book mentioned above' +
      'This is a description for the book mentioned above' +
      'This is a description for the book mentioned above...',
      pages: 101 },
    { title: 'Harry Potter',
      description: 'This is some random description again' +
      'This is some random description again' +
      'This is some random description again' +
      'This is some random description again' +
      'This is some random description again...',
      pages: 39 },
    { title: 'The Dark Tower',
      description: 'The dark tower was probably something to be afraid of' +
      'The dark tower was probably something to be afraid of' +
      'The dark tower was probably something to be afraid of' +
      'The dark tower was probably something to be afraid of' +
      'The dark tower was probably something to be afraid of...' ,
      pages: 85 },
    { title: 'Eloquent Ruby',
      description: 'Teachers ruby in the shortest way possible' + 
      'Teachers ruby in the shortest way possible' +
      'Teachers ruby in the shortest way possible' +
      'Teachers ruby in the shortest way possible' +
      'Teachers ruby in the shortest way possible...',
      pages: 1 }
  ];
}

export default books_reducer;
