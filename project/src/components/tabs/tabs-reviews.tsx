import { Comments } from '../../types/types';
import Review from './tabs-review';

type ReviewsProps = {
  comments: Comments;
}

function Reviews({ comments }: ReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((comment) => (
          <Review
            key={comment.id}
            comment={comment}
          />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
