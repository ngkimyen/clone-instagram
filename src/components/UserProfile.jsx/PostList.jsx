import clsx from 'clsx';
import useViewPort from '../../custom-hooks/useViewPort';
import PostItem from './PostItem';
import classes from './PostList.module.scss'

const PostList = ({data}) => {
   const {isMobile} = useViewPort()
   return (
      <div className={clsx(classes.postList, {[classes.isMobile] : isMobile })}>
         {data.map((post, index) => <PostItem key={post.id} index={index} post={post} data={data} id={post.id}/> )}
      </div>
   );
};

export default PostList;