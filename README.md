# orquestraAI

AI Technology Services — We orchestrate intelligent AI solutions for growing businesses.

## Overview

orquestraAI is a client-facing website and demo platform for an AI technology services company. It features interactive AI demos, service descriptions, SEO-optimized blog content, and integrated call booking.

## Tech Stack

- **Framework:** Next.js 14+ (App Router) with TypeScript
- **Styling:** Tailwind CSS + custom design system
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Booking:** Cal.com integration
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Landing page
│   ├── services/           # Service detail pages
│   ├── demos/              # Interactive AI demos
│   │   ├── chatbot/        # Live chatbot demo
│   │   ├── document-analysis/  # Document AI demo
│   │   ├── workflow/       # Workflow automation demo
│   │   └── voice/          # Voice AI demo (coming soon)
│   ├── blog/               # Blog with SEO content
│   ├── case-studies/       # Portfolio & results
│   ├── about/              # Company story & values
│   └── contact/            # Cal.com booking integration
├── components/
│   ├── layout/             # Header, Footer
│   └── sections/           # Landing page sections
└── lib/                    # Utilities
```

## Services Offered

1. **Custom AI Agents** — Autonomous agents for complex workflows
2. **AI Consulting & Strategy** — Roadmaps and ROI modeling
3. **Conversational AI** — Chatbots and virtual assistants
4. **AI Integration** — Connect AI to existing systems
5. **Data & ML Pipelines** — Analytics and predictive models

## Deployment

This project is designed for deployment on Vercel:

1. Push to GitHub
2. Connect repo to Vercel
3. Deploy automatically on every push

## Environment Variables

Create a `.env.local` file for API keys (needed for production AI demos):

```env
# AI APIs (for production demos)
OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_anthropic_key

# Cal.com
NEXT_PUBLIC_CALCOM_USERNAME=your_username
```

## License

MIT
