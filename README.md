# StyleX with Next.js v15

This is a sample application that sets up StyleX on Next.js v15 using stylex-swc-plugin.

## Usage

```
pnpm install
pnpm dev
```

http://localhost:3000

## Important Note

- There is a bug in `@stylexswc/nextjs-plugin v0.65` that causes a warning related to PostCSS.
  - Related Issue: https://github.com/Dwlad90/stylex-swc-plugin/issues/236
- As a temporary workaround, we are using version `@0.6.6-rc.1`. We plan to update to a stable release as soon as it becomes available.
