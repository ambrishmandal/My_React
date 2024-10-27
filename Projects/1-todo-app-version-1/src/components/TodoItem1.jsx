function TodoItem1() {
  let todoName = "Go to The park";
  let todoDate = "4/10/2024";
  return (
    <div class="items-container ">
      <div class="row ak-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger ak-buttom ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
