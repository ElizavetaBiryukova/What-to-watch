import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FilmType } from '../../types/types';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: FilmType;
  onMouseEnter: (id: string) => void;
}

const DELAY_TIME = 1000;

function FilmCard({ film, onMouseEnter }: FilmCardProps): JSX.Element {
  const [isFocus, setIsFocus] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const onFilmCardHandler = () => {
    onMouseEnter(film.id);
    setIsFocus(true);
  };

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clearTime = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  useEffect(() => {

    clearTime();
    if (isFocus) {
      timer.current = setTimeout(() => setIsPlaying(true), DELAY_TIME);
    }
    if (!isFocus) {
      setIsPlaying(false);
    }

    return clearTime;

  }, [isFocus]);

  return (

    <article className="small-film-card catalog__films-card" id={`film-${film.id}`}
      onMouseEnter={() => onFilmCardHandler()}
      onMouseLeave={() => setIsFocus(false)}
    >
      {isPlaying
        ? <VideoPlayer src={film.previewVideoLink} posterImage={film.posterImage} />
        :
        <div className="small-film-card__image">
          <img src={film.previewImage} alt={film.name} width="280" height="175" />
        </div>}

      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>

    </article>

  );
}

export default FilmCard;
