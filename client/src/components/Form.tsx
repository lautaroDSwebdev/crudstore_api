import { FormClient, FormVenta } from "./AllForms";
import "./style.css";
export const Form = ({ handleSubmit, register  }) => {

  return (
    <div className="forms">
      <FormVenta
        handleSubmit={handleSubmit}
        register={register}
      ></FormVenta>
      <FormClient ></FormClient>
    </div>
  );
};
