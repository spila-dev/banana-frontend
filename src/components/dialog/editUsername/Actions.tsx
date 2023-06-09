import { Input } from "~/components/general/input";
import { VoidNoArgsFn } from "~/types";

interface Props {
  onCancel: VoidNoArgsFn;
  onSaveClick: VoidNoArgsFn;
}

const EditUsernameActions: React.FC<Props> = ({ onCancel, onSaveClick }) => (
  <>
    <Input.Button onClick={onCancel} variant="text" color="error">
      Cancel
    </Input.Button>

    <Input.Button onClick={onSaveClick} variant="text" color="primary">
      Confirm
    </Input.Button>
  </>
);

export default EditUsernameActions;
