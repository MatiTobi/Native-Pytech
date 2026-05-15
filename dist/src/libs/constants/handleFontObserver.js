import FontFaceObserver from 'fontfaceobserver';
export default () => {
    // Solo ejecutarlo en Web
    if (typeof document === 'undefined')
        return;
    // Sobrescribimos la función load de FontFaceObserver para capturar todos los errores
    const OriginalLoad = FontFaceObserver.prototype.load;
    FontFaceObserver.prototype.load = function (testString, timeout) {
        // Si no pasaron timeout, ponemos 15000ms por defecto
        const actualTimeout = timeout || 15000;
        return OriginalLoad.call(this, testString, actualTimeout)
            .catch(err => {
            console.warn(`FontFaceObserver ignoró error de fuente "${this.family}"`, err);
            // Retornamos un resolved Promise para que la app no rompa
            return Promise.resolve();
        });
    };
};
