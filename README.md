# native-pytech

Librería de componentes y utilidades para apps **React Native** / **Expo** (Pytech).

## Instalación

```bash
npm install native-pytech
```

Instalá también las **peer dependencies** que use tu app (Expo, React Native, etc.). Revisá la sección `peerDependencies` en el `package.json` del paquete o de este repo.

## Uso

Entrada principal (reexporta los módulos públicos):

```ts
import { ... } from 'native-pytech'
```

Submódulos (ejemplos):

```ts
import { ... } from 'native-pytech/login'
import { ... } from 'native-pytech/supabase'
```

## Licencia

MIT — ver `LICENSE`.
