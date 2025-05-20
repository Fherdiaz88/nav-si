Esta es una aplicación móvil básica construida con **Ionic + Angular**, que implementa:

- Un sistema de **inicio de sesión simulado** con almacenamiento de token.
- Navegación híbrida (con `NavController` y Angular Router).
- Rutas protegidas usando un **guard de autenticación**.
- Páginas: Login, Home (Tabs) y Settings.

---

## 🛠️ Tecnologías utilizadas

- **Ionic Framework** v7+
- **Angular** v16+
- **Angular Router**
- **NavController** de Ionic
- **LocalStorage** para simular token de autenticación

---

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── pages/
│   │   ├── auth/          → Página de login
│   │   ├── tabs/          → Página principal (home)
│   │   ├── settings/      → Página de configuración
│   ├── guards/
│   │   └── auth.guard.ts  → Protege rutas si no hay token
│   ├── app.routes.ts      → Configuración principal de rutas
├── index.html
├── main.ts
└── ...
```

---

## ▶️ Cómo ejecutar el proyecto

1. **Crear proyecto**:

```ionic start nav-si blank --type=angular
```

2. **Instalar dependencias**:

```bash
npm install
```

3. **Iniciar la app en navegador**:

```bash
ionic serve
```

---

## Lógica de autenticación

- Al hacer clic en **Iniciar Sesión**, se guarda un token en `localStorage`.
- Si hay un token, el guard (`authGuard`) permite el acceso a rutas como `/tabs` o `/settings`.
- Si no hay token, se redirige automáticamente a `/auth/login`.

```ts
// auth.guard.ts
export const authGuard: CanActivateFn = () => {
  const token = localStorage.getItem('token');
  const router = inject(Router);
  if (token) return true;
  setTimeout(() => router.navigate(['/auth/login']), 0);
  return false;
};
```

---
##  Flujo de navegación

1. El usuario abre la app y es redirigido a `/auth/login`.
2. Al iniciar sesión, se navega con `navigateRoot('/tabs')`.
3. Desde `/tabs`, el usuario puede ir a `/settings`.
4. Al cerrar sesión (desde home o settings), se elimina el token y se navega a `/auth/login`.

---

##  Funciones clave

### Login (login.page.ts)
```ts
onLogin() {
  localStorage.setItem('token', '123');
  this.navCtrl.navigateRoot('/tabs');
}
```

### Logout (en Home o Settings)
```ts
logout() {
  localStorage.removeItem('token');
  this.navCtrl.navigateRoot('/auth/login');
}
```






