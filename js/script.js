// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// スクロール時のヘッダー変更
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// お問い合わせフォームの送信処理
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // フォームデータの取得
        const formData = new FormData(this);
        const formDataObj = {};
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });
        
        // 実際のプロジェクトでは、ここでAPIにデータを送信します
        console.log('送信されたデータ:', formDataObj);
        
        // 送信成功メッセージ
        alert('お問い合わせありがとうございます。メッセージが送信されました。');
        this.reset();
    });
}

// サービス項目のアニメーション
const serviceItems = document.querySelectorAll('.service-item');
if (serviceItems.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    serviceItems.forEach(item => {
        observer.observe(item);
    });
}

// 実績ギャラリーのアニメーション
const achievementItems = document.querySelectorAll('.achievement-item');
if (achievementItems.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    achievementItems.forEach(item => {
        observer.observe(item);
    });
}

// ページ読み込み完了時のアニメーション
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
}); 