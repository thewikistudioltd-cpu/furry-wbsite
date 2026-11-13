import Link from "next/link";

import { Tbc } from "@/components/Tbc";
import { legal, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap wrap-wide">
        <div className="footer-grid">
          <div>
            <Link className="brand" href="/">
              <img src="/branding/refpaw-icon-light.svg" alt="" width={34} height={34} />
              <b>
                refpaw<span>.</span>
              </b>
            </Link>
            <p className="footer-about">
              A collective of human artists drawing fursona art. SFW only. No AI. Every
              piece signed and credited.
            </p>
          </div>

          {Object.entries(site.footer).map(([heading, links]) => (
            <div className="footer-col" key={heading}>
              <h3>{heading}</h3>
              <ul>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>
            &copy; 2026 Refpaw. All artwork belongs to its artist and the character&rsquo;s
            owner.
          </span>
          <span>
            <Tbc>
              {`Refpaw is a trading name of ${legal.entity}, ${legal.company_number}, ${legal.address}.`}
            </Tbc>
          </span>
        </div>
      </div>
    </footer>
  );
}
