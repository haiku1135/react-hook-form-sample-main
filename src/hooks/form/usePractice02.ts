import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FieldErrors, UseFormRegister, useForm } from 'react-hook-form';
import * as z from 'zod';

import { httpClient } from '@/lib/api/apibase';

const schema = z.object({
  name: z.string().min(1, '名前を入力してください').max(50, '50文字以内で入力してください'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  password: z
    .string()
    .min(8, 'パスワードは8文字以上で入力してください')
    .regex(
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
      '半角英数記号で入力し、少なくとも1文字以上の大文字・小文字・数字・記号（!@#$%^&*()_+-=[]{};\':"|,.<>/?）を含めてください',
    ),
});

type FormInput = z.infer<typeof schema>;

const DEFAULT_FROM_INPUT: FormInput = {
  name: '',
  email: '',
  password: '',
};

type UsePractice02 = () => {
  loading: boolean;
  register: UseFormRegister<FormInput>;
  errors: FieldErrors<FormInput>;
  handleClickPost: () => Promise<void>;
};

export const usePractice02: UsePractice02 = () => {
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(schema),
    defaultValues: DEFAULT_FROM_INPUT,
  });

  const onSubmit = async (data: FormInput) => {
    const { name, email, password } = data;
    let isSuccess = true;

    setLoading(true);
    // TODO API をたたく
    try {
      await httpClient({
        method: 'put',
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
    } catch (error) {
      window.alert('送信が失敗しました');
      isSuccess = false;
    }
    setLoading(false);

    if (isSuccess) {
      window.alert('送信が成功しました');
      reset();
    }
  };
  return { loading, register, errors, handleClickPost: handleSubmit(onSubmit) };
};
