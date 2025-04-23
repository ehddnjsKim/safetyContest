document
  .getElementById("login-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // 기본 제출 방지

    const userid = document.getElementById("userid").value.trim();
    const userpw = document.getElementById("userpw").value.trim();

    console.log("입력된 아이디:", userid);
    console.log("입력된 비밀번호:", userpw);

    if (!userid || !userpw) {
      alert("아이디와 비밀번호를 입력하세요.");
      return;
    }

    const storedHashedPassword = localStorage.getItem(userid);

    console.log("저장된 해시된 비밀번호:", storedHashedPassword);

    if (!storedHashedPassword) {
      alert("아이디 또는 비밀번호를 확인하세요.");
      return;
    }

    // 비밀번호 해싱 함수 (SHA-256)
    async function hashPassword(password) {
      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      const hash = await crypto.subtle.digest("SHA-256", data);
      return Array.from(new Uint8Array(hash))
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
    }

    // 입력한 비밀번호 해싱 후 비교
    const hashedUserpw = await hashPassword(userpw);

    console.log("입력한 비밀번호 해시값:", hashedUserpw);

    if (storedHashedPassword === hashedUserpw) {
      alert("로그인 성공!");
      sessionStorage.setItem("loggedInUser", userid); // 로그인 상태 저장
      window.location.href = "list.html"; // 로그인 성공 시 이동
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  });
