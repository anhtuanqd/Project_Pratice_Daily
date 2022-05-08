import React from 'react'
import { DynamicInput } from '../../common/FormValidate/DynamicInput'
import { Form } from '../../common/FormValidate/Form'
import * as Yup from 'yup'
import { encodeMessage } from '../../common/FormValidate/helper'

const schema = Yup.object({
    username: Yup.string().required(encodeMessage('username', 'Required')),
    password: Yup.string()
        .required(encodeMessage('password', 'Required'))
        .min(6, 'Min length 6')
})

export const LoginMain = () => {
    return (
        <Form
            schema={schema}
            handleSubmitForm={(data) => {
                console.log(data)
            }}
        >
            {(form) => {
                return (
                    <>
                        <div>
                            <label>username</label>
                            <DynamicInput type="text" name="username" />
                        </div>
                        <div>
                            <label>password</label>
                            <DynamicInput type="password" name="password" />
                        </div>
                        <div>
                            <button onClick={form.handleSubmit}>Login</button>
                        </div>
                    </>
                )
            }}
        </Form>
    )
}
