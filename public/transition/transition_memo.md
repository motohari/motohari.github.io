## ページ遷移トランジション

各HTMLファイルの `<head>` に、次の2行を追加する。

```html
<link rel="stylesheet" href="/transition/transition.css">
<script src="/transition/transition.js" defer></script>
```

これだけで、ページを開いたときに上下の黒幕が開き、同一サイト内の通常のリンクをクリックしたときに黒幕が閉じてからページが切り替わる。

外部サイトへのリンク、新しいタブで開くリンク、ファイルのダウンロード、ページ内アンカーは自動的に対象外になる。

特定のリンクだけトランジションを無効にする場合は、次のように `data-transition="none"` を追加する。

```html
<a href="/path/" data-transition="none">リンク</a>
```

JavaScriptから遷移させる場合は、`window.siteTransition.leave()` を使う。

```html
<button type="button" onclick="siteTransition.leave('/path/')">
	ページを開く
</button>
```

`transition.css` の `--transition-duration`、`--transition-easing`、`--transition-color` を上書きすると、時間・イージング・幕の色を変更できる。
