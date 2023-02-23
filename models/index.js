const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
// a user can make a bunch of posts
// a post can only have one user
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Post.belongsTo(User);
// a user can write a bunch of comments
// a comment can only have one author/user
User.hasMany(Comment, {
  foreignKey: 'user_id'
});
Comment.belongsTo(User);
// a post can have many comments
// a comment only belongs to one post
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});
Comment.belongsTo(Post);

module.exports = { 
  User,
  Post,
  Comment
 };