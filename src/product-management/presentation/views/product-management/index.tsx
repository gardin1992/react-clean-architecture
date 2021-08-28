import { FormInput } from "app/presentation/components/form/input-form";

import React, { useState } from "react";
import {
  SProductManagementButtonSave,
  SProductManagementTitle,
} from "./button-save";

export function ProductManagement() {
  const [title, setTitle] = useState("012.345.678-90");

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    setTitle(e.currentTarget.value);
  }

  return (
    <div>
      <SProductManagementTitle>
        <h2 className="title">
          Add Product <small>{title}</small>
        </h2>
      </SProductManagementTitle>

      <form>
        <FormInput
          label={"Nome do produto"}
          value={title}
          handleOnChange={handleOnChange}
        />
        <FormInput
          label={"Descrição"}
          placeholder="Descrição curta do produto."
          handleOnChange={handleOnChange}
        />
      </form>

      <SProductManagementButtonSave>Salvar</SProductManagementButtonSave>
    </div>
  );
}
