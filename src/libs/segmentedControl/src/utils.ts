import { RefObject } from "react"
import { ScrollView } from "react-native"


export const getIndex = (index:number=0) => Number.isInteger(index) ? index : Math.floor(index)


export const scrollToIndex = ({
    widths,
    scrollX,
    containerWidth,
    scrollRef,
    prevIndex,
    index

} : {widths: number[], scrollX: number, containerWidth: number, scrollRef: RefObject<ScrollView | null>, prevIndex: number, index: number}) => {

    if (!widths[index] || !containerWidth) return

    const left = widths.slice(0, index).reduce((acc, width) => acc + (width || 0), 0)
    const width = widths[index]

    const prevWidth = widths[index - 1] || 0
    const nextWidth = widths[index + 1] || 0

    const visibleStart = scrollX
    const visibleEnd = scrollX + containerWidth

    let target = null

    // 👉 dirección derecha
    if (index > prevIndex) {
        if (nextWidth > 0) {
            const itemEnd = left + width
            const nextStart = itemEnd
            const nextEnd = nextStart + nextWidth

            const isNextFullyVisible =
                nextStart >= visibleStart &&
                nextEnd <= visibleEnd

            if (!isNextFullyVisible) {
                target = nextEnd - containerWidth
            }
        }
    }

    // 👉 dirección izquierda
    else if (index < prevIndex) {
        if (prevWidth > 0) {
            const prevStart = left - prevWidth
            const prevEnd = left

            const isPrevFullyVisible =
                prevStart >= visibleStart &&
                prevEnd <= visibleEnd

            if (!isPrevFullyVisible) {
                target = prevStart
            }
        }
    }

    // 👉 si no hace falta scroll → salir
    if (target === null) return

    // 🔒 límites
    const totalWidth = widths.reduce((a, w) => a + (w || 0), 0)
    const maxScroll = Math.max(0, totalWidth - containerWidth)

    target = Math.max(0, Math.min(target, maxScroll))

    scrollRef.current?.scrollTo({
        x: target,
        animated: true
    })
}