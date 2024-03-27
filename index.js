const input1 = document.querySelector("#입력값");
const button1 = document.querySelector("#추가버튼");
const todos = document.querySelector("#할일들");

button1.addEventListener("click", () => {
  const value1 = input1.value;
  const p1 = document.createElement("p");
  p1.innerText = value1;
  todos.appendChild(p1);
  input1.value = "";

  p1.addEventListener("click", () => {
    //조건문
    //1. done이 없으면 done을 추가
    //2. 그게 아니면 done을 없앰
    if (p1.className !== "done") {
      p1.className = "done";
    } else {
      p1.className = "";
    }
  });
});
