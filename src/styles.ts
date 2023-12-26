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

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  margin-bottom: 8px;

  @media (min-width: 575px) {
    padding: 0 1rem;
  }
`

export const TaskTitle = styled.span`
  font-weight: bold;
  margin-bottom: 4px;
`

export const TaskDescription = styled.span`
  display: block;
  color: #555;
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
  background-image: linear-gradient(
    92.88deg,
    #455eb5 9.16%,
    #5643cc 43.89%,
    #673fd7 64.72%
  );
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
  display: block;
  margin-bottom: 1rem;
  width: 100%;

  @media (min-width: 575px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
`

export const ListItemEdit = styled.li`
  display: block;
  width: 100%;
`

export const InputCheckbox = styled.input`
  margin-right: 8px;
  flex
`
