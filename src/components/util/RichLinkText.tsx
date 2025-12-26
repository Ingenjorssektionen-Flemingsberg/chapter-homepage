import * as React from "react";
import { Link } from "@mui/material";

/**
 * Matches markdown links like: [KTH](https://kth.se)
 * - Group 1: link text
 * - Group 2: href
 */
const MD_LINK_REGEX = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

/**
 * Matches raw URLs like: https://example.com/foo
 * (Stops at whitespace; you can make this stricter if you want.)
 */
const URL_REGEX = /\bhttps?:\/\/[^\s]+/g;

type RichLinkOptions = {
  /**
   * Controls whether raw URLs are shown as the URL itself,
   * or optionally a shorter label.
   */
  rawUrlLabel?: (url: string) => React.ReactNode;
  linkSx?: Record<string, any>;
};

function ExternalMuiLink({
  href,
  children,
  sx,
}: Readonly<{
  href: string;
  children: React.ReactNode;
  sx?: Record<string, any>;
}>) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ wordBreak: "break-word", ...sx }}
    >
      {children}
    </Link>
  );
}

function isSafeHttpUrl(href: string): boolean {
  // Defensive: only allow http(s) since you asked for https?://
  // (Prevents accidental javascript: / data: etc.)
  return /^https?:\/\/\S+$/i.test(href);
}

/**
 * Step 1: Split input into tokens of either:
 * - plain text
 * - markdown link ([text](url))
 */
function tokenizeMarkdownLinks(input: string) {
  const tokens: Array<
    | { type: "text"; value: string }
    | { type: "mdlink"; text: string; href: string }
  > = [];

  let lastIndex = 0;
  for (const match of input.matchAll(MD_LINK_REGEX)) {
    const full = match[0];
    const text = match[1] ?? "";
    const href = match[2] ?? "";
    const index = match.index ?? 0;

    if (index > lastIndex) {
      tokens.push({ type: "text", value: input.slice(lastIndex, index) });
    }

    tokens.push({ type: "mdlink", text, href });
    lastIndex = index + full.length;
  }

  if (lastIndex < input.length) {
    tokens.push({ type: "text", value: input.slice(lastIndex) });
  }

  return tokens;
}

/**
 * Step 2: For text tokens, split further by raw URLs.
 */
function renderTextWithRawUrls(
  text: string,
  keyPrefix: string,
  opts?: RichLinkOptions
): React.ReactNode[] {
  const parts = text.split(URL_REGEX);
  const matches = text.match(URL_REGEX) ?? [];

  const out: React.ReactNode[] = [];

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part) out.push(<span key={`${keyPrefix}-t-${i}`}>{part}</span>);

    const url = matches[i];
    if (url) {
      out.push(
        <ExternalMuiLink
          key={`${keyPrefix}-u-${i}`}
          href={url}
          sx={opts?.linkSx}
        >
          {opts?.rawUrlLabel ? opts.rawUrlLabel(url) : url}
        </ExternalMuiLink>
      );
    }
  }

  return out;
}

/**
 * Main: renders markdown links first, then raw URLs.
 */
export function renderTextWithLinks(
  input: string,
  opts?: RichLinkOptions
): React.ReactNode {
  if (!input) return null;

  const tokens = tokenizeMarkdownLinks(input);

  const nodes: React.ReactNode[] = [];

  tokens.forEach((tok, i) => {
    const keyPrefix = `rt-${i}`;

    if (tok.type === "mdlink") {
      const safe = isSafeHttpUrl(tok.href);
      if (!safe) {
        // If somehow unsafe, fall back to plain text.
        nodes.push(
          <span key={`${keyPrefix}-unsafe`}>
            [{tok.text}]({tok.href})
          </span>
        );
        return;
      }

      nodes.push(
        <ExternalMuiLink
          key={`${keyPrefix}-md`}
          href={tok.href}
          sx={opts?.linkSx}
        >
          {tok.text}
        </ExternalMuiLink>
      );
      return;
    }

    // Plain text: now linkify raw URLs inside it
    nodes.push(...renderTextWithRawUrls(tok.value, keyPrefix, opts));
  });

  return <>{nodes}</>;
}

export const LINK_REGEX = {
  MD_LINK_REGEX,
  URL_REGEX,
};
