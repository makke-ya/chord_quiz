# 実行方法

```bash
npx http-server -p 8080
# ブラウザで `http://127.0.0.1:8080/` を開く
```

- WSLで実行する場合、以下のコマンドを実行する（要管理者権限）

```bash
netsh.exe interface portproxy add v4tov4 listenaddress=[host ip_addr] listenport=8080 connectaddress=[wsl ip_addr] connectport=8080
```