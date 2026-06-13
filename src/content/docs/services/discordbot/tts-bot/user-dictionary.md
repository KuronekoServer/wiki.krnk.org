---
title: "/user-dictionary"
lastUpdated: 2026-04-14T00:00:00.000Z
---


# /user-dictionary
## 概要
/user-dictionary は自分専用の辞書を管理するコマンドです。
サーバー共有辞書とは異なり、自分の読み上げにだけ反映されます。

## サブコマンド一覧
コマンド名 | 概要 | 補足
-- | -- | --
/user-dictionary help | 個人辞書コマンド一覧を表示します。 | 返信は自分だけに表示されます。
/user-dictionary add | 個人辞書へ単語を登録します。 | 最大100件まで登録できます。
/user-dictionary remove | 個人辞書から単語を削除します。 | 単語名はオートコンプリートに対応しています。
/user-dictionary export | 個人辞書をエクスポートします。 | csv、json、colon に対応します。
/user-dictionary import | 個人辞書をインポートします。 | 1MB以下のJSON形式での再取り込みを推奨します。
/user-dictionary list | 個人辞書一覧を表示します。 | 返信は自分だけに表示されます。
/user-dictionary search | 個人辞書を検索します。 | 返信は自分だけに表示されます。
/user-dictionary reset | 個人辞書を初期化します。 | 確認ボタンが表示されます。

## 使用例
```text
/user-dictionary add 単語:w 読み:わら 正規表現:false
/user-dictionary export format:json
/user-dictionary search 検索する文字列:わら
```

## /user-dictionary add
単語と読みを自分専用の辞書へ登録します。

```text
/user-dictionary add 単語:w 読み:わら 正規表現:false
```

補足:
- 最大100件まで登録できます。
- 同じ単語を登録すると上書きされます。
- 正規表現も利用できます。

## /user-dictionary remove
自分専用の辞書から単語を削除します。

```text
/user-dictionary remove 単語:w
```

## /user-dictionary export
個人辞書をファイルとして出力します。

```text
/user-dictionary export format:csv
/user-dictionary export format:json
```

## /user-dictionary import
個人辞書をファイルから取り込みます。

```text
/user-dictionary import file:dictionary.json
```

補足:
- 1MBを超えるファイルは取り込めません。
- `/user-dictionary export format:json` で出力したJSONの再取り込みを推奨します。

## /user-dictionary list
自分専用の辞書一覧を表示します。

```text
/user-dictionary list
```

## /user-dictionary search
自分専用の辞書を検索します。

```text
/user-dictionary search 検索する文字列:わら
```

## /user-dictionary reset
個人辞書を初期化します。

```text
/user-dictionary reset
```

補足:
- 返信は自分だけに表示されます。
- 実行前に確認ボタンが表示されます。

## 関連ページ
- [/dictionary](/services/discordbot/tts-bot/dictionary/)
