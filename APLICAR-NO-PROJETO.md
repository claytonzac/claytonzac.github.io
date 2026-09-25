# Como aplicar esta revisão

Este ZIP contém os arquivos alterados/revisados para reposicionar o portfólio em Desenvolvimento de Software + Cyber Security.

## Forma recomendada

1. Faça backup ou commit do seu projeto atual.
2. Extraia este ZIP.
3. Copie os arquivos extraídos sobre o repositório atual, preservando arquivos que não estão presentes aqui, especialmente:
   - `src/assets/hero-illustration.png`
   - `src/components/ui/`
   - `package-lock.json`
   - demais componentes não alterados
4. Rode:

```bash
npm install
npm run build
```

5. Se o build passar:

```bash
git add .
git commit -m "Reposiciona portfólio para desenvolvimento e cyber security"
git push
```

## Importante

O design original foi preservado. O arquivo `src/index.css` mantém a paleta escura, amarelo e roxo.

O `package-lock.json` não foi recriado neste pacote para evitar novamente divergência com `npm ci`. Use o lockfile atual do seu repositório e rode `npm install` após copiar os arquivos.
