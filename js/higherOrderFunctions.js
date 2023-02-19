// * higher Order function
// ! chapter 25
//import data
import { posts } from "./posts.js";
//forEach() function
posts.forEach(post => {
    console.log(post);
})
// clear console
console.clear();
// filter() function
const filterPost = posts.filter(post => {
    return post.userID === 1
})
console.log(filterPost);
console.clear();
// map() function
const mappedPost = filterPost.map(post => {
    // console.log(post);
    return post.id * 10
})
console.log(mappedPost);

console.clear();
const reducedPostsValue = mappedPost.reduce((sum, post) => {
    return sum + post;
})
console.log(reducedPostsValue);


