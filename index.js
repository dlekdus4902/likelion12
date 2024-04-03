const input1 = document.querySelector("#입력값");
const button1 = document.querySelector("#추가버튼");
const todos = document.querySelector("#할일들");

button1.addEventListener("click", () => {
  const value1 = input1.value;
  const newTodo = document.createElement("p");
  const todos = document.querySelector("#할일들");
  const reset = document.querySelector("#초기화");
  newTodo.innerText = value1;
  todos.appendChild(newTodo);
  input1.value = "";

  newTodo.addEventListener("click", () => {
    //조건문
    //1. done이 없으면 done을 추가
    //2. 그게 아니면 done을 없앰
    if (newTodo.className !== "done") {
      newTodo.className = "done";
    } else {
      newTodo.className = "";
    }
  });
});
