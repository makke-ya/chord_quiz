# pipe host to wsl

netsh.exe interface portproxy add v4tov4 listenaddress=192.168.3.2 listenport=8080 connectaddress=172.18.36.58 connectport=8080
netsh.exe interface portproxy show v4tov4

## GitHub Pages で公開する方法 (静的サイト化済み)

このリポジトリは Python サーバなしで動作するよう、ルートに静的 HTML を追加しています。
トップページは `index.html` で、静的アセットは `static/` に置かれています。

手順:

- リポジトリを GitHub に push します（`main` ブランチ）
- GitHub リポジトリの Settings → Pages に移動します
- Source を `main` ブランチ、Folder を `/ (root)` に設定します
- 保存すると数分以内にサイトが公開されます。公開 URL が表示されます。

ローカルで動作確認する場合:

- Python がある場合（簡易）:
	```powershell
	python -m http.server 8000
	```
	ブラウザで `http://localhost:8000/` を開く

- Node がある場合:
	```powershell
	npx http-server -p 8000
	```

注意:
- 既存の `app.py`（FastAPI）は放置されています。不要なら削除しても構いませんが、消す前にバックアップしてください。
