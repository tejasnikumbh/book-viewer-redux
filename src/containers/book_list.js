import React, {Component} from 'react';
import { connect } from 'react-redux';

import { selectBook } from './../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  getBookList() {
    if(!this.props.books) {
      return <div> BookList unavailable</div>;
    }

    var bookItemsJSX = this.props.books.map((book) => {
      return (
        <div
          key = { book.title }
          onClick = { () => this.props.selectBook(book) }
          className = "list-group-item"> { book.title }
          </div>
        );
    });

    return bookItemsJSX;
  }

  render() {
    return (
      <div className="list-group col-md-4">
        { this.getBookList() }
      </div>
    );
  }

}
// Must return mapping desired so that connection to component happens
function mapStateToProps(state) {
  return {books: state.books};
}

// Must return mapping desired so that connection to component happens
function mapDispatchToProps(dispatch) {
  //   Allows us to run the action created through all our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Connection of state as well as dispatch to props of component
// Export the connected component viz. the container
export default connect (mapStateToProps, mapDispatchToProps)(BookList);
// ^^ Note the difference to simply exporting a component as follows
// 'export default BookList'
