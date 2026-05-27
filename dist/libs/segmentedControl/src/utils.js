export const getIndex = (index = 0) => Number.isInteger(index) ? index : Math.floor(index);
export const scrollToIndex = ({ widths, scrollX, containerWidth, scrollRef, index }) => {
    if (!widths[index] || !containerWidth)
        return;
    const left = widths.slice(0, index).reduce((acc, w) => acc + (w || 0), 0);
    const width = widths[index];
    const prevWidth = widths[index - 1] || 0;
    const nextWidth = widths[index + 1] || 0;
    // Rango que queremos visible (prev + current + next)
    const blockStart = left - prevWidth;
    const blockEnd = left + width + nextWidth;
    const visibleStart = scrollX;
    const visibleEnd = scrollX + containerWidth;
    let target = scrollX;
    if (blockEnd > visibleEnd)
        target = blockEnd - containerWidth; // Si el bloque se sale por la derecha
    else if (blockStart < visibleStart)
        target = blockStart; // Si el bloque se sale por la izquierda
    else
        return; // Si ya está todo visible, no hace nada
    // Límites
    const totalWidth = widths.reduce((a, w) => a + (w || 0), 0);
    const maxScroll = Math.max(0, totalWidth - containerWidth);
    target = Math.max(0, Math.min(target, maxScroll));
    scrollRef.current?.scrollTo({
        x: target,
        animated: true
    });
};
