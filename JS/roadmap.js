document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'DangNhap.html'; // Chuyển hướng đến trang đăng nhập nếu chưa đăng nhập
    }
});

function logout() {
    localStorage.removeItem('isLoggedIn'); // Xóa trạng thái đăng nhập
    window.location.href = 'DangNhap.html'; // Chuyển hướng đến trang đăng nhập
}

function toggleList(element) {
    const list = element.nextElementSibling;
    if (list.classList.contains('hidden')) {
        list.classList.remove('hidden');
    } else {
        list.classList.add('hidden');
    }
}

function updateProgress() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    const totalCount = checkboxes.length;
    const progress = totalCount > 0 ? (checkedCount / totalCount) * 100 : 0;

    const progressBarFill = document.querySelector('.progress-fill');
    progressBarFill.style.width = `${progress}%`;
    progressBarFill.textContent = `${Math.round(progress)}%`;
}

function toggleList(element) {
    const ul = element.nextElementSibling;
    if (ul.classList.contains('hidden')) {
        ul.classList.remove('hidden');
    } else {
        ul.classList.add('hidden');
    }
    event.preventDefault(); // Ngăn hành vi mặc định
}

document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const progressFill = document.querySelector(".progress-fill");
    const duck = document.querySelector(".duck");
    function updateProgress() {
        let checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
        let totalCount = checkboxes.length;
        let percent = Math.round((checkedCount / totalCount) * 100);
        progressFill.style.width = percent + "%";
        progressFill.textContent = percent + "%";
        duck.style.left = percent + "%";
        duck.style.animation = 'duckRun 0.5s linear';
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateProgress);
    });

    updateProgress();
});

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateProgress);
    });
    updateProgress(); // Gọi để hiển thị tiến trình ban đầu

    // Ngăn chặn hành vi mặc định của liên kết
    const categoryLinks = document.querySelectorAll('.rocket-btn');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn cuộn trang
            toggleList(this); // Gọi hàm toggleList để mở/đóng danh sách
        });
    });
});
