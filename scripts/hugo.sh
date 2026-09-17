#!/bin/sh
# Use the same Hugo release for previews and GitHub Pages builds.
set -eu

project_dir=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
required_version=$(cat "$project_dir/.hugo-version")

if [ -n "${HUGO_BIN:-}" ]; then
  hugo_bin=$HUGO_BIN
elif [ -x "$project_dir/.tools/hugo" ]; then
  hugo_bin="$project_dir/.tools/hugo"
else
  hugo_bin=hugo
fi

if ! command -v "$hugo_bin" >/dev/null 2>&1; then
  printf 'Hugo %s Extended is required. See %s/debugSite_howto.md for setup.\n' "$required_version" "$project_dir" >&2
  exit 1
fi

version_output=$("$hugo_bin" version)
installed_version=$(printf '%s\n' "$version_output" | sed -n 's/^hugo v\([0-9][0-9.]*\).*/\1/p')
if [ "$installed_version" != "$required_version" ]; then
  printf 'Expected Hugo %s Extended; found: %s\nSee %s/debugSite_howto.md for setup.\n' "$required_version" "$version_output" "$project_dir" >&2
  exit 1
fi

case "$version_output" in
  *+extended*) ;;
  *)
    printf 'Hugo %s must be the Extended edition. See %s/debugSite_howto.md for setup.\n' "$required_version" "$project_dir" >&2
    exit 1
    ;;
esac

cd "$project_dir"
exec "$hugo_bin" "$@"
