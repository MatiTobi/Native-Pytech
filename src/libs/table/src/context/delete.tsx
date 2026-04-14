import { createCtx } from "libs/constants/utils"


export const [DeleteProvider, useDelete] = createCtx<(() => void)>()