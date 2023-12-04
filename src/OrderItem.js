import { Badge } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateStatus } from "./redux/slice/addItem";
import styled from "styled-components"; 

const Table = styled.div`
  margin-left: 0.5rem;
  border: 1px solid black;
  border-collapse: collapse;
`;
const TR = styled.div`
  border: 1px solid;
  disply:flex
`;
const TD = styled.div`
  border: px solid;
`;


export default function OrderItem({
  id,
  name,
  isDone,
  createdAt,
  updatedAt,
  onClickRemove,
}) {
  const dispatch = useDispatch();
  const handleClick = ({ id }) => {
    dispatch(updateStatus({ id }));
  };

    return (
      <Table>
        <TR>
          <TD>
            <p className={`todo-item ${isDone && "done"}`}>{name}</p>
            <Badge bg="secondary">{createdAt}</Badge>
          </TD>
          <TD>
            <Badge bg={isDone ? "success" : "danger"}>
              {isDone ? "Done" : "Pending"}
            </Badge>
            {isDone && <p>{updatedAt}</p>}
          </TD>
          {!isDone && (
            <TD>
              <div
                style={{ color: "green" }}
                onClick={() => handleClick({ id })}
              >
                <FaCheck />
              </div>
            </TD>
          )}
          <TD colSpan={isDone ? 2 : 1}>
            <div style={{ color: "red" }} onClick={() => onClickRemove({ id })}>
              <FaTimes />
            </div>
          </TD>
        </TR>
      </Table>
    );
}
