(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[26489], {

    /***/
    59534: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var XHb = function(a) {
                var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
                try {
                    const c = __c.xt(a)
                      , d = c instanceof __c.yt ? c.fs() : c;
                    return __c.ns(b, e => {
                        e = __c.xt(e);
                        e = e instanceof __c.yt ? __c.cI(e, d) : e;
                        return Math.abs(__c.Mt(e, d))
                    }
                    )
                } catch (c) {
                    if (c instanceof Error && c.message === `unrecognized color: ${b[0]}`)
                        return b[0];
                    throw c;
                }
            }
              , YHb = function(a) {
                return a.trim().split(/\s+/, 2).map(b => __c.Os(b)[0]).join("")
            }
              , aIb = function(a="") {
                a = ZHb(a);
                a = Math.floor(a() * $Hb.length);
                return $Hb[a]
            }
              , bIb = __webpack_require__(875604)
              , cIb = bIb.memo
              , dIb = bIb.useId;
            var ZHb = __webpack_require__(503216);
            var eIb = __webpack_require__(443763)
              , NY = eIb.jsx
              , fIb = eIb.jsxs;
            var gIb = __webpack_require__
              , hIb = gIb(993864)
              , OY = gIb.n_x(hIb)();
            __c.iIb = {
                xxsmall: 2,
                xsmall: 3,
                small: 4,
                medium: 5,
                large: 6,
                xlarge: 8,
                xxlarge: 10,
                xxxlarge: 20
            };
            var $Hb = ["rgb(0, 126, 182)", "rgb(248, 72, 86)", "rgb(251, 190, 40)", "rgb(68, 133, 25)", "rgb(125, 42, 232)"].map(a => {
                try {
                    return __c.zt(__c.st(a))
                } catch (b) {
                    return "#8e8e8e"
                }
            }
            );
            var jIb = cIb(a => {
                const {name: b, borderColor: c, backgroundColor: d, TQ: e, role: f, ariaLabel: g, className: h, style: k, shape: l="circle", ...m} = a;
                if (d) {
                    a = __c.xt(d);
                    var n = a instanceof __c.yt ? __c.At(a) : __c.zt(a)
                } else
                    n = e ? aIb(e) : "#8e8e8e";
                var p = dIb();
                switch (l) {
                case "circle":
                    a = NY("defs", {
                        children: NY("clipPath", {
                            id: p,
                            children: NY("circle", {
                                id: `${p}-path`,
                                cx: "50%",
                                cy: "50%",
                                r: "50%"
                            })
                        })
                    });
                    break;
                case "square":
                    a = NY("defs", {
                        children: NY("clipPath", {
                            id: p,
                            children: NY("rect", {
                                id: `${p}-path`,
                                width: "100%",
                                height: "100%"
                            })
                        })
                    });
                    break;
                default:
                    throw new __c.E(l);
                }
                switch (l) {
                case "circle":
                    p = NY("circle", {
                        cx: "50%",
                        cy: "50%",
                        fill: n,
                        shapeRendering: "geometricPrecision",
                        clipPath: `url(#${p})`,
                        stroke: c,
                        className: OY("yCT70Q", {
                            _2LVP_g: c
                        })
                    });
                    break;
                case "square":
                    p = NY("rect", {
                        width: "100%",
                        height: "100%",
                        fill: n,
                        shapeRendering: "geometricPrecision",
                        clipPath: `url(#${p})`,
                        stroke: c,
                        className: OY("cUFFRA", {
                            _2LVP_g: c
                        })
                    });
                    break;
                default:
                    throw new __c.E(l);
                }
                n = XHb(n);
                return NY("span", {
                    role: f,
                    "aria-label": g,
                    className: OY("VaW8_A", {
                        cUFFRA: l === "square"
                    }),
                    style: {
                        "--pDK9Gw": n
                    },
                    ...m,
                    children: fIb("svg", {
                        className: h,
                        style: k,
                        children: [a, p, NY("text", {
                            x: "50%",
                            y: "50%",
                            "aria-hidden": "true",
                            textAnchor: "middle",
                            fill: n,
                            fontWeight: "500",
                            fontSize: "50%",
                            dominantBaseline: "central",
                            letterSpacing: "0.01rem",
                            dy: "-0.04em",
                            children: YHb(b).toUpperCase()
                        })]
                    })
                })
            }
            );
            var kIb = __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
            var lIb = ({borderColor: a, rUa: b, ariaLabel: c, className: d, style: e, role: f, ...g}) => NY("span", {
                className: OY(d, {
                    JwH6AA: a,
                    QJpRHw: !a
                }),
                style: {
                    backgroundImage: `url(${b})`,
                    borderColor: a && `${a}`,
                    ...e
                },
                role: f,
                "aria-label": f === "img" ? c : void 0,
                ...g
            });
            __c.mIb = ({name: a, M5a: b, ariaLabel: c, TQ: d, backgroundColor: e, borderColor: f, yq: g, className: h, style: k, shape: l="circle", ...m}) => {
                h = OY("n8XGZg", "f4qJng fs-hide", h, {
                    P3N3Pw: l === "square"
                });
                b = b || "presentation";
                return g ? NY(lIb, {
                    className: h,
                    style: k,
                    borderColor: f,
                    rUa: g,
                    ariaLabel: c,
                    role: b,
                    ...m
                }) : a ? NY(jIb, {
                    className: h,
                    style: k,
                    borderColor: f,
                    name: a,
                    shape: l,
                    TQ: d,
                    backgroundColor: e,
                    role: b,
                    ariaLabel: c,
                    ...m
                }) : NY(lIb, {
                    className: h,
                    style: k,
                    borderColor: f,
                    rUa: kIb,
                    ariaLabel: c,
                    role: b,
                    ...m
                })
            }
            ;
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/4a7076d6f5a340ce.js.map
