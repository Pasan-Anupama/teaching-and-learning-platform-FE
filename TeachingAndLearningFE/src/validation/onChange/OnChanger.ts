import type { ChangeEventHandler, Dispatch, SetStateAction } from "react";

import type { FormControlElement } from "../../types/common/CommonTypes";

export const OnChangeText =
  <T>(
    formData: T,
    setFormData: Dispatch<SetStateAction<T>>
  ): ChangeEventHandler<FormControlElement> =>
  (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value.trimStart() });
  };
