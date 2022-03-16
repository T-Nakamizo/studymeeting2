import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // button(戻す)タグ生成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      // divタグの子要素に各要素を設定
      div.removeChild(returnButton);
      div.appendChild(completeButton);
      div.appendChild(deleteButton);

      // 未完了リストに追加
      document.getElementById("incomplete-list").appendChild(div);
    });

    // divタグの子要素に各要素を設定
    div.removeChild(completeButton);
    div.removeChild(deleteButton);
    div.appendChild(returnButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(div);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTaret = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTaret);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
