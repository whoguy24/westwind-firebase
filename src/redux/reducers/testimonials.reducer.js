const testimonialsReducer = (state = [], action) => {
    switch (action.type) {
      case "LOAD_TESTIMONIALS":
        return action.payload;
      default:
        return state;
    };
};
  
export default testimonialsReducer;