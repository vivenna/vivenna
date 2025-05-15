(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[47608], {

    /***/
    783217: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        __web_req__(190240);
        __web_req__(582389);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var HHb, KHb, tY;
            HHb = function({Qca: a, nb: b, hb: c}) {
                return a.map( ({Yc: d, key: e, pi: f}) => tY(GHb, {
                    item: f,
                    ...d,
                    nb: b,
                    hb: c
                }, e))
            }
            ;
            __c.JHb = function({hb: a, Qca: b, M: c, xa: d, j: e}) {
                c = new __c.YW({
                    xb: {
                        enter: {
                            x: {
                                value: h => h.offset.x
                            },
                            y: {
                                value: h => h.offset.y
                            },
                            fontSize: {
                                value: h => h.fontSize
                            },
                            lineHeight: {
                                value: h => h.lineHeight
                            },
                            opacity: {
                                value: () => 0,
                                zb: !0
                            }
                        },
                        update: {
                            x: {
                                value: h => h.offset.x,
                                zb: !0
                            },
                            y: {
                                value: h => h.offset.y,
                                zb: !0
                            },
                            fontSize: {
                                value: h => h.fontSize,
                                zb: !0
                            },
                            lineHeight: {
                                value: h => h.lineHeight,
                                zb: !0
                            },
                            opacity: {
                                value: () => 1,
                                end: 0
                            }
                        },
                        exit: {
                            x: {
                                value: h => h.offset.x,
                                end: 0
                            },
                            y: {
                                value: h => h.offset.y,
                                end: 0
                            },
                            fontSize: {
                                value: h => h.fontSize,
                                end: 0
                            },
                            lineHeight: {
                                value: h => h.lineHeight,
                                end: 0
                            },
                            opacity: {
                                value: () => 0,
                                end: 0
                            }
                        },
                        Xe: {
                            x: !0,
                            y: !0,
                            fontSize: !0,
                            lineHeight: !0,
                            opacity: !1
                        }
                    },
                    data: uY( () => [b.get()]),
                    M: c,
                    j: e,
                    ne: 500,
                    Qe: 500,
                    pe: 500,
                    getKey: h => h.key,
                    tj: 0,
                    El: 0
                });
                const {yw: f} = d(c)
                  , g = __c.XW(a, new Set(["transform", "fontSize", "opacity"]));
                return IHb(h => {
                    const k = f();
                    return tY(HHb, {
                        ...h,
                        Qca: k.get(),
                        hb: g
                    })
                }
                )
            }
            ;
            KHb = function(a) {
                return {
                    fontSize: a.Rw.fontSize,
                    fontFamily: a.Rw.Ze,
                    fontWeight: a.Rw.fontWeight,
                    textAlign: "center",
                    textBaseline: "alphabetic"
                }
            }
            ;
            tY = __webpack_require__(443763).jsx;
            var LHb = __webpack_require__(875604).memo;
            var uY = __webpack_require__(519427).computed;
            var IHb = __webpack_require__(446474).Pi;
            var MHb = __c.XW("tspan", new Set(["y"]))
              , NHb = LHb( ({hb: a, item: {lines: b, rotation: c}, x: d, y: e, fontSize: f, lineHeight: g, opacity: h, textDecoration: k}) => {
                const l = uY( () => c != null ? `translate(${d.get()},${e.get()}) rotate(${c})` : `translate(${d.get()},${e.get()})`);
                return tY(a, {
                    transform: l,
                    fontSize: f,
                    opacity: h,
                    textAnchor: "middle",
                    dominantBaseline: "alphabetic",
                    textDecoration: k,
                    children: b.map( (m, n) => tY(MHb, {
                        x: 0,
                        y: uY( () => n * g.get()),
                        children: m
                    }, n))
                })
            }
            )
              , GHb = LHb(a => {
                const b = a.item.link;
                var c = a.nb;
                return (c = b ? c(b) : void 0) ? tY("a", {
                    href: c.href,
                    target: c.target,
                    rel: c.rel,
                    onClick: c.onClick,
                    children: tY(NHb, {
                        ...a,
                        textDecoration: "underline"
                    })
                }) : tY(NHb, {
                    ...a,
                    textDecoration: b ? "underline" : "none"
                })
            }
            );
            __c.OHb = class {
                gi(a, b, c=Infinity) {
                    if (this.zg) {
                        var d = __c.DHb(a.Rw, a.text);
                        d = __c.D(this.zg).QT(d, b)
                    } else
                        d = a.Za;
                    var e = d;
                    d = e.length;
                    if (d === 0)
                        return {
                            lines: [],
                            gi: [],
                            lineHeight: 0
                        };
                    var f = a.text;
                    if (d > 1)
                        if (f === "" || e.length === 0)
                            var g = [];
                        else {
                            var h = []
                              , k = 0;
                            for (g of e)
                                h.push(f.slice(k, k + g)),
                                k += g;
                            g = h
                        }
                    else
                        g = [f];
                    e = this.Fa.Jf({
                        Mj: g,
                        ...KHb(a)
                    });
                    f = e[0].fontBoundingBoxAscent + e[0].fontBoundingBoxDescent;
                    if (c === Infinity || d === 1 || f * d <= c)
                        return {
                            lines: g,
                            gi: e,
                            lineHeight: f
                        };
                    c = Math.max(0, Math.floor(c / f) - 1);
                    const {text: l, ...m} = this.Fa.Wg({
                        text: `${g[c]}${g[c + 1]}`,
                        ...KHb(a),
                        maxWidth: b
                    });
                    return {
                        lines: [...g.slice(0, c), l],
                        gi: [...e.slice(0, c), m],
                        lineHeight: f
                    }
                }
                constructor(a, b) {
                    this.Fa = a;
                    this.zg = b
                }
            }
            ;
            __c.PHb = class {
                get hk() {
                    return this.j.hk
                }
                get fontSize() {
                    return this.j.fontSize * this.qcb
                }
                get fontWeight() {
                    return this.j.fontWeight
                }
                get fontStyle() {
                    return this.j.fontStyle
                }
                get fontFamily() {
                    return this.j.fontFamily
                }
                get qr() {
                    return this.j.qr
                }
                get Ze() {
                    return this.j.Ze
                }
                constructor(a, b=1) {
                    this.j = a;
                    this.qcb = b
                }
            }
            ;
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/52d866643d5d438d.js.map
