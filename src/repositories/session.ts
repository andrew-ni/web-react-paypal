import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user_id
      email
    }
  }
`;

export const normalizeLoginData = (response: any) => {
  console.log(response);
  return {
    userId: response.data.login.user_id,
    email: response.data.login.email,
  };
};

export const REGISTER = gql`
  mutation Register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      user_id
      email
    }
  }
`;

export const normalizeRegisterData = (response: any) => {
  console.log(response);
  return {
    userId: response.data.register.userId,
    email: response.data.register.email,
  };
};

export const ME = gql`
  query Me {
    me {
      user_id
      email
    }
  }
`;

export const normalizeMeData = (response: any) => {
  console.log(response);
  return {
    userId: response.data.me.userId,
    email: response.data.me.email,
  };
};
