import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { addItem } from "./redux/slice/addItem";

const StyledForm = styled(Form)`
  margin-bottom: 1rem;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledFormGroup = styled(Form.Group)`
  width: 80%;
  margin-bottom: 0;
  padding:40px

`;

const StyledFormControl = styled(Form.Control)`
  width: 50%;
  border-radius: 30px;
  padding: 8px;
`;

const StyledButtonGroup = styled(Form.Group)`
  margin-left: 0.75rem;
  padding: 30px;
  border-radius: 40px;
`;
const Container = styled.nav`
  background-color: darkgreen;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  justify-content: start;
  color: white;
  gap: 42px;
  align-item: center;
`;

const NavItem = styled.div`
  cursor: pointer;
  padding: 5px;
  border-bottom: none;
`;

const Logo = styled.div`
  color: white;
  font-size: 28px;
  align-item: center;
`;

const FormAdd = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.floor(Math.random() * 888888) + 100000,
      name: item,
      isDone: false,
    };
    dispatch(addItem(newItem));
    setItem("");
  };

    return (
      <>
        <Container>
          <Logo>Reeco</Logo>
          <NavItem >Store</NavItem>
          <NavItem >Orders</NavItem>
          <NavItem >Analytics</NavItem>
        </Container>
        <StyledForm onSubmit={handleSubmit}>
          <FormContainer>
            <StyledFormGroup>
              <StyledFormControl
                required
                placeholder="Learn React"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
            </StyledFormGroup>
            <StyledButtonGroup>
              <Button type="submit">Add Item</Button>
            </StyledButtonGroup>
          </FormContainer>
        </StyledForm>
      </>
    );
};

export default FormAdd;

