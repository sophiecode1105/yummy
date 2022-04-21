import styled from 'styled-components';
import { useForm, ValidationRule } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { emailCertiNum, joinUserInfo } from '../state/state';
import { joinInfo } from '../state/typeDefs';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 5px;
`;

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 2px;
  padding: 5px;
`;
const Label = styled.label`
  margin-right: 8px;
`;

type ErrorProps = {
  error: string | undefined;
};

const Input = styled.input<ErrorProps>`
  border: ${(props) => (props.error ? '2px solid red' : '1px solid rgba(0,0,0,0.2)')};
`;

const WideInput = styled.input<ErrorProps>`
  border: ${(props) => (props.error ? '2px solid red' : '1px solid rgba(0,0,0,0.2)')};
  width: 70%;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: rgb(65, 78, 182);
  color: #fff;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 8px;
`;

const SendButton = styled(Button)`
  width: 50px;
  height: 25px;
`;

const NextButton = styled(Button)`
  width: 70px;
  height: 25px;
`;

const Errorbox = styled.div`
  color: red;
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 12px;
`;

type FormData = {
  email: string;
  certifyNumber: number;
  password: string;
  password2: string;
};

const Certify = gql`
  mutation ($email: String!) {
    emailCertify(email: $email)
  }
`;

const Signup = () => {
  const [certiNum, setCertiNum] = useRecoilState(emailCertiNum);
  const saveJoinData = useSetRecoilState(joinUserInfo);
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

  const [emailCer, { data, loading, error }] = useMutation(Certify);

  const postCertify = async () => {
    const { email } = getValues();

    emailCer({
      variables: {
        email,
      },
    });
  };

  if (!loading) {
    setCertiNum(data?.emailCertify);
  }

  const onSubmit = async (data: joinInfo) => {
    const { email, password } = getValues();
    saveJoinData({ email, password });
  };

  const myPattern: ValidationRule<RegExp> = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: '이메일 형식으로 입력해주세요',
  };

  const passwordPattern: ValidationRule<RegExp> = {
    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    message: '8자이상 / 영문 / 숫자 / 특수문자를 조합해주세요',
  };

  return (
    <Container>
      <SignupForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Join US !</Title>
        <InputWrap>
          <Label htmlFor="이메일">이메일</Label>
          <Input
            id="이메일"
            type="text"
            error={errors.email?.message}
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: myPattern,
              shouldUnregister: true,
            })}
          />
          <SendButton type="button" onClick={postCertify}>
            send
          </SendButton>
        </InputWrap>
        <Errorbox>{errors.email?.message}</Errorbox>
        <InputWrap>
          <Label htmlFor="인증번호">인증번호</Label>
          <WideInput
            id="인증번호"
            type="text"
            error={errors.certifyNumber?.message}
            {...register('certifyNumber', {
              required: '인증번호를 입력해주세요',
              validate: {
                matchPassword: (value: number) => {
                  return certiNum === Number(value) || '인증번호가 일치하지 않습니다.';
                },
              },
            })}
          />
        </InputWrap>
        <Errorbox>{errors.certifyNumber?.message}</Errorbox>
        <InputWrap>
          <Label htmlFor="비밀번호">비밀번호</Label>
          <WideInput
            type="password"
            error={errors.password?.message}
            {...register('password', {
              required: '비밀번호를 입력해주세요',
              pattern: passwordPattern,
            })}
          />
        </InputWrap>
        <Errorbox>{errors.password?.message}</Errorbox>
        <InputWrap>
          <Label htmlFor="비밀번호확인">비밀번호확인</Label>
          <WideInput
            id="비밀번호확인"
            type="password"
            error={errors.password2?.message}
            {...register('password2', {
              required: '비밀번호를 입력해주세요',
              validate: {
                matchPassword: (value) => {
                  const { password } = getValues();
                  return password === value || '비밀번호가 일치하지 않습니다.';
                },
              },
            })}
          />
        </InputWrap>
        <Errorbox>{errors.password2?.message}</Errorbox>
        <NextButton type="submit">Next</NextButton>
      </SignupForm>
    </Container>
  );
};
export default Signup;
