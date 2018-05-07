import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {

    var title = 'Please select a book';
    var pages = '';
    var description = '';

    if(this.props.book) {
      title = this.props.book.title;
      pages = `Number of pages: ${this.props.book.pages}`;
      description = this.props.book.description;
    }

    return(
      <div className="book-detail col-md-8">
        <div className="book-title"> { title } </div>
        <div className="book-pages"> { pages } </div>
        <div className="book-deescription"> { description } </div>
      </div>
    );
  }
}

// Must return mapping desired to connect state to props
function mapStateToProps(state) {
  return {book: state.activeBook};
}

// Exports the connected component, viz. the container
export default connect (mapStateToProps)(BookDetail);
// Note the difference as opposed to something like
// 'export default BookDetail'
