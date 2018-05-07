const activebook_reducer = (state = null, action) => {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}

export default activebook_reducer;
