const noticeStorageKey = "spamen-notices";
const notices = [
    {
        title: "v1.0.1 小規模アップデートのお知らせ",
        date: "2026/9/19",
        content: `
            更新内容 : <br>
            ・メインページのページの切り替えアニメーションの実装に伴い、<br>
            　Spamenでもページの切り替えアニメーションが実装されました。
        `
    },
    {
        title: "v1.0.0 Release 大型アップデートと重要なお知らせ",
        date: "2025/10/04",
        content: `
            <div style="font-size: 25px;">Spamenリリース！</div>
            お知らせ: <br>
            1. Spamenは実装予定のものを全て実装し終えたので、Spamenはリリースバージョンとなります。<br>
            2. ProgressBarのデザイン変更とページ移行アニメーションの制作は困難と判断したため、行いません。<br>
            3. メインページ大幅変更に伴い、SpamenのURLは変更されました。<br>　 今までのURLはアクセス不可となるので、ご注意ください。<br><br>〜アップデート内容〜<br>
            ・左のカウント表示が真ん中の入力ボックスと重なる問題を修正<br>
            ・上のバーのSpamenのバージョン表記で、タイトルが「Spamenn」になっていたミスを修正。<br>
            ・上のバーのボタンのサイズが少し小さい問題を修正。<br>
            ・リセットした際にfdsa per secondの表記が負の数になることがあるバグを修正。<br>
            ・テーマや背景を変更できる機能を追加しました。<br>
            　追加されたテーマ : <br>
            　・desktop light (今までのデザイン) <br>
            　・desktop dark <br>
            　・カオス(kaosu) <br>
            <br>
            リリースバージョンのSpamenをお楽しみください！
        `
    },
    {
        title: "v0.0.2 beta アップデート",
        date: "2025/04/20",
        content: `
            ・タイトルが「Spamenn」となっていたところ、<br>
            　記述ミスのため、「Spamen」に修正<br>
            ・お知らせページのデザインを変更<br>
            ・ミスカウントの実装<br>
            ・fdsa入力で、途中でミスをした場合のinputのリセットする機能の実装<br>
            ・fdsa per secondの実装<br>
            ・他のブラウザに対応させるための細かい修正<br><br>
            ～残りの実装予定の機能～<br>
            ・ProgressBarのデザイン変更<br>
            ・ページ移動アニメーション追加<br>
            ・テーマ変更機能<br><br>
            作者のリンク記載は必要なくなりました<br>
            (メインページの実装のため)
        `
    },
    {
        title: "v0.0.1 beta 初公開",
        date: "2025/04/19",
        content: `
            旧Spamennの移行版です。<br>
            まだベータ版のため、未実装の機能がたくさんあります。<br>
            ～実装予定の機能～<br>
            ・ミスカウントの実装<br>
            ・ProgressBarのデザイン変更<br>
            ・お知らせページのデザイン変更<br>
            ・ページ移動アニメーション<br>
            ・fdsa入力で、途中でミスをした場合のinputのリセット<br>
            ・テーマ変更機能<br>
            ・fdsa per second<br>
            ・作者のリンクの記載<br>
            など...<br>
            お楽しみに～☆
        `
    }
];

const noticesJson = JSON.stringify(notices);
const noticeList = document.getElementById("notice-list");
const newNotice = document.getElementById("new-notice");

if (noticeList) {
    notices.forEach((notice) => {
        const noticeElement = document.createElement("div");
        noticeElement.className = "notice";
        noticeElement.style.backgroundColor = "rgb(233, 233, 233)";
        noticeElement.innerHTML = `
            <div class="title">${notice.title}</div>
            <div class="date">${notice.date}</div>
            <div class="doc">${notice.content}</div>
        `;
        noticeList.appendChild(noticeElement);
    });

    localStorage.setItem(noticeStorageKey, noticesJson);
}

if (newNotice && localStorage.getItem(noticeStorageKey) !== noticesJson) {
    newNotice.hidden = false;
}