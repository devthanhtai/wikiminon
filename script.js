// Chuyển đổi qua lại giữa form Đăng nhập & Đăng ký
function toggleForm(formId) {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById(formId).style.display = 'block';
}

// Xử lý Đăng ký
function handleRegister() {
    const user = document.getElementById('regUser').value.trim();
    const pass = document.getElementById('regPass').value;
    const confirm = document.getElementById('regConfirm').value;

    if (user === "" || pass === "") {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }
    if (pass !== confirm) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    // Lưu vào bộ nhớ trình duyệt
    localStorage.setItem(user, pass);
    alert("Đăng ký thành công! Hãy đăng nhập để vào trang chủ.");
    toggleForm('loginForm');
}

// Xử lý Đăng nhập
function handleLogin() {
    const user = document.getElementById('loginUser').value.trim();
    const pass = document.getElementById('loginPass').value;

    const storedPass = localStorage.getItem(user);

    if (storedPass && storedPass === pass) {
        alert("Đăng nhập thành công! Đang vào trang chủ...");
        
        // CHUYỂN HƯỚNG SANG HOME.HTML
        window.location.href = "home.html"; 
    } else {
        alert("Sai tên đăng nhập hoặc mật khẩu!");
    }
}