import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => {
  return posts?.map(post => (
    <PostInfo
      key={post.id}
      post={post}
      user={post.user}
      comments={post.comments}
    />
  ));
};
