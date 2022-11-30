import { Comments } from '../../types/types';
import Review from './tabs-review';

type ReviewsProps = {
  comments: Comments;
}

function Reviews({ comments }: ReviewsProps): JSX.Element {
  const firstColumn: Comments = comments.slice(0, Math.ceil(comments.length / 2));
  const secondColumn: Comments = comments.slice(-Math.ceil(comments.length / 2));
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstColumn.map((comment) => (<Review comment={comment} key={comment.id} />))}
      </div>
      <div className="film-card__reviews-col">
        {secondColumn.map((comment) => (<Review comment={comment} key={comment.id} />))}
      </div>
    </div>
  );
}

export default Reviews;
