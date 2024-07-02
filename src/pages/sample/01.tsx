import { NextPage } from 'next';

import Layout from '@/components/common/Layout';
import Button from '@/components/common/parts/Button';
import Container from '@/components/common/parts/Container';
import Question01 from '@/components/form01/Question01';
import { useSample01 } from '@/hooks/form/useSample01';
import { ROUTES } from '@/lib/data/routes';

const Sample01: NextPage = () => {
  const { handleClickPost, loading, register, errors } = useSample01();
  return (
    <Layout path={ROUTES.TOP} title="トップページ">
      <Container maxWidth="max-w-4xl">
        <div className="mt-8">
          {/* 問題文 */}
          <Question01 />

          {/* 名前 */}
          <div className="mb-3 mt-8">
            <label>名前</label>
            <input
              placeholder="名前"
              className={`w-full rounded border px-4 py-2 text-input outline-none placeholder:text-theme-medium focus:border-primary ${
                errors['name'] ? 'border-error' : 'border-theme-medium'
              }`}
              {...register('name')}
            />
            {errors['name'] && (
              <div className="mt-1 text-body3 text-error">
                <span>{errors['name'].message}</span>
              </div>
            )}
          </div>

          {/* メールアドレス */}
          <div className="my-3">
            <label>メールアドレス</label>

            <input
              placeholder="メールアドレス"
              className={`w-full rounded border px-4 py-2 text-input outline-none placeholder:text-theme-medium focus:border-primary ${
                errors['email'] ? 'border-error' : 'border-theme-medium'
              }`}
              {...register('email')}
            />
            {errors['email'] && (
              <div className="mt-1 text-body3 text-error">
                <span>{errors['email'].message}</span>
              </div>
            )}
          </div>

          {/* パスワード */}
          <div className="my-3">
            <label>パスワード</label>
            <input
              placeholder="パスワード"
              className={`w-full rounded border px-4 py-2 text-input outline-none placeholder:text-theme-medium focus:border-primary ${
                errors['password'] ? 'border-error' : 'border-theme-medium'
              }`}
              {...register('password')}
            />
            {errors['password'] && (
              <div className="mt-1 text-body3 text-error">
                <span>{errors['password'].message}</span>
              </div>
            )}
          </div>

          {/* 送信 */}
          <Button label="送信" variant="primary" loading={loading} onClick={handleClickPost} />
        </div>
      </Container>
    </Layout>
  );
};

export default Sample01;
