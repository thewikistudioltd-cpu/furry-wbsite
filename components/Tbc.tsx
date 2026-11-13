import { Fragment, type ReactNode } from "react";

/**
 * Marks values that are still a business decision.
 *
 * Pass a string containing [square bracketed] placeholders and each one is
 * wrapped so it is visible during review:
 *
 *     <Tbc>{`Ref sheets start at $${vars.price_sheet_simple}.`}</Tbc>
 *
 * When every value in site.json is confirmed, delete the .tbc rule in
 * globals.css and this component becomes a no-op you can drop.
 */

export function Tbc({ children }: { children: string }): ReactNode {
  // built per call: a shared /g regex carries lastIndex between calls
  const placeholder = /\[([^[\]]{1,80})\]/g;
  const out: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = placeholder.exec(children)) !== null) {
    if (match.index > last) out.push(children.slice(last, match.index));
    out.push(
      <span className="tbc" title="To confirm before launch" key={i++}>
        {match[1]}
      </span>,
    );
    last = match.index + match[0].length;
  }
  if (last < children.length) out.push(children.slice(last));

  return <Fragment>{out}</Fragment>;
}
