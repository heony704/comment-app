import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import PageList from '../components/PageList';

function CommentPage() {
  return (
    <>
      <CommentList />
      <PageList />
      <CommentForm />
    </>
  );
}

export default CommentPage;
