import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FieldErrors, UseFormRegister, useForm } from 'react-hook-form';
import * as z from 'zod';

import { httpClient } from '@/lib/api/apibase';

const schema = z.object({
  name: z.string().trim().min(1, '名前を入力してください').max(50, '50文字以内で入力してください'),
  email: z.string().trim().email('正しいメールアドレスを入力してください'),
  password: z
    .string()
    .trim()
    .min(8, 'パスワードは8文字以上で入力してください')
    .regex(
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
      '半角英数記号で入力し、少なくとも1文字以上の大文字・小文字・数字・記号（!@#$%^&*()_+-=[]{};\':"|,.<>/?）を含めてください',
    ),
});

type FormInput = z.infer<typeof schema>;

const DEFAULT_FORM_INPUT = {
  name: '',
  email: '',
  password: '',
};

type UseSample01 = () => {
  handleClickPost: () => Promise<void>;
  loading: boolean;
  register: UseFormRegister<FormInput>;
  errors: FieldErrors<FormInput>;
};

export const useSample01: UseSample01 = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: DEFAULT_FORM_INPUT,
  });

  const onSubmit = async (data: FormInput) => {
    const { name, email, password } = data;

    let isSuccess = true;
    setLoading(true);
    try {
      // API処理
      await httpClient({
        method: 'post',
        url: '/api/form/01',
        data: {
          name: name,
          email: email,
          password: password,
        },
        headers: {
          'Content-type': 'application/json',
        },
      });
    } catch (e) {
      // エラー処理
      window.alert('送信が失敗しました');
      isSuccess = false;
    }
    setLoading(false);

    if (isSuccess) {
      window.alert('送信が成功しました');
    }

    reset();
  };

  return {
    handleClickPost: handleSubmit(onSubmit),
    loading,
    register,
    errors,
  };
};
