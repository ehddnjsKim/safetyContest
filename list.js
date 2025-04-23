// 대분류, 중분류, 소분류 요소 가져오기
const mainCategory = document.getElementById("main-category");
const subCategory = document.getElementById("sub-category");
const detailCategory = document.getElementById("detail-category");

// 데이터 객체
// 중분류와 대분류 연결 데이터
const subCategoryData = {
  a: ["a-1:전기 작업", "a-2:기계 작업", "a-3:설비 작업"],
  b: ["b-1:조립 작업", "b-2:도장 작업", "b-3:용접 작업"],
  c: ["c-1:포장 작업", "c-2:운송 작업", "c-3:재고 관리"],
};

// 소분류와 중분류 연결 데이터
const detailCategoryData = {
  "a-1": ["a-1-1:배선 설치", "a-1-2:전력 배분"],
  "a-2": ["a-2-1:기계 조립", "a-2-2:기계 수리"],
  "a-3": ["a-3-1:설비 설치", "a-3-2:설비 점검"],
  "b-1": ["b-1-1:제품 조립", "b-1-2:부품 결합"],
};

// 대분류 선택 시 중분류 옵션 업데이트
mainCategory.addEventListener("change", () => {
  const selectedMain = mainCategory.value; // 선택된 대분류 값
  subCategory.innerHTML = '<option value="">선택하세요</option>'; // 초기화

  if (selectedMain) {
    // 중분류 데이터 추가
    subCategoryData[selectedMain].forEach((item) => {
      const [value, text] = item.split(":");
      const option = document.createElement("option");
      option.value = value;
      option.textContent = text;
      subCategory.appendChild(option);
    });

    subCategory.disabled = false; // 중분류 활성화
    detailCategory.disabled = true; // 소분류 비활성화
    detailCategory.innerHTML = '<option value="">선택하세요</option>';
  } else {
    subCategory.disabled = true; // 중분류 비활성화
  }
});

// 중분류 선택 시 소분류 옵션 업데이트
subCategory.addEventListener("change", () => {
  const selectedSub = subCategory.value; // 선택된 중분류 값
  detailCategory.innerHTML = '<option value="">선택하세요</option>'; // 초기화

  if (selectedSub) {
    // 소분류 데이터 추가
    detailCategoryData[selectedSub]?.forEach((item) => {
      const [value, text] = item.split(":");
      const option = document.createElement("option");
      option.value = value;
      option.textContent = text;
      detailCategory.appendChild(option);
    });

    detailCategory.disabled = false; // 소분류 활성화
  } else {
    detailCategory.disabled = true; // 소분류 비활성화
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const confirmButton = document.getElementById("confirm-button"); // 버튼 요소 가져오기
  const mainCategory = document.getElementById("main-category");
  const subCategory = document.getElementById("sub-category");
  const detailCategory = document.getElementById("detail-category");

  confirmButton.addEventListener("click", () => {
    if (!mainCategory.value || !subCategory.value || !detailCategory.value) {
      alert("모든 분류를 선택해주세요!"); // 선택되지 않았을 경우 경고 메시지
    } else {
      window.location.href = "servhome.html"; // 선택되었을 경우 페이지 이동
    }
  });
});
