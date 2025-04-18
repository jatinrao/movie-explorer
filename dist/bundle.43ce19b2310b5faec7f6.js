"use strict";
(self.webpackChunkmovie_explorer = self.webpackChunkmovie_explorer || []).push([
  [128],
  {
    128: (e, t, o) => {
      o.r(t), o.d(t, { default: () => r }), o(540);
      var s = o(848);
      const l = ({
          movie: e,
          onClick: t,
          isFavorite: o,
          toggleFavorite: l,
        }) => {
          const r =
            "N/A" !== e.Poster ? e.Poster : "https://placehold.co/300x450";
          return (0, s.jsxs)("div", {
            className:
              "relative rounded overflow-hidden shadow-lg cursor-pointer w-full hover:scale-105",
            style: { aspectRatio: "2/3" },
            onClick: t,
            children: [
              (0, s.jsx)("div", {
                className: "absolute inset-0 ",
                children: (0, s.jsx)("img", {
                  src: r,
                  alt: `${e.Title} poster`,
                  className: "w-full h-full object-cover",
                }),
              }),
              (0, s.jsx)("div", {
                className:
                  "absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90",
              }),
              (0, s.jsx)("button", {
                onClick: (e) => {
                  e.stopPropagation(), l(e);
                },
                className:
                  "absolute top-2 right-2 p-2 bg-white bg-opacity-80 rounded-full shadow-md z-10",
                "aria-label": o ? "Remove from favorites" : "Add to favorites",
                children: (0, s.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: o ? "currentColor" : "none",
                  stroke: "currentColor",
                  className:
                    "w-6 h-6 " + (o ? "text-red-500" : "text-gray-600"),
                  children: (0, s.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                  }),
                }),
              }),
              (0, s.jsxs)("div", {
                className: "absolute bottom-0 w-full p-4 text-white",
                children: [
                  (0, s.jsx)("h3", {
                    className: "font-bold text-lg mb-1 truncate",
                    title: e.Title,
                    children: e.Title,
                  }),
                  (0, s.jsx)("p", {
                    className: "text-gray-300",
                    children: e.Year,
                  }),
                ],
              }),
            ],
          });
        },
        r = ({
          movies: e,
          onMovieSelect: t,
          isFavorite: o,
          toggleFavorite: r,
        }) =>
          e && 0 !== e.length
            ? (0, s.jsx)("div", {
                className:
                  "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8",
                children: e.map((e) =>
                  (0, s.jsx)(
                    l,
                    {
                      movie: e,
                      onClick: () => t(e),
                      isFavorite: o(e.imdbID),
                      toggleFavorite: (t) => {
                        t.stopPropagation(), r(e);
                      },
                    },
                    e.imdbID
                  )
                ),
              })
            : null;
    },
  },
]);
//# sourceMappingURL=bundle.43ce19b2310b5faec7f6.js.map
