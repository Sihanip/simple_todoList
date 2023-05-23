import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const StyledNavbar = styled(Toolbar)({
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gap: 10,
  });

  const StyledButton = styled(Toolbar)({
    display: "grid",
    gridTemplateColumns: "auto auto",
    gap: 10,
  });

  const Border = styled("div")(({ theme }) => ({
    border: "1px solid grey",
    padding: "10px 20px",
    borderRadius: theme.shape.borderRadius,
    marginTop: "10px",
  }));

  const data = [
    {
      id: 1,
      task: "Nyuci mobil",
      complete: true,
    },
    {
      id: 2,
      task: "Memberi makan kucing",
      complete: true,
    },
    {
      id: 3,
      task: "Olahraga 10 menit",
      complete: false,
    },
    {
      id: 4,
      task: "Sarapan sereal",
      complete: true,
    },
    {
      id: 5,
      task: "Belanja harian",
      complete: false,
    },
    {
      id: 6,
      task: "Ngeprint tugas",
      complete: true,
    },
    {
      id: 7,
      task: "Bayar tagihan bulanan",
      complete: true,
    },
    {
      id: 8,
      task: "Berangkat kuliah",
      complete: false,
    },
    {
      id: 9,
      task: "Les bahasa Inggris",
      complete: true,
    },
    {
      id: 10,
      task: "Ke rumah Sabrina",
      complete: false,
    },
  ];

  const handShowAll = () => {
    setTasks(data);
  };

  const handShowDone = () => {
    setTasks(data.filter((task) => task.complete));
  };

  const handShowUndone = () => {
    setTasks(data.filter((task) => !task.complete));
  };

  const handleToggle = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, complete: !task.complete } : task
    );
    setTasks(updatedTasks);
  };

  const handleCheck = (event) => {
    var updatedTasks = [...tasks];
    if (event.target.tasks) {
      updatedTasks = [...tasks, event.target.value];
    } else {
      updatedTasks.splice(tasks.indexOf(event.target.value), 1);
    }
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleEdit = (id, newTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, task: newTask } : task
    );
    setTasks(updatedTasks);
  };

  const handDeleteDone = () => {
    setTasks(tasks.filter((task) => !task.complete));
  };

  const handDeleteAll = () => {
    setTasks([]);
  };

  var isChecked = (item) =>
    tasks.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <Container maxWidth="md">
      <Typography
        align="center"
        fontWeight="fontWeightBold"
        variant="h4"
        marginTop={5}
      >
        To Do List
      </Typography>

      <StyledNavbar>
        <Button
          variant="contained"
          size="medium"
          sx={{ background: "#24A3B6", ":hover": { background: "#24A3B6" } }}
          onClick={handShowAll}
        >
          ALL
        </Button>
        <Button
          variant="contained"
          size="medium"
          sx={{ background: "#24A3B6", ":hover": { background: "#24A3B6" } }}
          onClick={handShowDone}
        >
          DONE
        </Button>
        <Button
          variant="contained"
          size="medium"
          sx={{ background: "#24A3B6", ":hover": { background: "#24A3B6" } }}
          onClick={handShowUndone}
        >
          TODO
        </Button>
      </StyledNavbar>

      <form>
        {tasks.map((task) => (
          <div key={task.id}>
            <Border>
              <DeleteIcon
                className="DeleteIcon"
                onClick={() => handleDelete(task.id)}
              />

              <EditIcon
                className="EditIcon"
                onClick={() => handleEdit(task.id, prompt("Enter New Task"))}
              />

              <input
                className="checkbox"
                value={task}
                type="checkbox"
                id={`task-${task.id}`}
                checked={task.complete}
                onChange={() => handleToggle(task.id)}
              />
              <span onChange={handleCheck} className={isChecked(task.task)}>
                {task.task}
              </span>

              {/* <Box>
                {task.task}
                {/* <input
                  className="checkbox"
                  type="checkbox"
                  id={`task-${task.id}`}
                  checked={task.complete}
                  onChange={() => handleToggle(task.id)}
                /> *
              </Box> */}
            </Border>
          </div>
        ))}
      </form>

      <Box>
        <StyledButton>
          <Button
            variant="contained"
            size="medium"
            color="error"
            onClick={handDeleteDone}
          >
            Delete Done Task
          </Button>
          <Button
            variant="contained"
            size="medium"
            color="error"
            onClick={handDeleteAll}
          >
            Delete All Task
          </Button>
        </StyledButton>
      </Box>
    </Container>
  );
}
export default ToDoList;
