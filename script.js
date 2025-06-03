function showCounter() {
  // Ngày yêu cố định, thay đổi theo ý bạn
  const loveDate = new Date('2025-05-02');
  const today = new Date();
  const diff = today - loveDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  document.getElementById("days").textContent = days;

  // Ẩn phần nhập ngày (nếu có)
  document.getElementById("input-section").classList.add("hidden");
  // Hiện phần hiển thị đếm ngày
  document.getElementById("counter-section").classList.remove("hidden");
}

// Gọi hiển thị khi tải trang
window.onload = showCounter;

// Hàm lưu và reset không còn cần thiết nên có thể xóa hoặc bỏ qua
function saveDate() {
  // không dùng nữa
}

function resetDate() {
  // không dùng nữa
}
