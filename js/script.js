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

// お問い合わせフォームの処理
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // フォームのバリデーション
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const inquiryType = document.getElementById('inquiry-type').value;
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !inquiryType || !message) {
                alert('必須項目をすべて入力してください');
                return;
            }
            
            // 選択された問い合わせ種別に応じてメールアドレスを設定
            let mailtoAddress = '';
            
            if (inquiryType === '応援マルシェ＆イベント出店') {
                mailtoAddress = 'feliscrepe.flower@icloud.com';
            } else if (inquiryType === '医科歯科事務長代行') {
                mailtoAddress = 'iryokeiei.bpa@gmail.com';
            } else {
                alert('お問い合わせ種別を選択してください');
                return;
            }
            
            // メール本文を作成
            const mailBody = 
                `お名前: ${name}%0D%0A` +
                `メールアドレス: ${email}%0D%0A` +
                `電話番号: ${phone}%0D%0A` +
                `お問い合わせ種別: ${inquiryType}%0D%0A` +
                `お問い合わせ内容:%0D%0A${message}`;
            
            // メールリンクを作成して開く
            const mailtoLink = `mailto:${mailtoAddress}?subject=ウェブサイトからのお問い合わせ&body=${mailBody}`;
            
            // フォームデータをリセット
            contactForm.reset();
            
            // 送信確認メッセージ
            alert('お問い合わせを送信します。メールアプリが起動します。');
            
            // メーラーを開く (setTimeout を使用してアラートが表示された後に実行)
            setTimeout(() => {
                window.location.href = mailtoLink;
            }, 500);
        });
    }
});

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
    
    // iOS でのフォーム入力問題の修正
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        const inputElements = document.querySelectorAll('input, select, textarea');
        inputElements.forEach(input => {
            input.addEventListener('touchstart', function(e) {
                // タッチイベントを強制的に有効にする
                e.stopPropagation();
            });
        });
    }
}); 