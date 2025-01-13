// عناصر الصفحة
const loginBtn = document.querySelector('.login-btn');
const reservationBtn = document.querySelector('.reservation-btn');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// وظيفة زر "Giriş Yap"
loginBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
});

// وظيفة زر "Rezervasyon Yap"
reservationBtn.addEventListener('click', () => {
    alert('Rezervasyon sayfasına yönlendiriliyorsunuz!');
    window.location.href = 'reservation.html';
});

document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// تفعيل القوائم المنسدلة
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownMenu = toggle.nextElementSibling;

        // إظهار أو إخفاء القائمة
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });
});
// عدد النجوم اللي تبين تضيفينه
const starCount = 100;
const hero = document.querySelector('.hero');

// وظيفة إنشاء النجوم
for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // توزيع عشوائي للنجوم
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`
    
    // حجم النجوم عشوائي بين 2px إلى 6px
    const size = Math.random() * 2.5 + 0.5; // (2px إلى 6px)
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // تأخير عشوائي للحركة
    star.style.animationDelay = `${Math.random() * 5}s`;
    
    // سرعة عشوائية للحركة
    star.style.animationDuration = `${5 + Math.random() * 5}s`;
    
    hero.appendChild(star);
}

 // استدعاء الأزرار والمحتويات
 const prevBtn = document.querySelector('.prev-btn');
 const nextBtn = document.querySelector('.next-btn');
 const imagesContainer = document.querySelector('.images-container');
 const images = document.querySelectorAll('.images img');
 
 let currentIndex = 0; // فهرس الصورة الحالي

 // تحديث موقع الصور
 function updateSliderPosition() {
     const offset = -currentIndex * images[0].clientWidth; // حساب المسافة المطلوبة للتحريك
     imagesContainer.style.transform = `translateX(${offset}px)`; // تطبيق التحريك
 }

 // حدث عند الضغط على السهم الأيسر
 prevBtn.addEventListener('click', () => {
     currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // الانتقال إلى الصورة السابقة أو العودة إلى الصورة الأخيرة
     updateSliderPosition();
 });

 // حدث عند الضغط على السهم الأيمن
 nextBtn.addEventListener('click', () => {
     currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // الانتقال إلى الصورة التالية أو العودة إلى أول صورة
     updateSliderPosition();
 });