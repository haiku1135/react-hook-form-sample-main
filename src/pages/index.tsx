import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '@/components/common/Layout';
import Container from '@/components/common/parts/Container';
import Question01 from '@/components/form01/Question01';
import { ROUTES } from '@/lib/data/routes';

const TopPage: NextPage = () => {
  return (
    <Layout path={ROUTES.TOP} title="Answer01">
      <Container maxWidth="max-w-4xl">
        <div className="mt-8">
          <h1 className="text-h1">課題</h1>
          <Question01 />
          <Link
            className="ml-2 mt-2 text-sm text-primary underline duration-200 hover:opacity-80"
            href={ROUTES.SAMPLE01}
          >
            サンプルを見る
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

export default TopPage;
