import { useState } from "react";

import { FomInputCheckbox } from "app/presentation/components/form/input-checkbox-form";
import { FormInput } from "app/presentation/components/form/input-form";
import { PageTitle } from "app/presentation/components/page-title";
import { SProductManagementButton } from "product-management/presentation/components/product-management-button";

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

export function ProductManagementAddView() {
  const [productFormData, setProductFormData] = useState(
    initialProductFormData
  );

  function handleOnChange<T>(property: string, value: T) {
    setProductFormData((prev) => ({ ...prev, [property]: value }));
  }

  return (
    <div>
      <PageTitle title="Novo Produto" subtitle={productFormData.title} />

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
          checked={productFormData.active}
          handleOnChange={(e) => {
            const target = e.currentTarget;
            const value =
              target.type === "checkbox" ? target.checked : target.value;

            handleOnChange<boolean>("active", Boolean(value));
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

      <SProductManagementButton variant="success" type="submit">
        Salvar
      </SProductManagementButton>
    </div>
  );
}
