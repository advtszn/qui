# Qui

See every listening port, what's behind it and why it's running, then free it in one keystroke. A Raycast extension.

## Workspace

An [aube](https://aube.sh) workspace (`aube-workspace.yaml`):

| Package          | What                                            |
| ---------------- | ----------------------------------------------- |
| `apps/extension` | The Raycast extension (`qui`)                   |
| `apps/www`       | The landing page: static Astro, no UI framework |

```sh
aube install
aube run dev      # develop the extension in Raycast
aube run www      # run the site locally
aube run build    # build everything
aube run lint     # Biome, across the whole workspace
```

Both packages use a `~/*` import alias for their `src/` directory.
