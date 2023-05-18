/// <reference types="astro/client" />

import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'react' {
	interface HTMLAttributes<T> extends AttributifyAttributes { }
}

// https://docs.astro.build/en/guides/environment-variables/#intellisense-for-typescript
interface ImportMetaEnv {
	readonly SITE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

