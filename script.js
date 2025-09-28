
document.addEventListener('DOMContentLoaded', function() {

    // Tìm đến form 
    const heroForm = document.querySelector('.hero-section form');

    // submit
    heroForm.addEventListener('submit', function(event) {
        alert('Đăng ký thành công! Cảm ơn bạn.');
        
    });

});