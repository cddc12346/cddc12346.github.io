/*!
 * 
 * 	elfsight.com
 *
 * 	Copyright (c) 2024 Elfsight, LLC. ALL RIGHTS RESERVED
 *
 */
"use strict";
(self.webpackChunkelfsight_app_all_in_one_reviews = self.webpackChunkelfsight_app_all_in_one_reviews || []).push([
    [144], {
        6144: (e, t, s) => {
            s.r(t), s.d(t, {
                Carousel: () => ct,
                CarouselArrowControlContainer: () => xt,
                CarouselContainer: () => ut,
                CarouselInner: () => ht,
                CarouselNavigationControlContainer: () => At,
                CarouselOuter: () => ft,
                CarouselSwiperWrapper: () => St,
                default: () => pt
            });
            var i = s(3728),
                r = s.n(i),
                n = s(1504),
                a = s(8640),
                o = s(6776);

            function l(e) {
                return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object
            }

            function d(e = {}, t = {}) {
                Object.keys(t).forEach((s => {
                    "undefined" === typeof e[s] ? e[s] = t[s] : l(t[s]) && l(e[s]) && Object.keys(t[s]).length > 0 && d(e[s], t[s])
                }))
            }
            const c = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function p() {
                const e = "undefined" !== typeof document ? document : {};
                return d(e, c), e
            }
            const u = {
                document: c,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" !== typeof setTimeout && clearTimeout(e)
                }
            };

            function f() {
                const e = "undefined" !== typeof window ? window : {};
                return d(e, u), e
            }
            class h extends Array {
                constructor(e) {
                    "number" === typeof e ? super(e) : (super(...e || []), function(e) {
                        const t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: () => t,
                            set(e) {
                                t.__proto__ = e
                            }
                        })
                    }(this))
                }
            }

            function m(e = []) {
                const t = [];
                return e.forEach((e => {
                    Array.isArray(e) ? t.push(...m(e)) : t.push(e)
                })), t
            }

            function g(e, t) {
                return Array.prototype.filter.call(e, t)
            }

            function w(e, t) {
                const s = f(),
                    i = p();
                let r = [];
                if (!t && e instanceof h) return e;
                if (!e) return new h(r);
                if ("string" === typeof e) {
                    const s = e.trim();
                    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                        let e = "div";
                        0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                        const t = i.createElement(e);
                        t.innerHTML = s;
                        for (let e = 0; e < t.childNodes.length; e += 1) r.push(t.childNodes[e])
                    } else r = function(e, t) {
                        if ("string" !== typeof e) return [e];
                        const s = [],
                            i = t.querySelectorAll(e);
                        for (let e = 0; e < i.length; e += 1) s.push(i[e]);
                        return s
                    }(e.trim(), t || i)
                } else if (e.nodeType || e === s || e === i) r.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof h) return e;
                    r = e
                }
                return new h(function(e) {
                    const t = [];
                    for (let s = 0; s < e.length; s += 1) - 1 === t.indexOf(e[s]) && t.push(e[s]);
                    return t
                }(r))
            }
            w.fn = h.prototype;
            const v = "resize scroll".split(" ");

            function b(e) {
                return function(...t) {
                    if ("undefined" === typeof t[0]) {
                        for (let t = 0; t < this.length; t += 1) v.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : w(this[t]).trigger(e));
                        return this
                    }
                    return this.on(e, ...t)
                }
            }
            b("click"), b("blur"), b("focus"), b("focusin"), b("focusout"), b("keyup"), b("keydown"), b("keypress"), b("submit"), b("change"), b("mousedown"), b("mousemove"), b("mouseup"), b("mouseenter"), b("mouseleave"), b("mouseout"), b("mouseover"), b("touchstart"), b("touchend"), b("touchmove"), b("resize"), b("scroll");
            const y = {
                addClass: function(...e) {
                    const t = m(e.map((e => e.split(" "))));
                    return this.forEach((e => {
                        e.classList.add(...t)
                    })), this
                },
                removeClass: function(...e) {
                    const t = m(e.map((e => e.split(" "))));
                    return this.forEach((e => {
                        e.classList.remove(...t)
                    })), this
                },
                hasClass: function(...e) {
                    const t = m(e.map((e => e.split(" "))));
                    return g(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
                },
                toggleClass: function(...e) {
                    const t = m(e.map((e => e.split(" "))));
                    this.forEach((e => {
                        t.forEach((t => {
                            e.classList.toggle(t)
                        }))
                    }))
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" === typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let s = 0; s < this.length; s += 1)
                        if (2 === arguments.length) this[s].setAttribute(e, t);
                        else
                            for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
                    return this
                },
                removeAttr: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                transform: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this
                },
                transition: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" !== typeof e ? `${e}ms` : e;
                    return this
                },
                on: function(...e) {
                    let [t, s, i, r] = e;

                    function n(e) {
                        const t = e.target;
                        if (!t) return;
                        const r = e.target.dom7EventData || [];
                        if (r.indexOf(e) < 0 && r.unshift(e), w(t).is(s)) i.apply(t, r);
                        else {
                            const e = w(t).parents();
                            for (let t = 0; t < e.length; t += 1) w(e[t]).is(s) && i.apply(e[t], r)
                        }
                    }

                    function a(e) {
                        const t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t)
                    }
                    "function" === typeof e[1] && ([t, i, r] = e, s = void 0), r || (r = !1);
                    const o = t.split(" ");
                    let l;
                    for (let e = 0; e < this.length; e += 1) {
                        const t = this[e];
                        if (s)
                            for (l = 0; l < o.length; l += 1) {
                                const e = o[l];
                                t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                                    listener: i,
                                    proxyListener: n
                                }), t.addEventListener(e, n, r)
                            } else
                                for (l = 0; l < o.length; l += 1) {
                                    const e = o[l];
                                    t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                                        listener: i,
                                        proxyListener: a
                                    }), t.addEventListener(e, a, r)
                                }
                    }
                    return this
                },
                off: function(...e) {
                    let [t, s, i, r] = e;
                    "function" === typeof e[1] && ([t, i, r] = e, s = void 0), r || (r = !1);
                    const n = t.split(" ");
                    for (let e = 0; e < n.length; e += 1) {
                        const t = n[e];
                        for (let e = 0; e < this.length; e += 1) {
                            const n = this[e];
                            let a;
                            if (!s && n.dom7Listeners ? a = n.dom7Listeners[t] : s && n.dom7LiveListeners && (a = n.dom7LiveListeners[t]), a && a.length)
                                for (let e = a.length - 1; e >= 0; e -= 1) {
                                    const s = a[e];
                                    i && s.listener === i || i && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === i ? (n.removeEventListener(t, s.proxyListener, r), a.splice(e, 1)) : i || (n.removeEventListener(t, s.proxyListener, r), a.splice(e, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function(...e) {
                    const t = f(),
                        s = e[0].split(" "),
                        i = e[1];
                    for (let r = 0; r < s.length; r += 1) {
                        const n = s[r];
                        for (let s = 0; s < this.length; s += 1) {
                            const r = this[s];
                            if (t.CustomEvent) {
                                const s = new t.CustomEvent(n, {
                                    detail: i,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                r.dom7EventData = e.filter(((e, t) => t > 0)), r.dispatchEvent(s), r.dom7EventData = [], delete r.dom7EventData
                            }
                        }
                    }
                    return this
                },
                transitionEnd: function(e) {
                    const t = this;
                    return e && t.on("transitionend", (function s(i) {
                        i.target === this && (e.call(this, i), t.off("transitionend", s))
                    })), this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function() {
                    const e = f();
                    return this[0] ? e.getComputedStyle(this[0], null) : {}
                },
                offset: function() {
                    if (this.length > 0) {
                        const e = f(),
                            t = p(),
                            s = this[0],
                            i = s.getBoundingClientRect(),
                            r = t.body,
                            n = s.clientTop || r.clientTop || 0,
                            a = s.clientLeft || r.clientLeft || 0,
                            o = s === e ? e.scrollY : s.scrollTop,
                            l = s === e ? e.scrollX : s.scrollLeft;
                        return {
                            top: i.top + o - n,
                            left: i.left + l - a
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    const s = f();
                    let i;
                    if (1 === arguments.length) {
                        if ("string" !== typeof e) {
                            for (i = 0; i < this.length; i += 1)
                                for (const t in e) this[i].style[t] = e[t];
                            return this
                        }
                        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" === typeof e) {
                        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    return e ? (this.forEach(((t, s) => {
                        e.apply(t, [t, s])
                    })), this) : this
                },
                html: function(e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].innerHTML : null;
                    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].textContent.trim() : null;
                    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function(e) {
                    const t = f(),
                        s = p(),
                        i = this[0];
                    let r, n;
                    if (!i || "undefined" === typeof e) return !1;
                    if ("string" === typeof e) {
                        if (i.matches) return i.matches(e);
                        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                        if (i.msMatchesSelector) return i.msMatchesSelector(e);
                        for (r = w(e), n = 0; n < r.length; n += 1)
                            if (r[n] === i) return !0;
                        return !1
                    }
                    if (e === s) return i === s;
                    if (e === t) return i === t;
                    if (e.nodeType || e instanceof h) {
                        for (r = e.nodeType ? [e] : e, n = 0; n < r.length; n += 1)
                            if (r[n] === i) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    let e, t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                        return e
                    }
                },
                eq: function(e) {
                    if ("undefined" === typeof e) return this;
                    const t = this.length;
                    if (e > t - 1) return w([]);
                    if (e < 0) {
                        const s = t + e;
                        return w(s < 0 ? [] : [this[s]])
                    }
                    return w([this[e]])
                },
                append: function(...e) {
                    let t;
                    const s = p();
                    for (let i = 0; i < e.length; i += 1) {
                        t = e[i];
                        for (let e = 0; e < this.length; e += 1)
                            if ("string" === typeof t) {
                                const i = s.createElement("div");
                                for (i.innerHTML = t; i.firstChild;) this[e].appendChild(i.firstChild)
                            } else if (t instanceof h)
                            for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
                        else this[e].appendChild(t)
                    }
                    return this
                },
                prepend: function(e) {
                    const t = p();
                    let s, i;
                    for (s = 0; s < this.length; s += 1)
                        if ("string" === typeof e) {
                            const r = t.createElement("div");
                            for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(r.childNodes[i], this[s].childNodes[0])
                        } else if (e instanceof h)
                        for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);
                    else this[s].insertBefore(e, this[s].childNodes[0]);
                    return this
                },
                next: function(e) {
                    return this.length > 0 ? e ? this[0].nextElementSibling && w(this[0].nextElementSibling).is(e) ? w([this[0].nextElementSibling]) : w([]) : this[0].nextElementSibling ? w([this[0].nextElementSibling]) : w([]) : w([])
                },
                nextAll: function(e) {
                    const t = [];
                    let s = this[0];
                    if (!s) return w([]);
                    for (; s.nextElementSibling;) {
                        const i = s.nextElementSibling;
                        e ? w(i).is(e) && t.push(i) : t.push(i), s = i
                    }
                    return w(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        const t = this[0];
                        return e ? t.previousElementSibling && w(t.previousElementSibling).is(e) ? w([t.previousElementSibling]) : w([]) : t.previousElementSibling ? w([t.previousElementSibling]) : w([])
                    }
                    return w([])
                },
                prevAll: function(e) {
                    const t = [];
                    let s = this[0];
                    if (!s) return w([]);
                    for (; s.previousElementSibling;) {
                        const i = s.previousElementSibling;
                        e ? w(i).is(e) && t.push(i) : t.push(i), s = i
                    }
                    return w(t)
                },
                parent: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? w(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
                    return w(t)
                },
                parents: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        let i = this[s].parentNode;
                        for (; i;) e ? w(i).is(e) && t.push(i) : t.push(i), i = i.parentNode
                    }
                    return w(t)
                },
                closest: function(e) {
                    let t = this;
                    return "undefined" === typeof e ? w([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        const i = this[s].querySelectorAll(e);
                        for (let e = 0; e < i.length; e += 1) t.push(i[e])
                    }
                    return w(t)
                },
                children: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        const i = this[s].children;
                        for (let s = 0; s < i.length; s += 1) e && !w(i[s]).is(e) || t.push(i[s])
                    }
                    return w(t)
                },
                filter: function(e) {
                    return w(g(this, e))
                },
                remove: function() {
                    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                }
            };
            Object.keys(y).forEach((e => {
                Object.defineProperty(w.fn, e, {
                    value: y[e],
                    writable: !0
                })
            }));
            const x = w;

            function A(e, t = 0) {
                return setTimeout(e, t)
            }

            function S() {
                return Date.now()
            }

            function C(e, t = "x") {
                const s = f();
                let i, r, n;
                const a = function(e) {
                    const t = f();
                    let s;
                    return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
                }(e);
                return s.WebKitCSSMatrix ? (r = a.transform || a.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === r ? "" : r)) : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = n.toString().split(",")), "x" === t && (r = s.WebKitCSSMatrix ? n.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (r = s.WebKitCSSMatrix ? n.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0
            }

            function E(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function T(...e) {
                const t = Object(e[0]),
                    s = ["__proto__", "constructor", "prototype"];
                for (let r = 1; r < e.length; r += 1) {
                    const n = e[r];
                    if (void 0 !== n && null !== n && (i = n, !("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement ? i instanceof HTMLElement : i && (1 === i.nodeType || 11 === i.nodeType)))) {
                        const e = Object.keys(Object(n)).filter((e => s.indexOf(e) < 0));
                        for (let s = 0, i = e.length; s < i; s += 1) {
                            const i = e[s],
                                r = Object.getOwnPropertyDescriptor(n, i);
                            void 0 !== r && r.enumerable && (E(t[i]) && E(n[i]) ? n[i].__swiper__ ? t[i] = n[i] : T(t[i], n[i]) : !E(t[i]) && E(n[i]) ? (t[i] = {}, n[i].__swiper__ ? t[i] = n[i] : T(t[i], n[i])) : t[i] = n[i])
                        }
                    }
                }
                var i;
                return t
            }

            function M(e, t, s) {
                e.style.setProperty(t, s)
            }

            function P({
                swiper: e,
                targetPosition: t,
                side: s
            }) {
                const i = f(),
                    r = -e.translate;
                let n, a = null;
                const o = e.params.speed;
                e.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(e.cssModeFrameID);
                const l = t > r ? "next" : "prev",
                    d = (e, t) => "next" === l && e >= t || "prev" === l && e <= t,
                    c = () => {
                        n = (new Date).getTime(), null === a && (a = n);
                        const l = Math.max(Math.min((n - a) / o, 1), 0),
                            p = .5 - Math.cos(l * Math.PI) / 2;
                        let u = r + p * (t - r);
                        if (d(u, t) && (u = t), e.wrapperEl.scrollTo({
                                [s]: u
                            }), d(u, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                            e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                                [s]: u
                            })
                        })), void i.cancelAnimationFrame(e.cssModeFrameID);
                        e.cssModeFrameID = i.requestAnimationFrame(c)
                    };
                c()
            }
            let k, O, _;

            function L() {
                return k || (k = function() {
                    const e = f(),
                        t = p();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                        passiveListener: function() {
                            let t = !1;
                            try {
                                const s = Object.defineProperty({}, "passive", {
                                    get() {
                                        t = !0
                                    }
                                });
                                e.addEventListener("testPassiveListener", null, s)
                            } catch (e) {}
                            return t
                        }(),
                        gestures: "ongesturestart" in e
                    }
                }()), k
            }

            function $(e = {}) {
                return O || (O = function({
                    userAgent: e
                } = {}) {
                    const t = L(),
                        s = f(),
                        i = s.navigator.platform,
                        r = e || s.navigator.userAgent,
                        n = {
                            ios: !1,
                            android: !1
                        },
                        a = s.screen.width,
                        o = s.screen.height,
                        l = r.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let d = r.match(/(iPad).*OS\s([\d_]+)/);
                    const c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                        p = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        u = "Win32" === i;
                    let h = "MacIntel" === i;
                    return !d && h && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${o}`) >= 0 && (d = r.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), h = !1), l && !u && (n.os = "android", n.android = !0), (d || p || c) && (n.os = "ios", n.ios = !0), n
                }(e)), O
            }

            function I() {
                return _ || (_ = function() {
                    const e = f();
                    return {
                        isSafari: function() {
                            const t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                        }(),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), _
            }
            const z = {
                on(e, t, s) {
                    const i = this;
                    if (!i.eventsListeners || i.destroyed) return i;
                    if ("function" !== typeof t) return i;
                    const r = s ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
                    })), i
                },
                once(e, t, s) {
                    const i = this;
                    if (!i.eventsListeners || i.destroyed) return i;
                    if ("function" !== typeof t) return i;

                    function r(...s) {
                        i.off(e, r), r.__emitterProxy && delete r.__emitterProxy, t.apply(i, s)
                    }
                    return r.__emitterProxy = t, i.on(e, r, s)
                },
                onAny(e, t) {
                    const s = this;
                    if (!s.eventsListeners || s.destroyed) return s;
                    if ("function" !== typeof e) return s;
                    const i = t ? "unshift" : "push";
                    return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
                },
                offAny(e) {
                    const t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsAnyListeners) return t;
                    const s = t.eventsAnyListeners.indexOf(e);
                    return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
                },
                off(e, t) {
                    const s = this;
                    return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                        "undefined" === typeof t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((i, r) => {
                            (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(r, 1)
                        }))
                    })), s) : s
                },
                emit(...e) {
                    const t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsListeners) return t;
                    let s, i, r;
                    "string" === typeof e[0] || Array.isArray(e[0]) ? (s = e[0], i = e.slice(1, e.length), r = t) : (s = e[0].events, i = e[0].data, r = e[0].context || t), i.unshift(r);
                    return (Array.isArray(s) ? s : s.split(" ")).forEach((e => {
                        t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                            t.apply(r, [e, ...i])
                        })), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e => {
                            e.apply(r, i)
                        }))
                    })), t
                }
            };
            const B = {
                updateSize: function() {
                    const e = this;
                    let t, s;
                    const i = e.$el;
                    t = "undefined" !== typeof e.params.width && null !== e.params.width ? e.params.width : i[0].clientWidth, s = "undefined" !== typeof e.params.height && null !== e.params.height ? e.params.height : i[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), s = s - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                        width: t,
                        height: s,
                        size: e.isHorizontal() ? t : s
                    }))
                },
                updateSlides: function() {
                    const e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        } [t]
                    }

                    function s(e, s) {
                        return parseFloat(e.getPropertyValue(t(s)) || 0)
                    }
                    const i = e.params,
                        {
                            $wrapperEl: r,
                            size: n,
                            rtlTranslate: a,
                            wrongRTL: o
                        } = e,
                        l = e.virtual && i.virtual.enabled,
                        d = l ? e.virtual.slides.length : e.slides.length,
                        c = r.children(`.${e.params.slideClass}`),
                        p = l ? e.virtual.slides.length : c.length;
                    let u = [];
                    const f = [],
                        h = [];
                    let m = i.slidesOffsetBefore;
                    "function" === typeof m && (m = i.slidesOffsetBefore.call(e));
                    let g = i.slidesOffsetAfter;
                    "function" === typeof g && (g = i.slidesOffsetAfter.call(e));
                    const w = e.snapGrid.length,
                        v = e.slidesGrid.length;
                    let b = i.spaceBetween,
                        y = -m,
                        x = 0,
                        A = 0;
                    if ("undefined" === typeof n) return;
                    "string" === typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * n), e.virtualSize = -b, a ? c.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : c.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }), i.centeredSlides && i.cssMode && (M(e.wrapperEl, "--swiper-centered-offset-before", ""), M(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    const S = i.grid && i.grid.rows > 1 && e.grid;
                    let C;
                    S && e.grid.initSlides(p);
                    const E = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter((e => "undefined" !== typeof i.breakpoints[e].slidesPerView)).length > 0;
                    for (let r = 0; r < p; r += 1) {
                        C = 0;
                        const a = c.eq(r);
                        if (S && e.grid.updateSlide(r, a, p, t), "none" !== a.css("display")) {
                            if ("auto" === i.slidesPerView) {
                                E && (c[r].style[t("width")] = "");
                                const n = getComputedStyle(a[0]),
                                    o = a[0].style.transform,
                                    l = a[0].style.webkitTransform;
                                if (o && (a[0].style.transform = "none"), l && (a[0].style.webkitTransform = "none"), i.roundLengths) C = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                                else {
                                    const e = s(n, "width"),
                                        t = s(n, "padding-left"),
                                        i = s(n, "padding-right"),
                                        r = s(n, "margin-left"),
                                        o = s(n, "margin-right"),
                                        l = n.getPropertyValue("box-sizing");
                                    if (l && "border-box" === l) C = e + r + o;
                                    else {
                                        const {
                                            clientWidth: s,
                                            offsetWidth: n
                                        } = a[0];
                                        C = e + t + i + r + o + (n - s)
                                    }
                                }
                                o && (a[0].style.transform = o), l && (a[0].style.webkitTransform = l), i.roundLengths && (C = Math.floor(C))
                            } else C = (n - (i.slidesPerView - 1) * b) / i.slidesPerView, i.roundLengths && (C = Math.floor(C)), c[r] && (c[r].style[t("width")] = `${C}px`);
                            c[r] && (c[r].swiperSlideSize = C), h.push(C), i.centeredSlides ? (y = y + C / 2 + x / 2 + b, 0 === x && 0 !== r && (y = y - n / 2 - b), 0 === r && (y = y - n / 2 - b), Math.abs(y) < .001 && (y = 0), i.roundLengths && (y = Math.floor(y)), A % i.slidesPerGroup === 0 && u.push(y), f.push(y)) : (i.roundLengths && (y = Math.floor(y)), (A - Math.min(e.params.slidesPerGroupSkip, A)) % e.params.slidesPerGroup === 0 && u.push(y), f.push(y), y = y + C + b), e.virtualSize += C + b, x = C, A += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, n) + g, a && o && ("slide" === i.effect || "coverflow" === i.effect) && r.css({
                            width: `${e.virtualSize+i.spaceBetween}px`
                        }), i.setWrapperSize && r.css({
                            [t("width")]: `${e.virtualSize+i.spaceBetween}px`
                        }), S && e.grid.updateWrapperSize(C, u, t), !i.centeredSlides) {
                        const t = [];
                        for (let s = 0; s < u.length; s += 1) {
                            let r = u[s];
                            i.roundLengths && (r = Math.floor(r)), u[s] <= e.virtualSize - n && t.push(r)
                        }
                        u = t, Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - n)
                    }
                    if (0 === u.length && (u = [0]), 0 !== i.spaceBetween) {
                        const s = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                        c.filter(((e, t) => !i.cssMode || t !== c.length - 1)).css({
                            [s]: `${b}px`
                        })
                    }
                    if (i.centeredSlides && i.centeredSlidesBounds) {
                        let e = 0;
                        h.forEach((t => {
                            e += t + (i.spaceBetween ? i.spaceBetween : 0)
                        })), e -= i.spaceBetween;
                        const t = e - n;
                        u = u.map((e => e < 0 ? -m : e > t ? t + g : e))
                    }
                    if (i.centerInsufficientSlides) {
                        let e = 0;
                        if (h.forEach((t => {
                                e += t + (i.spaceBetween ? i.spaceBetween : 0)
                            })), e -= i.spaceBetween, e < n) {
                            const t = (n - e) / 2;
                            u.forEach(((e, s) => {
                                u[s] = e - t
                            })), f.forEach(((e, s) => {
                                f[s] = e + t
                            }))
                        }
                    }
                    if (Object.assign(e, {
                            slides: c,
                            snapGrid: u,
                            slidesGrid: f,
                            slidesSizesGrid: h
                        }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                        M(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), M(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            s = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
                    }
                    if (p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== v && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !l && !i.cssMode && ("slide" === i.effect || "fade" === i.effect)) {
                        const t = `${i.containerModifierClass}backface-hidden`,
                            s = e.$el.hasClass(t);
                        p <= i.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
                    }
                },
                updateAutoHeight: function(e) {
                    const t = this,
                        s = [],
                        i = t.virtual && t.params.virtual.enabled;
                    let r, n = 0;
                    "number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const a = e => i ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides)(t.visibleSlides || x([])).each((e => {
                            s.push(e)
                        }));
                        else
                            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                                const e = t.activeIndex + r;
                                if (e > t.slides.length && !i) break;
                                s.push(a(e))
                            } else s.push(a(t.activeIndex));
                    for (r = 0; r < s.length; r += 1)
                        if ("undefined" !== typeof s[r]) {
                            const e = s[r].offsetHeight;
                            n = e > n ? e : n
                        }(n || 0 === n) && t.$wrapperEl.css("height", `${n}px`)
                },
                updateSlidesOffset: function() {
                    const e = this,
                        t = e.slides;
                    for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
                },
                updateSlidesProgress: function(e = this && this.translate || 0) {
                    const t = this,
                        s = t.params,
                        {
                            slides: i,
                            rtlTranslate: r,
                            snapGrid: n
                        } = t;
                    if (0 === i.length) return;
                    "undefined" === typeof i[0].swiperSlideOffset && t.updateSlidesOffset();
                    let a = -e;
                    r && (a = e), i.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (let e = 0; e < i.length; e += 1) {
                        const o = i[e];
                        let l = o.swiperSlideOffset;
                        s.cssMode && s.centeredSlides && (l -= i[0].swiperSlideOffset);
                        const d = (a + (s.centeredSlides ? t.minTranslate() : 0) - l) / (o.swiperSlideSize + s.spaceBetween),
                            c = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) / (o.swiperSlideSize + s.spaceBetween),
                            p = -(a - l),
                            u = p + t.slidesSizesGrid[e];
                        (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e), i.eq(e).addClass(s.slideVisibleClass)), o.progress = r ? -d : d, o.originalProgress = r ? -c : c
                    }
                    t.visibleSlides = x(t.visibleSlides)
                },
                updateProgress: function(e) {
                    const t = this;
                    if ("undefined" === typeof e) {
                        const s = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * s || 0
                    }
                    const s = t.params,
                        i = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: r,
                        isBeginning: n,
                        isEnd: a
                    } = t;
                    const o = n,
                        l = a;
                    0 === i ? (r = 0, n = !0, a = !0) : (r = (e - t.minTranslate()) / i, n = r <= 0, a = r >= 1), Object.assign(t, {
                        progress: r,
                        isBeginning: n,
                        isEnd: a
                    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), a && !l && t.emit("reachEnd toEdge"), (o && !n || l && !a) && t.emit("fromEdge"), t.emit("progress", r)
                },
                updateSlidesClasses: function() {
                    const e = this,
                        {
                            slides: t,
                            params: s,
                            $wrapperEl: i,
                            activeIndex: r,
                            realIndex: n
                        } = e,
                        a = e.virtual && s.virtual.enabled;
                    let o;
                    t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), o = a ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${r}"]`) : t.eq(r), o.addClass(s.slideActiveClass), s.loop && (o.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass));
                    let l = o.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                    s.loop && 0 === l.length && (l = t.eq(0), l.addClass(s.slideNextClass));
                    let d = o.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                    s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (l.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    const t = this,
                        s = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            slidesGrid: i,
                            snapGrid: r,
                            params: n,
                            activeIndex: a,
                            realIndex: o,
                            snapIndex: l
                        } = t;
                    let d, c = e;
                    if ("undefined" === typeof c) {
                        for (let e = 0; e < i.length; e += 1) "undefined" !== typeof i[e + 1] ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2 ? c = e : s >= i[e] && s < i[e + 1] && (c = e + 1) : s >= i[e] && (c = e);
                        n.normalizeSlideIndex && (c < 0 || "undefined" === typeof c) && (c = 0)
                    }
                    if (r.indexOf(s) >= 0) d = r.indexOf(s);
                    else {
                        const e = Math.min(n.slidesPerGroupSkip, c);
                        d = e + Math.floor((c - e) / n.slidesPerGroup)
                    }
                    if (d >= r.length && (d = r.length - 1), c === a) return void(d !== l && (t.snapIndex = d, t.emit("snapIndexChange")));
                    const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                    Object.assign(t, {
                        snapIndex: d,
                        realIndex: p,
                        previousIndex: a,
                        activeIndex: c
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function(e) {
                    const t = this,
                        s = t.params,
                        i = x(e).closest(`.${s.slideClass}`)[0];
                    let r, n = !1;
                    if (i)
                        for (let e = 0; e < t.slides.length; e += 1)
                            if (t.slides[e] === i) {
                                n = !0, r = e;
                                break
                            } if (!i || !n) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(x(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = r, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            };
            const N = {
                getTranslate: function(e = (this.isHorizontal() ? "x" : "y")) {
                    const {
                        params: t,
                        rtlTranslate: s,
                        translate: i,
                        $wrapperEl: r
                    } = this;
                    if (t.virtualTranslate) return s ? -i : i;
                    if (t.cssMode) return i;
                    let n = C(r[0], e);
                    return s && (n = -n), n || 0
                },
                setTranslate: function(e, t) {
                    const s = this,
                        {
                            rtlTranslate: i,
                            params: r,
                            $wrapperEl: n,
                            wrapperEl: a,
                            progress: o
                        } = s;
                    let l, d = 0,
                        c = 0;
                    s.isHorizontal() ? d = i ? -e : e : c = e, r.roundLengths && (d = Math.floor(d), c = Math.floor(c)), r.cssMode ? a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : r.virtualTranslate || n.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
                    const p = s.maxTranslate() - s.minTranslate();
                    l = 0 === p ? 0 : (e - s.minTranslate()) / p, l !== o && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e = 0, t = this.params.speed, s = !0, i = !0, r) {
                    const n = this,
                        {
                            params: a,
                            wrapperEl: o
                        } = n;
                    if (n.animating && a.preventInteractionOnTransition) return !1;
                    const l = n.minTranslate(),
                        d = n.maxTranslate();
                    let c;
                    if (c = i && e > l ? l : i && e < d ? d : e, n.updateProgress(c), a.cssMode) {
                        const e = n.isHorizontal();
                        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
                        else {
                            if (!n.support.smoothScroll) return P({
                                swiper: n,
                                targetPosition: -c,
                                side: e ? "left" : "top"
                            }), !0;
                            o.scrollTo({
                                [e ? "left" : "top"]: -c,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (n.setTransition(0), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                        n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, s && n.emit("transitionEnd"))
                    }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
                }
            };

            function G({
                swiper: e,
                runCallbacks: t,
                direction: s,
                step: i
            }) {
                const {
                    activeIndex: r,
                    previousIndex: n
                } = e;
                let a = s;
                if (a || (a = r > n ? "next" : r < n ? "prev" : "reset"), e.emit(`transition${i}`), t && r !== n) {
                    if ("reset" === a) return void e.emit(`slideResetTransition${i}`);
                    e.emit(`slideChangeTransition${i}`), "next" === a ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`)
                }
            }
            const D = {
                slideTo: function(e = 0, t = this.params.speed, s = !0, i, r) {
                    if ("number" !== typeof e && "string" !== typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                    if ("string" === typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const n = this;
                    let a = e;
                    a < 0 && (a = 0);
                    const {
                        params: o,
                        snapGrid: l,
                        slidesGrid: d,
                        previousIndex: c,
                        activeIndex: p,
                        rtlTranslate: u,
                        wrapperEl: f,
                        enabled: h
                    } = n;
                    if (n.animating && o.preventInteractionOnTransition || !h && !i && !r) return !1;
                    const m = Math.min(n.params.slidesPerGroupSkip, a);
                    let g = m + Math.floor((a - m) / n.params.slidesPerGroup);
                    g >= l.length && (g = l.length - 1);
                    const w = -l[g];
                    if (o.normalizeSlideIndex)
                        for (let e = 0; e < d.length; e += 1) {
                            const t = -Math.floor(100 * w),
                                s = Math.floor(100 * d[e]),
                                i = Math.floor(100 * d[e + 1]);
                            "undefined" !== typeof d[e + 1] ? t >= s && t < i - (i - s) / 2 ? a = e : t >= s && t < i && (a = e + 1) : t >= s && (a = e)
                        }
                    if (n.initialized && a !== p) {
                        if (!n.allowSlideNext && w < n.translate && w < n.minTranslate()) return !1;
                        if (!n.allowSlidePrev && w > n.translate && w > n.maxTranslate() && (p || 0) !== a) return !1
                    }
                    let v;
                    if (a !== (c || 0) && s && n.emit("beforeSlideChangeStart"), n.updateProgress(w), v = a > p ? "next" : a < p ? "prev" : "reset", u && -w === n.translate || !u && w === n.translate) return n.updateActiveIndex(a), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(w), "reset" !== v && (n.transitionStart(s, v), n.transitionEnd(s, v)), !1;
                    if (o.cssMode) {
                        const e = n.isHorizontal(),
                            s = u ? w : -w;
                        if (0 === t) {
                            const t = n.virtual && n.params.virtual.enabled;
                            t && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), f[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                                n.wrapperEl.style.scrollSnapType = "", n._swiperImmediateVirtual = !1
                            }))
                        } else {
                            if (!n.support.smoothScroll) return P({
                                swiper: n,
                                targetPosition: s,
                                side: e ? "left" : "top"
                            }), !0;
                            f.scrollTo({
                                [e ? "left" : "top"]: s,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return n.setTransition(t), n.setTranslate(w), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(s, v), 0 === t ? n.transitionEnd(s, v) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
                        n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, v))
                    }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function(e = 0, t = this.params.speed, s = !0, i) {
                    if ("string" === typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const r = this;
                    let n = e;
                    return r.params.loop && (n += r.loopedSlides), r.slideTo(n, t, s, i)
                },
                slideNext: function(e = this.params.speed, t = !0, s) {
                    const i = this,
                        {
                            animating: r,
                            enabled: n,
                            params: a
                        } = i;
                    if (!n) return i;
                    let o = a.slidesPerGroup;
                    "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                    const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o;
                    if (a.loop) {
                        if (r && a.loopPreventsSlide) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                    }
                    return a.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + l, e, t, s)
                },
                slidePrev: function(e = this.params.speed, t = !0, s) {
                    const i = this,
                        {
                            params: r,
                            animating: n,
                            snapGrid: a,
                            slidesGrid: o,
                            rtlTranslate: l,
                            enabled: d
                        } = i;
                    if (!d) return i;
                    if (r.loop) {
                        if (n && r.loopPreventsSlide) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                    }

                    function c(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const p = c(l ? i.translate : -i.translate),
                        u = a.map((e => c(e)));
                    let f = a[u.indexOf(p) - 1];
                    if ("undefined" === typeof f && r.cssMode) {
                        let e;
                        a.forEach(((t, s) => {
                            p >= t && (e = s)
                        })), "undefined" !== typeof e && (f = a[e > 0 ? e - 1 : e])
                    }
                    let h = 0;
                    if ("undefined" !== typeof f && (h = o.indexOf(f), h < 0 && (h = i.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (h = h - i.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), r.rewind && i.isBeginning) {
                        const r = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                        return i.slideTo(r, e, t, s)
                    }
                    return i.slideTo(h, e, t, s)
                },
                slideReset: function(e = this.params.speed, t = !0, s) {
                    return this.slideTo(this.activeIndex, e, t, s)
                },
                slideToClosest: function(e = this.params.speed, t = !0, s, i = .5) {
                    const r = this;
                    let n = r.activeIndex;
                    const a = Math.min(r.params.slidesPerGroupSkip, n),
                        o = a + Math.floor((n - a) / r.params.slidesPerGroup),
                        l = r.rtlTranslate ? r.translate : -r.translate;
                    if (l >= r.snapGrid[o]) {
                        const e = r.snapGrid[o];
                        l - e > (r.snapGrid[o + 1] - e) * i && (n += r.params.slidesPerGroup)
                    } else {
                        const e = r.snapGrid[o - 1];
                        l - e <= (r.snapGrid[o] - e) * i && (n -= r.params.slidesPerGroup)
                    }
                    return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, e, t, s)
                },
                slideToClickedSlide: function() {
                    const e = this,
                        {
                            params: t,
                            $wrapperEl: s
                        } = e,
                        i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let r, n = e.clickedIndex;
                    if (t.loop) {
                        if (e.animating) return;
                        r = parseInt(x(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), n = s.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), A((() => {
                            e.slideTo(n)
                        }))) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(), n = s.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), A((() => {
                            e.slideTo(n)
                        }))) : e.slideTo(n)
                    } else e.slideTo(n)
                }
            };
            const j = {
                loopCreate: function() {
                    const e = this,
                        t = p(),
                        {
                            params: s,
                            $wrapperEl: i
                        } = e,
                        r = i.children().length > 0 ? x(i.children()[0].parentNode) : i;
                    r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
                    let n = r.children(`.${s.slideClass}`);
                    if (s.loopFillGroupWithBlank) {
                        const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
                        if (e !== s.slidesPerGroup) {
                            for (let i = 0; i < e; i += 1) {
                                const e = x(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                                r.append(e)
                            }
                            n = r.children(`.${s.slideClass}`)
                        }
                    }
                    "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && e.params.loopedSlidesLimit && (e.loopedSlides = n.length);
                    const a = [],
                        o = [];
                    n.each(((e, t) => {
                        x(e).attr("data-swiper-slide-index", t)
                    }));
                    for (let t = 0; t < e.loopedSlides; t += 1) {
                        const e = t - Math.floor(t / n.length) * n.length;
                        o.push(n.eq(e)[0]), a.unshift(n.eq(n.length - e - 1)[0])
                    }
                    for (let e = 0; e < o.length; e += 1) r.append(x(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
                    for (let e = a.length - 1; e >= 0; e -= 1) r.prepend(x(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
                },
                loopFix: function() {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {
                        activeIndex: t,
                        slides: s,
                        loopedSlides: i,
                        allowSlidePrev: r,
                        allowSlideNext: n,
                        snapGrid: a,
                        rtlTranslate: o
                    } = e;
                    let l;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const d = -a[t] - e.getTranslate();
                    if (t < i) {
                        l = s.length - 3 * i + t, l += i;
                        e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)
                    } else if (t >= s.length - i) {
                        l = -s.length + t + i, l += i;
                        e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)
                    }
                    e.allowSlidePrev = r, e.allowSlideNext = n, e.emit("loopFix")
                },
                loopDestroy: function() {
                    const {
                        $wrapperEl: e,
                        params: t,
                        slides: s
                    } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
                }
            };

            function H(e) {
                const t = this,
                    s = p(),
                    i = f(),
                    r = t.touchEventsData,
                    {
                        params: n,
                        touches: a,
                        enabled: o
                    } = t;
                if (!o) return;
                if (t.animating && n.preventInteractionOnTransition) return;
                !t.animating && n.cssMode && n.loop && t.loopFix();
                let l = e;
                l.originalEvent && (l = l.originalEvent);
                let d = x(l.target);
                if ("wrapper" === n.touchEventsTarget && !d.closest(t.wrapperEl).length) return;
                if (r.isTouchEvent = "touchstart" === l.type, !r.isTouchEvent && "which" in l && 3 === l.which) return;
                if (!r.isTouchEvent && "button" in l && l.button > 0) return;
                if (r.isTouched && r.isMoved) return;
                const c = !!n.noSwipingClass && "" !== n.noSwipingClass,
                    u = e.composedPath ? e.composedPath() : e.path;
                c && l.target && l.target.shadowRoot && u && (d = x(u[0]));
                const h = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
                    m = !(!l.target || !l.target.shadowRoot);
                if (n.noSwiping && (m ? function(e, t = this) {
                        return function t(s) {
                            if (!s || s === p() || s === f()) return null;
                            s.assignedSlot && (s = s.assignedSlot);
                            const i = s.closest(e);
                            return i || s.getRootNode ? i || t(s.getRootNode().host) : null
                        }(t)
                    }(h, d[0]) : d.closest(h)[0])) return void(t.allowClick = !0);
                if (n.swipeHandler && !d.closest(n.swipeHandler)[0]) return;
                a.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, a.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                const g = a.currentX,
                    w = a.currentY,
                    v = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                    b = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                if (v && (g <= b || g >= i.innerWidth - b)) {
                    if ("prevent" !== v) return;
                    e.preventDefault()
                }
                if (Object.assign(r, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), a.startX = g, a.startY = w, r.touchStartTime = S(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (r.allowThresholdMove = !1), "touchstart" !== l.type) {
                    let e = !0;
                    d.is(r.focusableElements) && (e = !1, "SELECT" === d[0].nodeName && (r.isTouched = !1)), s.activeElement && x(s.activeElement).is(r.focusableElements) && s.activeElement !== d[0] && s.activeElement.blur();
                    const i = e && t.allowTouchMove && n.touchStartPreventDefault;
                    !n.touchStartForcePreventDefault && !i || d[0].isContentEditable || l.preventDefault()
                }
                t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", l)
            }

            function R(e) {
                const t = p(),
                    s = this,
                    i = s.touchEventsData,
                    {
                        params: r,
                        touches: n,
                        rtlTranslate: a,
                        enabled: o
                    } = s;
                if (!o) return;
                let l = e;
                if (l.originalEvent && (l = l.originalEvent), !i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", l));
                if (i.isTouchEvent && "touchmove" !== l.type) return;
                const d = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                    c = "touchmove" === l.type ? d.pageX : l.pageX,
                    u = "touchmove" === l.type ? d.pageY : l.pageY;
                if (l.preventedByNestedSwiper) return n.startX = c, void(n.startY = u);
                if (!s.allowTouchMove) return x(l.target).is(i.focusableElements) || (s.allowClick = !1), void(i.isTouched && (Object.assign(n, {
                    startX: c,
                    startY: u,
                    currentX: c,
                    currentY: u
                }), i.touchStartTime = S()));
                if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                    if (s.isVertical()) {
                        if (u < n.startY && s.translate <= s.maxTranslate() || u > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                    } else if (c < n.startX && s.translate <= s.maxTranslate() || c > n.startX && s.translate >= s.minTranslate()) return;
                if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && x(l.target).is(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
                if (i.allowTouchCallbacks && s.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1) return;
                n.currentX = c, n.currentY = u;
                const f = n.currentX - n.startX,
                    h = n.currentY - n.startY;
                if (s.params.threshold && Math.sqrt(f ** 2 + h ** 2) < s.params.threshold) return;
                if ("undefined" === typeof i.isScrolling) {
                    let e;
                    s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
                }
                if (i.isScrolling && s.emit("touchMoveOpposite", l), "undefined" === typeof i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
                if (!i.startMoving) return;
                s.allowClick = !1, !r.cssMode && l.cancelable && l.preventDefault(), r.touchMoveStopPropagation && !r.nested && l.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", l)), s.emit("sliderMove", l), i.isMoved = !0;
                let m = s.isHorizontal() ? f : h;
                n.diff = m, m *= r.touchRatio, a && (m = -m), s.swipeDirection = m > 0 ? "prev" : "next", i.currentTranslate = m + i.startTranslate;
                let g = !0,
                    w = r.resistanceRatio;
                if (r.touchReleaseOnEdges && (w = 0), m > 0 && i.currentTranslate > s.minTranslate() ? (g = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + m) ** w)) : m < 0 && i.currentTranslate < s.maxTranslate() && (g = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - m) ** w)), g && (l.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
                    if (!(Math.abs(m) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void(n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
                }
                r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
            }

            function Y(e) {
                const t = this,
                    s = t.touchEventsData,
                    {
                        params: i,
                        touches: r,
                        rtlTranslate: n,
                        slidesGrid: a,
                        enabled: o
                    } = t;
                if (!o) return;
                let l = e;
                if (l.originalEvent && (l = l.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", l), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
                i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const d = S(),
                    c = d - s.touchStartTime;
                if (t.allowClick) {
                    const e = l.path || l.composedPath && l.composedPath();
                    t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
                }
                if (s.lastClickTime = S(), A((() => {
                        t.destroyed || (t.allowClick = !0)
                    })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === r.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
                let p;
                if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, p = i.followFinger ? n ? t.translate : -t.translate : -s.currentTranslate, i.cssMode) return;
                if (t.params.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
                    currentPos: p
                });
                let u = 0,
                    f = t.slidesSizesGrid[0];
                for (let e = 0; e < a.length; e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                    const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                    "undefined" !== typeof a[e + t] ? p >= a[e] && p < a[e + t] && (u = e, f = a[e + t] - a[e]) : p >= a[e] && (u = e, f = a[a.length - 1] - a[a.length - 2])
                }
                let h = null,
                    m = null;
                i.rewind && (t.isBeginning ? m = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (h = 0));
                const g = (p - a[u]) / f,
                    w = u < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                if (c > i.longSwipesMs) {
                    if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (g >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? h : u + w) : t.slideTo(u)), "prev" === t.swipeDirection && (g > 1 - i.longSwipesRatio ? t.slideTo(u + w) : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio ? t.slideTo(m) : t.slideTo(u))
                } else {
                    if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl) ? l.target === t.navigation.nextEl ? t.slideTo(u + w) : t.slideTo(u) : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : u + w), "prev" === t.swipeDirection && t.slideTo(null !== m ? m : u))
                }
            }

            function F() {
                const e = this,
                    {
                        params: t,
                        el: s
                    } = e;
                if (s && 0 === s.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const {
                    allowSlideNext: i,
                    allowSlidePrev: r,
                    snapGrid: n
                } = e;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
            }

            function V(e) {
                const t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
            }

            function W() {
                const e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: s,
                        enabled: i
                    } = e;
                if (!i) return;
                let r;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const n = e.maxTranslate() - e.minTranslate();
                r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, r !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }
            let q = !1;

            function X() {}
            const Z = (e, t) => {
                const s = p(),
                    {
                        params: i,
                        touchEvents: r,
                        el: n,
                        wrapperEl: a,
                        device: o,
                        support: l
                    } = e,
                    d = !!i.nested,
                    c = "on" === t ? "addEventListener" : "removeEventListener",
                    u = t;
                if (l.touch) {
                    const t = !("touchstart" !== r.start || !l.passiveListener || !i.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    n[c](r.start, e.onTouchStart, t), n[c](r.move, e.onTouchMove, l.passiveListener ? {
                        passive: !1,
                        capture: d
                    } : d), n[c](r.end, e.onTouchEnd, t), r.cancel && n[c](r.cancel, e.onTouchEnd, t)
                } else n[c](r.start, e.onTouchStart, !1), s[c](r.move, e.onTouchMove, d), s[c](r.end, e.onTouchEnd, !1);
                (i.preventClicks || i.preventClicksPropagation) && n[c]("click", e.onClick, !0), i.cssMode && a[c]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", F, !0) : e[u]("observerUpdate", F, !0)
            };
            const Q = {
                    attachEvents: function() {
                        const e = this,
                            t = p(),
                            {
                                params: s,
                                support: i
                            } = e;
                        e.onTouchStart = H.bind(e), e.onTouchMove = R.bind(e), e.onTouchEnd = Y.bind(e), s.cssMode && (e.onScroll = W.bind(e)), e.onClick = V.bind(e), i.touch && !q && (t.addEventListener("touchstart", X), q = !0), Z(e, "on")
                    },
                    detachEvents: function() {
                        Z(this, "off")
                    }
                },
                U = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            const K = {
                setBreakpoint: function() {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: s,
                            loopedSlides: i = 0,
                            params: r,
                            $el: n
                        } = e,
                        a = r.breakpoints;
                    if (!a || a && 0 === Object.keys(a).length) return;
                    const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                    if (!o || e.currentBreakpoint === o) return;
                    const l = (o in a ? a[o] : void 0) || e.originalParams,
                        d = U(e, r),
                        c = U(e, l),
                        p = r.enabled;
                    d && !c ? (n.removeClass(`${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (n.addClass(`${r.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === r.grid.fill) && n.addClass(`${r.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        const s = r[t] && r[t].enabled,
                            i = l[t] && l[t].enabled;
                        s && !i && e[t].disable(), !s && i && e[t].enable()
                    }));
                    const u = l.direction && l.direction !== r.direction,
                        f = r.loop && (l.slidesPerView !== r.slidesPerView || u);
                    u && s && e.changeDirection(), T(e.params, l);
                    const h = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), p && !h ? e.disable() : !p && h && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", l), f && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                },
                getBreakpoint: function(e, t = "window", s) {
                    if (!e || "container" === t && !s) return;
                    let i = !1;
                    const r = f(),
                        n = "window" === t ? r.innerHeight : s.clientHeight,
                        a = Object.keys(e).map((e => {
                            if ("string" === typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: n * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < a.length; e += 1) {
                        const {
                            point: n,
                            value: o
                        } = a[e];
                        "window" === t ? r.matchMedia(`(min-width: ${o}px)`).matches && (i = n) : o <= s.clientWidth && (i = n)
                    }
                    return i || "max"
                }
            };
            const J = {
                addClasses: function() {
                    const e = this,
                        {
                            classNames: t,
                            params: s,
                            rtl: i,
                            $el: r,
                            device: n,
                            support: a
                        } = e,
                        o = function(e, t) {
                            const s = [];
                            return e.forEach((e => {
                                "object" === typeof e ? Object.keys(e).forEach((i => {
                                    e[i] && s.push(t + i)
                                })) : "string" === typeof e && s.push(t + e)
                            })), s
                        }(["initialized", s.direction, {
                            "pointer-events": !a.touch
                        }, {
                            "free-mode": e.params.freeMode && s.freeMode.enabled
                        }, {
                            autoheight: s.autoHeight
                        }, {
                            rtl: i
                        }, {
                            grid: s.grid && s.grid.rows > 1
                        }, {
                            "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                        }, {
                            android: n.android
                        }, {
                            ios: n.ios
                        }, {
                            "css-mode": s.cssMode
                        }, {
                            centered: s.cssMode && s.centeredSlides
                        }, {
                            "watch-progress": s.watchSlidesProgress
                        }], s.containerModifierClass);
                    t.push(...o), r.addClass([...t].join(" ")), e.emitContainerClasses()
                },
                removeClasses: function() {
                    const {
                        $el: e,
                        classNames: t
                    } = this;
                    e.removeClass(t.join(" ")), this.emitContainerClasses()
                }
            };
            const ee = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopedSlidesLimit: !0,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

            function te(e, t) {
                return function(s = {}) {
                    const i = Object.keys(s)[0],
                        r = s[i];
                    "object" === typeof r && null !== r ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === e[i] && (e[i] = {
                        auto: !0
                    }), i in e && "enabled" in r ? (!0 === e[i] && (e[i] = {
                        enabled: !0
                    }), "object" !== typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
                        enabled: !1
                    }), T(t, s)) : T(t, s)) : T(t, s)
                }
            }
            const se = {
                    eventsEmitter: z,
                    update: B,
                    translate: N,
                    transition: {
                        setTransition: function(e, t) {
                            const s = this;
                            s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
                        },
                        transitionStart: function(e = !0, t) {
                            const s = this,
                                {
                                    params: i
                                } = s;
                            i.cssMode || (i.autoHeight && s.updateAutoHeight(), G({
                                swiper: s,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e = !0, t) {
                            const s = this,
                                {
                                    params: i
                                } = s;
                            s.animating = !1, i.cssMode || (s.setTransition(0), G({
                                swiper: s,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: D,
                    loop: j,
                    grabCursor: {
                        setGrabCursor: function(e) {
                            const t = this;
                            if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab"
                        },
                        unsetGrabCursor: function() {
                            const e = this;
                            e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: Q,
                    breakpoints: K,
                    checkOverflow: {
                        checkOverflow: function() {
                            const e = this,
                                {
                                    isLocked: t,
                                    params: s
                                } = e,
                                {
                                    slidesOffsetBefore: i
                                } = s;
                            if (i) {
                                const t = e.slides.length - 1,
                                    s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                                e.isLocked = e.size > s
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: J,
                    images: {
                        loadImage: function(e, t, s, i, r, n) {
                            const a = f();
                            let o;

                            function l() {
                                n && n()
                            }
                            x(e).parent("picture")[0] || e.complete && r ? l() : t ? (o = new a.Image, o.onload = l, o.onerror = l, i && (o.sizes = i), s && (o.srcset = s), t && (o.src = t)) : l()
                        },
                        preloadImages: function() {
                            const e = this;

                            function t() {
                                "undefined" !== typeof e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                                const i = e.imagesToLoad[s];
                                e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                ie = {};
            class re {
                constructor(...e) {
                    let t, s;
                    if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? s = e[0] : [t, s] = e, s || (s = {}), s = T({}, s), t && !s.el && (s.el = t), s.el && x(s.el).length > 1) {
                        const e = [];
                        return x(s.el).each((t => {
                            const i = T({}, s, {
                                el: t
                            });
                            e.push(new re(i))
                        })), e
                    }
                    const i = this;
                    i.__swiper__ = !0, i.support = L(), i.device = $({
                        userAgent: s.userAgent
                    }), i.browser = I(), i.eventsListeners = {}, i.eventsAnyListeners = [], i.modules = [...i.__modules__], s.modules && Array.isArray(s.modules) && i.modules.push(...s.modules);
                    const r = {};
                    i.modules.forEach((e => {
                        e({
                            swiper: i,
                            extendParams: te(s, r),
                            on: i.on.bind(i),
                            once: i.once.bind(i),
                            off: i.off.bind(i),
                            emit: i.emit.bind(i)
                        })
                    }));
                    const n = T({}, ee, r);
                    return i.params = T({}, n, ie, s), i.originalParams = T({}, i.params), i.passedParams = T({}, s), i.params && i.params.on && Object.keys(i.params.on).forEach((e => {
                        i.on(e, i.params.on[e])
                    })), i.params && i.params.onAny && i.onAny(i.params.onAny), i.$ = x, Object.assign(i, {
                        enabled: i.params.enabled,
                        el: t,
                        classNames: [],
                        slides: x(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === i.params.direction,
                        isVertical: () => "vertical" === i.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: i.params.allowSlideNext,
                        allowSlidePrev: i.params.allowSlidePrev,
                        touchEvents: function() {
                            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                t = ["pointerdown", "pointermove", "pointerup"];
                            return i.touchEventsTouch = {
                                start: e[0],
                                move: e[1],
                                end: e[2],
                                cancel: e[3]
                            }, i.touchEventsDesktop = {
                                start: t[0],
                                move: t[1],
                                end: t[2]
                            }, i.support.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: i.params.focusableElements,
                            lastClickTime: S(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: i.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), i.emit("_swiper"), i.params.init && i.init(), i
                }
                enable() {
                    const e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    const e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    const s = this;
                    e = Math.min(Math.max(e, 0), 1);
                    const i = s.minTranslate(),
                        r = (s.maxTranslate() - i) * e + i;
                    s.translateTo(r, "undefined" === typeof t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
                }
                emitContainerClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    const t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
                }
                emitSlidesClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = [];
                    e.slides.each((s => {
                        const i = e.getSlideClasses(s);
                        t.push({
                            slideEl: s,
                            classNames: i
                        }), e.emit("_slideClass", s, i)
                    })), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e = "current", t = !1) {
                    const {
                        params: s,
                        slides: i,
                        slidesGrid: r,
                        slidesSizesGrid: n,
                        size: a,
                        activeIndex: o
                    } = this;
                    let l = 1;
                    if (s.centeredSlides) {
                        let e, t = i[o].swiperSlideSize;
                        for (let s = o + 1; s < i.length; s += 1) i[s] && !e && (t += i[s].swiperSlideSize, l += 1, t > a && (e = !0));
                        for (let s = o - 1; s >= 0; s -= 1) i[s] && !e && (t += i[s].swiperSlideSize, l += 1, t > a && (e = !0))
                    } else if ("current" === e)
                        for (let e = o + 1; e < i.length; e += 1) {
                            (t ? r[e] + n[e] - r[o] < a : r[e] - r[o] < a) && (l += 1)
                        } else
                            for (let e = o - 1; e >= 0; e -= 1) {
                                r[o] - r[e] < a && (l += 1)
                            }
                    return l
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const {
                        snapGrid: t,
                        params: s
                    } = e;

                    function i() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    let r;
                    s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (r = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), r || i()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t = !0) {
                    const s = this,
                        i = s.params.direction;
                    return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${i}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    })), s.emit("changeDirection"), t && s.update()), s
                }
                changeLanguageDirection(e) {
                    const t = this;
                    t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
                }
                mount(e) {
                    const t = this;
                    if (t.mounted) return !0;
                    const s = x(e || t.params.el);
                    if (!(e = s[0])) return !1;
                    e.swiper = t;
                    const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
                    let r = (() => {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                            const t = x(e.shadowRoot.querySelector(i()));
                            return t.children = e => s.children(e), t
                        }
                        return s.children ? s.children(i()) : x(s).children(i())
                    })();
                    if (0 === r.length && t.params.createElements) {
                        const e = p().createElement("div");
                        r = x(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => {
                            r.append(e)
                        }))
                    }
                    return Object.assign(t, {
                        $el: s,
                        el: e,
                        $wrapperEl: r,
                        wrapperEl: r[0],
                        mounted: !0,
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                        wrongRTL: "-webkit-box" === r.css("display")
                    }), !0
                }
                init(e) {
                    const t = this;
                    if (t.initialized) return t;
                    return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
                }
                destroy(e = !0, t = !0) {
                    const s = this,
                        {
                            params: i,
                            $el: r,
                            $wrapperEl: n,
                            slides: a
                        } = s;
                    return "undefined" === typeof s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), a && a.length && a.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                        s.off(e)
                    })), !1 !== e && (s.$el[0].swiper = null, function(e) {
                        const t = e;
                        Object.keys(t).forEach((e => {
                            try {
                                t[e] = null
                            } catch (e) {}
                            try {
                                delete t[e]
                            } catch (e) {}
                        }))
                    }(s)), s.destroyed = !0), null
                }
                static extendDefaults(e) {
                    T(ie, e)
                }
                static get extendedDefaults() {
                    return ie
                }
                static get defaults() {
                    return ee
                }
                static installModule(e) {
                    re.prototype.__modules__ || (re.prototype.__modules__ = []);
                    const t = re.prototype.__modules__;
                    "function" === typeof e && t.indexOf(e) < 0 && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach((e => re.installModule(e))), re) : (re.installModule(e), re)
                }
            }
            Object.keys(se).forEach((e => {
                Object.keys(se[e]).forEach((t => {
                    re.prototype[t] = se[e][t]
                }))
            })), re.use([function({
                swiper: e,
                on: t,
                emit: s
            }) {
                const i = f();
                let r = null,
                    n = null;
                const a = () => {
                        e && !e.destroyed && e.initialized && (s("beforeResize"), s("resize"))
                    },
                    o = () => {
                        e && !e.destroyed && e.initialized && s("orientationchange")
                    };
                t("init", (() => {
                    e.params.resizeObserver && "undefined" !== typeof i.ResizeObserver ? e && !e.destroyed && e.initialized && (r = new ResizeObserver((t => {
                        n = i.requestAnimationFrame((() => {
                            const {
                                width: s,
                                height: i
                            } = e;
                            let r = s,
                                n = i;
                            t.forEach((({
                                contentBoxSize: t,
                                contentRect: s,
                                target: i
                            }) => {
                                i && i !== e.el || (r = s ? s.width : (t[0] || t).inlineSize, n = s ? s.height : (t[0] || t).blockSize)
                            })), r === s && n === i || a()
                        }))
                    })), r.observe(e.el)) : (i.addEventListener("resize", a), i.addEventListener("orientationchange", o))
                })), t("destroy", (() => {
                    n && i.cancelAnimationFrame(n), r && r.unobserve && e.el && (r.unobserve(e.el), r = null), i.removeEventListener("resize", a), i.removeEventListener("orientationchange", o)
                }))
            }, function({
                swiper: e,
                extendParams: t,
                on: s,
                emit: i
            }) {
                const r = [],
                    n = f(),
                    a = (e, t = {}) => {
                        const s = new(n.MutationObserver || n.WebkitMutationObserver)((e => {
                            if (1 === e.length) return void i("observerUpdate", e[0]);
                            const t = function() {
                                i("observerUpdate", e[0])
                            };
                            n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0)
                        }));
                        s.observe(e, {
                            attributes: "undefined" === typeof t.attributes || t.attributes,
                            childList: "undefined" === typeof t.childList || t.childList,
                            characterData: "undefined" === typeof t.characterData || t.characterData
                        }), r.push(s)
                    };
                t({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), s("init", (() => {
                    if (e.params.observer) {
                        if (e.params.observeParents) {
                            const t = e.$el.parents();
                            for (let e = 0; e < t.length; e += 1) a(t[e])
                        }
                        a(e.$el[0], {
                            childList: e.params.observeSlideChildren
                        }), a(e.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                })), s("destroy", (() => {
                    r.forEach((e => {
                        e.disconnect()
                    })), r.splice(0, r.length)
                }))
            }]);
            const ne = re;

            function ae(e) {
                const {
                    effect: t,
                    swiper: s,
                    on: i,
                    setTranslate: r,
                    setTransition: n,
                    overwriteParams: a,
                    perspective: o,
                    recreateShadows: l,
                    getEffectParams: d
                } = e;
                let c;
                i("beforeInit", (() => {
                    if (s.params.effect !== t) return;
                    s.classNames.push(`${s.params.containerModifierClass}${t}`), o && o() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                    const e = a ? a() : {};
                    Object.assign(s.params, e), Object.assign(s.originalParams, e)
                })), i("setTranslate", (() => {
                    s.params.effect === t && r()
                })), i("setTransition", ((e, i) => {
                    s.params.effect === t && n(i)
                })), i("transitionEnd", (() => {
                    if (s.params.effect === t && l) {
                        if (!d || !d().slideShadows) return;
                        s.slides.each((e => {
                            s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                        })), l()
                    }
                })), i("virtualUpdate", (() => {
                    s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame((() => {
                        c && s.slides && s.slides.length && (r(), c = !1)
                    })))
                }))
            }

            function oe(e, t) {
                return e.transformEl ? t.find(e.transformEl).css({
                    "backface-visibility": "hidden",
                    "-webkit-backface-visibility": "hidden"
                }) : t
            }

            function le({
                swiper: e,
                duration: t,
                transformEl: s,
                allSlides: i
            }) {
                const {
                    slides: r,
                    activeIndex: n,
                    $wrapperEl: a
                } = e;
                if (e.params.virtualTranslate && 0 !== t) {
                    let t, o = !1;
                    t = i ? s ? r.find(s) : r : s ? r.eq(n).find(s) : r.eq(n), t.transitionEnd((() => {
                        if (o) return;
                        if (!e || e.destroyed) return;
                        o = !0, e.animating = !1;
                        const t = ["webkitTransitionEnd", "transitionend"];
                        for (let e = 0; e < t.length; e += 1) a.trigger(t[e])
                    }))
                }
            }

            function de({
                swiper: e,
                extendParams: t,
                on: s
            }) {
                t({
                    fadeEffect: {
                        crossFade: !1,
                        transformEl: null
                    }
                });
                ae({
                    effect: "fade",
                    swiper: e,
                    on: s,
                    setTranslate: () => {
                        const {
                            slides: t
                        } = e, s = e.params.fadeEffect;
                        for (let i = 0; i < t.length; i += 1) {
                            const t = e.slides.eq(i);
                            let r = -t[0].swiperSlideOffset;
                            e.params.virtualTranslate || (r -= e.translate);
                            let n = 0;
                            e.isHorizontal() || (n = r, r = 0);
                            const a = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                            oe(s, t).css({
                                opacity: a
                            }).transform(`translate3d(${r}px, ${n}px, 0px)`)
                        }
                    },
                    setTransition: t => {
                        const {
                            transformEl: s
                        } = e.params.fadeEffect;
                        (s ? e.slides.find(s) : e.slides).transition(t), le({
                            swiper: e,
                            duration: t,
                            transformEl: s,
                            allSlides: !0
                        })
                    },
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !e.params.cssMode
                    })
                })
            }

            function ce({
                swiper: e,
                extendParams: t,
                on: s
            }) {
                t({
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                });
                const i = (e, t, s) => {
                    let i = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                        r = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                    0 === i.length && (i = x(`<div class="swiper-slide-shadow-${s?"left":"top"}"></div>`), e.append(i)), 0 === r.length && (r = x(`<div class="swiper-slide-shadow-${s?"right":"bottom"}"></div>`), e.append(r)), i.length && (i[0].style.opacity = Math.max(-t, 0)), r.length && (r[0].style.opacity = Math.max(t, 0))
                };
                ae({
                    effect: "cube",
                    swiper: e,
                    on: s,
                    setTranslate: () => {
                        const {
                            $el: t,
                            $wrapperEl: s,
                            slides: r,
                            width: n,
                            height: a,
                            rtlTranslate: o,
                            size: l,
                            browser: d
                        } = e, c = e.params.cubeEffect, p = e.isHorizontal(), u = e.virtual && e.params.virtual.enabled;
                        let f, h = 0;
                        c.shadow && (p ? (f = s.find(".swiper-cube-shadow"), 0 === f.length && (f = x('<div class="swiper-cube-shadow"></div>'), s.append(f)), f.css({
                            height: `${n}px`
                        })) : (f = t.find(".swiper-cube-shadow"), 0 === f.length && (f = x('<div class="swiper-cube-shadow"></div>'), t.append(f))));
                        for (let e = 0; e < r.length; e += 1) {
                            const t = r.eq(e);
                            let s = e;
                            u && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                            let n = 90 * s,
                                a = Math.floor(n / 360);
                            o && (n = -n, a = Math.floor(-n / 360));
                            const d = Math.max(Math.min(t[0].progress, 1), -1);
                            let f = 0,
                                m = 0,
                                g = 0;
                            s % 4 === 0 ? (f = 4 * -a * l, g = 0) : (s - 1) % 4 === 0 ? (f = 0, g = 4 * -a * l) : (s - 2) % 4 === 0 ? (f = l + 4 * a * l, g = l) : (s - 3) % 4 === 0 && (f = -l, g = 3 * l + 4 * l * a), o && (f = -f), p || (m = f, f = 0);
                            const w = `rotateX(${p?0:-n}deg) rotateY(${p?n:0}deg) translate3d(${f}px, ${m}px, ${g}px)`;
                            d <= 1 && d > -1 && (h = 90 * s + 90 * d, o && (h = 90 * -s - 90 * d)), t.transform(w), c.slideShadows && i(t, d, p)
                        }
                        if (s.css({
                                "-webkit-transform-origin": `50% 50% -${l/2}px`,
                                "transform-origin": `50% 50% -${l/2}px`
                            }), c.shadow)
                            if (p) f.transform(`translate3d(0px, ${n/2+c.shadowOffset}px, ${-n/2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`);
                            else {
                                const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                                    t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                                    s = c.shadowScale,
                                    i = c.shadowScale / t,
                                    r = c.shadowOffset;
                                f.transform(`scale3d(${s}, 1, ${i}) translate3d(0px, ${a/2+r}px, ${-a/2/i}px) rotateX(-90deg)`)
                            } const m = d.isSafari || d.isWebView ? -l / 2 : 0;
                        s.transform(`translate3d(0px,0,${m}px) rotateX(${e.isHorizontal()?0:h}deg) rotateY(${e.isHorizontal()?-h:0}deg)`), s[0].style.setProperty("--swiper-cube-translate-z", `${m}px`)
                    },
                    setTransition: t => {
                        const {
                            $el: s,
                            slides: i
                        } = e;
                        i.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.cubeEffect.shadow && !e.isHorizontal() && s.find(".swiper-cube-shadow").transition(t)
                    },
                    recreateShadows: () => {
                        const t = e.isHorizontal();
                        e.slides.each((e => {
                            const s = Math.max(Math.min(e.progress, 1), -1);
                            i(x(e), s, t)
                        }))
                    },
                    getEffectParams: () => e.params.cubeEffect,
                    perspective: () => !0,
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    })
                })
            }

            function pe(e, t, s) {
                const i = "swiper-slide-shadow" + (s ? `-${s}` : ""),
                    r = e.transformEl ? t.find(e.transformEl) : t;
                let n = r.children(`.${i}`);
                return n.length || (n = x(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`), r.append(n)), n
            }

            function ue({
                swiper: e,
                extendParams: t,
                on: s
            }) {
                t({
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0,
                        transformEl: null
                    }
                });
                const i = (t, s, i) => {
                    let r = e.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                        n = e.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                    0 === r.length && (r = pe(i, t, e.isHorizontal() ? "left" : "top")), 0 === n.length && (n = pe(i, t, e.isHorizontal() ? "right" : "bottom")), r.length && (r[0].style.opacity = Math.max(-s, 0)), n.length && (n[0].style.opacity = Math.max(s, 0))
                };
                ae({
                    effect: "flip",
                    swiper: e,
                    on: s,
                    setTranslate: () => {
                        const {
                            slides: t,
                            rtlTranslate: s
                        } = e, r = e.params.flipEffect;
                        for (let n = 0; n < t.length; n += 1) {
                            const a = t.eq(n);
                            let o = a[0].progress;
                            e.params.flipEffect.limitRotation && (o = Math.max(Math.min(a[0].progress, 1), -1));
                            const l = a[0].swiperSlideOffset;
                            let d = -180 * o,
                                c = 0,
                                p = e.params.cssMode ? -l - e.translate : -l,
                                u = 0;
                            e.isHorizontal() ? s && (d = -d) : (u = p, p = 0, c = -d, d = 0), a[0].style.zIndex = -Math.abs(Math.round(o)) + t.length, r.slideShadows && i(a, o, r);
                            const f = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                            oe(r, a).transform(f)
                        }
                    },
                    setTransition: t => {
                        const {
                            transformEl: s
                        } = e.params.flipEffect;
                        (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), le({
                            swiper: e,
                            duration: t,
                            transformEl: s
                        })
                    },
                    recreateShadows: () => {
                        const t = e.params.flipEffect;
                        e.slides.each((s => {
                            const r = x(s);
                            let n = r[0].progress;
                            e.params.flipEffect.limitRotation && (n = Math.max(Math.min(s.progress, 1), -1)), i(r, n, t)
                        }))
                    },
                    getEffectParams: () => e.params.flipEffect,
                    perspective: () => !0,
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !e.params.cssMode
                    })
                })
            }

            function fe({
                swiper: e,
                extendParams: t,
                on: s
            }) {
                t({
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        scale: 1,
                        modifier: 1,
                        slideShadows: !0,
                        transformEl: null
                    }
                });
                ae({
                    effect: "coverflow",
                    swiper: e,
                    on: s,
                    setTranslate: () => {
                        const {
                            width: t,
                            height: s,
                            slides: i,
                            slidesSizesGrid: r
                        } = e, n = e.params.coverflowEffect, a = e.isHorizontal(), o = e.translate, l = a ? t / 2 - o : s / 2 - o, d = a ? n.rotate : -n.rotate, c = n.depth;
                        for (let e = 0, t = i.length; e < t; e += 1) {
                            const t = i.eq(e),
                                s = r[e],
                                o = (l - t[0].swiperSlideOffset - s / 2) / s,
                                p = "function" === typeof n.modifier ? n.modifier(o) : o * n.modifier;
                            let u = a ? d * p : 0,
                                f = a ? 0 : d * p,
                                h = -c * Math.abs(p),
                                m = n.stretch;
                            "string" === typeof m && -1 !== m.indexOf("%") && (m = parseFloat(n.stretch) / 100 * s);
                            let g = a ? 0 : m * p,
                                w = a ? m * p : 0,
                                v = 1 - (1 - n.scale) * Math.abs(p);
                            Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(u) < .001 && (u = 0), Math.abs(f) < .001 && (f = 0), Math.abs(v) < .001 && (v = 0);
                            const b = `translate3d(${w}px,${g}px,${h}px)  rotateX(${f}deg) rotateY(${u}deg) scale(${v})`;
                            if (oe(n, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(p)), n.slideShadows) {
                                let e = a ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                                    s = a ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                0 === e.length && (e = pe(n, t, a ? "left" : "top")), 0 === s.length && (s = pe(n, t, a ? "right" : "bottom")), e.length && (e[0].style.opacity = p > 0 ? p : 0), s.length && (s[0].style.opacity = -p > 0 ? -p : 0)
                            }
                        }
                    },
                    setTransition: t => {
                        const {
                            transformEl: s
                        } = e.params.coverflowEffect;
                        (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
                    },
                    perspective: () => !0,
                    overwriteParams: () => ({
                        watchSlidesProgress: !0
                    })
                })
            }

            function he({
                swiper: e,
                extendParams: t,
                on: s
            }) {
                t({
                    cardsEffect: {
                        slideShadows: !0,
                        transformEl: null,
                        rotate: !0,
                        perSlideRotate: 2,
                        perSlideOffset: 8
                    }
                });
                ae({
                    effect: "cards",
                    swiper: e,
                    on: s,
                    setTranslate: () => {
                        const {
                            slides: t,
                            activeIndex: s
                        } = e, i = e.params.cardsEffect, {
                            startTranslate: r,
                            isTouched: n
                        } = e.touchEventsData, a = e.translate;
                        for (let o = 0; o < t.length; o += 1) {
                            const l = t.eq(o),
                                d = l[0].progress,
                                c = Math.min(Math.max(d, -4), 4);
                            let p = l[0].swiperSlideOffset;
                            e.params.centeredSlides && !e.params.cssMode && e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (p -= t[0].swiperSlideOffset);
                            let u = e.params.cssMode ? -p - e.translate : -p,
                                f = 0;
                            const h = -100 * Math.abs(c);
                            let m = 1,
                                g = -i.perSlideRotate * c,
                                w = i.perSlideOffset - .75 * Math.abs(c);
                            const v = e.virtual && e.params.virtual.enabled ? e.virtual.from + o : o,
                                b = (v === s || v === s - 1) && c > 0 && c < 1 && (n || e.params.cssMode) && a < r,
                                y = (v === s || v === s + 1) && c < 0 && c > -1 && (n || e.params.cssMode) && a > r;
                            if (b || y) {
                                const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                                g += -28 * c * e, m += -.5 * e, w += 96 * e, f = -25 * e * Math.abs(c) + "%"
                            }
                            if (u = c < 0 ? `calc(${u}px + (${w*Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${w*Math.abs(c)}%))` : `${u}px`, !e.isHorizontal()) {
                                const e = f;
                                f = u, u = e
                            }
                            const x = c < 0 ? "" + (1 + (1 - m) * c) : "" + (1 - (1 - m) * c),
                                A = `\n        translate3d(${u}, ${f}, ${h}px)\n        rotateZ(${i.rotate?g:0}deg)\n        scale(${x})\n      `;
                            if (i.slideShadows) {
                                let e = l.find(".swiper-slide-shadow");
                                0 === e.length && (e = pe(i, l)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                            }
                            l[0].style.zIndex = -Math.abs(Math.round(d)) + t.length;
                            oe(i, l).transform(A)
                        }
                    },
                    setTransition: t => {
                        const {
                            transformEl: s
                        } = e.params.cardsEffect;
                        (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), le({
                            swiper: e,
                            duration: t,
                            transformEl: s
                        })
                    },
                    perspective: () => !0,
                    overwriteParams: () => ({
                        watchSlidesProgress: !0,
                        virtualTranslate: !e.params.cssMode
                    })
                })
            }

            function me(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function ge(e, t) {
                const s = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
                    "undefined" === typeof e[s] ? e[s] = t[s] : me(t[s]) && me(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : ge(e[s], t[s]) : e[s] = t[s]
                }))
            }

            function we(e = {}) {
                return e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl
            }

            function ve(e = {}) {
                return e.pagination && "undefined" === typeof e.pagination.el
            }

            function be(e = {}) {
                return e.scrollbar && "undefined" === typeof e.scrollbar.el
            }

            function ye(e = "") {
                const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
                    s = [];
                return t.forEach((e => {
                    s.indexOf(e) < 0 && s.push(e)
                })), s.join(" ")
            }
            const xe = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"];
            const Ae = (e, t) => {
                let s = t.slidesPerView;
                if (t.breakpoints) {
                    const e = ne.prototype.getBreakpoint(t.breakpoints),
                        i = e in t.breakpoints ? t.breakpoints[e] : void 0;
                    i && i.slidesPerView && (s = i.slidesPerView)
                }
                let i = Math.ceil(parseFloat(t.loopedSlides || s, 10));
                return i += t.loopAdditionalSlides, i > e.length && t.loopedSlidesLimit && (i = e.length), i
            };

            function Se(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function Ce(e) {
                const t = [];
                return n.Children.toArray(e).forEach((e => {
                    Se(e) ? t.push(e) : e.props && e.props.children && Ce(e.props.children).forEach((e => t.push(e)))
                })), t
            }

            function Ee(e) {
                const t = [],
                    s = {
                        "container-start": [],
                        "container-end": [],
                        "wrapper-start": [],
                        "wrapper-end": []
                    };
                return n.Children.toArray(e).forEach((e => {
                    if (Se(e)) t.push(e);
                    else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        const i = Ce(e.props.children);
                        i.length > 0 ? i.forEach((e => t.push(e))) : s["container-end"].push(e)
                    } else s["container-end"].push(e)
                })), {
                    slides: t,
                    slots: s
                }
            }

            function Te({
                swiper: e,
                slides: t,
                passedParams: s,
                changedParams: i,
                nextEl: r,
                prevEl: n,
                scrollbarEl: a,
                paginationEl: o
            }) {
                const l = i.filter((e => "children" !== e && "direction" !== e)),
                    {
                        params: d,
                        pagination: c,
                        navigation: p,
                        scrollbar: u,
                        virtual: f,
                        thumbs: h
                    } = e;
                let m, g, w, v, b;
                i.includes("thumbs") && s.thumbs && s.thumbs.swiper && d.thumbs && !d.thumbs.swiper && (m = !0), i.includes("controller") && s.controller && s.controller.control && d.controller && !d.controller.control && (g = !0), i.includes("pagination") && s.pagination && (s.pagination.el || o) && (d.pagination || !1 === d.pagination) && c && !c.el && (w = !0), i.includes("scrollbar") && s.scrollbar && (s.scrollbar.el || a) && (d.scrollbar || !1 === d.scrollbar) && u && !u.el && (v = !0), i.includes("navigation") && s.navigation && (s.navigation.prevEl || n) && (s.navigation.nextEl || r) && (d.navigation || !1 === d.navigation) && p && !p.prevEl && !p.nextEl && (b = !0);
                if (l.forEach((t => {
                        if (me(d[t]) && me(s[t])) ge(d[t], s[t]);
                        else {
                            const r = s[t];
                            !0 !== r && !1 !== r || "navigation" !== t && "pagination" !== t && "scrollbar" !== t ? d[t] = s[t] : !1 === r && e[i = t] && (e[i].destroy(), "navigation" === i ? (d[i].prevEl = void 0, d[i].nextEl = void 0, e[i].prevEl = void 0, e[i].nextEl = void 0) : (d[i].el = void 0, e[i].el = void 0))
                        }
                        var i
                    })), l.includes("controller") && !g && e.controller && e.controller.control && d.controller && d.controller.control && (e.controller.control = d.controller.control), i.includes("children") && t && f && d.virtual.enabled ? (f.slides = t, f.update(!0)) : i.includes("children") && e.lazy && e.params.lazy.enabled && e.lazy.load(), m) {
                    h.init() && h.update(!0)
                }
                g && (e.controller.control = d.controller.control), w && (o && (d.pagination.el = o), c.init(), c.render(), c.update()), v && (a && (d.scrollbar.el = a), u.init(), u.updateSize(), u.setTranslate()), b && (r && (d.navigation.nextEl = r), n && (d.navigation.prevEl = n), p.init(), p.update()), i.includes("allowSlideNext") && (e.allowSlideNext = s.allowSlideNext), i.includes("allowSlidePrev") && (e.allowSlidePrev = s.allowSlidePrev), i.includes("direction") && e.changeDirection(s.direction, !1), e.update()
            }

            function Me(e, t) {
                return "undefined" === typeof window ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
            }
            const Pe = (0, n.createContext)(null),
                ke = (0, n.createContext)(null);

            function Oe() {
                return Oe = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                    }
                    return e
                }, Oe.apply(this, arguments)
            }
            const _e = (0, n.forwardRef)((function(e, t) {
                let {
                    className: s,
                    tag: i = "div",
                    wrapperTag: r = "div",
                    children: a,
                    onSwiper: o,
                    ...l
                } = void 0 === e ? {} : e, d = !1;
                const [c, p] = (0, n.useState)("swiper"), [u, f] = (0, n.useState)(null), [h, m] = (0, n.useState)(!1), g = (0, n.useRef)(!1), w = (0, n.useRef)(null), v = (0, n.useRef)(null), b = (0, n.useRef)(null), y = (0, n.useRef)(null), x = (0, n.useRef)(null), A = (0, n.useRef)(null), S = (0, n.useRef)(null), C = (0, n.useRef)(null), {
                    params: E,
                    passedParams: T,
                    rest: M,
                    events: P
                } = function(e = {}, t = !0) {
                    const s = {
                            on: {}
                        },
                        i = {},
                        r = {};
                    ge(s, ne.defaults), ge(s, ne.extendedDefaults), s._emitClasses = !0, s.init = !1;
                    const n = {},
                        a = xe.map((e => e.replace(/_/, ""))),
                        o = Object.assign({}, e);
                    return Object.keys(o).forEach((o => {
                        "undefined" !== typeof e[o] && (a.indexOf(o) >= 0 ? me(e[o]) ? (s[o] = {}, r[o] = {}, ge(s[o], e[o]), ge(r[o], e[o])) : (s[o] = e[o], r[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" === typeof e[o] ? t ? i[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : s.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : n[o] = e[o])
                    })), ["navigation", "pagination", "scrollbar"].forEach((e => {
                        !0 === s[e] && (s[e] = {}), !1 === s[e] && delete s[e]
                    })), {
                        params: s,
                        passedParams: r,
                        rest: n,
                        events: i
                    }
                }(l), {
                    slides: k,
                    slots: O
                } = Ee(a), _ = () => {
                    m(!h)
                };
                Object.assign(E.on, {
                    _containerClasses(e, t) {
                        p(t)
                    }
                });
                const L = () => {
                    if (Object.assign(E.on, P), d = !0, v.current = new ne(E), v.current.loopCreate = () => {}, v.current.loopDestroy = () => {}, E.loop && (v.current.loopedSlides = Ae(k, E)), v.current.virtual && v.current.params.virtual.enabled) {
                        v.current.virtual.slides = k;
                        const e = {
                            cache: !1,
                            slides: k,
                            renderExternal: f,
                            renderExternalUpdate: !1
                        };
                        ge(v.current.params.virtual, e), ge(v.current.originalParams.virtual, e)
                    }
                };
                w.current || L(), v.current && v.current.on("_beforeBreakpoint", _);
                return (0, n.useEffect)((() => () => {
                    v.current && v.current.off("_beforeBreakpoint", _)
                })), (0, n.useEffect)((() => {
                    !g.current && v.current && (v.current.emitSlidesClasses(), g.current = !0)
                })), Me((() => {
                    if (t && (t.current = w.current), w.current) return v.current.destroyed && L(),
                        function({
                            el: e,
                            nextEl: t,
                            prevEl: s,
                            paginationEl: i,
                            scrollbarEl: r,
                            swiper: n
                        }, a) {
                            we(a) && t && s && (n.params.navigation.nextEl = t, n.originalParams.navigation.nextEl = t, n.params.navigation.prevEl = s, n.originalParams.navigation.prevEl = s), ve(a) && i && (n.params.pagination.el = i, n.originalParams.pagination.el = i), be(a) && r && (n.params.scrollbar.el = r, n.originalParams.scrollbar.el = r), n.init(e)
                        }({
                            el: w.current,
                            nextEl: x.current,
                            prevEl: A.current,
                            paginationEl: S.current,
                            scrollbarEl: C.current,
                            swiper: v.current
                        }, E), o && o(v.current), () => {
                            v.current && !v.current.destroyed && v.current.destroy(!0, !1)
                        }
                }), []), Me((() => {
                    !d && P && v.current && Object.keys(P).forEach((e => {
                        v.current.on(e, P[e])
                    }));
                    const e = function(e, t, s, i, r) {
                        const n = [];
                        if (!t) return n;
                        const a = e => {
                            n.indexOf(e) < 0 && n.push(e)
                        };
                        if (s && i) {
                            const e = i.map(r),
                                t = s.map(r);
                            e.join("") !== t.join("") && a("children"), i.length !== s.length && a("children")
                        }
                        return xe.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((s => {
                            if (s in e && s in t)
                                if (me(e[s]) && me(t[s])) {
                                    const i = Object.keys(e[s]),
                                        r = Object.keys(t[s]);
                                    i.length !== r.length ? a(s) : (i.forEach((i => {
                                        e[s][i] !== t[s][i] && a(s)
                                    })), r.forEach((i => {
                                        e[s][i] !== t[s][i] && a(s)
                                    })))
                                } else e[s] !== t[s] && a(s)
                        })), n
                    }(T, b.current, k, y.current, (e => e.key));
                    return b.current = T, y.current = k, e.length && v.current && !v.current.destroyed && Te({
                        swiper: v.current,
                        slides: k,
                        passedParams: T,
                        changedParams: e,
                        nextEl: x.current,
                        prevEl: A.current,
                        scrollbarEl: C.current,
                        paginationEl: S.current
                    }), () => {
                        P && v.current && Object.keys(P).forEach((e => {
                            v.current.off(e, P[e])
                        }))
                    }
                })), Me((() => {
                    var e;
                    !(e = v.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
                }), [u]), n.createElement(i, Oe({
                    ref: w,
                    className: ye(`${c}${s?` ${s}`:""}`)
                }, M), n.createElement(ke.Provider, {
                    value: v.current
                }, O["container-start"], n.createElement(r, {
                    className: "swiper-wrapper"
                }, O["wrapper-start"], E.virtual ? function(e, t, s) {
                    if (!s) return null;
                    const i = e.isHorizontal() ? {
                        [e.rtlTranslate ? "right" : "left"]: `${s.offset}px`
                    } : {
                        top: `${s.offset}px`
                    };
                    return t.filter(((e, t) => t >= s.from && t <= s.to)).map((t => n.cloneElement(t, {
                        swiper: e,
                        style: i
                    })))
                }(v.current, k, u) : !E.loop || v.current && v.current.destroyed ? k.map((e => n.cloneElement(e, {
                    swiper: v.current
                }))) : function(e, t, s) {
                    const i = t.map(((t, s) => n.cloneElement(t, {
                        swiper: e,
                        "data-swiper-slide-index": s
                    })));

                    function r(e, t, i) {
                        return n.cloneElement(e, {
                            key: `${e.key}-duplicate-${t}-${i}`,
                            className: `${e.props.className||""} ${s.slideDuplicateClass}`
                        })
                    }
                    if (s.loopFillGroupWithBlank) {
                        const e = s.slidesPerGroup - i.length % s.slidesPerGroup;
                        if (e !== s.slidesPerGroup)
                            for (let t = 0; t < e; t += 1) {
                                const e = n.createElement("div", {
                                    className: `${s.slideClass} ${s.slideBlankClass}`
                                });
                                i.push(e)
                            }
                    }
                    "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = i.length);
                    const a = Ae(i, s),
                        o = [],
                        l = [];
                    for (let e = 0; e < a; e += 1) {
                        const t = e - Math.floor(e / i.length) * i.length;
                        l.push(r(i[t], e, "append")), o.unshift(r(i[i.length - t - 1], e, "prepend"))
                    }
                    return e && (e.loopedSlides = a), [...o, ...i, ...l]
                }(v.current, k, E), O["wrapper-end"]), we(E) && n.createElement(n.Fragment, null, n.createElement("div", {
                    ref: A,
                    className: "swiper-button-prev"
                }), n.createElement("div", {
                    ref: x,
                    className: "swiper-button-next"
                })), be(E) && n.createElement("div", {
                    ref: C,
                    className: "swiper-scrollbar"
                }), ve(E) && n.createElement("div", {
                    ref: S,
                    className: "swiper-pagination"
                }), O["container-end"]))
            }));

            function Le() {
                return Le = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                    }
                    return e
                }, Le.apply(this, arguments)
            }
            _e.displayName = "Swiper";
            const $e = (0, n.forwardRef)((function(e, t) {
                let {
                    tag: s = "div",
                    children: i,
                    className: r = "",
                    swiper: a,
                    zoom: o,
                    virtualIndex: l,
                    ...d
                } = void 0 === e ? {} : e;
                const c = (0, n.useRef)(null),
                    [p, u] = (0, n.useState)("swiper-slide");

                function f(e, t, s) {
                    t === c.current && u(s)
                }
                Me((() => {
                    if (t && (t.current = c.current), c.current && a) {
                        if (!a.destroyed) return a.on("_slideClass", f), () => {
                            a && a.off("_slideClass", f)
                        };
                        "swiper-slide" !== p && u("swiper-slide")
                    }
                })), Me((() => {
                    a && c.current && !a.destroyed && u(a.getSlideClasses(c.current))
                }), [a]);
                const h = {
                        isActive: p.indexOf("swiper-slide-active") >= 0 || p.indexOf("swiper-slide-duplicate-active") >= 0,
                        isVisible: p.indexOf("swiper-slide-visible") >= 0,
                        isDuplicate: p.indexOf("swiper-slide-duplicate") >= 0,
                        isPrev: p.indexOf("swiper-slide-prev") >= 0 || p.indexOf("swiper-slide-duplicate-prev") >= 0,
                        isNext: p.indexOf("swiper-slide-next") >= 0 || p.indexOf("swiper-slide-duplicate-next") >= 0
                    },
                    m = () => "function" === typeof i ? i(h) : i;
                return n.createElement(s, Le({
                    ref: c,
                    className: ye(`${p}${r?` ${r}`:""}`),
                    "data-swiper-slide-index": l
                }, d), n.createElement(Pe.Provider, {
                    value: h
                }, o ? n.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof o ? o : void 0
                }, m()) : m()))
            }));
            $e.displayName = "SwiperSlide";
            const Ie = (0, a.css)(["@font-face{font-family:'swiper-icons';src:url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA') format('woff');font-weight:400;font-style:normal;}:root{--swiper-theme-color:#007aff;}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;}.swiper-vertical > .swiper-wrapper{flex-direction:column;}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box;}.swiper-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0);}.swiper-pointer-events{touch-action:pan-y;}.swiper-pointer-events.swiper-vertical{touch-action:pan-x;}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;}.swiper-slide-invisible-blank{visibility:hidden;}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto;}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height;}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);backface-visibility:hidden;}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px;}.swiper-3d .swiper-wrapper,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d;}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10;}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,0.15);}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient( to left,rgba(0,0,0,0.5),rgba(0,0,0,0) );}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient( to right,rgba(0,0,0,0.5),rgba(0,0,0,0) );}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient( to top,rgba(0,0,0,0.5),rgba(0,0,0,0) );}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient( to bottom,rgba(0,0,0,0.5),rgba(0,0,0,0) );}.swiper-css-mode > .swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none;}.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar{display:none;}.swiper-css-mode > .swiper-wrapper > .swiper-slide{scroll-snap-align:start start;}.swiper-horizontal.swiper-css-mode > .swiper-wrapper{scroll-snap-type:x mandatory;}.swiper-vertical.swiper-css-mode > .swiper-wrapper{scroll-snap-type:y mandatory;}.swiper-centered > .swiper-wrapper::before{content:'';flex-shrink:0;order:9999;}.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before);}.swiper-centered.swiper-horizontal > .swiper-wrapper::before{height:100%;width:var(--swiper-centered-offset-after);}.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before);}.swiper-centered.swiper-vertical > .swiper-wrapper::before{width:100%;height:var(--swiper-centered-offset-after);}.swiper-centered > .swiper-wrapper > .swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always;}"]),
                ze = (0, a.css)([""]),
                Be = (0, a.css)([".swiper-cards{overflow:visible;}.swiper-cards .swiper-slide{transform-origin:center bottom;backface-visibility:hidden;}"]),
                Ne = (0, a.css)([".swiper-cube{overflow:visible;}.swiper-cube .swiper-slide{pointer-events:none;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%;}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none;}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0;}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto;}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-prev,.swiper-cube .swiper-slide-next + .swiper-slide{pointer-events:auto;visibility:visible;}.swiper-cube .swiper-slide-shadow-top,.swiper-cube .swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-right{z-index:0;backface-visibility:hidden;}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:0.6;z-index:0;}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;-webkit-filter:blur(50px);filter:blur(50px);}"]),
                Ge = (0, a.css)([".swiper-flip{overflow:visible;}.swiper-flip .swiper-slide{pointer-events:none;backface-visibility:hidden;z-index:1;}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none;}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto;}.swiper-flip .swiper-slide-shadow-top,.swiper-flip .swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-right{z-index:0;backface-visibility:hidden;}"]),
                De = (0, a.css)([".swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out;}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity;}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none;}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto;}"]);
            var je = s(4260);
            const He = (0, n.createContext)(void 0);
            var Re = s(3832);
            const Ye = {
                cube: {
                    cubeEffect: {
                        shadow: !0,
                        slideShadows: !0,
                        shadowOffset: 20,
                        shadowScale: .94
                    }
                },
                coverflow: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: .3,
                        slideShadows: !1
                    }
                },
                slide: {},
                flip: {},
                cards: {
                    cardsEffect: {
                        slideShadows: !1
                    }
                },
                fade: {}
            };
            var Fe = s(6996),
                Ve = s(7624);
            const We = e => (0, Ve.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16",
                    ...e,
                    children: (0, Ve.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M8.96 1.96a1 1 0 0 1 1.497 1.32l-.083.094L5.747 8l4.627 4.626a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.084l-.094-.084-5.334-5.333a1 1 0 0 1-.083-1.32l.083-.094L8.96 1.96Z"
                    })
                }),
                qe = e => (0, Ve.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16",
                    ...e,
                    children: (0, Ve.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M7.04 1.96a1 1 0 0 0-1.497 1.32l.083.094L10.253 8l-4.627 4.626a1 1 0 0 0-.083 1.32l.083.094a1 1 0 0 0 1.32.084l.094-.084 5.334-5.333a1 1 0 0 0 .083-1.32l-.083-.094L7.04 1.96Z"
                    })
                }),
                Xe = e => (0, Ve.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    ...e,
                    children: (0, Ve.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M10.576 3.076a.6.6 0 0 1 .848 0l6.5 6.5A.603.603 0 0 1 18.1 10l-.004-.07a.603.603 0 0 1 .003.043L18.1 10a.61.61 0 0 1-.096.325.597.597 0 0 1-.08.1l.066-.08a.601.601 0 0 1-.006.01l-.06.07-6.5 6.5-.083.069a.6.6 0 0 1-.765-.07l-.07-.083a.6.6 0 0 1 .07-.765L16.05 10.6H2.5l-.097-.008A.6.6 0 0 1 2.5 9.4h13.55l-5.474-5.476-.07-.083a.6.6 0 0 1 .07-.765Z"
                    })
                });
            var Ze = s(9104),
                Qe = s(2880),
                Ue = s(9048),
                Ke = s(6468);

            function Je(e) {
                let {
                    direction: t,
                    ghost: s = !1,
                    size: i,
                    backgroundColor: r = "rgba(17, 17, 17, 0.5)",
                    backgroundColorOnHover: n,
                    iconColor: a,
                    iconColorOnHover: o,
                    iconVariant: l = "angle",
                    onClick: d
                } = e;
                const [c, p] = tt(s, r, n), u = et[l][t], f = {
                    backgroundColor: c,
                    fill: a || (0, Ze.a)(c),
                    boxShadow: s ? "none" : "0 4px 12px 0 rgba(0, 0, 0, 0.3)"
                };
                return (0, Ve.jsx)(st, {
                    style: {
                        width: i,
                        height: i
                    },
                    initial: f,
                    animate: f,
                    whileHover: {
                        backgroundColor: p,
                        fill: o || a || (0, Ze.a)(p),
                        boxShadow: s ? "none" : "0 4px 12px 0 rgba(0, 0, 0, 0.5)"
                    },
                    whileTap: {
                        boxShadow: s ? "none" : "0 2px 6px 0 rgba(0, 0, 0, 0.5)"
                    },
                    transition: Qe.a.default,
                    onClick: d,
                    children: (0, Ve.jsx)(it, {
                        component: u,
                        size: i / 2,
                        _withShadow: s
                    })
                })
            }
            const et = {
                    angle: {
                        left: We,
                        right: qe
                    },
                    arrow: {
                        left: Xe,
                        right: Xe
                    }
                },
                tt = (e, t, s) => (0, n.useMemo)((() => {
                    let i, r;
                    return e ? (i = (0, Ue.o)(t, 0), r = t) : (i = t, r = (0, Ue.o)(t, 1)), r = s || r, [i, r]
                }), [e, t, s]),
                st = (0, a.default)(Fe.q.div).withConfig({
                    displayName: "ArrowControl__ArrowControlContainer",
                    componentId: "sc-ps7sz3-0"
                })(["position:relative;display:block;padding:0;border:none;outline:none;border-radius:50% 50%;cursor:pointer;-webkit-tap-highlight-color:transparent;"]),
                it = (0, a.default)(Ke.G).withConfig({
                    displayName: "ArrowControl__ArrowControlIcon",
                    componentId: "sc-ps7sz3-1"
                })(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);", ""], (e => e._withShadow && (0, a.css)(["svg{filter:drop-shadow(0 0 2px rgba(0,0,0,0.4));}"])));

            function rt(e, t, s, i) {
                return e < 6 || !t && (s < 3 && i < 3 || s > e - 4 && i > e - 4)
            }

            function nt(e, t, s, i) {
                return !t && (i < s && 3 === s || i > s && s === e - 4)
            }

            function at(e) {
                let {
                    currentItemIndex: t,
                    items: s,
                    loop: i,
                    itemsPerSlide: r,
                    slideBy: n,
                    position: a,
                    color: o,
                    insideGap: l = 8,
                    rtl: d,
                    onSlideTo: c
                } = e;
                const p = "slide" === n,
                    u = p ? r : 1,
                    f = Math.ceil(t / u),
                    h = function(e, t, s, i, r) {
                        let n = Math.ceil(e / s);
                        return i || r || (n -= t - 1), n
                    }(s.length, r, u, i, p),
                    m = function(e, t, s, i) {
                        if (i) {
                            if (t < 6) return 0;
                            if (e < 2) return s * (2 - e)
                        }
                        return e > t - 4 ? -s * (t - 5) : -s * (e - 2)
                    }(f, h, 14, i);
                return (0, Ve.jsx)(ot, {
                    style: {
                        width: Math.min(14 * h, 70),
                        position: "inside" === a ? "absolute" : void 0,
                        bottom: "inside" === a ? l : void 0,
                        transform: d ? "scaleX(-1)" : ""
                    },
                    children: (0, Ve.jsx)(lt, {
                        style: {
                            transform: `translate(${m}px, 0px)`
                        },
                        children: Array.from({
                            length: h
                        }).map(((e, t) => (0, Ve.jsx)(dt, {
                            _size: 6,
                            _active: t === f,
                            _color: o,
                            _isStaticBigBullet: rt(h, i, t, f),
                            _isStaticPrevNextBullet: nt(h, i, t, f),
                            _nextPrevBullet: t === f - 1 || t === f + 1,
                            onClick: () => (e => {
                                c(e * u)
                            })(t)
                        }, t * u)))
                    })
                })
            }
            const ot = (0, a.default)(Fe.q.div).withConfig({
                    displayName: "BulletsControl__BulletsControlContainer",
                    componentId: "sc-vxd05w-0"
                })(["display:flex;z-index:1;overflow:hidden;"]),
                lt = (0, a.default)(Fe.q.div).withConfig({
                    displayName: "BulletsControl__BulletsControlInner",
                    componentId: "sc-vxd05w-1"
                })(["display:inline-flex;transition-duration:300ms;align-items:flex-start;padding:4px 0;"]),
                dt = a.default.div.withConfig({
                    displayName: "BulletsControl__BulletsControlItem",
                    componentId: "sc-vxd05w-2"
                })(["position:relative;width:", "px;min-width:", "px;height:", "px;background:", ";border-radius:50%;margin:0 4px;transform:scale( ", " );:hover{background:", ";}:after{content:'';z-index:1;cursor:pointer;position:absolute;top:-8px;bottom:-8px;", "}"], (e => {
                    let {
                        _size: t
                    } = e;
                    return t
                }), (e => {
                    let {
                        _size: t
                    } = e;
                    return t
                }), (e => {
                    let {
                        _size: t
                    } = e;
                    return t
                }), (e => {
                    let {
                        _active: t,
                        _color: s
                    } = e;
                    return t ? s : (0, Ue.o)(s, .5)
                }), (e => {
                    let {
                        _isStaticBigBullet: t,
                        _isStaticPrevNextBullet: s,
                        _nextPrevBullet: i,
                        _active: r
                    } = e;
                    return r || t ? "1" : i || s ? "0.66" : "0.33"
                }), (e => {
                    let {
                        _color: t
                    } = e;
                    return t
                }), (e => {
                    let {
                        _isStaticBigBullet: t,
                        _isStaticPrevNextBullet: s,
                        _nextPrevBullet: i,
                        _active: r
                    } = e;
                    return r || t ? (0, a.css)(["left:-4px;right:-4px;"]) : i || s ? (0, a.css)(["left:-6px;right:-6px;"]) : (0, a.css)(["left:-8px;right:-8px;"])
                }));
            ne.use([function({
                swiper: e,
                extendParams: t,
                on: s,
                emit: i
            }) {
                let r;

                function n() {
                    if (!e.size) return e.autoplay.running = !1, void(e.autoplay.paused = !1);
                    const t = e.slides.eq(e.activeIndex);
                    let s = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(r), r = A((() => {
                        let t;
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), i("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), i("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(0, e.params.speed, !0, !0), i("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), i("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && n()
                    }), s)
                }

                function a() {
                    return "undefined" === typeof r && (!e.autoplay.running && (e.autoplay.running = !0, i("autoplayStart"), n(), !0))
                }

                function o() {
                    return !!e.autoplay.running && ("undefined" !== typeof r && (r && (clearTimeout(r), r = void 0), e.autoplay.running = !1, i("autoplayStop"), !0))
                }

                function l(t) {
                    e.autoplay.running && (e.autoplay.paused || (r && clearTimeout(r), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((t => {
                        e.$wrapperEl[0].addEventListener(t, c)
                    })) : (e.autoplay.paused = !1, n())))
                }

                function d() {
                    const t = p();
                    "hidden" === t.visibilityState && e.autoplay.running && l(), "visible" === t.visibilityState && e.autoplay.paused && (n(), e.autoplay.paused = !1)
                }

                function c(t) {
                    e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((t => {
                        e.$wrapperEl[0].removeEventListener(t, c)
                    })), e.autoplay.paused = !1, e.autoplay.running ? n() : o())
                }

                function u() {
                    e.params.autoplay.disableOnInteraction ? o() : (i("autoplayPause"), l()), ["transitionend", "webkitTransitionEnd"].forEach((t => {
                        e.$wrapperEl[0].removeEventListener(t, c)
                    }))
                }

                function f() {
                    e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, i("autoplayResume"), n())
                }
                e.autoplay = {
                    running: !1,
                    paused: !1
                }, t({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }), s("init", (() => {
                    if (e.params.autoplay.enabled) {
                        a();
                        p().addEventListener("visibilitychange", d), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", u), e.$el.on("mouseleave", f))
                    }
                })), s("beforeTransitionStart", ((t, s, i) => {
                    e.autoplay.running && (i || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(s) : o())
                })), s("sliderFirstMove", (() => {
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : l())
                })), s("touchEnd", (() => {
                    e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && n()
                })), s("destroy", (() => {
                    e.$el.off("mouseenter", u), e.$el.off("mouseleave", f), e.autoplay.running && o();
                    p().removeEventListener("visibilitychange", d)
                })), Object.assign(e.autoplay, {
                    pause: l,
                    run: n,
                    start: a,
                    stop: o
                })
            }]);
            const ct = (0, n.forwardRef)((function(e, t) {
                    let {
                        children: s,
                        initialItemIndex: i = 0,
                        height: a,
                        itemsPerSlide: l,
                        itemWidth: d,
                        gap: c = 0,
                        threshold: p = 20,
                        centered: u = !1,
                        loop: f = !1,
                        slideBy: h = "item",
                        withArrowControl: m = !1,
                        showArrowsControlOnHover: g = !1,
                        arrowControlPosition: w = "inside",
                        arrowControlSize: v = 32,
                        arrowControlMargin: b = 8,
                        arrowControlVariant: y = "normal",
                        arrowControlBackgroundColor: x = "rgba(17, 17, 17, 0.5)",
                        arrowControlBackgroundColorOnHover: A,
                        arrowControlIconVariant: S = "angle",
                        arrowControlIconColor: C,
                        arrowControlIconColorOnHover: E,
                        arrowControlComponent: T = Je,
                        withAutoplay: M = !1,
                        withPaginationControl: P = !0,
                        paginationControlBackgroundColor: k = "rgb(17, 17, 17)",
                        paginationControlPosition: O = "outside",
                        bulletInsideGap: _,
                        autoplayDelay: L = 5e3,
                        withoutTransition: $ = !1,
                        rtl: I = !1,
                        allowTouchMove: z = !0,
                        effect: B = "slide",
                        pauseOnHover: N = !0,
                        animationSpeed: G = 300,
                        reportSlideChangeInstantly: D = !1,
                        onReachEnd: j,
                        onSlideChange: H,
                        onVisibleItemsChange: R,
                        onCurrentItemChange: Y,
                        onSlideToPrev: F,
                        onSlideToNext: V,
                        ...W
                    } = e;
                    const q = n.Children.toArray(s).filter(n.isValidElement),
                        X = I ? "right" : "left",
                        Z = I ? "left" : "right",
                        Q = Ye[B] || {},
                        U = yt[B],
                        K = (0, n.useRef)(),
                        [J, ee] = (0, n.useState)(i),
                        [te, se] = (0, n.useState)([]),
                        [
                            [ie, re], ne
                        ] = (0, n.useState)([!1, !1]),
                        ae = (0, je.A)((e => {
                            e.isBeginning === ie && e.isEnd === re || ne([e.isBeginning, e.isEnd]), ee(e.realIndex), D && (null === H || void 0 === H || H(e));
                            const {
                                loopedSlides: t,
                                visibleSlidesIndexes: s
                            } = e;
                            if (!s) return;
                            let i;
                            i = f ? s.map((s => (s < t ? e.slides.length - s + 1 : s - t) % q.length)) : s, i.toString() !== te.toString() && se(i)
                        })),
                        oe = f || !ie,
                        le = f || !re,
                        pe = function() {
                            const [, e] = (0, n.useState)({});
                            return (0, n.useCallback)((() => e({})), [])
                        }(),
                        me = (0, n.useCallback)((() => {
                            K.current && K.current.update(), pe()
                        }), [pe]),
                        ge = (0, n.useCallback)((e => {
                            K.current && !K.current.destroyed && K.current.slideToLoop(e)
                        }), []),
                        we = (0, n.useCallback)((() => {
                            K.current && (K.current.slidePrev(), F && F(K.current.realIndex))
                        }), [F]),
                        ve = (0, n.useCallback)((() => {
                            K.current && (K.current.slideNext(), V && V(K.current.realIndex))
                        }), [V]),
                        be = (0, n.useCallback)((() => {
                            var e;
                            return (null === K || void 0 === K || null === (e = K.current) || void 0 === e ? void 0 : e.autoplay.running) || !1
                        }), []),
                        ye = (0, n.useCallback)((() => {
                            var e;
                            null !== K && void 0 !== K && null !== (e = K.current) && void 0 !== e && e.autoplay && K.current.autoplay.start()
                        }), []),
                        xe = (0, n.useCallback)((() => {
                            var e;
                            null !== K && void 0 !== K && null !== (e = K.current) && void 0 !== e && e.autoplay && K.current.autoplay.stop()
                        }), []),
                        Ae = (0, n.useCallback)((() => {
                            var e;
                            null !== K && void 0 !== K && null !== (e = K.current) && void 0 !== e && e.params && K.current.updateAutoHeight()
                        }), []),
                        Se = (0, n.useMemo)((() => ({
                            currentItemIndex: J,
                            visibleItemsIndexes: te,
                            hasPrevious: oe,
                            hasNext: le,
                            slideTo: ge,
                            slideToPrevious: we,
                            slideToNext: ve,
                            rerender: me,
                            updateAutoHeight: Ae,
                            autoplayStart: ye,
                            autoplayStop: xe,
                            autoplayIsRunning: be
                        })), [J, te, oe, le, ge, we, ve, me, Ae, ye, xe, be]);
                    (0, n.useImperativeHandle)(t, (() => Se), [Se]);
                    const Ce = (0, n.useRef)(Y);
                    (0, n.useEffect)((() => {
                        if (!K.current) return;
                        const e = {
                            delay: L,
                            disableOnInteraction: !1,
                            reverseDirection: !1,
                            stopOnLastSlide: !1,
                            waitForTransition: !0
                        };
                        K.current.params.autoplay = !!(M && L > 0) && e
                    }), [M, L]), (0, n.useEffect)((() => {
                        Ce.current = Y
                    }), [Y]), (0, n.useEffect)((() => {
                        Ce.current && Ce.current(J)
                    }), [J]);
                    const Ee = (0, n.useRef)(R);
                    (0, n.useEffect)((() => {
                        Ee.current = R
                    }), [R]), (0, n.useEffect)((() => {
                        Ee.current && Ee.current(te)
                    }), [te]);
                    const Te = (0, n.useRef)(j);
                    (0, n.useEffect)((() => {
                        Te.current = j
                    }), [j]), (0, n.useEffect)((() => {
                        Te.current && !le && Te.current()
                    }), [le]);
                    const [Me, Pe] = (0, n.useState)(0), [ke] = (0, o.M)((e => Pe(e.width)));
                    (0, n.useEffect)((() => {
                        K.current && K.current.update()
                    }), [Me]), (0, n.useEffect)((() => {
                        K.current && ae(K.current)
                    }), [ae, s]);
                    const Oe = "ghost" === y,
                        Le = "inside" === w,
                        Ie = "outside" === w,
                        ze = (0, n.useRef)([f, te]);
                    return (0, n.useEffect)((() => {
                        const [e, t] = ze.current;
                        let s = t[0];
                        f === e && (s = J), requestAnimationFrame((() => {
                            K.current && !K.current.destroyed && K.current.slideToLoop(s, 0)
                        }))
                    }), [f]), (0, n.useEffect)((() => {
                        ze.current = [f, te]
                    }), [f, te]), (0, n.useEffect)((() => {
                        M ? ye() : xe()
                    }), [M, ye, xe, B, l, I]), (0, n.useEffect)((() => {
                        if (K.current && !K.current.destroyed) {
                            K.current.slides.forEach((e => {
                                var t;
                                const s = null === e || void 0 === e || null === (t = e.getAttribute("style")) || void 0 === t || null === (t = t.replace(`margin-right: ${c}px;`, "")) || void 0 === t ? void 0 : t.replace(`margin-left: ${c}px;`, "");
                                e.setAttribute("style", s || "")
                            })), K.current.changeLanguageDirection(I ? "rtl" : "ltr"), K.current.slideToLoop(i, 700)
                        }
                    }), [I]), (0, n.useEffect)((() => {
                        K.current && (K.current.allowTouchMove = z)
                    }), [z]), (0, Ve.jsxs)(ut, {
                        onMouseEnter: M && N ? xe : void 0,
                        onMouseLeave: M && N ? ye : void 0,
                        ...W,
                        style: {
                            gap: P && "outside" === O && null !== q && void 0 !== q && q.length ? r()(c, 12, 40) : void 0
                        },
                        children: [(0, Ve.jsxs)(ft, {
                            _showArrowsControlOnHover: g,
                            children: [m && (0, Ve.jsx)(xt, {
                                "aria-label": "Previous",
                                role: "button",
                                style: {
                                    width: v,
                                    height: v,
                                    flexBasis: v,
                                    marginLeft: Le ? b : void 0,
                                    marginRight: Ie ? b : void 0
                                },
                                _floating: Le,
                                _direction: X,
                                children: oe && (0, Ve.jsx)(Je, {
                                    direction: X,
                                    ghost: Oe,
                                    size: v,
                                    backgroundColor: x,
                                    backgroundColorOnHover: A,
                                    iconVariant: S,
                                    iconColor: C,
                                    iconColorOnHover: E,
                                    onClick: we
                                })
                            }), (0, Ve.jsx)(U, {
                                "aria-label": "Carousel",
                                children: (0, Ve.jsx)(St, {
                                    ref: ke,
                                    children: (0, Ve.jsx)(He.Provider, {
                                        value: Se,
                                        children: (0, Ve.jsx)(_e, {
                                            initialSlide: i,
                                            height: a,
                                            autoHeight: void 0 === a,
                                            slidesPerView: l ?? "auto",
                                            spaceBetween: c,
                                            loop: f,
                                            loopedSlides: f && u ? Math.ceil(q.length / 2) : void 0,
                                            slidesPerGroup: u || "slide" !== h ? 1 : l,
                                            slideToClickedSlide: u,
                                            threshold: p,
                                            speed: $ ? 0 : G,
                                            onSwiper: e => {
                                                K.current = e
                                            },
                                            onInit: ae,
                                            onSlideChange: ae,
                                            onTransitionEnd: ae,
                                            onSlideChangeTransitionEnd: e => {
                                                H && H(e)
                                            },
                                            onLoopFix: ae,
                                            dir: I ? "rtl" : "ltr",
                                            centeredSlides: u,
                                            effect: B,
                                            modules: [fe, ce, ue, he, de],
                                            watchSlidesProgress: !0,
                                            ...Q,
                                            children: q.map(((e, t) => (0, Ve.jsx)($e, {
                                                style: d ? {
                                                    width: d
                                                } : void 0,
                                                children: t => {
                                                    let {
                                                        isVisible: s,
                                                        isActive: i,
                                                        isPrev: r,
                                                        isNext: n
                                                    } = t;
                                                    return (0, Ve.jsx)(Re.k.Provider, {
                                                        value: {
                                                            isVisible: s,
                                                            isCurrent: i,
                                                            isPrevious: r,
                                                            isNext: n
                                                        },
                                                        children: e
                                                    })
                                                }
                                            }, t)))
                                        })
                                    })
                                })
                            }), m && (0, Ve.jsx)(xt, {
                                "aria-label": "Next",
                                role: "button",
                                style: {
                                    width: v,
                                    height: v,
                                    flexBasis: v,
                                    marginLeft: Ie ? b : void 0,
                                    marginRight: Le ? b : void 0
                                },
                                _floating: Le,
                                _direction: Z,
                                children: le && (0, Ve.jsx)(Je, {
                                    direction: Z,
                                    ghost: Oe,
                                    size: v,
                                    backgroundColor: x,
                                    backgroundColorOnHover: A,
                                    iconVariant: S,
                                    iconColor: C,
                                    iconColorOnHover: E,
                                    onClick: ve
                                })
                            })]
                        }), P && (0, Ve.jsx)(at, {
                            currentItemIndex: J,
                            items: q,
                            loop: f,
                            itemsPerSlide: te.length || 1,
                            slideBy: h,
                            position: O,
                            color: k,
                            insideGap: _,
                            onSlideTo: ge,
                            rtl: I
                        })]
                    })
                })),
                pt = ct,
                ut = a.default.div.withConfig({
                    displayName: "Carousel__CarouselContainer",
                    componentId: "sc-f2ox7y-0"
                })(["position:relative;display:flex;flex-direction:column;align-items:center;"]),
                ft = a.default.div.withConfig({
                    displayName: "Carousel__CarouselOuter",
                    componentId: "sc-f2ox7y-1"
                })(["display:flex;position:relative;align-items:center;width:100%;", ""], (e => {
                    let {
                        _showArrowsControlOnHover: t
                    } = e;
                    return t && (0, a.css)(["", "{display:none;}:hover ", "{display:block;}"], xt, xt)
                })),
                ht = a.default.div.withConfig({
                    displayName: "Carousel__CarouselInner",
                    componentId: "sc-f2ox7y-2"
                })(["", ";position:relative;z-index:1;overflow:hidden;flex:1;.swiper-slide{align-self:initial;}"], Ie),
                mt = (0, a.default)(ht).withConfig({
                    displayName: "Carousel__CarouselInnerWithCoverflow",
                    componentId: "sc-f2ox7y-3"
                })(["", " .swiper-slide{transition:opacity 0.5s ease,transform 0.5s ease;opacity:0;}.swiper-slide-visible{opacity:1;}"], ze),
                gt = (0, a.default)(ht).withConfig({
                    displayName: "Carousel__CarouselInnerWithCards",
                    componentId: "sc-f2ox7y-4"
                })(["", ""], Be),
                wt = (0, a.default)(ht).withConfig({
                    displayName: "Carousel__CarouselInnerWithCube",
                    componentId: "sc-f2ox7y-5"
                })(["", ""], Ne),
                vt = (0, a.default)(ht).withConfig({
                    displayName: "Carousel__CarouselInnerWithFlip",
                    componentId: "sc-f2ox7y-6"
                })(["", ""], Ge),
                bt = (0, a.default)(ht).withConfig({
                    displayName: "Carousel__CarouselInnerWithFade",
                    componentId: "sc-f2ox7y-7"
                })(["", ""], De),
                yt = {
                    cards: gt,
                    coverflow: mt,
                    slide: ht,
                    cube: wt,
                    flip: vt,
                    fade: bt,
                    undefined: ht
                },
                xt = a.default.div.withConfig({
                    displayName: "Carousel__CarouselArrowControlContainer",
                    componentId: "sc-f2ox7y-8"
                })(["position:relative;z-index:2;flex:0;", " ", ""], (e => e._floating && (0, a.css)(["position:absolute;top:50%;transform:translate(0,-50%);"])), (e => e._floating && "right" === e._direction && (0, a.css)(["right:0;"]))),
                At = a.default.div.withConfig({
                    displayName: "Carousel__CarouselNavigationControlContainer",
                    componentId: "sc-f2ox7y-9"
                })(["position:relative;z-index:2;", ""], (e => e._floating && (0, a.css)(["position:absolute;bottom:0;left:50%;transform:translate(-50%,0);"]))),
                St = a.default.div.withConfig({
                    displayName: "Carousel__CarouselSwiperWrapper",
                    componentId: "sc-f2ox7y-10"
                })(["width:100%;"])
        }
    }
]);