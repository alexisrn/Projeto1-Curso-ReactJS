export const loadPosts =  async () => {

const postResponse = fetch ('https://jsonplaceholder.typicode.com/posts')
const photosResponse = fetch ('https://jsonplaceholder.typicode.com/photos');
const [post, photos] = await Promise.all([postResponse, photosResponse]);


const postJson = await post.json();
const photosJson = await photos.json();

const postAndPhotos = postJson.map((post, index) => {
  return {...post, cover: photosJson[index].url}
});

return postAndPhotos;
}