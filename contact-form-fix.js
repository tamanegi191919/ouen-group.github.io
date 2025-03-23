/**
 * お問い合わせフォームの入力問題を修正するスクリプト
 * 特にiOSデバイスでの入力フィールドのフォーカス問題に対応
 */
document.addEventListener('DOMContentLoaded', function() {
    // フォームの要素を取得
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const inputs = contactForm.querySelectorAll('input, select, textarea');
    
    // モバイルデバイスかどうかを検出
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // iOSデバイスかどうかを検出
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    if (isMobile) {
        // すべての入力フィールドにイベントリスナーを追加
        inputs.forEach(input => {
            // タッチ開始時の処理
            input.addEventListener('touchstart', function(e) {
                e.stopPropagation();
            }, {passive: false});
            
            // フォーカス時の処理
            input.addEventListener('focus', function() {
                // スクロールを確実にするため、わずかな遅延を追加
                setTimeout(() => {
                    // 入力フィールドがビューに完全に表示されるようにスクロール
                    const rect = this.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    
                    if (rect.bottom > windowHeight) {
                        window.scrollBy(0, rect.bottom - windowHeight + 20);
                    }
                }, 300);
            });
        });
    }
    
    if (isIOS) {
        // iOS特有の問題に対処
        document.body.addEventListener('touchstart', function() {
            // iOS上での遅延タッチ応答を防ぐためのダミーイベント
        }, {passive: true});
        
        // フォームをタップしたときに背景をスクロールできなくする
        contactForm.addEventListener('touchmove', function(e) {
            e.stopPropagation();
        }, {passive: false});
        
        // セレクトボックスのスタイルを調整
        const selectElements = contactForm.querySelectorAll('select');
        selectElements.forEach(select => {
            select.style.background = '#fff';
            select.style.border = '2px solid #ffd1dc';
        });
    }
    
    // フォーム送信処理
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // フォームのバリデーション
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const inquiryType = document.getElementById('inquiry-type').value;
        const message = document.getElementById('message').value.trim();
        
        // 必須項目のチェック
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
        
        // フォームデータをリセット
        contactForm.reset();
        
        // 送信確認メッセージ
        alert('お問い合わせを送信します。メールアプリが起動します。');
        
        // メーラーを開く
        setTimeout(() => {
            window.location.href = `mailto:${mailtoAddress}?subject=ウェブサイトからのお問い合わせ&body=${mailBody}`;
        }, 300);
    });
}); 