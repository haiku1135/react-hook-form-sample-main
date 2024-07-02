import type { NextApiRequest, NextApiResponse } from 'next';

const time = async (second: number) => {
  return new Promise((resolve) => setTimeout(resolve, second * 1000));
};

type ReqBody = {
  name: string;
  email: string;
  password: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    const { name, email, password } = req.body as ReqBody;
    // 1秒待ってからステータスコード204を返す
    console.log(name, email, password);
    await time(1);
    res.status(204).end();
  } else {
    res.setHeader('Allow', 'POST');
    res.status(400).json({ type: 'BadRequest' });
  }
};

export default handler;
