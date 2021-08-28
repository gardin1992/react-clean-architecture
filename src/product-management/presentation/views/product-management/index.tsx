import { FomInputCheckbox } from "app/presentation/components/form/input-checkbox-form";
import { FormInput } from "app/presentation/components/form/input-form";

import React, { useState } from "react";
import {
  SProductManagementButtonSave,
  SProductManagementTitle,
} from "./button-save";

export type ProductFormData = {
  title: string;
  description: string;
  price: number;
  active: boolean;
  category: string;
  code: string;
};

export const initialProductFormData: ProductFormData = {
  title: "",
  description: "",
  price: 0,
  active: true,
  category: "",
  code: "",
};

export function ProductManagement() {
  const [productFormData, setProductFormData] = useState(
    initialProductFormData
  );

  function handleOnChange<T>(property: string, value: T) {
    setProductFormData((prev) => ({ ...prev, [property]: value }));
  }

  return (
    <div>
      <SProductManagementTitle>
        <h2 className="title">
          Add Product <small>{productFormData.title}</small>
        </h2>
      </SProductManagementTitle>

      <form>
        <FormInput
          label={"Nome do produto"}
          value={productFormData.title}
          handleOnChange={(e) => {
            const value = e.currentTarget.value;
            handleOnChange<string>("title", value);
          }}
        />
        <FormInput
          label={"Descrição"}
          placeholder="Descrição curta do produto."
          value={productFormData.description}
          handleOnChange={(e) => {
            const value = e.currentTarget.value;
            handleOnChange<string>("description", value);
          }}
        />
        <FormInput
          label={"Preço"}
          value={String(productFormData.price)}
          handleOnChange={(e) => {
            const value = e.currentTarget.value;

            handleOnChange<number>(
              "price",
              parseFloat(Number(value).toFixed(2))
            );
          }}
        />

        <FomInputCheckbox
          label={"Ativo"}
          value={String(productFormData.active)}
          handleOnChange={(e) => {
            const value = e.currentTarget.value;
            console.log(value);
            handleOnChange<boolean>("active", true);
          }}
        />

        <FormInput
          label={"Categoria"}
          value={productFormData.category}
          handleOnChange={(e) => {
            const value = e.currentTarget.value;
            handleOnChange<string>("category", value);
          }}
        />

        <FormInput
          label={"Código"}
          value={productFormData.code}
          handleOnChange={(e) => {
            const value = e.currentTarget.value;
            handleOnChange<string>("code", value);
          }}
        />
      </form>

      <SProductManagementButtonSave>Salvar</SProductManagementButtonSave>
    </div>
  );
}
