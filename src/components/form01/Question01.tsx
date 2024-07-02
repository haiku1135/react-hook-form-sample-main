const Question01 = (): JSX.Element => {
  return (
    <div className="mt-4 rounded-md border p-4">
      <h2 className="text-h2">サンプル1</h2>
      <p className="text-body1-medium">以下の条件を満たすフォームを作成せよ</p>
      <ul className="mt-4 flex flex-col space-y-1">
        <li className="text-body2">
          1. 名前、メールアドレス、パスワードを入力するフォームを作成する。
        </li>
        <li className="text-body2">
          2. 名前は、必須入力とし、50文字以下であることをバリデーションする。
        </li>
        <li className="text-body2">
          3. メールアドレスは、必須入力とし、メールアドレスの形式であることをバリデーションする。
        </li>
        <li className="text-body2">
          4. パスワードは、必須入力とし、8文字以上かつ、少なくとも1文字以上の大文字・小文字・数字・記号を含むことをバリデーションする。
        </li>
        <li className="text-body2">5. フォームが送信されたら、「/api/form/01」のAPIに情報を送信し、送信に成功した際にはダイアログを表示する。</li>
      </ul>
    </div>
  );
};

export default Question01;
