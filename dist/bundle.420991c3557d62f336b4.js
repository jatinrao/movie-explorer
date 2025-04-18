"use strict";
(self.webpackChunkmovie_explorer = self.webpackChunkmovie_explorer || []).push([
  [211],
  {
    211: (e, r, o) => {
      o.r(r), o.d(r, { default: () => l });
      var t = o(540),
        a = o(848);
      const l = ({ onSearch: e }) => {
        const [r, o] = (0, t.useState)("");
        return (0, a.jsx)("form", {
          onSubmit: (o) => {
            o.preventDefault(), e(r, 1);
          },
          className: "mb-6",
          children: (0, a.jsxs)("div", {
            className:
              "relative flex items-center xs:w-full lg:w-[40%] mx-auto",
            children: [
              (0, a.jsx)("input", {
                type: "text",
                value: r,
                onChange: (e) => o(e.target.value),
                placeholder: "Search for movies...",
                className:
                  "w-full py-4 pl-12 pr-24 bg-black/60 border border-gray-800 rounded-full text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-lg",
                "aria-label": "Search for movies",
              }),
              (0, a.jsx)("button", {
                type: "submit",
                className:
                  "absolute right-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                "aria-label": "Search",
                "aria-roledescription": "search",
                children: (0, a.jsx)("div", {
                  className: "text-gray-400",
                  children: (0, a.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: (0, a.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=bundle.420991c3557d62f336b4.js.map
