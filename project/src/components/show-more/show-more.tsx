type ShowMoreProps = {
  handleShowMoreClick: () => void,
}

function ShowMore(props: ShowMoreProps): JSX.Element {
  const { handleShowMoreClick } = props;
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick={handleShowMoreClick}
      >Show more
      </button>
    </div>
  );
}


export default ShowMore;
