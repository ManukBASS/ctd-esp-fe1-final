import { FC } from "react";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import { changePageThunk } from "../../actions/characters.actions";
import { IRootState } from "../../store/store";
import "./pagination.css";

/**
 * Pagination component
 * @author Manuel Zarraga
 * @returns {React.ReactElement} JSX element | Pagination Function and Buttons
 */
const Pagination: FC = (): React.ReactElement => {
  const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  const dispatch = useDispatch();

  const pageInfo = useSelector((state) => state.characters.pageInfo);
  const { next, prev } = pageInfo;

  const previusPage = () => {
    dispatch(changePageThunk(prev));
  };

  const nextPage = () => {
    dispatch(changePageThunk(next));
  };

  return (
    <div className="pagination">
      <button
        onClick={previusPage}
        disabled={prev === null ? true : false}
        className={"primary"}
      >
        Anterior
      </button>
      <button
        onClick={nextPage}
        disabled={next === null ? true : false}
        className={"primary"}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
