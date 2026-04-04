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

export const LINK_REGEX = {
  MD_LINK_REGEX,
  URL_REGEX,
};
