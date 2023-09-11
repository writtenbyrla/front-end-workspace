const asideIcon = document.querySelector("#aside-icon");
const main = document.querySelector("main");

asideIcon.addEventListener("click", function () {
  // 스타일 변경!
  // 변경되는 것만 class를 줘서 선택자 사용 없이 변경
  // asideIcon 클릭 시에 main에 class="aside-change"가 생기도록 함
  main.classList.toggle("aside-change");
});
