(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[5366], {

    /***/
    432521: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var zQb = __webpack_require__(875604).createRef;
            var AQb = __webpack_require__(519427)
              , BQb = AQb.computed
              , e1 = AQb.observable;
            var CQb;
            CQb = class {
                static A(a) {
                    __c.Q(a, {
                        yU: e1.ref,
                        Ija: e1.ref,
                        open: BQb,
                        key: e1.ref,
                        Dz: e1.ref,
                        position: BQb,
                        content: e1.ref,
                        placement: e1.ref,
                        arrow: e1.ref
                    })
                }
                get open() {
                    return this.Ija && this.Adb()
                }
                set open(a) {
                    this.Ija = a
                }
                set position(a) {
                    this.Dz = a
                }
                get position() {
                    var a;
                    const b = this.Dz
                      , c = this.j.padding;
                    var d;
                    const e = (d = (a = this.Y) === null || a === void 0 ? void 0 : a.get()) !== null && d !== void 0 ? d : 1;
                    return {
                        left: e * ((this.sd ? b.left - this.j.width : b.left) + c.left),
                        top: e * (b.top + c.top),
                        width: e * b.width,
                        height: e * b.height
                    }
                }
                constructor(a, b, c, d=__c.Ry.direction === 2) {
                    this.j = a;
                    this.Y = b;
                    this.Adb = c;
                    this.sd = d;
                    this.yU = (CQb.A(this),
                    zQb());
                    this.Ija = !1;
                    this.key = void 0;
                    this.Dz = {
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    };
                    this.content = "";
                    this.placement = "bottom-center";
                    this.arrow = !0;
                    this.Ld = 0
                }
            }
            ;
            __c.QB = {};
            __c.QB.$Ca = CQb;
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/c7f79d725756d668.js.map
