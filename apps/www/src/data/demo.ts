// Sample data for the interactive demo on the landing page. Mirrors what the
// extension shows for a typical dev machine.

// Icons are the same Simple Icons the extension ships, imported straight from
// its assets so there's a single copy. On the dark demo window, logos that are
// black use their `-dark` (white) variant.
import astro from "../../../extension/assets/stack/astro.svg?url";
import express from "../../../extension/assets/stack/express-dark.svg?url";
import next from "../../../extension/assets/stack/nextdotjs-dark.svg?url";
import node from "../../../extension/assets/stack/nodedotjs.svg?url";
import postgres from "../../../extension/assets/stack/postgresql.svg?url";
import reactRouter from "../../../extension/assets/stack/reactrouter.svg?url";
import redis from "../../../extension/assets/stack/redis.svg?url";

export interface DemoPort {
  port: number;
  process: string;
  pid: number;
  icon: string;
  framework?: string;
  runtime: string;
  runtimeIcon: string;
  project?: string;
  branch?: string;
  cwd: string;
  command: string;
  chain: string[];
  bound: string;
  uptime: string;
  memory: string;
}

export const demoPorts: DemoPort[] = [
  {
    port: 3000,
    process: "next-server",
    pid: 48213,
    icon: next,
    framework: "Next.js",
    runtime: "Node.js",
    runtimeIcon: node,
    project: "acme",
    branch: "main",
    cwd: "~/work/acme/apps/web",
    command: "next-server (v16.2.6)",
    chain: ["launchd", "tmux", "fish", "bun", "node"],
    bound: "* (all interfaces)",
    uptime: "2h 14m",
    memory: "412.3 MB",
  },
  {
    port: 3001,
    process: "node",
    pid: 48240,
    icon: express,
    framework: "Express",
    runtime: "Node.js",
    runtimeIcon: node,
    project: "acme",
    branch: "main",
    cwd: "~/work/acme/apps/api",
    command: "node -r ts-node-dev/hook src/index.ts",
    chain: ["launchd", "tmux", "fish", "bun"],
    bound: "* (all interfaces)",
    uptime: "2h 14m",
    memory: "188.9 MB",
  },
  {
    port: 4321,
    process: "node",
    pid: 85882,
    icon: astro,
    framework: "Astro",
    runtime: "Node.js",
    runtimeIcon: node,
    project: "blog",
    branch: "draft/ports",
    cwd: "~/work/blog",
    command: "node ~/work/blog/node_modules/.bin/astro dev --host",
    chain: ["launchd", "tmux", "fish", "bun"],
    bound: "* (all interfaces)",
    uptime: "6h 3m",
    memory: "96.4 MB",
  },
  {
    port: 5173,
    process: "node",
    pid: 50117,
    icon: reactRouter,
    framework: "React Router",
    runtime: "Node.js",
    runtimeIcon: node,
    project: "acme",
    branch: "main",
    cwd: "~/work/acme/apps/dash",
    command: "node ~/work/acme/node_modules/.bin/react-router dev",
    chain: ["launchd", "tmux", "fish", "bun"],
    bound: "localhost",
    uptime: "41m",
    memory: "143.0 MB",
  },
  {
    port: 5432,
    process: "postgres",
    pid: 702,
    icon: postgres,
    runtime: "PostgreSQL",
    runtimeIcon: postgres,
    cwd: "/opt/homebrew/var/postgresql@17",
    command: "postgres -D /opt/homebrew/var/postgresql@17",
    chain: ["launchd"],
    bound: "localhost",
    uptime: "4d 7h",
    memory: "24.1 MB",
  },
  {
    port: 6379,
    process: "redis-server",
    pid: 21371,
    icon: redis,
    runtime: "Redis",
    runtimeIcon: redis,
    cwd: "~/work/blog",
    command: "redis-server *:6379",
    chain: ["launchd", "tmux", "fish"],
    bound: "* (all interfaces)",
    uptime: "1d 2h",
    memory: "8.6 MB",
  },
];
