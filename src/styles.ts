import styled from 'styled-components'


export const Container = styled.div`
   margin: 0 auto;
   padding: 1rem;

   @media (min-width: 992px) {
    width: 50%;
  }
`

export const Title = styled.h1`
  text-align: center;
`

export const Form = styled.form`

`

export const FormGroup = styled.div`
  margin-bottom: 15px;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  
`

export const ButtonContainer = styled.div`

  button {
    margin-right: 5px;
  }
`

export const Button = styled.button`
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  border-radius: 8px;
  border: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  padding: 1rem;
  text-align: center;
`

export const List = styled.ul`
  list-style-type: none;
  margin: 1rem auto;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin-bottom: 8px;
  width: 100%;
`

export const InputCheckbox = styled.input`
  margin-right: 8px;
`
