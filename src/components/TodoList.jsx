/* eslint-disable react/prop-types */
function TodoList(props) {
  return (
    <div>
      <li className="list-item">
        {props.item}
        <span className="icons">
          <i
            onClick={ () => {
              props.deleteItem(props.index);
            }}
            className="fa-solid fa-trash-can icon-delete"
          ></i>
        </span>
      </li>
    </div>
  );
}

export default TodoList;
