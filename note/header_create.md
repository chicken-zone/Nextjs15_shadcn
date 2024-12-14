## header 作成

https://ui.shadcn.com/docs/components/navigation-menu

- layout.tsx 内に Header タグを追加
- Header.tsx を作成、また shadcn から Navigation コンポーネントを追加

```
npx shadcn@latest add navigation-menu
```

## LightDark モード追加

https://ui.shadcn.com/docs/dark-mode/next

- 下記コマンドを実行

```
npm install next-themes
```

- theme-provider.tsx を作成
- layout.tsx に import する
- 変更するトグルを追加する為に Header.tsx に記述
