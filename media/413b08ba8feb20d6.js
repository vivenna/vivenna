(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[983], {

    /***/
    356430: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var nIb = function({text: a, fontSize: b, fontFamily: c, fontWeight: d, textAlign: e, textBaseline: f}) {
                return `${a}.${b.toFixed(1)}.${c}.${__c.vs(d)}.${e}.${f}`
            }
              , QY = function({text: a, fontSize: b, fontFamily: c, fontWeight: d, textAlign: e="start", textBaseline: f="alphabetic", Lp: g}) {
                __c.C(oIb(), "baseMeasureText should only be called from within a reactive context");
                const h = nIb({
                    text: a,
                    fontSize: b,
                    fontFamily: c,
                    fontWeight: d,
                    textAlign: e,
                    textBaseline: f
                });
                var k = PY.get(h);
                if (k)
                    return {
                        Uo: k.get(),
                        Lp: g
                    };
                k = pIb( () => {
                    g = g || qIb({
                        fontSize: b,
                        fontFamily: c,
                        textAlign: e,
                        textBaseline: f,
                        fontWeight: d
                    });
                    const l = g.measureText(a)
                      , m = Math.ceil(l.actualBoundingBoxAscent + 1)
                      , n = Math.ceil(l.actualBoundingBoxDescent + 1)
                      , p = Math.ceil(l.actualBoundingBoxLeft)
                      , q = Math.ceil(l.actualBoundingBoxRight);
                    return {
                        actualBoundingBoxAscent: m,
                        actualBoundingBoxDescent: n,
                        actualBoundingBoxLeft: p,
                        actualBoundingBoxRight: q,
                        fontBoundingBoxAscent: l.fontBoundingBoxAscent,
                        fontBoundingBoxDescent: l.fontBoundingBoxDescent,
                        height: m + n,
                        width: p + q,
                        FQ: l.width
                    }
                }
                );
                PY.set(h, k);
                rIb(k, () => {
                    PY.delete(h)
                }
                );
                return {
                    Uo: k.get(),
                    Lp: g
                }
            }
              , sIb = function({maxWidth: a, ...b}) {
                return `${nIb(b)}.${a}`
            }
              , tIb = function({text: a, fontSize: b, fontFamily: c, fontWeight: d, textAlign: e="start", textBaseline: f="alphabetic", maxWidth: g, Lp: h}) {
                __c.C(oIb(), "baseTruncateText should only be called from within a reactive context");
                const k = sIb({
                    text: a,
                    maxWidth: g,
                    fontSize: b,
                    fontWeight: d,
                    fontFamily: c,
                    textAlign: e,
                    textBaseline: f
                });
                var l = RY.get(k);
                if (l)
                    return {
                        zBa: l.get(),
                        Lp: h
                    };
                l = pIb( () => {
                    let m;
                    ({Uo: m, Lp: h} = QY({
                        text: a,
                        fontSize: b,
                        fontFamily: c,
                        fontWeight: d,
                        textAlign: e,
                        textBaseline: f,
                        Lp: h
                    }));
                    if (m.width <= g)
                        return {
                            ...m,
                            text: a
                        };
                    do {
                        a = a.substring(0, a.length - 1).trim();
                        if (!a.length)
                            return {
                                text: a,
                                width: 0,
                                height: 0,
                                actualBoundingBoxAscent: 0,
                                actualBoundingBoxDescent: 0,
                                actualBoundingBoxLeft: 0,
                                actualBoundingBoxRight: 0,
                                FQ: 0,
                                fontBoundingBoxAscent: 0,
                                fontBoundingBoxDescent: 0
                            };
                        ({Lp: h, Uo: m} = QY({
                            text: a + "\u2026",
                            fontSize: b,
                            fontFamily: c,
                            fontWeight: d,
                            textAlign: e,
                            textBaseline: f,
                            Lp: h
                        }))
                    } while (m.width > g);
                    return {
                        ...m,
                        text: a + "\u2026"
                    }
                }
                );
                RY.set(k, l);
                rIb(l, () => {
                    RY.delete(k)
                }
                );
                return {
                    zBa: l.get(),
                    Lp: h
                }
            }
              , qIb = function({fontSize: a, fontFamily: b, textAlign: c, textBaseline: d, fontWeight: e}) {
                var f = document.createElement("canvas");
                f = __c.D(f.getContext("2d"), "could not initialize measuring canvas context");
                f.font = `${e ? __c.vs(e) + " " : ""}${a}px '${b}'`;
                f.textAlign = c;
                f.textBaseline = d;
                return f
            }
              , SY = __webpack_require__(519427)
              , oIb = SY._isComputingDerivation
              , pIb = SY.computed
              , rIb = SY.onBecomeUnobserved;
            var PY, uIb, vIb, RY, wIb;
            PY = new Map;
            uIb = ({text: a, fontSize: b, fontFamily: c, fontWeight: d, textAlign: e, textBaseline: f}) => QY({
                text: a,
                fontSize: b,
                fontFamily: c,
                fontWeight: d,
                textAlign: e,
                textBaseline: f,
                Lp: void 0
            }).Uo;
            vIb = ({Mj: a, fontSize: b, fontFamily: c, fontWeight: d, textAlign: e, textBaseline: f}) => {
                let g;
                return a.map(h => {
                    h = QY({
                        text: h,
                        fontSize: b,
                        fontFamily: c,
                        fontWeight: d,
                        textAlign: e,
                        textBaseline: f,
                        Lp: g
                    });
                    ({Lp: g} = h);
                    return h.Uo
                }
                )
            }
            ;
            RY = new Map;
            __c.TY = ({text: a, maxWidth: b, fontSize: c, fontFamily: d, fontWeight: e, textAlign: f, textBaseline: g}) => tIb({
                text: a,
                maxWidth: b,
                fontSize: c,
                fontFamily: d,
                fontWeight: e,
                textAlign: f,
                textBaseline: g,
                Lp: void 0
            }).zBa;
            wIb = ({Mj: a, maxWidth: b, fontSize: c, fontFamily: d, fontWeight: e, textAlign: f, textBaseline: g}) => {
                let h;
                return a.map(k => {
                    k = tIb({
                        text: k,
                        fontSize: c,
                        fontFamily: d,
                        fontWeight: e,
                        maxWidth: b,
                        textAlign: f,
                        textBaseline: g,
                        Lp: h
                    });
                    ({Lp: h} = k);
                    return k.zBa
                }
                )
            }
            ;
            __c.Yva = {
                Jf: vIb,
                jn: wIb,
                measureText: uIb,
                Fa: {
                    measureText: uIb,
                    Jf: vIb,
                    Wg: __c.TY,
                    jn: wIb
                },
                Wg: __c.TY
            };
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/413b08ba8feb20d6.js.map
