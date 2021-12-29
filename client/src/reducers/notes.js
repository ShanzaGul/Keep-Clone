//notes is a reducer
const notes =  (notes = [], action) => {
    switch (action.type) {
      case "FETCH_ALL":
        return action.payload;
      case "CREATE":
        return notes;

      default:
        return notes;
    }
  };

  export default notes;