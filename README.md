# native-pytech

Librería de componentes y utilidades para apps **React Native** / **Expo** (Pytech).

## Instalación

```bash
npm install native-pytech
```

Para mantener actualizado:

```bash
npx expo install native-pytech@latest
```

Instalá también las **peer dependencies** que use tu app (Expo, React Native, etc.). Revisá la sección `peerDependencies` en el `package.json` del paquete o de este repo.

## Uso

```ts
import { ... } from 'native-pytech/{submodulo}'
```

Ejemplos:

```ts
import { ... } from 'native-pytech/login'
import { ... } from 'native-pytech/supabase'
```

# Rutas disponibles

- `/assets`
    - `/components`
        - `/RemoveCircle`
        - `/ReorderThreeOutline`
    - `/images`
    - `/ionicons`
- `/components`
    - `/Gradient`
    - `/CloseButton`
    - `/Link`
    - `/Text`
    - `/Theme`
- `/constants`
    - `/colors`
    - `/consts`
    - `/handleFontObserver`
    - `/hooks`
    - `/utils`
- `/footer`
- `/login`
- `/page`
- `/providers`
    - `/app`
- `/segmentedControl`
- `/sql`
- `/supabase`
- `/swiftui`
- `/table`

## Licencia

MIT — ver `LICENSE`.
