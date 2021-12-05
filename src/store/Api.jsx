
export const getPosts = async() => {
  const response = await fetch('https://clone-instagram-ae64b-default-rtdb.firebaseio.com/posts.json')
  const data = await response.json()

  let posts = [];
  for (const key in data) {
      posts.push({
        id: key,
        ...data[key]
    })
  }
  return posts
}

export const uploadComment = async({postId, comment, isUserPost}) => {
  const response = await fetch(`https://clone-instagram-ae64b-default-rtdb.firebaseio.com/${!isUserPost ? 'posts' : 'user-posts' }/${postId}/comments.json`, {
    method: 'POST',
    body: JSON.stringify(comment)
  })
}

export const getPostComment = async({postId, isUserPost = false}) => {
  const response = await fetch(`https://clone-instagram-ae64b-default-rtdb.firebaseio.com/${!isUserPost ? 'posts' : 'user-posts' }/${postId}/comments.json`);
  const data = await response.json()
  const transformedComments = [];

  for (const key in data) {
    transformedComments.push({
      id: key,
      ...data[key],
    });
  }
  return transformedComments
}


export const getAllSuggestion = async() => {
  const response = await fetch('https://clone-instagram-ae64b-default-rtdb.firebaseio.com/suggestion.json');
  const data = await response.json();

  let suggestion=[];
  for ( const key in data ) {
    suggestion.push({
      id: key,
      ...data[key]
  })
  }

  return suggestion;
}

export const getNewFeedSuggestion = async() => {
  const response = await fetch('https://clone-instagram-ae64b-default-rtdb.firebaseio.com/suggestion.json');
  const data = await response.json();

  let suggestion=[];
  let counter = 0;

  for ( const key in data ) {
    if (counter > 5) return 
    counter++;
    suggestion.push({
      id: key,
      ...data[key]
  })
  }

  return suggestion;
}

export const getAllStory = async() => {
  const response = await fetch('https://clone-instagram-ae64b-default-rtdb.firebaseio.com/story.json');
  const data = await response.json();

  let storyLists=[];
  for ( const key in data ) {
    storyLists.push({
      id: key,
      ...data[key]
  })
  }

  return storyLists;
}

export const updateLikeQuantityPost = async({postId, quantity,isUserPost = false}) => {
  const response = await fetch(`https://clone-instagram-ae64b-default-rtdb.firebaseio.com/${!isUserPost ? 'posts' : 'user-posts' }/${postId}/likes.json`, {
    method: 'PUT',
    body: JSON.stringify(quantity)
  })  
} 

export const getLikePost = async({postId, isUserPost = false}) => {
  const response = await fetch(`https://clone-instagram-ae64b-default-rtdb.firebaseio.com/${!isUserPost ? 'posts' : 'user-posts' }/${postId}.json`);
  const data = await response.json();
  let likeStatus = [
    data.isLike,
    data.likes
  ]
  return likeStatus;

}

export const updateIsLikePost = async({postId, isLike,  isUserPost = false}) => {
  const response = await fetch(`https://clone-instagram-ae64b-default-rtdb.firebaseio.com/${!isUserPost ? 'posts' : 'user-posts' }/${postId}/isLike.json`, {
    method: 'PUT',
    body: JSON.stringify(isLike)
  })  
}


export const getNotifications = async() => {
  const response = await fetch('https://clone-instagram-ae64b-default-rtdb.firebaseio.com/notification.json');
  const data = await response.json();

  let notificationList=[];

  for ( const key in data ) {
    notificationList.push({
      id: key,
      ...data[key]
  })
  }

  return notificationList;
}

export const getUserPosts = async() => {
  const response = await fetch('https://clone-instagram-ae64b-default-rtdb.firebaseio.com/user-posts.json')
  const data = await response.json();

  let postList=[];

  for ( const key in data ) {
    postList.push({
      id: key,
      ...data[key]
  })
  }

  return postList;
}
