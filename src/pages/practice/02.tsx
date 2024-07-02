import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import Container from '@/components/common/parts/Container';
import { usePractice02 } from '@/hooks/form/usePractice02';

const Page: NextPage = () => {
  const { errors, handleClickPost, loading, register } = usePractice02();
  return (
    <Container maxWidth="max-w-4xl">
      <div className="mb-3 mt-8">
        <label htmlFor="name">名前</label>
        <input
          id="name"
          type="text"
          placeholder="名前"
          className={`w-full rounded border px-4 py-2 text-input outline-none placeholder:text-theme-light focus:border-primary ${errors['name'] ? 'border-error' : 'border-theme-medium'}`}
          {...register('name')}
        />
        {errors['name'] && (
          <div className="mt-1 text-body3 text-error">
            <span>{errors['name'].message}</span>
          </div>
        )}
      </div>

      <div className="mt-8">
        <label htmlFor="email">メールアドレス</label>
        <input
          id="email"
          type="text"
          placeholder="メールアドレス"
          className={`w-full rounded border px-4 py-2 text-input outline-none placeholder:text-theme-light focus:border-primary ${errors['email'] ? 'border-error' : 'border-theme-medium'}`}
          {...register('email')}
        />
        {errors['email'] && (
          <div className="mt-1 text-body3 text-error">
            <span>{errors['email'].message}</span>
          </div>
        )}
      </div>

      <div className="mb-4 mt-8">
        <label htmlFor="password">パスワード</label>
        <input
          id="password"
          type="text"
          placeholder="パスワード"
          className={`w-full rounded border px-4 py-2 text-input outline-none placeholder:text-theme-light focus:border-primary ${errors['password'] ? 'border-error' : 'border-theme-medium'}`}
          {...register('password')}
        />
        {errors['password'] && (
          <div className="mt-1 text-body3 text-error">
            <span>{errors['password'].message}</span>
          </div>
        )}
      </div>

      <Button onClick={handleClickPost} label="送信" variant="primary" loading={loading} />
    </Container>
  );
};

export default Page;
