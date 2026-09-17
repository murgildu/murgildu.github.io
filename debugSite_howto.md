# Local setup and build guide

Run the commands below from the repository root. Local previews and GitHub
Actions use the Hugo Extended version in [.hugo-version](.hugo-version).
Use `./scripts/hugo.sh` for Hugo commands: it checks the version and edition
before running, and uses `.tools/hugo` when installed there.

## Install the tools

You need Git and Go 1.18 or newer for [Hugo modules](https://gohugo.io/configuration/module/).
On Ubuntu:

```sh
sudo apt update
sudo apt install git golang-go curl ca-certificates
go version
```

Install the pinned Hugo Extended release. The following commands are for
**Linux x86-64** (including this project's current development machine and CI).
They keep Hugo inside the ignored `.tools/` folder without replacing the system
installation, and verify the archive against the release checksums:

```sh
hugo_version=$(cat .hugo-version)
hugo_archive="hugo_extended_${hugo_version}_linux-amd64.tar.gz"
hugo_release="https://github.com/gohugoio/hugo/releases/download/v${hugo_version}"
mkdir -p .tools
curl --fail --location "$hugo_release/$hugo_archive" --output ".tools/$hugo_archive"
curl --fail --location "$hugo_release/hugo_${hugo_version}_checksums.txt" --output .tools/checksums.txt
(
  cd .tools &&
  sha256sum --check --ignore-missing checksums.txt &&
  tar -xzf "$hugo_archive" hugo
)
./scripts/hugo.sh version
```

For macOS or another architecture, download the matching **Extended** archive
for the version in `.hugo-version` from the [Hugo releases](https://github.com/gohugoio/hugo/releases).
Place its `hugo` executable in `.tools/`, or install that release on your `PATH`.
Windows contributors can use the Linux instructions in WSL. To select an
existing binary explicitly, use an absolute path:

```sh
HUGO_BIN=/absolute/path/to/hugo ./scripts/hugo.sh version
```

## Preview changes

```sh
./scripts/hugo.sh server --disableFastRender
```

Open <http://localhost:1313/>. Hugo rebuilds when files change; stop it with
Ctrl+C. Add `-D` only when you want to include draft content, which production
builds omit.

## Verify a production build

```sh
./scripts/hugo.sh --environment production --gc --minify --baseURL https://murgildu.github.io/
git diff -- go.mod go.sum
```

This uses the same Hugo command as the GitHub Pages workflow and writes the
site to the ignored `public/` directory. A normal build should not change
`go.mod` or `go.sum`. The first build needs internet access to download the
pinned modules and remote assets; later builds can reuse Hugo's cache.

The project sets `ignoreVendorPaths: '**'` in `config/_default/hugo.yaml`, using
Hugo's [vendor exclusion setting](https://gohugo.io/configuration/all/#ignorevendorpaths).
An existing `_vendor/` directory is ignored, so it cannot silently replace
the versions selected by `go.mod` and verified by `go.sum`. Put theme overrides
in the project's `layouts/` or `assets/`, where they can be committed.

To inspect the dependencies actually used:

```sh
./scripts/hugo.sh mod graph
```

## Troubleshooting and updates

- **Wrong Hugo version or edition:** repeat the pinned installation above.
  Calling plain `hugo` may still select an older system package; use the wrapper.
- **Download errors:** check connectivity and the first failing URL in the
  output. Do not run `hugo mod get -u` as a build fix: it changes dependencies.
- **Build warnings:** the current pinned SEO module emits an
  `unrecognized render hook template` warning for its sitemap template. The
  build completes; review any additional warnings or errors separately.
- **Changes missing online:** check the commit and the build/deploy results in
  GitHub's Actions tab, then refresh after deployment finishes. A second workflow
  run is not a required publishing step.

To deliberately upgrade Hugo, change `.hugo-version`, install that release,
and verify a production build and local preview before committing. GitHub
Actions reads the same version file. Review theme/module updates separately
and commit any intentional changes to both `go.mod` and `go.sum`.

## Publish through GitHub Pages

The canonical repository is <https://github.com/murgildu/murgildu.github.io>.
Push reviewed changes to `main`; `.github/workflows/publish.yaml` builds and
deploys the site. Include `.hugo-version` in the commit when adding or changing
the version pin. Use `git status` to check for untracked files before committing.

Content is edited in Markdown/YAML under `content/`, either locally or through
GitHub's file editor. There is no `/admin/` CMS, Netlify login, Netlify build,
or automatic BibTeX importer. GitHub Pages serves the generated site; contact
details link directly to email and do not depend on a form service.

Existing clones may still have the former repository address. To use the
canonical SSH address:

```sh
git remote set-url origin git@github.com:murgildu/murgildu.github.io.git
```
