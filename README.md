# Pousada Altemar Dutra — website

Next.js 15 (App Router) · React 19 · TypeScript strict · Tailwind 3 · Framer Motion · Lucide.

## Rodar
```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck && npm run build
```

## Dados vindos do Instagram oficial
Endereço (Rodovia Altemar Dutra, Piranhas-AL), 3 km do centro histórico e as comodidades (Wi-Fi, estacionamento, ar-condicionado, quartos para família) foram tirados de um post da própria pousada. Confirme com o proprietário e complete número/complemento e mapa.

## Antes de publicar (conteúdo pendente — nada foi inventado)
- `src/lib/site-config.ts`: endereço, mapa (embed) e link de rotas, check-in/out, café da manhã (incluído/horário/cardápio), formas de pagamento, domínio, política de privacidade.
- `src/data/rooms.ts`: cadastrar os quartos reais (o item atual é provisório).
- `src/data/experiences.ts`: cadastrar os passeios reais (o item atual é provisório).
- `src/data/gallery.ts`, `HERO_IMAGE` em `HeroSection.tsx`, imagens de quartos/passeios: colocar fotos reais em `public/images/` e preencher os caminhos. Sem foto, aparece um bloco "Foto provisória".
- `src/data/reviews.ts`: somente avaliações reais e autorizadas; vazio = seção oculta.
- `src/data/faq.ts` usa os dados do site-config; respostas desconhecidas direcionam ao WhatsApp.

## WhatsApp
Toda a lógica está em `src/lib/whatsapp.ts` (`buildWhatsAppLink`, mensagens contextuais, `encodeURIComponent`, `rel="noopener noreferrer"`).
Principal: 5582981440618 · Alternativo: 5582988182680.

## Decisões
- Three.js/R3F não foi incluído: não havia cena 3D que justificasse o custo. Profundidade via parallax e composição.
- Fontes via `@fontsource` (sem depender do Google Fonts no build).
- Animações respeitam `prefers-reduced-motion`.

## Imagens atuais
As 4 fotos em `public/images/` (café da manhã e 3 quartos) foram recortadas de prints do Instagram da pousada e têm baixa resolução. Substitua pelos arquivos originais mantendo os mesmos nomes (ou atualize os caminhos em `src/data/`).
