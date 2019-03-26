const initState = {
  posts: [
    {id: 1, title: 'Get them all', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea iusto quos cupiditate, nisi commodi provident quis ex tempora. Soluta reiciendis pariatur, atque tenetur alias odio tempore nemo labore libero?'},
    {id: 2, title: 'Pikachu is not the best pokemon', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum autem esse vel quasi odio voluptatem illum totam incidunt nam aliquid. Quidem aliquid tempora dolorum aliquam hic rerum minus, voluptatibus vero.'},
    {id: 3, title: 'Charmander attack', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, harum quidem! Deleniti ab quae aperiam neque libero voluptatem? Temporibus aut dicta suscipit sunt rem laudantium alias officia animi tenetur at!'} 
  ]
}

const rootReducer = (state = initState, action) => {
  if(action.type === "DELETE_POST"){
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
    });
    return {
      ...state,
      posts: newPosts
    }
  }
  return state
}

export default rootReducer;