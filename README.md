# Maison Delice

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)] [cloudflarebutton]

A full-stack chat application powered by Cloudflare Workers and Durable Objects. Features user management, chat boards, and real-time messaging with seamless pagination and indexing. Built with modern TypeScript, React, and Tailwind CSS for a responsive, production-ready experience.

## ✨ Features

- **Durable Objects for Entities**: One DO per user/chat with automatic indexing for efficient listing and pagination.
- **Real-time Chat Boards**: Send and retrieve messages with full state management.
- **Indexed Queries**: Cursor-based pagination for users and chats.
- **Type-Safe API**: Shared types between frontend and worker with Hono routing.
- **Modern UI**: Shadcn/UI components, Tailwind CSS, dark mode support, and animations.
- **Reactive Frontend**: TanStack Query for data fetching, React Router, and error boundaries.
- **Production-Ready**: CORS, logging, health checks, and client error reporting.
- **Seed Data**: Pre-populated mock users, chats, and messages.

## 🛠️ Tech Stack

- **Backend**: Cloudflare Workers, Durable Objects, Hono, TypeScript
- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Shadcn/UI, Lucide Icons
- **Data**: Global Durable Object for KV-like storage with CAS and indexes
- **State/Data**: TanStack Query, Zustand, Immer, React Hook Form
- **UI/UX**: Framer Motion, Sonner Toasts, Headless UI, Radix Primitives
- **Dev Tools**: Bun, ESLint, Wrangler, Vitest

## 🚀 Quick Start

1. **Clone & Install**:
   ```bash
   git clone <your-repo-url>
   cd maison-delice-7vxkt2wzivyysztmtkds_
   bun install
   ```

2. **Development**:
   ```bash
   bun dev
   ```
   - Frontend: http://localhost:3000
   - API: http://localhost:3000/api/health

3. **Type Generation** (for Workers bindings):
   ```bash
   bun cf-typegen
   ```

## 💻 Development

- **Frontend**: `bun dev` (Vite HMR on :3000)
- **Worker**: Routes auto-reload via dynamic import in dev mode.
- **Lint**: `bun lint`
- **Build**: `bun build` (produces `dist/` for deployment)
- **Preview**: `bun preview`

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | List users (supports `?cursor` & `?limit`) |
| POST | `/api/users` | Create user `{ name: string }` |
| GET | `/api/chats` | List chats (supports `?cursor` & `?limit`) |
| POST | `/api/chats` | Create chat `{ title: string }` |
| GET | `/api/chats/:chatId/messages` | List messages |
| POST | `/api/chats/:chatId/messages` | Send message `{ userId: string, text: string }` |
| DELETE | `/api/users/:id` | Delete user |
| POST | `/api/users/deleteMany` | Bulk delete `{ ids: string[] }` |

All responses follow `{ success: boolean, data?: T, error?: string }`.

### Customizing

- **Add Entities**: Extend `IndexedEntity` in `worker/entities.ts`.
- **Add Routes**: Implement in `worker/user-routes.ts`.
- **UI Components**: Use Shadcn/UI from `@/components/ui/*`.
- **Shared Types**: Edit `shared/types.ts` and `shared/mock-data.ts`.

## ☁️ Deployment

Deploy to Cloudflare Workers with one command:

```bash
bun deploy
```

This builds the frontend assets and deploys the Worker via Wrangler.

### Manual Deployment

1. **Configure Wrangler**:
   ```bash
   bunx wrangler login
   bunx wrangler deploy --dry-run  # Test
   ```

2. **Production Build & Deploy**:
   ```bash
   bun build
   bunx wrangler deploy
   ```

[cloudflarebutton]

Custom domain, env vars, and bindings are configured in `wrangler.jsonc`.

## 🤝 Contributing

1. Fork & PR.
2. Use `bun install` for dependencies.
3. Follow TypeScript & ESLint rules.
4. Test changes with `bun dev`.

## 📄 License

MIT. See [LICENSE](LICENSE) for details.

## 🙌 Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
- [Durable Objects](https://developers.cloudflare.com/durable-objects/)