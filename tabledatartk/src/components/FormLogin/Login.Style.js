import styled from 'styled-components'

export const Form = styled.form`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     width: 350px;
     padding: 40px;
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     background: #191919;
     border: none;
     border-radius: 25px;
     text-align: center;
`
export const Title = styled.h1`
     color: white;
     text-transform: uppercase;
     font-weight: 500;
     letter-spacing: 5px;
`

export const Input = styled.input`
     border: 2px solid #0097e6;
     background: ${(props) => props.inputColor || 'none'};
     display: block;
     margin: 20px 0;
     padding: 15px 45px;
     width: 200px;
     outline: none;
     color: white;
     border-radius: 25px;
     text-align: center;
     transition: 250ms width ease, 250ms border-color ease;

     &:hover {
          width: 220px;
     }
`

export const ButtonSubmit = styled.button`
     border: 2px solid #2ecc71;
     background: none;
     display: block;
     margin: 20px auto;
     text-align: center;
     padding: 15px 40px;
     outline: none;
     color: white;
     border-radius: 25px;
     cursor: pointer;
     text-transform: uppercase;
     font-weight: 200;
     transition: 250ms background ease;
     -webkit-transition: 250ms background ease;
     -moz-transition: 250ms background ease;
     -o-transition: 250ms background ease;

     &:hover {
          background: #2ecc71;
     }
`
export const InputField = styled.div`
     position: relative;
`
export const Error = styled.p`
     width: 100%;
     margin: 0;
     padding: 0 15px;
     position: absolute;
     bottom: -8px;
     left: 50%;
     transform: translateX(-50%);
     color: red;
`
