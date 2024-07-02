/**
 * useMessageDialog() で表示するダイアログに渡すメッセージ等の一覧
 *
 * 【第一階層】機能ごとに分ける
 * - e.g) material, tag, ...
 *
 * 【第二階層】open***Dialog() に渡すデータ
 * - openMessageDialog() に渡す場合 → message***
 * - openConfirmDialog() に渡す場合 → confirm***
 * - openErrorDialog() に渡す場合   → error***
 */

export const message = {
  form: {
    form01: {
      title: 'アカウントの作成が完了しました',
      content: 'お疲れ様です。',
    },
    form01Error: {
      title: 'アカウントの作成に失敗しました',
      content: '残念でした。',
    },
  },
};
