import { Comment } from '../../types/types';
import {formatHumanizedDate} from '../../mocks/utils';

type ReviewsProps = {
  comment: Comment;
}

function Review({ comment }: ReviewsProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime={formatHumanizedDate(comment.date)}>{formatHumanizedDate(comment.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );
}

export default Review;
