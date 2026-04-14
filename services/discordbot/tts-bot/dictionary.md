---
title: /dictionary
description: 
published: true
date: 2026-04-14T00:00:00.000Z
tags: discordbot, tts, 読み上げbot, dictionary
editor: markdown
dateCreated: 2026-04-14T00:00:00.000Z
---

# /dictionary
## 概要
/dictionary はサーバー全体で共有される辞書を管理するコマンドです。
特定の単語を好みの読みへ置き換えたいときに使います。

## サブコマンド一覧
コマンド名 | 概要 | 補足
-- | -- | --
/dictionary help | 辞書コマンド一覧を表示します。 | サーバー内で使える辞書操作を確認できます。
/dictionary add | 辞書に単語を登録します。 | 正規表現は上位プラン向けです。
/dictionary remove | 辞書から単語を削除します。 | 単語名はオートコンプリート対応です。
/dictionary export | 辞書をエクスポートします。 | csv, json, colon に対応します。
/dictionary import | 辞書をインポートします。 | 1MB以下、JSON形式の再取り込みを推奨します。
/dictionary list | 辞書一覧を表示します。 | ページ送りで確認できます。
/dictionary search | 辞書を検索します。 | 部分一致で検索します。
/dictionary reset | 辞書を初期化します。 | 確認ボタンが表示されます。
/dictionary sync | 辞書を他のKuronekoServer系BOTへ同期します。 | 同期先の辞書を上書きします。

## 使用例
```text
/dictionary add 単語:krnk 読み:クロネコ 正規表現:false
/dictionary remove 単語:krnk
/dictionary export format:json
/dictionary search 検索する文字列:クロネコ
```

## /dictionary add
単語と読みを登録します。

```text
/dictionary add 単語:こんにちは 読み:こんにちわ 正規表現:false
```

補足:
- 登録件数の上限と、単語・読みの長さ上限はプランにより変わります。
- 正規表現を使う登録は Advanceプラン以上が必要です。
- 同じ単語を登録すると上書きされます。

## /dictionary remove
登録済みの単語を削除します。

```text
/dictionary remove 単語:こんにちは
```

## /dictionary export
辞書をファイルとして出力します。

```text
/dictionary export format:csv
/dictionary export format:json
/dictionary export format:colon
```

## /dictionary import
辞書ファイルを取り込みます。

```text
/dictionary import file:dictionary.json
```

補足:
- 1MBを超えるファイルは取り込めません。
- `/dictionary export format:json` で出力したJSONの再取り込みを推奨します。

## /dictionary list
登録済みの辞書を一覧表示します。

```text
/dictionary list
```

## /dictionary search
登録済みの辞書を検索します。

```text
/dictionary search 検索する文字列:こんにちは
```

## /dictionary reset
サーバー辞書を初期化します。

```text
/dictionary reset
```

## /dictionary sync
現在のサーバー辞書を、ほかのKuronekoServer系読み上げBOTへ同期します。

```text
/dictionary sync
```

補足:
- 同期先にある辞書は上書きされます。
- 実行前に確認ボタンが表示されます。

## 関連ページ
- [/user-dictionary](user-dictionary.md)
- [有料プランについて](payment.md)