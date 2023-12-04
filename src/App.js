// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Button, Container, Modal, Table } from "react-bootstrap";
// import OrderItem from "./OrderItem";
// import FormAdd from "./FormAdd";
// import { removeItem } from "./redux/slice/addItem";
// import styled from "styled-components";


// const StyledTitle = styled.h1`
//   font-size: 24px;
//   color: #333;
//   margin-top: 20px;
// `;

// const Table = styled.div`
//   border-collapse: collapse;
//   width: 100%;
// `;



// function App() {
//   const dispatch = useDispatch();

//   const orderList = useSelector((state) => state.item.list);

//   const [show, setShow] = useState(false);
//   const [deleteItem, setDeleteItem] = useState({});

//   const handleClickRemove = (item) => {
//     setShow(true);
//     setDeleteItem(item);
//   };

//   const handleRemove = () => {
//     dispatch(removeItem(deleteItem));
//     setShow(false);
//   };

//   return (
//     <div className="App">
//       <Container>
//         <Modal show={show} onHide={() => setShow(false)}>
//           <Modal.Header closeButton>
//             <Modal.Title>Remove item?</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Do you really want to delete it?</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setShow(false)}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleRemove}>
//               OK
//             </Button>
//           </Modal.Footer>
//         </Modal>
//         <FormAdd />
//         <h1 className="title">Reeco App</h1>
//         <Table
//           striped
//           hover
//           bordered
//           style={{ textAlign: "center", verticalAlign: "middle" }}
//         >
//           <tablehead>
//             <tr>
//               <th>Name</th>
//               <th>Status</th>
//               <th colSpan={2}>Action</th>
//             </tr>
//           </tablehead>
//           <tbody>
//             {orderList &&
//               orderList.map((item) => {
//                 return (
//                   <OrderItem
//                     key={item.id}
//                     id={item.id}
//                     name={item.name}
//                     isDone={item.isDone}
//                     createdAt={item.createdAt}
//                     updatedAt={item.updatedAt}
//                     onClickRemove={handleClickRemove}
//                   />
//                 );
//               })}
//           </tbody>
//         </Table>
//       </Container>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Container,
  Modal,
  Table as BootstrapTable,
} from "react-bootstrap"; // Rename Table to BootstrapTable
import styled from "styled-components";
import OrderItem from "./OrderItem";
import FormAdd from "./FormAdd";
import { removeItem } from "./redux/slice/addItem";

// Styled Components
const StyledApp = styled.div`
  // Add your global styles here if needed
`;

const StyledTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin-top: 20px;
`;

const StyledTable = styled(BootstrapTable)`
  margin-top: 20px;
  border: 1px solid #ddd;
  padding: 8px;
  border-collapse: collapse;
  width: 100%;
`;
const StyledTableHeader = styled.th`
  font-size: 16px;
  font-weight: bold;
  background-color: #f0f0f0; /* Add your preferred background color */
  padding: 10px;
`;

// Add more styled components as needed

const App = () => {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.item.list);
  const [show, setShow] = useState(false);
  const [deleteItem, setDeleteItem] = useState({});

  const handleClickRemove = (item) => {
    setShow(true);
    setDeleteItem(item);
  };

  const handleRemove = () => {
    dispatch(removeItem(deleteItem));
    setShow(false);
  };

  return (
    <StyledApp>
      <Container>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Remove item?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you really want to delete it?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleRemove}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
        <FormAdd />
        <StyledTitle>Reeco App</StyledTitle>
        <StyledTable striped hover bordered>
          <thead>
            <tr>
              <StyledTableHeader >Name</StyledTableHeader>
              <StyledTableHeader >Status</StyledTableHeader>
              <StyledTableHeader  colSpan={2}>Action</StyledTableHeader>
            </tr>
          </thead>
          <tbody>
            {orderList &&
              orderList.map((item) => (
                <OrderItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  isDone={item.isDone}
                  createdAt={item.createdAt}
                  updatedAt={item.updatedAt}
                  onClickRemove={handleClickRemove}
                />
              ))}
          </tbody>
        </StyledTable>
      </Container>
    </StyledApp>
  );
};

export default App;

