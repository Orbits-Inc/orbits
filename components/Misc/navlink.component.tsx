import { useRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";

interface NavLink {
  children: JSX.Element;
  activeClassName: string;
  href: string;
  [props: string]: any;
}

const NavLink = ({ children, activeClassName, href, ...props }: NavLink) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || "";

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link href={href} {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default NavLink;
