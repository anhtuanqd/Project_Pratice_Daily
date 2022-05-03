import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import yup from '../../common/YupGlobal/YupGlobal'
// import * as yup from 'yup'
import {
     ButtonSubmit,
     Form,
     Input,
     InputField,
     Title,
     Error
} from './Login.Style'

const Login = () => {
     const schema = yup.object().shape({
          username: yup.string().required('Required').email('Email invalid'),
          pass: yup.string().required('Required').password('Password invalid')
     })
     const {
          register,
          handleSubmit,
          formState: { errors }
     } = useForm({
          mode: 'onChange',
          resolver: yupResolver(schema)
     })
     const onSubmit = (data) => {
          console.log(data)
     }

     return (
          <>
               <Form onSubmit={handleSubmit(onSubmit)}>
                    <Title>login</Title>
                    <InputField>
                         <Input
                              type="text"
                              name="username"
                              id="username"
                              placeholder="Email"
                              autoComplete="off"
                              {...register('username')}
                         ></Input>
                         {errors.username && (
                              <Error>{errors.username.message}</Error>
                         )}
                    </InputField>
                    <InputField>
                         <Input
                              type="password"
                              name="pass"
                              id="pass"
                              placeholder="Password"
                              autoComplete="off"
                              {...register('pass')}
                         ></Input>
                         {errors.pass && <Error>{errors.pass.message}</Error>}
                    </InputField>
                    <ButtonSubmit type="submit">LOGIN</ButtonSubmit>
               </Form>
          </>
     )
}

export default Login
