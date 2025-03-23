# 個人事業主向けウェブサイト

このプロジェクトは、個人事業主向けの基本的なウェブサイトテンプレートです。HTML、CSS、JavaScriptを使用して構築されています。

## 機能

- レスポンシブデザイン（スマートフォン、タブレット、デスクトップに対応）
- モダンなUIデザイン
- スムーズスクロール
- お問い合わせフォーム
- アニメーション効果

## ファイル構成

```
/
├── index.html          # メインのHTMLファイル
├── css/
│   └── style.css       # スタイルシート
├── js/
│   └── script.js       # JavaScriptファイル
└── images/             # 画像ファイル用ディレクトリ
    ├── hero-bg.jpg     # ヒーローセクションの背景画像
    ├── profile.jpg     # プロフィール画像
    ├── work1.jpg       # 実績画像1
    ├── work2.jpg       # 実績画像2
    └── work3.jpg       # 実績画像3
```

## 使用方法

1. このリポジトリをクローンまたはダウンロードします。
2. `images` ディレクトリに必要な画像を配置します。
3. `index.html` ファイルを編集して、コンテンツをカスタマイズします。
4. `css/style.css` ファイルを編集して、デザインをカスタマイズします。
5. ウェブサーバーにアップロードするか、ローカルで開いて確認します。

## 画像について

このテンプレートでは以下の画像が必要です：

- `hero-bg.jpg`: ヒーローセクションの背景画像（推奨サイズ: 1920x1080px）
- `profile.jpg`: プロフィール画像（推奨サイズ: 600x600px）
- `work1.jpg`, `work2.jpg`, `work3.jpg`: 実績画像（推奨サイズ: 800x600px）

画像がない場合は、以下のようなプレースホルダー画像サービスを利用できます：

- [Placeholder.com](https://placeholder.com/)
- [Picsum Photos](https://picsum.photos/)

例：
```html
<!-- プレースホルダー画像の例 -->
<img src="https://picsum.photos/800/600" alt="実績1">
```

## カスタマイズ方法

### 事業名の変更

`index.html` ファイルの以下の部分を編集します：

```html
<div class="logo">
    <h1>事業名</h1>
</div>
```

### 連絡先情報の変更

`index.html` ファイルのお問い合わせセクションを編集します：

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <p>example@email.com</p>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <p>090-1234-5678</p>
</div>
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <p>〒123-4567 東京都○○区△△町1-2-3</p>
</div>
```

### 色の変更

`css/style.css` ファイルの色に関する部分を編集します。主な色は以下の部分で定義されています：

```css
/* メインカラー: #3498db */
/* サブカラー: #2c3e50 */
```

## ライセンス

このテンプレートは自由に使用、変更、配布することができます。 