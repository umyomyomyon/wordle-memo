import { VFC, useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import CharButton from "./CharButton";
import DeleteButton from "./DeleteButton";
import { setStorage, getStorageItem } from "../utils";
import { baseLength, CHAR_STATUSES, CharStatus } from "../constants";

const chooseNextStatus = (status: CharStatus): CharStatus => {
  if (status === CHAR_STATUSES.NOT_IN_THE_WORD)
    return CHAR_STATUSES.IN_THE_WORD_AND_WRONG_SPOT;
  if (status === CHAR_STATUSES.IN_THE_WORD_AND_WRONG_SPOT)
    return CHAR_STATUSES.IN_THE_WORD_AND_COLLECT_SPOT;
  return CHAR_STATUSES.NOT_IN_THE_WORD;
};

interface FormProps {
  letter: number;
}

const Form: VFC<FormProps> = ({ letter }) => {
  const [char, setChar] = useState<string>("");
  const [status, setStatus] = useState<CharStatus>(
    CHAR_STATUSES.NOT_IN_THE_WORD
  );

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.currentTarget.value;
    if (value.length > 1) return;
    setChar(value);
    setStorage(value, `wordle-memo:${letter}`);
  };

  const handleClick = () => {
    const nextStatus = chooseNextStatus(status);
    setStatus(nextStatus);
    setStorage(nextStatus, `wordle-memo:${letter}-status`);
  };

  const handleDelete = () => {
    setChar("");
    setStatus(CHAR_STATUSES.NOT_IN_THE_WORD);
    setStorage("", `wordle-memo:${letter}`);
    setStorage("", `wordle-memo:${letter}-status`);
  };

  useEffect(() => {
    const storageChar = getStorageItem(`wordle-memo:${letter}`);
    if (storageChar) setChar(storageChar);
    const storageStatus = getStorageItem(`wordle-memo:${letter}-status`);
    if (storageStatus) setStatus(storageStatus as CharStatus);
  }, [letter]);

  return (
    <>
      {char ? (
        <Stack direction="column" spacing={1}>
          <CharButton char={char} handleClick={handleClick} status={status} />
          <DeleteButton handleClick={handleDelete} />
        </Stack>
      ) : (
        <TextField
          sx={{
            width: baseLength,
            height: "100%",
            marginLeft: 1,
            marginRight: 1,
          }}
          onChange={handleChange}
          value={char}
        />
      )}
    </>
  );
};

export default Form;
