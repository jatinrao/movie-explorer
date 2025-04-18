"use strict";
(self.webpackChunkmovie_explorer = self.webpackChunkmovie_explorer || []).push([
  [203],
  {
    203: (e, l, s) => {
      s.r(l), s.d(l, { default: () => u });
      var r = s(540),
        a = s(274),
        i = s(848);
      const t = ({ onClose: e }) =>
          (0, i.jsx)(a.K0, {
            onClick: e,
            label: "Close",
            className: "hover:bg-gray-200 bg-white  text-[#000] shadow-sm",
            icon: (0, i.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-6 w-6",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: (0, i.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12",
              }),
            }),
          }),
        o = ({ isFavorite: e, toggleFavorite: l }) =>
          (0, i.jsx)(a.K0, {
            onClick: (e) => {
              e.stopPropagation(), l();
            },
            label: e ? "Remove from favorites" : "Add to favorites",
            className: "bg-white hover:bg-gray-100 shadow-md",
            icon: (0, i.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: e ? "currentColor" : "none",
              stroke: "currentColor",
              className: "w-6 h-6 " + (e ? "text-red-500" : "text-gray-500"),
              children: (0, i.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              }),
            }),
          }),
        n = ({ rating: e }) =>
          e <= 0
            ? null
            : (0, i.jsxs)("div", {
                className:
                  "bg-yellow-400 text-black font-bold px-3 py-1 rounded-full flex items-center shadow-md",
                children: [
                  (0, i.jsx)("svg", {
                    className: "w-5 h-5 mr-1",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                      d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
                    }),
                  }),
                  (0, i.jsxs)("span", { children: [e, "/10"] }),
                ],
              }),
        d = ({ label: e, value: l, renderValue: s }) =>
          (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)(a.dh, { children: e }),
              s ? s(l || "N/A") : (0, i.jsx)(a.S0, { children: l }),
            ],
          }),
        c = ({ genres: e }) =>
          e && "N/A" !== e
            ? (0, i.jsx)("div", {
                className: "flex flex-wrap gap-1",
                children: e
                  .split(", ")
                  .map((e, l) => (0, i.jsx)(a.vw, { children: e }, l)),
              })
            : (0, i.jsx)(a.S0, { children: "N/A" }),
        x = ({ awards: e }) => {
          if (!e || "N/A" === e) return null;
          const l =
            e.toLowerCase().includes("oscar") ||
            e.toLowerCase().includes("academy award");
          return (0, i.jsx)("div", {
            className:
              "mb-4 p-3 bg-gradient-to-r from-amber-50 to-yellow-100 rounded-lg border border-yellow-200",
            children: (0, i.jsxs)("div", {
              className: "flex items-center",
              children: [
                l
                  ? (0, i.jsxs)("svg", {
                      className: "w-6 h-6 text-yellow-600 mr-2",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                      children: [
                        (0, i.jsx)("path", {
                          d: "M18 10c0 3.31-2.69 6-6 6s-6-2.69-6-6h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2zm-6-9c-7.73 0-9 1.36-9 3v2.5c0 .64.36 1.22.92 1.5.56.28 1.08.5 1.08.5v-2c1.92-1.66 7-2 7-2s5.08.34 7 2v2s.52-.22 1.08-.5c.56-.28.92-.86.92-1.5V4c0-1.64-1.27-3-9-3z",
                        }),
                        (0, i.jsx)("path", {
                          d: "M16 16.5l-4 2-4-2 .74-3.44 3.26 1.44 3.26-1.44.74 3.44z",
                        }),
                      ],
                    })
                  : (0, i.jsx)("svg", {
                      className: "w-6 h-6 text-yellow-600 mr-2",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                      children: (0, i.jsx)("path", {
                        d: "M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z",
                      }),
                    }),
                (0, i.jsx)("p", {
                  className: "font-medium text-gray-800",
                  children: e,
                }),
              ],
            }),
          });
        },
        h = ({
          posterUrl: e,
          title: l,
          isFavorite: s,
          toggleFavorite: r,
          imdbRating: a,
          isLoading: t = !1,
          className: d = "",
        }) =>
          t
            ? (0, i.jsx)("div", {
                className: `w-full h-96 bg-gray-200 animate-pulse rounded-lg ${d}`,
              })
            : (0, i.jsxs)("div", {
                className: `relative overflow-hidden rounded-lg shadow-lg ${d}`,
                children: [
                  (0, i.jsx)("img", {
                    src: e,
                    alt: `${l} poster`,
                    className:
                      "w-full h-auto rounded-lg transition-transform duration-200 hover:scale-105",
                  }),
                  (0, i.jsx)("div", {
                    className: "absolute top-2 right-2",
                    children: (0, i.jsx)(o, {
                      isFavorite: s,
                      toggleFavorite: r,
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "absolute bottom-2 left-2",
                    children: (0, i.jsx)(n, { rating: a }),
                  }),
                ],
              }),
        m = ({ rating: e }) => {
          let l = null,
            s = "bg-gray-200",
            r = "text-gray-800";
          return (
            "Internet Movie Database" === e.Source
              ? ((l = (0, i.jsxs)("svg", {
                  className: "w-5 h-5 mr-2",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  children: [
                    (0, i.jsx)("path", {
                      d: "M14.31 9.588v.005c-.077-.048-.227-.07-.42-.07v4.815c.27 0 .44-.023.488-.048.146-.048.22-.195.22-.42V10.08c0-.226-.074-.374-.22-.422l-.068-.07z",
                      fill: "#F5C518",
                    }),
                    (0, i.jsx)("path", {
                      d: "M22.416 0H1.62C.742 0 .041.742.041 1.62v20.796c0 .877.701 1.578 1.579 1.578h20.797c.878 0 1.579-.701 1.579-1.578V1.62c0-.878-.701-1.579-1.58-1.579zM4.998 15.626h-1.96V8.26h1.96v7.366zm7.225-.6c0 .309-.268.55-.65.55H9.852c-.347 0-.551-.204-.551-.498v-5.02c0-.347.204-.552.551-.552h1.72c.383 0 .65.241.65.552v5.02l-.55-.051zm6.294.6h-1.72l-.13-1.022h-1.21l-.13 1.022h-1.694l1.337-7.366h2.288l1.26 7.366zm3.104 0h-1.96V8.26h1.96v7.366z",
                      fill: "#F5C518",
                    }),
                    (0, i.jsx)("path", {
                      d: "M15.663 10.027l-.237 1.771h.787l-.236-1.771-.157-.94h-.001l-.156.94z",
                      fill: "#F5C518",
                    }),
                  ],
                })),
                (s = "bg-yellow-100"),
                (r = "text-yellow-800"))
              : "Rotten Tomatoes" === e.Source
                ? ((l = (0, i.jsx)("svg", {
                    className: "w-5 h-5 mr-2",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: (0, i.jsx)("path", {
                      d: "M16.78 15.28l-5.14-5.14 5.14-5.14a.5.5 0 00-.7-.7l-5.14 5.14-5.14-5.14a.5.5 0 00-.7.7l5.14 5.14-5.14 5.14a.5.5 0 00.7.7l5.14-5.14 5.14 5.14a.5.5 0 00.7-.7z",
                      fill: "#FF5733",
                    }),
                  })),
                  (s = "bg-red-100"),
                  (r = "text-red-800"))
                : "Metacritic" === e.Source &&
                  ((l = (0, i.jsxs)("svg", {
                    className: "w-5 h-5 mr-2",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: [
                      (0, i.jsx)("path", {
                        d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z",
                        fill: "#4C6EF5",
                      }),
                      (0, i.jsx)("path", {
                        d: "M12 17a5 5 0 100-10 5 5 0 000 10z",
                        fill: "white",
                      }),
                    ],
                  })),
                  (s = "bg-blue-100"),
                  (r = "text-blue-800")),
            (0, i.jsxs)("div", {
              className: `flex items-center justify-between p-2 rounded-lg ${s} hover:brightness-95 transition-all cursor-pointer`,
              children: [
                (0, i.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    l,
                    (0, i.jsx)("span", {
                      className: `font-medium ${r}`,
                      children: e.Source,
                    }),
                  ],
                }),
                (0, i.jsx)("span", {
                  className: `font-bold ${r}`,
                  children: e.Value,
                }),
              ],
            })
          );
        },
        v = ({ ratings: e }) =>
          e && e.length
            ? (0, i.jsxs)("div", {
                className: "mt-6 bg-gray-50 p-4 rounded-lg",
                children: [
                  (0, i.jsx)(a._x, {
                    icon: (0, i.jsx)("svg", {
                      className: "w-5 h-5 text-gray-700",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                      children: (0, i.jsx)("path", {
                        d: "M12 15.39l-3.76 2.27.99-4.28-3.32-2.88 4.38-.37 1.71-4.04 1.71 4.04 4.38.37-3.32 2.88.99 4.28z",
                      }),
                    }),
                    children: "Ratings",
                  }),
                  (0, i.jsx)("div", {
                    className: "space-y-3",
                    children: e.map((e, l) => (0, i.jsx)(m, { rating: e }, l)),
                  }),
                ],
              })
            : null,
        g = ({ movie: e }) =>
          (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)("h2", {
                className: "text-3xl font-bold mb-2 text-gray-800",
                children: e?.Title,
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-wrap gap-2 mb-4",
                children: [
                  (0, i.jsx)(a.Ex, { children: e?.Year }),
                  (0, i.jsx)(a.Ex, { children: e?.Runtime }),
                  (0, i.jsx)(a.Ex, { children: e?.Rated }),
                ],
              }),
              (0, i.jsx)(x, { awards: e?.Awards }),
              (0, i.jsxs)("div", {
                className: "mb-6",
                children: [
                  (0, i.jsx)(a._x, { icon: null, children: "Plot" }),
                  (0, i.jsx)("p", {
                    className: "text-gray-700 leading-relaxed",
                    children: e?.Plot || "No plot available",
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
                children: [
                  (0, i.jsx)(d, {
                    label: "Director",
                    value: e?.Director,
                    renderValue: null,
                  }),
                  (0, i.jsx)(d, {
                    label: "Genre",
                    value: e?.Genre,
                    renderValue: (e) => (0, i.jsx)(c, { genres: e }),
                  }),
                  (0, i.jsx)(d, {
                    label: "Actors",
                    value: e?.Actors,
                    renderValue: null,
                  }),
                  (0, i.jsx)(d, {
                    label: "Released",
                    value: e?.Released,
                    renderValue: null,
                  }),
                ],
              }),
              (0, i.jsx)(v, { ratings: e?.Ratings }),
            ],
          }),
        u = ({
          movie: e,
          onClose: l,
          isFavorite: s,
          toggleFavorite: o,
          isLoading: n = !1,
        }) => {
          const [d, c] = (0, r.useState)(!1);
          (0, r.useEffect)(() => {
            c(!0);
            const e = (e) => {
              "Escape" === e.key && x();
            };
            return (
              window.addEventListener("keydown", e),
              () => {
                window.removeEventListener("keydown", e);
              }
            );
          }, []);
          const x = () => {
              c(!1), setTimeout(l, 300);
            },
            m = "N/A" !== e?.Poster ? e?.Poster : "/api/placeholder/300/450",
            v = e?.imdbRating ? parseFloat(e.imdbRating) : 0;
          return n
            ? (0, i.jsx)("div", {
                className:
                  "fixed inset-0 flex items-center justify-center p-4 z-50 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 animated-background-quick",
                children: (0, i.jsx)("div", {
                  className:
                    "bg-white rounded-lg max-w-[72rem] min-w-[80vw] w-full max-h-[90vh] min-h-[90vh] overflow-hidden p-8 text-center",
                  children: (0, i.jsx)(a.aH, {}),
                }),
              })
            : (0, i.jsx)("div", {
                className:
                  "fixed inset-0 flex items-center justify-center p-4 z-50 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 animated-background-quick transition-opacity duration-300 " +
                  (d ? "opacity-100" : "opacity-0"),
                onClick: x,
                children: (0, i.jsxs)("div", {
                  className:
                    "relative bg-white rounded-lg max-w-[72rem] w-full max-h-[90vh] overflow-hidden z-10 shadow-xl transition-transform duration-300 " +
                    (d ? "scale-100" : "scale-95"),
                  onClick: (e) => e.stopPropagation(),
                  children: [
                    (0, i.jsx)("div", {
                      className: "absolute top-4 right-4 z-20",
                      children: (0, i.jsx)(t, { onClose: x }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "h-full md:flex",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "md:w-1/3 md:sticky md:top-0 md:self-start md:h-screen p-6",
                          children: (0, i.jsx)(h, {
                            posterUrl: m,
                            title: e?.Title || "Movie",
                            isFavorite: s,
                            toggleFavorite: o,
                            imdbRating: v,
                            isLoading: n,
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "md:w-2/3 p-6 overflow-y-auto max-h-[90vh]",
                          children: (0, i.jsx)(g, { movie: e }),
                        }),
                      ],
                    }),
                  ],
                }),
              });
        };
    },
  },
]);
//# sourceMappingURL=bundle.03eb948aae73e7eb11d0.js.map
