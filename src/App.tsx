import { VFC } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Form from "./components/Form";
import { baseLength } from "./constants";

const App: VFC = (): JSX.Element => (
  <Container
    sx={{
      width: 450,
      height: 130,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Stack direction="row" alignItems="center" sx={{ maxHeight: baseLength }}>
      {[Form, Form, Form, Form, Form].map((FormComponent, idx) => (
        <FormComponent key={idx} letter={idx + 1} />
      ))}
    </Stack>
  </Container>
);

export default App;
