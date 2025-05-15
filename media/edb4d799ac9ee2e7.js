(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[41379], {

    /***/
    467611: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var vQb, c1, xQb, d1, wQb;
            vQb = function(a) {
                switch (a.type) {
                case "GROUPED_COLUMN":
                case "GROUPED_ROW":
                    return {
                        spacing: a.spacing,
                        X: a.X,
                        Wa: {
                            ...a.Wa,
                            alignment: {
                                ...a.Wa.alignment
                            }
                        }
                    };
                case "STACKED_ROW":
                case "STACKED_COLUMN":
                    return {
                        spacing: a.spacing,
                        X: a.X,
                        Wa: {
                            ...a.Wa,
                            alignment: {
                                ...a.Wa.alignment
                            }
                        },
                        Vg: {
                            ...a.Vg,
                            alignment: {
                                ...a.Wa.alignment
                            }
                        }
                    };
                case "PIE":
                case "DONUT":
                    break;
                case "LINE":
                    return {
                        Gc: a.Gc,
                        Ic: a.Ic
                    };
                case "STACKED_AREA":
                    break;
                case "SCATTERPLOT":
                case "BUBBLEPLOT":
                case "DOTPLOT":
                case "GROUPED_DOTPLOT":
                    return {
                        Kt: a.Kt,
                        Ic: a.Ic
                    };
                case "PACKED_CIRCLES":
                    break;
                case "TREEMAP":
                    break;
                case "HISTOGRAM":
                    return {
                        X: a.X
                    };
                case "RADAR":
                    return {
                        Gc: a.Gc,
                        WL: a.WL
                    };
                case "FUNNEL":
                    break;
                case "BAR_RACE":
                    return {
                        spacing: a.spacing,
                        pN: a.pN
                    };
                default:
                    throw new __c.E(a);
                }
            }
            ;
            __c.b1 = function(a, b, {fireImmediately: c=!0}={}) {
                return (d, e) => wQb( () => ({
                    $ma: a.Zj,
                    Ou: d()
                }), ({$ma: f, Ou: g}) => {
                    b === f && e(g)
                }
                , {
                    fireImmediately: c,
                    equals: (f, g) => f.$ma === g.$ma && xQb.shallow(f.Ou, g.Ou)
                })
            }
            ;
            c1 = __webpack_require__(519427);
            xQb = c1.comparer;
            d1 = c1.computed;
            wQb = c1.reaction;
            var yQb;
            yQb = class {
                static A(a) {
                    __c.Q(a, {
                        Va: d1,
                        wra: d1,
                        boa: d1
                    })
                }
                get base() {
                    var a, b;
                    return (b = (a = this.j.transition) === null || a === void 0 ? void 0 : a.base) !== null && b !== void 0 ? b : this._base
                }
                get xh() {
                    return this.j.xh
                }
                get Wb() {
                    var a, b;
                    return (b = (a = this.j.transition) === null || a === void 0 ? void 0 : a.Wb) !== null && b !== void 0 ? b : this.yja
                }
                get F() {
                    return __c.D(this.Va.F.ref)
                }
                get Va() {
                    var a;
                    const b = (a = this.j.transition) === null || a === void 0 ? void 0 : a.Wb.config.ref;
                    if (b != null && this.vra(b))
                        return b;
                    a = this.Wb.config.ref;
                    this.vra(a) && (this.KUa = a);
                    return this.KUa
                }
                get wra() {
                    return !this.vra(this.Wb.config.ref)
                }
                get Op() {
                    return this.Wb.id
                }
                get Zj() {
                    return this.Va.type
                }
                get boa() {
                    return {
                        Lc: this.Lc,
                        He: this.He,
                        fontSize: this.fontSize,
                        fontFamily: this.fontFamily,
                        fontWeight: this.fontWeight,
                        fontStyle: this.fontStyle,
                        hk: this.hk,
                        Fq: this.Fq,
                        ...vQb(this.Va)
                    }
                }
                get data() {
                    return this.base.data
                }
                get Cg() {
                    return this.base.Cg
                }
                get Sla() {
                    return this.base.Sla
                }
                get tV() {
                    return !!this.Wb.Xn
                }
                get Fq() {
                    return !this.Wb.yn
                }
                get ij() {
                    return !this.Wb.zt
                }
                get km() {
                    return this.Wb.km
                }
                get zoom() {
                    return this.j.zoom
                }
                get width() {
                    return this.j.width
                }
                get height() {
                    return this.j.height
                }
                get rotation() {
                    return this.j.rotation
                }
                get ig() {
                    return this.j.ig
                }
                get fontSize() {
                    return this.j.fontSize
                }
                get qr() {
                    return this.j.qr
                }
                get fontFamily() {
                    return this.j.fontFamily
                }
                get hk() {
                    return this.j.hk
                }
                get fontStyle() {
                    return this.j.fontStyle
                }
                get fontWeight() {
                    return this.j.fontWeight
                }
                get Ze() {
                    return this.j.Ze
                }
                get xf() {
                    return this.j.xf
                }
                get xd() {
                    return this.j.xd
                }
                get oga() {
                    return this.j.oga
                }
                get UB() {
                    return this.j.UB
                }
                get Lc() {
                    return this.j.Lc
                }
                get He() {
                    return this.j.He
                }
                get wa() {
                    return this.j.wa
                }
                get padding() {
                    return this.j.padding
                }
                get pb() {
                    return this.j.pb
                }
                get ih() {
                    return this.j.ih
                }
                get jg() {
                    return this.j.jg
                }
                get Tf() {
                    return this.j.Tf
                }
                get IQ() {
                    return this.j.IQ
                }
                get Ep() {
                    return this.j.Ep
                }
                get Gk() {
                    return this.j.Gk
                }
                get CC() {
                    return this.j.CC
                }
                get Iz() {
                    return this.j.Iz
                }
                get vc() {
                    return this.j.vc
                }
                lM() {
                    return this.j.lM()
                }
                PD() {
                    return this.j.PD()
                }
                constructor(a, b, c, d, e) {
                    this.j = a;
                    this._base = b;
                    this.yja = c;
                    this.KUa = d;
                    this.vra = e;
                    yQb.A(this)
                }
            }
            ;
            __c.RB = {};
            __c.RB.NW = yQb;
            __c.RB.Rzb = __c.b1;
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/edb4d799ac9ee2e7.js.map
