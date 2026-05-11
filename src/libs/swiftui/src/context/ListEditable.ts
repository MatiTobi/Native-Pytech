import Utils from "@/libs/constants/utils"


export const [Provider, useListEditable] = Utils.createCtx<{
    enableMove: boolean
    enableDelete: boolean
}>()