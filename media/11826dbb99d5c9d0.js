(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[31604], {

    /***/
    726917: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(813110);
        self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
        (function(__c) {
            var EGb = __webpack_require__(443763).jsx;
            var FGb = __webpack_require__(875604).Component;
            var CX, HGb, GGb;
            CX = a => !a.defaultPrevented && ("button"in a ? a.button === 0 : !0) && !(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
            __c.DX = class extends FGb {
                render() {
                    const a = this.props.role;
                    var b = this.props.tabIndex;
                    b = b !== null && b !== void 0 ? b : a === "button" ? 0 : void 0;
                    return EGb("g", {
                        role: a,
                        "aria-label": this.props.ariaLabel,
                        tabIndex: b,
                        onKeyDown: b != null ? this.onKeyDown : void 0,
                        onMouseDown: this.Rkb,
                        onTouchStart: this.onTouchStart,
                        onMouseUp: this.Mkb,
                        onTouchEnd: this.onTouchEnd,
                        onClick: this.onClick,
                        style: __c.Vx.mk ? GGb : HGb,
                        children: this.props.children
                    })
                }
                constructor(...a) {
                    super(...a);
                    this.al = this.$k = 0;
                    this.Rkb = b => {
                        CX(b) && (this.startTime = Date.now(),
                        this.$k = b.pageX,
                        this.al = b.pageY)
                    }
                    ;
                    this.onTouchStart = b => {
                        b.touches.length === 1 && CX(b) && (this.startTime = Date.now(),
                        this.$k = b.touches[0].pageX,
                        this.al = b.touches[0].pageY)
                    }
                    ;
                    this.Mkb = b => {
                        if (CX(b)) {
                            var c = this.startTime;
                            c != null && (this.startTime = void 0,
                            !(Date.now() - c > 1E3) && Math.abs(b.pageX - this.$k) + Math.abs(b.pageY - this.al) < 5 && (b.preventDefault(),
                            this.props.onClick(b)))
                        } else
                            this.startTime = void 0
                    }
                    ;
                    this.onTouchEnd = b => {
                        if (b.touches.length === 0 && CX(b)) {
                            var c = this.startTime;
                            c != null && (this.startTime = void 0,
                            !(Date.now() - c > 1E3) && Math.abs(b.changedTouches[0].pageX - this.$k) + Math.abs(b.changedTouches[0].pageY - this.al) < 5 && (b.preventDefault(),
                            this.props.onClick(b)))
                        } else
                            this.startTime = void 0
                    }
                    ;
                    this.onClick = b => {
                        b.stopPropagationAtElementView = !0
                    }
                    ;
                    this.onKeyDown = b => {
                        if (b.key === " " || b.key === "Enter")
                            this.props.onClick(b)
                    }
                }
            }
            ;
            HGb = {
                cursor: "pointer"
            };
            GGb = {
                cursor: "pointer",
                outline: "none"
            };
        }
        ).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
    }

}])
//# sourceMappingURL=sourcemaps/11826dbb99d5c9d0.js.map
