import { NextPage } from 'next';
import { useState } from 'react';

import Button from '@/components/common/parts/Button';
import Container from '@/components/common/parts/Container';
import { httpClient } from '@/lib/api/apibase';

const Page: NextPage = () => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    let isSuccess = true;

    try {
      await httpClient({
        method: 'post',
        url: '/api/form/01',
        data: {
          name: name,
          email: email,
          password: password,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      // error handling
      window.alert('submit failed');
      isSuccess = false;
    }
    setLoading(false);

    if (isSuccess) {
      window.alert('submit success');
    }
  };
  return (
    <Container maxWidth="max-w-4xl">
      <div className="mt-8">
        <div className="mb-3 mt-8">
          <label htmlFor="name">名前</label>
          <input
            id="name"
            type="text"
            placeholder="名前"
            className="w-full rounded border px-4 py-2 text-input placeholder:text-theme-light"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="mb-3 mt-8">
          <label htmlFor="email">メールアドレス</label>
          <input
            id="email"
            type="text"
            placeholder="メールアドレス"
            className="w-full rounded border px-4 py-2 text-input placeholder:text-theme-light"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="mb-3 mt-8">
          <label htmlFor="password">パスワード</label>
          <input
            id="password"
            type="text"
            placeholder="パスワード"
            className="w-full rounded border px-4 py-2 text-input placeholder:text-theme-light"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <Button
          label="送信"
          variant="primary"
          className="mt-8"
          onClick={onSubmit}
          loading={loading}
        />
      </div>
    </Container>
  );
};

export default Page;
