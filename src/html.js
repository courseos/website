import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          CourseOS - Customizable, Self-hosted Online Course Platform
        </title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          className="gradient leading-relaxed tracking-wide flex flex-col"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              /* Toggle dropdown list */
              /* https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8 */

              var navMenuDiv = document.getElementById("nav-content");
              var navMenu = document.getElementById("nav-toggle");

              document.onclick = check;
              function check(e) {
                var target = (e && e.target) || (event && event.srcElement);

                //Nav Menu
                if (!checkParent(target, navMenuDiv)) {
                  // click NOT on the menu
                  if (checkParent(target, navMenu)) {
                    // click on the link
                    if (navMenuDiv.classList.contains("hidden")) {
                      navMenuDiv.classList.remove("hidden");
                    } else {
                      navMenuDiv.classList.add("hidden");
                    }
                  } else {
                    // click both outside link and outside menu, hide menu
                    navMenuDiv.classList.add("hidden");
                  }
                }
              }
              function checkParent(t, elm) {
                while (t.parentNode) {
                  if (t == elm) {
                    return true;
                  }
                  t = t.parentNode;
                }
                return false;
              }
            `
          }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
