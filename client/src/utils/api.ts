import { gql, useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { social } from "../state/state";

const [socialType] = useRecoilState(social);

const ADD_TODO = gql`
  mutation Join($text: {
  email: String,
  password: String,
  img: String,
  nickname: String
}) {
    joinUser(info: $text) {
      id
      text
    }
  }
`;

export const Get_Materials = gql`
  query {
    getAllMaterial {
      id
      name
      img
    }
  }
`;

export const postLogin = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const socialLogin = gql`
query ($code: String!) {
  ${socialType}(code: $code)
}
`;

export const Certify = gql`
  mutation ($email: String!) {
    emailCertify(email: $email)
  }
`;

export const Join = gql`
  mutation ($info: createUser!) {
    joinUser(info: $info) {
      id
      email
      nickName
      img
    }
  }
`;
