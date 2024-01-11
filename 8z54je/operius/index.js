var Rl = Object.defineProperty;
var Il = (t,e,n)=>e in t ? Rl(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var Ua = (t,e,n)=>(Il(t, typeof e != "symbol" ? e + "" : e, n),
n);
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i=>{
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
const Fc = Object.prototype.toString;
function Kc(t) {
    switch (Fc.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
        return !0;
    default:
        return Kr(t, Error)
    }
}
function Fr(t, e) {
    return Fc.call(t) === `[object ${e}]`
}
function ua(t) {
    return Fr(t, "ErrorEvent")
}
function Fa(t) {
    return Fr(t, "DOMError")
}
function Pl(t) {
    return Fr(t, "DOMException")
}
function Xn(t) {
    return Fr(t, "String")
}
function qc(t) {
    return t === null || typeof t != "object" && typeof t != "function"
}
function jr(t) {
    return Fr(t, "Object")
}
function Ms(t) {
    return typeof Event < "u" && Kr(t, Event)
}
function Cl(t) {
    return typeof Element < "u" && Kr(t, Element)
}
function jl(t) {
    return Fr(t, "RegExp")
}
function la(t) {
    return !!(t && t.then && typeof t.then == "function")
}
function Dl(t) {
    return jr(t) && "nativeEvent"in t && "preventDefault"in t && "stopPropagation"in t
}
function Bl(t) {
    return typeof t == "number" && t !== t
}
function Kr(t, e) {
    try {
        return t instanceof e
    } catch {
        return !1
    }
}
function Li(t) {
    return t && t.Math == Math ? t : void 0
}
const Gt = typeof globalThis == "object" && Li(globalThis) || typeof window == "object" && Li(window) || typeof self == "object" && Li(self) || typeof global == "object" && Li(global) || function() {
    return this
}() || {};
function Ci() {
    return Gt
}
function fa(t, e, n) {
    const r = n || Gt
      , i = r.__SENTRY__ = r.__SENTRY__ || {};
    return i[t] || (i[t] = e())
}
const ts = Ci()
  , $l = 80;
function go(t, e={}) {
    try {
        let n = t;
        const r = 5
          , i = [];
        let s = 0
          , o = 0;
        const a = " > "
          , u = a.length;
        let c;
        const l = Array.isArray(e) ? e : e.keyAttrs
          , d = !Array.isArray(e) && e.maxStringLength || $l;
        for (; n && s++ < r && (c = Ll(n, l),
        !(c === "html" || s > 1 && o + i.length * u + c.length >= d)); )
            i.push(c),
            o += c.length,
            n = n.parentNode;
        return i.reverse().join(a)
    } catch {
        return "<unknown>"
    }
}
function Ll(t, e) {
    const n = t
      , r = [];
    let i, s, o, a, u;
    if (!n || !n.tagName)
        return "";
    r.push(n.tagName.toLowerCase());
    const c = e && e.length ? e.filter(d=>n.getAttribute(d)).map(d=>[d, n.getAttribute(d)]) : null;
    if (c && c.length)
        c.forEach(d=>{
            r.push(`[${d[0]}="${d[1]}"]`)
        }
        );
    else if (n.id && r.push(`#${n.id}`),
    i = n.className,
    i && Xn(i))
        for (s = i.split(/\s+/),
        u = 0; u < s.length; u++)
            r.push(`.${s[u]}`);
    const l = ["aria-label", "type", "name", "title", "alt"];
    for (u = 0; u < l.length; u++)
        o = l[u],
        a = n.getAttribute(o),
        a && r.push(`[${o}="${a}"]`);
    return r.join("")
}
function Ml() {
    try {
        return "https://gx.games/games/8z54je/operius/"
    } catch {
        return ""
    }
}
function Ul(t) {
    return ts.document && ts.document.querySelector ? ts.document.querySelector(t) : null
}
const Fl = "Sentry Logger "
  , ds = ["debug", "info", "warn", "error", "log", "assert", "trace"];
function Gc(t) {
    if (!("console"in Gt))
        return t();
    const e = Gt.console
      , n = {};
    ds.forEach(r=>{
        const i = e[r] && e[r].__sentry_original__;
        r in e && i && (n[r] = e[r],
        e[r] = i)
    }
    );
    try {
        return t()
    } finally {
        Object.keys(n).forEach(r=>{
            e[r] = n[r]
        }
        )
    }
}
function Ka() {
    let t = !1;
    const e = {
        enable: ()=>{
            t = !0
        }
        ,
        disable: ()=>{
            t = !1
        }
    };
    return typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? ds.forEach(n=>{
        e[n] = (...r)=>{
            t && Gc(()=>{
                Gt.console[n](`${Fl}[${n}]:`, ...r)
            }
            )
        }
    }
    ) : ds.forEach(n=>{
        e[n] = ()=>{}
    }
    ),
    e
}
let he;
typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? he = fa("logger", Ka) : he = Ka();
const Kl = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function ql(t) {
    return t === "http" || t === "https"
}
function Us(t, e=!1) {
    const {host: n, path: r, pass: i, port: s, projectId: o, protocol: a, publicKey: u} = t;
    return `${a}://${u}${e && i ? `:${i}` : ""}@${n}${s ? `:${s}` : ""}/${r && `${r}/`}${o}`
}
function Gl(t) {
    const e = Kl.exec(t);
    if (!e) {
        console.error(`Invalid Sentry Dsn: ${t}`);
        return
    }
    const [n,r,i="",s,o="",a] = e.slice(1);
    let u = ""
      , c = a;
    const l = c.split("/");
    if (l.length > 1 && (u = l.slice(0, -1).join("/"),
    c = l.pop()),
    c) {
        const d = c.match(/^\d+/);
        d && (c = d[0])
    }
    return Yc({
        host: s,
        pass: i,
        path: u,
        projectId: c,
        port: o,
        protocol: n,
        publicKey: r
    })
}
function Yc(t) {
    return {
        protocol: t.protocol,
        publicKey: t.publicKey || "",
        pass: t.pass || "",
        host: t.host,
        port: t.port || "",
        path: t.path || "",
        projectId: t.projectId
    }
}
function Yl(t) {
    if (!(typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__))
        return !0;
    const {port: e, projectId: n, protocol: r} = t;
    return ["protocol", "publicKey", "host", "projectId"].find(o=>t[o] ? !1 : (he.error(`Invalid Sentry Dsn: ${o} missing`),
    !0)) ? !1 : n.match(/^\d+$/) ? ql(r) ? e && isNaN(parseInt(e, 10)) ? (he.error(`Invalid Sentry Dsn: Invalid port ${e}`),
    !1) : !0 : (he.error(`Invalid Sentry Dsn: Invalid protocol ${r}`),
    !1) : (he.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),
    !1)
}
function Vl(t) {
    const e = typeof t == "string" ? Gl(t) : Yc(t);
    if (!(!e || !Yl(e)))
        return e
}
class Xt extends Error {
    constructor(e, n="warn") {
        super(e),
        this.message = e,
        this.name = new.target.prototype.constructor.name,
        Object.setPrototypeOf(this, new.target.prototype),
        this.logLevel = n
    }
}
function ni(t, e=0) {
    return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0, e)}...`
}
function qa(t, e) {
    if (!Array.isArray(t))
        return "";
    const n = [];
    for (let r = 0; r < t.length; r++) {
        const i = t[r];
        try {
            n.push(String(i))
        } catch {
            n.push("[value cannot be serialized]")
        }
    }
    return n.join(e)
}
function Zl(t, e, n=!1) {
    return Xn(t) ? jl(e) ? e.test(t) : Xn(e) ? n ? t === e : t.includes(e) : !1 : !1
}
function Fs(t, e=[], n=!1) {
    return e.some(r=>Zl(t, r, n))
}
function lt(t, e, n) {
    if (!(e in t))
        return;
    const r = t[e]
      , i = n(r);
    if (typeof i == "function")
        try {
            Vc(i, r)
        } catch {}
    t[e] = i
}
function da(t, e, n) {
    Object.defineProperty(t, e, {
        value: n,
        writable: !0,
        configurable: !0
    })
}
function Vc(t, e) {
    const n = e.prototype || {};
    t.prototype = e.prototype = n,
    da(t, "__sentry_original__", e)
}
function ha(t) {
    return t.__sentry_original__
}
function Hl(t) {
    return Object.keys(t).map(e=>`${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")
}
function Zc(t) {
    if (Kc(t))
        return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...Ya(t)
        };
    if (Ms(t)) {
        const e = {
            type: t.type,
            target: Ga(t.target),
            currentTarget: Ga(t.currentTarget),
            ...Ya(t)
        };
        return typeof CustomEvent < "u" && Kr(t, CustomEvent) && (e.detail = t.detail),
        e
    } else
        return t
}
function Ga(t) {
    try {
        return Cl(t) ? go(t) : Object.prototype.toString.call(t)
    } catch {
        return "<unknown>"
    }
}
function Ya(t) {
    if (typeof t == "object" && t !== null) {
        const e = {};
        for (const n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
    } else
        return {}
}
function zl(t, e=40) {
    const n = Object.keys(Zc(t));
    if (n.sort(),
    !n.length)
        return "[object has no keys]";
    if (n[0].length >= e)
        return ni(n[0], e);
    for (let r = n.length; r > 0; r--) {
        const i = n.slice(0, r).join(", ");
        if (!(i.length > e))
            return r === n.length ? i : ni(i, e)
    }
    return ""
}
function pa(t) {
    return _o(t, new Map)
}
function _o(t, e) {
    if (jr(t)) {
        const n = e.get(t);
        if (n !== void 0)
            return n;
        const r = {};
        e.set(t, r);
        for (const i of Object.keys(t))
            typeof t[i] < "u" && (r[i] = _o(t[i], e));
        return r
    }
    if (Array.isArray(t)) {
        const n = e.get(t);
        if (n !== void 0)
            return n;
        const r = [];
        return e.set(t, r),
        t.forEach(i=>{
            r.push(_o(i, e))
        }
        ),
        r
    }
    return t
}
const Hc = 50
  , Va = /\(error: (.*)\)/;
function zc(...t) {
    const e = t.sort((n,r)=>n[0] - r[0]).map(n=>n[1]);
    return (n,r=0)=>{
        const i = []
          , s = n.split(`
`);
        for (let o = r; o < s.length; o++) {
            const a = s[o];
            if (a.length > 1024)
                continue;
            const u = Va.test(a) ? a.replace(Va, "$1") : a;
            if (!u.match(/\S*Error: /)) {
                for (const c of e) {
                    const l = c(u);
                    if (l) {
                        i.push(l);
                        break
                    }
                }
                if (i.length >= Hc)
                    break
            }
        }
        return Jl(i)
    }
}
function Wl(t) {
    return Array.isArray(t) ? zc(...t) : t
}
function Jl(t) {
    if (!t.length)
        return [];
    const e = t.slice(0, Hc)
      , n = e[e.length - 1].function;
    n && /sentryWrapped/.test(n) && e.pop(),
    e.reverse();
    const r = e[e.length - 1].function;
    return r && /captureMessage|captureException/.test(r) && e.pop(),
    e.map(i=>({
        ...i,
        filename: i.filename || e[e.length - 1].filename,
        function: i.function || "?"
    }))
}
const Qs = "<anonymous>";
function jn(t) {
    try {
        return !t || typeof t != "function" ? Qs : t.name || Qs
    } catch {
        return Qs
    }
}
const vo = Ci();
function Wc() {
    if (!("fetch"in vo))
        return !1;
    try {
        return new Headers,
        new Request("http://www.example.com"),
        new Response,
        !0
    } catch {
        return !1
    }
}
function bo(t) {
    return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
}
function Xl() {
    if (!Wc())
        return !1;
    if (bo(vo.fetch))
        return !0;
    let t = !1;
    const e = vo.document;
    if (e && typeof e.createElement == "function")
        try {
            const n = e.createElement("iframe");
            n.hidden = !0,
            e.head.appendChild(n),
            n.contentWindow && n.contentWindow.fetch && (t = bo(n.contentWindow.fetch)),
            e.head.removeChild(n)
        } catch (n) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
        }
    return t
}
const Mi = Ci();
function Ql() {
    const t = Mi.chrome
      , e = t && t.app && t.app.runtime
      , n = "history"in Mi && !!Mi.history.pushState && !!Mi.history.replaceState;
    return !e && n
}
const Ze = Ci()
  , Wr = "__sentry_xhr_v2__"
  , ri = {}
  , Za = {};
function ef(t) {
    if (!Za[t])
        switch (Za[t] = !0,
        t) {
        case "console":
            tf();
            break;
        case "dom":
            lf();
            break;
        case "xhr":
            sf();
            break;
        case "fetch":
            nf();
            break;
        case "history":
            of();
            break;
        case "error":
            ff();
            break;
        case "unhandledrejection":
            df();
            break;
        default:
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn("unknown instrumentation type:", t);
            return
        }
}
function Nn(t, e) {
    ri[t] = ri[t] || [],
    ri[t].push(e),
    ef(t)
}
function tn(t, e) {
    if (!(!t || !ri[t]))
        for (const n of ri[t] || [])
            try {
                n(e)
            } catch (r) {
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${jn(n)}
Error:`, r)
            }
}
function tf() {
    "console"in Ze && ds.forEach(function(t) {
        t in Ze.console && lt(Ze.console, t, function(e) {
            return function(...n) {
                tn("console", {
                    args: n,
                    level: t
                }),
                e && e.apply(Ze.console, n)
            }
        })
    })
}
function nf() {
    Xl() && lt(Ze, "fetch", function(t) {
        return function(...e) {
            const {method: n, url: r} = rf(e)
              , i = {
                args: e,
                fetchData: {
                    method: n,
                    url: r
                },
                startTimestamp: Date.now()
            };
            return tn("fetch", {
                ...i
            }),
            t.apply(Ze, e).then(s=>(tn("fetch", {
                ...i,
                endTimestamp: Date.now(),
                response: s
            }),
            s), s=>{
                throw tn("fetch", {
                    ...i,
                    endTimestamp: Date.now(),
                    error: s
                }),
                s
            }
            )
        }
    })
}
function wo(t, e) {
    return !!t && typeof t == "object" && !!t[e]
}
function Ha(t) {
    return typeof t == "string" ? t : t ? wo(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
}
function rf(t) {
    if (t.length === 0)
        return {
            method: "GET",
            url: ""
        };
    if (t.length === 2) {
        const [n,r] = t;
        return {
            url: Ha(n),
            method: wo(r, "method") ? String(r.method).toUpperCase() : "GET"
        }
    }
    const e = t[0];
    return {
        url: Ha(e),
        method: wo(e, "method") ? String(e.method).toUpperCase() : "GET"
    }
}
function sf() {
    if (!("XMLHttpRequest"in Ze))
        return;
    const t = XMLHttpRequest.prototype;
    lt(t, "open", function(e) {
        return function(...n) {
            const r = n[1]
              , i = this[Wr] = {
                method: Xn(n[0]) ? n[0].toUpperCase() : n[0],
                url: n[1],
                request_headers: {}
            };
            Xn(r) && i.method === "POST" && r.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
            const s = ()=>{
                const o = this[Wr];
                if (o && this.readyState === 4) {
                    try {
                        o.status_code = this.status
                    } catch {}
                    tn("xhr", {
                        args: n,
                        endTimestamp: Date.now(),
                        startTimestamp: Date.now(),
                        xhr: this
                    })
                }
            }
            ;
            return "onreadystatechange"in this && typeof this.onreadystatechange == "function" ? lt(this, "onreadystatechange", function(o) {
                return function(...a) {
                    return s(),
                    o.apply(this, a)
                }
            }) : this.addEventListener("readystatechange", s),
            lt(this, "setRequestHeader", function(o) {
                return function(...a) {
                    const [u,c] = a
                      , l = this[Wr];
                    return l && (l.request_headers[u.toLowerCase()] = c),
                    o.apply(this, a)
                }
            }),
            e.apply(this, n)
        }
    }),
    lt(t, "send", function(e) {
        return function(...n) {
            const r = this[Wr];
            return r && n[0] !== void 0 && (r.body = n[0]),
            tn("xhr", {
                args: n,
                startTimestamp: Date.now(),
                xhr: this
            }),
            e.apply(this, n)
        }
    })
}
let Ui;
function of() {
    if (!Ql())
        return;
    const t = Ze.onpopstate;
    Ze.onpopstate = function(...n) {
        const r = Ze.location.href
          , i = Ui;
        if (Ui = r,
        tn("history", {
            from: i,
            to: r
        }),
        t)
            try {
                return t.apply(this, n)
            } catch {}
    }
    ;
    function e(n) {
        return function(...r) {
            const i = r.length > 2 ? r[2] : void 0;
            if (i) {
                const s = Ui
                  , o = String(i);
                Ui = o,
                tn("history", {
                    from: s,
                    to: o
                })
            }
            return n.apply(this, r)
        }
    }
    lt(Ze.history, "pushState", e),
    lt(Ze.history, "replaceState", e)
}
const af = 1e3;
let Fi, Ki;
function cf(t, e) {
    if (!t || t.type !== e.type)
        return !0;
    try {
        if (t.target !== e.target)
            return !0
    } catch {}
    return !1
}
function uf(t) {
    if (t.type !== "keypress")
        return !1;
    try {
        const e = t.target;
        if (!e || !e.tagName)
            return !0;
        if (e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable)
            return !1
    } catch {}
    return !0
}
function za(t, e=!1) {
    return n=>{
        if (!n || Ki === n || uf(n))
            return;
        const r = n.type === "keypress" ? "input" : n.type;
        Fi === void 0 ? (t({
            event: n,
            name: r,
            global: e
        }),
        Ki = n) : cf(Ki, n) && (t({
            event: n,
            name: r,
            global: e
        }),
        Ki = n),
        clearTimeout(Fi),
        Fi = Ze.setTimeout(()=>{
            Fi = void 0
        }
        , af)
    }
}
function lf() {
    if (!("document"in Ze))
        return;
    const t = tn.bind(null, "dom")
      , e = za(t, !0);
    Ze.document.addEventListener("click", e, !1),
    Ze.document.addEventListener("keypress", e, !1),
    ["EventTarget", "Node"].forEach(n=>{
        const r = Ze[n] && Ze[n].prototype;
        !r || !r.hasOwnProperty || !r.hasOwnProperty("addEventListener") || (lt(r, "addEventListener", function(i) {
            return function(s, o, a) {
                if (s === "click" || s == "keypress")
                    try {
                        const u = this
                          , c = u.__sentry_instrumentation_handlers__ = u.__sentry_instrumentation_handlers__ || {}
                          , l = c[s] = c[s] || {
                            refCount: 0
                        };
                        if (!l.handler) {
                            const d = za(t);
                            l.handler = d,
                            i.call(this, s, d, a)
                        }
                        l.refCount++
                    } catch {}
                return i.call(this, s, o, a)
            }
        }),
        lt(r, "removeEventListener", function(i) {
            return function(s, o, a) {
                if (s === "click" || s == "keypress")
                    try {
                        const u = this
                          , c = u.__sentry_instrumentation_handlers__ || {}
                          , l = c[s];
                        l && (l.refCount--,
                        l.refCount <= 0 && (i.call(this, s, l.handler, a),
                        l.handler = void 0,
                        delete c[s]),
                        Object.keys(c).length === 0 && delete u.__sentry_instrumentation_handlers__)
                    } catch {}
                return i.call(this, s, o, a)
            }
        }))
    }
    )
}
let qi = null;
function ff() {
    qi = Ze.onerror,
    Ze.onerror = function(t, e, n, r, i) {
        return tn("error", {
            column: r,
            error: i,
            line: n,
            msg: t,
            url: e
        }),
        qi && !qi.__SENTRY_LOADER__ ? qi.apply(this, arguments) : !1
    }
    ,
    Ze.onerror.__SENTRY_INSTRUMENTED__ = !0
}
let Gi = null;
function df() {
    Gi = Ze.onunhandledrejection,
    Ze.onunhandledrejection = function(t) {
        return tn("unhandledrejection", t),
        Gi && !Gi.__SENTRY_LOADER__ ? Gi.apply(this, arguments) : !0
    }
    ,
    Ze.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
}
function hf() {
    const t = typeof WeakSet == "function"
      , e = t ? new WeakSet : [];
    function n(i) {
        if (t)
            return e.has(i) ? !0 : (e.add(i),
            !1);
        for (let s = 0; s < e.length; s++)
            if (e[s] === i)
                return !0;
        return e.push(i),
        !1
    }
    function r(i) {
        if (t)
            e.delete(i);
        else
            for (let s = 0; s < e.length; s++)
                if (e[s] === i) {
                    e.splice(s, 1);
                    break
                }
    }
    return [n, r]
}
function Sr() {
    const t = Gt
      , e = t.crypto || t.msCrypto;
    if (e && e.randomUUID)
        return e.randomUUID().replace(/-/g, "");
    const n = e && e.getRandomValues ? ()=>e.getRandomValues(new Uint8Array(1))[0] : ()=>Math.random() * 16;
    return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, r=>(r ^ (n() & 15) >> r / 4).toString(16))
}
function Jc(t) {
    return t.exception && t.exception.values ? t.exception.values[0] : void 0
}
function An(t) {
    const {message: e, event_id: n} = t;
    if (e)
        return e;
    const r = Jc(t);
    return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
}
function Eo(t, e, n) {
    const r = t.exception = t.exception || {}
      , i = r.values = r.values || []
      , s = i[0] = i[0] || {};
    s.value || (s.value = e || ""),
    s.type || (s.type = n || "Error")
}
function fi(t, e) {
    const n = Jc(t);
    if (!n)
        return;
    const r = {
        type: "generic",
        handled: !0
    }
      , i = n.mechanism;
    if (n.mechanism = {
        ...r,
        ...i,
        ...e
    },
    e && "data"in e) {
        const s = {
            ...i && i.data,
            ...e.data
        };
        n.mechanism.data = s
    }
}
function Wa(t) {
    if (t && t.__sentry_captured__)
        return !0;
    try {
        da(t, "__sentry_captured__", !0)
    } catch {}
    return !1
}
function Xc(t) {
    return Array.isArray(t) ? t : [t]
}
function pf() {
    return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
}
function mf() {
    return "npm"
}
function yf() {
    return !pf() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
}
function gf(t, e) {
    return t.require(e)
}
function On(t, e=100, n=1 / 0) {
    try {
        return So("", t, e, n)
    } catch (r) {
        return {
            ERROR: `**non-serializable** (${r})`
        }
    }
}
function Qc(t, e=3, n=100 * 1024) {
    const r = On(t, e);
    return wf(r) > n ? Qc(t, e - 1, n) : r
}
function So(t, e, n=1 / 0, r=1 / 0, i=hf()) {
    const [s,o] = i;
    if (e == null || ["number", "boolean", "string"].includes(typeof e) && !Bl(e))
        return e;
    const a = _f(t, e);
    if (!a.startsWith("[object "))
        return a;
    if (e.__sentry_skip_normalization__)
        return e;
    const u = typeof e.__sentry_override_normalization_depth__ == "number" ? e.__sentry_override_normalization_depth__ : n;
    if (u === 0)
        return a.replace("object ", "");
    if (s(e))
        return "[Circular ~]";
    const c = e;
    if (c && typeof c.toJSON == "function")
        try {
            const g = c.toJSON();
            return So("", g, u - 1, r, i)
        } catch {}
    const l = Array.isArray(e) ? [] : {};
    let d = 0;
    const h = Zc(e);
    for (const g in h) {
        if (!Object.prototype.hasOwnProperty.call(h, g))
            continue;
        if (d >= r) {
            l[g] = "[MaxProperties ~]";
            break
        }
        const _ = h[g];
        l[g] = So(g, _, u - 1, r, i),
        d++
    }
    return o(e),
    l
}
function _f(t, e) {
    try {
        if (t === "domain" && e && typeof e == "object" && e._events)
            return "[Domain]";
        if (t === "domainEmitter")
            return "[DomainEmitter]";
        if (typeof global < "u" && e === global)
            return "[Global]";
        if (typeof window < "u" && e === window)
            return "[Window]";
        if (typeof document < "u" && e === document)
            return "[Document]";
        if (Dl(e))
            return "[SyntheticEvent]";
        if (typeof e == "number" && e !== e)
            return "[NaN]";
        if (typeof e == "function")
            return `[Function: ${jn(e)}]`;
        if (typeof e == "symbol")
            return `[${String(e)}]`;
        if (typeof e == "bigint")
            return `[BigInt: ${String(e)}]`;
        const n = vf(e);
        return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`
    } catch (n) {
        return `**non-serializable** (${n})`
    }
}
function vf(t) {
    const e = Object.getPrototypeOf(t);
    return e ? e.constructor.name : "null prototype"
}
function bf(t) {
    return ~-encodeURI(t).split(/%..|./).length
}
function wf(t) {
    return bf(JSON.stringify(t))
}
var hn;
(function(t) {
    t[t.PENDING = 0] = "PENDING";
    const n = 1;
    t[t.RESOLVED = n] = "RESOLVED";
    const r = 2;
    t[t.REJECTED = r] = "REJECTED"
}
)(hn || (hn = {}));
function Qn(t) {
    return new _t(e=>{
        e(t)
    }
    )
}
function hs(t) {
    return new _t((e,n)=>{
        n(t)
    }
    )
}
class _t {
    __init() {
        this._state = hn.PENDING
    }
    __init2() {
        this._handlers = []
    }
    constructor(e) {
        _t.prototype.__init.call(this),
        _t.prototype.__init2.call(this),
        _t.prototype.__init3.call(this),
        _t.prototype.__init4.call(this),
        _t.prototype.__init5.call(this),
        _t.prototype.__init6.call(this);
        try {
            e(this._resolve, this._reject)
        } catch (n) {
            this._reject(n)
        }
    }
    then(e, n) {
        return new _t((r,i)=>{
            this._handlers.push([!1, s=>{
                if (!e)
                    r(s);
                else
                    try {
                        r(e(s))
                    } catch (o) {
                        i(o)
                    }
            }
            , s=>{
                if (!n)
                    i(s);
                else
                    try {
                        r(n(s))
                    } catch (o) {
                        i(o)
                    }
            }
            ]),
            this._executeHandlers()
        }
        )
    }
    catch(e) {
        return this.then(n=>n, e)
    }
    finally(e) {
        return new _t((n,r)=>{
            let i, s;
            return this.then(o=>{
                s = !1,
                i = o,
                e && e()
            }
            , o=>{
                s = !0,
                i = o,
                e && e()
            }
            ).then(()=>{
                if (s) {
                    r(i);
                    return
                }
                n(i)
            }
            )
        }
        )
    }
    __init3() {
        this._resolve = e=>{
            this._setResult(hn.RESOLVED, e)
        }
    }
    __init4() {
        this._reject = e=>{
            this._setResult(hn.REJECTED, e)
        }
    }
    __init5() {
        this._setResult = (e,n)=>{
            if (this._state === hn.PENDING) {
                if (la(n)) {
                    n.then(this._resolve, this._reject);
                    return
                }
                this._state = e,
                this._value = n,
                this._executeHandlers()
            }
        }
    }
    __init6() {
        this._executeHandlers = ()=>{
            if (this._state === hn.PENDING)
                return;
            const e = this._handlers.slice();
            this._handlers = [],
            e.forEach(n=>{
                n[0] || (this._state === hn.RESOLVED && n[1](this._value),
                this._state === hn.REJECTED && n[2](this._value),
                n[0] = !0)
            }
            )
        }
    }
}
function Ef(t) {
    const e = [];
    function n() {
        return t === void 0 || e.length < t
    }
    function r(o) {
        return e.splice(e.indexOf(o), 1)[0]
    }
    function i(o) {
        if (!n())
            return hs(new Xt("Not adding Promise because buffer limit was reached."));
        const a = o();
        return e.indexOf(a) === -1 && e.push(a),
        a.then(()=>r(a)).then(null, ()=>r(a).then(null, ()=>{}
        )),
        a
    }
    function s(o) {
        return new _t((a,u)=>{
            let c = e.length;
            if (!c)
                return a(!0);
            const l = setTimeout(()=>{
                o && o > 0 && a(!1)
            }
            , o);
            e.forEach(d=>{
                Qn(d).then(()=>{
                    --c || (clearTimeout(l),
                    a(!0))
                }
                , u)
            }
            )
        }
        )
    }
    return {
        $: e,
        add: i,
        drain: s
    }
}
function eo(t) {
    if (!t)
        return {};
    const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!e)
        return {};
    const n = e[6] || ""
      , r = e[8] || "";
    return {
        host: e[4],
        path: e[5],
        protocol: e[2],
        search: n,
        hash: r,
        relative: e[5] + n + r
    }
}
const Sf = ["fatal", "error", "warning", "log", "info", "debug"];
function kf(t) {
    return t === "warn" ? "warning" : Sf.includes(t) ? t : "log"
}
const eu = Ci()
  , ko = {
    nowSeconds: ()=>Date.now() / 1e3
};
function xf() {
    const {performance: t} = eu;
    if (!t || !t.now)
        return;
    const e = Date.now() - t.now();
    return {
        now: ()=>t.now(),
        timeOrigin: e
    }
}
function Tf() {
    try {
        return gf(module, "perf_hooks").performance
    } catch {
        return
    }
}
const to = yf() ? Tf() : xf()
  , Ja = to === void 0 ? ko : {
    nowSeconds: ()=>(to.timeOrigin + to.now()) / 1e3
}
  , Ks = ko.nowSeconds.bind(ko)
  , tu = Ja.nowSeconds.bind(Ja);
(()=>{
    const {performance: t} = eu;
    if (!t || !t.now)
        return;
    const e = 3600 * 1e3
      , n = t.now()
      , r = Date.now()
      , i = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e
      , s = i < e
      , o = t.timing && t.timing.navigationStart
      , u = typeof o == "number" ? Math.abs(o + n - r) : e
      , c = u < e;
    return s || c ? i <= u ? t.timeOrigin : o : r
}
)();
function ji(t, e=[]) {
    return [t, e]
}
function Of(t, e) {
    const [n,r] = t;
    return [n, [...r, e]]
}
function Xa(t, e) {
    const n = t[1];
    for (const r of n) {
        const i = r[0].type;
        if (e(r, i))
            return !0
    }
    return !1
}
function xo(t, e) {
    return (e || new TextEncoder).encode(t)
}
function Nf(t, e) {
    const [n,r] = t;
    let i = JSON.stringify(n);
    function s(o) {
        typeof i == "string" ? i = typeof o == "string" ? i + o : [xo(i, e), o] : i.push(typeof o == "string" ? xo(o, e) : o)
    }
    for (const o of r) {
        const [a,u] = o;
        if (s(`
${JSON.stringify(a)}
`),
        typeof u == "string" || u instanceof Uint8Array)
            s(u);
        else {
            let c;
            try {
                c = JSON.stringify(u)
            } catch {
                c = JSON.stringify(On(u))
            }
            s(c)
        }
    }
    return typeof i == "string" ? i : Af(i)
}
function Af(t) {
    const e = t.reduce((i,s)=>i + s.length, 0)
      , n = new Uint8Array(e);
    let r = 0;
    for (const i of t)
        n.set(i, r),
        r += i.length;
    return n
}
function Rf(t, e) {
    const n = typeof t.data == "string" ? xo(t.data, e) : t.data;
    return [pa({
        type: "attachment",
        length: n.length,
        filename: t.filename,
        content_type: t.contentType,
        attachment_type: t.attachmentType
    }), n]
}
const If = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor"
};
function Qa(t) {
    return If[t]
}
function nu(t) {
    if (!t || !t.sdk)
        return;
    const {name: e, version: n} = t.sdk;
    return {
        name: e,
        version: n
    }
}
function Pf(t, e, n, r) {
    const i = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
    return {
        event_id: t.event_id,
        sent_at: new Date().toISOString(),
        ...e && {
            sdk: e
        },
        ...!!n && {
            dsn: Us(r)
        },
        ...i && {
            trace: pa({
                ...i
            })
        }
    }
}
function Cf(t, e, n) {
    const r = [{
        type: "client_report"
    }, {
        timestamp: n || Ks(),
        discarded_events: t
    }];
    return ji(e ? {
        dsn: e
    } : {}, [r])
}
const jf = 60 * 1e3;
function Df(t, e=Date.now()) {
    const n = parseInt(`${t}`, 10);
    if (!isNaN(n))
        return n * 1e3;
    const r = Date.parse(`${t}`);
    return isNaN(r) ? jf : r - e
}
function Bf(t, e) {
    return t[e] || t.all || 0
}
function $f(t, e, n=Date.now()) {
    return Bf(t, e) > n
}
function Lf(t, {statusCode: e, headers: n}, r=Date.now()) {
    const i = {
        ...t
    }
      , s = n && n["x-sentry-rate-limits"]
      , o = n && n["retry-after"];
    if (s)
        for (const a of s.trim().split(",")) {
            const [u,c] = a.split(":", 2)
              , l = parseInt(u, 10)
              , d = (isNaN(l) ? 60 : l) * 1e3;
            if (!c)
                i.all = r + d;
            else
                for (const h of c.split(";"))
                    i[h] = r + d
        }
    else
        o ? i.all = r + Df(o, r) : e === 429 && (i.all = r + 60 * 1e3);
    return i
}
const ru = "production";
function Mf(t) {
    const e = tu()
      , n = {
        sid: Sr(),
        init: !0,
        timestamp: e,
        started: e,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: ()=>Ff(n)
    };
    return t && Dr(n, t),
    n
}
function Dr(t, e={}) {
    if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address),
    !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)),
    t.timestamp = e.timestamp || tu(),
    e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
    e.sid && (t.sid = e.sid.length === 32 ? e.sid : Sr()),
    e.init !== void 0 && (t.init = e.init),
    !t.did && e.did && (t.did = `${e.did}`),
    typeof e.started == "number" && (t.started = e.started),
    t.ignoreDuration)
        t.duration = void 0;
    else if (typeof e.duration == "number")
        t.duration = e.duration;
    else {
        const n = t.timestamp - t.started;
        t.duration = n >= 0 ? n : 0
    }
    e.release && (t.release = e.release),
    e.environment && (t.environment = e.environment),
    !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
    !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
    typeof e.errors == "number" && (t.errors = e.errors),
    e.status && (t.status = e.status)
}
function Uf(t, e) {
    let n = {};
    e ? n = {
        status: e
    } : t.status === "ok" && (n = {
        status: "exited"
    }),
    Dr(t, n)
}
function Ff(t) {
    return pa({
        sid: `${t.sid}`,
        init: t.init,
        started: new Date(t.started * 1e3).toISOString(),
        timestamp: new Date(t.timestamp * 1e3).toISOString(),
        status: t.status,
        errors: t.errors,
        did: typeof t.did == "number" || typeof t.did == "string" ? `${t.did}` : void 0,
        duration: t.duration,
        attrs: {
            release: t.release,
            environment: t.environment,
            ip_address: t.ipAddress,
            user_agent: t.userAgent
        }
    })
}
const Kf = 100;
class Hn {
    constructor() {
        this._notifyingListeners = !1,
        this._scopeListeners = [],
        this._eventProcessors = [],
        this._breadcrumbs = [],
        this._attachments = [],
        this._user = {},
        this._tags = {},
        this._extra = {},
        this._contexts = {},
        this._sdkProcessingMetadata = {}
    }
    static clone(e) {
        const n = new Hn;
        return e && (n._breadcrumbs = [...e._breadcrumbs],
        n._tags = {
            ...e._tags
        },
        n._extra = {
            ...e._extra
        },
        n._contexts = {
            ...e._contexts
        },
        n._user = e._user,
        n._level = e._level,
        n._span = e._span,
        n._session = e._session,
        n._transactionName = e._transactionName,
        n._fingerprint = e._fingerprint,
        n._eventProcessors = [...e._eventProcessors],
        n._requestSession = e._requestSession,
        n._attachments = [...e._attachments],
        n._sdkProcessingMetadata = {
            ...e._sdkProcessingMetadata
        }),
        n
    }
    addScopeListener(e) {
        this._scopeListeners.push(e)
    }
    addEventProcessor(e) {
        return this._eventProcessors.push(e),
        this
    }
    setUser(e) {
        return this._user = e || {},
        this._session && Dr(this._session, {
            user: e
        }),
        this._notifyScopeListeners(),
        this
    }
    getUser() {
        return this._user
    }
    getRequestSession() {
        return this._requestSession
    }
    setRequestSession(e) {
        return this._requestSession = e,
        this
    }
    setTags(e) {
        return this._tags = {
            ...this._tags,
            ...e
        },
        this._notifyScopeListeners(),
        this
    }
    setTag(e, n) {
        return this._tags = {
            ...this._tags,
            [e]: n
        },
        this._notifyScopeListeners(),
        this
    }
    setExtras(e) {
        return this._extra = {
            ...this._extra,
            ...e
        },
        this._notifyScopeListeners(),
        this
    }
    setExtra(e, n) {
        return this._extra = {
            ...this._extra,
            [e]: n
        },
        this._notifyScopeListeners(),
        this
    }
    setFingerprint(e) {
        return this._fingerprint = e,
        this._notifyScopeListeners(),
        this
    }
    setLevel(e) {
        return this._level = e,
        this._notifyScopeListeners(),
        this
    }
    setTransactionName(e) {
        return this._transactionName = e,
        this._notifyScopeListeners(),
        this
    }
    setContext(e, n) {
        return n === null ? delete this._contexts[e] : this._contexts[e] = n,
        this._notifyScopeListeners(),
        this
    }
    setSpan(e) {
        return this._span = e,
        this._notifyScopeListeners(),
        this
    }
    getSpan() {
        return this._span
    }
    getTransaction() {
        const e = this.getSpan();
        return e && e.transaction
    }
    setSession(e) {
        return e ? this._session = e : delete this._session,
        this._notifyScopeListeners(),
        this
    }
    getSession() {
        return this._session
    }
    update(e) {
        if (!e)
            return this;
        if (typeof e == "function") {
            const n = e(this);
            return n instanceof Hn ? n : this
        }
        return e instanceof Hn ? (this._tags = {
            ...this._tags,
            ...e._tags
        },
        this._extra = {
            ...this._extra,
            ...e._extra
        },
        this._contexts = {
            ...this._contexts,
            ...e._contexts
        },
        e._user && Object.keys(e._user).length && (this._user = e._user),
        e._level && (this._level = e._level),
        e._fingerprint && (this._fingerprint = e._fingerprint),
        e._requestSession && (this._requestSession = e._requestSession)) : jr(e) && (e = e,
        this._tags = {
            ...this._tags,
            ...e.tags
        },
        this._extra = {
            ...this._extra,
            ...e.extra
        },
        this._contexts = {
            ...this._contexts,
            ...e.contexts
        },
        e.user && (this._user = e.user),
        e.level && (this._level = e.level),
        e.fingerprint && (this._fingerprint = e.fingerprint),
        e.requestSession && (this._requestSession = e.requestSession)),
        this
    }
    clear() {
        return this._breadcrumbs = [],
        this._tags = {},
        this._extra = {},
        this._user = {},
        this._contexts = {},
        this._level = void 0,
        this._transactionName = void 0,
        this._fingerprint = void 0,
        this._requestSession = void 0,
        this._span = void 0,
        this._session = void 0,
        this._notifyScopeListeners(),
        this._attachments = [],
        this
    }
    addBreadcrumb(e, n) {
        const r = typeof n == "number" ? n : Kf;
        if (r <= 0)
            return this;
        const i = {
            timestamp: Ks(),
            ...e
        };
        return this._breadcrumbs = [...this._breadcrumbs, i].slice(-r),
        this._notifyScopeListeners(),
        this
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1]
    }
    clearBreadcrumbs() {
        return this._breadcrumbs = [],
        this._notifyScopeListeners(),
        this
    }
    addAttachment(e) {
        return this._attachments.push(e),
        this
    }
    getAttachments() {
        return this._attachments
    }
    clearAttachments() {
        return this._attachments = [],
        this
    }
    applyToEvent(e, n={}) {
        if (this._extra && Object.keys(this._extra).length && (e.extra = {
            ...this._extra,
            ...e.extra
        }),
        this._tags && Object.keys(this._tags).length && (e.tags = {
            ...this._tags,
            ...e.tags
        }),
        this._user && Object.keys(this._user).length && (e.user = {
            ...this._user,
            ...e.user
        }),
        this._contexts && Object.keys(this._contexts).length && (e.contexts = {
            ...this._contexts,
            ...e.contexts
        }),
        this._level && (e.level = this._level),
        this._transactionName && (e.transaction = this._transactionName),
        this._span) {
            e.contexts = {
                trace: this._span.getTraceContext(),
                ...e.contexts
            };
            const r = this._span.transaction;
            if (r) {
                e.sdkProcessingMetadata = {
                    dynamicSamplingContext: r.getDynamicSamplingContext(),
                    ...e.sdkProcessingMetadata
                };
                const i = r.name;
                i && (e.tags = {
                    transaction: i,
                    ...e.tags
                })
            }
        }
        return this._applyFingerprint(e),
        e.breadcrumbs = [...e.breadcrumbs || [], ...this._breadcrumbs],
        e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0,
        e.sdkProcessingMetadata = {
            ...e.sdkProcessingMetadata,
            ...this._sdkProcessingMetadata
        },
        this._notifyEventProcessors([...iu(), ...this._eventProcessors], e, n)
    }
    setSDKProcessingMetadata(e) {
        return this._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata,
            ...e
        },
        this
    }
    _notifyEventProcessors(e, n, r, i=0) {
        return new _t((s,o)=>{
            const a = e[i];
            if (n === null || typeof a != "function")
                s(n);
            else {
                const u = a({
                    ...n
                }, r);
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && a.id && u === null && he.log(`Event processor "${a.id}" dropped event`),
                la(u) ? u.then(c=>this._notifyEventProcessors(e, c, r, i + 1).then(s)).then(null, o) : this._notifyEventProcessors(e, u, r, i + 1).then(s).then(null, o)
            }
        }
        )
    }
    _notifyScopeListeners() {
        this._notifyingListeners || (this._notifyingListeners = !0,
        this._scopeListeners.forEach(e=>{
            e(this)
        }
        ),
        this._notifyingListeners = !1)
    }
    _applyFingerprint(e) {
        e.fingerprint = e.fingerprint ? Xc(e.fingerprint) : [],
        this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
        e.fingerprint && !e.fingerprint.length && delete e.fingerprint
    }
}
function iu() {
    return fa("globalEventProcessors", ()=>[])
}
function qs(t) {
    iu().push(t)
}
const su = 4
  , qf = 100;
class ou {
    constructor(e, n=new Hn, r=su) {
        this._version = r,
        this._stack = [{
            scope: n
        }],
        e && this.bindClient(e)
    }
    isOlderThan(e) {
        return this._version < e
    }
    bindClient(e) {
        const n = this.getStackTop();
        n.client = e,
        e && e.setupIntegrations && e.setupIntegrations()
    }
    pushScope() {
        const e = Hn.clone(this.getScope());
        return this.getStack().push({
            client: this.getClient(),
            scope: e
        }),
        e
    }
    popScope() {
        return this.getStack().length <= 1 ? !1 : !!this.getStack().pop()
    }
    withScope(e) {
        const n = this.pushScope();
        try {
            e(n)
        } finally {
            this.popScope()
        }
    }
    getClient() {
        return this.getStackTop().client
    }
    getScope() {
        return this.getStackTop().scope
    }
    getStack() {
        return this._stack
    }
    getStackTop() {
        return this._stack[this._stack.length - 1]
    }
    captureException(e, n) {
        const r = this._lastEventId = n && n.event_id ? n.event_id : Sr()
          , i = new Error("Sentry syntheticException");
        return this._withClient((s,o)=>{
            s.captureException(e, {
                originalException: e,
                syntheticException: i,
                ...n,
                event_id: r
            }, o)
        }
        ),
        r
    }
    captureMessage(e, n, r) {
        const i = this._lastEventId = r && r.event_id ? r.event_id : Sr()
          , s = new Error(e);
        return this._withClient((o,a)=>{
            o.captureMessage(e, n, {
                originalException: e,
                syntheticException: s,
                ...r,
                event_id: i
            }, a)
        }
        ),
        i
    }
    captureEvent(e, n) {
        const r = n && n.event_id ? n.event_id : Sr();
        return e.type || (this._lastEventId = r),
        this._withClient((i,s)=>{
            i.captureEvent(e, {
                ...n,
                event_id: r
            }, s)
        }
        ),
        r
    }
    lastEventId() {
        return this._lastEventId
    }
    addBreadcrumb(e, n) {
        const {scope: r, client: i} = this.getStackTop();
        if (!i)
            return;
        const {beforeBreadcrumb: s=null, maxBreadcrumbs: o=qf} = i.getOptions && i.getOptions() || {};
        if (o <= 0)
            return;
        const u = {
            timestamp: Ks(),
            ...e
        }
          , c = s ? Gc(()=>s(u, n)) : u;
        c !== null && (i.emit && i.emit("beforeAddBreadcrumb", c, n),
        r.addBreadcrumb(c, o))
    }
    setUser(e) {
        this.getScope().setUser(e)
    }
    setTags(e) {
        this.getScope().setTags(e)
    }
    setExtras(e) {
        this.getScope().setExtras(e)
    }
    setTag(e, n) {
        this.getScope().setTag(e, n)
    }
    setExtra(e, n) {
        this.getScope().setExtra(e, n)
    }
    setContext(e, n) {
        this.getScope().setContext(e, n)
    }
    configureScope(e) {
        const {scope: n, client: r} = this.getStackTop();
        r && e(n)
    }
    run(e) {
        const n = ec(this);
        try {
            e(this)
        } finally {
            ec(n)
        }
    }
    getIntegration(e) {
        const n = this.getClient();
        if (!n)
            return null;
        try {
            return n.getIntegration(e)
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn(`Cannot retrieve integration ${e.id} from the current Hub`),
            null
        }
    }
    startTransaction(e, n) {
        const r = this._callExtensionMethod("startTransaction", e, n);
        return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && !r && console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`),
        r
    }
    traceHeaders() {
        return this._callExtensionMethod("traceHeaders")
    }
    captureSession(e=!1) {
        if (e)
            return this.endSession();
        this._sendSessionUpdate()
    }
    endSession() {
        const n = this.getStackTop().scope
          , r = n.getSession();
        r && Uf(r),
        this._sendSessionUpdate(),
        n.setSession()
    }
    startSession(e) {
        const {scope: n, client: r} = this.getStackTop()
          , {release: i, environment: s=ru} = r && r.getOptions() || {}
          , {userAgent: o} = Gt.navigator || {}
          , a = Mf({
            release: i,
            environment: s,
            user: n.getUser(),
            ...o && {
                userAgent: o
            },
            ...e
        })
          , u = n.getSession && n.getSession();
        return u && u.status === "ok" && Dr(u, {
            status: "exited"
        }),
        this.endSession(),
        n.setSession(a),
        a
    }
    shouldSendDefaultPii() {
        const e = this.getClient()
          , n = e && e.getOptions();
        return !!(n && n.sendDefaultPii)
    }
    _sendSessionUpdate() {
        const {scope: e, client: n} = this.getStackTop()
          , r = e.getSession();
        r && n && n.captureSession && n.captureSession(r)
    }
    _withClient(e) {
        const {scope: n, client: r} = this.getStackTop();
        r && e(r, n)
    }
    _callExtensionMethod(e, ...n) {
        const i = Gs().__SENTRY__;
        if (i && i.extensions && typeof i.extensions[e] == "function")
            return i.extensions[e].apply(this, n);
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn(`Extension method ${e} couldn't be found, doing nothing.`)
    }
}
function Gs() {
    return Gt.__SENTRY__ = Gt.__SENTRY__ || {
        extensions: {},
        hub: void 0
    },
    Gt
}
function ec(t) {
    const e = Gs()
      , n = To(e);
    return au(e, t),
    n
}
function st() {
    const t = Gs();
    if (t.__SENTRY__ && t.__SENTRY__.acs) {
        const e = t.__SENTRY__.acs.getCurrentHub();
        if (e)
            return e
    }
    return Gf(t)
}
function Gf(t=Gs()) {
    return (!Yf(t) || To(t).isOlderThan(su)) && au(t, new ou),
    To(t)
}
function Yf(t) {
    return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
}
function To(t) {
    return fa("hub", ()=>new ou, t)
}
function au(t, e) {
    if (!t)
        return !1;
    const n = t.__SENTRY__ = t.__SENTRY__ || {};
    return n.hub = e,
    !0
}
function Vf(t, e) {
    return st().captureException(t, {
        captureContext: e
    })
}
function Zf(t) {
    st().withScope(t)
}
const Hf = "7";
function zf(t) {
    const e = t.protocol ? `${t.protocol}:` : ""
      , n = t.port ? `:${t.port}` : "";
    return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`
}
function Wf(t) {
    return `${zf(t)}${t.projectId}/envelope/`
}
function Jf(t, e) {
    return Hl({
        sentry_key: t.publicKey,
        sentry_version: Hf,
        ...e && {
            sentry_client: `${e.name}/${e.version}`
        }
    })
}
function Xf(t, e={}) {
    const n = typeof e == "string" ? e : e.tunnel
      , r = typeof e == "string" || !e._metadata ? void 0 : e._metadata.sdk;
    return n || `${Wf(t)}?${Jf(t, r)}`
}
function Qf(t, e) {
    return e && (t.sdk = t.sdk || {},
    t.sdk.name = t.sdk.name || e.name,
    t.sdk.version = t.sdk.version || e.version,
    t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []],
    t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []]),
    t
}
function ed(t, e, n, r) {
    const i = nu(n)
      , s = {
        sent_at: new Date().toISOString(),
        ...i && {
            sdk: i
        },
        ...!!r && {
            dsn: Us(e)
        }
    }
      , o = "aggregates"in t ? [{
        type: "sessions"
    }, t] : [{
        type: "session"
    }, t.toJSON()];
    return ji(s, [o])
}
function td(t, e, n, r) {
    const i = nu(n)
      , s = t.type && t.type !== "replay_event" ? t.type : "event";
    Qf(t, n && n.sdk);
    const o = Pf(t, i, r, e);
    return delete t.sdkProcessingMetadata,
    ji(o, [[{
        type: s
    }, t]])
}
const tc = [];
function nd(t) {
    const e = {};
    return t.forEach(n=>{
        const {name: r} = n
          , i = e[r];
        i && !i.isDefaultInstance && n.isDefaultInstance || (e[r] = n)
    }
    ),
    Object.keys(e).map(n=>e[n])
}
function rd(t) {
    const e = t.defaultIntegrations || []
      , n = t.integrations;
    e.forEach(o=>{
        o.isDefaultInstance = !0
    }
    );
    let r;
    Array.isArray(n) ? r = [...e, ...n] : typeof n == "function" ? r = Xc(n(e)) : r = e;
    const i = nd(r)
      , s = sd(i, o=>o.name === "Debug");
    if (s !== -1) {
        const [o] = i.splice(s, 1);
        i.push(o)
    }
    return i
}
function id(t) {
    const e = {};
    return t.forEach(n=>{
        n && cu(n, e)
    }
    ),
    e
}
function cu(t, e) {
    e[t.name] = t,
    tc.indexOf(t.name) === -1 && (t.setupOnce(qs, st),
    tc.push(t.name),
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.log(`Integration installed: ${t.name}`))
}
function sd(t, e) {
    for (let n = 0; n < t.length; n++)
        if (e(t[n]) === !0)
            return n;
    return -1
}
function od(t, e, n, r) {
    const {normalizeDepth: i=3, normalizeMaxBreadth: s=1e3} = t
      , o = {
        ...e,
        event_id: e.event_id || n.event_id || Sr(),
        timestamp: e.timestamp || Ks()
    }
      , a = n.integrations || t.integrations.map(l=>l.name);
    ad(o, t),
    ld(o, a),
    e.type === void 0 && cd(o, t.stackParser);
    let u = r;
    n.captureContext && (u = Hn.clone(u).update(n.captureContext));
    let c = Qn(o);
    if (u) {
        if (u.getAttachments) {
            const l = [...n.attachments || [], ...u.getAttachments()];
            l.length && (n.attachments = l)
        }
        c = u.applyToEvent(o, n)
    }
    return c.then(l=>(l && ud(l),
    typeof i == "number" && i > 0 ? fd(l, i, s) : l))
}
function ad(t, e) {
    const {environment: n, release: r, dist: i, maxValueLength: s=250} = e;
    "environment"in t || (t.environment = "environment"in e ? n : ru),
    t.release === void 0 && r !== void 0 && (t.release = r),
    t.dist === void 0 && i !== void 0 && (t.dist = i),
    t.message && (t.message = ni(t.message, s));
    const o = t.exception && t.exception.values && t.exception.values[0];
    o && o.value && (o.value = ni(o.value, s));
    const a = t.request;
    a && a.url && (a.url = ni(a.url, s))
}
const nc = new WeakMap;
function cd(t, e) {
    const n = Gt._sentryDebugIds;
    if (!n)
        return;
    let r;
    const i = nc.get(e);
    i ? r = i : (r = new Map,
    nc.set(e, r));
    const s = Object.keys(n).reduce((o,a)=>{
        let u;
        const c = r.get(a);
        c ? u = c : (u = e(a),
        r.set(a, u));
        for (let l = u.length - 1; l >= 0; l--) {
            const d = u[l];
            if (d.filename) {
                o[d.filename] = n[a];
                break
            }
        }
        return o
    }
    , {});
    try {
        t.exception.values.forEach(o=>{
            o.stacktrace.frames.forEach(a=>{
                a.filename && (a.debug_id = s[a.filename])
            }
            )
        }
        )
    } catch {}
}
function ud(t) {
    const e = {};
    try {
        t.exception.values.forEach(r=>{
            r.stacktrace.frames.forEach(i=>{
                i.debug_id && (i.abs_path ? e[i.abs_path] = i.debug_id : i.filename && (e[i.filename] = i.debug_id),
                delete i.debug_id)
            }
            )
        }
        )
    } catch {}
    if (Object.keys(e).length === 0)
        return;
    t.debug_meta = t.debug_meta || {},
    t.debug_meta.images = t.debug_meta.images || [];
    const n = t.debug_meta.images;
    Object.keys(e).forEach(r=>{
        n.push({
            type: "sourcemap",
            code_file: r,
            debug_id: e[r]
        })
    }
    )
}
function ld(t, e) {
    e.length > 0 && (t.sdk = t.sdk || {},
    t.sdk.integrations = [...t.sdk.integrations || [], ...e])
}
function fd(t, e, n) {
    if (!t)
        return null;
    const r = {
        ...t,
        ...t.breadcrumbs && {
            breadcrumbs: t.breadcrumbs.map(i=>({
                ...i,
                ...i.data && {
                    data: On(i.data, e, n)
                }
            }))
        },
        ...t.user && {
            user: On(t.user, e, n)
        },
        ...t.contexts && {
            contexts: On(t.contexts, e, n)
        },
        ...t.extra && {
            extra: On(t.extra, e, n)
        }
    };
    return t.contexts && t.contexts.trace && r.contexts && (r.contexts.trace = t.contexts.trace,
    t.contexts.trace.data && (r.contexts.trace.data = On(t.contexts.trace.data, e, n))),
    t.spans && (r.spans = t.spans.map(i=>(i.data && (i.data = On(i.data, e, n)),
    i))),
    r
}
const rc = "Not capturing exception because it's already been captured.";
class Vn {
    __init() {
        this._integrations = {}
    }
    __init2() {
        this._integrationsInitialized = !1
    }
    __init3() {
        this._numProcessing = 0
    }
    __init4() {
        this._outcomes = {}
    }
    __init5() {
        this._hooks = {}
    }
    constructor(e) {
        if (Vn.prototype.__init.call(this),
        Vn.prototype.__init2.call(this),
        Vn.prototype.__init3.call(this),
        Vn.prototype.__init4.call(this),
        Vn.prototype.__init5.call(this),
        this._options = e,
        e.dsn ? this._dsn = Vl(e.dsn) : (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn("No DSN provided, client will not do anything."),
        this._dsn) {
            const n = Xf(this._dsn, e);
            this._transport = e.transport({
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...e.transportOptions,
                url: n
            })
        }
    }
    captureException(e, n, r) {
        if (Wa(e)) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.log(rc);
            return
        }
        let i = n && n.event_id;
        return this._process(this.eventFromException(e, n).then(s=>this._captureEvent(s, n, r)).then(s=>{
            i = s
        }
        )),
        i
    }
    captureMessage(e, n, r, i) {
        let s = r && r.event_id;
        const o = qc(e) ? this.eventFromMessage(String(e), n, r) : this.eventFromException(e, r);
        return this._process(o.then(a=>this._captureEvent(a, r, i)).then(a=>{
            s = a
        }
        )),
        s
    }
    captureEvent(e, n, r) {
        if (n && n.originalException && Wa(n.originalException)) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.log(rc);
            return
        }
        let i = n && n.event_id;
        return this._process(this._captureEvent(e, n, r).then(s=>{
            i = s
        }
        )),
        i
    }
    captureSession(e) {
        if (!this._isEnabled()) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn("SDK not enabled, will not capture session.");
            return
        }
        typeof e.release != "string" ? (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn("Discarded session because of missing or non-string release") : (this.sendSession(e),
        Dr(e, {
            init: !1
        }))
    }
    getDsn() {
        return this._dsn
    }
    getOptions() {
        return this._options
    }
    getSdkMetadata() {
        return this._options._metadata
    }
    getTransport() {
        return this._transport
    }
    flush(e) {
        const n = this._transport;
        return n ? this._isClientDoneProcessing(e).then(r=>n.flush(e).then(i=>r && i)) : Qn(!0)
    }
    close(e) {
        return this.flush(e).then(n=>(this.getOptions().enabled = !1,
        n))
    }
    setupIntegrations() {
        this._isEnabled() && !this._integrationsInitialized && (this._integrations = id(this._options.integrations),
        this._integrationsInitialized = !0)
    }
    getIntegrationById(e) {
        return this._integrations[e]
    }
    getIntegration(e) {
        try {
            return this._integrations[e.id] || null
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn(`Cannot retrieve integration ${e.id} from the current Client`),
            null
        }
    }
    addIntegration(e) {
        cu(e, this._integrations)
    }
    sendEvent(e, n={}) {
        if (this._dsn) {
            let r = td(e, this._dsn, this._options._metadata, this._options.tunnel);
            for (const s of n.attachments || [])
                r = Of(r, Rf(s, this._options.transportOptions && this._options.transportOptions.textEncoder));
            const i = this._sendEnvelope(r);
            i && i.then(s=>this.emit("afterSendEvent", e, s), null)
        }
    }
    sendSession(e) {
        if (this._dsn) {
            const n = ed(e, this._dsn, this._options._metadata, this._options.tunnel);
            this._sendEnvelope(n)
        }
    }
    recordDroppedEvent(e, n, r) {
        if (this._options.sendClientReports) {
            const i = `${e}:${n}`;
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.log(`Adding outcome: "${i}"`),
            this._outcomes[i] = this._outcomes[i] + 1 || 1
        }
    }
    on(e, n) {
        this._hooks[e] || (this._hooks[e] = []),
        this._hooks[e].push(n)
    }
    emit(e, ...n) {
        this._hooks[e] && this._hooks[e].forEach(r=>r(...n))
    }
    _updateSessionFromEvent(e, n) {
        let r = !1
          , i = !1;
        const s = n.exception && n.exception.values;
        if (s) {
            i = !0;
            for (const u of s) {
                const c = u.mechanism;
                if (c && c.handled === !1) {
                    r = !0;
                    break
                }
            }
        }
        const o = e.status === "ok";
        (o && e.errors === 0 || o && r) && (Dr(e, {
            ...r && {
                status: "crashed"
            },
            errors: e.errors || Number(i || r)
        }),
        this.captureSession(e))
    }
    _isClientDoneProcessing(e) {
        return new _t(n=>{
            let r = 0;
            const i = 1
              , s = setInterval(()=>{
                this._numProcessing == 0 ? (clearInterval(s),
                n(!0)) : (r += i,
                e && r >= e && (clearInterval(s),
                n(!1)))
            }
            , i)
        }
        )
    }
    _isEnabled() {
        return this.getOptions().enabled !== !1 && this._dsn !== void 0
    }
    _prepareEvent(e, n, r) {
        const i = this.getOptions()
          , s = Object.keys(this._integrations);
        return !n.integrations && s.length > 0 && (n.integrations = s),
        od(i, e, n, r)
    }
    _captureEvent(e, n={}, r) {
        return this._processEvent(e, n, r).then(i=>i.event_id, i=>{
            if (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) {
                const s = i;
                s.logLevel === "log" ? he.log(s.message) : he.warn(s)
            }
        }
        )
    }
    _processEvent(e, n, r) {
        const i = this.getOptions()
          , {sampleRate: s} = i;
        if (!this._isEnabled())
            return hs(new Xt("SDK not enabled, will not capture event.","log"));
        const o = lu(e)
          , a = uu(e)
          , u = e.type || "error"
          , c = `before send for type \`${u}\``;
        if (a && typeof s == "number" && Math.random() > s)
            return this.recordDroppedEvent("sample_rate", "error", e),
            hs(new Xt(`Discarding event because it's not included in the random sample (sampling rate = ${s})`,"log"));
        const l = u === "replay_event" ? "replay" : u;
        return this._prepareEvent(e, n, r).then(d=>{
            if (d === null)
                throw this.recordDroppedEvent("event_processor", l, e),
                new Xt("An event processor returned `null`, will not send event.","log");
            if (n.data && n.data.__sentry__ === !0)
                return d;
            const g = hd(i, d, n);
            return dd(g, c)
        }
        ).then(d=>{
            if (d === null)
                throw this.recordDroppedEvent("before_send", l, e),
                new Xt(`${c} returned \`null\`, will not send event.`,"log");
            const h = r && r.getSession();
            !o && h && this._updateSessionFromEvent(h, d);
            const g = d.transaction_info;
            if (o && g && d.transaction !== e.transaction) {
                const _ = "custom";
                d.transaction_info = {
                    ...g,
                    source: _
                }
            }
            return this.sendEvent(d, n),
            d
        }
        ).then(null, d=>{
            throw d instanceof Xt ? d : (this.captureException(d, {
                data: {
                    __sentry__: !0
                },
                originalException: d
            }),
            new Xt(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${d}`))
        }
        )
    }
    _process(e) {
        this._numProcessing++,
        e.then(n=>(this._numProcessing--,
        n), n=>(this._numProcessing--,
        n))
    }
    _sendEnvelope(e) {
        if (this._transport && this._dsn)
            return this.emit("beforeEnvelope", e),
            this._transport.send(e).then(null, n=>{
                (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.error("Error while sending event:", n)
            }
            );
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.error("Transport disabled")
    }
    _clearOutcomes() {
        const e = this._outcomes;
        return this._outcomes = {},
        Object.keys(e).map(n=>{
            const [r,i] = n.split(":");
            return {
                reason: r,
                category: i,
                quantity: e[n]
            }
        }
        )
    }
}
function dd(t, e) {
    const n = `${e} must return \`null\` or a valid event.`;
    if (la(t))
        return t.then(r=>{
            if (!jr(r) && r !== null)
                throw new Xt(n);
            return r
        }
        , r=>{
            throw new Xt(`${e} rejected with ${r}`)
        }
        );
    if (!jr(t) && t !== null)
        throw new Xt(n);
    return t
}
function hd(t, e, n) {
    const {beforeSend: r, beforeSendTransaction: i} = t;
    return uu(e) && r ? r(e, n) : lu(e) && i ? i(e, n) : e
}
function uu(t) {
    return t.type === void 0
}
function lu(t) {
    return t.type === "transaction"
}
function pd(t, e) {
    e.debug === !0 && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__ ? he.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
    const n = st();
    n.getScope().update(e.initialScope);
    const i = new t(e);
    n.bindClient(i)
}
const md = 30;
function fu(t, e, n=Ef(t.bufferSize || md)) {
    let r = {};
    const i = o=>n.drain(o);
    function s(o) {
        const a = [];
        if (Xa(o, (d,h)=>{
            const g = Qa(h);
            if ($f(r, g)) {
                const _ = ic(d, h);
                t.recordDroppedEvent("ratelimit_backoff", g, _)
            } else
                a.push(d)
        }
        ),
        a.length === 0)
            return Qn();
        const u = ji(o[0], a)
          , c = d=>{
            Xa(u, (h,g)=>{
                const _ = ic(h, g);
                t.recordDroppedEvent(d, Qa(g), _)
            }
            )
        }
          , l = ()=>e({
            body: Nf(u, t.textEncoder)
        }).then(d=>(d.statusCode !== void 0 && (d.statusCode < 200 || d.statusCode >= 300) && (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn(`Sentry responded with status code ${d.statusCode} to sent event.`),
        r = Lf(r, d),
        d), d=>{
            throw c("network_error"),
            d
        }
        );
        return n.add(l).then(d=>d, d=>{
            if (d instanceof Xt)
                return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.error("Skipped sending event because buffer is full."),
                c("queue_overflow"),
                Qn();
            throw d
        }
        )
    }
    return s.__sentry__baseTransport__ = !0,
    {
        send: s,
        flush: i
    }
}
function ic(t, e) {
    if (!(e !== "event" && e !== "transaction"))
        return Array.isArray(t) ? t[1] : void 0
}
const ps = "7.57.0";
let sc;
class di {
    constructor() {
        di.prototype.__init.call(this)
    }
    static __initStatic() {
        this.id = "FunctionToString"
    }
    __init() {
        this.name = di.id
    }
    setupOnce() {
        sc = Function.prototype.toString;
        try {
            Function.prototype.toString = function(...e) {
                const n = ha(this) || this;
                return sc.apply(n, e)
            }
        } catch {}
    }
}
di.__initStatic();
const yd = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]
  , gd = [/^.*healthcheck.*$/, /^.*healthy.*$/, /^.*live.*$/, /^.*ready.*$/, /^.*heartbeat.*$/, /^.*\/health$/, /^.*\/healthz$/];
class kr {
    static __initStatic() {
        this.id = "InboundFilters"
    }
    __init() {
        this.name = kr.id
    }
    constructor(e={}) {
        this._options = e,
        kr.prototype.__init.call(this)
    }
    setupOnce(e, n) {
        const r = i=>{
            const s = n();
            if (s) {
                const o = s.getIntegration(kr);
                if (o) {
                    const a = s.getClient()
                      , u = a ? a.getOptions() : {}
                      , c = _d(o._options, u);
                    return vd(i, c) ? null : i
                }
            }
            return i
        }
        ;
        r.id = this.name,
        e(r)
    }
}
kr.__initStatic();
function _d(t={}, e={}) {
    return {
        allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
        denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
        ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : yd],
        ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || [], ...t.disableTransactionDefaults ? [] : gd],
        ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0
    }
}
function vd(t, e) {
    return e.ignoreInternal && xd(t) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn(`Event dropped due to being internal Sentry Error.
Event: ${An(t)}`),
    !0) : bd(t, e.ignoreErrors) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${An(t)}`),
    !0) : wd(t, e.ignoreTransactions) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${An(t)}`),
    !0) : Ed(t, e.denyUrls) ? ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${An(t)}.
Url: ${ms(t)}`),
    !0) : Sd(t, e.allowUrls) ? !1 : ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${An(t)}.
Url: ${ms(t)}`),
    !0)
}
function bd(t, e) {
    return t.type || !e || !e.length ? !1 : kd(t).some(n=>Fs(n, e))
}
function wd(t, e) {
    if (t.type !== "transaction" || !e || !e.length)
        return !1;
    const n = t.transaction;
    return n ? Fs(n, e) : !1
}
function Ed(t, e) {
    if (!e || !e.length)
        return !1;
    const n = ms(t);
    return n ? Fs(n, e) : !1
}
function Sd(t, e) {
    if (!e || !e.length)
        return !0;
    const n = ms(t);
    return n ? Fs(n, e) : !0
}
function kd(t) {
    if (t.message)
        return [t.message];
    if (t.exception) {
        const {values: e} = t.exception;
        try {
            const {type: n="", value: r=""} = e && e[e.length - 1] || {};
            return [`${r}`, `${n}: ${r}`]
        } catch {
            return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.error(`Cannot extract message for event ${An(t)}`),
            []
        }
    }
    return []
}
function xd(t) {
    try {
        return t.exception.values[0].type === "SentryError"
    } catch {}
    return !1
}
function Td(t=[]) {
    for (let e = t.length - 1; e >= 0; e--) {
        const n = t[e];
        if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
            return n.filename || null
    }
    return null
}
function ms(t) {
    try {
        let e;
        try {
            e = t.exception.values[0].stacktrace.frames
        } catch {}
        return e ? Td(e) : null
    } catch {
        return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.error(`Cannot extract url for event ${An(t)}`),
        null
    }
}
const Ue = Gt;
let Oo = 0;
function du() {
    return Oo > 0
}
function Od() {
    Oo++,
    setTimeout(()=>{
        Oo--
    }
    )
}
function Br(t, e={}, n) {
    if (typeof t != "function")
        return t;
    try {
        const i = t.__sentry_wrapped__;
        if (i)
            return i;
        if (ha(t))
            return t
    } catch {
        return t
    }
    const r = function() {
        const i = Array.prototype.slice.call(arguments);
        try {
            n && typeof n == "function" && n.apply(this, arguments);
            const s = i.map(o=>Br(o, e));
            return t.apply(this, s)
        } catch (s) {
            throw Od(),
            Zf(o=>{
                o.addEventProcessor(a=>(e.mechanism && (Eo(a, void 0, void 0),
                fi(a, e.mechanism)),
                a.extra = {
                    ...a.extra,
                    arguments: i
                },
                a)),
                Vf(s)
            }
            ),
            s
        }
    };
    try {
        for (const i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i])
    } catch {}
    Vc(r, t),
    da(t, "__sentry_wrapped__", r);
    try {
        Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
            get() {
                return t.name
            }
        })
    } catch {}
    return r
}
function hu(t, e) {
    const n = ma(t, e)
      , r = {
        type: e && e.name,
        value: Id(e)
    };
    return n.length && (r.stacktrace = {
        frames: n
    }),
    r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"),
    r
}
function Nd(t, e, n, r) {
    const s = st().getClient()
      , o = s && s.getOptions().normalizeDepth
      , a = {
        exception: {
            values: [{
                type: Ms(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
                value: jd(e, {
                    isUnhandledRejection: r
                })
            }]
        },
        extra: {
            __serialized__: Qc(e, o)
        }
    };
    if (n) {
        const u = ma(t, n);
        u.length && (a.exception.values[0].stacktrace = {
            frames: u
        })
    }
    return a
}
function no(t, e) {
    return {
        exception: {
            values: [hu(t, e)]
        }
    }
}
function ma(t, e) {
    const n = e.stacktrace || e.stack || ""
      , r = Rd(e);
    try {
        return t(n, r)
    } catch {}
    return []
}
const Ad = /Minified React error #\d+;/i;
function Rd(t) {
    if (t) {
        if (typeof t.framesToPop == "number")
            return t.framesToPop;
        if (Ad.test(t.message))
            return 1
    }
    return 0
}
function Id(t) {
    const e = t && t.message;
    return e ? e.error && typeof e.error.message == "string" ? e.error.message : e : "No error message"
}
function Pd(t, e, n, r) {
    const i = n && n.syntheticException || void 0
      , s = ya(t, e, i, r);
    return fi(s),
    s.level = "error",
    n && n.event_id && (s.event_id = n.event_id),
    Qn(s)
}
function Cd(t, e, n="info", r, i) {
    const s = r && r.syntheticException || void 0
      , o = No(t, e, s, i);
    return o.level = n,
    r && r.event_id && (o.event_id = r.event_id),
    Qn(o)
}
function ya(t, e, n, r, i) {
    let s;
    if (ua(e) && e.error)
        return no(t, e.error);
    if (Fa(e) || Pl(e)) {
        const o = e;
        if ("stack"in e)
            s = no(t, e);
        else {
            const a = o.name || (Fa(o) ? "DOMError" : "DOMException")
              , u = o.message ? `${a}: ${o.message}` : a;
            s = No(t, u, n, r),
            Eo(s, u)
        }
        return "code"in o && (s.tags = {
            ...s.tags,
            "DOMException.code": `${o.code}`
        }),
        s
    }
    return Kc(e) ? no(t, e) : jr(e) || Ms(e) ? (s = Nd(t, e, n, i),
    fi(s, {
        synthetic: !0
    }),
    s) : (s = No(t, e, n, r),
    Eo(s, `${e}`, void 0),
    fi(s, {
        synthetic: !0
    }),
    s)
}
function No(t, e, n, r) {
    const i = {
        message: e
    };
    if (r && n) {
        const s = ma(t, n);
        s.length && (i.exception = {
            values: [{
                value: e,
                stacktrace: {
                    frames: s
                }
            }]
        })
    }
    return i
}
function jd(t, {isUnhandledRejection: e}) {
    const n = zl(t)
      , r = e ? "promise rejection" : "exception";
    return ua(t) ? `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\`` : Ms(t) ? `Event \`${Dd(t)}\` (type=${t.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`
}
function Dd(t) {
    try {
        const e = Object.getPrototypeOf(t);
        return e ? e.constructor.name : void 0
    } catch {}
}
const Yi = 1024
  , pu = "Breadcrumbs";
class hi {
    static __initStatic() {
        this.id = pu
    }
    __init() {
        this.name = hi.id
    }
    constructor(e) {
        hi.prototype.__init.call(this),
        this.options = {
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0,
            ...e
        }
    }
    setupOnce() {
        this.options.console && Nn("console", $d),
        this.options.dom && Nn("dom", Bd(this.options.dom)),
        this.options.xhr && Nn("xhr", Ld),
        this.options.fetch && Nn("fetch", Md),
        this.options.history && Nn("history", Ud)
    }
    addSentryBreadcrumb(e) {
        this.options.sentry && st().addBreadcrumb({
            category: `sentry.${e.type === "transaction" ? "transaction" : "event"}`,
            event_id: e.event_id,
            level: e.level,
            message: An(e)
        }, {
            event: e
        })
    }
}
hi.__initStatic();
function Bd(t) {
    function e(n) {
        let r, i = typeof t == "object" ? t.serializeAttribute : void 0, s = typeof t == "object" && typeof t.maxStringLength == "number" ? t.maxStringLength : void 0;
        s && s > Yi && ((typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn(`\`dom.maxStringLength\` cannot exceed ${Yi}, but a value of ${s} was configured. Sentry will use ${Yi} instead.`),
        s = Yi),
        typeof i == "string" && (i = [i]);
        try {
            const o = n.event;
            r = Fd(o) ? go(o.target, {
                keyAttrs: i,
                maxStringLength: s
            }) : go(o, {
                keyAttrs: i,
                maxStringLength: s
            })
        } catch {
            r = "<unknown>"
        }
        r.length !== 0 && st().addBreadcrumb({
            category: `ui.${n.name}`,
            message: r
        }, {
            event: n.event,
            name: n.name,
            global: n.global
        })
    }
    return e
}
function $d(t) {
    for (let n = 0; n < t.args.length; n++)
        if (t.args[n] === "ref=Ref<") {
            t.args[n + 1] = "viewRef";
            break
        }
    const e = {
        category: "console",
        data: {
            arguments: t.args,
            logger: "console"
        },
        level: kf(t.level),
        message: qa(t.args, " ")
    };
    if (t.level === "assert")
        if (t.args[0] === !1)
            e.message = `Assertion failed: ${qa(t.args.slice(1), " ") || "console.assert"}`,
            e.data.arguments = t.args.slice(1);
        else
            return;
    st().addBreadcrumb(e, {
        input: t.args,
        level: t.level
    })
}
function Ld(t) {
    const {startTimestamp: e, endTimestamp: n} = t
      , r = t.xhr[Wr];
    if (!e || !n || !r)
        return;
    const {method: i, url: s, status_code: o, body: a} = r
      , u = {
        method: i,
        url: s,
        status_code: o
    }
      , c = {
        xhr: t.xhr,
        input: a,
        startTimestamp: e,
        endTimestamp: n
    };
    st().addBreadcrumb({
        category: "xhr",
        data: u,
        type: "http"
    }, c)
}
function Md(t) {
    const {startTimestamp: e, endTimestamp: n} = t;
    if (n && !(t.fetchData.url.match(/sentry_key/) && t.fetchData.method === "POST"))
        if (t.error) {
            const r = t.fetchData
              , i = {
                data: t.error,
                input: t.args,
                startTimestamp: e,
                endTimestamp: n
            };
            st().addBreadcrumb({
                category: "fetch",
                data: r,
                level: "error",
                type: "http"
            }, i)
        } else {
            const r = {
                ...t.fetchData,
                status_code: t.response && t.response.status
            }
              , i = {
                input: t.args,
                response: t.response,
                startTimestamp: e,
                endTimestamp: n
            };
            st().addBreadcrumb({
                category: "fetch",
                data: r,
                type: "http"
            }, i)
        }
}
function Ud(t) {
    let e = t.from
      , n = t.to;
    const r = eo(Ue.location.href);
    let i = eo(e);
    const s = eo(n);
    i.path || (i = r),
    r.protocol === s.protocol && r.host === s.host && (n = s.relative),
    r.protocol === i.protocol && r.host === i.host && (e = i.relative),
    st().addBreadcrumb({
        category: "navigation",
        data: {
            from: e,
            to: n
        }
    })
}
function Fd(t) {
    return !!t && !!t.target
}
function Kd(t, {metadata: e, tunnel: n, dsn: r}) {
    const i = {
        event_id: t.event_id,
        sent_at: new Date().toISOString(),
        ...e && e.sdk && {
            sdk: {
                name: e.sdk.name,
                version: e.sdk.version
            }
        },
        ...!!n && !!r && {
            dsn: Us(r)
        }
    }
      , s = qd(t);
    return ji(i, [s])
}
function qd(t) {
    return [{
        type: "user_report"
    }, t]
}
class Gd extends Vn {
    constructor(e) {
        const n = Ue.SENTRY_SDK_SOURCE || mf();
        e._metadata = e._metadata || {},
        e._metadata.sdk = e._metadata.sdk || {
            name: "sentry.javascript.browser",
            packages: [{
                name: `${n}:@sentry/browser`,
                version: ps
            }],
            version: ps
        },
        super(e),
        e.sendClientReports && Ue.document && Ue.document.addEventListener("visibilitychange", ()=>{
            Ue.document.visibilityState === "hidden" && this._flushOutcomes()
        }
        )
    }
    eventFromException(e, n) {
        return Pd(this._options.stackParser, e, n, this._options.attachStacktrace)
    }
    eventFromMessage(e, n="info", r) {
        return Cd(this._options.stackParser, e, n, r, this._options.attachStacktrace)
    }
    sendEvent(e, n) {
        const r = this.getIntegrationById(pu);
        r && r.addSentryBreadcrumb && r.addSentryBreadcrumb(e),
        super.sendEvent(e, n)
    }
    captureUserFeedback(e) {
        if (!this._isEnabled()) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn("SDK not enabled, will not capture user feedback.");
            return
        }
        const n = Kd(e, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel
        });
        this._sendEnvelope(n)
    }
    _prepareEvent(e, n, r) {
        return e.platform = e.platform || "javascript",
        super._prepareEvent(e, n, r)
    }
    _flushOutcomes() {
        const e = this._clearOutcomes();
        if (e.length === 0) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.log("No outcomes to send");
            return
        }
        if (!this._dsn) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.log("No dsn provided, will not send outcomes");
            return
        }
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.log("Sending outcomes:", e);
        const n = Cf(e, this._options.tunnel && Us(this._dsn));
        this._sendEnvelope(n)
    }
}
let Jr;
function Yd() {
    if (Jr)
        return Jr;
    if (bo(Ue.fetch))
        return Jr = Ue.fetch.bind(Ue);
    const t = Ue.document;
    let e = Ue.fetch;
    if (t && typeof t.createElement == "function")
        try {
            const n = t.createElement("iframe");
            n.hidden = !0,
            t.head.appendChild(n);
            const r = n.contentWindow;
            r && r.fetch && (e = r.fetch),
            t.head.removeChild(n)
        } catch (n) {
            (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
        }
    return Jr = e.bind(Ue)
}
function Vd() {
    Jr = void 0
}
function Zd(t, e=Yd()) {
    let n = 0
      , r = 0;
    function i(s) {
        const o = s.body.length;
        n += o,
        r++;
        const a = {
            body: s.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: t.headers,
            keepalive: n <= 6e4 && r < 15,
            ...t.fetchOptions
        };
        try {
            return e(t.url, a).then(u=>(n -= o,
            r--,
            {
                statusCode: u.status,
                headers: {
                    "x-sentry-rate-limits": u.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": u.headers.get("Retry-After")
                }
            }))
        } catch (u) {
            return Vd(),
            n -= o,
            r--,
            hs(u)
        }
    }
    return fu(t, i)
}
const Hd = 4;
function zd(t) {
    function e(n) {
        return new _t((r,i)=>{
            const s = new XMLHttpRequest;
            s.onerror = i,
            s.onreadystatechange = ()=>{
                s.readyState === Hd && r({
                    statusCode: s.status,
                    headers: {
                        "x-sentry-rate-limits": s.getResponseHeader("X-Sentry-Rate-Limits"),
                        "retry-after": s.getResponseHeader("Retry-After")
                    }
                })
            }
            ,
            s.open("POST", t.url);
            for (const o in t.headers)
                Object.prototype.hasOwnProperty.call(t.headers, o) && s.setRequestHeader(o, t.headers[o]);
            s.send(n.body)
        }
        )
    }
    return fu(t, e)
}
const Ys = "?"
  , Wd = 30
  , Jd = 40
  , Xd = 50;
function ga(t, e, n, r) {
    const i = {
        filename: t,
        function: e,
        in_app: !0
    };
    return n !== void 0 && (i.lineno = n),
    r !== void 0 && (i.colno = r),
    i
}
const Qd = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
  , eh = /\((\S*)(?::(\d+))(?::(\d+))\)/
  , th = t=>{
    const e = Qd.exec(t);
    if (e) {
        if (e[2] && e[2].indexOf("eval") === 0) {
            const s = eh.exec(e[2]);
            s && (e[2] = s[1],
            e[3] = s[2],
            e[4] = s[3])
        }
        const [r,i] = mu(e[1] || Ys, e[2]);
        return ga(i, r, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
    }
}
  , nh = [Wd, th]
  , rh = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
  , ih = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
  , sh = t=>{
    const e = rh.exec(t);
    if (e) {
        if (e[3] && e[3].indexOf(" > eval") > -1) {
            const s = ih.exec(e[3]);
            s && (e[1] = e[1] || "eval",
            e[3] = s[1],
            e[4] = s[2],
            e[5] = "")
        }
        let r = e[3]
          , i = e[1] || Ys;
        return [i,r] = mu(i, r),
        ga(r, i, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
    }
}
  , oh = [Xd, sh]
  , ah = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i
  , ch = t=>{
    const e = ah.exec(t);
    return e ? ga(e[2], e[1] || Ys, +e[3], e[4] ? +e[4] : void 0) : void 0
}
  , uh = [Jd, ch]
  , lh = [nh, oh, uh]
  , fh = zc(...lh)
  , mu = (t,e)=>{
    const n = t.indexOf("safari-extension") !== -1
      , r = t.indexOf("safari-web-extension") !== -1;
    return n || r ? [t.indexOf("@") !== -1 ? t.split("@")[0] : Ys, n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
}
;
class Pn {
    static __initStatic() {
        this.id = "GlobalHandlers"
    }
    __init() {
        this.name = Pn.id
    }
    __init2() {
        this._installFunc = {
            onerror: dh,
            onunhandledrejection: hh
        }
    }
    constructor(e) {
        Pn.prototype.__init.call(this),
        Pn.prototype.__init2.call(this),
        this._options = {
            onerror: !0,
            onunhandledrejection: !0,
            ...e
        }
    }
    setupOnce() {
        Error.stackTraceLimit = 50;
        const e = this._options;
        for (const n in e) {
            const r = this._installFunc[n];
            r && e[n] && (yh(n),
            r(),
            this._installFunc[n] = void 0)
        }
    }
}
Pn.__initStatic();
function dh() {
    Nn("error", t=>{
        const [e,n,r] = _u();
        if (!e.getIntegration(Pn))
            return;
        const {msg: i, url: s, line: o, column: a, error: u} = t;
        if (du() || u && u.__sentry_own_request__)
            return;
        const c = u === void 0 && Xn(i) ? mh(i, s, o, a) : yu(ya(n, u || i, void 0, r, !1), s, o, a);
        c.level = "error",
        gu(e, u, c, "onerror")
    }
    )
}
function hh() {
    Nn("unhandledrejection", t=>{
        const [e,n,r] = _u();
        if (!e.getIntegration(Pn))
            return;
        let i = t;
        try {
            "reason"in t ? i = t.reason : "detail"in t && "reason"in t.detail && (i = t.detail.reason)
        } catch {}
        if (du() || i && i.__sentry_own_request__)
            return !0;
        const s = qc(i) ? ph(i) : ya(n, i, void 0, r, !0);
        s.level = "error",
        gu(e, i, s, "onunhandledrejection")
    }
    )
}
function ph(t) {
    return {
        exception: {
            values: [{
                type: "UnhandledRejection",
                value: `Non-Error promise rejection captured with value: ${String(t)}`
            }]
        }
    }
}
function mh(t, e, n, r) {
    const i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    let s = ua(t) ? t.message : t
      , o = "Error";
    const a = s.match(i);
    return a && (o = a[1],
    s = a[2]),
    yu({
        exception: {
            values: [{
                type: o,
                value: s
            }]
        }
    }, e, n, r)
}
function yu(t, e, n, r) {
    const i = t.exception = t.exception || {}
      , s = i.values = i.values || []
      , o = s[0] = s[0] || {}
      , a = o.stacktrace = o.stacktrace || {}
      , u = a.frames = a.frames || []
      , c = isNaN(parseInt(r, 10)) ? void 0 : r
      , l = isNaN(parseInt(n, 10)) ? void 0 : n
      , d = Xn(e) && e.length > 0 ? e : Ml();
    return u.length === 0 && u.push({
        colno: c,
        filename: d,
        function: "?",
        in_app: !0,
        lineno: l
    }),
    t
}
function yh(t) {
    (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.log(`Global Handler attached: ${t}`)
}
function gu(t, e, n, r) {
    fi(n, {
        handled: !1,
        type: r
    }),
    t.captureEvent(n, {
        originalException: e
    })
}
function _u() {
    const t = st()
      , e = t.getClient()
      , n = e && e.getOptions() || {
        stackParser: ()=>[],
        attachStacktrace: !1
    };
    return [t, n.stackParser, n.attachStacktrace]
}
const gh = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
class pi {
    static __initStatic() {
        this.id = "TryCatch"
    }
    __init() {
        this.name = pi.id
    }
    constructor(e) {
        pi.prototype.__init.call(this),
        this._options = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            ...e
        }
    }
    setupOnce() {
        this._options.setTimeout && lt(Ue, "setTimeout", oc),
        this._options.setInterval && lt(Ue, "setInterval", oc),
        this._options.requestAnimationFrame && lt(Ue, "requestAnimationFrame", _h),
        this._options.XMLHttpRequest && "XMLHttpRequest"in Ue && lt(XMLHttpRequest.prototype, "send", vh);
        const e = this._options.eventTarget;
        e && (Array.isArray(e) ? e : gh).forEach(bh)
    }
}
pi.__initStatic();
function oc(t) {
    return function(...e) {
        const n = e[0];
        return e[0] = Br(n, {
            mechanism: {
                data: {
                    function: jn(t)
                },
                handled: !0,
                type: "instrument"
            }
        }),
        t.apply(this, e)
    }
}
function _h(t) {
    return function(e) {
        return t.apply(this, [Br(e, {
            mechanism: {
                data: {
                    function: "requestAnimationFrame",
                    handler: jn(t)
                },
                handled: !0,
                type: "instrument"
            }
        })])
    }
}
function vh(t) {
    return function(...e) {
        const n = this;
        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(i=>{
            i in n && typeof n[i] == "function" && lt(n, i, function(s) {
                const o = {
                    mechanism: {
                        data: {
                            function: i,
                            handler: jn(s)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }
                  , a = ha(s);
                return a && (o.mechanism.data.handler = jn(a)),
                Br(s, o)
            })
        }
        ),
        t.apply(this, e)
    }
}
function bh(t) {
    const e = Ue
      , n = e[t] && e[t].prototype;
    !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (lt(n, "addEventListener", function(r) {
        return function(i, s, o) {
            try {
                typeof s.handleEvent == "function" && (s.handleEvent = Br(s.handleEvent, {
                    mechanism: {
                        data: {
                            function: "handleEvent",
                            handler: jn(s),
                            target: t
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }))
            } catch {}
            return r.apply(this, [i, Br(s, {
                mechanism: {
                    data: {
                        function: "addEventListener",
                        handler: jn(s),
                        target: t
                    },
                    handled: !0,
                    type: "instrument"
                }
            }), o])
        }
    }),
    lt(n, "removeEventListener", function(r) {
        return function(i, s, o) {
            const a = s;
            try {
                const u = a && a.__sentry_wrapped__;
                u && r.call(this, i, u, o)
            } catch {}
            return r.call(this, i, a, o)
        }
    }))
}
const wh = "cause"
  , Eh = 5;
class xr {
    static __initStatic() {
        this.id = "LinkedErrors"
    }
    __init() {
        this.name = xr.id
    }
    constructor(e={}) {
        xr.prototype.__init.call(this),
        this._key = e.key || wh,
        this._limit = e.limit || Eh
    }
    setupOnce() {
        const e = st().getClient();
        e && qs((n,r)=>{
            const i = st().getIntegration(xr);
            return i ? Sh(e.getOptions().stackParser, i._key, i._limit, n, r) : n
        }
        )
    }
}
xr.__initStatic();
function Sh(t, e, n, r, i) {
    if (!r.exception || !r.exception.values || !i || !Kr(i.originalException, Error))
        return r;
    const s = vu(t, n, i.originalException, e);
    return r.exception.values = [...s, ...r.exception.values],
    r
}
function vu(t, e, n, r, i=[]) {
    if (!Kr(n[r], Error) || i.length + 1 >= e)
        return i;
    const s = hu(t, n[r]);
    return vu(t, e, n[r], r, [s, ...i])
}
class Tr {
    constructor() {
        Tr.prototype.__init.call(this)
    }
    static __initStatic() {
        this.id = "HttpContext"
    }
    __init() {
        this.name = Tr.id
    }
    setupOnce() {
        qs(e=>{
            if (st().getIntegration(Tr)) {
                if (!Ue.navigator && !Ue.location && !Ue.document)
                    return e;
                const n = e.request && e.request.url || Ue.location && Ue.location.href
                  , {referrer: r} = Ue.document || {}
                  , {userAgent: i} = Ue.navigator || {}
                  , s = {
                    ...e.request && e.request.headers,
                    ...r && {
                        Referer: r
                    },
                    ...i && {
                        "User-Agent": i
                    }
                }
                  , o = {
                    ...e.request,
                    ...n && {
                        url: n
                    },
                    headers: s
                };
                return {
                    ...e,
                    request: o
                }
            }
            return e
        }
        )
    }
}
Tr.__initStatic();
class Or {
    constructor() {
        Or.prototype.__init.call(this)
    }
    static __initStatic() {
        this.id = "Dedupe"
    }
    __init() {
        this.name = Or.id
    }
    setupOnce(e, n) {
        const r = i=>{
            if (i.type)
                return i;
            const s = n().getIntegration(Or);
            if (s) {
                try {
                    if (kh(i, s._previousEvent))
                        return (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn("Event dropped due to being a duplicate of previously captured event."),
                        null
                } catch {
                    return s._previousEvent = i
                }
                return s._previousEvent = i
            }
            return i
        }
        ;
        r.id = this.name,
        e(r)
    }
}
Or.__initStatic();
function kh(t, e) {
    return e ? !!(xh(t, e) || Th(t, e)) : !1
}
function xh(t, e) {
    const n = t.message
      , r = e.message;
    return !(!n && !r || n && !r || !n && r || n !== r || !wu(t, e) || !bu(t, e))
}
function Th(t, e) {
    const n = ac(e)
      , r = ac(t);
    return !(!n || !r || n.type !== r.type || n.value !== r.value || !wu(t, e) || !bu(t, e))
}
function bu(t, e) {
    let n = cc(t)
      , r = cc(e);
    if (!n && !r)
        return !0;
    if (n && !r || !n && r || (n = n,
    r = r,
    r.length !== n.length))
        return !1;
    for (let i = 0; i < r.length; i++) {
        const s = r[i]
          , o = n[i];
        if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function)
            return !1
    }
    return !0
}
function wu(t, e) {
    let n = t.fingerprint
      , r = e.fingerprint;
    if (!n && !r)
        return !0;
    if (n && !r || !n && r)
        return !1;
    n = n,
    r = r;
    try {
        return n.join("") === r.join("")
    } catch {
        return !1
    }
}
function ac(t) {
    return t.exception && t.exception.values && t.exception.values[0]
}
function cc(t) {
    const e = t.exception;
    if (e)
        try {
            return e.values[0].stacktrace.frames
        } catch {
            return
        }
}
const Oh = [new kr, new di, new pi, new hi, new Pn, new xr, new Or, new Tr];
function Nh(t={}) {
    t.defaultIntegrations === void 0 && (t.defaultIntegrations = Oh),
    t.release === void 0 && (typeof __SENTRY_RELEASE__ == "string" && (t.release = __SENTRY_RELEASE__),
    Ue.SENTRY_RELEASE && Ue.SENTRY_RELEASE.id && (t.release = Ue.SENTRY_RELEASE.id)),
    t.autoSessionTracking === void 0 && (t.autoSessionTracking = !0),
    t.sendClientReports === void 0 && (t.sendClientReports = !0);
    const e = {
        ...t,
        stackParser: Wl(t.stackParser || fh),
        integrations: rd(t),
        transport: t.transport || (Wc() ? Zd : zd)
    };
    pd(Gd, e),
    t.autoSessionTracking && Ah()
}
function uc(t) {
    t.startSession({
        ignoreDuration: !0
    }),
    t.captureSession()
}
function Ah() {
    if (typeof Ue.document > "u") {
        (typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__) && he.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
        return
    }
    const t = st();
    t.captureSession && (uc(t),
    Nn("history", ({from: e, to: n})=>{
        e === void 0 || e === n || uc(st())
    }
    ))
}
function Rh(t) {
    t._metadata = t._metadata || {},
    t._metadata.sdk = t._metadata.sdk || {
        name: "sentry.javascript.svelte",
        packages: [{
            name: "npm:@sentry/svelte",
            version: ps
        }],
        version: ps
    },
    Nh(t),
    Ih()
}
function Ih() {
    let t;
    const e = n=>(t === void 0 && (t = Ph()),
    t && (n.modules = {
        svelteKit: "latest",
        ...n.modules
    }),
    n);
    e.id = "svelteKitProcessor",
    qs(e)
}
function Ph() {
    return Ul("div#svelte-announcer") !== null
}
function Ne() {}
const Eu = t=>t;
function Su(t) {
    return t()
}
function lc() {
    return Object.create(null)
}
function qn(t) {
    t.forEach(Su)
}
function Vs(t) {
    return typeof t == "function"
}
function pt(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function"
}
let Vi;
function Ao(t, e) {
    return Vi || (Vi = document.createElement("a")),
    Vi.href = e,
    t === Vi.href
}
function Ch(t) {
    return Object.keys(t).length === 0
}
function _a(t, ...e) {
    if (t == null)
        return Ne;
    const n = t.subscribe(...e);
    return n.unsubscribe ? ()=>n.unsubscribe() : n
}
function jh(t) {
    let e;
    return _a(t, n=>e = n)(),
    e
}
function et(t, e, n) {
    t.$$.on_destroy.push(_a(e, n))
}
const ku = typeof window < "u";
let Dh = ku ? ()=>window.performance.now() : ()=>Date.now()
  , va = ku ? t=>requestAnimationFrame(t) : Ne;
const Nr = new Set;
function xu(t) {
    Nr.forEach(e=>{
        e.c(t) || (Nr.delete(e),
        e.f())
    }
    ),
    Nr.size !== 0 && va(xu)
}
function Bh(t) {
    let e;
    return Nr.size === 0 && va(xu),
    {
        promise: new Promise(n=>{
            Nr.add(e = {
                c: t,
                f: n
            })
        }
        ),
        abort() {
            Nr.delete(e)
        }
    }
}
function de(t, e) {
    t.appendChild(e)
}
function Tu(t) {
    if (!t)
        return document;
    const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
    return e && e.host ? e : t.ownerDocument
}
function $h(t) {
    const e = Ve("style");
    return Lh(Tu(t), e),
    e.sheet
}
function Lh(t, e) {
    return de(t.head || t, e),
    e.sheet
}
function Me(t, e, n) {
    t.insertBefore(e, n || null)
}
function Te(t) {
    t.parentNode && t.parentNode.removeChild(t)
}
function Ve(t) {
    return document.createElement(t)
}
function gt(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t)
}
function or(t) {
    return document.createTextNode(t)
}
function Xe() {
    return or(" ")
}
function mi() {
    return or("")
}
function yn(t, e, n, r) {
    return t.addEventListener(e, n, r),
    ()=>t.removeEventListener(e, n, r)
}
function Mh(t) {
    return function(e) {
        return e.preventDefault(),
        t.call(this, e)
    }
}
function U(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}
function Uh(t) {
    return Array.from(t.childNodes)
}
function Ou(t, e) {
    e = "" + e,
    t.wholeText !== e && (t.data = e)
}
function Ot(t, e, n, r) {
    n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "")
}
function rt(t, e, n) {
    t.classList[n ? "add" : "remove"](e)
}
function Fh(t, e, {bubbles: n=!1, cancelable: r=!1}={}) {
    const i = document.createEvent("CustomEvent");
    return i.initCustomEvent(t, n, r, e),
    i
}
const ys = new Map;
let gs = 0;
function Kh(t) {
    let e = 5381
      , n = t.length;
    for (; n--; )
        e = (e << 5) - e ^ t.charCodeAt(n);
    return e >>> 0
}
function qh(t, e) {
    const n = {
        stylesheet: $h(e),
        rules: {}
    };
    return ys.set(t, n),
    n
}
function Gh(t, e, n, r, i, s, o, a=0) {
    const u = 16.666 / r;
    let c = `{
`;
    for (let x = 0; x <= 1; x += u) {
        const E = e + (n - e) * s(x);
        c += x * 100 + `%{${o(E, 1 - E)}}
`
    }
    const l = c + `100% {${o(n, 1 - n)}}
}`
      , d = `__svelte_${Kh(l)}_${a}`
      , h = Tu(t)
      , {stylesheet: g, rules: _} = ys.get(h) || qh(h, t);
    _[d] || (_[d] = !0,
    g.insertRule(`@keyframes ${d} ${l}`, g.cssRules.length));
    const b = t.style.animation || "";
    return t.style.animation = `${b ? `${b}, ` : ""}${d} ${r}ms linear ${i}ms 1 both`,
    gs += 1,
    d
}
function Yh(t, e) {
    const n = (t.style.animation || "").split(", ")
      , r = n.filter(e ? s=>s.indexOf(e) < 0 : s=>s.indexOf("__svelte") === -1)
      , i = n.length - r.length;
    i && (t.style.animation = r.join(", "),
    gs -= i,
    gs || Vh())
}
function Vh() {
    va(()=>{
        gs || (ys.forEach(t=>{
            const {ownerNode: e} = t.stylesheet;
            e && Te(e)
        }
        ),
        ys.clear())
    }
    )
}
let yi;
function ii(t) {
    yi = t
}
function Nu() {
    if (!yi)
        throw new Error("Function called outside component initialization");
    return yi
}
function ar(t) {
    Nu().$$.on_mount.push(t)
}
function un(t) {
    Nu().$$.on_destroy.push(t)
}
function Zh(t, e) {
    const n = t.$$.callbacks[e.type];
    n && n.slice().forEach(r=>r.call(this, e))
}
const mr = []
  , Ro = [];
let Ar = [];
const fc = []
  , Hh = Promise.resolve();
let Io = !1;
function zh() {
    Io || (Io = !0,
    Hh.then(Au))
}
function _s(t) {
    Ar.push(t)
}
const ro = new Set;
let fr = 0;
function Au() {
    if (fr !== 0)
        return;
    const t = yi;
    do {
        try {
            for (; fr < mr.length; ) {
                const e = mr[fr];
                fr++,
                ii(e),
                Wh(e.$$)
            }
        } catch (e) {
            throw mr.length = 0,
            fr = 0,
            e
        }
        for (ii(null),
        mr.length = 0,
        fr = 0; Ro.length; )
            Ro.pop()();
        for (let e = 0; e < Ar.length; e += 1) {
            const n = Ar[e];
            ro.has(n) || (ro.add(n),
            n())
        }
        Ar.length = 0
    } while (mr.length);
    for (; fc.length; )
        fc.pop()();
    Io = !1,
    ro.clear(),
    ii(t)
}
function Wh(t) {
    if (t.fragment !== null) {
        t.update(),
        qn(t.before_update);
        const e = t.dirty;
        t.dirty = [-1],
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(_s)
    }
}
function Jh(t) {
    const e = []
      , n = [];
    Ar.forEach(r=>t.indexOf(r) === -1 ? e.push(r) : n.push(r)),
    n.forEach(r=>r()),
    Ar = e
}
let Hr;
function Xh() {
    return Hr || (Hr = Promise.resolve(),
    Hr.then(()=>{
        Hr = null
    }
    )),
    Hr
}
function dc(t, e, n) {
    t.dispatchEvent(Fh(`${e ? "intro" : "outro"}${n}`))
}
const ns = new Set;
let In;
function ba() {
    In = {
        r: 0,
        c: [],
        p: In
    }
}
function wa() {
    In.r || qn(In.c),
    In = In.p
}
function $e(t, e) {
    t && t.i && (ns.delete(t),
    t.i(e))
}
function Ge(t, e, n, r) {
    if (t && t.o) {
        if (ns.has(t))
            return;
        ns.add(t),
        In.c.push(()=>{
            ns.delete(t),
            r && (n && t.d(1),
            r())
        }
        ),
        t.o(e)
    } else
        r && r()
}
const Qh = {
    duration: 0
};
function ep(t, e, n) {
    const r = {
        direction: "out"
    };
    let i = e(t, n, r), s = !0, o;
    const a = In;
    a.r += 1;
    function u() {
        const {delay: c=0, duration: l=300, easing: d=Eu, tick: h=Ne, css: g} = i || Qh;
        g && (o = Gh(t, 1, 0, l, c, d, g));
        const _ = Dh() + c
          , b = _ + l;
        _s(()=>dc(t, !1, "start")),
        Bh(x=>{
            if (s) {
                if (x >= b)
                    return h(0, 1),
                    dc(t, !1, "end"),
                    --a.r || qn(a.c),
                    !1;
                if (x >= _) {
                    const E = d((x - _) / l);
                    h(1 - E, E)
                }
            }
            return s
        }
        )
    }
    return Vs(i) ? Xh().then(()=>{
        i = i(r),
        u()
    }
    ) : u(),
    {
        end(c) {
            c && i.tick && i.tick(1, 0),
            s && (o && Yh(t, o),
            s = !1)
        }
    }
}
const Ru = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function Nt(t) {
    t && t.c()
}
function vt(t, e, n, r) {
    const {fragment: i, after_update: s} = t.$$;
    i && i.m(e, n),
    r || _s(()=>{
        const o = t.$$.on_mount.map(Su).filter(Vs);
        t.$$.on_destroy ? t.$$.on_destroy.push(...o) : qn(o),
        t.$$.on_mount = []
    }
    ),
    s.forEach(_s)
}
function bt(t, e) {
    const n = t.$$;
    n.fragment !== null && (Jh(n.after_update),
    qn(n.on_destroy),
    n.fragment && n.fragment.d(e),
    n.on_destroy = n.fragment = null,
    n.ctx = [])
}
function tp(t, e) {
    t.$$.dirty[0] === -1 && (mr.push(t),
    zh(),
    t.$$.dirty.fill(0)),
    t.$$.dirty[e / 31 | 0] |= 1 << e % 31
}
function Et(t, e, n, r, i, s, o, a=[-1]) {
    const u = yi;
    ii(t);
    const c = t.$$ = {
        fragment: null,
        ctx: [],
        props: s,
        update: Ne,
        not_equal: i,
        bound: lc(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (u ? u.$$.context : [])),
        callbacks: lc(),
        dirty: a,
        skip_bound: !1,
        root: e.target || u.$$.root
    };
    o && o(c.root);
    let l = !1;
    if (c.ctx = n ? n(t, e.props || {}, (d,h,...g)=>{
        const _ = g.length ? g[0] : h;
        return c.ctx && i(c.ctx[d], c.ctx[d] = _) && (!c.skip_bound && c.bound[d] && c.bound[d](_),
        l && tp(t, d)),
        h
    }
    ) : [],
    c.update(),
    l = !0,
    qn(c.before_update),
    c.fragment = r ? r(c.ctx) : !1,
    e.target) {
        if (e.hydrate) {
            const d = Uh(e.target);
            c.fragment && c.fragment.l(d),
            d.forEach(Te)
        } else
            c.fragment && c.fragment.c();
        e.intro && $e(t.$$.fragment),
        vt(t, e.target, e.anchor, e.customElement),
        Au()
    }
    ii(u)
}
class St {
    $destroy() {
        bt(this, 1),
        this.$destroy = Ne
    }
    $on(e, n) {
        if (!Vs(n))
            return Ne;
        const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return r.push(n),
        ()=>{
            const i = r.indexOf(n);
            i !== -1 && r.splice(i, 1)
        }
    }
    $set(e) {
        this.$$set && !Ch(e) && (this.$$.skip_bound = !0,
        this.$$set(e),
        this.$$.skip_bound = !1)
    }
}
const dr = [];
function qr(t, e) {
    return {
        subscribe: Gr(t, e).subscribe
    }
}
function Gr(t, e=Ne) {
    let n;
    const r = new Set;
    function i(a) {
        if (pt(t, a) && (t = a,
        n)) {
            const u = !dr.length;
            for (const c of r)
                c[1](),
                dr.push(c, t);
            if (u) {
                for (let c = 0; c < dr.length; c += 2)
                    dr[c][0](dr[c + 1]);
                dr.length = 0
            }
        }
    }
    function s(a) {
        i(a(t))
    }
    function o(a, u=Ne) {
        const c = [a, u];
        return r.add(c),
        r.size === 1 && (n = e(i) || Ne),
        a(t),
        ()=>{
            r.delete(c),
            r.size === 0 && n && (n(),
            n = null)
        }
    }
    return {
        set: i,
        update: s,
        subscribe: o
    }
}
function Vt(t, e, n) {
    const r = !Array.isArray(t)
      , i = r ? [t] : t
      , s = e.length < 2;
    return qr(n, o=>{
        let a = !1;
        const u = [];
        let c = 0
          , l = Ne;
        const d = ()=>{
            if (c)
                return;
            l();
            const g = e(r ? u[0] : u, o);
            s ? o(g) : l = Vs(g) ? g : Ne
        }
          , h = i.map((g,_)=>_a(g, b=>{
            u[_] = b,
            c &= ~(1 << _),
            a && d()
        }
        , ()=>{
            c |= 1 << _
        }
        ));
        return a = !0,
        d(),
        function() {
            qn(h),
            l(),
            a = !1
        }
    }
    )
}
const It = qr(void 0, t=>{
    const e = ()=>{
        const n = new URLSearchParams(location.search)
          , r = n.get("game") ?? ""
          , i = n.get("track") ?? ""
          , s = n.get("release") ?? ""
          , o = n.get("coverImage") ?? ""
          , a = n.get("gamePlayId") ?? ""
          , u = n.get("clientId") ?? ""
          , c = n.get("sessionId") ?? ""
          , l = n.get("source") ?? ""
          , d = n.get("interpolateColors") === "true"
          , h = n.get("autoload") === "true"
          , g = n.get("preload") === "true"
          , _ = n.get("skipDbCheck") ? n.get("skipDbCheck") === "true" ? !0 : n.get("skipDbCheck") === "false" ? !1 : void 0 : void 0;
        t({
            autoloadEnabled: h,
            clientId: u,
            coverImage: o,
            gameId: r,
            gamePlayId: a,
            interpolateColors: d,
            preloadEnabled: g,
            releaseId: s,
            sessionId: c,
            skipDbCheck: _,
            source: l,
            trackId: i
        })
    }
    ;
    return e(),
    window.addEventListener("popstate", e),
    ()=>{
        window.removeEventListener("popstate", e)
    }
}
)
  , bn = ()=>{
    const t = ["https://gx.games", "https://gxc.gg", "https://canary.gxc.gmx.dev", "https://alt.canary.gxc.gmx.dev"]
      , e = jh(It).source;
    if (e)
        return t.includes(e) ? e : void 0;
    if (!document.referrer) {
        console.warn("`document.referrer` missing");
        return
    }
    const n = new URL(document.referrer).origin;
    if (!t.includes(n)) {
        console.warn(`\`document.referrer\` origin invalid. Expected one of ${t}, found "${n}"`);
        return
    }
    return n
}
  , np = t=>{
    const e = t.match(/\((\d+)\/(\d+)\)/);
    if (!e)
        return;
    const [,n,r] = e.map(i=>parseInt(i));
    if (!(n !== 0 && !n || r !== 0 && !r))
        return {
            loaded: n,
            total: r
        }
}
;
async function io(t) {
    try {
        return {
            data: await t,
            error: null
        }
    } catch (e) {
        return {
            data: null,
            error: e instanceof Error ? e : new Error(String(e))
        }
    }
}
const rp = t=>{
    var e;
    return (e = t.match(/script.src = "(.*)"/m)) == null ? void 0 : e[1]
}
  , si = ()=>{
    var t;
    return ((t = navigator.userAgentData) == null ? void 0 : t.mobile) || /Android|iPhone|iPod|iPad/i.test(navigator.userAgent)
}
  , ip = ()=>{
    var t, e, n;
    return !!((n = (e = (t = navigator.userAgentData) == null ? void 0 : t.brands) == null ? void 0 : e.find(r=>r.brand === "Opera")) != null && n.version)
}
  , sp = ()=>!!window.chrome
  , op = ()=>navigator.userAgent.includes("Firefox")
  , Iu = ()=>{
    if (window.oprt || typeof navigator < "u" && navigator.userAgent.includes("OPX/"))
        return !0;
    const t = new URLSearchParams(location.search);
    return !!(t.get("gxm") === "true" ? !0 : t.get("gxm") === "false" ? !1 : void 0)
}
  , ap = async()=>{
    if ("serviceWorker"in navigator && !Iu())
        return ["https://play.gx.games", "https://play.gxc.gg"].includes(location.origin) ? await navigator.serviceWorker.register(`${location.pathname.split}/sw.js`, {
            scope: "/",
            type: "classic"
        }).catch(t=>{
            console.error("Failed to register service worked: ", t),
            Po.set(!0)
        }
        ) : await navigator.serviceWorker.register("sw.js", {
            scope: "/",
            type: "classic"
        }).catch(t=>{
            console.error("Failed to register service worked: ", t),
            Po.set(!0)
        }
        )
}
  , Po = Gr(!1, t=>{
    if (!("serviceWorker"in navigator)) {
        t(!0);
        return
    }
    if (Iu()) {
        t(!0);
        return
    }
    navigator.serviceWorker.ready.then(()=>{
        t(!0)
    }
    )
}
)
  , Ea = Gr(!1)
  , Pu = Vt([It, Ea], ([t,e])=>e ? !1 : !!(t.autoloadEnabled || t.preloadEnabled))
  , Cu = Vt([It], ([t],e)=>{
    t.gameId && caches.keys().then(n=>n.map(r=>JSON.parse(r)).some(({gameId: r})=>r === t.gameId)).then(e).catch(()=>{
        e(!1)
    }
    )
}
, void 0)
  , ju = Gr(!1)
  , Co = Gr(!1)
  , Du = Vt([Co, Po, ju, It], ([t,e,n,r])=>[t, e, r.skipDbCheck !== !1 || n].every(Boolean))
  , Bu = Vt([It, Cu], ([t,e])=>si() || !t.autoloadEnabled && !t.preloadEnabled || e === void 0 ? "on-demand" : e ? "autoloading" : t.preloadEnabled ? "preloading" : "autoloading")
  , cp = Vt([It, Cu, Bu, Ea], ([t,e,n,r])=>r || (t.autoloadEnabled || t.preloadEnabled) && n === "preloading" ? !0 : !(t.autoloadEnabled && !si() && !e))
  , rs = "runner.js"
  , up = t=>{
    var e;
    if (!t || typeof t != "object")
        return rs;
    if (t.mainJS)
        return t.mainJS;
    if (!t.manifestFiles || !Array.isArray(t.manifestFiles))
        return rs;
    {
        const n = (e = t.manifestFiles.find(i=>i.endsWith(".wasm"))) == null ? void 0 : e.split(".")[0]
          , r = t.manifestFiles.find(i=>i === `${n}.js`);
        if (r)
            return r
    }
    {
        const n = t.manifestFiles.find(r=>r.endsWith(".js"));
        if (n)
            return n
    }
    return rs
}
  , Sa = Vt([Du, It], ([t],e)=>{
    t && (async()=>{
        {
            const n = await io(fetch("runner.json"));
            if (n.error) {
                console.error(n.error);
                return
            }
            if (n.data.status !== 403) {
                e(await n.data.json());
                return
            }
        }
        {
            const n = await io(fetch("runner.js"));
            if (n.error) {
                console.error(n.error);
                return
            }
            if (n.data.status !== 403) {
                e({
                    legacyRunner: !0,
                    mainJS: rs
                });
                return
            }
        }
        {
            const n = await io(fetch("runner-sw.js"));
            if (n.error) {
                console.error(n.error);
                return
            }
            if (n.data.status !== 403) {
                const r = rp(await n.data.text());
                if (r) {
                    e({
                        legacyRunner: !0,
                        mainJS: r
                    });
                    return
                }
            }
        }
        console.error("No entry point found. Could not find `runner.json`, `runner.js` nor `runner-sw.js`")
    }
    )()
}
, null)
  , lp = Vt(Sa, t=>t && up(t))
  , fp = qr(null, t=>(window.onGameSetWindowSize = (e,n)=>t({
    height: Math.abs(n),
    width: Math.abs(e)
}),
()=>{
    window.onGameSetWindowSize = ()=>{
        console.info("window.onGameSetWindowSize not set")
    }
}
))
  , cr = qr(!1, t=>(window.onFirstFrameRendered = ()=>t(!0),
()=>{
    window.onFirstFrameRendered = ()=>{
        console.info("window.onFirstFrameRendered not set")
    }
}
))
  , dp = qr(null, t=>{
    const e = n=>{
        const r = np(n);
        r && t(r)
    }
    ;
    return window.Module ? window.Module.setStatus = e : window.Module = {
        setStatus: e
    },
    ()=>{
        window.Module && (window.Module.setStatus = ()=>{
            console.info("window.Module.setStatus not set")
        }
        )
    }
}
)
  , hp = qr(null, t=>(window.g_pWadLoadCallback = (e,n)=>{
    t({
        loaded: e,
        total: n
    })
}
,
()=>{
    window.g_pWadLoadCallback = ()=>{
        console.info("window.g_pWadLoadCallback not set")
    }
}
))
  , pp = Vt([Sa, dp, hp, cr], ([t,e,n,r])=>{
    if (r)
        return 1;
    if (n) {
        const {loaded: i, total: s} = n;
        return !s || i < 0 ? .5 : .5 + .5 * (i / s)
    }
    if (e) {
        const {loaded: i, total: s} = e;
        return t != null && t.legacyRunner ? i / s : .5 * (i / s)
    }
    return 0
}
);
[window.manifestFiles,window.manifestFilesMD5] = (()=>{
    let t, e;
    return Sa.subscribe(n=>{
        var r;
        t = ((r = n == null ? void 0 : n.manifestFiles) == null ? void 0 : r.join(";")) ?? "",
        e = (n == null ? void 0 : n.manifestFilesMD5) ?? []
    }
    ),
    [()=>t, ()=>e]
}
)();
window.g_pAddAsyncMethod = -1;
window.setAddAsyncMethod = t=>{
    window.g_pAddAsyncMethod = t
}
;
window.g_pJSExceptionHandler = void 0;
window.setJSExceptionHandler = t=>{
    typeof t == "function" && (window.g_pJSExceptionHandler = t)
}
;
window.hasJSExceptionHandler = ()=>!!window.g_pJSExceptionHandler && typeof window.g_pJSExceptionHandler == "function";
window.doJSExceptionHandler = t=>{
    if (typeof window.g_pJSExceptionHandler == "function") {
        const e = JSON.parse(t);
        window.g_pJSExceptionHandler(e)
    }
}
;
window.triggerPayment = (t,e)=>{
    const n = bn();
    if (!n)
        return;
    const r = window.triggerPaymentPrefix(e)
      , i = ()=>window.doGMLCallback(r, {
        id: t
    })
      , s = o=>{
        n === o.origin && o.data === "CHECK_PAYMENT" && (i(),
        window.removeEventListener("message", s))
    }
    ;
    window.addEventListener("message", s),
    window.parent.postMessage({
        event_id: "TRIGGER_PAYMENT"
    }, {
        targetOrigin: n
    })
}
;
const vs = (()=>{
    const {subscribe: t} = Vt(cr, (e,n)=>(window.pause = r=>{
        (r || e) && window.GM_pause && (window.GM_pause(),
        n(!0))
    }
    ,
    window.resume = r=>{
        (r || e) && window.GM_unpause && (window.GM_unpause(),
        n(!1))
    }
    ,
    ()=>{
        window.pause = ()=>console.info("window.pause not set"),
        window.resume = ()=>console.info("window.pause not set")
    }
    ));
    return {
        pause: e=>{
            var n;
            (n = window.pause) == null || n.call(window, !!e)
        }
        ,
        resume: e=>{
            var n;
            (n = window.resume) == null || n.call(window, !!e)
        }
        ,
        subscribe: t
    }
}
)()
  , $u = (()=>{
    const t = ()=>{
        var n, r, i;
        return !!((n = window.oprt) != null && n.closeTab) || !!((i = (r = window.chrome) == null ? void 0 : r.runtime) != null && i.sendMessage)
    }
      , {subscribe: e} = Vt(cr, (n,r)=>{
        r(t())
    }
    , t());
    return {
        quit: ()=>{
            var n, r, i, s;
            if ((n = window.oprt) != null && n.closeTab) {
                window.oprt.closeTab();
                return
            }
            if (window.chrome) {
                (s = (i = (r = window.chrome) == null ? void 0 : r.runtime) == null ? void 0 : i.sendMessage) == null || s.call(i, "mpojjmidmnpcpopbebmecmjdkdbgdeke", {
                    command: "closeTab"
                });
                return
            }
        }
        ,
        subscribe: e
    }
}
)()
  , jo = ()=>{
    var n, r, i, s, o;
    const t = (n = window.GM_get_view_status) == null ? void 0 : n.call(window);
    (r = window.oprt) != null && r.enterFullscreen && ((s = (i = window.oprt) == null ? void 0 : i.enterFullscreen) == null || s.call(i),
    t && ((o = window.GM_set_view_status) == null || o.call(window, {
        ...t,
        fullscreen: !0
    })));
    const e = bn();
    e && window.parent.postMessage("ENTER_FULL_SCREEN", e)
}
  , mp = ()=>{
    var e, n, r, i, s;
    const t = (e = window.GM_get_view_status) == null ? void 0 : e.call(window);
    (t == null ? void 0 : t.landscape) === !0 && (t == null ? void 0 : t.portrait) === !1 && ((r = (n = window.oprt) == null ? void 0 : n.lockLandscapeOrientation) == null || r.call(n)),
    (t == null ? void 0 : t.portrait) === !0 && (t == null ? void 0 : t.landscape) === !1 && ((s = (i = window.oprt) == null ? void 0 : i.lockPortraitOrientation) == null || s.call(i))
}
  , hc = t=>Array.from(new URLSearchParams(t.search).entries()).map(([e,n])=>`${e}=${n}`)
  , vr = (t,e)=>(t.startsWith("http") || (t = `https://play.gx.games/${e.gameId}/${e.trackId}/${e.releaseId}/${t}`),
t.replace("https://api.gxc.gg", "https://api.gx.games").replace("https://play.gxc.gg", "https://play.gx.games"))
  , {document: pc} = Ru;
function mc(t) {
    let e, n, r, i;
    return {
        c() {
            e = Ve("script"),
            e.async = !0,
            Ao(e.src, n = vr(t[8], t[3])) || U(e, "src", n)
        },
        m(s, o) {
            Me(s, e, o),
            r || (i = yn(e, "load", t[11]),
            r = !0)
        },
        p(s, o) {
            o & 264 && !Ao(e.src, n = vr(s[8], s[3])) && U(e, "src", n)
        },
        d(s) {
            s && Te(e),
            r = !1,
            i()
        }
    }
}
function yp(t) {
    var u;
    let e, n, r, i, s, o, a = ((u = window == null ? void 0 : window.Module) == null ? void 0 : u.canvas) && t[8] && t[9] && t[10] && mc(t);
    return {
        c() {
            a && a.c(),
            e = mi(),
            n = Xe(),
            r = Ve("div"),
            i = Ve("canvas"),
            U(i, "height", t[7]),
            U(i, "width", t[6]),
            U(i, "class", "border-none bg-black transition-all duration-75"),
            U(i, "id", "canvas"),
            Ot(i, "height", t[1] + "px"),
            Ot(i, "width", t[0] + "px"),
            rt(i, "[image-rendering:auto]", t[5]),
            rt(i, "[image-rendering:pixelated]", !t[5]),
            rt(i, "hidden", !t[2]),
            U(r, "class", "transition-opacity duration-1000"),
            rt(r, "opacity-0", !t[2]),
            rt(r, "opacity-100", t[2])
        },
        m(c, l) {
            a && a.m(pc.head, null),
            de(pc.head, e),
            Me(c, n, l),
            Me(c, r, l),
            de(r, i),
            t[18](i),
            s || (o = yn(i, "contextmenu", Mh(t[17])),
            s = !0)
        },
        p(c, [l]) {
            var d;
            (d = window == null ? void 0 : window.Module) != null && d.canvas && c[8] && c[9] && c[10] ? a ? a.p(c, l) : (a = mc(c),
            a.c(),
            a.m(e.parentNode, e)) : a && (a.d(1),
            a = null),
            l & 128 && U(i, "height", c[7]),
            l & 64 && U(i, "width", c[6]),
            l & 2 && Ot(i, "height", c[1] + "px"),
            l & 1 && Ot(i, "width", c[0] + "px"),
            l & 32 && rt(i, "[image-rendering:auto]", c[5]),
            l & 32 && rt(i, "[image-rendering:pixelated]", !c[5]),
            l & 4 && rt(i, "hidden", !c[2]),
            l & 4 && rt(r, "opacity-0", !c[2]),
            l & 4 && rt(r, "opacity-100", c[2])
        },
        i: Ne,
        o: Ne,
        d(c) {
            a && a.d(c),
            Te(e),
            c && Te(n),
            c && Te(r),
            t[18](null),
            s = !1,
            o()
        }
    }
}
function gp(t, e, n) {
    let r, i, s, o, a, u, c, l, d, h, g, _, b;
    et(t, cr, A=>n(2, l = A)),
    et(t, It, A=>n(3, d = A)),
    et(t, fp, A=>n(16, h = A)),
    et(t, lp, A=>n(8, g = A)),
    et(t, Du, A=>n(9, _ = A)),
    et(t, cp, A=>n(10, b = A));
    let x, E = document.body.clientHeight ?? 1, S = document.body.clientWidth ?? 1;
    const k = ()=>{
        jo(),
        mp()
    }
    ;
    ar(()=>{
        window.addEventListener("message", C=>{
            const M = bn();
            C.origin === M && (C.data.eventId === "PAUSE_GAME" && (vs.pause(!0),
            M && window.parent.postMessage({
                eventId: C.data.eventId,
                success: typeof window.GM_pause == "function"
            }, M)),
            C.data.eventId === "UNPAUSE_GAME" && vs.resume(!0))
        }
        );
        const A = C=>{
            var v;
            if (C.origin !== bn() || C.data.eventId !== "SEND_GAMEPLAYID_TO_IFRAME")
                return;
            Ea.set(!0);
            const M = new URL(location.href);
            M.searchParams.set("gamePlayId", C.data.gamePlayId),
            history.pushState({}, "", M),
            (v = C.source) == null || v.postMessage("SEND_GAMEPLAYID_TO_IFRAME_RESPONSE", {
                targetOrigin: C.origin
            }),
            window.dispatchEvent(new CustomEvent("popstate")),
            window.removeEventListener("message", A)
        }
        ;
        window.addEventListener("message", A),
        addEventListener("resize", ()=>{
            n(12, E = document.body.clientHeight),
            n(13, S = document.body.clientWidth)
        }
        ),
        jo(),
        x.requestFullscreen || n(4, x.requestFullscreen = ()=>Promise.reject(), x),
        window.Module ? (window.Module.canvas = x,
        window.Module.arguments = hc(window.location)) : window.Module = {
            arguments: hc(window.location),
            canvas: x,
            print: (...C)=>{
                console.info(...C)
            }
            ,
            printErr: (...C)=>{
                console.error(...C)
            }
        }
    }
    ),
    un(()=>{}
    );
    function B(A) {
        Zh.call(this, t, A)
    }
    function I(A) {
        Ro[A ? "unshift" : "push"](()=>{
            x = A,
            n(4, x)
        }
        )
    }
    return t.$$.update = ()=>{
        t.$$.dirty & 65536 && n(14, r = (h == null ? void 0 : h.height) ?? 1),
        t.$$.dirty & 65536 && n(15, i = (h == null ? void 0 : h.width) ?? 1),
        t.$$.dirty & 12292 && l && (document.body.clientHeight && E !== document.body.clientHeight && n(12, E = document.body.clientHeight),
        document.body.clientWidth && S !== document.body.clientWidth && n(13, S = document.body.clientWidth)),
        t.$$.dirty & 61440 && n(1, s = Math.min(S * r / i, E)),
        t.$$.dirty & 61440 && n(0, o = Math.min(E * i / r, S)),
        t.$$.dirty & 65538 && n(7, a = (h == null ? void 0 : h.height) ?? s),
        t.$$.dirty & 65537 && n(6, u = (h == null ? void 0 : h.width) ?? o),
        t.$$.dirty & 8 && n(5, c = d.interpolateColors)
    }
    ,
    [o, s, l, d, x, c, u, a, g, _, b, k, E, S, r, i, h, B, I]
}
class _p extends St {
    constructor(e) {
        super(),
        Et(this, e, gp, yp, pt, {})
    }
}
function vp(t) {
    const e = [];
    return ar(()=>{
        if (!window.chrome) {
            const r = window.chrome;
            window.chrome = {},
            e.push(()=>{
                window.chrome = r
            }
            )
        }
        if (!window.chrome.runtime) {
            const r = window.chrome.runtime;
            window.chrome.runtime = {},
            e.push(()=>{
                window.chrome.runtime = r
            }
            )
        }
        const n = window.chrome.runtime.sendMessage;
        window.chrome.runtime.sendMessage = (...r)=>{
            const [i,s,o] = r;
            if (i !== "mpojjmidmnpcpopbebmecmjdkdbgdeke")
                return n(...r);
            switch (s.command) {
            case "product":
                return setTimeout(o, 0, {
                    product: "Opera GX"
                }),
                !0;
            case "authenticate":
                return window.crypto.subtle.digest("SHA-1", new TextEncoder().encode(s.randomString + "QXyd2ZCu88ec3J0X")).then(a=>o({
                    hash: Array.from(new Uint8Array(a))
                })),
                !0;
            default:
                return !1
            }
        }
        ,
        e.push(()=>{
            window.chrome.runtime.sendMessage = n
        }
        )
    }
    ),
    un(()=>{
        e.slice().reverse().forEach(n=>n())
    }
    ),
    []
}
class bp extends St {
    constructor(e) {
        super(),
        Et(this, e, vp, null, pt, {})
    }
}
var Oe;
(function(t) {
    t.assertEqual = i=>i;
    function e(i) {}
    t.assertIs = e;
    function n(i) {
        throw new Error
    }
    t.assertNever = n,
    t.arrayToEnum = i=>{
        const s = {};
        for (const o of i)
            s[o] = o;
        return s
    }
    ,
    t.getValidEnumValues = i=>{
        const s = t.objectKeys(i).filter(a=>typeof i[i[a]] != "number")
          , o = {};
        for (const a of s)
            o[a] = i[a];
        return t.objectValues(o)
    }
    ,
    t.objectValues = i=>t.objectKeys(i).map(function(s) {
        return i[s]
    }),
    t.objectKeys = typeof Object.keys == "function" ? i=>Object.keys(i) : i=>{
        const s = [];
        for (const o in i)
            Object.prototype.hasOwnProperty.call(i, o) && s.push(o);
        return s
    }
    ,
    t.find = (i,s)=>{
        for (const o of i)
            if (s(o))
                return o
    }
    ,
    t.isInteger = typeof Number.isInteger == "function" ? i=>Number.isInteger(i) : i=>typeof i == "number" && isFinite(i) && Math.floor(i) === i;
    function r(i, s=" | ") {
        return i.map(o=>typeof o == "string" ? `'${o}'` : o).join(s)
    }
    t.joinValues = r,
    t.jsonStringifyReplacer = (i,s)=>typeof s == "bigint" ? s.toString() : s
}
)(Oe || (Oe = {}));
var Do;
(function(t) {
    t.mergeShapes = (e,n)=>({
        ...e,
        ...n
    })
}
)(Do || (Do = {}));
const V = Oe.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
  , Rn = t=>{
    switch (typeof t) {
    case "undefined":
        return V.undefined;
    case "string":
        return V.string;
    case "number":
        return isNaN(t) ? V.nan : V.number;
    case "boolean":
        return V.boolean;
    case "function":
        return V.function;
    case "bigint":
        return V.bigint;
    case "symbol":
        return V.symbol;
    case "object":
        return Array.isArray(t) ? V.array : t === null ? V.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? V.promise : typeof Map < "u" && t instanceof Map ? V.map : typeof Set < "u" && t instanceof Set ? V.set : typeof Date < "u" && t instanceof Date ? V.date : V.object;
    default:
        return V.unknown
    }
}
  , L = Oe.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"])
  , wp = t=>JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class nn extends Error {
    constructor(e) {
        super(),
        this.issues = [],
        this.addIssue = r=>{
            this.issues = [...this.issues, r]
        }
        ,
        this.addIssues = (r=[])=>{
            this.issues = [...this.issues, ...r]
        }
        ;
        const n = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n,
        this.name = "ZodError",
        this.issues = e
    }
    get errors() {
        return this.issues
    }
    format(e) {
        const n = e || function(s) {
            return s.message
        }
          , r = {
            _errors: []
        }
          , i = s=>{
            for (const o of s.issues)
                if (o.code === "invalid_union")
                    o.unionErrors.map(i);
                else if (o.code === "invalid_return_type")
                    i(o.returnTypeError);
                else if (o.code === "invalid_arguments")
                    i(o.argumentsError);
                else if (o.path.length === 0)
                    r._errors.push(n(o));
                else {
                    let a = r
                      , u = 0;
                    for (; u < o.path.length; ) {
                        const c = o.path[u];
                        u === o.path.length - 1 ? (a[c] = a[c] || {
                            _errors: []
                        },
                        a[c]._errors.push(n(o))) : a[c] = a[c] || {
                            _errors: []
                        },
                        a = a[c],
                        u++
                    }
                }
        }
        ;
        return i(this),
        r
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, Oe.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(e=n=>n.message) {
        const n = {}
          , r = [];
        for (const i of this.issues)
            i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [],
            n[i.path[0]].push(e(i))) : r.push(e(i));
        return {
            formErrors: r,
            fieldErrors: n
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
nn.create = t=>new nn(t);
const gi = (t,e)=>{
    let n;
    switch (t.code) {
    case L.invalid_type:
        t.received === V.undefined ? n = "Required" : n = `Expected ${t.expected}, received ${t.received}`;
        break;
    case L.invalid_literal:
        n = `Invalid literal value, expected ${JSON.stringify(t.expected, Oe.jsonStringifyReplacer)}`;
        break;
    case L.unrecognized_keys:
        n = `Unrecognized key(s) in object: ${Oe.joinValues(t.keys, ", ")}`;
        break;
    case L.invalid_union:
        n = "Invalid input";
        break;
    case L.invalid_union_discriminator:
        n = `Invalid discriminator value. Expected ${Oe.joinValues(t.options)}`;
        break;
    case L.invalid_enum_value:
        n = `Invalid enum value. Expected ${Oe.joinValues(t.options)}, received '${t.received}'`;
        break;
    case L.invalid_arguments:
        n = "Invalid function arguments";
        break;
    case L.invalid_return_type:
        n = "Invalid function return type";
        break;
    case L.invalid_date:
        n = "Invalid date";
        break;
    case L.invalid_string:
        typeof t.validation == "object" ? "includes"in t.validation ? (n = `Invalid input: must include "${t.validation.includes}"`,
        typeof t.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith"in t.validation ? n = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith"in t.validation ? n = `Invalid input: must end with "${t.validation.endsWith}"` : Oe.assertNever(t.validation) : t.validation !== "regex" ? n = `Invalid ${t.validation}` : n = "Invalid";
        break;
    case L.too_small:
        t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : n = "Invalid input";
        break;
    case L.too_big:
        t.type === "array" ? n = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? n = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? n = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? n = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? n = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : n = "Invalid input";
        break;
    case L.custom:
        n = "Invalid input";
        break;
    case L.invalid_intersection_types:
        n = "Intersection results could not be merged";
        break;
    case L.not_multiple_of:
        n = `Number must be a multiple of ${t.multipleOf}`;
        break;
    case L.not_finite:
        n = "Number must be finite";
        break;
    default:
        n = e.defaultError,
        Oe.assertNever(t)
    }
    return {
        message: n
    }
}
;
let Lu = gi;
function Ep(t) {
    Lu = t
}
function bs() {
    return Lu
}
const ws = t=>{
    const {data: e, path: n, errorMaps: r, issueData: i} = t
      , s = [...n, ...i.path || []]
      , o = {
        ...i,
        path: s
    };
    let a = "";
    const u = r.filter(c=>!!c).slice().reverse();
    for (const c of u)
        a = c(o, {
            data: e,
            defaultError: a
        }).message;
    return {
        ...i,
        path: s,
        message: i.message || a
    }
}
  , Sp = [];
function Z(t, e) {
    const n = ws({
        issueData: e,
        data: t.data,
        path: t.path,
        errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, bs(), gi].filter(r=>!!r)
    });
    t.common.issues.push(n)
}
class ht {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(e, n) {
        const r = [];
        for (const i of n) {
            if (i.status === "aborted")
                return fe;
            i.status === "dirty" && e.dirty(),
            r.push(i.value)
        }
        return {
            status: e.value,
            value: r
        }
    }
    static async mergeObjectAsync(e, n) {
        const r = [];
        for (const i of n)
            r.push({
                key: await i.key,
                value: await i.value
            });
        return ht.mergeObjectSync(e, r)
    }
    static mergeObjectSync(e, n) {
        const r = {};
        for (const i of n) {
            const {key: s, value: o} = i;
            if (s.status === "aborted" || o.status === "aborted")
                return fe;
            s.status === "dirty" && e.dirty(),
            o.status === "dirty" && e.dirty(),
            (typeof o.value < "u" || i.alwaysSet) && (r[s.value] = o.value)
        }
        return {
            status: e.value,
            value: r
        }
    }
}
const fe = Object.freeze({
    status: "aborted"
})
  , Mu = t=>({
    status: "dirty",
    value: t
})
  , wt = t=>({
    status: "valid",
    value: t
})
  , Bo = t=>t.status === "aborted"
  , $o = t=>t.status === "dirty"
  , Es = t=>t.status === "valid"
  , Ss = t=>typeof Promise < "u" && t instanceof Promise;
var ie;
(function(t) {
    t.errToObj = e=>typeof e == "string" ? {
        message: e
    } : e || {},
    t.toString = e=>typeof e == "string" ? e : e == null ? void 0 : e.message
}
)(ie || (ie = {}));
class an {
    constructor(e, n, r, i) {
        this._cachedPath = [],
        this.parent = e,
        this.data = n,
        this._path = r,
        this._key = i
    }
    get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
    }
}
const yc = (t,e)=>{
    if (Es(e))
        return {
            success: !0,
            data: e.value
        };
    if (!t.common.issues.length)
        throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error)
                return this._error;
            const n = new nn(t.common.issues);
            return this._error = n,
            this._error
        }
    }
}
;
function ye(t) {
    if (!t)
        return {};
    const {errorMap: e, invalid_type_error: n, required_error: r, description: i} = t;
    if (e && (n || r))
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return e ? {
        errorMap: e,
        description: i
    } : {
        errorMap: (o,a)=>o.code !== "invalid_type" ? {
            message: a.defaultError
        } : typeof a.data > "u" ? {
            message: r ?? a.defaultError
        } : {
            message: n ?? a.defaultError
        },
        description: i
    }
}
class ge {
    constructor(e) {
        this.spa = this.safeParseAsync,
        this._def = e,
        this.parse = this.parse.bind(this),
        this.safeParse = this.safeParse.bind(this),
        this.parseAsync = this.parseAsync.bind(this),
        this.safeParseAsync = this.safeParseAsync.bind(this),
        this.spa = this.spa.bind(this),
        this.refine = this.refine.bind(this),
        this.refinement = this.refinement.bind(this),
        this.superRefine = this.superRefine.bind(this),
        this.optional = this.optional.bind(this),
        this.nullable = this.nullable.bind(this),
        this.nullish = this.nullish.bind(this),
        this.array = this.array.bind(this),
        this.promise = this.promise.bind(this),
        this.or = this.or.bind(this),
        this.and = this.and.bind(this),
        this.transform = this.transform.bind(this),
        this.brand = this.brand.bind(this),
        this.default = this.default.bind(this),
        this.catch = this.catch.bind(this),
        this.describe = this.describe.bind(this),
        this.pipe = this.pipe.bind(this),
        this.isNullable = this.isNullable.bind(this),
        this.isOptional = this.isOptional.bind(this)
    }
    get description() {
        return this._def.description
    }
    _getType(e) {
        return Rn(e.data)
    }
    _getOrReturnCtx(e, n) {
        return n || {
            common: e.parent.common,
            data: e.data,
            parsedType: Rn(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent
        }
    }
    _processInputParams(e) {
        return {
            status: new ht,
            ctx: {
                common: e.parent.common,
                data: e.data,
                parsedType: Rn(e.data),
                schemaErrorMap: this._def.errorMap,
                path: e.path,
                parent: e.parent
            }
        }
    }
    _parseSync(e) {
        const n = this._parse(e);
        if (Ss(n))
            throw new Error("Synchronous parse encountered promise.");
        return n
    }
    _parseAsync(e) {
        const n = this._parse(e);
        return Promise.resolve(n)
    }
    parse(e, n) {
        const r = this.safeParse(e, n);
        if (r.success)
            return r.data;
        throw r.error
    }
    safeParse(e, n) {
        var r;
        const i = {
            common: {
                issues: [],
                async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
                contextualErrorMap: n == null ? void 0 : n.errorMap
            },
            path: (n == null ? void 0 : n.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: Rn(e)
        }
          , s = this._parseSync({
            data: e,
            path: i.path,
            parent: i
        });
        return yc(i, s)
    }
    async parseAsync(e, n) {
        const r = await this.safeParseAsync(e, n);
        if (r.success)
            return r.data;
        throw r.error
    }
    async safeParseAsync(e, n) {
        const r = {
            common: {
                issues: [],
                contextualErrorMap: n == null ? void 0 : n.errorMap,
                async: !0
            },
            path: (n == null ? void 0 : n.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: Rn(e)
        }
          , i = this._parse({
            data: e,
            path: r.path,
            parent: r
        })
          , s = await (Ss(i) ? i : Promise.resolve(i));
        return yc(r, s)
    }
    refine(e, n) {
        const r = i=>typeof n == "string" || typeof n > "u" ? {
            message: n
        } : typeof n == "function" ? n(i) : n;
        return this._refinement((i,s)=>{
            const o = e(i)
              , a = ()=>s.addIssue({
                code: L.custom,
                ...r(i)
            });
            return typeof Promise < "u" && o instanceof Promise ? o.then(u=>u ? !0 : (a(),
            !1)) : o ? !0 : (a(),
            !1)
        }
        )
    }
    refinement(e, n) {
        return this._refinement((r,i)=>e(r) ? !0 : (i.addIssue(typeof n == "function" ? n(r, i) : n),
        !1))
    }
    _refinement(e) {
        return new sn({
            schema: this,
            typeName: le.ZodEffects,
            effect: {
                type: "refinement",
                refinement: e
            }
        })
    }
    superRefine(e) {
        return this._refinement(e)
    }
    optional() {
        return gn.create(this, this._def)
    }
    nullable() {
        return nr.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return rn.create(this, this._def)
    }
    promise() {
        return Lr.create(this, this._def)
    }
    or(e) {
        return wi.create([this, e], this._def)
    }
    and(e) {
        return Ei.create(this, e, this._def)
    }
    transform(e) {
        return new sn({
            ...ye(this._def),
            schema: this,
            typeName: le.ZodEffects,
            effect: {
                type: "transform",
                transform: e
            }
        })
    }
    default(e) {
        const n = typeof e == "function" ? e : ()=>e;
        return new Oi({
            ...ye(this._def),
            innerType: this,
            defaultValue: n,
            typeName: le.ZodDefault
        })
    }
    brand() {
        return new Fu({
            typeName: le.ZodBranded,
            type: this,
            ...ye(this._def)
        })
    }
    catch(e) {
        const n = typeof e == "function" ? e : ()=>e;
        return new Os({
            ...ye(this._def),
            innerType: this,
            catchValue: n,
            typeName: le.ZodCatch
        })
    }
    describe(e) {
        const n = this.constructor;
        return new n({
            ...this._def,
            description: e
        })
    }
    pipe(e) {
        return Di.create(this, e)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const kp = /^c[^\s-]{8,}$/i
  , xp = /^[a-z][a-z0-9]*$/
  , Tp = /[0-9A-HJKMNP-TV-Z]{26}/
  , Op = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i
  , Np = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/
  , Ap = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u
  , Rp = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/
  , Ip = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/
  , Pp = t=>t.precision ? t.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`) : t.precision === 0 ? t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : t.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Cp(t, e) {
    return !!((e === "v4" || !e) && Rp.test(t) || (e === "v6" || !e) && Ip.test(t))
}
class Qt extends ge {
    constructor() {
        super(...arguments),
        this._regex = (e,n,r)=>this.refinement(i=>e.test(i), {
            validation: n,
            code: L.invalid_string,
            ...ie.errToObj(r)
        }),
        this.nonempty = e=>this.min(1, ie.errToObj(e)),
        this.trim = ()=>new Qt({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        }),
        this.toLowerCase = ()=>new Qt({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        }),
        this.toUpperCase = ()=>new Qt({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    _parse(e) {
        if (this._def.coerce && (e.data = String(e.data)),
        this._getType(e) !== V.string) {
            const s = this._getOrReturnCtx(e);
            return Z(s, {
                code: L.invalid_type,
                expected: V.string,
                received: s.parsedType
            }),
            fe
        }
        const r = new ht;
        let i;
        for (const s of this._def.checks)
            if (s.kind === "min")
                e.data.length < s.value && (i = this._getOrReturnCtx(e, i),
                Z(i, {
                    code: L.too_small,
                    minimum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "max")
                e.data.length > s.value && (i = this._getOrReturnCtx(e, i),
                Z(i, {
                    code: L.too_big,
                    maximum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "length") {
                const o = e.data.length > s.value
                  , a = e.data.length < s.value;
                (o || a) && (i = this._getOrReturnCtx(e, i),
                o ? Z(i, {
                    code: L.too_big,
                    maximum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: s.message
                }) : a && Z(i, {
                    code: L.too_small,
                    minimum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: s.message
                }),
                r.dirty())
            } else if (s.kind === "email")
                Np.test(e.data) || (i = this._getOrReturnCtx(e, i),
                Z(i, {
                    validation: "email",
                    code: L.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "emoji")
                Ap.test(e.data) || (i = this._getOrReturnCtx(e, i),
                Z(i, {
                    validation: "emoji",
                    code: L.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "uuid")
                Op.test(e.data) || (i = this._getOrReturnCtx(e, i),
                Z(i, {
                    validation: "uuid",
                    code: L.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "cuid")
                kp.test(e.data) || (i = this._getOrReturnCtx(e, i),
                Z(i, {
                    validation: "cuid",
                    code: L.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "cuid2")
                xp.test(e.data) || (i = this._getOrReturnCtx(e, i),
                Z(i, {
                    validation: "cuid2",
                    code: L.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "ulid")
                Tp.test(e.data) || (i = this._getOrReturnCtx(e, i),
                Z(i, {
                    validation: "ulid",
                    code: L.invalid_string,
                    message: s.message
                }),
                r.dirty());
            else if (s.kind === "url")
                try {
                    new URL(e.data)
                } catch {
                    i = this._getOrReturnCtx(e, i),
                    Z(i, {
                        validation: "url",
                        code: L.invalid_string,
                        message: s.message
                    }),
                    r.dirty()
                }
            else
                s.kind === "regex" ? (s.regex.lastIndex = 0,
                s.regex.test(e.data) || (i = this._getOrReturnCtx(e, i),
                Z(i, {
                    validation: "regex",
                    code: L.invalid_string,
                    message: s.message
                }),
                r.dirty())) : s.kind === "trim" ? e.data = e.data.trim() : s.kind === "includes" ? e.data.includes(s.value, s.position) || (i = this._getOrReturnCtx(e, i),
                Z(i, {
                    code: L.invalid_string,
                    validation: {
                        includes: s.value,
                        position: s.position
                    },
                    message: s.message
                }),
                r.dirty()) : s.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : s.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : s.kind === "startsWith" ? e.data.startsWith(s.value) || (i = this._getOrReturnCtx(e, i),
                Z(i, {
                    code: L.invalid_string,
                    validation: {
                        startsWith: s.value
                    },
                    message: s.message
                }),
                r.dirty()) : s.kind === "endsWith" ? e.data.endsWith(s.value) || (i = this._getOrReturnCtx(e, i),
                Z(i, {
                    code: L.invalid_string,
                    validation: {
                        endsWith: s.value
                    },
                    message: s.message
                }),
                r.dirty()) : s.kind === "datetime" ? Pp(s).test(e.data) || (i = this._getOrReturnCtx(e, i),
                Z(i, {
                    code: L.invalid_string,
                    validation: "datetime",
                    message: s.message
                }),
                r.dirty()) : s.kind === "ip" ? Cp(e.data, s.version) || (i = this._getOrReturnCtx(e, i),
                Z(i, {
                    validation: "ip",
                    code: L.invalid_string,
                    message: s.message
                }),
                r.dirty()) : Oe.assertNever(s);
        return {
            status: r.value,
            value: e.data
        }
    }
    _addCheck(e) {
        return new Qt({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    email(e) {
        return this._addCheck({
            kind: "email",
            ...ie.errToObj(e)
        })
    }
    url(e) {
        return this._addCheck({
            kind: "url",
            ...ie.errToObj(e)
        })
    }
    emoji(e) {
        return this._addCheck({
            kind: "emoji",
            ...ie.errToObj(e)
        })
    }
    uuid(e) {
        return this._addCheck({
            kind: "uuid",
            ...ie.errToObj(e)
        })
    }
    cuid(e) {
        return this._addCheck({
            kind: "cuid",
            ...ie.errToObj(e)
        })
    }
    cuid2(e) {
        return this._addCheck({
            kind: "cuid2",
            ...ie.errToObj(e)
        })
    }
    ulid(e) {
        return this._addCheck({
            kind: "ulid",
            ...ie.errToObj(e)
        })
    }
    ip(e) {
        return this._addCheck({
            kind: "ip",
            ...ie.errToObj(e)
        })
    }
    datetime(e) {
        var n;
        return typeof e == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            message: e
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
            offset: (n = e == null ? void 0 : e.offset) !== null && n !== void 0 ? n : !1,
            ...ie.errToObj(e == null ? void 0 : e.message)
        })
    }
    regex(e, n) {
        return this._addCheck({
            kind: "regex",
            regex: e,
            ...ie.errToObj(n)
        })
    }
    includes(e, n) {
        return this._addCheck({
            kind: "includes",
            value: e,
            position: n == null ? void 0 : n.position,
            ...ie.errToObj(n == null ? void 0 : n.message)
        })
    }
    startsWith(e, n) {
        return this._addCheck({
            kind: "startsWith",
            value: e,
            ...ie.errToObj(n)
        })
    }
    endsWith(e, n) {
        return this._addCheck({
            kind: "endsWith",
            value: e,
            ...ie.errToObj(n)
        })
    }
    min(e, n) {
        return this._addCheck({
            kind: "min",
            value: e,
            ...ie.errToObj(n)
        })
    }
    max(e, n) {
        return this._addCheck({
            kind: "max",
            value: e,
            ...ie.errToObj(n)
        })
    }
    length(e, n) {
        return this._addCheck({
            kind: "length",
            value: e,
            ...ie.errToObj(n)
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(e=>e.kind === "datetime")
    }
    get isEmail() {
        return !!this._def.checks.find(e=>e.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(e=>e.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(e=>e.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(e=>e.kind === "uuid")
    }
    get isCUID() {
        return !!this._def.checks.find(e=>e.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(e=>e.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(e=>e.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(e=>e.kind === "ip")
    }
    get minLength() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e
    }
    get maxLength() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e
    }
}
Qt.create = t=>{
    var e;
    return new Qt({
        checks: [],
        typeName: le.ZodString,
        coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
        ...ye(t)
    })
}
;
function jp(t, e) {
    const n = (t.toString().split(".")[1] || "").length
      , r = (e.toString().split(".")[1] || "").length
      , i = n > r ? n : r
      , s = parseInt(t.toFixed(i).replace(".", ""))
      , o = parseInt(e.toFixed(i).replace(".", ""));
    return s % o / Math.pow(10, i)
}
class Dn extends ge {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte,
        this.step = this.multipleOf
    }
    _parse(e) {
        if (this._def.coerce && (e.data = Number(e.data)),
        this._getType(e) !== V.number) {
            const s = this._getOrReturnCtx(e);
            return Z(s, {
                code: L.invalid_type,
                expected: V.number,
                received: s.parsedType
            }),
            fe
        }
        let r;
        const i = new ht;
        for (const s of this._def.checks)
            s.kind === "int" ? Oe.isInteger(e.data) || (r = this._getOrReturnCtx(e, r),
            Z(r, {
                code: L.invalid_type,
                expected: "integer",
                received: "float",
                message: s.message
            }),
            i.dirty()) : s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r),
            Z(r, {
                code: L.too_small,
                minimum: s.value,
                type: "number",
                inclusive: s.inclusive,
                exact: !1,
                message: s.message
            }),
            i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r),
            Z(r, {
                code: L.too_big,
                maximum: s.value,
                type: "number",
                inclusive: s.inclusive,
                exact: !1,
                message: s.message
            }),
            i.dirty()) : s.kind === "multipleOf" ? jp(e.data, s.value) !== 0 && (r = this._getOrReturnCtx(e, r),
            Z(r, {
                code: L.not_multiple_of,
                multipleOf: s.value,
                message: s.message
            }),
            i.dirty()) : s.kind === "finite" ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r),
            Z(r, {
                code: L.not_finite,
                message: s.message
            }),
            i.dirty()) : Oe.assertNever(s);
        return {
            status: i.value,
            value: e.data
        }
    }
    gte(e, n) {
        return this.setLimit("min", e, !0, ie.toString(n))
    }
    gt(e, n) {
        return this.setLimit("min", e, !1, ie.toString(n))
    }
    lte(e, n) {
        return this.setLimit("max", e, !0, ie.toString(n))
    }
    lt(e, n) {
        return this.setLimit("max", e, !1, ie.toString(n))
    }
    setLimit(e, n, r, i) {
        return new Dn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: n,
                inclusive: r,
                message: ie.toString(i)
            }]
        })
    }
    _addCheck(e) {
        return new Dn({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    int(e) {
        return this._addCheck({
            kind: "int",
            message: ie.toString(e)
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: ie.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: ie.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: ie.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: ie.toString(e)
        })
    }
    multipleOf(e, n) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: ie.toString(n)
        })
    }
    finite(e) {
        return this._addCheck({
            kind: "finite",
            message: ie.toString(e)
        })
    }
    safe(e) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: ie.toString(e)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: ie.toString(e)
        })
    }
    get minValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e
    }
    get isInt() {
        return !!this._def.checks.find(e=>e.kind === "int" || e.kind === "multipleOf" && Oe.isInteger(e.value))
    }
    get isFinite() {
        let e = null
          , n = null;
        for (const r of this._def.checks) {
            if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
                return !0;
            r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (e === null || r.value < e) && (e = r.value)
        }
        return Number.isFinite(n) && Number.isFinite(e)
    }
}
Dn.create = t=>new Dn({
    checks: [],
    typeName: le.ZodNumber,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...ye(t)
});
class Bn extends ge {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte
    }
    _parse(e) {
        if (this._def.coerce && (e.data = BigInt(e.data)),
        this._getType(e) !== V.bigint) {
            const s = this._getOrReturnCtx(e);
            return Z(s, {
                code: L.invalid_type,
                expected: V.bigint,
                received: s.parsedType
            }),
            fe
        }
        let r;
        const i = new ht;
        for (const s of this._def.checks)
            s.kind === "min" ? (s.inclusive ? e.data < s.value : e.data <= s.value) && (r = this._getOrReturnCtx(e, r),
            Z(r, {
                code: L.too_small,
                type: "bigint",
                minimum: s.value,
                inclusive: s.inclusive,
                message: s.message
            }),
            i.dirty()) : s.kind === "max" ? (s.inclusive ? e.data > s.value : e.data >= s.value) && (r = this._getOrReturnCtx(e, r),
            Z(r, {
                code: L.too_big,
                type: "bigint",
                maximum: s.value,
                inclusive: s.inclusive,
                message: s.message
            }),
            i.dirty()) : s.kind === "multipleOf" ? e.data % s.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r),
            Z(r, {
                code: L.not_multiple_of,
                multipleOf: s.value,
                message: s.message
            }),
            i.dirty()) : Oe.assertNever(s);
        return {
            status: i.value,
            value: e.data
        }
    }
    gte(e, n) {
        return this.setLimit("min", e, !0, ie.toString(n))
    }
    gt(e, n) {
        return this.setLimit("min", e, !1, ie.toString(n))
    }
    lte(e, n) {
        return this.setLimit("max", e, !0, ie.toString(n))
    }
    lt(e, n) {
        return this.setLimit("max", e, !1, ie.toString(n))
    }
    setLimit(e, n, r, i) {
        return new Bn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: e,
                value: n,
                inclusive: r,
                message: ie.toString(i)
            }]
        })
    }
    _addCheck(e) {
        return new Bn({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    positive(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: ie.toString(e)
        })
    }
    negative(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: ie.toString(e)
        })
    }
    nonpositive(e) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: ie.toString(e)
        })
    }
    nonnegative(e) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: ie.toString(e)
        })
    }
    multipleOf(e, n) {
        return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: ie.toString(n)
        })
    }
    get minValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e
    }
    get maxValue() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e
    }
}
Bn.create = t=>{
    var e;
    return new Bn({
        checks: [],
        typeName: le.ZodBigInt,
        coerce: (e = t == null ? void 0 : t.coerce) !== null && e !== void 0 ? e : !1,
        ...ye(t)
    })
}
;
class _i extends ge {
    _parse(e) {
        if (this._def.coerce && (e.data = !!e.data),
        this._getType(e) !== V.boolean) {
            const r = this._getOrReturnCtx(e);
            return Z(r, {
                code: L.invalid_type,
                expected: V.boolean,
                received: r.parsedType
            }),
            fe
        }
        return wt(e.data)
    }
}
_i.create = t=>new _i({
    typeName: le.ZodBoolean,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...ye(t)
});
class er extends ge {
    _parse(e) {
        if (this._def.coerce && (e.data = new Date(e.data)),
        this._getType(e) !== V.date) {
            const s = this._getOrReturnCtx(e);
            return Z(s, {
                code: L.invalid_type,
                expected: V.date,
                received: s.parsedType
            }),
            fe
        }
        if (isNaN(e.data.getTime())) {
            const s = this._getOrReturnCtx(e);
            return Z(s, {
                code: L.invalid_date
            }),
            fe
        }
        const r = new ht;
        let i;
        for (const s of this._def.checks)
            s.kind === "min" ? e.data.getTime() < s.value && (i = this._getOrReturnCtx(e, i),
            Z(i, {
                code: L.too_small,
                message: s.message,
                inclusive: !0,
                exact: !1,
                minimum: s.value,
                type: "date"
            }),
            r.dirty()) : s.kind === "max" ? e.data.getTime() > s.value && (i = this._getOrReturnCtx(e, i),
            Z(i, {
                code: L.too_big,
                message: s.message,
                inclusive: !0,
                exact: !1,
                maximum: s.value,
                type: "date"
            }),
            r.dirty()) : Oe.assertNever(s);
        return {
            status: r.value,
            value: new Date(e.data.getTime())
        }
    }
    _addCheck(e) {
        return new er({
            ...this._def,
            checks: [...this._def.checks, e]
        })
    }
    min(e, n) {
        return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: ie.toString(n)
        })
    }
    max(e, n) {
        return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: ie.toString(n)
        })
    }
    get minDate() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "min" && (e === null || n.value > e) && (e = n.value);
        return e != null ? new Date(e) : null
    }
    get maxDate() {
        let e = null;
        for (const n of this._def.checks)
            n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        return e != null ? new Date(e) : null
    }
}
er.create = t=>new er({
    checks: [],
    coerce: (t == null ? void 0 : t.coerce) || !1,
    typeName: le.ZodDate,
    ...ye(t)
});
class ks extends ge {
    _parse(e) {
        if (this._getType(e) !== V.symbol) {
            const r = this._getOrReturnCtx(e);
            return Z(r, {
                code: L.invalid_type,
                expected: V.symbol,
                received: r.parsedType
            }),
            fe
        }
        return wt(e.data)
    }
}
ks.create = t=>new ks({
    typeName: le.ZodSymbol,
    ...ye(t)
});
class vi extends ge {
    _parse(e) {
        if (this._getType(e) !== V.undefined) {
            const r = this._getOrReturnCtx(e);
            return Z(r, {
                code: L.invalid_type,
                expected: V.undefined,
                received: r.parsedType
            }),
            fe
        }
        return wt(e.data)
    }
}
vi.create = t=>new vi({
    typeName: le.ZodUndefined,
    ...ye(t)
});
class bi extends ge {
    _parse(e) {
        if (this._getType(e) !== V.null) {
            const r = this._getOrReturnCtx(e);
            return Z(r, {
                code: L.invalid_type,
                expected: V.null,
                received: r.parsedType
            }),
            fe
        }
        return wt(e.data)
    }
}
bi.create = t=>new bi({
    typeName: le.ZodNull,
    ...ye(t)
});
class $r extends ge {
    constructor() {
        super(...arguments),
        this._any = !0
    }
    _parse(e) {
        return wt(e.data)
    }
}
$r.create = t=>new $r({
    typeName: le.ZodAny,
    ...ye(t)
});
class zn extends ge {
    constructor() {
        super(...arguments),
        this._unknown = !0
    }
    _parse(e) {
        return wt(e.data)
    }
}
zn.create = t=>new zn({
    typeName: le.ZodUnknown,
    ...ye(t)
});
class wn extends ge {
    _parse(e) {
        const n = this._getOrReturnCtx(e);
        return Z(n, {
            code: L.invalid_type,
            expected: V.never,
            received: n.parsedType
        }),
        fe
    }
}
wn.create = t=>new wn({
    typeName: le.ZodNever,
    ...ye(t)
});
class xs extends ge {
    _parse(e) {
        if (this._getType(e) !== V.undefined) {
            const r = this._getOrReturnCtx(e);
            return Z(r, {
                code: L.invalid_type,
                expected: V.void,
                received: r.parsedType
            }),
            fe
        }
        return wt(e.data)
    }
}
xs.create = t=>new xs({
    typeName: le.ZodVoid,
    ...ye(t)
});
class rn extends ge {
    _parse(e) {
        const {ctx: n, status: r} = this._processInputParams(e)
          , i = this._def;
        if (n.parsedType !== V.array)
            return Z(n, {
                code: L.invalid_type,
                expected: V.array,
                received: n.parsedType
            }),
            fe;
        if (i.exactLength !== null) {
            const o = n.data.length > i.exactLength.value
              , a = n.data.length < i.exactLength.value;
            (o || a) && (Z(n, {
                code: o ? L.too_big : L.too_small,
                minimum: a ? i.exactLength.value : void 0,
                maximum: o ? i.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: i.exactLength.message
            }),
            r.dirty())
        }
        if (i.minLength !== null && n.data.length < i.minLength.value && (Z(n, {
            code: L.too_small,
            minimum: i.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: i.minLength.message
        }),
        r.dirty()),
        i.maxLength !== null && n.data.length > i.maxLength.value && (Z(n, {
            code: L.too_big,
            maximum: i.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: i.maxLength.message
        }),
        r.dirty()),
        n.common.async)
            return Promise.all([...n.data].map((o,a)=>i.type._parseAsync(new an(n,o,n.path,a)))).then(o=>ht.mergeArray(r, o));
        const s = [...n.data].map((o,a)=>i.type._parseSync(new an(n,o,n.path,a)));
        return ht.mergeArray(r, s)
    }
    get element() {
        return this._def.type
    }
    min(e, n) {
        return new rn({
            ...this._def,
            minLength: {
                value: e,
                message: ie.toString(n)
            }
        })
    }
    max(e, n) {
        return new rn({
            ...this._def,
            maxLength: {
                value: e,
                message: ie.toString(n)
            }
        })
    }
    length(e, n) {
        return new rn({
            ...this._def,
            exactLength: {
                value: e,
                message: ie.toString(n)
            }
        })
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
rn.create = (t,e)=>new rn({
    type: t,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: le.ZodArray,
    ...ye(e)
});
function yr(t) {
    if (t instanceof He) {
        const e = {};
        for (const n in t.shape) {
            const r = t.shape[n];
            e[n] = gn.create(yr(r))
        }
        return new He({
            ...t._def,
            shape: ()=>e
        })
    } else
        return t instanceof rn ? new rn({
            ...t._def,
            type: yr(t.element)
        }) : t instanceof gn ? gn.create(yr(t.unwrap())) : t instanceof nr ? nr.create(yr(t.unwrap())) : t instanceof cn ? cn.create(t.items.map(e=>yr(e))) : t
}
class He extends ge {
    constructor() {
        super(...arguments),
        this._cached = null,
        this.nonstrict = this.passthrough,
        this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const e = this._def.shape()
          , n = Oe.objectKeys(e);
        return this._cached = {
            shape: e,
            keys: n
        }
    }
    _parse(e) {
        if (this._getType(e) !== V.object) {
            const c = this._getOrReturnCtx(e);
            return Z(c, {
                code: L.invalid_type,
                expected: V.object,
                received: c.parsedType
            }),
            fe
        }
        const {status: r, ctx: i} = this._processInputParams(e)
          , {shape: s, keys: o} = this._getCached()
          , a = [];
        if (!(this._def.catchall instanceof wn && this._def.unknownKeys === "strip"))
            for (const c in i.data)
                o.includes(c) || a.push(c);
        const u = [];
        for (const c of o) {
            const l = s[c]
              , d = i.data[c];
            u.push({
                key: {
                    status: "valid",
                    value: c
                },
                value: l._parse(new an(i,d,i.path,c)),
                alwaysSet: c in i.data
            })
        }
        if (this._def.catchall instanceof wn) {
            const c = this._def.unknownKeys;
            if (c === "passthrough")
                for (const l of a)
                    u.push({
                        key: {
                            status: "valid",
                            value: l
                        },
                        value: {
                            status: "valid",
                            value: i.data[l]
                        }
                    });
            else if (c === "strict")
                a.length > 0 && (Z(i, {
                    code: L.unrecognized_keys,
                    keys: a
                }),
                r.dirty());
            else if (c !== "strip")
                throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const c = this._def.catchall;
            for (const l of a) {
                const d = i.data[l];
                u.push({
                    key: {
                        status: "valid",
                        value: l
                    },
                    value: c._parse(new an(i,d,i.path,l)),
                    alwaysSet: l in i.data
                })
            }
        }
        return i.common.async ? Promise.resolve().then(async()=>{
            const c = [];
            for (const l of u) {
                const d = await l.key;
                c.push({
                    key: d,
                    value: await l.value,
                    alwaysSet: l.alwaysSet
                })
            }
            return c
        }
        ).then(c=>ht.mergeObjectSync(r, c)) : ht.mergeObjectSync(r, u)
    }
    get shape() {
        return this._def.shape()
    }
    strict(e) {
        return ie.errToObj,
        new He({
            ...this._def,
            unknownKeys: "strict",
            ...e !== void 0 ? {
                errorMap: (n,r)=>{
                    var i, s, o, a;
                    const u = (o = (s = (i = this._def).errorMap) === null || s === void 0 ? void 0 : s.call(i, n, r).message) !== null && o !== void 0 ? o : r.defaultError;
                    return n.code === "unrecognized_keys" ? {
                        message: (a = ie.errToObj(e).message) !== null && a !== void 0 ? a : u
                    } : {
                        message: u
                    }
                }
            } : {}
        })
    }
    strip() {
        return new He({
            ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new He({
            ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(e) {
        return new He({
            ...this._def,
            shape: ()=>({
                ...this._def.shape(),
                ...e
            })
        })
    }
    merge(e) {
        return new He({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: ()=>({
                ...this._def.shape(),
                ...e._def.shape()
            }),
            typeName: le.ZodObject
        })
    }
    setKey(e, n) {
        return this.augment({
            [e]: n
        })
    }
    catchall(e) {
        return new He({
            ...this._def,
            catchall: e
        })
    }
    pick(e) {
        const n = {};
        return Oe.objectKeys(e).forEach(r=>{
            e[r] && this.shape[r] && (n[r] = this.shape[r])
        }
        ),
        new He({
            ...this._def,
            shape: ()=>n
        })
    }
    omit(e) {
        const n = {};
        return Oe.objectKeys(this.shape).forEach(r=>{
            e[r] || (n[r] = this.shape[r])
        }
        ),
        new He({
            ...this._def,
            shape: ()=>n
        })
    }
    deepPartial() {
        return yr(this)
    }
    partial(e) {
        const n = {};
        return Oe.objectKeys(this.shape).forEach(r=>{
            const i = this.shape[r];
            e && !e[r] ? n[r] = i : n[r] = i.optional()
        }
        ),
        new He({
            ...this._def,
            shape: ()=>n
        })
    }
    required(e) {
        const n = {};
        return Oe.objectKeys(this.shape).forEach(r=>{
            if (e && !e[r])
                n[r] = this.shape[r];
            else {
                let s = this.shape[r];
                for (; s instanceof gn; )
                    s = s._def.innerType;
                n[r] = s
            }
        }
        ),
        new He({
            ...this._def,
            shape: ()=>n
        })
    }
    keyof() {
        return Uu(Oe.objectKeys(this.shape))
    }
}
He.create = (t,e)=>new He({
    shape: ()=>t,
    unknownKeys: "strip",
    catchall: wn.create(),
    typeName: le.ZodObject,
    ...ye(e)
});
He.strictCreate = (t,e)=>new He({
    shape: ()=>t,
    unknownKeys: "strict",
    catchall: wn.create(),
    typeName: le.ZodObject,
    ...ye(e)
});
He.lazycreate = (t,e)=>new He({
    shape: t,
    unknownKeys: "strip",
    catchall: wn.create(),
    typeName: le.ZodObject,
    ...ye(e)
});
class wi extends ge {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e)
          , r = this._def.options;
        function i(s) {
            for (const a of s)
                if (a.result.status === "valid")
                    return a.result;
            for (const a of s)
                if (a.result.status === "dirty")
                    return n.common.issues.push(...a.ctx.common.issues),
                    a.result;
            const o = s.map(a=>new nn(a.ctx.common.issues));
            return Z(n, {
                code: L.invalid_union,
                unionErrors: o
            }),
            fe
        }
        if (n.common.async)
            return Promise.all(r.map(async s=>{
                const o = {
                    ...n,
                    common: {
                        ...n.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await s._parseAsync({
                        data: n.data,
                        path: n.path,
                        parent: o
                    }),
                    ctx: o
                }
            }
            )).then(i);
        {
            let s;
            const o = [];
            for (const u of r) {
                const c = {
                    ...n,
                    common: {
                        ...n.common,
                        issues: []
                    },
                    parent: null
                }
                  , l = u._parseSync({
                    data: n.data,
                    path: n.path,
                    parent: c
                });
                if (l.status === "valid")
                    return l;
                l.status === "dirty" && !s && (s = {
                    result: l,
                    ctx: c
                }),
                c.common.issues.length && o.push(c.common.issues)
            }
            if (s)
                return n.common.issues.push(...s.ctx.common.issues),
                s.result;
            const a = o.map(u=>new nn(u));
            return Z(n, {
                code: L.invalid_union,
                unionErrors: a
            }),
            fe
        }
    }
    get options() {
        return this._def.options
    }
}
wi.create = (t,e)=>new wi({
    options: t,
    typeName: le.ZodUnion,
    ...ye(e)
});
const is = t=>t instanceof ki ? is(t.schema) : t instanceof sn ? is(t.innerType()) : t instanceof xi ? [t.value] : t instanceof $n ? t.options : t instanceof Ti ? Object.keys(t.enum) : t instanceof Oi ? is(t._def.innerType) : t instanceof vi ? [void 0] : t instanceof bi ? [null] : null;
class Zs extends ge {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        if (n.parsedType !== V.object)
            return Z(n, {
                code: L.invalid_type,
                expected: V.object,
                received: n.parsedType
            }),
            fe;
        const r = this.discriminator
          , i = n.data[r]
          , s = this.optionsMap.get(i);
        return s ? n.common.async ? s._parseAsync({
            data: n.data,
            path: n.path,
            parent: n
        }) : s._parseSync({
            data: n.data,
            path: n.path,
            parent: n
        }) : (Z(n, {
            code: L.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [r]
        }),
        fe)
    }
    get discriminator() {
        return this._def.discriminator
    }
    get options() {
        return this._def.options
    }
    get optionsMap() {
        return this._def.optionsMap
    }
    static create(e, n, r) {
        const i = new Map;
        for (const s of n) {
            const o = is(s.shape[e]);
            if (!o)
                throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
            for (const a of o) {
                if (i.has(a))
                    throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
                i.set(a, s)
            }
        }
        return new Zs({
            typeName: le.ZodDiscriminatedUnion,
            discriminator: e,
            options: n,
            optionsMap: i,
            ...ye(r)
        })
    }
}
function Lo(t, e) {
    const n = Rn(t)
      , r = Rn(e);
    if (t === e)
        return {
            valid: !0,
            data: t
        };
    if (n === V.object && r === V.object) {
        const i = Oe.objectKeys(e)
          , s = Oe.objectKeys(t).filter(a=>i.indexOf(a) !== -1)
          , o = {
            ...t,
            ...e
        };
        for (const a of s) {
            const u = Lo(t[a], e[a]);
            if (!u.valid)
                return {
                    valid: !1
                };
            o[a] = u.data
        }
        return {
            valid: !0,
            data: o
        }
    } else if (n === V.array && r === V.array) {
        if (t.length !== e.length)
            return {
                valid: !1
            };
        const i = [];
        for (let s = 0; s < t.length; s++) {
            const o = t[s]
              , a = e[s]
              , u = Lo(o, a);
            if (!u.valid)
                return {
                    valid: !1
                };
            i.push(u.data)
        }
        return {
            valid: !0,
            data: i
        }
    } else
        return n === V.date && r === V.date && +t == +e ? {
            valid: !0,
            data: t
        } : {
            valid: !1
        }
}
class Ei extends ge {
    _parse(e) {
        const {status: n, ctx: r} = this._processInputParams(e)
          , i = (s,o)=>{
            if (Bo(s) || Bo(o))
                return fe;
            const a = Lo(s.value, o.value);
            return a.valid ? (($o(s) || $o(o)) && n.dirty(),
            {
                status: n.value,
                value: a.data
            }) : (Z(r, {
                code: L.invalid_intersection_types
            }),
            fe)
        }
        ;
        return r.common.async ? Promise.all([this._def.left._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r
        })]).then(([s,o])=>i(s, o)) : i(this._def.left._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }), this._def.right._parseSync({
            data: r.data,
            path: r.path,
            parent: r
        }))
    }
}
Ei.create = (t,e,n)=>new Ei({
    left: t,
    right: e,
    typeName: le.ZodIntersection,
    ...ye(n)
});
class cn extends ge {
    _parse(e) {
        const {status: n, ctx: r} = this._processInputParams(e);
        if (r.parsedType !== V.array)
            return Z(r, {
                code: L.invalid_type,
                expected: V.array,
                received: r.parsedType
            }),
            fe;
        if (r.data.length < this._def.items.length)
            return Z(r, {
                code: L.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }),
            fe;
        !this._def.rest && r.data.length > this._def.items.length && (Z(r, {
            code: L.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }),
        n.dirty());
        const s = [...r.data].map((o,a)=>{
            const u = this._def.items[a] || this._def.rest;
            return u ? u._parse(new an(r,o,r.path,a)) : null
        }
        ).filter(o=>!!o);
        return r.common.async ? Promise.all(s).then(o=>ht.mergeArray(n, o)) : ht.mergeArray(n, s)
    }
    get items() {
        return this._def.items
    }
    rest(e) {
        return new cn({
            ...this._def,
            rest: e
        })
    }
}
cn.create = (t,e)=>{
    if (!Array.isArray(t))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new cn({
        items: t,
        typeName: le.ZodTuple,
        rest: null,
        ...ye(e)
    })
}
;
class Si extends ge {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(e) {
        const {status: n, ctx: r} = this._processInputParams(e);
        if (r.parsedType !== V.object)
            return Z(r, {
                code: L.invalid_type,
                expected: V.object,
                received: r.parsedType
            }),
            fe;
        const i = []
          , s = this._def.keyType
          , o = this._def.valueType;
        for (const a in r.data)
            i.push({
                key: s._parse(new an(r,a,r.path,a)),
                value: o._parse(new an(r,r.data[a],r.path,a))
            });
        return r.common.async ? ht.mergeObjectAsync(n, i) : ht.mergeObjectSync(n, i)
    }
    get element() {
        return this._def.valueType
    }
    static create(e, n, r) {
        return n instanceof ge ? new Si({
            keyType: e,
            valueType: n,
            typeName: le.ZodRecord,
            ...ye(r)
        }) : new Si({
            keyType: Qt.create(),
            valueType: e,
            typeName: le.ZodRecord,
            ...ye(n)
        })
    }
}
class Ts extends ge {
    _parse(e) {
        const {status: n, ctx: r} = this._processInputParams(e);
        if (r.parsedType !== V.map)
            return Z(r, {
                code: L.invalid_type,
                expected: V.map,
                received: r.parsedType
            }),
            fe;
        const i = this._def.keyType
          , s = this._def.valueType
          , o = [...r.data.entries()].map(([a,u],c)=>({
            key: i._parse(new an(r,a,r.path,[c, "key"])),
            value: s._parse(new an(r,u,r.path,[c, "value"]))
        }));
        if (r.common.async) {
            const a = new Map;
            return Promise.resolve().then(async()=>{
                for (const u of o) {
                    const c = await u.key
                      , l = await u.value;
                    if (c.status === "aborted" || l.status === "aborted")
                        return fe;
                    (c.status === "dirty" || l.status === "dirty") && n.dirty(),
                    a.set(c.value, l.value)
                }
                return {
                    status: n.value,
                    value: a
                }
            }
            )
        } else {
            const a = new Map;
            for (const u of o) {
                const c = u.key
                  , l = u.value;
                if (c.status === "aborted" || l.status === "aborted")
                    return fe;
                (c.status === "dirty" || l.status === "dirty") && n.dirty(),
                a.set(c.value, l.value)
            }
            return {
                status: n.value,
                value: a
            }
        }
    }
}
Ts.create = (t,e,n)=>new Ts({
    valueType: e,
    keyType: t,
    typeName: le.ZodMap,
    ...ye(n)
});
class tr extends ge {
    _parse(e) {
        const {status: n, ctx: r} = this._processInputParams(e);
        if (r.parsedType !== V.set)
            return Z(r, {
                code: L.invalid_type,
                expected: V.set,
                received: r.parsedType
            }),
            fe;
        const i = this._def;
        i.minSize !== null && r.data.size < i.minSize.value && (Z(r, {
            code: L.too_small,
            minimum: i.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: i.minSize.message
        }),
        n.dirty()),
        i.maxSize !== null && r.data.size > i.maxSize.value && (Z(r, {
            code: L.too_big,
            maximum: i.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: i.maxSize.message
        }),
        n.dirty());
        const s = this._def.valueType;
        function o(u) {
            const c = new Set;
            for (const l of u) {
                if (l.status === "aborted")
                    return fe;
                l.status === "dirty" && n.dirty(),
                c.add(l.value)
            }
            return {
                status: n.value,
                value: c
            }
        }
        const a = [...r.data.values()].map((u,c)=>s._parse(new an(r,u,r.path,c)));
        return r.common.async ? Promise.all(a).then(u=>o(u)) : o(a)
    }
    min(e, n) {
        return new tr({
            ...this._def,
            minSize: {
                value: e,
                message: ie.toString(n)
            }
        })
    }
    max(e, n) {
        return new tr({
            ...this._def,
            maxSize: {
                value: e,
                message: ie.toString(n)
            }
        })
    }
    size(e, n) {
        return this.min(e, n).max(e, n)
    }
    nonempty(e) {
        return this.min(1, e)
    }
}
tr.create = (t,e)=>new tr({
    valueType: t,
    minSize: null,
    maxSize: null,
    typeName: le.ZodSet,
    ...ye(e)
});
class Rr extends ge {
    constructor() {
        super(...arguments),
        this.validate = this.implement
    }
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        if (n.parsedType !== V.function)
            return Z(n, {
                code: L.invalid_type,
                expected: V.function,
                received: n.parsedType
            }),
            fe;
        function r(a, u) {
            return ws({
                data: a,
                path: n.path,
                errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, bs(), gi].filter(c=>!!c),
                issueData: {
                    code: L.invalid_arguments,
                    argumentsError: u
                }
            })
        }
        function i(a, u) {
            return ws({
                data: a,
                path: n.path,
                errorMaps: [n.common.contextualErrorMap, n.schemaErrorMap, bs(), gi].filter(c=>!!c),
                issueData: {
                    code: L.invalid_return_type,
                    returnTypeError: u
                }
            })
        }
        const s = {
            errorMap: n.common.contextualErrorMap
        }
          , o = n.data;
        return this._def.returns instanceof Lr ? wt(async(...a)=>{
            const u = new nn([])
              , c = await this._def.args.parseAsync(a, s).catch(h=>{
                throw u.addIssue(r(a, h)),
                u
            }
            )
              , l = await o(...c);
            return await this._def.returns._def.type.parseAsync(l, s).catch(h=>{
                throw u.addIssue(i(l, h)),
                u
            }
            )
        }
        ) : wt((...a)=>{
            const u = this._def.args.safeParse(a, s);
            if (!u.success)
                throw new nn([r(a, u.error)]);
            const c = o(...u.data)
              , l = this._def.returns.safeParse(c, s);
            if (!l.success)
                throw new nn([i(c, l.error)]);
            return l.data
        }
        )
    }
    parameters() {
        return this._def.args
    }
    returnType() {
        return this._def.returns
    }
    args(...e) {
        return new Rr({
            ...this._def,
            args: cn.create(e).rest(zn.create())
        })
    }
    returns(e) {
        return new Rr({
            ...this._def,
            returns: e
        })
    }
    implement(e) {
        return this.parse(e)
    }
    strictImplement(e) {
        return this.parse(e)
    }
    static create(e, n, r) {
        return new Rr({
            args: e || cn.create([]).rest(zn.create()),
            returns: n || zn.create(),
            typeName: le.ZodFunction,
            ...ye(r)
        })
    }
}
class ki extends ge {
    get schema() {
        return this._def.getter()
    }
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        return this._def.getter()._parse({
            data: n.data,
            path: n.path,
            parent: n
        })
    }
}
ki.create = (t,e)=>new ki({
    getter: t,
    typeName: le.ZodLazy,
    ...ye(e)
});
class xi extends ge {
    _parse(e) {
        if (e.data !== this._def.value) {
            const n = this._getOrReturnCtx(e);
            return Z(n, {
                received: n.data,
                code: L.invalid_literal,
                expected: this._def.value
            }),
            fe
        }
        return {
            status: "valid",
            value: e.data
        }
    }
    get value() {
        return this._def.value
    }
}
xi.create = (t,e)=>new xi({
    value: t,
    typeName: le.ZodLiteral,
    ...ye(e)
});
function Uu(t, e) {
    return new $n({
        values: t,
        typeName: le.ZodEnum,
        ...ye(e)
    })
}
class $n extends ge {
    _parse(e) {
        if (typeof e.data != "string") {
            const n = this._getOrReturnCtx(e)
              , r = this._def.values;
            return Z(n, {
                expected: Oe.joinValues(r),
                received: n.parsedType,
                code: L.invalid_type
            }),
            fe
        }
        if (this._def.values.indexOf(e.data) === -1) {
            const n = this._getOrReturnCtx(e)
              , r = this._def.values;
            return Z(n, {
                received: n.data,
                code: L.invalid_enum_value,
                options: r
            }),
            fe
        }
        return wt(e.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const e = {};
        for (const n of this._def.values)
            e[n] = n;
        return e
    }
    get Values() {
        const e = {};
        for (const n of this._def.values)
            e[n] = n;
        return e
    }
    get Enum() {
        const e = {};
        for (const n of this._def.values)
            e[n] = n;
        return e
    }
    extract(e) {
        return $n.create(e)
    }
    exclude(e) {
        return $n.create(this.options.filter(n=>!e.includes(n)))
    }
}
$n.create = Uu;
class Ti extends ge {
    _parse(e) {
        const n = Oe.getValidEnumValues(this._def.values)
          , r = this._getOrReturnCtx(e);
        if (r.parsedType !== V.string && r.parsedType !== V.number) {
            const i = Oe.objectValues(n);
            return Z(r, {
                expected: Oe.joinValues(i),
                received: r.parsedType,
                code: L.invalid_type
            }),
            fe
        }
        if (n.indexOf(e.data) === -1) {
            const i = Oe.objectValues(n);
            return Z(r, {
                received: r.data,
                code: L.invalid_enum_value,
                options: i
            }),
            fe
        }
        return wt(e.data)
    }
    get enum() {
        return this._def.values
    }
}
Ti.create = (t,e)=>new Ti({
    values: t,
    typeName: le.ZodNativeEnum,
    ...ye(e)
});
class Lr extends ge {
    unwrap() {
        return this._def.type
    }
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        if (n.parsedType !== V.promise && n.common.async === !1)
            return Z(n, {
                code: L.invalid_type,
                expected: V.promise,
                received: n.parsedType
            }),
            fe;
        const r = n.parsedType === V.promise ? n.data : Promise.resolve(n.data);
        return wt(r.then(i=>this._def.type.parseAsync(i, {
            path: n.path,
            errorMap: n.common.contextualErrorMap
        })))
    }
}
Lr.create = (t,e)=>new Lr({
    type: t,
    typeName: le.ZodPromise,
    ...ye(e)
});
class sn extends ge {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === le.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(e) {
        const {status: n, ctx: r} = this._processInputParams(e)
          , i = this._def.effect || null;
        if (i.type === "preprocess") {
            const o = i.transform(r.data);
            return r.common.async ? Promise.resolve(o).then(a=>this._def.schema._parseAsync({
                data: a,
                path: r.path,
                parent: r
            })) : this._def.schema._parseSync({
                data: o,
                path: r.path,
                parent: r
            })
        }
        const s = {
            addIssue: o=>{
                Z(r, o),
                o.fatal ? n.abort() : n.dirty()
            }
            ,
            get path() {
                return r.path
            }
        };
        if (s.addIssue = s.addIssue.bind(s),
        i.type === "refinement") {
            const o = a=>{
                const u = i.refinement(a, s);
                if (r.common.async)
                    return Promise.resolve(u);
                if (u instanceof Promise)
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return a
            }
            ;
            if (r.common.async === !1) {
                const a = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return a.status === "aborted" ? fe : (a.status === "dirty" && n.dirty(),
                o(a.value),
                {
                    status: n.value,
                    value: a.value
                })
            } else
                return this._def.schema._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                }).then(a=>a.status === "aborted" ? fe : (a.status === "dirty" && n.dirty(),
                o(a.value).then(()=>({
                    status: n.value,
                    value: a.value
                }))))
        }
        if (i.type === "transform")
            if (r.common.async === !1) {
                const o = this._def.schema._parseSync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                if (!Es(o))
                    return o;
                const a = i.transform(o.value, s);
                if (a instanceof Promise)
                    throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: n.value,
                    value: a
                }
            } else
                return this._def.schema._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                }).then(o=>Es(o) ? Promise.resolve(i.transform(o.value, s)).then(a=>({
                    status: n.value,
                    value: a
                })) : o);
        Oe.assertNever(i)
    }
}
sn.create = (t,e,n)=>new sn({
    schema: t,
    typeName: le.ZodEffects,
    effect: e,
    ...ye(n)
});
sn.createWithPreprocess = (t,e,n)=>new sn({
    schema: e,
    effect: {
        type: "preprocess",
        transform: t
    },
    typeName: le.ZodEffects,
    ...ye(n)
});
class gn extends ge {
    _parse(e) {
        return this._getType(e) === V.undefined ? wt(void 0) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
gn.create = (t,e)=>new gn({
    innerType: t,
    typeName: le.ZodOptional,
    ...ye(e)
});
class nr extends ge {
    _parse(e) {
        return this._getType(e) === V.null ? wt(null) : this._def.innerType._parse(e)
    }
    unwrap() {
        return this._def.innerType
    }
}
nr.create = (t,e)=>new nr({
    innerType: t,
    typeName: le.ZodNullable,
    ...ye(e)
});
class Oi extends ge {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e);
        let r = n.data;
        return n.parsedType === V.undefined && (r = this._def.defaultValue()),
        this._def.innerType._parse({
            data: r,
            path: n.path,
            parent: n
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
Oi.create = (t,e)=>new Oi({
    innerType: t,
    typeName: le.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : ()=>e.default,
    ...ye(e)
});
class Os extends ge {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e)
          , r = {
            ...n,
            common: {
                ...n.common,
                issues: []
            }
        }
          , i = this._def.innerType._parse({
            data: r.data,
            path: r.path,
            parent: {
                ...r
            }
        });
        return Ss(i) ? i.then(s=>({
            status: "valid",
            value: s.status === "valid" ? s.value : this._def.catchValue({
                get error() {
                    return new nn(r.common.issues)
                },
                input: r.data
            })
        })) : {
            status: "valid",
            value: i.status === "valid" ? i.value : this._def.catchValue({
                get error() {
                    return new nn(r.common.issues)
                },
                input: r.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
Os.create = (t,e)=>new Os({
    innerType: t,
    typeName: le.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : ()=>e.catch,
    ...ye(e)
});
class Ns extends ge {
    _parse(e) {
        if (this._getType(e) !== V.nan) {
            const r = this._getOrReturnCtx(e);
            return Z(r, {
                code: L.invalid_type,
                expected: V.nan,
                received: r.parsedType
            }),
            fe
        }
        return {
            status: "valid",
            value: e.data
        }
    }
}
Ns.create = t=>new Ns({
    typeName: le.ZodNaN,
    ...ye(t)
});
const Dp = Symbol("zod_brand");
class Fu extends ge {
    _parse(e) {
        const {ctx: n} = this._processInputParams(e)
          , r = n.data;
        return this._def.type._parse({
            data: r,
            path: n.path,
            parent: n
        })
    }
    unwrap() {
        return this._def.type
    }
}
class Di extends ge {
    _parse(e) {
        const {status: n, ctx: r} = this._processInputParams(e);
        if (r.common.async)
            return (async()=>{
                const s = await this._def.in._parseAsync({
                    data: r.data,
                    path: r.path,
                    parent: r
                });
                return s.status === "aborted" ? fe : s.status === "dirty" ? (n.dirty(),
                Mu(s.value)) : this._def.out._parseAsync({
                    data: s.value,
                    path: r.path,
                    parent: r
                })
            }
            )();
        {
            const i = this._def.in._parseSync({
                data: r.data,
                path: r.path,
                parent: r
            });
            return i.status === "aborted" ? fe : i.status === "dirty" ? (n.dirty(),
            {
                status: "dirty",
                value: i.value
            }) : this._def.out._parseSync({
                data: i.value,
                path: r.path,
                parent: r
            })
        }
    }
    static create(e, n) {
        return new Di({
            in: e,
            out: n,
            typeName: le.ZodPipeline
        })
    }
}
const Ku = (t,e={},n)=>t ? $r.create().superRefine((r,i)=>{
    var s, o;
    if (!t(r)) {
        const a = typeof e == "function" ? e(r) : typeof e == "string" ? {
            message: e
        } : e
          , u = (o = (s = a.fatal) !== null && s !== void 0 ? s : n) !== null && o !== void 0 ? o : !0
          , c = typeof a == "string" ? {
            message: a
        } : a;
        i.addIssue({
            code: "custom",
            ...c,
            fatal: u
        })
    }
}
) : $r.create()
  , Bp = {
    object: He.lazycreate
};
var le;
(function(t) {
    t.ZodString = "ZodString",
    t.ZodNumber = "ZodNumber",
    t.ZodNaN = "ZodNaN",
    t.ZodBigInt = "ZodBigInt",
    t.ZodBoolean = "ZodBoolean",
    t.ZodDate = "ZodDate",
    t.ZodSymbol = "ZodSymbol",
    t.ZodUndefined = "ZodUndefined",
    t.ZodNull = "ZodNull",
    t.ZodAny = "ZodAny",
    t.ZodUnknown = "ZodUnknown",
    t.ZodNever = "ZodNever",
    t.ZodVoid = "ZodVoid",
    t.ZodArray = "ZodArray",
    t.ZodObject = "ZodObject",
    t.ZodUnion = "ZodUnion",
    t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
    t.ZodIntersection = "ZodIntersection",
    t.ZodTuple = "ZodTuple",
    t.ZodRecord = "ZodRecord",
    t.ZodMap = "ZodMap",
    t.ZodSet = "ZodSet",
    t.ZodFunction = "ZodFunction",
    t.ZodLazy = "ZodLazy",
    t.ZodLiteral = "ZodLiteral",
    t.ZodEnum = "ZodEnum",
    t.ZodEffects = "ZodEffects",
    t.ZodNativeEnum = "ZodNativeEnum",
    t.ZodOptional = "ZodOptional",
    t.ZodNullable = "ZodNullable",
    t.ZodDefault = "ZodDefault",
    t.ZodCatch = "ZodCatch",
    t.ZodPromise = "ZodPromise",
    t.ZodBranded = "ZodBranded",
    t.ZodPipeline = "ZodPipeline"
}
)(le || (le = {}));
const $p = (t,e={
    message: `Input not instance of ${t.name}`
})=>Ku(n=>n instanceof t, e)
  , qu = Qt.create
  , Gu = Dn.create
  , Lp = Ns.create
  , Mp = Bn.create
  , Yu = _i.create
  , Up = er.create
  , Fp = ks.create
  , Kp = vi.create
  , qp = bi.create
  , Gp = $r.create
  , Yp = zn.create
  , Vp = wn.create
  , Zp = xs.create
  , Hp = rn.create
  , zp = He.create
  , Wp = He.strictCreate
  , Jp = wi.create
  , Xp = Zs.create
  , Qp = Ei.create
  , em = cn.create
  , tm = Si.create
  , nm = Ts.create
  , rm = tr.create
  , im = Rr.create
  , sm = ki.create
  , om = xi.create
  , am = $n.create
  , cm = Ti.create
  , um = Lr.create
  , gc = sn.create
  , lm = gn.create
  , fm = nr.create
  , dm = sn.createWithPreprocess
  , hm = Di.create
  , pm = ()=>qu().optional()
  , mm = ()=>Gu().optional()
  , ym = ()=>Yu().optional()
  , gm = {
    string: t=>Qt.create({
        ...t,
        coerce: !0
    }),
    number: t=>Dn.create({
        ...t,
        coerce: !0
    }),
    boolean: t=>_i.create({
        ...t,
        coerce: !0
    }),
    bigint: t=>Bn.create({
        ...t,
        coerce: !0
    }),
    date: t=>er.create({
        ...t,
        coerce: !0
    })
}
  , _m = fe;
var Ir = Object.freeze({
    __proto__: null,
    defaultErrorMap: gi,
    setErrorMap: Ep,
    getErrorMap: bs,
    makeIssue: ws,
    EMPTY_PATH: Sp,
    addIssueToContext: Z,
    ParseStatus: ht,
    INVALID: fe,
    DIRTY: Mu,
    OK: wt,
    isAborted: Bo,
    isDirty: $o,
    isValid: Es,
    isAsync: Ss,
    get util() {
        return Oe
    },
    get objectUtil() {
        return Do
    },
    ZodParsedType: V,
    getParsedType: Rn,
    ZodType: ge,
    ZodString: Qt,
    ZodNumber: Dn,
    ZodBigInt: Bn,
    ZodBoolean: _i,
    ZodDate: er,
    ZodSymbol: ks,
    ZodUndefined: vi,
    ZodNull: bi,
    ZodAny: $r,
    ZodUnknown: zn,
    ZodNever: wn,
    ZodVoid: xs,
    ZodArray: rn,
    ZodObject: He,
    ZodUnion: wi,
    ZodDiscriminatedUnion: Zs,
    ZodIntersection: Ei,
    ZodTuple: cn,
    ZodRecord: Si,
    ZodMap: Ts,
    ZodSet: tr,
    ZodFunction: Rr,
    ZodLazy: ki,
    ZodLiteral: xi,
    ZodEnum: $n,
    ZodNativeEnum: Ti,
    ZodPromise: Lr,
    ZodEffects: sn,
    ZodTransformer: sn,
    ZodOptional: gn,
    ZodNullable: nr,
    ZodDefault: Oi,
    ZodCatch: Os,
    ZodNaN: Ns,
    BRAND: Dp,
    ZodBranded: Fu,
    ZodPipeline: Di,
    custom: Ku,
    Schema: ge,
    ZodSchema: ge,
    late: Bp,
    get ZodFirstPartyTypeKind() {
        return le
    },
    coerce: gm,
    any: Gp,
    array: Hp,
    bigint: Mp,
    boolean: Yu,
    date: Up,
    discriminatedUnion: Xp,
    effect: gc,
    enum: am,
    function: im,
    instanceof: $p,
    intersection: Qp,
    lazy: sm,
    literal: om,
    map: nm,
    nan: Lp,
    nativeEnum: cm,
    never: Vp,
    null: qp,
    nullable: fm,
    number: Gu,
    object: zp,
    oboolean: ym,
    onumber: mm,
    optional: lm,
    ostring: pm,
    pipeline: hm,
    preprocess: dm,
    promise: um,
    record: tm,
    set: rm,
    strictObject: Wp,
    string: qu,
    symbol: Fp,
    transformer: gc,
    tuple: em,
    undefined: Kp,
    union: Jp,
    unknown: Yp,
    void: Zp,
    NEVER: _m,
    ZodIssueCode: L,
    quotelessJson: wp,
    ZodError: nn
});
function vm(t) {
    let e, n, r, i, s, o, a, u, c, l, d, h, g;
    return {
        c() {
            e = gt("svg"),
            n = gt("g"),
            r = gt("path"),
            i = gt("path"),
            s = gt("path"),
            o = gt("path"),
            a = gt("path"),
            u = gt("path"),
            c = gt("path"),
            l = gt("path"),
            d = gt("defs"),
            h = gt("clipPath"),
            g = gt("rect"),
            U(r, "d", "M17.25 7.5C17.25 6.10761 16.6969 4.77226 15.7123 3.78769C14.7277 2.80312 13.3924 2.25 12 2.25C10.6076 2.25 9.27226 2.80312 8.28769 3.78769C7.30312 4.77226 6.75 6.10761 6.75 7.5V8.25H17.25V7.5Z"),
            U(r, "stroke", "currentColor"),
            U(r, "stroke-width", "1.5"),
            U(r, "stroke-linecap", "round"),
            U(r, "stroke-linejoin", "round"),
            U(i, "d", "M6.75 18C6.75 19.3924 7.30312 20.7277 8.28769 21.7123C9.27226 22.6969 10.6076 23.25 12 23.25C13.3924 23.25 14.7277 22.6969 15.7123 21.7123C16.6969 20.7277 17.25 19.3924 17.25 18V8.25H6.75V18Z"),
            U(i, "stroke", "currentColor"),
            U(i, "stroke-width", "1.5"),
            U(i, "stroke-linecap", "round"),
            U(i, "stroke-linejoin", "round"),
            U(s, "d", "M16.594 4.959C17.4484 4.63537 18.184 4.05935 18.7031 3.3075C19.2222 2.55566 19.5002 1.66363 19.5 0.75"),
            U(s, "stroke", "currentColor"),
            U(s, "stroke-width", "1.5"),
            U(s, "stroke-linecap", "round"),
            U(s, "stroke-linejoin", "round"),
            U(o, "d", "M7.406 4.959C6.55161 4.63537 5.81597 4.05935 5.29688 3.3075C4.77779 2.55566 4.49984 1.66363 4.5 0.75"),
            U(o, "stroke", "currentColor"),
            U(o, "stroke-width", "1.5"),
            U(o, "stroke-linecap", "round"),
            U(o, "stroke-linejoin", "round"),
            U(a, "d", "M17.25 12.75H23.25"),
            U(a, "stroke", "currentColor"),
            U(a, "stroke-width", "1.5"),
            U(a, "stroke-linecap", "round"),
            U(a, "stroke-linejoin", "round"),
            U(u, "d", "M23.25 18.75C21.6587 18.75 20.1326 18.1179 19.0074 16.9926C17.8821 15.8674 17.25 14.3413 17.25 12.75C17.25 11.1587 17.8821 9.63258 19.0074 8.50736C20.1326 7.38214 21.6587 6.75 23.25 6.75"),
            U(u, "stroke", "currentColor"),
            U(u, "stroke-width", "1.5"),
            U(u, "stroke-linecap", "round"),
            U(u, "stroke-linejoin", "round"),
            U(c, "d", "M6.75 12.75H0.75"),
            U(c, "stroke", "currentColor"),
            U(c, "stroke-width", "1.5"),
            U(c, "stroke-linecap", "round"),
            U(c, "stroke-linejoin", "round"),
            U(l, "d", "M0.75 18.75C2.3413 18.75 3.86742 18.1179 4.99264 16.9926C6.11786 15.8674 6.75 14.3413 6.75 12.75C6.75 11.1587 6.11786 9.63258 4.99264 8.50736C3.86742 7.38214 2.3413 6.75 0.75 6.75"),
            U(l, "stroke", "currentColor"),
            U(l, "stroke-width", "1.5"),
            U(l, "stroke-linecap", "round"),
            U(l, "stroke-linejoin", "round"),
            U(n, "clip-path", "url(#clip0_546_468)"),
            U(g, "width", "24"),
            U(g, "height", "24"),
            U(g, "fill", "white"),
            U(h, "id", "clip0_546_468"),
            U(e, "width", "24"),
            U(e, "height", "24"),
            U(e, "viewBox", "0 0 24 24"),
            U(e, "fill", "none"),
            U(e, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(_, b) {
            Me(_, e, b),
            de(e, n),
            de(n, r),
            de(n, i),
            de(n, s),
            de(n, o),
            de(n, a),
            de(n, u),
            de(n, c),
            de(n, l),
            de(e, d),
            de(d, h),
            de(h, g)
        },
        p: Ne,
        i: Ne,
        o: Ne,
        d(_) {
            _ && Te(e)
        }
    }
}
class bm extends St {
    constructor(e) {
        super(),
        Et(this, e, null, vm, pt, {})
    }
}
function wm(t) {
    let e, n;
    return {
        c() {
            e = gt("svg"),
            n = gt("path"),
            U(n, "d", "M2.45748 9C2.45748 5.13401 5.52486 2 9.30867 2C13.0925 2 16.1599 5.13401 16.1599 9C16.1599 9.42052 16.0957 10.159 15.8988 10.9191C15.8036 11.2867 15.6842 11.6324 15.5412 11.939L12.9148 7.29115C12.6445 6.81286 12.0459 6.64898 11.5778 6.92513C11.1097 7.20127 10.9493 7.81286 11.2196 8.29115L14.6799 14.4149C14.9502 14.8932 15.5488 15.057 16.0169 14.7809L22.0105 11.2454C22.4786 10.9692 22.639 10.3576 22.3687 9.87934C22.0984 9.40105 21.4999 9.23717 21.0317 9.51332L17.793 11.4238C18.0351 10.4864 18.1173 9.57803 18.1173 9C18.1173 4.02944 14.1736 0 9.30867 0C4.44377 0 0.5 4.02944 0.5 9C0.5 13.9706 4.44377 18 9.30867 18C9.84921 18 10.2874 17.5523 10.2874 17C10.2874 16.4477 9.84921 16 9.30867 16C5.52486 16 2.45748 12.866 2.45748 9Z"),
            U(n, "fill", "currentColor"),
            U(e, "width", "23"),
            U(e, "height", "18"),
            U(e, "viewBox", "0 0 23 18"),
            U(e, "fill", "none"),
            U(e, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(r, i) {
            Me(r, e, i),
            de(e, n)
        },
        p: Ne,
        i: Ne,
        o: Ne,
        d(r) {
            r && Te(e)
        }
    }
}
class Em extends St {
    constructor(e) {
        super(),
        Et(this, e, null, wm, pt, {})
    }
}
function _c(t) {
    let e, n, r, i, s, o, a, u, c, l, d, h, g, _ = t[1] && vc(t);
    c = new Em({});
    let b = t[1] && bc(t);
    return {
        c() {
            e = Ve("div"),
            n = Ve("div"),
            r = Ve("p"),
            r.textContent = "Error",
            i = Xe(),
            _ && _.c(),
            s = Xe(),
            o = Ve("div"),
            a = Ve("button"),
            u = or("Reload game"),
            Nt(c.$$.fragment),
            l = Xe(),
            b && b.c(),
            U(r, "class", "text-2xl font-medium sm:text-4xl"),
            U(a, "class", "flex items-center justify-center gap-2 rounded bg-gray-10 px-6 py-2 text-sm transition-colors hover:bg-gray-16 sm:px-8 sm:py-3 sm:text-base [&>svg]:h-4 [&>svg]:sm:h-6"),
            U(o, "class", "flex gap-4"),
            U(n, "class", "bg-error relative flex h-full w-full flex-col items-start gap-4 p-[5%] font-body text-indigo-50 sm:gap-6 sm:p-[10%] svelte-1bvjea7"),
            U(e, "class", "absolute inset-0 z-50 flex items-center")
        },
        m(x, E) {
            Me(x, e, E),
            de(e, n),
            de(n, r),
            de(n, i),
            _ && _.m(n, null),
            de(n, s),
            de(n, o),
            de(o, a),
            de(a, u),
            vt(c, a, null),
            de(o, l),
            b && b.m(o, null),
            d = !0,
            h || (g = yn(a, "click", t[3]),
            h = !0)
        },
        p(x, E) {
            x[1] ? _ ? _.p(x, E) : (_ = vc(x),
            _.c(),
            _.m(n, s)) : _ && (_.d(1),
            _ = null),
            x[1] ? b ? (b.p(x, E),
            E & 2 && $e(b, 1)) : (b = bc(x),
            b.c(),
            $e(b, 1),
            b.m(o, null)) : b && (ba(),
            Ge(b, 1, 1, ()=>{
                b = null
            }
            ),
            wa())
        },
        i(x) {
            d || ($e(c.$$.fragment, x),
            $e(b),
            d = !0)
        },
        o(x) {
            Ge(c.$$.fragment, x),
            Ge(b),
            d = !1
        },
        d(x) {
            x && Te(e),
            _ && _.d(),
            bt(c),
            b && b.d(),
            h = !1,
            g()
        }
    }
}
function vc(t) {
    let e, n = t[0].message + "", r;
    return {
        c() {
            e = Ve("p"),
            r = or(n),
            U(e, "class", "text-base sm:text-lg")
        },
        m(i, s) {
            Me(i, e, s),
            de(e, r)
        },
        p(i, s) {
            s & 1 && n !== (n = i[0].message + "") && Ou(r, n)
        },
        d(i) {
            i && Te(e)
        }
    }
}
function bc(t) {
    let e, n, r, i, s, o;
    return r = new bm({}),
    {
        c() {
            e = Ve("button"),
            n = or("Report bug"),
            Nt(r.$$.fragment),
            U(e, "class", "flex items-center justify-center gap-2 rounded bg-gray-10 px-6 py-2 text-sm transition-colors hover:bg-gray-16 sm:px-8 sm:py-3 sm:text-base [&>svg]:h-4 [&>svg]:sm:h-6")
        },
        m(a, u) {
            Me(a, e, u),
            de(e, n),
            vt(r, e, null),
            i = !0,
            s || (o = yn(e, "click", t[4]),
            s = !0)
        },
        p: Ne,
        i(a) {
            i || ($e(r.$$.fragment, a),
            i = !0)
        },
        o(a) {
            Ge(r.$$.fragment, a),
            i = !1
        },
        d(a) {
            a && Te(e),
            bt(r),
            s = !1,
            o()
        }
    }
}
function Sm(t) {
    let e, n, r = t[0] && _c(t);
    return {
        c() {
            r && r.c(),
            e = mi()
        },
        m(i, s) {
            r && r.m(i, s),
            Me(i, e, s),
            n = !0
        },
        p(i, [s]) {
            i[0] ? r ? (r.p(i, s),
            s & 1 && $e(r, 1)) : (r = _c(i),
            r.c(),
            $e(r, 1),
            r.m(e.parentNode, e)) : r && (ba(),
            Ge(r, 1, 1, ()=>{
                r = null
            }
            ),
            wa())
        },
        i(i) {
            n || ($e(r),
            n = !0)
        },
        o(i) {
            Ge(r),
            n = !1
        },
        d(i) {
            r && r.d(i),
            i && Te(e)
        }
    }
}
const km = Ir.object({
    message: Ir.string(),
    stack: Ir.string().optional()
})
  , xm = t=>km.safeParse(t).success;
function Tm(t, e, n) {
    let r, i;
    ar(()=>{
        const u = c=>{
            const {error: l} = c;
            xm(l) ? n(0, i = l) : typeof l == "string" && n(0, i = new Error(l))
        }
        ;
        return window.addEventListener("error", u),
        ()=>window.removeEventListener("error", u)
    }
    );
    const s = u=>{
        const c = bn();
        u && c && window.parent.postMessage(u, c)
    }
      , o = ()=>location.reload()
      , a = ()=>s(i);
    return t.$$.update = ()=>{
        t.$$.dirty & 1 && n(1, r = !!i && (i == null ? void 0 : i.message) !== "[object Object]")
    }
    ,
    [i, r, s, o, a]
}
class Om extends St {
    constructor(e) {
        super(),
        Et(this, e, Tm, Sm, pt, {})
    }
}
const ut = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , it = Object.keys
  , dt = Array.isArray;
function Mt(t, e) {
    return typeof e != "object" || it(e).forEach(function(n) {
        t[n] = e[n]
    }),
    t
}
typeof Promise > "u" || ut.Promise || (ut.Promise = Promise);
const Mr = Object.getPrototypeOf
  , Nm = {}.hasOwnProperty;
function Rt(t, e) {
    return Nm.call(t, e)
}
function Ur(t, e) {
    typeof e == "function" && (e = e(Mr(t))),
    (typeof Reflect > "u" ? it : Reflect.ownKeys)(e).forEach(n=>{
        _n(t, n, e[n])
    }
    )
}
const Vu = Object.defineProperty;
function _n(t, e, n, r) {
    Vu(t, e, Mt(n && Rt(n, "get") && typeof n.get == "function" ? {
        get: n.get,
        set: n.set,
        configurable: !0
    } : {
        value: n,
        configurable: !0,
        writable: !0
    }, r))
}
function Pr(t) {
    return {
        from: function(e) {
            return t.prototype = Object.create(e.prototype),
            _n(t.prototype, "constructor", t),
            {
                extend: Ur.bind(null, t.prototype)
            }
        }
    }
}
const Am = Object.getOwnPropertyDescriptor;
function ka(t, e) {
    let n;
    return Am(t, e) || (n = Mr(t)) && ka(n, e)
}
const Rm = [].slice;
function As(t, e, n) {
    return Rm.call(t, e, n)
}
function Zu(t, e) {
    return e(t)
}
function Xr(t) {
    if (!t)
        throw new Error("Assertion Failed")
}
function Hu(t) {
    ut.setImmediate ? setImmediate(t) : setTimeout(t, 0)
}
function vn(t, e) {
    if (Rt(t, e))
        return t[e];
    if (!e)
        return t;
    if (typeof e != "string") {
        for (var n = [], r = 0, i = e.length; r < i; ++r) {
            var s = vn(t, e[r]);
            n.push(s)
        }
        return n
    }
    var o = e.indexOf(".");
    if (o !== -1) {
        var a = t[e.substr(0, o)];
        return a === void 0 ? void 0 : vn(a, e.substr(o + 1))
    }
}
function Yt(t, e, n) {
    if (t && e !== void 0 && (!("isFrozen"in Object) || !Object.isFrozen(t)))
        if (typeof e != "string" && "length"in e) {
            Xr(typeof n != "string" && "length"in n);
            for (var r = 0, i = e.length; r < i; ++r)
                Yt(t, e[r], n[r])
        } else {
            var s = e.indexOf(".");
            if (s !== -1) {
                var o = e.substr(0, s)
                  , a = e.substr(s + 1);
                if (a === "")
                    n === void 0 ? dt(t) && !isNaN(parseInt(o)) ? t.splice(o, 1) : delete t[o] : t[o] = n;
                else {
                    var u = t[o];
                    u && Rt(t, o) || (u = t[o] = {}),
                    Yt(u, a, n)
                }
            } else
                n === void 0 ? dt(t) && !isNaN(parseInt(e)) ? t.splice(e, 1) : delete t[e] : t[e] = n
        }
}
function zu(t) {
    var e = {};
    for (var n in t)
        Rt(t, n) && (e[n] = t[n]);
    return e
}
const Im = [].concat;
function Wu(t) {
    return Im.apply([], t)
}
const Pm = "Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Wu([8, 16, 32, 64].map(t=>["Int", "Uint", "Float"].map(e=>e + t + "Array")))).filter(t=>ut[t])
  , Ju = new Set(Pm.map(t=>ut[t]));
function Xu(t) {
    const e = {};
    for (const n in t)
        if (Rt(t, n)) {
            const r = t[n];
            e[n] = !r || typeof r != "object" || Ju.has(r.constructor) ? r : Xu(r)
        }
    return e
}
let oi = null;
function Ln(t) {
    oi = new WeakMap;
    const e = Mo(t);
    return oi = null,
    e
}
function Mo(t) {
    if (!t || typeof t != "object")
        return t;
    let e = oi.get(t);
    if (e)
        return e;
    if (dt(t)) {
        e = [],
        oi.set(t, e);
        for (var n = 0, r = t.length; n < r; ++n)
            e.push(Mo(t[n]))
    } else if (Ju.has(t.constructor))
        e = t;
    else {
        const s = Mr(t);
        for (var i in e = s === Object.prototype ? {} : Object.create(s),
        oi.set(t, e),
        t)
            Rt(t, i) && (e[i] = Mo(t[i]))
    }
    return e
}
const {toString: Cm} = {};
function Uo(t) {
    return Cm.call(t).slice(8, -1)
}
const Fo = typeof Symbol < "u" ? Symbol.iterator : "@@iterator"
  , jm = typeof Fo == "symbol" ? function(t) {
    var e;
    return t != null && (e = t[Fo]) && e.apply(t)
}
: function() {
    return null
}
;
function Qr(t, e) {
    const n = t.indexOf(e);
    return n >= 0 && t.splice(n, 1),
    n >= 0
}
const gr = {};
function pn(t) {
    var e, n, r, i;
    if (arguments.length === 1) {
        if (dt(t))
            return t.slice();
        if (this === gr && typeof t == "string")
            return [t];
        if (i = jm(t)) {
            for (n = []; !(r = i.next()).done; )
                n.push(r.value);
            return n
        }
        if (t == null)
            return [t];
        if (typeof (e = t.length) == "number") {
            for (n = new Array(e); e--; )
                n[e] = t[e];
            return n
        }
        return [t]
    }
    for (e = arguments.length,
    n = new Array(e); e--; )
        n[e] = arguments[e];
    return n
}
const xa = typeof Symbol < "u" ? t=>t[Symbol.toStringTag] === "AsyncFunction" : ()=>!1;
var Sn = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function Qu(t, e) {
    Sn = t,
    el = e
}
var el = ()=>!0;
const Dm = !new Error("").stack;
function ur() {
    if (Dm)
        try {
            throw ur.arguments,
            new Error
        } catch (t) {
            return t
        }
    return new Error
}
function Ko(t, e) {
    var n = t.stack;
    return n ? (e = e || 0,
    n.indexOf(t.name) === 0 && (e += (t.name + t.message).split(`
`).length),
    n.split(`
`).slice(e).filter(el).map(r=>`
` + r).join("")) : ""
}
var tl = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"]
  , Ta = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(tl)
  , Bm = {
    VersionChanged: "Database version changed by other database connection",
    DatabaseClosed: "Database has been closed",
    Abort: "Transaction aborted",
    TransactionInactive: "Transaction has already completed or failed",
    MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
};
function Cr(t, e) {
    this._e = ur(),
    this.name = t,
    this.message = e
}
function nl(t, e) {
    return t + ". Errors: " + Object.keys(e).map(n=>e[n].toString()).filter((n,r,i)=>i.indexOf(n) === r).join(`
`)
}
function Rs(t, e, n, r) {
    this._e = ur(),
    this.failures = e,
    this.failedKeys = r,
    this.successCount = n,
    this.message = nl(t, e)
}
function br(t, e) {
    this._e = ur(),
    this.name = "BulkError",
    this.failures = Object.keys(e).map(n=>e[n]),
    this.failuresByPos = e,
    this.message = nl(t, this.failures)
}
Pr(Cr).from(Error).extend({
    stack: {
        get: function() {
            return this._stack || (this._stack = this.name + ": " + this.message + Ko(this._e, 2))
        }
    },
    toString: function() {
        return this.name + ": " + this.message
    }
}),
Pr(Rs).from(Cr),
Pr(br).from(Cr);
var Oa = Ta.reduce((t,e)=>(t[e] = e + "Error",
t), {});
const $m = Cr;
var ae = Ta.reduce((t,e)=>{
    var n = e + "Error";
    function r(i, s) {
        this._e = ur(),
        this.name = n,
        i ? typeof i == "string" ? (this.message = `${i}${s ? `
 ` + s : ""}`,
        this.inner = s || null) : typeof i == "object" && (this.message = `${i.name} ${i.message}`,
        this.inner = i) : (this.message = Bm[e] || n,
        this.inner = null)
    }
    return Pr(r).from($m),
    t[e] = r,
    t
}
, {});
ae.Syntax = SyntaxError,
ae.Type = TypeError,
ae.Range = RangeError;
var wc = tl.reduce((t,e)=>(t[e + "Error"] = ae[e],
t), {})
  , ss = Ta.reduce((t,e)=>(["Syntax", "Type", "Range"].indexOf(e) === -1 && (t[e + "Error"] = ae[e]),
t), {});
function Le() {}
function Ni(t) {
    return t
}
function Lm(t, e) {
    return t == null || t === Ni ? e : function(n) {
        return e(t(n))
    }
}
function rr(t, e) {
    return function() {
        t.apply(this, arguments),
        e.apply(this, arguments)
    }
}
function Mm(t, e) {
    return t === Le ? e : function() {
        var n = t.apply(this, arguments);
        n !== void 0 && (arguments[0] = n);
        var r = this.onsuccess
          , i = this.onerror;
        this.onsuccess = null,
        this.onerror = null;
        var s = e.apply(this, arguments);
        return r && (this.onsuccess = this.onsuccess ? rr(r, this.onsuccess) : r),
        i && (this.onerror = this.onerror ? rr(i, this.onerror) : i),
        s !== void 0 ? s : n
    }
}
function Um(t, e) {
    return t === Le ? e : function() {
        t.apply(this, arguments);
        var n = this.onsuccess
          , r = this.onerror;
        this.onsuccess = this.onerror = null,
        e.apply(this, arguments),
        n && (this.onsuccess = this.onsuccess ? rr(n, this.onsuccess) : n),
        r && (this.onerror = this.onerror ? rr(r, this.onerror) : r)
    }
}
function Fm(t, e) {
    return t === Le ? e : function(n) {
        var r = t.apply(this, arguments);
        Mt(n, r);
        var i = this.onsuccess
          , s = this.onerror;
        this.onsuccess = null,
        this.onerror = null;
        var o = e.apply(this, arguments);
        return i && (this.onsuccess = this.onsuccess ? rr(i, this.onsuccess) : i),
        s && (this.onerror = this.onerror ? rr(s, this.onerror) : s),
        r === void 0 ? o === void 0 ? void 0 : o : Mt(r, o)
    }
}
function Km(t, e) {
    return t === Le ? e : function() {
        return e.apply(this, arguments) !== !1 && t.apply(this, arguments)
    }
}
function Na(t, e) {
    return t === Le ? e : function() {
        var n = t.apply(this, arguments);
        if (n && typeof n.then == "function") {
            for (var r = this, i = arguments.length, s = new Array(i); i--; )
                s[i] = arguments[i];
            return n.then(function() {
                return e.apply(r, s)
            })
        }
        return e.apply(this, arguments)
    }
}
ss.ModifyError = Rs,
ss.DexieError = Cr,
ss.BulkError = br;
var Ai = {};
const [Ec,Is,qm] = typeof Promise > "u" ? [] : (()=>{
    let t = Promise.resolve();
    if (typeof crypto > "u" || !crypto.subtle)
        return [t, Mr(t), t];
    const e = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
    return [e, Mr(e), t]
}
)()
  , Gm = Is && Is.then
  , os = Ec && Ec.constructor
  , Aa = !!qm;
var qo = !1
  , ai = function(t, e) {
    ei.push([t, e]),
    Ps && (queueMicrotask(Vm),
    Ps = !1)
}
  , Go = !0
  , Ps = !0
  , Wn = []
  , as = []
  , Yo = null
  , Vo = Ni
  , Cn = {
    id: "global",
    global: !0,
    ref: 0,
    unhandleds: [],
    onunhandled: Le,
    pgp: !1,
    env: {},
    finalize: Le
}
  , X = Cn
  , ei = []
  , Jn = 0
  , cs = [];
function H(t) {
    if (typeof this != "object")
        throw new TypeError("Promises must be constructed via new");
    this._listeners = [],
    this._lib = !1;
    var e = this._PSD = X;
    if (Sn && (this._stackHolder = ur(),
    this._prev = null,
    this._numPrev = 0),
    typeof t != "function") {
        if (t !== Ai)
            throw new TypeError("Not a function");
        return this._state = arguments[1],
        this._value = arguments[2],
        void (this._state === !1 && Ho(this, this._value))
    }
    this._state = null,
    this._value = null,
    ++e.ref,
    il(this, t)
}
const Zo = {
    get: function() {
        var t = X
          , e = Cs;
        function n(r, i) {
            var s = !t.global && (t !== X || e !== Cs);
            const o = s && !Un();
            var a = new H((u,c)=>{
                Ra(this, new rl(js(r, t, s, o),js(i, t, s, o),u,c,t))
            }
            );
            return Sn && al(a, this),
            a
        }
        return n.prototype = Ai,
        n
    },
    set: function(t) {
        _n(this, "then", t && t.prototype === Ai ? Zo : {
            get: function() {
                return t
            },
            set: Zo.set
        })
    }
};
function rl(t, e, n, r, i) {
    this.onFulfilled = typeof t == "function" ? t : null,
    this.onRejected = typeof e == "function" ? e : null,
    this.resolve = n,
    this.reject = r,
    this.psd = i
}
function il(t, e) {
    try {
        e(n=>{
            if (t._state === null) {
                if (n === t)
                    throw new TypeError("A promise cannot be resolved with itself.");
                var r = t._lib && Yr();
                n && typeof n.then == "function" ? il(t, (i,s)=>{
                    n instanceof H ? n._then(i, s) : n.then(i, s)
                }
                ) : (t._state = !0,
                t._value = n,
                sl(t)),
                r && Vr()
            }
        }
        , Ho.bind(null, t))
    } catch (n) {
        Ho(t, n)
    }
}
function Ho(t, e) {
    if (as.push(e),
    t._state === null) {
        var n = t._lib && Yr();
        e = Vo(e),
        t._state = !1,
        t._value = e,
        Sn && e !== null && typeof e == "object" && !e._promise && function(r, i, s) {
            try {
                r.apply(null, s)
            } catch (o) {
                i && i(o)
            }
        }(()=>{
            var r = ka(e, "stack");
            e._promise = t,
            _n(e, "stack", {
                get: ()=>qo ? r && (r.get ? r.get.apply(e) : r.value) : t.stack
            })
        }
        ),
        function(r) {
            Wn.some(i=>i._value === r._value) || Wn.push(r)
        }(t),
        sl(t),
        n && Vr()
    }
}
function sl(t) {
    var e = t._listeners;
    t._listeners = [];
    for (var n = 0, r = e.length; n < r; ++n)
        Ra(t, e[n]);
    var i = t._PSD;
    --i.ref || i.finalize(),
    Jn === 0 && (++Jn,
    ai(()=>{
        --Jn == 0 && Ia()
    }
    , []))
}
function Ra(t, e) {
    if (t._state !== null) {
        var n = t._state ? e.onFulfilled : e.onRejected;
        if (n === null)
            return (t._state ? e.resolve : e.reject)(t._value);
        ++e.psd.ref,
        ++Jn,
        ai(Ym, [n, t, e])
    } else
        t._listeners.push(e)
}
function Ym(t, e, n) {
    try {
        Yo = e;
        var r, i = e._value;
        e._state ? r = t(i) : (as.length && (as = []),
        r = t(i),
        as.indexOf(i) === -1 && function(s) {
            for (var o = Wn.length; o; )
                if (Wn[--o]._value === s._value)
                    return void Wn.splice(o, 1)
        }(e)),
        n.resolve(r)
    } catch (s) {
        n.reject(s)
    } finally {
        Yo = null,
        --Jn == 0 && Ia(),
        --n.psd.ref || n.psd.finalize()
    }
}
function ol(t, e, n) {
    if (e.length === n)
        return e;
    var r = "";
    if (t._state === !1) {
        var i, s, o = t._value;
        o != null ? (i = o.name || "Error",
        s = o.message || o,
        r = Ko(o, 0)) : (i = o,
        s = ""),
        e.push(i + (s ? ": " + s : "") + r)
    }
    return Sn && ((r = Ko(t._stackHolder, 2)) && e.indexOf(r) === -1 && e.push(r),
    t._prev && ol(t._prev, e, n)),
    e
}
function al(t, e) {
    var n = e ? e._numPrev + 1 : 0;
    n < 100 && (t._prev = e,
    t._numPrev = n)
}
function Vm() {
    ir(Cn, ()=>{
        Yr() && Vr()
    }
    )
}
function Yr() {
    var t = Go;
    return Go = !1,
    Ps = !1,
    t
}
function Vr() {
    var t, e, n;
    do
        for (; ei.length > 0; )
            for (t = ei,
            ei = [],
            n = t.length,
            e = 0; e < n; ++e) {
                var r = t[e];
                r[0].apply(null, r[1])
            }
    while (ei.length > 0);
    Go = !0,
    Ps = !0
}
function Ia() {
    var t = Wn;
    Wn = [],
    t.forEach(r=>{
        r._PSD.onunhandled.call(null, r._value, r)
    }
    );
    for (var e = cs.slice(0), n = e.length; n; )
        e[--n]()
}
function Zi(t) {
    return new H(Ai,!1,t)
}
function Ye(t, e) {
    var n = X;
    return function() {
        var r = Yr()
          , i = X;
        try {
            return Fn(n, !0),
            t.apply(this, arguments)
        } catch (s) {
            e && e(s)
        } finally {
            Fn(i, !1),
            r && Vr()
        }
    }
}
Ur(H.prototype, {
    then: Zo,
    _then: function(t, e) {
        Ra(this, new rl(null,null,t,e,X))
    },
    catch: function(t) {
        if (arguments.length === 1)
            return this.then(null, t);
        var e = arguments[0]
          , n = arguments[1];
        return typeof e == "function" ? this.then(null, r=>r instanceof e ? n(r) : Zi(r)) : this.then(null, r=>r && r.name === e ? n(r) : Zi(r))
    },
    finally: function(t) {
        return this.then(e=>(t(),
        e), e=>(t(),
        Zi(e)))
    },
    stack: {
        get: function() {
            if (this._stack)
                return this._stack;
            try {
                qo = !0;
                var t = ol(this, [], 20).join(`
From previous: `);
                return this._state !== null && (this._stack = t),
                t
            } finally {
                qo = !1
            }
        }
    },
    timeout: function(t, e) {
        return t < 1 / 0 ? new H((n,r)=>{
            var i = setTimeout(()=>r(new ae.Timeout(e)), t);
            this.then(n, r).finally(clearTimeout.bind(null, i))
        }
        ) : this
    }
}),
typeof Symbol < "u" && Symbol.toStringTag && _n(H.prototype, Symbol.toStringTag, "Dexie.Promise"),
Cn.env = cl(),
Ur(H, {
    all: function() {
        var t = pn.apply(null, arguments).map(Hi);
        return new H(function(e, n) {
            t.length === 0 && e([]);
            var r = t.length;
            t.forEach((i,s)=>H.resolve(i).then(o=>{
                t[s] = o,
                --r || e(t)
            }
            , n))
        }
        )
    },
    resolve: t=>{
        if (t instanceof H)
            return t;
        if (t && typeof t.then == "function")
            return new H((n,r)=>{
                t.then(n, r)
            }
            );
        var e = new H(Ai,!0,t);
        return al(e, Yo),
        e
    }
    ,
    reject: Zi,
    race: function() {
        var t = pn.apply(null, arguments).map(Hi);
        return new H((e,n)=>{
            t.map(r=>H.resolve(r).then(e, n))
        }
        )
    },
    PSD: {
        get: ()=>X,
        set: t=>X = t
    },
    totalEchoes: {
        get: ()=>Cs
    },
    newPSD: Mn,
    usePSD: ir,
    scheduler: {
        get: ()=>ai,
        set: t=>{
            ai = t
        }
    },
    rejectionMapper: {
        get: ()=>Vo,
        set: t=>{
            Vo = t
        }
    },
    follow: (t,e)=>new H((n,r)=>Mn((i,s)=>{
        var o = X;
        o.unhandleds = [],
        o.onunhandled = s,
        o.finalize = rr(function() {
            (function(a) {
                function u() {
                    a(),
                    cs.splice(cs.indexOf(u), 1)
                }
                cs.push(u),
                ++Jn,
                ai(()=>{
                    --Jn == 0 && Ia()
                }
                , [])
            }
            )(()=>{
                this.unhandleds.length === 0 ? i() : s(this.unhandleds[0])
            }
            )
        }, o.finalize),
        t()
    }
    , e, n, r))
}),
os && (os.allSettled && _n(H, "allSettled", function() {
    const t = pn.apply(null, arguments).map(Hi);
    return new H(e=>{
        t.length === 0 && e([]);
        let n = t.length;
        const r = new Array(n);
        t.forEach((i,s)=>H.resolve(i).then(o=>r[s] = {
            status: "fulfilled",
            value: o
        }, o=>r[s] = {
            status: "rejected",
            reason: o
        }).then(()=>--n || e(r)))
    }
    )
}),
os.any && typeof AggregateError < "u" && _n(H, "any", function() {
    const t = pn.apply(null, arguments).map(Hi);
    return new H((e,n)=>{
        t.length === 0 && n(new AggregateError([]));
        let r = t.length;
        const i = new Array(r);
        t.forEach((s,o)=>H.resolve(s).then(a=>e(a), a=>{
            i[o] = a,
            --r || n(new AggregateError(i))
        }
        ))
    }
    )
}));
const ft = {
    awaits: 0,
    echoes: 0,
    id: 0
};
var Zm = 0
  , us = []
  , so = 0
  , Cs = 0
  , Hm = 0;
function Mn(t, e, n, r) {
    var i = X
      , s = Object.create(i);
    s.parent = i,
    s.ref = 0,
    s.global = !1,
    s.id = ++Hm;
    var o = Cn.env;
    s.env = Aa ? {
        Promise: H,
        PromiseProp: {
            value: H,
            configurable: !0,
            writable: !0
        },
        all: H.all,
        race: H.race,
        allSettled: H.allSettled,
        any: H.any,
        resolve: H.resolve,
        reject: H.reject,
        nthen: Sc(o.nthen, s),
        gthen: Sc(o.gthen, s)
    } : {},
    e && Mt(s, e),
    ++i.ref,
    s.finalize = function() {
        --this.parent.ref || this.parent.finalize()
    }
    ;
    var a = ir(s, t, n, r);
    return s.ref === 0 && s.finalize(),
    a
}
function Zr() {
    return ft.id || (ft.id = ++Zm),
    ++ft.awaits,
    ft.echoes += 100,
    ft.id
}
function Un() {
    return !!ft.awaits && (--ft.awaits == 0 && (ft.id = 0),
    ft.echoes = 100 * ft.awaits,
    !0)
}
function Hi(t) {
    return ft.echoes && t && t.constructor === os ? (Zr(),
    t.then(e=>(Un(),
    e), e=>(Un(),
    nt(e)))) : t
}
function zm(t) {
    ++Cs,
    ft.echoes && --ft.echoes != 0 || (ft.echoes = ft.id = 0),
    us.push(X),
    Fn(t, !0)
}
function Wm() {
    var t = us[us.length - 1];
    us.pop(),
    Fn(t, !1)
}
function Fn(t, e) {
    var n = X;
    if ((e ? !ft.echoes || so++ && t === X : !so || --so && t === X) || queueMicrotask(e ? zm.bind(null, t) : Wm),
    t !== X && (X = t,
    n === Cn && (Cn.env = cl()),
    Aa)) {
        var r = Cn.env.Promise
          , i = t.env;
        Is.then = i.nthen,
        r.prototype.then = i.gthen,
        (n.global || t.global) && (Object.defineProperty(ut, "Promise", i.PromiseProp),
        r.all = i.all,
        r.race = i.race,
        r.resolve = i.resolve,
        r.reject = i.reject,
        i.allSettled && (r.allSettled = i.allSettled),
        i.any && (r.any = i.any))
    }
}
function cl() {
    var t = ut.Promise;
    return Aa ? {
        Promise: t,
        PromiseProp: Object.getOwnPropertyDescriptor(ut, "Promise"),
        all: t.all,
        race: t.race,
        allSettled: t.allSettled,
        any: t.any,
        resolve: t.resolve,
        reject: t.reject,
        nthen: Is.then,
        gthen: t.prototype.then
    } : {}
}
function ir(t, e, n, r, i) {
    var s = X;
    try {
        return Fn(t, !0),
        e(n, r, i)
    } finally {
        Fn(s, !1)
    }
}
function js(t, e, n, r) {
    return typeof t != "function" ? t : function() {
        var i = X;
        n && Zr(),
        Fn(e, !0);
        try {
            return t.apply(this, arguments)
        } finally {
            Fn(i, !1),
            r && queueMicrotask(Un)
        }
    }
}
function Sc(t, e) {
    return function(n, r) {
        return t.call(this, js(n, e), js(r, e))
    }
}
("" + Gm).indexOf("[native code]") === -1 && (Zr = Un = Le);
var nt = H.reject;
function zo(t, e, n, r) {
    if (t.idbdb && (t._state.openComplete || X.letThrough || t._vip)) {
        var i = t._createTransaction(e, n, t._dbSchema);
        try {
            i.create(),
            t._state.PR1398_maxLoop = 3
        } catch (s) {
            return s.name === Oa.InvalidState && t.isOpen() && --t._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"),
            t._close(),
            t.open().then(()=>zo(t, e, n, r))) : nt(s)
        }
        return i._promise(e, (s,o)=>Mn(()=>(X.trans = i,
        r(s, o, i)))).then(s=>{
            if (e === "readwrite")
                try {
                    i.idbtrans.commit()
                } catch {}
            return e === "readonly" ? s : i._completion.then(()=>s)
        }
        )
    }
    if (t._state.openComplete)
        return nt(new ae.DatabaseClosed(t._state.dbOpenError));
    if (!t._state.isBeingOpened) {
        if (!t._options.autoOpen)
            return nt(new ae.DatabaseClosed);
        t.open().catch(Le)
    }
    return t._state.dbReadyPromise.then(()=>zo(t, e, n, r))
}
const Zn = String.fromCharCode(65535)
  , dn = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>."
  , ci = []
  , Hs = typeof navigator < "u" && /(MSIE|Trident|Edge)/.test(navigator.userAgent)
  , Jm = Hs
  , Xm = Hs
  , ul = t=>!/(dexie\.js|dexie\.min\.js)/.test(t);
function sr(t, e) {
    return t ? e ? function() {
        return t.apply(this, arguments) && e.apply(this, arguments)
    }
    : t : e
}
const ll = {
    type: 3,
    lower: -1 / 0,
    lowerOpen: !1,
    upper: [[]],
    upperOpen: !1
};
function zi(t) {
    return typeof t != "string" || /\./.test(t) ? e=>e : e=>(e[t] === void 0 && t in e && delete (e = Ln(e))[t],
    e)
}
function Qm() {
    throw ae.Type()
}
function Ie(t, e) {
    try {
        const n = kc(t)
          , r = kc(e);
        if (n !== r)
            return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r !== "Date" ? NaN : -1;
        switch (n) {
        case "number":
        case "Date":
        case "string":
            return t > e ? 1 : t < e ? -1 : 0;
        case "binary":
            return function(i, s) {
                const o = i.length
                  , a = s.length
                  , u = o < a ? o : a;
                for (let c = 0; c < u; ++c)
                    if (i[c] !== s[c])
                        return i[c] < s[c] ? -1 : 1;
                return o === a ? 0 : o < a ? -1 : 1
            }(xc(t), xc(e));
        case "Array":
            return function(i, s) {
                const o = i.length
                  , a = s.length
                  , u = o < a ? o : a;
                for (let c = 0; c < u; ++c) {
                    const l = Ie(i[c], s[c]);
                    if (l !== 0)
                        return l
                }
                return o === a ? 0 : o < a ? -1 : 1
            }(t, e)
        }
    } catch {}
    return NaN
}
function kc(t) {
    const e = typeof t;
    if (e !== "object")
        return e;
    if (ArrayBuffer.isView(t))
        return "binary";
    const n = Uo(t);
    return n === "ArrayBuffer" ? "binary" : n
}
function xc(t) {
    return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer,t.byteOffset,t.byteLength) : new Uint8Array(t)
}
class Tc {
    _trans(e, n, r) {
        const i = this._tx || X.trans
          , s = this.name;
        function o(u, c, l) {
            if (!l.schema[s])
                throw new ae.NotFound("Table " + s + " not part of transaction");
            return n(l.idbtrans, l)
        }
        const a = Yr();
        try {
            return i && i.db === this.db ? i === X.trans ? i._promise(e, o, r) : Mn(()=>i._promise(e, o, r), {
                trans: i,
                transless: X.transless || X
            }) : zo(this.db, e, [this.name], o)
        } finally {
            a && Vr()
        }
    }
    get(e, n) {
        return e && e.constructor === Object ? this.where(e).first(n) : this._trans("readonly", r=>this.core.get({
            trans: r,
            key: e
        }).then(i=>this.hook.reading.fire(i))).then(n)
    }
    where(e) {
        if (typeof e == "string")
            return new this.db.WhereClause(this,e);
        if (dt(e))
            return new this.db.WhereClause(this,`[${e.join("+")}]`);
        const n = it(e);
        if (n.length === 1)
            return this.where(n[0]).equals(e[n[0]]);
        const r = this.schema.indexes.concat(this.schema.primKey).filter(c=>{
            if (c.compound && n.every(l=>c.keyPath.indexOf(l) >= 0)) {
                for (let l = 0; l < n.length; ++l)
                    if (n.indexOf(c.keyPath[l]) === -1)
                        return !1;
                return !0
            }
            return !1
        }
        ).sort((c,l)=>c.keyPath.length - l.keyPath.length)[0];
        if (r && this.db._maxKey !== Zn) {
            const c = r.keyPath.slice(0, n.length);
            return this.where(c).equals(c.map(l=>e[l]))
        }
        !r && Sn && console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${n.join("+")}]`);
        const {idxByName: i} = this.schema
          , s = this.db._deps.indexedDB;
        function o(c, l) {
            return s.cmp(c, l) === 0
        }
        const [a,u] = n.reduce(([c,l],d)=>{
            const h = i[d]
              , g = e[d];
            return [c || h, c || !h ? sr(l, h && h.multi ? _=>{
                const b = vn(_, d);
                return dt(b) && b.some(x=>o(g, x))
            }
            : _=>o(g, vn(_, d))) : l]
        }
        , [null, null]);
        return a ? this.where(a.name).equals(e[a.keyPath]).filter(u) : r ? this.filter(u) : this.where(n).equals("")
    }
    filter(e) {
        return this.toCollection().and(e)
    }
    count(e) {
        return this.toCollection().count(e)
    }
    offset(e) {
        return this.toCollection().offset(e)
    }
    limit(e) {
        return this.toCollection().limit(e)
    }
    each(e) {
        return this.toCollection().each(e)
    }
    toArray(e) {
        return this.toCollection().toArray(e)
    }
    toCollection() {
        return new this.db.Collection(new this.db.WhereClause(this))
    }
    orderBy(e) {
        return new this.db.Collection(new this.db.WhereClause(this,dt(e) ? `[${e.join("+")}]` : e))
    }
    reverse() {
        return this.toCollection().reverse()
    }
    mapToClass(e) {
        const {db: n, name: r} = this;
        this.schema.mappedClass = e,
        e.prototype instanceof Qm && (e = class extends e {
            get db() {
                return n
            }
            table() {
                return r
            }
        }
        );
        const i = new Set;
        for (let o = e.prototype; o; o = Mr(o))
            Object.getOwnPropertyNames(o).forEach(a=>i.add(a));
        const s = o=>{
            if (!o)
                return o;
            const a = Object.create(e.prototype);
            for (let u in o)
                if (!i.has(u))
                    try {
                        a[u] = o[u]
                    } catch {}
            return a
        }
        ;
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook),
        this.schema.readHook = s,
        this.hook("reading", s),
        e
    }
    defineClass() {
        return this.mapToClass(function(e) {
            Mt(this, e)
        })
    }
    add(e, n) {
        const {auto: r, keyPath: i} = this.schema.primKey;
        let s = e;
        return i && r && (s = zi(i)(e)),
        this._trans("readwrite", o=>this.core.mutate({
            trans: o,
            type: "add",
            keys: n != null ? [n] : null,
            values: [s]
        })).then(o=>o.numFailures ? H.reject(o.failures[0]) : o.lastResult).then(o=>{
            if (i)
                try {
                    Yt(e, i, o)
                } catch {}
            return o
        }
        )
    }
    update(e, n) {
        if (typeof e != "object" || dt(e))
            return this.where(":id").equals(e).modify(n);
        {
            const r = vn(e, this.schema.primKey.keyPath);
            return r === void 0 ? nt(new ae.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(r).modify(n)
        }
    }
    put(e, n) {
        const {auto: r, keyPath: i} = this.schema.primKey;
        let s = e;
        return i && r && (s = zi(i)(e)),
        this._trans("readwrite", o=>this.core.mutate({
            trans: o,
            type: "put",
            values: [s],
            keys: n != null ? [n] : null
        })).then(o=>o.numFailures ? H.reject(o.failures[0]) : o.lastResult).then(o=>{
            if (i)
                try {
                    Yt(e, i, o)
                } catch {}
            return o
        }
        )
    }
    delete(e) {
        return this._trans("readwrite", n=>this.core.mutate({
            trans: n,
            type: "delete",
            keys: [e]
        })).then(n=>n.numFailures ? H.reject(n.failures[0]) : void 0)
    }
    clear() {
        return this._trans("readwrite", e=>this.core.mutate({
            trans: e,
            type: "deleteRange",
            range: ll
        })).then(e=>e.numFailures ? H.reject(e.failures[0]) : void 0)
    }
    bulkGet(e) {
        return this._trans("readonly", n=>this.core.getMany({
            keys: e,
            trans: n
        }).then(r=>r.map(i=>this.hook.reading.fire(i))))
    }
    bulkAdd(e, n, r) {
        const i = Array.isArray(n) ? n : void 0
          , s = (r = r || (i ? void 0 : n)) ? r.allKeys : void 0;
        return this._trans("readwrite", o=>{
            const {auto: a, keyPath: u} = this.schema.primKey;
            if (u && i)
                throw new ae.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
            if (i && i.length !== e.length)
                throw new ae.InvalidArgument("Arguments objects and keys must have the same length");
            const c = e.length;
            let l = u && a ? e.map(zi(u)) : e;
            return this.core.mutate({
                trans: o,
                type: "add",
                keys: i,
                values: l,
                wantResults: s
            }).then(({numFailures: d, results: h, lastResult: g, failures: _})=>{
                if (d === 0)
                    return s ? h : g;
                throw new br(`${this.name}.bulkAdd(): ${d} of ${c} operations failed`,_)
            }
            )
        }
        )
    }
    bulkPut(e, n, r) {
        const i = Array.isArray(n) ? n : void 0
          , s = (r = r || (i ? void 0 : n)) ? r.allKeys : void 0;
        return this._trans("readwrite", o=>{
            const {auto: a, keyPath: u} = this.schema.primKey;
            if (u && i)
                throw new ae.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
            if (i && i.length !== e.length)
                throw new ae.InvalidArgument("Arguments objects and keys must have the same length");
            const c = e.length;
            let l = u && a ? e.map(zi(u)) : e;
            return this.core.mutate({
                trans: o,
                type: "put",
                keys: i,
                values: l,
                wantResults: s
            }).then(({numFailures: d, results: h, lastResult: g, failures: _})=>{
                if (d === 0)
                    return s ? h : g;
                throw new br(`${this.name}.bulkPut(): ${d} of ${c} operations failed`,_)
            }
            )
        }
        )
    }
    bulkUpdate(e) {
        const n = this.core
          , r = e.map(o=>o.key)
          , i = e.map(o=>o.changes)
          , s = [];
        return this._trans("readwrite", o=>n.getMany({
            trans: o,
            keys: r,
            cache: "clone"
        }).then(a=>{
            const u = []
              , c = [];
            e.forEach(({key: d, changes: h},g)=>{
                const _ = a[g];
                if (_) {
                    for (const b of Object.keys(h)) {
                        const x = h[b];
                        if (b === this.schema.primKey.keyPath) {
                            if (Ie(x, d) !== 0)
                                throw new ae.Constraint("Cannot update primary key in bulkUpdate()")
                        } else
                            Yt(_, b, x)
                    }
                    s.push(g),
                    u.push(d),
                    c.push(_)
                }
            }
            );
            const l = u.length;
            return n.mutate({
                trans: o,
                type: "put",
                keys: u,
                values: c,
                updates: {
                    keys: r,
                    changeSpecs: i
                }
            }).then(({numFailures: d, failures: h})=>{
                if (d === 0)
                    return l;
                for (const g of Object.keys(h)) {
                    const _ = s[Number(g)];
                    if (_ != null) {
                        const b = h[g];
                        delete h[g],
                        h[_] = b
                    }
                }
                throw new br(`${this.name}.bulkUpdate(): ${d} of ${l} operations failed`,h)
            }
            )
        }
        ))
    }
    bulkDelete(e) {
        const n = e.length;
        return this._trans("readwrite", r=>this.core.mutate({
            trans: r,
            type: "delete",
            keys: e
        })).then(({numFailures: r, lastResult: i, failures: s})=>{
            if (r === 0)
                return i;
            throw new br(`${this.name}.bulkDelete(): ${r} of ${n} operations failed`,s)
        }
        )
    }
}
function ui(t) {
    var e = {}
      , n = function(a, u) {
        if (u) {
            for (var c = arguments.length, l = new Array(c - 1); --c; )
                l[c - 1] = arguments[c];
            return e[a].subscribe.apply(null, l),
            t
        }
        if (typeof a == "string")
            return e[a]
    };
    n.addEventType = s;
    for (var r = 1, i = arguments.length; r < i; ++r)
        s(arguments[r]);
    return n;
    function s(a, u, c) {
        if (typeof a == "object")
            return o(a);
        u || (u = Km),
        c || (c = Le);
        var l = {
            subscribers: [],
            fire: c,
            subscribe: function(d) {
                l.subscribers.indexOf(d) === -1 && (l.subscribers.push(d),
                l.fire = u(l.fire, d))
            },
            unsubscribe: function(d) {
                l.subscribers = l.subscribers.filter(function(h) {
                    return h !== d
                }),
                l.fire = l.subscribers.reduce(u, c)
            }
        };
        return e[a] = n[a] = l,
        l
    }
    function o(a) {
        it(a).forEach(function(u) {
            var c = a[u];
            if (dt(c))
                s(u, a[u][0], a[u][1]);
            else {
                if (c !== "asap")
                    throw new ae.InvalidArgument("Invalid event config");
                var l = s(u, Ni, function() {
                    for (var d = arguments.length, h = new Array(d); d--; )
                        h[d] = arguments[d];
                    l.subscribers.forEach(function(g) {
                        Hu(function() {
                            g.apply(null, h)
                        })
                    })
                })
            }
        })
    }
}
function zr(t, e) {
    return Pr(e).from({
        prototype: t
    }),
    e
}
function hr(t, e) {
    return !(t.filter || t.algorithm || t.or) && (e ? t.justLimit : !t.replayFilter)
}
function oo(t, e) {
    t.filter = sr(t.filter, e)
}
function ao(t, e, n) {
    var r = t.replayFilter;
    t.replayFilter = r ? ()=>sr(r(), e()) : e,
    t.justLimit = n && !r
}
function ls(t, e) {
    if (t.isPrimKey)
        return e.primaryKey;
    const n = e.getIndexByKeyPath(t.index);
    if (!n)
        throw new ae.Schema("KeyPath " + t.index + " on object store " + e.name + " is not indexed");
    return n
}
function Oc(t, e, n) {
    const r = ls(t, e.schema);
    return e.openCursor({
        trans: n,
        values: !t.keysOnly,
        reverse: t.dir === "prev",
        unique: !!t.unique,
        query: {
            index: r,
            range: t.range
        }
    })
}
function Wi(t, e, n, r) {
    const i = t.replayFilter ? sr(t.filter, t.replayFilter()) : t.filter;
    if (t.or) {
        const s = {}
          , o = (a,u,c)=>{
            if (!i || i(u, c, h=>u.stop(h), h=>u.fail(h))) {
                var l = u.primaryKey
                  , d = "" + l;
                d === "[object ArrayBuffer]" && (d = "" + new Uint8Array(l)),
                Rt(s, d) || (s[d] = !0,
                e(a, u, c))
            }
        }
        ;
        return Promise.all([t.or._iterate(o, n), Nc(Oc(t, r, n), t.algorithm, o, !t.keysOnly && t.valueMapper)])
    }
    return Nc(Oc(t, r, n), sr(t.algorithm, i), e, !t.keysOnly && t.valueMapper)
}
function Nc(t, e, n, r) {
    var i = Ye(r ? (s,o,a)=>n(r(s), o, a) : n);
    return t.then(s=>{
        if (s)
            return s.start(()=>{
                var o = ()=>s.continue();
                e && !e(s, a=>o = a, a=>{
                    s.stop(a),
                    o = Le
                }
                , a=>{
                    s.fail(a),
                    o = Le
                }
                ) || i(s.value, s, a=>o = a),
                o()
            }
            )
    }
    )
}
class ey {
    _read(e, n) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, nt.bind(null, r.error)) : r.table._trans("readonly", e).then(n)
    }
    _write(e) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, nt.bind(null, n.error)) : n.table._trans("readwrite", e, "locked")
    }
    _addAlgorithm(e) {
        var n = this._ctx;
        n.algorithm = sr(n.algorithm, e)
    }
    _iterate(e, n) {
        return Wi(this._ctx, e, n, this._ctx.table.core)
    }
    clone(e) {
        var n = Object.create(this.constructor.prototype)
          , r = Object.create(this._ctx);
        return e && Mt(r, e),
        n._ctx = r,
        n
    }
    raw() {
        return this._ctx.valueMapper = null,
        this
    }
    each(e) {
        var n = this._ctx;
        return this._read(r=>Wi(n, e, r, n.table.core))
    }
    count(e) {
        return this._read(n=>{
            const r = this._ctx
              , i = r.table.core;
            if (hr(r, !0))
                return i.count({
                    trans: n,
                    query: {
                        index: ls(r, i.schema),
                        range: r.range
                    }
                }).then(o=>Math.min(o, r.limit));
            var s = 0;
            return Wi(r, ()=>(++s,
            !1), n, i).then(()=>s)
        }
        ).then(e)
    }
    sortBy(e, n) {
        const r = e.split(".").reverse()
          , i = r[0]
          , s = r.length - 1;
        function o(c, l) {
            return l ? o(c[r[l]], l - 1) : c[i]
        }
        var a = this._ctx.dir === "next" ? 1 : -1;
        function u(c, l) {
            var d = o(c, s)
              , h = o(l, s);
            return d < h ? -a : d > h ? a : 0
        }
        return this.toArray(function(c) {
            return c.sort(u)
        }).then(n)
    }
    toArray(e) {
        return this._read(n=>{
            var r = this._ctx;
            if (r.dir === "next" && hr(r, !0) && r.limit > 0) {
                const {valueMapper: i} = r
                  , s = ls(r, r.table.core.schema);
                return r.table.core.query({
                    trans: n,
                    limit: r.limit,
                    values: !0,
                    query: {
                        index: s,
                        range: r.range
                    }
                }).then(({result: o})=>i ? o.map(i) : o)
            }
            {
                const i = [];
                return Wi(r, s=>i.push(s), n, r.table.core).then(()=>i)
            }
        }
        , e)
    }
    offset(e) {
        var n = this._ctx;
        return e <= 0 || (n.offset += e,
        hr(n) ? ao(n, ()=>{
            var r = e;
            return (i,s)=>r === 0 || (r === 1 ? (--r,
            !1) : (s(()=>{
                i.advance(r),
                r = 0
            }
            ),
            !1))
        }
        ) : ao(n, ()=>{
            var r = e;
            return ()=>--r < 0
        }
        )),
        this
    }
    limit(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e),
        ao(this._ctx, ()=>{
            var n = e;
            return function(r, i, s) {
                return --n <= 0 && i(s),
                n >= 0
            }
        }
        , !0),
        this
    }
    until(e, n) {
        return oo(this._ctx, function(r, i, s) {
            return !e(r.value) || (i(s),
            n)
        }),
        this
    }
    first(e) {
        return this.limit(1).toArray(function(n) {
            return n[0]
        }).then(e)
    }
    last(e) {
        return this.reverse().first(e)
    }
    filter(e) {
        var n, r;
        return oo(this._ctx, function(i) {
            return e(i.value)
        }),
        n = this._ctx,
        r = e,
        n.isMatch = sr(n.isMatch, r),
        this
    }
    and(e) {
        return this.filter(e)
    }
    or(e) {
        return new this.db.WhereClause(this._ctx.table,e,this)
    }
    reverse() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev",
        this._ondirectionchange && this._ondirectionchange(this._ctx.dir),
        this
    }
    desc() {
        return this.reverse()
    }
    eachKey(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch,
        this.each(function(r, i) {
            e(i.key, i)
        })
    }
    eachUniqueKey(e) {
        return this._ctx.unique = "unique",
        this.eachKey(e)
    }
    eachPrimaryKey(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch,
        this.each(function(r, i) {
            e(i.primaryKey, i)
        })
    }
    keys(e) {
        var n = this._ctx;
        n.keysOnly = !n.isMatch;
        var r = [];
        return this.each(function(i, s) {
            r.push(s.key)
        }).then(function() {
            return r
        }).then(e)
    }
    primaryKeys(e) {
        var n = this._ctx;
        if (n.dir === "next" && hr(n, !0) && n.limit > 0)
            return this._read(i=>{
                var s = ls(n, n.table.core.schema);
                return n.table.core.query({
                    trans: i,
                    values: !1,
                    limit: n.limit,
                    query: {
                        index: s,
                        range: n.range
                    }
                })
            }
            ).then(({result: i})=>i).then(e);
        n.keysOnly = !n.isMatch;
        var r = [];
        return this.each(function(i, s) {
            r.push(s.primaryKey)
        }).then(function() {
            return r
        }).then(e)
    }
    uniqueKeys(e) {
        return this._ctx.unique = "unique",
        this.keys(e)
    }
    firstKey(e) {
        return this.limit(1).keys(function(n) {
            return n[0]
        }).then(e)
    }
    lastKey(e) {
        return this.reverse().firstKey(e)
    }
    distinct() {
        var e = this._ctx
          , n = e.index && e.table.schema.idxByName[e.index];
        if (!n || !n.multi)
            return this;
        var r = {};
        return oo(this._ctx, function(i) {
            var s = i.primaryKey.toString()
              , o = Rt(r, s);
            return r[s] = !0,
            !o
        }),
        this
    }
    modify(e) {
        var n = this._ctx;
        return this._write(r=>{
            var i;
            if (typeof e == "function")
                i = e;
            else {
                var s = it(e)
                  , o = s.length;
                i = function(b) {
                    for (var x = !1, E = 0; E < o; ++E) {
                        var S = s[E]
                          , k = e[S];
                        vn(b, S) !== k && (Yt(b, S, k),
                        x = !0)
                    }
                    return x
                }
            }
            const a = n.table.core
              , {outbound: u, extractKey: c} = a.schema.primaryKey
              , l = this.db._options.modifyChunkSize || 200
              , d = [];
            let h = 0;
            const g = []
              , _ = (b,x)=>{
                const {failures: E, numFailures: S} = x;
                h += b - S;
                for (let k of it(E))
                    d.push(E[k])
            }
            ;
            return this.clone().primaryKeys().then(b=>{
                const x = E=>{
                    const S = Math.min(l, b.length - E);
                    return a.getMany({
                        trans: r,
                        keys: b.slice(E, E + S),
                        cache: "immutable"
                    }).then(k=>{
                        const B = []
                          , I = []
                          , A = u ? [] : null
                          , C = [];
                        for (let v = 0; v < S; ++v) {
                            const y = k[v]
                              , N = {
                                value: Ln(y),
                                primKey: b[E + v]
                            };
                            i.call(N, N.value, N) !== !1 && (N.value == null ? C.push(b[E + v]) : u || Ie(c(y), c(N.value)) === 0 ? (I.push(N.value),
                            u && A.push(b[E + v])) : (C.push(b[E + v]),
                            B.push(N.value)))
                        }
                        const M = hr(n) && n.limit === 1 / 0 && (typeof e != "function" || e === co) && {
                            index: n.index,
                            range: n.range
                        };
                        return Promise.resolve(B.length > 0 && a.mutate({
                            trans: r,
                            type: "add",
                            values: B
                        }).then(v=>{
                            for (let y in v.failures)
                                C.splice(parseInt(y), 1);
                            _(B.length, v)
                        }
                        )).then(()=>(I.length > 0 || M && typeof e == "object") && a.mutate({
                            trans: r,
                            type: "put",
                            keys: A,
                            values: I,
                            criteria: M,
                            changeSpec: typeof e != "function" && e
                        }).then(v=>_(I.length, v))).then(()=>(C.length > 0 || M && e === co) && a.mutate({
                            trans: r,
                            type: "delete",
                            keys: C,
                            criteria: M
                        }).then(v=>_(C.length, v))).then(()=>b.length > E + S && x(E + l))
                    }
                    )
                }
                ;
                return x(0).then(()=>{
                    if (d.length > 0)
                        throw new Rs("Error modifying one or more objects",d,h,g);
                    return b.length
                }
                )
            }
            )
        }
        )
    }
    delete() {
        var e = this._ctx
          , n = e.range;
        return hr(e) && (e.isPrimKey && !Xm || n.type === 3) ? this._write(r=>{
            const {primaryKey: i} = e.table.core.schema
              , s = n;
            return e.table.core.count({
                trans: r,
                query: {
                    index: i,
                    range: s
                }
            }).then(o=>e.table.core.mutate({
                trans: r,
                type: "deleteRange",
                range: s
            }).then(({failures: a, lastResult: u, results: c, numFailures: l})=>{
                if (l)
                    throw new Rs("Could not delete some values",Object.keys(a).map(d=>a[d]),o - l);
                return o - l
            }
            ))
        }
        ) : this.modify(co)
    }
}
const co = (t,e)=>e.value = null;
function ty(t, e) {
    return t < e ? -1 : t === e ? 0 : 1
}
function ny(t, e) {
    return t > e ? -1 : t === e ? 0 : 1
}
function $t(t, e, n) {
    var r = t instanceof dl ? new t.Collection(t) : t;
    return r._ctx.error = n ? new n(e) : new TypeError(e),
    r
}
function pr(t) {
    return new t.Collection(t,()=>fl("")).limit(0)
}
function ry(t, e, n, r, i, s) {
    for (var o = Math.min(t.length, r.length), a = -1, u = 0; u < o; ++u) {
        var c = e[u];
        if (c !== r[u])
            return i(t[u], n[u]) < 0 ? t.substr(0, u) + n[u] + n.substr(u + 1) : i(t[u], r[u]) < 0 ? t.substr(0, u) + r[u] + n.substr(u + 1) : a >= 0 ? t.substr(0, a) + e[a] + n.substr(a + 1) : null;
        i(t[u], c) < 0 && (a = u)
    }
    return o < r.length && s === "next" ? t + n.substr(t.length) : o < t.length && s === "prev" ? t.substr(0, n.length) : a < 0 ? null : t.substr(0, a) + r[a] + n.substr(a + 1)
}
function Ji(t, e, n, r) {
    var i, s, o, a, u, c, l, d = n.length;
    if (!n.every(b=>typeof b == "string"))
        return $t(t, "String expected.");
    function h(b) {
        i = function(E) {
            return E === "next" ? S=>S.toUpperCase() : S=>S.toLowerCase()
        }(b),
        s = function(E) {
            return E === "next" ? S=>S.toLowerCase() : S=>S.toUpperCase()
        }(b),
        o = b === "next" ? ty : ny;
        var x = n.map(function(E) {
            return {
                lower: s(E),
                upper: i(E)
            }
        }).sort(function(E, S) {
            return o(E.lower, S.lower)
        });
        a = x.map(function(E) {
            return E.upper
        }),
        u = x.map(function(E) {
            return E.lower
        }),
        c = b,
        l = b === "next" ? "" : r
    }
    h("next");
    var g = new t.Collection(t,()=>Tn(a[0], u[d - 1] + r));
    g._ondirectionchange = function(b) {
        h(b)
    }
    ;
    var _ = 0;
    return g._addAlgorithm(function(b, x, E) {
        var S = b.key;
        if (typeof S != "string")
            return !1;
        var k = s(S);
        if (e(k, u, _))
            return !0;
        for (var B = null, I = _; I < d; ++I) {
            var A = ry(S, k, a[I], u[I], o, c);
            A === null && B === null ? _ = I + 1 : (B === null || o(B, A) > 0) && (B = A)
        }
        return x(B !== null ? function() {
            b.continue(B + l)
        }
        : E),
        !1
    }),
    g
}
function Tn(t, e, n, r) {
    return {
        type: 2,
        lower: t,
        upper: e,
        lowerOpen: n,
        upperOpen: r
    }
}
function fl(t) {
    return {
        type: 1,
        lower: t,
        upper: t
    }
}
class dl {
    get Collection() {
        return this._ctx.table.db.Collection
    }
    between(e, n, r, i) {
        r = r !== !1,
        i = i === !0;
        try {
            return this._cmp(e, n) > 0 || this._cmp(e, n) === 0 && (r || i) && (!r || !i) ? pr(this) : new this.Collection(this,()=>Tn(e, n, !r, !i))
        } catch {
            return $t(this, dn)
        }
    }
    equals(e) {
        return e == null ? $t(this, dn) : new this.Collection(this,()=>fl(e))
    }
    above(e) {
        return e == null ? $t(this, dn) : new this.Collection(this,()=>Tn(e, void 0, !0))
    }
    aboveOrEqual(e) {
        return e == null ? $t(this, dn) : new this.Collection(this,()=>Tn(e, void 0, !1))
    }
    below(e) {
        return e == null ? $t(this, dn) : new this.Collection(this,()=>Tn(void 0, e, !1, !0))
    }
    belowOrEqual(e) {
        return e == null ? $t(this, dn) : new this.Collection(this,()=>Tn(void 0, e))
    }
    startsWith(e) {
        return typeof e != "string" ? $t(this, "String expected.") : this.between(e, e + Zn, !0, !0)
    }
    startsWithIgnoreCase(e) {
        return e === "" ? this.startsWith(e) : Ji(this, (n,r)=>n.indexOf(r[0]) === 0, [e], Zn)
    }
    equalsIgnoreCase(e) {
        return Ji(this, (n,r)=>n === r[0], [e], "")
    }
    anyOfIgnoreCase() {
        var e = pn.apply(gr, arguments);
        return e.length === 0 ? pr(this) : Ji(this, (n,r)=>r.indexOf(n) !== -1, e, "")
    }
    startsWithAnyOfIgnoreCase() {
        var e = pn.apply(gr, arguments);
        return e.length === 0 ? pr(this) : Ji(this, (n,r)=>r.some(i=>n.indexOf(i) === 0), e, Zn)
    }
    anyOf() {
        const e = pn.apply(gr, arguments);
        let n = this._cmp;
        try {
            e.sort(n)
        } catch {
            return $t(this, dn)
        }
        if (e.length === 0)
            return pr(this);
        const r = new this.Collection(this,()=>Tn(e[0], e[e.length - 1]));
        r._ondirectionchange = s=>{
            n = s === "next" ? this._ascending : this._descending,
            e.sort(n)
        }
        ;
        let i = 0;
        return r._addAlgorithm((s,o,a)=>{
            const u = s.key;
            for (; n(u, e[i]) > 0; )
                if (++i,
                i === e.length)
                    return o(a),
                    !1;
            return n(u, e[i]) === 0 || (o(()=>{
                s.continue(e[i])
            }
            ),
            !1)
        }
        ),
        r
    }
    notEqual(e) {
        return this.inAnyRange([[-(1 / 0), e], [e, this.db._maxKey]], {
            includeLowers: !1,
            includeUppers: !1
        })
    }
    noneOf() {
        const e = pn.apply(gr, arguments);
        if (e.length === 0)
            return new this.Collection(this);
        try {
            e.sort(this._ascending)
        } catch {
            return $t(this, dn)
        }
        const n = e.reduce((r,i)=>r ? r.concat([[r[r.length - 1][1], i]]) : [[-(1 / 0), i]], null);
        return n.push([e[e.length - 1], this.db._maxKey]),
        this.inAnyRange(n, {
            includeLowers: !1,
            includeUppers: !1
        })
    }
    inAnyRange(e, n) {
        const r = this._cmp
          , i = this._ascending
          , s = this._descending
          , o = this._min
          , a = this._max;
        if (e.length === 0)
            return pr(this);
        if (!e.every(S=>S[0] !== void 0 && S[1] !== void 0 && i(S[0], S[1]) <= 0))
            return $t(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", ae.InvalidArgument);
        const u = !n || n.includeLowers !== !1
          , c = n && n.includeUppers === !0;
        let l, d = i;
        function h(S, k) {
            return d(S[0], k[0])
        }
        try {
            l = e.reduce(function(S, k) {
                let B = 0
                  , I = S.length;
                for (; B < I; ++B) {
                    const A = S[B];
                    if (r(k[0], A[1]) < 0 && r(k[1], A[0]) > 0) {
                        A[0] = o(A[0], k[0]),
                        A[1] = a(A[1], k[1]);
                        break
                    }
                }
                return B === I && S.push(k),
                S
            }, []),
            l.sort(h)
        } catch {
            return $t(this, dn)
        }
        let g = 0;
        const _ = c ? S=>i(S, l[g][1]) > 0 : S=>i(S, l[g][1]) >= 0
          , b = u ? S=>s(S, l[g][0]) > 0 : S=>s(S, l[g][0]) >= 0;
        let x = _;
        const E = new this.Collection(this,()=>Tn(l[0][0], l[l.length - 1][1], !u, !c));
        return E._ondirectionchange = S=>{
            S === "next" ? (x = _,
            d = i) : (x = b,
            d = s),
            l.sort(h)
        }
        ,
        E._addAlgorithm((S,k,B)=>{
            for (var I = S.key; x(I); )
                if (++g,
                g === l.length)
                    return k(B),
                    !1;
            return !!function(A) {
                return !_(A) && !b(A)
            }(I) || (this._cmp(I, l[g][1]) === 0 || this._cmp(I, l[g][0]) === 0 || k(()=>{
                d === i ? S.continue(l[g][0]) : S.continue(l[g][1])
            }
            ),
            !1)
        }
        ),
        E
    }
    startsWithAnyOf() {
        const e = pn.apply(gr, arguments);
        return e.every(n=>typeof n == "string") ? e.length === 0 ? pr(this) : this.inAnyRange(e.map(n=>[n, n + Zn])) : $t(this, "startsWithAnyOf() only works with strings")
    }
}
function on(t) {
    return Ye(function(e) {
        return Ri(e),
        t(e.target.error),
        !1
    })
}
function Ri(t) {
    t.stopPropagation && t.stopPropagation(),
    t.preventDefault && t.preventDefault()
}
const En = ui(null, "storagemutated");
class iy {
    _lock() {
        return Xr(!X.global),
        ++this._reculock,
        this._reculock !== 1 || X.global || (X.lockOwnerFor = this),
        this
    }
    _unlock() {
        if (Xr(!X.global),
        --this._reculock == 0)
            for (X.global || (X.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked(); ) {
                var e = this._blockedFuncs.shift();
                try {
                    ir(e[1], e[0])
                } catch {}
            }
        return this
    }
    _locked() {
        return this._reculock && X.lockOwnerFor !== this
    }
    create(e) {
        if (!this.mode)
            return this;
        const n = this.db.idbdb
          , r = this.db._state.dbOpenError;
        if (Xr(!this.idbtrans),
        !e && !n)
            switch (r && r.name) {
            case "DatabaseClosedError":
                throw new ae.DatabaseClosed(r);
            case "MissingAPIError":
                throw new ae.MissingAPI(r.message,r);
            default:
                throw new ae.OpenFailed(r)
            }
        if (!this.active)
            throw new ae.TransactionInactive;
        return Xr(this._completion._state === null),
        (e = this.idbtrans = e || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, {
            durability: this.chromeTransactionDurability
        }) : n.transaction(this.storeNames, this.mode, {
            durability: this.chromeTransactionDurability
        }))).onerror = Ye(i=>{
            Ri(i),
            this._reject(e.error)
        }
        ),
        e.onabort = Ye(i=>{
            Ri(i),
            this.active && this._reject(new ae.Abort(e.error)),
            this.active = !1,
            this.on("abort").fire(i)
        }
        ),
        e.oncomplete = Ye(()=>{
            this.active = !1,
            this._resolve(),
            "mutatedParts"in e && En.storagemutated.fire(e.mutatedParts)
        }
        ),
        this
    }
    _promise(e, n, r) {
        if (e === "readwrite" && this.mode !== "readwrite")
            return nt(new ae.ReadOnly("Transaction is readonly"));
        if (!this.active)
            return nt(new ae.TransactionInactive);
        if (this._locked())
            return new H((s,o)=>{
                this._blockedFuncs.push([()=>{
                    this._promise(e, n, r).then(s, o)
                }
                , X])
            }
            );
        if (r)
            return Mn(()=>{
                var s = new H((o,a)=>{
                    this._lock();
                    const u = n(o, a, this);
                    u && u.then && u.then(o, a)
                }
                );
                return s.finally(()=>this._unlock()),
                s._lib = !0,
                s
            }
            );
        var i = new H((s,o)=>{
            var a = n(s, o, this);
            a && a.then && a.then(s, o)
        }
        );
        return i._lib = !0,
        i
    }
    _root() {
        return this.parent ? this.parent._root() : this
    }
    waitFor(e) {
        var n = this._root();
        const r = H.resolve(e);
        if (n._waitingFor)
            n._waitingFor = n._waitingFor.then(()=>r);
        else {
            n._waitingFor = r,
            n._waitingQueue = [];
            var i = n.idbtrans.objectStore(n.storeNames[0]);
            (function o() {
                for (++n._spinCount; n._waitingQueue.length; )
                    n._waitingQueue.shift()();
                n._waitingFor && (i.get(-1 / 0).onsuccess = o)
            }
            )()
        }
        var s = n._waitingFor;
        return new H((o,a)=>{
            r.then(u=>n._waitingQueue.push(Ye(o.bind(null, u))), u=>n._waitingQueue.push(Ye(a.bind(null, u)))).finally(()=>{
                n._waitingFor === s && (n._waitingFor = null)
            }
            )
        }
        )
    }
    abort() {
        this.active && (this.active = !1,
        this.idbtrans && this.idbtrans.abort(),
        this._reject(new ae.Abort))
    }
    table(e) {
        const n = this._memoizedTables || (this._memoizedTables = {});
        if (Rt(n, e))
            return n[e];
        const r = this.schema[e];
        if (!r)
            throw new ae.NotFound("Table " + e + " not part of transaction");
        const i = new this.db.Table(e,r,this);
        return i.core = this.db.core.table(e),
        n[e] = i,
        i
    }
}
function Wo(t, e, n, r, i, s, o) {
    return {
        name: t,
        keyPath: e,
        unique: n,
        multi: r,
        auto: i,
        compound: s,
        src: (n && !o ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + hl(e)
    }
}
function hl(t) {
    return typeof t == "string" ? t : t ? "[" + [].join.call(t, "+") + "]" : ""
}
function pl(t, e, n) {
    return {
        name: t,
        primKey: e,
        indexes: n,
        mappedClass: null,
        idxByName: (r = n,
        i = s=>[s.name, s],
        r.reduce((s,o,a)=>{
            var u = i(o, a);
            return u && (s[u[0]] = u[1]),
            s
        }
        , {}))
    };
    var r, i
}
let Ii = t=>{
    try {
        return t.only([[]]),
        Ii = ()=>[[]],
        [[]]
    } catch {
        return Ii = ()=>Zn,
        Zn
    }
}
;
function Jo(t) {
    return t == null ? ()=>{}
    : typeof t == "string" ? function(e) {
        return e.split(".").length === 1 ? n=>n[e] : n=>vn(n, e)
    }(t) : e=>vn(e, t)
}
function Ac(t) {
    return [].slice.call(t)
}
let sy = 0;
function li(t) {
    return t == null ? ":id" : typeof t == "string" ? t : `[${t.join("+")}]`
}
function oy(t, e, n) {
    function r(u) {
        if (u.type === 3)
            return null;
        if (u.type === 4)
            throw new Error("Cannot convert never type to IDBKeyRange");
        const {lower: c, upper: l, lowerOpen: d, upperOpen: h} = u;
        return c === void 0 ? l === void 0 ? null : e.upperBound(l, !!h) : l === void 0 ? e.lowerBound(c, !!d) : e.bound(c, l, !!d, !!h)
    }
    const {schema: i, hasGetAll: s} = function(u, c) {
        const l = Ac(u.objectStoreNames);
        return {
            schema: {
                name: u.name,
                tables: l.map(d=>c.objectStore(d)).map(d=>{
                    const {keyPath: h, autoIncrement: g} = d
                      , _ = dt(h)
                      , b = h == null
                      , x = {}
                      , E = {
                        name: d.name,
                        primaryKey: {
                            name: null,
                            isPrimaryKey: !0,
                            outbound: b,
                            compound: _,
                            keyPath: h,
                            autoIncrement: g,
                            unique: !0,
                            extractKey: Jo(h)
                        },
                        indexes: Ac(d.indexNames).map(S=>d.index(S)).map(S=>{
                            const {name: k, unique: B, multiEntry: I, keyPath: A} = S
                              , C = {
                                name: k,
                                compound: dt(A),
                                keyPath: A,
                                unique: B,
                                multiEntry: I,
                                extractKey: Jo(A)
                            };
                            return x[li(A)] = C,
                            C
                        }
                        ),
                        getIndexByKeyPath: S=>x[li(S)]
                    };
                    return x[":id"] = E.primaryKey,
                    h != null && (x[li(h)] = E.primaryKey),
                    E
                }
                )
            },
            hasGetAll: l.length > 0 && "getAll"in c.objectStore(l[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
        }
    }(t, n)
      , o = i.tables.map(u=>function(c) {
        const l = c.name;
        return {
            name: l,
            schema: c,
            mutate: function({trans: d, type: h, keys: g, values: _, range: b}) {
                return new Promise((x,E)=>{
                    x = Ye(x);
                    const S = d.objectStore(l)
                      , k = S.keyPath == null
                      , B = h === "put" || h === "add";
                    if (!B && h !== "delete" && h !== "deleteRange")
                        throw new Error("Invalid operation type: " + h);
                    const {length: I} = g || _ || {
                        length: 1
                    };
                    if (g && _ && g.length !== _.length)
                        throw new Error("Given keys array must have same length as given values array.");
                    if (I === 0)
                        return x({
                            numFailures: 0,
                            failures: {},
                            results: [],
                            lastResult: void 0
                        });
                    let A;
                    const C = []
                      , M = [];
                    let v = 0;
                    const y = O=>{
                        ++v,
                        Ri(O)
                    }
                    ;
                    if (h === "deleteRange") {
                        if (b.type === 4)
                            return x({
                                numFailures: v,
                                failures: M,
                                results: [],
                                lastResult: void 0
                            });
                        b.type === 3 ? C.push(A = S.clear()) : C.push(A = S.delete(r(b)))
                    } else {
                        const [O,te] = B ? k ? [_, g] : [_, null] : [g, null];
                        if (B)
                            for (let z = 0; z < I; ++z)
                                C.push(A = te && te[z] !== void 0 ? S[h](O[z], te[z]) : S[h](O[z])),
                                A.onerror = y;
                        else
                            for (let z = 0; z < I; ++z)
                                C.push(A = S[h](O[z])),
                                A.onerror = y
                    }
                    const N = O=>{
                        const te = O.target.result;
                        C.forEach((z,pe)=>z.error != null && (M[pe] = z.error)),
                        x({
                            numFailures: v,
                            failures: M,
                            results: h === "delete" ? g : C.map(z=>z.result),
                            lastResult: te
                        })
                    }
                    ;
                    A.onerror = O=>{
                        y(O),
                        N(O)
                    }
                    ,
                    A.onsuccess = N
                }
                )
            },
            getMany: ({trans: d, keys: h})=>new Promise((g,_)=>{
                g = Ye(g);
                const b = d.objectStore(l)
                  , x = h.length
                  , E = new Array(x);
                let S, k = 0, B = 0;
                const I = C=>{
                    const M = C.target;
                    E[M._pos] = M.result,
                    ++B === k && g(E)
                }
                  , A = on(_);
                for (let C = 0; C < x; ++C)
                    h[C] != null && (S = b.get(h[C]),
                    S._pos = C,
                    S.onsuccess = I,
                    S.onerror = A,
                    ++k);
                k === 0 && g(E)
            }
            ),
            get: ({trans: d, key: h})=>new Promise((g,_)=>{
                g = Ye(g);
                const b = d.objectStore(l).get(h);
                b.onsuccess = x=>g(x.target.result),
                b.onerror = on(_)
            }
            ),
            query: function(d) {
                return h=>new Promise((g,_)=>{
                    g = Ye(g);
                    const {trans: b, values: x, limit: E, query: S} = h
                      , k = E === 1 / 0 ? void 0 : E
                      , {index: B, range: I} = S
                      , A = b.objectStore(l)
                      , C = B.isPrimaryKey ? A : A.index(B.name)
                      , M = r(I);
                    if (E === 0)
                        return g({
                            result: []
                        });
                    if (d) {
                        const v = x ? C.getAll(M, k) : C.getAllKeys(M, k);
                        v.onsuccess = y=>g({
                            result: y.target.result
                        }),
                        v.onerror = on(_)
                    } else {
                        let v = 0;
                        const y = x || !("openKeyCursor"in C) ? C.openCursor(M) : C.openKeyCursor(M)
                          , N = [];
                        y.onsuccess = O=>{
                            const te = y.result;
                            return te ? (N.push(x ? te.value : te.primaryKey),
                            ++v === E ? g({
                                result: N
                            }) : void te.continue()) : g({
                                result: N
                            })
                        }
                        ,
                        y.onerror = on(_)
                    }
                }
                )
            }(s),
            openCursor: function({trans: d, values: h, query: g, reverse: _, unique: b}) {
                return new Promise((x,E)=>{
                    x = Ye(x);
                    const {index: S, range: k} = g
                      , B = d.objectStore(l)
                      , I = S.isPrimaryKey ? B : B.index(S.name)
                      , A = _ ? b ? "prevunique" : "prev" : b ? "nextunique" : "next"
                      , C = h || !("openKeyCursor"in I) ? I.openCursor(r(k), A) : I.openKeyCursor(r(k), A);
                    C.onerror = on(E),
                    C.onsuccess = Ye(M=>{
                        const v = C.result;
                        if (!v)
                            return void x(null);
                        v.___id = ++sy,
                        v.done = !1;
                        const y = v.continue.bind(v);
                        let N = v.continuePrimaryKey;
                        N && (N = N.bind(v));
                        const O = v.advance.bind(v)
                          , te = ()=>{
                            throw new Error("Cursor not stopped")
                        }
                        ;
                        v.trans = d,
                        v.stop = v.continue = v.continuePrimaryKey = v.advance = ()=>{
                            throw new Error("Cursor not started")
                        }
                        ,
                        v.fail = Ye(E),
                        v.next = function() {
                            let z = 1;
                            return this.start(()=>z-- ? this.continue() : this.stop()).then(()=>this)
                        }
                        ,
                        v.start = z=>{
                            const pe = new Promise((W,ve)=>{
                                W = Ye(W),
                                C.onerror = on(ve),
                                v.fail = ve,
                                v.stop = tt=>{
                                    v.stop = v.continue = v.continuePrimaryKey = v.advance = te,
                                    W(tt)
                                }
                            }
                            )
                              , P = ()=>{
                                if (C.result)
                                    try {
                                        z()
                                    } catch (W) {
                                        v.fail(W)
                                    }
                                else
                                    v.done = !0,
                                    v.start = ()=>{
                                        throw new Error("Cursor behind last entry")
                                    }
                                    ,
                                    v.stop()
                            }
                            ;
                            return C.onsuccess = Ye(W=>{
                                C.onsuccess = P,
                                P()
                            }
                            ),
                            v.continue = y,
                            v.continuePrimaryKey = N,
                            v.advance = O,
                            P(),
                            pe
                        }
                        ,
                        x(v)
                    }
                    , E)
                }
                )
            },
            count({query: d, trans: h}) {
                const {index: g, range: _} = d;
                return new Promise((b,x)=>{
                    const E = h.objectStore(l)
                      , S = g.isPrimaryKey ? E : E.index(g.name)
                      , k = r(_)
                      , B = k ? S.count(k) : S.count();
                    B.onsuccess = Ye(I=>b(I.target.result)),
                    B.onerror = on(x)
                }
                )
            }
        }
    }(u))
      , a = {};
    return o.forEach(u=>a[u.name] = u),
    {
        stack: "dbcore",
        transaction: t.transaction.bind(t),
        table(u) {
            if (!a[u])
                throw new Error(`Table '${u}' not found`);
            return a[u]
        },
        MIN_KEY: -1 / 0,
        MAX_KEY: Ii(e),
        schema: i
    }
}
function Xo(t, e) {
    const n = e.db
      , r = function(i, s, {IDBKeyRange: o, indexedDB: a}, u) {
        return {
            dbcore: function(l, d) {
                return d.reduce((h,{create: g})=>({
                    ...h,
                    ...g(h)
                }), l)
            }(oy(s, o, u), i.dbcore)
        }
    }(t._middlewares, n, t._deps, e);
    t.core = r.dbcore,
    t.tables.forEach(i=>{
        const s = i.name;
        t.core.schema.tables.some(o=>o.name === s) && (i.core = t.core.table(s),
        t[s]instanceof t.Table && (t[s].core = i.core))
    }
    )
}
function Ds(t, e, n, r) {
    n.forEach(i=>{
        const s = r[i];
        e.forEach(o=>{
            const a = ka(o, i);
            (!a || "value"in a && a.value === void 0) && (o === t.Transaction.prototype || o instanceof t.Transaction ? _n(o, i, {
                get() {
                    return this.table(i)
                },
                set(u) {
                    Vu(this, i, {
                        value: u,
                        writable: !0,
                        configurable: !0,
                        enumerable: !0
                    })
                }
            }) : o[i] = new t.Table(i,s))
        }
        )
    }
    )
}
function Qo(t, e) {
    e.forEach(n=>{
        for (let r in n)
            n[r]instanceof t.Table && delete n[r]
    }
    )
}
function ay(t, e) {
    return t._cfg.version - e._cfg.version
}
function cy(t, e, n, r) {
    const i = t._dbSchema
      , s = t._createTransaction("readwrite", t._storeNames, i);
    s.create(n),
    s._completion.catch(r);
    const o = s._reject.bind(s)
      , a = X.transless || X;
    Mn(()=>{
        X.trans = s,
        X.transless = a,
        e === 0 ? (it(i).forEach(u=>{
            uo(n, u, i[u].primKey, i[u].indexes)
        }
        ),
        Xo(t, n),
        H.follow(()=>t.on.populate.fire(s)).catch(o)) : function(u, c, l, d) {
            const h = []
              , g = u._versions;
            let _ = u._dbSchema = ta(u, u.idbdb, d)
              , b = !1;
            function x() {
                return h.length ? H.resolve(h.shift()(l.idbtrans)).then(x) : H.resolve()
            }
            return g.filter(E=>E._cfg.version >= c).forEach(E=>{
                h.push(()=>{
                    const S = _
                      , k = E._cfg.dbschema;
                    na(u, S, d),
                    na(u, k, d),
                    _ = u._dbSchema = k;
                    const B = ml(S, k);
                    B.add.forEach(A=>{
                        uo(d, A[0], A[1].primKey, A[1].indexes)
                    }
                    ),
                    B.change.forEach(A=>{
                        if (A.recreate)
                            throw new ae.Upgrade("Not yet support for changing primary key");
                        {
                            const C = d.objectStore(A.name);
                            A.add.forEach(M=>ea(C, M)),
                            A.change.forEach(M=>{
                                C.deleteIndex(M.name),
                                ea(C, M)
                            }
                            ),
                            A.del.forEach(M=>C.deleteIndex(M))
                        }
                    }
                    );
                    const I = E._cfg.contentUpgrade;
                    if (I && E._cfg.version > c) {
                        Xo(u, d),
                        l._memoizedTables = {},
                        b = !0;
                        let A = zu(k);
                        B.del.forEach(y=>{
                            A[y] = S[y]
                        }
                        ),
                        Qo(u, [u.Transaction.prototype]),
                        Ds(u, [u.Transaction.prototype], it(A), A),
                        l.schema = A;
                        const C = xa(I);
                        let M;
                        C && Zr();
                        const v = H.follow(()=>{
                            if (M = I(l),
                            M && C) {
                                var y = Un.bind(null, null);
                                M.then(y, y)
                            }
                        }
                        );
                        return M && typeof M.then == "function" ? H.resolve(M) : v.then(()=>M)
                    }
                }
                ),
                h.push(S=>{
                    (!b || !Jm) && function(k, B) {
                        [].slice.call(B.db.objectStoreNames).forEach(I=>k[I] == null && B.db.deleteObjectStore(I))
                    }(E._cfg.dbschema, S),
                    Qo(u, [u.Transaction.prototype]),
                    Ds(u, [u.Transaction.prototype], u._storeNames, u._dbSchema),
                    l.schema = u._dbSchema
                }
                )
            }
            ),
            x().then(()=>{
                var E, S;
                S = d,
                it(E = _).forEach(k=>{
                    S.db.objectStoreNames.contains(k) || uo(S, k, E[k].primKey, E[k].indexes)
                }
                )
            }
            )
        }(t, e, s, n).catch(o)
    }
    )
}
function ml(t, e) {
    const n = {
        del: [],
        add: [],
        change: []
    };
    let r;
    for (r in t)
        e[r] || n.del.push(r);
    for (r in e) {
        const i = t[r]
          , s = e[r];
        if (i) {
            const o = {
                name: r,
                def: s,
                recreate: !1,
                del: [],
                add: [],
                change: []
            };
            if ("" + (i.primKey.keyPath || "") != "" + (s.primKey.keyPath || "") || i.primKey.auto !== s.primKey.auto && !Hs)
                o.recreate = !0,
                n.change.push(o);
            else {
                const a = i.idxByName
                  , u = s.idxByName;
                let c;
                for (c in a)
                    u[c] || o.del.push(c);
                for (c in u) {
                    const l = a[c]
                      , d = u[c];
                    l ? l.src !== d.src && o.change.push(d) : o.add.push(d)
                }
                (o.del.length > 0 || o.add.length > 0 || o.change.length > 0) && n.change.push(o)
            }
        } else
            n.add.push([r, s])
    }
    return n
}
function uo(t, e, n, r) {
    const i = t.db.createObjectStore(e, n.keyPath ? {
        keyPath: n.keyPath,
        autoIncrement: n.auto
    } : {
        autoIncrement: n.auto
    });
    return r.forEach(s=>ea(i, s)),
    i
}
function ea(t, e) {
    t.createIndex(e.name, e.keyPath, {
        unique: e.unique,
        multiEntry: e.multi
    })
}
function ta(t, e, n) {
    const r = {};
    return As(e.objectStoreNames, 0).forEach(i=>{
        const s = n.objectStore(i);
        let o = s.keyPath;
        const a = Wo(hl(o), o || "", !1, !1, !!s.autoIncrement, o && typeof o != "string", !0)
          , u = [];
        for (let l = 0; l < s.indexNames.length; ++l) {
            const d = s.index(s.indexNames[l]);
            o = d.keyPath;
            var c = Wo(d.name, o, !!d.unique, !!d.multiEntry, !1, o && typeof o != "string", !1);
            u.push(c)
        }
        r[i] = pl(i, a, u)
    }
    ),
    r
}
function na(t, e, n) {
    const r = n.db.objectStoreNames;
    for (let i = 0; i < r.length; ++i) {
        const s = r[i]
          , o = n.objectStore(s);
        t._hasGetAll = "getAll"in o;
        for (let a = 0; a < o.indexNames.length; ++a) {
            const u = o.indexNames[a]
              , c = o.index(u).keyPath
              , l = typeof c == "string" ? c : "[" + As(c).join("+") + "]";
            if (e[s]) {
                const d = e[s].idxByName[l];
                d && (d.name = u,
                delete e[s].idxByName[l],
                e[s].idxByName[u] = d)
            }
        }
    }
    typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && ut.WorkerGlobalScope && ut instanceof ut.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (t._hasGetAll = !1)
}
class uy {
    _parseStoresSpec(e, n) {
        it(e).forEach(r=>{
            if (e[r] !== null) {
                var i = e[r].split(",").map((o,a)=>{
                    const u = (o = o.trim()).replace(/([&*]|\+\+)/g, "")
                      , c = /^\[/.test(u) ? u.match(/^\[(.*)\]$/)[1].split("+") : u;
                    return Wo(u, c || null, /\&/.test(o), /\*/.test(o), /\+\+/.test(o), dt(c), a === 0)
                }
                )
                  , s = i.shift();
                if (s.multi)
                    throw new ae.Schema("Primary key cannot be multi-valued");
                i.forEach(o=>{
                    if (o.auto)
                        throw new ae.Schema("Only primary key can be marked as autoIncrement (++)");
                    if (!o.keyPath)
                        throw new ae.Schema("Index must have a name and cannot be an empty string")
                }
                ),
                n[r] = pl(r, s, i)
            }
        }
        )
    }
    stores(e) {
        const n = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? Mt(this._cfg.storesSource, e) : e;
        const r = n._versions
          , i = {};
        let s = {};
        return r.forEach(o=>{
            Mt(i, o._cfg.storesSource),
            s = o._cfg.dbschema = {},
            o._parseStoresSpec(i, s)
        }
        ),
        n._dbSchema = s,
        Qo(n, [n._allTables, n, n.Transaction.prototype]),
        Ds(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], it(s), s),
        n._storeNames = it(s),
        this
    }
    upgrade(e) {
        return this._cfg.contentUpgrade = Na(this._cfg.contentUpgrade || Le, e),
        this
    }
}
function Pa(t, e) {
    let n = t._dbNamesDB;
    return n || (n = t._dbNamesDB = new Qe("__dbnames",{
        addons: [],
        indexedDB: t,
        IDBKeyRange: e
    }),
    n.version(1).stores({
        dbnames: "name"
    })),
    n.table("dbnames")
}
function Ca(t) {
    return t && typeof t.databases == "function"
}
function ra(t) {
    return Mn(function() {
        return X.letThrough = !0,
        t()
    })
}
function ly() {
    var t;
    return !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(e) {
        var n = function() {
            return indexedDB.databases().finally(e)
        };
        t = setInterval(n, 100),
        n()
    }
    ).finally(function() {
        return clearInterval(t)
    }) : Promise.resolve()
}
function ja(t) {
    return !("from"in t)
}
const At = function(t, e) {
    if (!this) {
        const n = new At;
        return t && "d"in t && Mt(n, t),
        n
    }
    Mt(this, arguments.length ? {
        d: 1,
        from: t,
        to: arguments.length > 1 ? e : t
    } : {
        d: 0
    })
};
function Pi(t, e, n) {
    const r = Ie(e, n);
    if (isNaN(r))
        return;
    if (r > 0)
        throw RangeError();
    if (ja(t))
        return Mt(t, {
            from: e,
            to: n,
            d: 1
        });
    const i = t.l
      , s = t.r;
    if (Ie(n, t.from) < 0)
        return i ? Pi(i, e, n) : t.l = {
            from: e,
            to: n,
            d: 1,
            l: null,
            r: null
        },
        Rc(t);
    if (Ie(e, t.to) > 0)
        return s ? Pi(s, e, n) : t.r = {
            from: e,
            to: n,
            d: 1,
            l: null,
            r: null
        },
        Rc(t);
    Ie(e, t.from) < 0 && (t.from = e,
    t.l = null,
    t.d = s ? s.d + 1 : 1),
    Ie(n, t.to) > 0 && (t.to = n,
    t.r = null,
    t.d = t.l ? t.l.d + 1 : 1);
    const o = !t.r;
    i && !t.l && Bs(t, i),
    s && o && Bs(t, s)
}
function Bs(t, e) {
    ja(e) || function n(r, {from: i, to: s, l: o, r: a}) {
        Pi(r, i, s),
        o && n(r, o),
        a && n(r, a)
    }(t, e)
}
function ia(t, e) {
    const n = sa(e);
    let r = n.next();
    if (r.done)
        return !1;
    let i = r.value;
    const s = sa(t);
    let o = s.next(i.from)
      , a = o.value;
    for (; !r.done && !o.done; ) {
        if (Ie(a.from, i.to) <= 0 && Ie(a.to, i.from) >= 0)
            return !0;
        Ie(i.from, a.from) < 0 ? i = (r = n.next(a.from)).value : a = (o = s.next(i.from)).value
    }
    return !1
}
function sa(t) {
    let e = ja(t) ? null : {
        s: 0,
        n: t
    };
    return {
        next(n) {
            const r = arguments.length > 0;
            for (; e; )
                switch (e.s) {
                case 0:
                    if (e.s = 1,
                    r)
                        for (; e.n.l && Ie(n, e.n.from) < 0; )
                            e = {
                                up: e,
                                n: e.n.l,
                                s: 1
                            };
                    else
                        for (; e.n.l; )
                            e = {
                                up: e,
                                n: e.n.l,
                                s: 1
                            };
                case 1:
                    if (e.s = 2,
                    !r || Ie(n, e.n.to) <= 0)
                        return {
                            value: e.n,
                            done: !1
                        };
                case 2:
                    if (e.n.r) {
                        e.s = 3,
                        e = {
                            up: e,
                            n: e.n.r,
                            s: 0
                        };
                        continue
                    }
                case 3:
                    e = e.up
                }
            return {
                done: !0
            }
        }
    }
}
function Rc(t) {
    var e, n;
    const r = (((e = t.r) === null || e === void 0 ? void 0 : e.d) || 0) - (((n = t.l) === null || n === void 0 ? void 0 : n.d) || 0)
      , i = r > 1 ? "r" : r < -1 ? "l" : "";
    if (i) {
        const s = i === "r" ? "l" : "r"
          , o = {
            ...t
        }
          , a = t[i];
        t.from = a.from,
        t.to = a.to,
        t[i] = a[i],
        o[i] = a[s],
        t[s] = o,
        o.d = Ic(o)
    }
    t.d = Ic(t)
}
function Ic({r: t, l: e}) {
    return (t ? e ? Math.max(t.d, e.d) : t.d : e ? e.d : 0) + 1
}
function zs(t, e) {
    return it(e).forEach(n=>{
        t[n] ? Bs(t[n], e[n]) : t[n] = Xu(e[n])
    }
    ),
    t
}
function yl(t, e) {
    return Object.keys(t).some(n=>e[n] && ia(e[n], t[n]))
}
Ur(At.prototype, {
    add(t) {
        return Bs(this, t),
        this
    },
    addKey(t) {
        return Pi(this, t, t),
        this
    },
    addKeys(t) {
        return t.forEach(e=>Pi(this, e, e)),
        this
    },
    [Fo]() {
        return sa(this)
    }
});
const wr = {};
let lo = {}
  , fo = !1;
function ho(t) {
    zs(lo, t),
    fo || (fo = !0,
    queueMicrotask(()=>{
        fo = !1;
        const e = lo;
        lo = {},
        Da(e)
    }
    ))
}
function Da(t, e=!1) {
    const n = new Set;
    for (const r in t) {
        const i = /^idb\:\/\/(.*)\/(.*)\//.exec(r);
        if (i) {
            const [,s,o] = i
              , a = wr[`idb://${s}/${o}`];
            a && fy(a, t, n, e)
        }
    }
    n.forEach(r=>r())
}
function fy(t, e, n, r) {
    const i = r && [];
    for (const [s,o] of Object.entries(t.queries.query)) {
        const a = r && [];
        for (const u of o)
            u.obsSet && yl(e, u.obsSet) ? u.subscribers.forEach(c=>n.add(c)) : r && a.push(u);
        r && i.push([s, a])
    }
    if (r)
        for (const [s,o] of i)
            t.queries.query[s] = o
}
function dy(t) {
    const e = t._state
      , {indexedDB: n} = t._deps;
    if (e.isBeingOpened || t.idbdb)
        return e.dbReadyPromise.then(()=>e.dbOpenError ? nt(e.dbOpenError) : t);
    Sn && (e.openCanceller._stackHolder = ur()),
    e.isBeingOpened = !0,
    e.dbOpenError = null,
    e.openComplete = !1;
    const r = e.openCanceller;
    function i() {
        if (e.openCanceller !== r)
            throw new ae.DatabaseClosed("db.open() was cancelled")
    }
    let s = e.dbReadyResolve
      , o = null
      , a = !1;
    return H.race([r, (typeof navigator > "u" ? H.resolve() : ly()).then(()=>new H((u,c)=>{
        if (i(),
        !n)
            throw new ae.MissingAPI;
        const l = t.name
          , d = n.open(l);
        if (!d)
            throw new ae.MissingAPI;
        d.onerror = on(c),
        d.onblocked = Ye(t._fireOnBlocked),
        d.onupgradeneeded = Ye(h=>{
            if (o = d.transaction,
            e.autoSchema && !t._options.allowEmptyDB) {
                d.onerror = Ri,
                o.abort(),
                d.result.close();
                const _ = n.deleteDatabase(l);
                _.onsuccess = _.onerror = Ye(()=>{
                    c(new ae.NoSuchDatabase(`Database ${l} doesnt exist`))
                }
                )
            } else {
                o.onerror = on(c);
                var g = h.oldVersion > Math.pow(2, 62) ? 0 : h.oldVersion;
                a = g < 1,
                t.idbdb = d.result,
                cy(t, g / 10, o, c)
            }
        }
        , c),
        d.onsuccess = Ye(()=>{
            o = null;
            const h = t.idbdb = d.result
              , g = As(h.objectStoreNames);
            if (g.length > 0)
                try {
                    const b = h.transaction((_ = g).length === 1 ? _[0] : _, "readonly");
                    e.autoSchema ? function(x, E, S) {
                        x.verno = E.version / 10;
                        const k = x._dbSchema = ta(0, E, S);
                        x._storeNames = As(E.objectStoreNames, 0),
                        Ds(x, [x._allTables], it(k), k)
                    }(t, h, b) : (na(t, t._dbSchema, b),
                    function(x, E) {
                        const S = ml(ta(0, x.idbdb, E), x._dbSchema);
                        return !(S.add.length || S.change.some(k=>k.add.length || k.change.length))
                    }(t, b) || console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),
                    Xo(t, b)
                } catch {}
            var _;
            ci.push(t),
            h.onversionchange = Ye(b=>{
                e.vcFired = !0,
                t.on("versionchange").fire(b)
            }
            ),
            h.onclose = Ye(b=>{
                t.on("close").fire(b)
            }
            ),
            a && function({indexedDB: b, IDBKeyRange: x}, E) {
                !Ca(b) && E !== "__dbnames" && Pa(b, x).put({
                    name: E
                }).catch(Le)
            }(t._deps, l),
            u()
        }
        , c)
    }
    ))]).then(()=>(i(),
    e.onReadyBeingFired = [],
    H.resolve(ra(()=>t.on.ready.fire(t.vip))).then(function u() {
        if (e.onReadyBeingFired.length > 0) {
            let c = e.onReadyBeingFired.reduce(Na, Le);
            return e.onReadyBeingFired = [],
            H.resolve(ra(()=>c(t.vip))).then(u)
        }
    }))).finally(()=>{
        e.openCanceller === r && (e.onReadyBeingFired = null,
        e.isBeingOpened = !1)
    }
    ).catch(u=>{
        e.dbOpenError = u;
        try {
            o && o.abort()
        } catch {}
        return r === e.openCanceller && t._close(),
        nt(u)
    }
    ).finally(()=>{
        e.openComplete = !0,
        s()
    }
    ).then(()=>{
        if (a) {
            const u = {};
            t.tables.forEach(c=>{
                c.schema.indexes.forEach(l=>{
                    l.name && (u[`idb://${t.name}/${c.name}/${l.name}`] = new At(-1 / 0,[[[]]]))
                }
                ),
                u[`idb://${t.name}/${c.name}/`] = u[`idb://${t.name}/${c.name}/:dels`] = new At(-1 / 0,[[[]]])
            }
            ),
            En("storagemutated").fire(u),
            Da(u, !0)
        }
        return t
    }
    )
}
function oa(t) {
    var e = s=>t.next(s)
      , n = i(e)
      , r = i(s=>t.throw(s));
    function i(s) {
        return o=>{
            var a = s(o)
              , u = a.value;
            return a.done ? u : u && typeof u.then == "function" ? u.then(n, r) : dt(u) ? Promise.all(u).then(n, r) : n(u)
        }
    }
    return i(e)()
}
function hy(t, e, n) {
    var r = arguments.length;
    if (r < 2)
        throw new ae.InvalidArgument("Too few arguments");
    for (var i = new Array(r - 1); --r; )
        i[r - 1] = arguments[r];
    n = i.pop();
    var s = Wu(i);
    return [t, s, n]
}
function gl(t, e, n, r, i) {
    return H.resolve().then(()=>{
        const s = X.transless || X
          , o = t._createTransaction(e, n, t._dbSchema, r);
        o.explicit = !0;
        const a = {
            trans: o,
            transless: s
        };
        if (r)
            o.idbtrans = r.idbtrans;
        else
            try {
                o.create(),
                t._state.PR1398_maxLoop = 3
            } catch (d) {
                return d.name === Oa.InvalidState && t.isOpen() && --t._state.PR1398_maxLoop > 0 ? (console.warn("Dexie: Need to reopen db"),
                t._close(),
                t.open().then(()=>gl(t, e, n, null, i))) : nt(d)
            }
        const u = xa(i);
        let c;
        u && Zr();
        const l = H.follow(()=>{
            if (c = i.call(o, o),
            c)
                if (u) {
                    var d = Un.bind(null, null);
                    c.then(d, d)
                } else
                    typeof c.next == "function" && typeof c.throw == "function" && (c = oa(c))
        }
        , a);
        return (c && typeof c.then == "function" ? H.resolve(c).then(d=>o.active ? d : nt(new ae.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))) : l.then(()=>c)).then(d=>(r && o._resolve(),
        o._completion.then(()=>d))).catch(d=>(o._reject(d),
        nt(d)))
    }
    )
}
function Xi(t, e, n) {
    const r = dt(t) ? t.slice() : [t];
    for (let i = 0; i < n; ++i)
        r.push(e);
    return r
}
const py = {
    stack: "dbcore",
    name: "VirtualIndexMiddleware",
    level: 1,
    create: function(t) {
        return {
            ...t,
            table(e) {
                const n = t.table(e)
                  , {schema: r} = n
                  , i = {}
                  , s = [];
                function o(l, d, h) {
                    const g = li(l)
                      , _ = i[g] = i[g] || []
                      , b = l == null ? 0 : typeof l == "string" ? 1 : l.length
                      , x = d > 0
                      , E = {
                        ...h,
                        name: x ? `${g}(virtual-from:${h.name})` : h.name,
                        lowLevelIndex: h,
                        isVirtual: x,
                        keyTail: d,
                        keyLength: b,
                        extractKey: Jo(l),
                        unique: !x && h.unique
                    };
                    return _.push(E),
                    E.isPrimaryKey || s.push(E),
                    b > 1 && o(b === 2 ? l[0] : l.slice(0, b - 1), d + 1, h),
                    _.sort((S,k)=>S.keyTail - k.keyTail),
                    E
                }
                const a = o(r.primaryKey.keyPath, 0, r.primaryKey);
                i[":id"] = [a];
                for (const l of r.indexes)
                    o(l.keyPath, 0, l);
                function u(l) {
                    const d = l.query.index;
                    return d.isVirtual ? {
                        ...l,
                        query: {
                            index: d.lowLevelIndex,
                            range: (h = l.query.range,
                            g = d.keyTail,
                            {
                                type: h.type === 1 ? 2 : h.type,
                                lower: Xi(h.lower, h.lowerOpen ? t.MAX_KEY : t.MIN_KEY, g),
                                lowerOpen: !0,
                                upper: Xi(h.upper, h.upperOpen ? t.MIN_KEY : t.MAX_KEY, g),
                                upperOpen: !0
                            })
                        }
                    } : l;
                    var h, g
                }
                return {
                    ...n,
                    schema: {
                        ...r,
                        primaryKey: a,
                        indexes: s,
                        getIndexByKeyPath: function(l) {
                            const d = i[li(l)];
                            return d && d[0]
                        }
                    },
                    count: l=>n.count(u(l)),
                    query: l=>n.query(u(l)),
                    openCursor(l) {
                        const {keyTail: d, isVirtual: h, keyLength: g} = l.query.index;
                        return h ? n.openCursor(u(l)).then(_=>_ && function(b) {
                            return Object.create(b, {
                                continue: {
                                    value: function(E) {
                                        E != null ? b.continue(Xi(E, l.reverse ? t.MAX_KEY : t.MIN_KEY, d)) : l.unique ? b.continue(b.key.slice(0, g).concat(l.reverse ? t.MIN_KEY : t.MAX_KEY, d)) : b.continue()
                                    }
                                },
                                continuePrimaryKey: {
                                    value(E, S) {
                                        b.continuePrimaryKey(Xi(E, t.MAX_KEY, d), S)
                                    }
                                },
                                primaryKey: {
                                    get: ()=>b.primaryKey
                                },
                                key: {
                                    get() {
                                        const E = b.key;
                                        return g === 1 ? E[0] : E.slice(0, g)
                                    }
                                },
                                value: {
                                    get: ()=>b.value
                                }
                            })
                        }(_)) : n.openCursor(l)
                    }
                }
            }
        }
    }
};
function Ba(t, e, n, r) {
    return n = n || {},
    r = r || "",
    it(t).forEach(i=>{
        if (Rt(e, i)) {
            var s = t[i]
              , o = e[i];
            if (typeof s == "object" && typeof o == "object" && s && o) {
                const a = Uo(s);
                a !== Uo(o) ? n[r + i] = e[i] : a === "Object" ? Ba(s, o, n, r + i + ".") : s !== o && (n[r + i] = e[i])
            } else
                s !== o && (n[r + i] = e[i])
        } else
            n[r + i] = void 0
    }
    ),
    it(e).forEach(i=>{
        Rt(t, i) || (n[r + i] = e[i])
    }
    ),
    n
}
function $a(t, e) {
    return e.type === "delete" ? e.keys : e.keys || e.values.map(t.extractKey)
}
const my = {
    stack: "dbcore",
    name: "HooksMiddleware",
    level: 2,
    create: t=>({
        ...t,
        table(e) {
            const n = t.table(e)
              , {primaryKey: r} = n.schema;
            return {
                ...n,
                mutate(s) {
                    const o = X.trans
                      , {deleting: a, creating: u, updating: c} = o.table(e).hook;
                    switch (s.type) {
                    case "add":
                        if (u.fire === Le)
                            break;
                        return o._promise("readwrite", ()=>l(s), !0);
                    case "put":
                        if (u.fire === Le && c.fire === Le)
                            break;
                        return o._promise("readwrite", ()=>l(s), !0);
                    case "delete":
                        if (a.fire === Le)
                            break;
                        return o._promise("readwrite", ()=>l(s), !0);
                    case "deleteRange":
                        if (a.fire === Le)
                            break;
                        return o._promise("readwrite", ()=>function(h) {
                            return d(h.trans, h.range, 1e4)
                        }(s), !0)
                    }
                    return n.mutate(s);
                    function l(h) {
                        const g = X.trans
                          , _ = h.keys || $a(r, h);
                        if (!_)
                            throw new Error("Keys missing");
                        return (h = h.type === "add" || h.type === "put" ? {
                            ...h,
                            keys: _
                        } : {
                            ...h
                        }).type !== "delete" && (h.values = [...h.values]),
                        h.keys && (h.keys = [...h.keys]),
                        function(b, x, E) {
                            return x.type === "add" ? Promise.resolve([]) : b.getMany({
                                trans: x.trans,
                                keys: E,
                                cache: "immutable"
                            })
                        }(n, h, _).then(b=>{
                            const x = _.map((E,S)=>{
                                const k = b[S]
                                  , B = {
                                    onerror: null,
                                    onsuccess: null
                                };
                                if (h.type === "delete")
                                    a.fire.call(B, E, k, g);
                                else if (h.type === "add" || k === void 0) {
                                    const I = u.fire.call(B, E, h.values[S], g);
                                    E == null && I != null && (E = I,
                                    h.keys[S] = E,
                                    r.outbound || Yt(h.values[S], r.keyPath, E))
                                } else {
                                    const I = Ba(k, h.values[S])
                                      , A = c.fire.call(B, I, E, k, g);
                                    if (A) {
                                        const C = h.values[S];
                                        Object.keys(A).forEach(M=>{
                                            Rt(C, M) ? C[M] = A[M] : Yt(C, M, A[M])
                                        }
                                        )
                                    }
                                }
                                return B
                            }
                            );
                            return n.mutate(h).then(({failures: E, results: S, numFailures: k, lastResult: B})=>{
                                for (let I = 0; I < _.length; ++I) {
                                    const A = S ? S[I] : _[I]
                                      , C = x[I];
                                    A == null ? C.onerror && C.onerror(E[I]) : C.onsuccess && C.onsuccess(h.type === "put" && b[I] ? h.values[I] : A)
                                }
                                return {
                                    failures: E,
                                    results: S,
                                    numFailures: k,
                                    lastResult: B
                                }
                            }
                            ).catch(E=>(x.forEach(S=>S.onerror && S.onerror(E)),
                            Promise.reject(E)))
                        }
                        )
                    }
                    function d(h, g, _) {
                        return n.query({
                            trans: h,
                            values: !1,
                            query: {
                                index: r,
                                range: g
                            },
                            limit: _
                        }).then(({result: b})=>l({
                            type: "delete",
                            keys: b,
                            trans: h
                        }).then(x=>x.numFailures > 0 ? Promise.reject(x.failures[0]) : b.length < _ ? {
                            failures: [],
                            numFailures: 0,
                            lastResult: void 0
                        } : d(h, {
                            ...g,
                            lower: b[b.length - 1],
                            lowerOpen: !0
                        }, _)))
                    }
                }
            }
        }
    })
};
function _l(t, e, n) {
    try {
        if (!e || e.keys.length < t.length)
            return null;
        const r = [];
        for (let i = 0, s = 0; i < e.keys.length && s < t.length; ++i)
            Ie(e.keys[i], t[s]) === 0 && (r.push(n ? Ln(e.values[i]) : e.values[i]),
            ++s);
        return r.length === t.length ? r : null
    } catch {
        return null
    }
}
const yy = {
    stack: "dbcore",
    level: -1,
    create: t=>({
        table: e=>{
            const n = t.table(e);
            return {
                ...n,
                getMany: r=>{
                    if (!r.cache)
                        return n.getMany(r);
                    const i = _l(r.keys, r.trans._cache, r.cache === "clone");
                    return i ? H.resolve(i) : n.getMany(r).then(s=>(r.trans._cache = {
                        keys: r.keys,
                        values: r.cache === "clone" ? Ln(s) : s
                    },
                    s))
                }
                ,
                mutate: r=>(r.type !== "add" && (r.trans._cache = null),
                n.mutate(r))
            }
        }
    })
};
function vl(t, e) {
    return t.trans.mode === "readonly" && !!t.subscr && !t.trans.explicit && t.trans.db._options.cache !== "disabled" && !e.schema.primaryKey.outbound
}
function bl(t, e) {
    switch (t) {
    case "query":
        return e.values && !e.unique;
    case "get":
    case "getMany":
    case "count":
    case "openCursor":
        return !1
    }
}
const gy = {
    stack: "dbcore",
    level: 0,
    name: "Observability",
    create: t=>{
        const e = t.schema.name
          , n = new At(t.MIN_KEY,t.MAX_KEY);
        return {
            ...t,
            transaction: (r,i,s)=>{
                if (X.subscr && i !== "readonly")
                    throw new ae.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: ${X.querier}`);
                return t.transaction(r, i, s)
            }
            ,
            table: r=>{
                const i = t.table(r)
                  , {schema: s} = i
                  , {primaryKey: o} = s
                  , {extractKey: a, outbound: u} = o
                  , c = {
                    ...i,
                    mutate: h=>{
                        const g = h.trans
                          , _ = h.mutatedParts || (h.mutatedParts = {})
                          , b = A=>{
                            const C = `idb://${e}/${r}/${A}`;
                            return _[C] || (_[C] = new At)
                        }
                          , x = b("")
                          , E = b(":dels")
                          , {type: S} = h;
                        let[k,B] = h.type === "deleteRange" ? [h.range] : h.type === "delete" ? [h.keys] : h.values.length < 50 ? [$a(o, h).filter(A=>A), h.values] : [];
                        const I = h.trans._cache;
                        if (dt(k)) {
                            x.addKeys(k);
                            const A = S === "delete" || k.length === B.length ? _l(k, I) : null;
                            A || S === "add" || E.addKeys(k),
                            (A || B) && function(C, M, v, y) {
                                function N(O) {
                                    const te = C(O.name || "");
                                    function z(P) {
                                        return P != null ? O.extractKey(P) : null
                                    }
                                    const pe = P=>O.multiEntry && dt(P) ? P.forEach(W=>te.addKey(W)) : te.addKey(P);
                                    (v || y).forEach((P,W)=>{
                                        const ve = v && z(v[W])
                                          , tt = y && z(y[W]);
                                        Ie(ve, tt) !== 0 && (ve != null && pe(ve),
                                        tt != null && pe(tt))
                                    }
                                    )
                                }
                                M.indexes.forEach(N)
                            }(b, s, A, B)
                        } else if (k) {
                            const A = {
                                from: k.lower,
                                to: k.upper
                            };
                            E.add(A),
                            x.add(A)
                        } else
                            x.add(n),
                            E.add(n),
                            s.indexes.forEach(A=>b(A.name).add(n));
                        return i.mutate(h).then(A=>(!k || h.type !== "add" && h.type !== "put" || x.addKeys(A.results),
                        g.mutatedParts = zs(g.mutatedParts || {}, _),
                        A))
                    }
                }
                  , l = ({query: {index: h, range: g}})=>{
                    var _, b;
                    return [h, new At((_ = g.lower) !== null && _ !== void 0 ? _ : t.MIN_KEY,(b = g.upper) !== null && b !== void 0 ? b : t.MAX_KEY)]
                }
                  , d = {
                    get: h=>[o, new At(h.key)],
                    getMany: h=>[o, new At().addKeys(h.keys)],
                    count: l,
                    query: l,
                    openCursor: l
                };
                return it(d).forEach(h=>{
                    c[h] = function(g) {
                        const {subscr: _} = X
                          , b = !!_
                          , E = vl(X, i) && bl(h, g) ? g.obsSet = {} : _;
                        if (b) {
                            const S = C=>{
                                const M = `idb://${e}/${r}/${C}`;
                                return E[M] || (E[M] = new At)
                            }
                              , k = S("")
                              , B = S(":dels")
                              , [I,A] = d[h](g);
                            if (S(I.name || "").add(A),
                            !I.isPrimaryKey) {
                                if (h !== "count") {
                                    const C = h === "query" && u && g.values && i.query({
                                        ...g,
                                        values: !1
                                    });
                                    return i[h].apply(this, arguments).then(M=>{
                                        if (h === "query") {
                                            if (u && g.values)
                                                return C.then(({result: y})=>(k.addKeys(y),
                                                M));
                                            const v = g.values ? M.result.map(a) : M.result;
                                            g.values ? k.addKeys(v) : B.addKeys(v)
                                        } else if (h === "openCursor") {
                                            const v = M
                                              , y = g.values;
                                            return v && Object.create(v, {
                                                key: {
                                                    get: ()=>(B.addKey(v.primaryKey),
                                                    v.key)
                                                },
                                                primaryKey: {
                                                    get() {
                                                        const N = v.primaryKey;
                                                        return B.addKey(N),
                                                        N
                                                    }
                                                },
                                                value: {
                                                    get: ()=>(y && k.addKey(v.primaryKey),
                                                    v.value)
                                                }
                                            })
                                        }
                                        return M
                                    }
                                    )
                                }
                                B.add(n)
                            }
                        }
                        return i[h].apply(this, arguments)
                    }
                }
                ),
                c
            }
        }
    }
};
function Pc(t, e) {
    return function(n, r) {
        return r.lower === void 0 || (r.lowerOpen ? Ie(n, r.lower) > 0 : Ie(n, r.lower) >= 0)
    }(t, e) && function(n, r) {
        return r.upper === void 0 || (r.upperOpen ? Ie(n, r.upper) < 0 : Ie(n, r.upper) <= 0)
    }(t, e)
}
function Cc(t, e, n, r, i, s) {
    if (!n || n.length === 0)
        return t;
    const o = e.query.index
      , a = r.schema.primaryKey.extractKey
      , u = o.extractKey
      , c = (o.lowLevelIndex || o).extractKey;
    let l = n.reduce((d,h)=>{
        let g = d;
        const _ = h.type === "add" || h.type === "put" ? h.values.filter(b=>Pc(u(b), e.query.range)).map(b=>(b = Ln(b),
        s && Object.freeze(b),
        b)) : [];
        switch (h.type) {
        case "add":
            g = d.concat(e.values ? _ : _.map(S=>a(S)));
            break;
        case "put":
            const b = new At().addKeys(h.values.map(S=>a(S)));
            g = d.filter(S=>{
                const k = e.values ? a(S) : S;
                return !ia(new At(k), b)
            }
            ).concat(e.values ? _ : _.map(S=>a(S)));
            break;
        case "delete":
            const x = new At().addKeys(h.keys);
            g = d.filter(S=>{
                const k = e.values ? a(S) : S;
                return !ia(new At(k), x)
            }
            );
            break;
        case "deleteRange":
            const E = h.range;
            g = d.filter(S=>!Pc(a(S), E))
        }
        return g
    }
    , t);
    return l === t ? t : (l.sort((d,h)=>Ie(c(d), c(h)) || Ie(a(d), a(h))),
    e.limit && e.limit < 1 / 0 && (l.length > e.limit ? l.length = e.limit : t.length === e.limit && l.length < e.limit && (i.dirty = !0)),
    s ? Object.freeze(l) : l)
}
function jc(t, e) {
    return Ie(t.lower, e.lower) === 0 && Ie(t.upper, e.upper) === 0 && !!t.lowerOpen == !!e.lowerOpen && !!t.upperOpen == !!e.upperOpen
}
function _y(t, e) {
    return function(n, r, i, s) {
        if (n === void 0)
            return r !== void 0 ? -1 : 0;
        if (r === void 0)
            return 1;
        const o = Ie(n, r);
        if (o === 0) {
            if (i && s)
                return 0;
            if (i)
                return 1;
            if (s)
                return -1
        }
        return o
    }(t.lower, e.lower, t.lowerOpen, e.lowerOpen) <= 0 && function(n, r, i, s) {
        if (n === void 0)
            return r !== void 0 ? 1 : 0;
        if (r === void 0)
            return -1;
        const o = Ie(n, r);
        if (o === 0) {
            if (i && s)
                return 0;
            if (i)
                return -1;
            if (s)
                return 1
        }
        return o
    }(t.upper, e.upper, t.upperOpen, e.upperOpen) >= 0
}
function vy(t, e, n, r) {
    t.subscribers.add(n),
    r.addEventListener("abort", ()=>{
        t.subscribers.delete(n),
        t.subscribers.size === 0 && function(i, s) {
            setTimeout(()=>{
                i.subscribers.size === 0 && Qr(s, i)
            }
            , 3e3)
        }(t, e)
    }
    )
}
const by = {
    stack: "dbcore",
    level: 0,
    name: "Cache",
    create: t=>{
        const e = t.schema.name;
        return {
            ...t,
            transaction: (r,i,s)=>{
                const o = t.transaction(r, i, s);
                if (i === "readwrite") {
                    const a = new AbortController
                      , {signal: u} = a
                      , c = l=>()=>{
                        if (a.abort(),
                        i === "readwrite") {
                            const d = new Set;
                            for (const h of r) {
                                const g = wr[`idb://${e}/${h}`]
                                  , _ = t.table(h);
                                if (g) {
                                    const b = g.optimisticOps.filter(x=>x.trans === o);
                                    if (b.length > 0) {
                                        g.optimisticOps = g.optimisticOps.filter(x=>x.trans !== o);
                                        for (const x of Object.values(g.queries.query))
                                            for (const E of x.slice())
                                                if (E.res != null && o.mutatedParts)
                                                    if (l && !E.dirty) {
                                                        const S = Object.isFrozen(E.res)
                                                          , k = Cc(E.res, E.req, b, _, E, S);
                                                        E.dirty ? (Qr(x, E),
                                                        E.subscribers.forEach(B=>d.add(B))) : k !== E.res && (E.res = k,
                                                        E.promise = H.resolve({
                                                            result: k
                                                        }))
                                                    } else
                                                        E.dirty && Qr(x, E),
                                                        E.subscribers.forEach(S=>d.add(S))
                                    }
                                }
                            }
                            d.forEach(h=>h())
                        }
                    }
                    ;
                    o.addEventListener("abort", c(!1), {
                        signal: u
                    }),
                    o.addEventListener("error", c(!1), {
                        signal: u
                    }),
                    o.addEventListener("complete", c(!0), {
                        signal: u
                    })
                }
                return o
            }
            ,
            table(r) {
                const i = t.table(r)
                  , s = i.schema.primaryKey;
                return {
                    ...i,
                    mutate(a) {
                        if (s.outbound || X.trans.db._options.cache === "disabled")
                            return i.mutate(a);
                        const u = wr[`idb://${e}/${r}`];
                        if (!u)
                            return i.mutate(a);
                        const c = i.mutate(a);
                        return a.type !== "add" && a.type !== "put" || !(a.values.length >= 50 || $a(s, a).some(l=>l == null)) ? (u.optimisticOps.push(a),
                        ho(a.mutatedParts),
                        c.catch(()=>{
                            Qr(u.optimisticOps, a),
                            ho(a.mutatedParts)
                        }
                        )) : c.then(l=>{
                            const d = {
                                ...a,
                                values: a.values.map((h,g)=>{
                                    const _ = s.keyPath.includes(".") ? Ln(h) : {
                                        ...h
                                    };
                                    return Yt(_, s.keyPath, l.results[g]),
                                    _
                                }
                                )
                            };
                            u.optimisticOps.push(d),
                            queueMicrotask(()=>ho(a.mutatedParts))
                        }
                        ),
                        c
                    },
                    query(a) {
                        if (!vl(X, i) || !bl("query", a))
                            return i.query(a);
                        const u = X.trans.db._options.cache === "immutable"
                          , {requery: c, signal: l} = X;
                        let[d,h,g,_] = function(b, x, E, S) {
                            const k = wr[`idb://${b}/${x}`];
                            if (!k)
                                return [];
                            const B = k.queries[E];
                            if (!B)
                                return [null, !1, k, null];
                            const I = B[(S.query ? S.query.index.name : null) || ""];
                            if (!I)
                                return [null, !1, k, null];
                            switch (E) {
                            case "query":
                                const A = I.find(M=>M.req.limit === S.limit && M.req.values === S.values && jc(M.req.query.range, S.query.range));
                                return A ? [A, !0, k, I] : [I.find(M=>("limit"in M.req ? M.req.limit : 1 / 0) >= S.limit && (!S.values || M.req.values) && _y(M.req.query.range, S.query.range)), !1, k, I];
                            case "count":
                                const C = I.find(M=>jc(M.req.query.range, S.query.range));
                                return [C, !!C, k, I]
                            }
                        }(e, r, "query", a);
                        if (d && h)
                            d.obsSet = a.obsSet;
                        else {
                            const b = i.query(a).then(x=>{
                                const E = x.result;
                                if (d.res = E,
                                u) {
                                    for (let S = 0, k = E.length; S < k; ++S)
                                        Object.freeze(E[S]);
                                    Object.freeze(E)
                                } else
                                    x.result = Ln(E);
                                return x
                            }
                            ).catch(x=>(_ && d && Qr(_, d),
                            Promise.reject(x)));
                            d = {
                                obsSet: a.obsSet,
                                promise: b,
                                subscribers: new Set,
                                type: "query",
                                req: a,
                                dirty: !1
                            },
                            _ ? _.push(d) : (_ = [d],
                            g || (g = wr[`idb://${e}/${r}`] = {
                                queries: {
                                    query: {},
                                    count: {}
                                },
                                objs: new Map,
                                optimisticOps: [],
                                unsignaledParts: {}
                            }),
                            g.queries.query[a.query.index.name || ""] = _)
                        }
                        return vy(d, _, c, l),
                        d.promise.then(b=>({
                            result: Cc(b.result, a, g == null ? void 0 : g.optimisticOps, i, d, u)
                        }))
                    }
                }
            }
        }
    }
};
function Qi(t, e) {
    return new Proxy(t,{
        get: (n,r,i)=>r === "db" ? e : Reflect.get(n, r, i)
    })
}
class Qe {
    constructor(e, n) {
        this._middlewares = {},
        this.verno = 0;
        const r = Qe.dependencies;
        this._options = n = {
            addons: Qe.addons,
            autoOpen: !0,
            indexedDB: r.indexedDB,
            IDBKeyRange: r.IDBKeyRange,
            cache: "cloned",
            ...n
        },
        this._deps = {
            indexedDB: n.indexedDB,
            IDBKeyRange: n.IDBKeyRange
        };
        const {addons: i} = n;
        this._dbSchema = {},
        this._versions = [],
        this._storeNames = [],
        this._allTables = {},
        this.idbdb = null,
        this._novip = this;
        const s = {
            dbOpenError: null,
            isBeingOpened: !1,
            onReadyBeingFired: null,
            openComplete: !1,
            dbReadyResolve: Le,
            dbReadyPromise: null,
            cancelOpen: Le,
            openCanceller: null,
            autoSchema: !0,
            PR1398_maxLoop: 3
        };
        var o;
        s.dbReadyPromise = new H(u=>{
            s.dbReadyResolve = u
        }
        ),
        s.openCanceller = new H((u,c)=>{
            s.cancelOpen = c
        }
        ),
        this._state = s,
        this.name = e,
        this.on = ui(this, "populate", "blocked", "versionchange", "close", {
            ready: [Na, Le]
        }),
        this.on.ready.subscribe = Zu(this.on.ready.subscribe, u=>(c,l)=>{
            Qe.vip(()=>{
                const d = this._state;
                if (d.openComplete)
                    d.dbOpenError || H.resolve().then(c),
                    l && u(c);
                else if (d.onReadyBeingFired)
                    d.onReadyBeingFired.push(c),
                    l && u(c);
                else {
                    u(c);
                    const h = this;
                    l || u(function g() {
                        h.on.ready.unsubscribe(c),
                        h.on.ready.unsubscribe(g)
                    })
                }
            }
            )
        }
        ),
        this.Collection = (o = this,
        zr(ey.prototype, function(u, c) {
            this.db = o;
            let l = ll
              , d = null;
            if (c)
                try {
                    l = c()
                } catch (b) {
                    d = b
                }
            const h = u._ctx
              , g = h.table
              , _ = g.hook.reading.fire;
            this._ctx = {
                table: g,
                index: h.index,
                isPrimKey: !h.index || g.schema.primKey.keyPath && h.index === g.schema.primKey.name,
                range: l,
                keysOnly: !1,
                dir: "next",
                unique: "",
                algorithm: null,
                filter: null,
                replayFilter: null,
                justLimit: !0,
                isMatch: null,
                offset: 0,
                limit: 1 / 0,
                error: d,
                or: h.or,
                valueMapper: _ !== Ni ? _ : null
            }
        })),
        this.Table = function(u) {
            return zr(Tc.prototype, function(c, l, d) {
                this.db = u,
                this._tx = d,
                this.name = c,
                this.schema = l,
                this.hook = u._allTables[c] ? u._allTables[c].hook : ui(null, {
                    creating: [Mm, Le],
                    reading: [Lm, Ni],
                    updating: [Fm, Le],
                    deleting: [Um, Le]
                })
            })
        }(this),
        this.Transaction = function(u) {
            return zr(iy.prototype, function(c, l, d, h, g) {
                this.db = u,
                this.mode = c,
                this.storeNames = l,
                this.schema = d,
                this.chromeTransactionDurability = h,
                this.idbtrans = null,
                this.on = ui(this, "complete", "error", "abort"),
                this.parent = g || null,
                this.active = !0,
                this._reculock = 0,
                this._blockedFuncs = [],
                this._resolve = null,
                this._reject = null,
                this._waitingFor = null,
                this._waitingQueue = null,
                this._spinCount = 0,
                this._completion = new H((_,b)=>{
                    this._resolve = _,
                    this._reject = b
                }
                ),
                this._completion.then(()=>{
                    this.active = !1,
                    this.on.complete.fire()
                }
                , _=>{
                    var b = this.active;
                    return this.active = !1,
                    this.on.error.fire(_),
                    this.parent ? this.parent._reject(_) : b && this.idbtrans && this.idbtrans.abort(),
                    nt(_)
                }
                )
            })
        }(this),
        this.Version = function(u) {
            return zr(uy.prototype, function(c) {
                this.db = u,
                this._cfg = {
                    version: c,
                    storesSource: null,
                    dbschema: {},
                    tables: {},
                    contentUpgrade: null
                }
            })
        }(this),
        this.WhereClause = function(u) {
            return zr(dl.prototype, function(c, l, d) {
                if (this.db = u,
                this._ctx = {
                    table: c,
                    index: l === ":id" ? null : l,
                    or: d
                },
                this._cmp = this._ascending = Ie,
                this._descending = (h,g)=>Ie(g, h),
                this._max = (h,g)=>Ie(h, g) > 0 ? h : g,
                this._min = (h,g)=>Ie(h, g) < 0 ? h : g,
                this._IDBKeyRange = u._deps.IDBKeyRange,
                !this._IDBKeyRange)
                    throw new ae.MissingAPI
            })
        }(this),
        this.on("versionchange", u=>{
            u.newVersion > 0 ? console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`) : console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),
            this.close({
                disableAutoOpen: !1
            }),
            this._state.openComplete = !1
        }
        ),
        this.on("blocked", u=>{
            !u.newVersion || u.newVersion < u.oldVersion ? console.warn(`Dexie.delete('${this.name}') was blocked`) : console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${u.oldVersion / 10}`)
        }
        ),
        this._maxKey = Ii(n.IDBKeyRange),
        this._createTransaction = (u,c,l,d)=>new this.Transaction(u,c,l,this._options.chromeTransactionDurability,d),
        this._fireOnBlocked = u=>{
            this.on("blocked").fire(u),
            ci.filter(c=>c.name === this.name && c !== this && !c._state.vcFired).map(c=>c.on("versionchange").fire(u))
        }
        ,
        this.use(yy),
        this.use(by),
        this.use(gy),
        this.use(py),
        this.use(my);
        const a = new Proxy(this,{
            get: (u,c,l)=>{
                if (c === "_vip")
                    return !0;
                if (c === "table")
                    return h=>Qi(this.table(h), a);
                const d = Reflect.get(u, c, l);
                return d instanceof Tc ? Qi(d, a) : c === "tables" ? d.map(h=>Qi(h, a)) : c === "_createTransaction" ? function() {
                    const h = d.apply(this, arguments);
                    return Qi(h, a)
                }
                : d
            }
        });
        this.vip = a,
        i.forEach(u=>u(this))
    }
    version(e) {
        if (isNaN(e) || e < .1)
            throw new ae.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10,
        this.idbdb || this._state.isBeingOpened)
            throw new ae.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        const n = this._versions;
        var r = n.filter(i=>i._cfg.version === e)[0];
        return r || (r = new this.Version(e),
        n.push(r),
        n.sort(ay),
        r.stores({}),
        this._state.autoSchema = !1,
        r)
    }
    _whenReady(e) {
        return this.idbdb && (this._state.openComplete || X.letThrough || this._vip) ? e() : new H((n,r)=>{
            if (this._state.openComplete)
                return r(new ae.DatabaseClosed(this._state.dbOpenError));
            if (!this._state.isBeingOpened) {
                if (!this._options.autoOpen)
                    return void r(new ae.DatabaseClosed);
                this.open().catch(Le)
            }
            this._state.dbReadyPromise.then(n, r)
        }
        ).then(e)
    }
    use({stack: e, create: n, level: r, name: i}) {
        i && this.unuse({
            stack: e,
            name: i
        });
        const s = this._middlewares[e] || (this._middlewares[e] = []);
        return s.push({
            stack: e,
            create: n,
            level: r ?? 10,
            name: i
        }),
        s.sort((o,a)=>o.level - a.level),
        this
    }
    unuse({stack: e, name: n, create: r}) {
        return e && this._middlewares[e] && (this._middlewares[e] = this._middlewares[e].filter(i=>r ? i.create !== r : !!n && i.name !== n)),
        this
    }
    open() {
        return ir(Cn, ()=>dy(this))
    }
    _close() {
        const e = this._state
          , n = ci.indexOf(this);
        if (n >= 0 && ci.splice(n, 1),
        this.idbdb) {
            try {
                this.idbdb.close()
            } catch {}
            this.idbdb = null
        }
        e.dbReadyPromise = new H(r=>{
            e.dbReadyResolve = r
        }
        ),
        e.openCanceller = new H((r,i)=>{
            e.cancelOpen = i
        }
        )
    }
    close({disableAutoOpen: e}={
        disableAutoOpen: !0
    }) {
        this._close();
        const n = this._state;
        e && (this._options.autoOpen = !1),
        n.dbOpenError = new ae.DatabaseClosed,
        n.isBeingOpened && n.cancelOpen(n.dbOpenError)
    }
    delete() {
        const e = arguments.length > 0
          , n = this._state;
        return new H((r,i)=>{
            const s = ()=>{
                this.close({
                    disableAutoOpen: !1
                });
                var o = this._deps.indexedDB.deleteDatabase(this.name);
                o.onsuccess = Ye(()=>{
                    (function({indexedDB: a, IDBKeyRange: u}, c) {
                        !Ca(a) && c !== "__dbnames" && Pa(a, u).delete(c).catch(Le)
                    }
                    )(this._deps, this.name),
                    r()
                }
                ),
                o.onerror = on(i),
                o.onblocked = this._fireOnBlocked
            }
            ;
            if (e)
                throw new ae.InvalidArgument("Arguments not allowed in db.delete()");
            n.isBeingOpened ? n.dbReadyPromise.then(s) : s()
        }
        )
    }
    backendDB() {
        return this.idbdb
    }
    isOpen() {
        return this.idbdb !== null
    }
    hasBeenClosed() {
        const e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed"
    }
    hasFailed() {
        return this._state.dbOpenError !== null
    }
    dynamicallyOpened() {
        return this._state.autoSchema
    }
    get tables() {
        return it(this._allTables).map(e=>this._allTables[e])
    }
    transaction() {
        const e = hy.apply(this, arguments);
        return this._transaction.apply(this, e)
    }
    _transaction(e, n, r) {
        let i = X.trans;
        i && i.db === this && e.indexOf("!") === -1 || (i = null);
        const s = e.indexOf("?") !== -1;
        let o, a;
        e = e.replace("!", "").replace("?", "");
        try {
            if (a = n.map(c=>{
                var l = c instanceof this.Table ? c.name : c;
                if (typeof l != "string")
                    throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                return l
            }
            ),
            e == "r" || e === "readonly")
                o = "readonly";
            else {
                if (e != "rw" && e != "readwrite")
                    throw new ae.InvalidArgument("Invalid transaction mode: " + e);
                o = "readwrite"
            }
            if (i) {
                if (i.mode === "readonly" && o === "readwrite") {
                    if (!s)
                        throw new ae.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                    i = null
                }
                i && a.forEach(c=>{
                    if (i && i.storeNames.indexOf(c) === -1) {
                        if (!s)
                            throw new ae.SubTransaction("Table " + c + " not included in parent transaction.");
                        i = null
                    }
                }
                ),
                s && i && !i.active && (i = null)
            }
        } catch (c) {
            return i ? i._promise(null, (l,d)=>{
                d(c)
            }
            ) : nt(c)
        }
        const u = gl.bind(null, this, o, a, i, r);
        return i ? i._promise(o, u, "lock") : X.trans ? ir(X.transless, ()=>this._whenReady(u)) : this._whenReady(u)
    }
    table(e) {
        if (!Rt(this._allTables, e))
            throw new ae.InvalidTable(`Table ${e} does not exist`);
        return this._allTables[e]
    }
}
const wy = typeof Symbol < "u" && "observable"in Symbol ? Symbol.observable : "@@observable";
class Ey {
    constructor(e) {
        this._subscribe = e
    }
    subscribe(e, n, r) {
        return this._subscribe(e && typeof e != "function" ? e : {
            next: e,
            error: n,
            complete: r
        })
    }
    [wy]() {
        return this
    }
}
let $s;
try {
    $s = {
        indexedDB: ut.indexedDB || ut.mozIndexedDB || ut.webkitIndexedDB || ut.msIndexedDB,
        IDBKeyRange: ut.IDBKeyRange || ut.webkitIDBKeyRange
    }
} catch {
    $s = {
        indexedDB: null,
        IDBKeyRange: null
    }
}
function Sy(t) {
    let e, n = !1;
    const r = new Ey(i=>{
        const s = xa(t);
        let o, a = !1, u = {}, c = {};
        const l = {
            get closed() {
                return a
            },
            unsubscribe: ()=>{
                a || (a = !0,
                o && o.abort(),
                d && En.storagemutated.unsubscribe(h))
            }
        };
        i.start && i.start(l);
        let d = !1;
        const h = _=>{
            zs(u, _),
            yl(c, u) && g()
        }
          , g = ()=>{
            if (a || !$s.indexedDB)
                return;
            u = {};
            const _ = {};
            o && o.abort(),
            o = new AbortController;
            const b = {
                subscr: _,
                signal: o.signal,
                requery: g,
                querier: t,
                trans: null
            }
              , x = function(E) {
                const S = Yr();
                try {
                    s && Zr();
                    const k = Mn(t, E);
                    return s && k.finally(Un),
                    k
                } finally {
                    S && Vr()
                }
            }(b);
            Promise.resolve(x).then(E=>{
                n = !0,
                e = E,
                a || b.signal.aborted || (u = {},
                c = _,
                function(S) {
                    for (const k in S)
                        if (Rt(S, k))
                            return !1;
                    return !0
                }(c) || d || (En("storagemutated", h),
                d = !0),
                i.next && i.next(E))
            }
            , E=>{
                if (n = !1,
                !["DatabaseClosedError", "AbortError"].includes(E == null ? void 0 : E.name)) {
                    if (a)
                        return;
                    i.error && i.error(E)
                }
            }
            )
        }
        ;
        return g(),
        l
    }
    );
    return r.hasValue = ()=>n,
    r.getValue = ()=>e,
    r
}
const Yn = Qe;
function fs(t) {
    let e = mn;
    try {
        mn = !0,
        En.storagemutated.fire(t),
        Da(t, !0)
    } finally {
        mn = e
    }
}
Ur(Yn, {
    ...ss,
    delete: t=>new Yn(t,{
        addons: []
    }).delete(),
    exists: t=>new Yn(t,{
        addons: []
    }).open().then(e=>(e.close(),
    !0)).catch("NoSuchDatabaseError", ()=>!1),
    getDatabaseNames(t) {
        try {
            return function({indexedDB: e, IDBKeyRange: n}) {
                return Ca(e) ? Promise.resolve(e.databases()).then(r=>r.map(i=>i.name).filter(i=>i !== "__dbnames")) : Pa(e, n).toCollection().primaryKeys()
            }(Yn.dependencies).then(t)
        } catch {
            return nt(new ae.MissingAPI)
        }
    },
    defineClass: ()=>function(t) {
        Mt(this, t)
    }
    ,
    ignoreTransaction: t=>X.trans ? ir(X.transless, t) : t(),
    vip: ra,
    async: function(t) {
        return function() {
            try {
                var e = oa(t.apply(this, arguments));
                return e && typeof e.then == "function" ? e : H.resolve(e)
            } catch (n) {
                return nt(n)
            }
        }
    },
    spawn: function(t, e, n) {
        try {
            var r = oa(t.apply(n, e || []));
            return r && typeof r.then == "function" ? r : H.resolve(r)
        } catch (i) {
            return nt(i)
        }
    },
    currentTransaction: {
        get: ()=>X.trans || null
    },
    waitFor: function(t, e) {
        const n = H.resolve(typeof t == "function" ? Yn.ignoreTransaction(t) : t).timeout(e || 6e4);
        return X.trans ? X.trans.waitFor(n) : n
    },
    Promise: H,
    debug: {
        get: ()=>Sn,
        set: t=>{
            Qu(t, t === "dexie" ? ()=>!0 : ul)
        }
    },
    derive: Pr,
    extend: Mt,
    props: Ur,
    override: Zu,
    Events: ui,
    on: En,
    liveQuery: Sy,
    extendObservabilitySet: zs,
    getByKeyPath: vn,
    setByKeyPath: Yt,
    delByKeyPath: function(t, e) {
        typeof e == "string" ? Yt(t, e, void 0) : "length"in e && [].map.call(e, function(n) {
            Yt(t, n, void 0)
        })
    },
    shallowClone: zu,
    deepClone: Ln,
    getObjectDiff: Ba,
    cmp: Ie,
    asap: Hu,
    minKey: -(1 / 0),
    addons: [],
    connections: ci,
    errnames: Oa,
    dependencies: $s,
    cache: wr,
    semVer: "4.0.1-alpha.25",
    version: "4.0.1-alpha.25".split(".").map(t=>parseInt(t)).reduce((t,e,n)=>t + e / Math.pow(10, 2 * n))
}),
Yn.maxKey = Ii(Yn.dependencies.IDBKeyRange),
typeof dispatchEvent < "u" && typeof addEventListener < "u" && (En("storagemutated", t=>{
    if (!mn) {
        let e;
        Hs ? (e = document.createEvent("CustomEvent"),
        e.initCustomEvent("x-storagemutated-1", !0, !0, t)) : e = new CustomEvent("x-storagemutated-1",{
            detail: t
        }),
        mn = !0,
        dispatchEvent(e),
        mn = !1
    }
}
),
addEventListener("x-storagemutated-1", ({detail: t})=>{
    mn || fs(t)
}
));
let mn = !1;
if (typeof BroadcastChannel < "u") {
    const t = new BroadcastChannel("x-storagemutated-1");
    typeof t.unref == "function" && t.unref(),
    En("storagemutated", e=>{
        mn || t.postMessage(e)
    }
    ),
    t.onmessage = e=>{
        e.data && fs(e.data)
    }
} else if (typeof self < "u" && typeof navigator < "u") {
    En("storagemutated", e=>{
        try {
            mn || (typeof localStorage < "u" && localStorage.setItem("x-storagemutated-1", JSON.stringify({
                trig: Math.random(),
                changedParts: e
            })),
            typeof self.clients == "object" && [...self.clients.matchAll({
                includeUncontrolled: !0
            })].forEach(n=>n.postMessage({
                type: "x-storagemutated-1",
                changedParts: e
            })))
        } catch {}
    }
    ),
    typeof addEventListener < "u" && addEventListener("storage", e=>{
        if (e.key === "x-storagemutated-1") {
            const n = JSON.parse(e.newValue);
            n && fs(n.changedParts)
        }
    }
    );
    const t = self.document && navigator.serviceWorker;
    t && t.addEventListener("message", function({data: e}) {
        e && e.type === "x-storagemutated-1" && fs(e.changedParts)
    })
}
H.rejectionMapper = function(t, e) {
    if (!t || t instanceof Cr || t instanceof TypeError || t instanceof SyntaxError || !t.name || !wc[t.name])
        return t;
    var n = new wc[t.name](e || t.message,t);
    return "stack"in t && _n(n, "stack", {
        get: function() {
            return this.inner.stack
        }
    }),
    n
}
,
Qu(Sn, ul);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Kn(t, e, n, r) {
    function i(s) {
        return s instanceof n ? s : new n(function(o) {
            o(s)
        }
        )
    }
    return new (n || (n = Promise))(function(s, o) {
        function a(l) {
            try {
                c(r.next(l))
            } catch (d) {
                o(d)
            }
        }
        function u(l) {
            try {
                c(r.throw(l))
            } catch (d) {
                o(d)
            }
        }
        function c(l) {
            l.done ? s(l.value) : i(l.value).then(a, u)
        }
        c((r = r.apply(t, e || [])).next())
    }
    )
}
function en(t, e) {
    var n = {
        label: 0,
        sent: function() {
            if (s[0] & 1)
                throw s[1];
            return s[1]
        },
        trys: [],
        ops: []
    }, r, i, s, o;
    return o = {
        next: a(0),
        throw: a(1),
        return: a(2)
    },
    typeof Symbol == "function" && (o[Symbol.iterator] = function() {
        return this
    }
    ),
    o;
    function a(c) {
        return function(l) {
            return u([c, l])
        }
    }
    function u(c) {
        if (r)
            throw new TypeError("Generator is already executing.");
        for (; n; )
            try {
                if (r = 1,
                i && (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i),
                0) : i.next) && !(s = s.call(i, c[1])).done)
                    return s;
                switch (i = 0,
                s && (c = [c[0] & 2, s.value]),
                c[0]) {
                case 0:
                case 1:
                    s = c;
                    break;
                case 4:
                    return n.label++,
                    {
                        value: c[1],
                        done: !1
                    };
                case 5:
                    n.label++,
                    i = c[1],
                    c = [0];
                    continue;
                case 7:
                    c = n.ops.pop(),
                    n.trys.pop();
                    continue;
                default:
                    if (s = n.trys,
                    !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
                        n.label = c[1];
                        break
                    }
                    if (c[0] === 6 && n.label < s[1]) {
                        n.label = s[1],
                        s = c;
                        break
                    }
                    if (s && n.label < s[2]) {
                        n.label = s[2],
                        n.ops.push(c);
                        break
                    }
                    s[2] && n.ops.pop(),
                    n.trys.pop();
                    continue
                }
                c = e.call(t, n)
            } catch (l) {
                c = [6, l],
                i = 0
            } finally {
                r = s = 0
            }
        if (c[0] & 5)
            throw c[1];
        return {
            value: c[0] ? c[1] : void 0,
            done: !0
        }
    }
}
function ky(t) {
    var e = [t.schema.primKey].concat(t.schema.indexes);
    return e.map(function(n) {
        return n.src
    }).join(",")
}
function xy(t) {
    for (var e = {}, n = 0, r = t.tables; n < r.length; n++) {
        var i = r[n];
        e[i.name] = i.schema
    }
    return e
}
function wl(t, e) {
    return new Promise(function(n, r) {
        var i = new FileReader;
        i.onabort = function(s) {
            return r(new Error("file read aborted"))
        }
        ,
        i.onerror = function(s) {
            return r(s.target.error)
        }
        ,
        i.onload = function(s) {
            return n(s.target.result)
        }
        ,
        e === "binary" ? i.readAsArrayBuffer(t) : i.readAsText(t)
    }
    )
}
function El(t, e) {
    if (typeof FileReaderSync > "u")
        throw new Error("FileReaderSync missing. Reading blobs synchronously requires code to run from within a web worker. Use TSON.encapsulateAsync() to do it from the main thread.");
    var n = new FileReaderSync
      , r = e === "binary" ? n.readAsArrayBuffer(t) : n.readAsText(t);
    return r
}
var aa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function La(t, e) {
    return e = {
        exports: {}
    },
    t(e, e.exports),
    e.exports
}
var Ws = La(function(t, e) {
    (function(n, r) {
        t.exports = r()
    }
    )(aa, function() {
        function n(R) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? n = function(j) {
                return typeof j
            }
            : n = function(j) {
                return j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype ? "symbol" : typeof j
            }
            ,
            n(R)
        }
        function r(R, j, D, $, G, Se, Ae) {
            try {
                var Ee = R[Se](Ae)
                  , ne = Ee.value
            } catch (at) {
                D(at);
                return
            }
            Ee.done ? j(ne) : Promise.resolve(ne).then($, G)
        }
        function i(R) {
            return function() {
                var j = this
                  , D = arguments;
                return new Promise(function($, G) {
                    var Se = R.apply(j, D);
                    function Ae(ne) {
                        r(Se, $, G, Ae, Ee, "next", ne)
                    }
                    function Ee(ne) {
                        r(Se, $, G, Ae, Ee, "throw", ne)
                    }
                    Ae(void 0)
                }
                )
            }
        }
        function s(R, j) {
            if (!(R instanceof j))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(R, j) {
            for (var D = 0; D < j.length; D++) {
                var $ = j[D];
                $.enumerable = $.enumerable || !1,
                $.configurable = !0,
                "value"in $ && ($.writable = !0),
                Object.defineProperty(R, $.key, $)
            }
        }
        function a(R, j, D) {
            return j && o(R.prototype, j),
            D && o(R, D),
            R
        }
        function u(R, j, D) {
            return j in R ? Object.defineProperty(R, j, {
                value: D,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : R[j] = D,
            R
        }
        function c(R, j) {
            var D = Object.keys(R);
            if (Object.getOwnPropertySymbols) {
                var $ = Object.getOwnPropertySymbols(R);
                j && ($ = $.filter(function(G) {
                    return Object.getOwnPropertyDescriptor(R, G).enumerable
                })),
                D.push.apply(D, $)
            }
            return D
        }
        function l(R) {
            for (var j = 1; j < arguments.length; j++) {
                var D = arguments[j] != null ? arguments[j] : {};
                j % 2 ? c(Object(D), !0).forEach(function($) {
                    u(R, $, D[$])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(D)) : c(Object(D)).forEach(function($) {
                    Object.defineProperty(R, $, Object.getOwnPropertyDescriptor(D, $))
                })
            }
            return R
        }
        function d(R, j) {
            return _(R) || x(R, j) || S()
        }
        function h(R) {
            return g(R) || b(R) || E()
        }
        function g(R) {
            if (Array.isArray(R)) {
                for (var j = 0, D = new Array(R.length); j < R.length; j++)
                    D[j] = R[j];
                return D
            }
        }
        function _(R) {
            if (Array.isArray(R))
                return R
        }
        function b(R) {
            if (Symbol.iterator in Object(R) || Object.prototype.toString.call(R) === "[object Arguments]")
                return Array.from(R)
        }
        function x(R, j) {
            if (Symbol.iterator in Object(R) || Object.prototype.toString.call(R) === "[object Arguments]") {
                var D = []
                  , $ = !0
                  , G = !1
                  , Se = void 0;
                try {
                    for (var Ae = R[Symbol.iterator](), Ee; !($ = (Ee = Ae.next()).done) && (D.push(Ee.value),
                    !(j && D.length === j)); $ = !0)
                        ;
                } catch (ne) {
                    G = !0,
                    Se = ne
                } finally {
                    try {
                        !$ && Ae.return != null && Ae.return()
                    } finally {
                        if (G)
                            throw Se
                    }
                }
                return D
            }
        }
        function E() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
        function S() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
        var k = function R(j) {
            s(this, R),
            this.p = new Promise(j)
        };
        k.__typeson__type__ = "TypesonPromise",
        typeof Symbol < "u" && (k.prototype[Symbol.toStringTag] = "TypesonPromise"),
        k.prototype.then = function(R, j) {
            var D = this;
            return new k(function($, G) {
                D.p.then(function(Se) {
                    $(R ? R(Se) : Se)
                }).catch(function(Se) {
                    return j ? j(Se) : Promise.reject(Se)
                }).then($, G)
            }
            )
        }
        ,
        k.prototype.catch = function(R) {
            return this.then(null, R)
        }
        ,
        k.resolve = function(R) {
            return new k(function(j) {
                j(R)
            }
            )
        }
        ,
        k.reject = function(R) {
            return new k(function(j, D) {
                D(R)
            }
            )
        }
        ,
        ["all", "race"].forEach(function(R) {
            k[R] = function(j) {
                return new k(function(D, $) {
                    Promise[R](j.map(function(G) {
                        return G && G.constructor && G.constructor.__typeson__type__ === "TypesonPromise" ? G.p : G
                    })).then(D, $)
                }
                )
            }
        });
        var B = {}
          , I = B.toString
          , A = {}.hasOwnProperty
          , C = Object.getPrototypeOf
          , M = A.toString;
        function v(R, j) {
            return z(R) && typeof R.then == "function" && (!j || typeof R.catch == "function")
        }
        function y(R) {
            return I.call(R).slice(8, -1)
        }
        function N(R, j) {
            if (!R || n(R) !== "object")
                return !1;
            var D = C(R);
            if (!D)
                return j === null;
            var $ = A.call(D, "constructor") && D.constructor;
            return typeof $ != "function" ? j === null : j === $ || j !== null && M.call($) === M.call(j) || typeof j == "function" && typeof $.__typeson__type__ == "string" && $.__typeson__type__ === j.__typeson__type__
        }
        function O(R) {
            if (!R || y(R) !== "Object")
                return !1;
            var j = C(R);
            return j ? N(R, Object) : !0
        }
        function te(R) {
            if (!R || y(R) !== "Object")
                return !1;
            var j = C(R);
            return j ? N(R, Object) || te(j) : !0
        }
        function z(R) {
            return R && n(R) === "object"
        }
        function pe(R) {
            return R.replace(/~/g, "~0").replace(/\./g, "~1")
        }
        function P(R) {
            return R.replace(/~1/g, ".").replace(/~0/g, "~")
        }
        function W(R, j) {
            if (j === "")
                return R;
            var D = j.indexOf(".");
            if (D > -1) {
                var $ = R[P(j.slice(0, D))];
                return $ === void 0 ? void 0 : W($, j.slice(D + 1))
            }
            return R[P(j)]
        }
        function ve(R, j, D) {
            if (j === "")
                return D;
            var $ = j.indexOf(".");
            if ($ > -1) {
                var G = R[P(j.slice(0, $))];
                return ve(G, j.slice($ + 1), D)
            }
            return R[P(j)] = D,
            R
        }
        function tt(R) {
            return R === null ? "null" : Array.isArray(R) ? "array" : n(R)
        }
        var Pt = Object.keys
          , kt = Array.isArray
          , Ut = {}.hasOwnProperty
          , kn = ["type", "replaced", "iterateIn", "iterateUnsetNumeric"];
        function se(R, j) {
            if (R.keypath === "")
                return -1;
            var D = R.keypath.match(/\./g) || 0
              , $ = j.keypath.match(/\./g) || 0;
            return D && (D = D.length),
            $ && ($ = $.length),
            D > $ ? -1 : D < $ ? 1 : R.keypath < j.keypath ? -1 : R.keypath > j.keypath
        }
        var Ce = function() {
            function R(j) {
                s(this, R),
                this.options = j,
                this.plainObjectReplacers = [],
                this.nonplainObjectReplacers = [],
                this.revivers = {},
                this.types = {}
            }
            return a(R, [{
                key: "stringify",
                value: function(D, $, G, Se) {
                    Se = l({}, this.options, {}, Se, {
                        stringification: !0
                    });
                    var Ae = this.encapsulate(D, null, Se);
                    return kt(Ae) ? JSON.stringify(Ae[0], $, G) : Ae.then(function(Ee) {
                        return JSON.stringify(Ee, $, G)
                    })
                }
            }, {
                key: "stringifySync",
                value: function(D, $, G, Se) {
                    return this.stringify(D, $, G, l({
                        throwOnBadSyncType: !0
                    }, Se, {
                        sync: !0
                    }))
                }
            }, {
                key: "stringifyAsync",
                value: function(D, $, G, Se) {
                    return this.stringify(D, $, G, l({
                        throwOnBadSyncType: !0
                    }, Se, {
                        sync: !1
                    }))
                }
            }, {
                key: "parse",
                value: function(D, $, G) {
                    return G = l({}, this.options, {}, G, {
                        parse: !0
                    }),
                    this.revive(JSON.parse(D, $), G)
                }
            }, {
                key: "parseSync",
                value: function(D, $, G) {
                    return this.parse(D, $, l({
                        throwOnBadSyncType: !0
                    }, G, {
                        sync: !0
                    }))
                }
            }, {
                key: "parseAsync",
                value: function(D, $, G) {
                    return this.parse(D, $, l({
                        throwOnBadSyncType: !0
                    }, G, {
                        sync: !1
                    }))
                }
            }, {
                key: "specialTypeNames",
                value: function(D, $) {
                    var G = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                    return G.returnTypeNames = !0,
                    this.encapsulate(D, $, G)
                }
            }, {
                key: "rootTypeName",
                value: function(D, $) {
                    var G = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                    return G.iterateNone = !0,
                    this.encapsulate(D, $, G)
                }
            }, {
                key: "encapsulate",
                value: function(D, $, G) {
                    G = l({
                        sync: !0
                    }, this.options, {}, G);
                    var Se = G
                      , Ae = Se.sync
                      , Ee = this
                      , ne = {}
                      , at = []
                      , xt = []
                      , Ct = []
                      , Zt = "cyclic"in G ? G.cyclic : !0
                      , Ht = G
                      , ln = Ht.encapsulateObserver
                      , jt = De("", D, Zt, $ || {}, Ct);
                    function zt(Q) {
                        var m = Object.values(ne);
                        if (G.iterateNone)
                            return m.length ? m[0] : R.getJSONType(Q);
                        if (m.length) {
                            if (G.returnTypeNames)
                                return h(new Set(m));
                            !Q || !O(Q) || Ut.call(Q, "$types") ? Q = {
                                $: Q,
                                $types: {
                                    $: ne
                                }
                            } : Q.$types = ne
                        } else
                            z(Q) && Ut.call(Q, "$types") && (Q = {
                                $: Q,
                                $types: !0
                            });
                        return G.returnTypeNames ? !1 : Q
                    }
                    function ze(Q, m) {
                        return je.apply(this, arguments)
                    }
                    function je() {
                        return je = i(regeneratorRuntime.mark(function Q(m, f) {
                            var p;
                            return regeneratorRuntime.wrap(function(T) {
                                for (; ; )
                                    switch (T.prev = T.next) {
                                    case 0:
                                        return T.next = 2,
                                        Promise.all(f.map(function(F) {
                                            return F[1].p
                                        }));
                                    case 2:
                                        return p = T.sent,
                                        T.next = 5,
                                        Promise.all(p.map(function() {
                                            var F = i(regeneratorRuntime.mark(function q(ee) {
                                                var Y, ce, _e, be, Pe, xe, ke, Fe, Ke, me, ct, J, K, oe;
                                                return regeneratorRuntime.wrap(function(ue) {
                                                    for (; ; )
                                                        switch (ue.prev = ue.next) {
                                                        case 0:
                                                            if (Y = [],
                                                            ce = f.splice(0, 1),
                                                            _e = d(ce, 1),
                                                            be = _e[0],
                                                            Pe = d(be, 7),
                                                            xe = Pe[0],
                                                            ke = Pe[2],
                                                            Fe = Pe[3],
                                                            Ke = Pe[4],
                                                            me = Pe[5],
                                                            ct = Pe[6],
                                                            J = De(xe, ee, ke, Fe, Y, !0, ct),
                                                            K = N(J, k),
                                                            !(xe && K)) {
                                                                ue.next = 11;
                                                                break
                                                            }
                                                            return ue.next = 8,
                                                            J.p;
                                                        case 8:
                                                            return oe = ue.sent,
                                                            Ke[me] = oe,
                                                            ue.abrupt("return", ze(m, Y));
                                                        case 11:
                                                            return xe ? Ke[me] = J : K ? m = J.p : m = J,
                                                            ue.abrupt("return", ze(m, Y));
                                                        case 13:
                                                        case "end":
                                                            return ue.stop()
                                                        }
                                                }, q)
                                            }));
                                            return function(q) {
                                                return F.apply(this, arguments)
                                            }
                                        }()));
                                    case 5:
                                        return T.abrupt("return", m);
                                    case 6:
                                    case "end":
                                        return T.stop()
                                    }
                            }, Q)
                        })),
                        je.apply(this, arguments)
                    }
                    function Re(Q, m, f) {
                        Object.assign(Q, m);
                        var p = kn.map(function(w) {
                            var T = Q[w];
                            return delete Q[w],
                            T
                        });
                        f(),
                        kn.forEach(function(w, T) {
                            Q[w] = p[T]
                        })
                    }
                    function De(Q, m, f, p, w, T, F) {
                        var q, ee = {}, Y = n(m), ce = ln ? function(K) {
                            var oe = F || p.type || R.getJSONType(m);
                            ln(Object.assign(K || ee, {
                                keypath: Q,
                                value: m,
                                cyclic: f,
                                stateObj: p,
                                promisesData: w,
                                resolvingTypesonPromise: T,
                                awaitingTypesonPromise: N(m, k)
                            }, {
                                type: oe
                            }))
                        }
                        : null;
                        if (["string", "boolean", "number", "undefined"].includes(Y))
                            return m === void 0 || Y === "number" && (isNaN(m) || m === -1 / 0 || m === 1 / 0) ? (p.replaced ? q = m : q = We(Q, m, p, w, !1, T, ce),
                            q !== m && (ee = {
                                replaced: q
                            })) : q = m,
                            ce && ce(),
                            q;
                        if (m === null)
                            return ce && ce(),
                            m;
                        if (f && !p.iterateIn && !p.iterateUnsetNumeric && m && n(m) === "object") {
                            var _e = at.indexOf(m);
                            if (_e < 0)
                                f === !0 && (at.push(m),
                                xt.push(Q));
                            else
                                return ne[Q] = "#",
                                ce && ce({
                                    cyclicKeypath: xt[_e]
                                }),
                                "#" + xt[_e]
                        }
                        var be = O(m), Pe = kt(m), xe = (be || Pe) && (!Ee.plainObjectReplacers.length || p.replaced) || p.iterateIn ? m : We(Q, m, p, w, be || Pe, null, ce), ke;
                        if (xe !== m ? (q = xe,
                        ee = {
                            replaced: xe
                        }) : Q === "" && N(m, k) ? (w.push([Q, m, f, p, void 0, void 0, p.type]),
                        q = m) : Pe && p.iterateIn !== "object" || p.iterateIn === "array" ? (ke = new Array(m.length),
                        ee = {
                            clone: ke
                        }) : !["function", "symbol"].includes(n(m)) && !("toJSON"in m) && !N(m, k) && !N(m, Promise) && !N(m, ArrayBuffer) || be || p.iterateIn === "object" ? (ke = {},
                        p.addLength && (ke.length = m.length),
                        ee = {
                            clone: ke
                        }) : q = m,
                        ce && ce(),
                        G.iterateNone)
                            return ke || q;
                        if (!ke)
                            return q;
                        if (p.iterateIn) {
                            var Fe = function(oe) {
                                var re = {
                                    ownKeys: Ut.call(m, oe)
                                };
                                Re(p, re, function() {
                                    var ue = Q + (Q ? "." : "") + pe(oe)
                                      , we = De(ue, m[oe], !!f, p, w, T);
                                    N(we, k) ? w.push([ue, we, !!f, p, ke, oe, p.type]) : we !== void 0 && (ke[oe] = we)
                                })
                            };
                            for (var Ke in m)
                                Fe(Ke);
                            ce && ce({
                                endIterateIn: !0,
                                end: !0
                            })
                        } else
                            Pt(m).forEach(function(K) {
                                var oe = Q + (Q ? "." : "") + pe(K)
                                  , re = {
                                    ownKeys: !0
                                };
                                Re(p, re, function() {
                                    var ue = De(oe, m[K], !!f, p, w, T);
                                    N(ue, k) ? w.push([oe, ue, !!f, p, ke, K, p.type]) : ue !== void 0 && (ke[K] = ue)
                                })
                            }),
                            ce && ce({
                                endIterateOwn: !0,
                                end: !0
                            });
                        if (p.iterateUnsetNumeric) {
                            for (var me = m.length, ct = function(oe) {
                                if (!(oe in m)) {
                                    var re = Q + (Q ? "." : "") + oe
                                      , ue = {
                                        ownKeys: !1
                                    };
                                    Re(p, ue, function() {
                                        var we = De(re, void 0, !!f, p, w, T);
                                        N(we, k) ? w.push([re, we, !!f, p, ke, oe, p.type]) : we !== void 0 && (ke[oe] = we)
                                    })
                                }
                            }, J = 0; J < me; J++)
                                ct(J);
                            ce && ce({
                                endIterateUnsetNumeric: !0,
                                end: !0
                            })
                        }
                        return ke
                    }
                    function We(Q, m, f, p, w, T, F) {
                        for (var q = w ? Ee.plainObjectReplacers : Ee.nonplainObjectReplacers, ee = q.length; ee--; ) {
                            var Y = q[ee];
                            if (Y.test(m, f)) {
                                var ce = Y.type;
                                if (Ee.revivers[ce]) {
                                    var _e = ne[Q];
                                    ne[Q] = _e ? [ce].concat(_e) : ce
                                }
                                if (Object.assign(f, {
                                    type: ce,
                                    replaced: !0
                                }),
                                (Ae || !Y.replaceAsync) && !Y.replace)
                                    return F && F({
                                        typeDetected: !0
                                    }),
                                    De(Q, m, Zt && "readonly", f, p, T, ce);
                                F && F({
                                    replacing: !0
                                });
                                var be = Ae || !Y.replaceAsync ? "replace" : "replaceAsync";
                                return De(Q, Y[be](m, f), Zt && "readonly", f, p, T, ce)
                            }
                        }
                        return m
                    }
                    return Ct.length ? Ae && G.throwOnBadSyncType ? function() {
                        throw new TypeError("Sync method requested but async result obtained")
                    }() : Promise.resolve(ze(jt, Ct)).then(zt) : !Ae && G.throwOnBadSyncType ? function() {
                        throw new TypeError("Async method requested but sync result obtained")
                    }() : G.stringification && Ae ? [zt(jt)] : Ae ? zt(jt) : Promise.resolve(zt(jt))
                }
            }, {
                key: "encapsulateSync",
                value: function(D, $, G) {
                    return this.encapsulate(D, $, l({
                        throwOnBadSyncType: !0
                    }, G, {
                        sync: !0
                    }))
                }
            }, {
                key: "encapsulateAsync",
                value: function(D, $, G) {
                    return this.encapsulate(D, $, l({
                        throwOnBadSyncType: !0
                    }, G, {
                        sync: !1
                    }))
                }
            }, {
                key: "revive",
                value: function(D, $) {
                    var G = D && D.$types;
                    if (!G)
                        return D;
                    if (G === !0)
                        return D.$;
                    $ = l({
                        sync: !0
                    }, this.options, {}, $);
                    var Se = $
                      , Ae = Se.sync
                      , Ee = []
                      , ne = {}
                      , at = !0;
                    G.$ && O(G.$) && (D = D.$,
                    G = G.$,
                    at = !1);
                    var xt = this;
                    function Ct(je, Re) {
                        var De = xt.revivers[je] || []
                          , We = d(De, 1)
                          , Q = We[0];
                        if (!Q)
                            throw new Error("Unregistered type: " + je);
                        return Ae && !("revive"in Q) ? Re : Q[Ae && Q.revive ? "revive" : !Ae && Q.reviveAsync ? "reviveAsync" : "revive"](Re, ne)
                    }
                    function Zt() {
                        var je = [];
                        if (Object.entries(G).forEach(function(Re) {
                            var De = d(Re, 2)
                              , We = De[0]
                              , Q = De[1];
                            Q !== "#" && [].concat(Q).forEach(function(m) {
                                var f = xt.revivers[m] || [null, {}]
                                  , p = d(f, 2)
                                  , w = p[1].plain;
                                w && (je.push({
                                    keypath: We,
                                    type: m
                                }),
                                delete G[We])
                            })
                        }),
                        !!je.length)
                            return je.sort(se).reduce(function Re(De, We) {
                                var Q = We.keypath
                                  , m = We.type;
                                if (v(De))
                                    return De.then(function(w) {
                                        return Re(w, {
                                            keypath: Q,
                                            type: m
                                        })
                                    });
                                var f = W(D, Q);
                                if (f = Ct(m, f),
                                N(f, k))
                                    return f.then(function(w) {
                                        var T = ve(D, Q, w);
                                        T === w && (D = T)
                                    });
                                var p = ve(D, Q, f);
                                p === f && (D = p)
                            }, void 0)
                    }
                    var Ht = [];
                    function ln(je, Re, De, We, Q) {
                        if (!(at && je === "$types")) {
                            var m = G[je]
                              , f = kt(Re);
                            if (f || O(Re)) {
                                var p = f ? new Array(Re.length) : {};
                                for (Pt(Re).forEach(function(_e) {
                                    var be = ln(je + (je ? "." : "") + pe(_e), Re[_e], De || p, p, _e)
                                      , Pe = function(ke) {
                                        return N(ke, ot) ? p[_e] = void 0 : ke !== void 0 && (p[_e] = ke),
                                        ke
                                    };
                                    N(be, k) ? Ht.push(be.then(function(xe) {
                                        return Pe(xe)
                                    })) : Pe(be)
                                }),
                                Re = p; Ee.length; ) {
                                    var w = d(Ee[0], 4)
                                      , T = w[0]
                                      , F = w[1]
                                      , q = w[2]
                                      , ee = w[3]
                                      , Y = W(T, F);
                                    if (Y !== void 0)
                                        q[ee] = Y;
                                    else
                                        break;
                                    Ee.splice(0, 1)
                                }
                            }
                            if (!m)
                                return Re;
                            if (m === "#") {
                                var ce = W(De, Re.slice(1));
                                return ce === void 0 && Ee.push([De, Re.slice(1), We, Q]),
                                ce
                            }
                            return [].concat(m).reduce(function _e(be, Pe) {
                                return N(be, k) ? be.then(function(xe) {
                                    return _e(xe, Pe)
                                }) : Ct(Pe, be)
                            }, Re)
                        }
                    }
                    function jt(je) {
                        return N(je, ot) ? void 0 : je
                    }
                    var zt = Zt(), ze;
                    return N(zt, k) ? ze = zt.then(function() {
                        return D
                    }) : (ze = ln("", D, null),
                    Ht.length && (ze = k.resolve(ze).then(function(je) {
                        return k.all([je].concat(Ht))
                    }).then(function(je) {
                        var Re = d(je, 1)
                          , De = Re[0];
                        return De
                    }))),
                    v(ze) ? Ae && $.throwOnBadSyncType ? function() {
                        throw new TypeError("Sync method requested but async result obtained")
                    }() : N(ze, k) ? ze.p.then(jt) : ze : !Ae && $.throwOnBadSyncType ? function() {
                        throw new TypeError("Async method requested but sync result obtained")
                    }() : Ae ? jt(ze) : Promise.resolve(jt(ze))
                }
            }, {
                key: "reviveSync",
                value: function(D, $) {
                    return this.revive(D, l({
                        throwOnBadSyncType: !0
                    }, $, {
                        sync: !0
                    }))
                }
            }, {
                key: "reviveAsync",
                value: function(D, $) {
                    return this.revive(D, l({
                        throwOnBadSyncType: !0
                    }, $, {
                        sync: !1
                    }))
                }
            }, {
                key: "register",
                value: function(D, $) {
                    return $ = $ || {},
                    [].concat(D).forEach(function G(Se) {
                        var Ae = this;
                        if (kt(Se))
                            return Se.map(function(Ee) {
                                return G.call(Ae, Ee)
                            });
                        Se && Pt(Se).forEach(function(Ee) {
                            if (Ee === "#")
                                throw new TypeError("# cannot be used as a type name as it is reserved for cyclic objects");
                            if (R.JSON_TYPES.includes(Ee))
                                throw new TypeError("Plain JSON object types are reserved as type names");
                            var ne = Se[Ee]
                              , at = ne && ne.testPlainObjects ? this.plainObjectReplacers : this.nonplainObjectReplacers
                              , xt = at.filter(function(De) {
                                return De.type === Ee
                            });
                            if (xt.length && (at.splice(at.indexOf(xt[0]), 1),
                            delete this.revivers[Ee],
                            delete this.types[Ee]),
                            typeof ne == "function") {
                                var Ct = ne;
                                ne = {
                                    test: function(We) {
                                        return We && We.constructor === Ct
                                    },
                                    replace: function(We) {
                                        return l({}, We)
                                    },
                                    revive: function(We) {
                                        return Object.assign(Object.create(Ct.prototype), We)
                                    }
                                }
                            } else if (kt(ne)) {
                                var Zt = ne
                                  , Ht = d(Zt, 3)
                                  , ln = Ht[0]
                                  , jt = Ht[1]
                                  , zt = Ht[2];
                                ne = {
                                    test: ln,
                                    replace: jt,
                                    revive: zt
                                }
                            }
                            if (!(!ne || !ne.test)) {
                                var ze = {
                                    type: Ee,
                                    test: ne.test.bind(ne)
                                };
                                ne.replace && (ze.replace = ne.replace.bind(ne)),
                                ne.replaceAsync && (ze.replaceAsync = ne.replaceAsync.bind(ne));
                                var je = typeof $.fallback == "number" ? $.fallback : $.fallback ? 0 : 1 / 0;
                                if (ne.testPlainObjects ? this.plainObjectReplacers.splice(je, 0, ze) : this.nonplainObjectReplacers.splice(je, 0, ze),
                                ne.revive || ne.reviveAsync) {
                                    var Re = {};
                                    ne.revive && (Re.revive = ne.revive.bind(ne)),
                                    ne.reviveAsync && (Re.reviveAsync = ne.reviveAsync.bind(ne)),
                                    this.revivers[Ee] = [Re, {
                                        plain: ne.testPlainObjects
                                    }]
                                }
                                this.types[Ee] = ne
                            }
                        }, this)
                    }, this),
                    this
                }
            }]),
            R
        }()
          , ot = function R() {
            s(this, R)
        };
        return ot.__typeson__type__ = "TypesonUndefined",
        Ce.Undefined = ot,
        Ce.Promise = k,
        Ce.isThenable = v,
        Ce.toStringTag = y,
        Ce.hasConstructorOf = N,
        Ce.isObject = z,
        Ce.isPlainObject = O,
        Ce.isUserObject = te,
        Ce.escapeKeyPathComponent = pe,
        Ce.unescapeKeyPathComponent = P,
        Ce.getByKeyPath = W,
        Ce.getJSONType = tt,
        Ce.JSON_TYPES = ["null", "boolean", "number", "string", "array", "object"],
        Ce
    })
})
  , Ty = La(function(t, e) {
    (function(n, r) {
        t.exports = r()
    }
    )(aa, function() {
        function n(m) {
            return (n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
                return typeof f
            }
            : function(f) {
                return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f
            }
            )(m)
        }
        function r(m, f) {
            if (!(m instanceof f))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(m, f) {
            for (var p = 0; p < f.length; p++) {
                var w = f[p];
                w.enumerable = w.enumerable || !1,
                w.configurable = !0,
                "value"in w && (w.writable = !0),
                Object.defineProperty(m, w.key, w)
            }
        }
        function s(m, f, p) {
            return f in m ? Object.defineProperty(m, f, {
                value: p,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : m[f] = p,
            m
        }
        function o(m, f) {
            var p = Object.keys(m);
            if (Object.getOwnPropertySymbols) {
                var w = Object.getOwnPropertySymbols(m);
                f && (w = w.filter(function(T) {
                    return Object.getOwnPropertyDescriptor(m, T).enumerable
                })),
                p.push.apply(p, w)
            }
            return p
        }
        function a(m) {
            return function(p) {
                if (Array.isArray(p))
                    return u(p)
            }(m) || function(p) {
                if (typeof Symbol < "u" && Symbol.iterator in Object(p))
                    return Array.from(p)
            }(m) || function(p, w) {
                if (p) {
                    if (typeof p == "string")
                        return u(p, w);
                    var T = Object.prototype.toString.call(p).slice(8, -1);
                    if (T === "Object" && p.constructor && (T = p.constructor.name),
                    T === "Map" || T === "Set")
                        return Array.from(p);
                    if (T === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))
                        return u(p, w)
                }
            }(m) || function() {
                throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
            }()
        }
        function u(m, f) {
            (f == null || f > m.length) && (f = m.length);
            for (var p = 0, w = new Array(f); p < f; p++)
                w[p] = m[p];
            return w
        }
        function c(m) {
            return (c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(p) {
                return typeof p
            }
            : function(p) {
                return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p
            }
            )(m)
        }
        function l(m, f) {
            if (!(m instanceof f))
                throw new TypeError("Cannot call a class as a function")
        }
        function d(m, f) {
            for (var p = 0; p < f.length; p++) {
                var w = f[p];
                w.enumerable = w.enumerable || !1,
                w.configurable = !0,
                "value"in w && (w.writable = !0),
                Object.defineProperty(m, w.key, w)
            }
        }
        function h(m, f, p) {
            return f in m ? Object.defineProperty(m, f, {
                value: p,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : m[f] = p,
            m
        }
        function g(m, f) {
            var p = Object.keys(m);
            if (Object.getOwnPropertySymbols) {
                var w = Object.getOwnPropertySymbols(m);
                f && (w = w.filter(function(T) {
                    return Object.getOwnPropertyDescriptor(m, T).enumerable
                })),
                p.push.apply(p, w)
            }
            return p
        }
        function _(m) {
            for (var f = 1; f < arguments.length; f++) {
                var p = arguments[f] != null ? arguments[f] : {};
                f % 2 ? g(Object(p), !0).forEach(function(w) {
                    h(m, w, p[w])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(p)) : g(Object(p)).forEach(function(w) {
                    Object.defineProperty(m, w, Object.getOwnPropertyDescriptor(p, w))
                })
            }
            return m
        }
        function b(m, f) {
            return function(w) {
                if (Array.isArray(w))
                    return w
            }(m) || function(w, T) {
                if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(w)))) {
                    var F = []
                      , q = !0
                      , ee = !1
                      , Y = void 0;
                    try {
                        for (var ce, _e = w[Symbol.iterator](); !(q = (ce = _e.next()).done) && (F.push(ce.value),
                        !T || F.length !== T); q = !0)
                            ;
                    } catch (be) {
                        ee = !0,
                        Y = be
                    } finally {
                        try {
                            q || _e.return == null || _e.return()
                        } finally {
                            if (ee)
                                throw Y
                        }
                    }
                    return F
                }
            }(m, f) || E(m, f) || function() {
                throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
            }()
        }
        function x(m) {
            return function(p) {
                if (Array.isArray(p))
                    return S(p)
            }(m) || function(p) {
                if (typeof Symbol < "u" && Symbol.iterator in Object(p))
                    return Array.from(p)
            }(m) || E(m) || function() {
                throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
            }()
        }
        function E(m, f) {
            if (m) {
                if (typeof m == "string")
                    return S(m, f);
                var p = Object.prototype.toString.call(m).slice(8, -1);
                return p === "Object" && m.constructor && (p = m.constructor.name),
                p === "Map" || p === "Set" ? Array.from(m) : p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p) ? S(m, f) : void 0
            }
        }
        function S(m, f) {
            (f == null || f > m.length) && (f = m.length);
            for (var p = 0, w = new Array(f); p < f; p++)
                w[p] = m[p];
            return w
        }
        var k = function m(f) {
            l(this, m),
            this.p = new Promise(f)
        };
        k.__typeson__type__ = "TypesonPromise",
        typeof Symbol < "u" && (k.prototype[Symbol.toStringTag] = "TypesonPromise"),
        k.prototype.then = function(m, f) {
            var p = this;
            return new k(function(w, T) {
                p.p.then(function(F) {
                    w(m ? m(F) : F)
                }).catch(function(F) {
                    return f ? f(F) : Promise.reject(F)
                }).then(w, T)
            }
            )
        }
        ,
        k.prototype.catch = function(m) {
            return this.then(null, m)
        }
        ,
        k.resolve = function(m) {
            return new k(function(f) {
                f(m)
            }
            )
        }
        ,
        k.reject = function(m) {
            return new k(function(f, p) {
                p(m)
            }
            )
        }
        ,
        ["all", "race"].forEach(function(m) {
            k[m] = function(f) {
                return new k(function(p, w) {
                    Promise[m](f.map(function(T) {
                        return T && T.constructor && T.constructor.__typeson__type__ === "TypesonPromise" ? T.p : T
                    })).then(p, w)
                }
                )
            }
        });
        var B = {}.toString
          , I = {}.hasOwnProperty
          , A = Object.getPrototypeOf
          , C = I.toString;
        function M(m, f) {
            return O(m) && typeof m.then == "function" && (!f || typeof m.catch == "function")
        }
        function v(m) {
            return B.call(m).slice(8, -1)
        }
        function y(m, f) {
            if (!m || c(m) !== "object")
                return !1;
            var p = A(m);
            if (!p)
                return f === null;
            var w = I.call(p, "constructor") && p.constructor;
            return typeof w != "function" ? f === null : f === w || f !== null && C.call(w) === C.call(f) || typeof f == "function" && typeof w.__typeson__type__ == "string" && w.__typeson__type__ === f.__typeson__type__
        }
        function N(m) {
            return !(!m || v(m) !== "Object") && (!A(m) || y(m, Object))
        }
        function O(m) {
            return m && c(m) === "object"
        }
        function te(m) {
            return m.replace(/~/g, "~0").replace(/\./g, "~1")
        }
        function z(m) {
            return m.replace(/~1/g, ".").replace(/~0/g, "~")
        }
        function pe(m, f) {
            if (f === "")
                return m;
            var p = f.indexOf(".");
            if (p > -1) {
                var w = m[z(f.slice(0, p))];
                return w === void 0 ? void 0 : pe(w, f.slice(p + 1))
            }
            return m[z(f)]
        }
        function P(m, f, p) {
            if (f === "")
                return p;
            var w = f.indexOf(".");
            return w > -1 ? P(m[z(f.slice(0, w))], f.slice(w + 1), p) : (m[z(f)] = p,
            m)
        }
        function W(m, f, p) {
            return p ? f ? f(m) : m : (m && m.then || (m = Promise.resolve(m)),
            f ? m.then(f) : m)
        }
        var ve = Object.keys
          , tt = Array.isArray
          , Pt = {}.hasOwnProperty
          , kt = ["type", "replaced", "iterateIn", "iterateUnsetNumeric"];
        function Ut(m) {
            return function() {
                for (var f = [], p = 0; p < arguments.length; p++)
                    f[p] = arguments[p];
                try {
                    return Promise.resolve(m.apply(this, f))
                } catch (w) {
                    return Promise.reject(w)
                }
            }
        }
        function kn(m, f) {
            if (m.keypath === "")
                return -1;
            var p = m.keypath.match(/\./g) || 0
              , w = f.keypath.match(/\./g) || 0;
            return p && (p = p.length),
            w && (w = w.length),
            p > w ? -1 : p < w ? 1 : m.keypath < f.keypath ? -1 : m.keypath > f.keypath
        }
        var se = function() {
            function m(f) {
                l(this, m),
                this.options = f,
                this.plainObjectReplacers = [],
                this.nonplainObjectReplacers = [],
                this.revivers = {},
                this.types = {}
            }
            return function(p, w, T) {
                return w && d(p.prototype, w),
                T && d(p, T),
                p
            }(m, [{
                key: "stringify",
                value: function(p, w, T, F) {
                    F = _(_(_({}, this.options), F), {}, {
                        stringification: !0
                    });
                    var q = this.encapsulate(p, null, F);
                    return tt(q) ? JSON.stringify(q[0], w, T) : q.then(function(ee) {
                        return JSON.stringify(ee, w, T)
                    })
                }
            }, {
                key: "stringifySync",
                value: function(p, w, T, F) {
                    return this.stringify(p, w, T, _(_({
                        throwOnBadSyncType: !0
                    }, F), {}, {
                        sync: !0
                    }))
                }
            }, {
                key: "stringifyAsync",
                value: function(p, w, T, F) {
                    return this.stringify(p, w, T, _(_({
                        throwOnBadSyncType: !0
                    }, F), {}, {
                        sync: !1
                    }))
                }
            }, {
                key: "parse",
                value: function(p, w, T) {
                    return T = _(_(_({}, this.options), T), {}, {
                        parse: !0
                    }),
                    this.revive(JSON.parse(p, w), T)
                }
            }, {
                key: "parseSync",
                value: function(p, w, T) {
                    return this.parse(p, w, _(_({
                        throwOnBadSyncType: !0
                    }, T), {}, {
                        sync: !0
                    }))
                }
            }, {
                key: "parseAsync",
                value: function(p, w, T) {
                    return this.parse(p, w, _(_({
                        throwOnBadSyncType: !0
                    }, T), {}, {
                        sync: !1
                    }))
                }
            }, {
                key: "specialTypeNames",
                value: function(p, w) {
                    var T = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                    return T.returnTypeNames = !0,
                    this.encapsulate(p, w, T)
                }
            }, {
                key: "rootTypeName",
                value: function(p, w) {
                    var T = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                    return T.iterateNone = !0,
                    this.encapsulate(p, w, T)
                }
            }, {
                key: "encapsulate",
                value: function(p, w, T) {
                    var F = Ut(function(J, K) {
                        return W(Promise.all(K.map(function(oe) {
                            return oe[1].p
                        })), function(oe) {
                            return W(Promise.all(oe.map(Ut(function(re) {
                                var ue = !1
                                  , we = []
                                  , Dt = b(K.splice(0, 1), 1)
                                  , Je = b(Dt[0], 7)
                                  , Tt = Je[0]
                                  , Ft = Je[2]
                                  , Be = Je[3]
                                  , Kt = Je[4]
                                  , qe = Je[5]
                                  , Bt = Je[6]
                                  , mt = me(Tt, re, Ft, Be, we, !0, Bt)
                                  , Wt = y(mt, k);
                                return function(Js, Bi) {
                                    var lr = Js();
                                    return lr && lr.then ? lr.then(Bi) : Bi(lr)
                                }(function() {
                                    if (Tt && Wt)
                                        return W(mt.p, function(Jt) {
                                            return Kt[qe] = Jt,
                                            ue = !0,
                                            F(J, we)
                                        })
                                }, function(Jt) {
                                    return ue ? Jt : (Tt ? Kt[qe] = mt : J = Wt ? mt.p : mt,
                                    F(J, we))
                                })
                            }))), function() {
                                return J
                            })
                        })
                    })
                      , q = (T = _(_({
                        sync: !0
                    }, this.options), T)).sync
                      , ee = this
                      , Y = {}
                      , ce = []
                      , _e = []
                      , be = []
                      , Pe = !("cyclic"in T) || T.cyclic
                      , xe = T.encapsulateObserver
                      , ke = me("", p, Pe, w || {}, be);
                    function Fe(J) {
                        var K = Object.values(Y);
                        if (T.iterateNone)
                            return K.length ? K[0] : m.getJSONType(J);
                        if (K.length) {
                            if (T.returnTypeNames)
                                return x(new Set(K));
                            J && N(J) && !Pt.call(J, "$types") ? J.$types = Y : J = {
                                $: J,
                                $types: {
                                    $: Y
                                }
                            }
                        } else
                            O(J) && Pt.call(J, "$types") && (J = {
                                $: J,
                                $types: !0
                            });
                        return !T.returnTypeNames && J
                    }
                    function Ke(J, K, oe) {
                        Object.assign(J, K);
                        var re = kt.map(function(ue) {
                            var we = J[ue];
                            return delete J[ue],
                            we
                        });
                        oe(),
                        kt.forEach(function(ue, we) {
                            J[ue] = re[we]
                        })
                    }
                    function me(J, K, oe, re, ue, we, Dt) {
                        var Je, Tt = {}, Ft = c(K), Be = xe ? function(xn) {
                            var yt = Dt || re.type || m.getJSONType(K);
                            xe(Object.assign(xn || Tt, {
                                keypath: J,
                                value: K,
                                cyclic: oe,
                                stateObj: re,
                                promisesData: ue,
                                resolvingTypesonPromise: we,
                                awaitingTypesonPromise: y(K, k)
                            }, {
                                type: yt
                            }))
                        }
                        : null;
                        if (["string", "boolean", "number", "undefined"].includes(Ft))
                            return K === void 0 || Number.isNaN(K) || K === Number.NEGATIVE_INFINITY || K === Number.POSITIVE_INFINITY ? (Je = re.replaced ? K : ct(J, K, re, ue, !1, we, Be)) !== K && (Tt = {
                                replaced: Je
                            }) : Je = K,
                            Be && Be(),
                            Je;
                        if (K === null)
                            return Be && Be(),
                            K;
                        if (oe && !re.iterateIn && !re.iterateUnsetNumeric && K && c(K) === "object") {
                            var Kt = ce.indexOf(K);
                            if (!(Kt < 0))
                                return Y[J] = "#",
                                Be && Be({
                                    cyclicKeypath: _e[Kt]
                                }),
                                "#" + _e[Kt];
                            oe === !0 && (ce.push(K),
                            _e.push(J))
                        }
                        var qe, Bt = N(K), mt = tt(K), Wt = (Bt || mt) && (!ee.plainObjectReplacers.length || re.replaced) || re.iterateIn ? K : ct(J, K, re, ue, Bt || mt, null, Be);
                        if (Wt !== K ? (Je = Wt,
                        Tt = {
                            replaced: Wt
                        }) : J === "" && y(K, k) ? (ue.push([J, K, oe, re, void 0, void 0, re.type]),
                        Je = K) : mt && re.iterateIn !== "object" || re.iterateIn === "array" ? (qe = new Array(K.length),
                        Tt = {
                            clone: qe
                        }) : (["function", "symbol"].includes(c(K)) || "toJSON"in K || y(K, k) || y(K, Promise) || y(K, ArrayBuffer)) && !Bt && re.iterateIn !== "object" ? Je = K : (qe = {},
                        re.addLength && (qe.length = K.length),
                        Tt = {
                            clone: qe
                        }),
                        Be && Be(),
                        T.iterateNone)
                            return qe || Je;
                        if (!qe)
                            return Je;
                        if (re.iterateIn) {
                            var Jt = function(yt) {
                                var fn = {
                                    ownKeys: Pt.call(K, yt)
                                };
                                Ke(re, fn, function() {
                                    var Gn = J + (J ? "." : "") + te(yt)
                                      , $i = me(Gn, K[yt], !!oe, re, ue, we);
                                    y($i, k) ? ue.push([Gn, $i, !!oe, re, qe, yt, re.type]) : $i !== void 0 && (qe[yt] = $i)
                                })
                            };
                            for (var Js in K)
                                Jt(Js);
                            Be && Be({
                                endIterateIn: !0,
                                end: !0
                            })
                        } else
                            ve(K).forEach(function(xn) {
                                var yt = J + (J ? "." : "") + te(xn);
                                Ke(re, {
                                    ownKeys: !0
                                }, function() {
                                    var fn = me(yt, K[xn], !!oe, re, ue, we);
                                    y(fn, k) ? ue.push([yt, fn, !!oe, re, qe, xn, re.type]) : fn !== void 0 && (qe[xn] = fn)
                                })
                            }),
                            Be && Be({
                                endIterateOwn: !0,
                                end: !0
                            });
                        if (re.iterateUnsetNumeric) {
                            for (var Bi = K.length, lr = function(yt) {
                                if (!(yt in K)) {
                                    var fn = J + (J ? "." : "") + yt;
                                    Ke(re, {
                                        ownKeys: !1
                                    }, function() {
                                        var Gn = me(fn, void 0, !!oe, re, ue, we);
                                        y(Gn, k) ? ue.push([fn, Gn, !!oe, re, qe, yt, re.type]) : Gn !== void 0 && (qe[yt] = Gn)
                                    })
                                }
                            }, Xs = 0; Xs < Bi; Xs++)
                                lr(Xs);
                            Be && Be({
                                endIterateUnsetNumeric: !0,
                                end: !0
                            })
                        }
                        return qe
                    }
                    function ct(J, K, oe, re, ue, we, Dt) {
                        for (var Je = ue ? ee.plainObjectReplacers : ee.nonplainObjectReplacers, Tt = Je.length; Tt--; ) {
                            var Ft = Je[Tt];
                            if (Ft.test(K, oe)) {
                                var Be = Ft.type;
                                if (ee.revivers[Be]) {
                                    var Kt = Y[J];
                                    Y[J] = Kt ? [Be].concat(Kt) : Be
                                }
                                return Object.assign(oe, {
                                    type: Be,
                                    replaced: !0
                                }),
                                !q && Ft.replaceAsync || Ft.replace ? (Dt && Dt({
                                    replacing: !0
                                }),
                                me(J, Ft[q || !Ft.replaceAsync ? "replace" : "replaceAsync"](K, oe), Pe && "readonly", oe, re, we, Be)) : (Dt && Dt({
                                    typeDetected: !0
                                }),
                                me(J, K, Pe && "readonly", oe, re, we, Be))
                            }
                        }
                        return K
                    }
                    return be.length ? q && T.throwOnBadSyncType ? function() {
                        throw new TypeError("Sync method requested but async result obtained")
                    }() : Promise.resolve(F(ke, be)).then(Fe) : !q && T.throwOnBadSyncType ? function() {
                        throw new TypeError("Async method requested but sync result obtained")
                    }() : T.stringification && q ? [Fe(ke)] : q ? Fe(ke) : Promise.resolve(Fe(ke))
                }
            }, {
                key: "encapsulateSync",
                value: function(p, w, T) {
                    return this.encapsulate(p, w, _(_({
                        throwOnBadSyncType: !0
                    }, T), {}, {
                        sync: !0
                    }))
                }
            }, {
                key: "encapsulateAsync",
                value: function(p, w, T) {
                    return this.encapsulate(p, w, _(_({
                        throwOnBadSyncType: !0
                    }, T), {}, {
                        sync: !1
                    }))
                }
            }, {
                key: "revive",
                value: function(p, w) {
                    var T = p && p.$types;
                    if (!T)
                        return p;
                    if (T === !0)
                        return p.$;
                    var F = (w = _(_({
                        sync: !0
                    }, this.options), w)).sync
                      , q = []
                      , ee = {}
                      , Y = !0;
                    T.$ && N(T.$) && (p = p.$,
                    T = T.$,
                    Y = !1);
                    var ce = this;
                    function _e(Fe, Ke) {
                        var me = b(ce.revivers[Fe] || [], 1)[0];
                        if (!me)
                            throw new Error("Unregistered type: " + Fe);
                        return F && !("revive"in me) ? Ke : me[F && me.revive ? "revive" : !F && me.reviveAsync ? "reviveAsync" : "revive"](Ke, ee)
                    }
                    var be = [];
                    function Pe(Fe) {
                        return y(Fe, Ce) ? void 0 : Fe
                    }
                    var xe, ke = function() {
                        var Ke = [];
                        if (Object.entries(T).forEach(function(me) {
                            var ct = b(me, 2)
                              , J = ct[0]
                              , K = ct[1];
                            K !== "#" && [].concat(K).forEach(function(oe) {
                                b(ce.revivers[oe] || [null, {}], 2)[1].plain && (Ke.push({
                                    keypath: J,
                                    type: oe
                                }),
                                delete T[J])
                            })
                        }),
                        Ke.length)
                            return Ke.sort(kn).reduce(function me(ct, J) {
                                var K = J.keypath
                                  , oe = J.type;
                                if (M(ct))
                                    return ct.then(function(we) {
                                        return me(we, {
                                            keypath: K,
                                            type: oe
                                        })
                                    });
                                var re = pe(p, K);
                                if (y(re = _e(oe, re), k))
                                    return re.then(function(we) {
                                        var Dt = P(p, K, we);
                                        Dt === we && (p = Dt)
                                    });
                                var ue = P(p, K, re);
                                ue === re && (p = ue)
                            }, void 0)
                    }();
                    return y(ke, k) ? xe = ke.then(function() {
                        return p
                    }) : (xe = function Fe(Ke, me, ct, J, K) {
                        if (!Y || Ke !== "$types") {
                            var oe = T[Ke]
                              , re = tt(me);
                            if (re || N(me)) {
                                var ue = re ? new Array(me.length) : {};
                                for (ve(me).forEach(function(qe) {
                                    var Bt = Fe(Ke + (Ke ? "." : "") + te(qe), me[qe], ct || ue, ue, qe)
                                      , mt = function(Jt) {
                                        return y(Jt, Ce) ? ue[qe] = void 0 : Jt !== void 0 && (ue[qe] = Jt),
                                        Jt
                                    };
                                    y(Bt, k) ? be.push(Bt.then(function(Wt) {
                                        return mt(Wt)
                                    })) : mt(Bt)
                                }),
                                me = ue; q.length; ) {
                                    var we = b(q[0], 4)
                                      , Dt = we[0]
                                      , Je = we[1]
                                      , Tt = we[2]
                                      , Ft = we[3]
                                      , Be = pe(Dt, Je);
                                    if (Be === void 0)
                                        break;
                                    Tt[Ft] = Be,
                                    q.splice(0, 1)
                                }
                            }
                            if (!oe)
                                return me;
                            if (oe === "#") {
                                var Kt = pe(ct, me.slice(1));
                                return Kt === void 0 && q.push([ct, me.slice(1), J, K]),
                                Kt
                            }
                            return [].concat(oe).reduce(function qe(Bt, mt) {
                                return y(Bt, k) ? Bt.then(function(Wt) {
                                    return qe(Wt, mt)
                                }) : _e(mt, Bt)
                            }, me)
                        }
                    }("", p, null),
                    be.length && (xe = k.resolve(xe).then(function(Fe) {
                        return k.all([Fe].concat(be))
                    }).then(function(Fe) {
                        return b(Fe, 1)[0]
                    }))),
                    M(xe) ? F && w.throwOnBadSyncType ? function() {
                        throw new TypeError("Sync method requested but async result obtained")
                    }() : y(xe, k) ? xe.p.then(Pe) : xe : !F && w.throwOnBadSyncType ? function() {
                        throw new TypeError("Async method requested but sync result obtained")
                    }() : F ? Pe(xe) : Promise.resolve(Pe(xe))
                }
            }, {
                key: "reviveSync",
                value: function(p, w) {
                    return this.revive(p, _(_({
                        throwOnBadSyncType: !0
                    }, w), {}, {
                        sync: !0
                    }))
                }
            }, {
                key: "reviveAsync",
                value: function(p, w) {
                    return this.revive(p, _(_({
                        throwOnBadSyncType: !0
                    }, w), {}, {
                        sync: !1
                    }))
                }
            }, {
                key: "register",
                value: function(p, w) {
                    return w = w || {},
                    [].concat(p).forEach(function T(F) {
                        var q = this;
                        if (tt(F))
                            return F.map(function(ee) {
                                return T.call(q, ee)
                            });
                        F && ve(F).forEach(function(ee) {
                            if (ee === "#")
                                throw new TypeError("# cannot be used as a type name as it is reserved for cyclic objects");
                            if (m.JSON_TYPES.includes(ee))
                                throw new TypeError("Plain JSON object types are reserved as type names");
                            var Y = F[ee]
                              , ce = Y && Y.testPlainObjects ? this.plainObjectReplacers : this.nonplainObjectReplacers
                              , _e = ce.filter(function(Ke) {
                                return Ke.type === ee
                            });
                            if (_e.length && (ce.splice(ce.indexOf(_e[0]), 1),
                            delete this.revivers[ee],
                            delete this.types[ee]),
                            typeof Y == "function") {
                                var be = Y;
                                Y = {
                                    test: function(me) {
                                        return me && me.constructor === be
                                    },
                                    replace: function(me) {
                                        return _({}, me)
                                    },
                                    revive: function(me) {
                                        return Object.assign(Object.create(be.prototype), me)
                                    }
                                }
                            } else if (tt(Y)) {
                                var Pe = b(Y, 3);
                                Y = {
                                    test: Pe[0],
                                    replace: Pe[1],
                                    revive: Pe[2]
                                }
                            }
                            if (Y && Y.test) {
                                var xe = {
                                    type: ee,
                                    test: Y.test.bind(Y)
                                };
                                Y.replace && (xe.replace = Y.replace.bind(Y)),
                                Y.replaceAsync && (xe.replaceAsync = Y.replaceAsync.bind(Y));
                                var ke = typeof w.fallback == "number" ? w.fallback : w.fallback ? 0 : Number.POSITIVE_INFINITY;
                                if (Y.testPlainObjects ? this.plainObjectReplacers.splice(ke, 0, xe) : this.nonplainObjectReplacers.splice(ke, 0, xe),
                                Y.revive || Y.reviveAsync) {
                                    var Fe = {};
                                    Y.revive && (Fe.revive = Y.revive.bind(Y)),
                                    Y.reviveAsync && (Fe.reviveAsync = Y.reviveAsync.bind(Y)),
                                    this.revivers[ee] = [Fe, {
                                        plain: Y.testPlainObjects
                                    }]
                                }
                                this.types[ee] = Y
                            }
                        }, this)
                    }, this),
                    this
                }
            }]),
            m
        }()
          , Ce = function m() {
            l(this, m)
        };
        Ce.__typeson__type__ = "TypesonUndefined",
        se.Undefined = Ce,
        se.Promise = k,
        se.isThenable = M,
        se.toStringTag = v,
        se.hasConstructorOf = y,
        se.isObject = O,
        se.isPlainObject = N,
        se.isUserObject = function m(f) {
            if (!f || v(f) !== "Object")
                return !1;
            var p = A(f);
            return !p || y(f, Object) || m(p)
        }
        ,
        se.escapeKeyPathComponent = te,
        se.unescapeKeyPathComponent = z,
        se.getByKeyPath = pe,
        se.getJSONType = function(f) {
            return f === null ? "null" : Array.isArray(f) ? "array" : c(f)
        }
        ,
        se.JSON_TYPES = ["null", "boolean", "number", "string", "array", "object"];
        for (var ot = {
            userObject: {
                test: function(f, p) {
                    return se.isUserObject(f)
                },
                replace: function(f) {
                    return function(w) {
                        for (var T = 1; T < arguments.length; T++) {
                            var F = arguments[T] != null ? arguments[T] : {};
                            T % 2 ? o(Object(F), !0).forEach(function(q) {
                                s(w, q, F[q])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(F)) : o(Object(F)).forEach(function(q) {
                                Object.defineProperty(w, q, Object.getOwnPropertyDescriptor(F, q))
                            })
                        }
                        return w
                    }({}, f)
                },
                revive: function(f) {
                    return f
                }
            }
        }, R = [{
            arrayNonindexKeys: {
                testPlainObjects: !0,
                test: function(f, p) {
                    return !!Array.isArray(f) && (Object.keys(f).some(function(w) {
                        return String(Number.parseInt(w)) !== w
                    }) && (p.iterateIn = "object",
                    p.addLength = !0),
                    !0)
                },
                replace: function(f, p) {
                    return p.iterateUnsetNumeric = !0,
                    f
                },
                revive: function(f) {
                    if (Array.isArray(f))
                        return f;
                    var p = [];
                    return Object.keys(f).forEach(function(w) {
                        var T = f[w];
                        p[w] = T
                    }),
                    p
                }
            }
        }, {
            sparseUndefined: {
                test: function(f, p) {
                    return f === void 0 && p.ownKeys === !1
                },
                replace: function(f) {
                    return 0
                },
                revive: function(f) {}
            }
        }], j = {
            undef: {
                test: function(f, p) {
                    return f === void 0 && (p.ownKeys || !("ownKeys"in p))
                },
                replace: function(f) {
                    return 0
                },
                revive: function(f) {
                    return new se.Undefined
                }
            }
        }, D = {
            StringObject: {
                test: function(f) {
                    return se.toStringTag(f) === "String" && n(f) === "object"
                },
                replace: function(f) {
                    return String(f)
                },
                revive: function(f) {
                    return new String(f)
                }
            },
            BooleanObject: {
                test: function(f) {
                    return se.toStringTag(f) === "Boolean" && n(f) === "object"
                },
                replace: function(f) {
                    return !!f
                },
                revive: function(f) {
                    return new Boolean(f)
                }
            },
            NumberObject: {
                test: function(f) {
                    return se.toStringTag(f) === "Number" && n(f) === "object"
                },
                replace: function(f) {
                    return Number(f)
                },
                revive: function(f) {
                    return new Number(f)
                }
            }
        }, $ = [{
            nan: {
                test: function(f) {
                    return Number.isNaN(f)
                },
                replace: function(f) {
                    return "NaN"
                },
                revive: function(f) {
                    return Number.NaN
                }
            }
        }, {
            infinity: {
                test: function(f) {
                    return f === Number.POSITIVE_INFINITY
                },
                replace: function(f) {
                    return "Infinity"
                },
                revive: function(f) {
                    return Number.POSITIVE_INFINITY
                }
            }
        }, {
            negativeInfinity: {
                test: function(f) {
                    return f === Number.NEGATIVE_INFINITY
                },
                replace: function(f) {
                    return "-Infinity"
                },
                revive: function(f) {
                    return Number.NEGATIVE_INFINITY
                }
            }
        }], G = {
            date: {
                test: function(f) {
                    return se.toStringTag(f) === "Date"
                },
                replace: function(f) {
                    var p = f.getTime();
                    return Number.isNaN(p) ? "NaN" : p
                },
                revive: function(f) {
                    return f === "NaN" ? new Date(Number.NaN) : new Date(f)
                }
            }
        }, Se = {
            regexp: {
                test: function(f) {
                    return se.toStringTag(f) === "RegExp"
                },
                replace: function(f) {
                    return {
                        source: f.source,
                        flags: (f.global ? "g" : "") + (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.sticky ? "y" : "") + (f.unicode ? "u" : "")
                    }
                },
                revive: function(f) {
                    var p = f.source
                      , w = f.flags;
                    return new RegExp(p,w)
                }
            }
        }, Ae = {
            map: {
                test: function(f) {
                    return se.toStringTag(f) === "Map"
                },
                replace: function(f) {
                    return a(f.entries())
                },
                revive: function(f) {
                    return new Map(f)
                }
            }
        }, Ee = {
            set: {
                test: function(f) {
                    return se.toStringTag(f) === "Set"
                },
                replace: function(f) {
                    return a(f.values())
                },
                revive: function(f) {
                    return new Set(f)
                }
            }
        }, ne = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", at = new Uint8Array(256), xt = 0; xt < ne.length; xt++)
            at[ne.charCodeAt(xt)] = xt;
        var Ct = function(f, p, w) {
            w == null && (w = f.byteLength);
            for (var T = new Uint8Array(f,p || 0,w), F = T.length, q = "", ee = 0; ee < F; ee += 3)
                q += ne[T[ee] >> 2],
                q += ne[(3 & T[ee]) << 4 | T[ee + 1] >> 4],
                q += ne[(15 & T[ee + 1]) << 2 | T[ee + 2] >> 6],
                q += ne[63 & T[ee + 2]];
            return F % 3 == 2 ? q = q.slice(0, -1) + "=" : F % 3 == 1 && (q = q.slice(0, -2) + "=="),
            q
        }
          , Zt = function(f) {
            var p, w, T, F, q = f.length, ee = .75 * f.length, Y = 0;
            f[f.length - 1] === "=" && (ee--,
            f[f.length - 2] === "=" && ee--);
            for (var ce = new ArrayBuffer(ee), _e = new Uint8Array(ce), be = 0; be < q; be += 4)
                p = at[f.charCodeAt(be)],
                w = at[f.charCodeAt(be + 1)],
                T = at[f.charCodeAt(be + 2)],
                F = at[f.charCodeAt(be + 3)],
                _e[Y++] = p << 2 | w >> 4,
                _e[Y++] = (15 & w) << 4 | T >> 2,
                _e[Y++] = (3 & T) << 6 | 63 & F;
            return ce
        }
          , Ht = {
            arraybuffer: {
                test: function(f) {
                    return se.toStringTag(f) === "ArrayBuffer"
                },
                replace: function(f, p) {
                    p.buffers || (p.buffers = []);
                    var w = p.buffers.indexOf(f);
                    return w > -1 ? {
                        index: w
                    } : (p.buffers.push(f),
                    Ct(f))
                },
                revive: function(f, p) {
                    if (p.buffers || (p.buffers = []),
                    n(f) === "object")
                        return p.buffers[f.index];
                    var w = Zt(f);
                    return p.buffers.push(w),
                    w
                }
            }
        }
          , ln = typeof self > "u" ? aa : self
          , jt = {};
        ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"].forEach(function(m) {
            var f = m
              , p = ln[f];
            p && (jt[m.toLowerCase()] = {
                test: function(T) {
                    return se.toStringTag(T) === f
                },
                replace: function(T, F) {
                    var q = T.buffer
                      , ee = T.byteOffset
                      , Y = T.length;
                    F.buffers || (F.buffers = []);
                    var ce = F.buffers.indexOf(q);
                    return ce > -1 ? {
                        index: ce,
                        byteOffset: ee,
                        length: Y
                    } : (F.buffers.push(q),
                    {
                        encoded: Ct(q),
                        byteOffset: ee,
                        length: Y
                    })
                },
                revive: function(T, F) {
                    F.buffers || (F.buffers = []);
                    var q, ee = T.byteOffset, Y = T.length, ce = T.encoded, _e = T.index;
                    return "index"in T ? q = F.buffers[_e] : (q = Zt(ce),
                    F.buffers.push(q)),
                    new p(q,ee,Y)
                }
            })
        });
        var zt = {
            dataview: {
                test: function(f) {
                    return se.toStringTag(f) === "DataView"
                },
                replace: function(f, p) {
                    var w = f.buffer
                      , T = f.byteOffset
                      , F = f.byteLength;
                    p.buffers || (p.buffers = []);
                    var q = p.buffers.indexOf(w);
                    return q > -1 ? {
                        index: q,
                        byteOffset: T,
                        byteLength: F
                    } : (p.buffers.push(w),
                    {
                        encoded: Ct(w),
                        byteOffset: T,
                        byteLength: F
                    })
                },
                revive: function(f, p) {
                    p.buffers || (p.buffers = []);
                    var w, T = f.byteOffset, F = f.byteLength, q = f.encoded, ee = f.index;
                    return "index"in f ? w = p.buffers[ee] : (w = Zt(q),
                    p.buffers.push(w)),
                    new DataView(w,T,F)
                }
            }
        }
          , ze = {
            IntlCollator: {
                test: function(f) {
                    return se.hasConstructorOf(f, Intl.Collator)
                },
                replace: function(f) {
                    return f.resolvedOptions()
                },
                revive: function(f) {
                    return new Intl.Collator(f.locale,f)
                }
            },
            IntlDateTimeFormat: {
                test: function(f) {
                    return se.hasConstructorOf(f, Intl.DateTimeFormat)
                },
                replace: function(f) {
                    return f.resolvedOptions()
                },
                revive: function(f) {
                    return new Intl.DateTimeFormat(f.locale,f)
                }
            },
            IntlNumberFormat: {
                test: function(f) {
                    return se.hasConstructorOf(f, Intl.NumberFormat)
                },
                replace: function(f) {
                    return f.resolvedOptions()
                },
                revive: function(f) {
                    return new Intl.NumberFormat(f.locale,f)
                }
            }
        };
        function je(m) {
            for (var f = new Uint8Array(m.length), p = 0; p < m.length; p++)
                f[p] = m.charCodeAt(p);
            return f.buffer
        }
        var Re = {
            file: {
                test: function(f) {
                    return se.toStringTag(f) === "File"
                },
                replace: function(f) {
                    var p = new XMLHttpRequest;
                    if (p.overrideMimeType("text/plain; charset=x-user-defined"),
                    p.open("GET", URL.createObjectURL(f), !1),
                    p.send(),
                    p.status !== 200 && p.status !== 0)
                        throw new Error("Bad File access: " + p.status);
                    return {
                        type: f.type,
                        stringContents: p.responseText,
                        name: f.name,
                        lastModified: f.lastModified
                    }
                },
                revive: function(f) {
                    var p = f.name
                      , w = f.type
                      , T = f.stringContents
                      , F = f.lastModified;
                    return new File([je(T)],p,{
                        type: w,
                        lastModified: F
                    })
                },
                replaceAsync: function(f) {
                    return new se.Promise(function(p, w) {
                        var T = new FileReader;
                        T.addEventListener("load", function() {
                            p({
                                type: f.type,
                                stringContents: T.result,
                                name: f.name,
                                lastModified: f.lastModified
                            })
                        }),
                        T.addEventListener("error", function() {
                            w(T.error)
                        }),
                        T.readAsBinaryString(f)
                    }
                    )
                }
            }
        }
          , De = {
            bigint: {
                test: function(f) {
                    return typeof f == "bigint"
                },
                replace: function(f) {
                    return String(f)
                },
                revive: function(f) {
                    return BigInt(f)
                }
            }
        }
          , We = {
            bigintObject: {
                test: function(f) {
                    return n(f) === "object" && se.hasConstructorOf(f, BigInt)
                },
                replace: function(f) {
                    return String(f)
                },
                revive: function(f) {
                    return new Object(BigInt(f))
                }
            }
        }
          , Q = {
            cryptokey: {
                test: function(f) {
                    return se.toStringTag(f) === "CryptoKey" && f.extractable
                },
                replaceAsync: function(f) {
                    return new se.Promise(function(p, w) {
                        crypto.subtle.exportKey("jwk", f).catch(function(T) {
                            w(T)
                        }).then(function(T) {
                            p({
                                jwk: T,
                                algorithm: f.algorithm,
                                usages: f.usages
                            })
                        })
                    }
                    )
                },
                revive: function(f) {
                    var p = f.jwk
                      , w = f.algorithm
                      , T = f.usages;
                    return crypto.subtle.importKey("jwk", p, w, !0, T)
                }
            }
        };
        return [ot, j, R, D, $, G, Se, {
            imagedata: {
                test: function(f) {
                    return se.toStringTag(f) === "ImageData"
                },
                replace: function(f) {
                    return {
                        array: a(f.data),
                        width: f.width,
                        height: f.height
                    }
                },
                revive: function(f) {
                    return new ImageData(new Uint8ClampedArray(f.array),f.width,f.height)
                }
            }
        }, {
            imagebitmap: {
                test: function(f) {
                    return se.toStringTag(f) === "ImageBitmap" || f && f.dataset && f.dataset.toStringTag === "ImageBitmap"
                },
                replace: function(f) {
                    var p = document.createElement("canvas");
                    return p.getContext("2d").drawImage(f, 0, 0),
                    p.toDataURL()
                },
                revive: function(f) {
                    var p = document.createElement("canvas")
                      , w = p.getContext("2d")
                      , T = document.createElement("img");
                    return T.addEventListener("load", function() {
                        w.drawImage(T, 0, 0)
                    }),
                    T.src = f,
                    p
                },
                reviveAsync: function(f) {
                    var p = document.createElement("canvas")
                      , w = p.getContext("2d")
                      , T = document.createElement("img");
                    return T.addEventListener("load", function() {
                        w.drawImage(T, 0, 0)
                    }),
                    T.src = f,
                    createImageBitmap(p)
                }
            }
        }, Re, {
            file: Re.file,
            filelist: {
                test: function(f) {
                    return se.toStringTag(f) === "FileList"
                },
                replace: function(f) {
                    for (var p = [], w = 0; w < f.length; w++)
                        p[w] = f.item(w);
                    return p
                },
                revive: function(f) {
                    return new (function() {
                        function p() {
                            r(this, p),
                            this._files = arguments[0],
                            this.length = this._files.length
                        }
                        return function(T, F, q) {
                            return F && i(T.prototype, F),
                            q && i(T, q),
                            T
                        }(p, [{
                            key: "item",
                            value: function(T) {
                                return this._files[T]
                            }
                        }, {
                            key: Symbol.toStringTag,
                            get: function() {
                                return "FileList"
                            }
                        }]),
                        p
                    }())(f)
                }
            }
        }, {
            blob: {
                test: function(f) {
                    return se.toStringTag(f) === "Blob"
                },
                replace: function(f) {
                    var p = new XMLHttpRequest;
                    if (p.overrideMimeType("text/plain; charset=x-user-defined"),
                    p.open("GET", URL.createObjectURL(f), !1),
                    p.send(),
                    p.status !== 200 && p.status !== 0)
                        throw new Error("Bad Blob access: " + p.status);
                    return {
                        type: f.type,
                        stringContents: p.responseText
                    }
                },
                revive: function(f) {
                    var p = f.type
                      , w = f.stringContents;
                    return new Blob([je(w)],{
                        type: p
                    })
                },
                replaceAsync: function(f) {
                    return new se.Promise(function(p, w) {
                        var T = new FileReader;
                        T.addEventListener("load", function() {
                            p({
                                type: f.type,
                                stringContents: T.result
                            })
                        }),
                        T.addEventListener("error", function() {
                            w(T.error)
                        }),
                        T.readAsBinaryString(f)
                    }
                    )
                }
            }
        }].concat(typeof Map == "function" ? Ae : [], typeof Set == "function" ? Ee : [], typeof ArrayBuffer == "function" ? Ht : [], typeof Uint8Array == "function" ? jt : [], typeof DataView == "function" ? zt : [], typeof Intl < "u" ? ze : [], typeof crypto < "u" ? Q : [], typeof BigInt < "u" ? [De, We] : [])
    })
})
  , Er = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , ti = new Uint8Array(256);
for (var es = 0; es < Er.length; es++)
    ti[Er.codePointAt(es)] = es;
var ca = function(e, n, r) {
    r == null && (r = e.byteLength);
    for (var i = new Uint8Array(e,n || 0,r), s = i.length, o = "", a = 0; a < s; a += 3)
        o += Er[i[a] >> 2],
        o += Er[(i[a] & 3) << 4 | i[a + 1] >> 4],
        o += Er[(i[a + 1] & 15) << 2 | i[a + 2] >> 6],
        o += Er[i[a + 2] & 63];
    return s % 3 === 2 ? o = o.slice(0, -1) + "=" : s % 3 === 1 && (o = o.slice(0, -2) + "=="),
    o
}
  , Sl = function(e) {
    var n = e.length, r = e.length * .75, i = 0, s, o, a, u;
    e[e.length - 1] === "=" && (r--,
    e[e.length - 2] === "=" && r--);
    for (var c = new ArrayBuffer(r), l = new Uint8Array(c), d = 0; d < n; d += 4)
        s = ti[e.codePointAt(d)],
        o = ti[e.codePointAt(d + 1)],
        a = ti[e.codePointAt(d + 2)],
        u = ti[e.codePointAt(d + 3)],
        l[i++] = s << 2 | o >> 4,
        l[i++] = (o & 15) << 4 | a >> 2,
        l[i++] = (a & 3) << 6 | u & 63;
    return c
}
  , Oy = typeof self > "u" ? global : self
  , kl = {};
["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"].forEach(function(t) {
    var e = t
      , n = Oy[e];
    n && (kl[t.toLowerCase() + "2"] = {
        test: function(r) {
            return Ws.toStringTag(r) === e
        },
        replace: function(r) {
            var i = r.buffer
              , s = r.byteOffset
              , o = r.length;
            return {
                buffer: i,
                byteOffset: s,
                length: o
            }
        },
        revive: function(r) {
            var i = r.buffer
              , s = r.byteOffset
              , o = r.length;
            return new n(i,s,o)
        }
    })
});
var Ny = {
    arraybuffer: {
        test: function(t) {
            return Ws.toStringTag(t) === "ArrayBuffer"
        },
        replace: function(t) {
            return ca(t, 0, t.byteLength)
        },
        revive: function(t) {
            var e = Sl(t);
            return e
        }
    }
}
  , qt = new Ws().register(Ty)
  , Ay = "FileReaderSync"in self
  , Ls = []
  , po = 0;
qt.register([Ny, kl, {
    blob2: {
        test: function(t) {
            return Ws.toStringTag(t) === "Blob"
        },
        replace: function(t) {
            if (t.isClosed)
                throw new Error("The Blob is closed");
            if (Ay) {
                var e = El(t, "binary")
                  , n = ca(e, 0, e.byteLength);
                return {
                    type: t.type,
                    data: n
                }
            } else {
                Ls.push(t);
                var r = {
                    type: t.type,
                    data: {
                        start: po,
                        end: po + t.size
                    }
                };
                return po += t.size,
                r
            }
        },
        finalize: function(t, e) {
            t.data = ca(e, 0, e.byteLength)
        },
        revive: function(t) {
            var e = t.type
              , n = t.data;
            return new Blob([Sl(n)],{
                type: e
            })
        }
    }
}]);
qt.mustFinalize = function() {
    return Ls.length > 0
}
;
qt.finalize = function(t) {
    return Kn(void 0, void 0, void 0, function() {
        var e, n, r, i, s, o, a, u, c, l;
        return en(this, function(d) {
            switch (d.label) {
            case 0:
                return [4, wl(new Blob(Ls), "binary")];
            case 1:
                if (e = d.sent(),
                t) {
                    for (n = 0,
                    r = t; n < r.length; n++)
                        if (i = r[n],
                        i.$types) {
                            s = i.$types,
                            o = s.$,
                            o && (s = s.$);
                            for (a in s)
                                u = s[a],
                                c = qt.types[u],
                                c && c.finalize && (l = Qe.getByKeyPath(i, o ? "$." + a : a),
                                c.finalize(l, e.slice(l.start, l.end)))
                        }
                }
                return Ls = [],
                [2]
            }
        })
    })
}
;
var Ry = 2e3;
function xl(t, e) {
    return Kn(this, void 0, void 0, function() {
        function n() {
            return Kn(this, void 0, void 0, function() {
                var c, l, d, h, g, _, b, x, E;
                return en(this, function(S) {
                    switch (S.label) {
                    case 0:
                        return [4, Promise.all(t.tables.map(function(k) {
                            return k.count()
                        }))];
                    case 1:
                        c = S.sent(),
                        c.forEach(function(k, B) {
                            return i[B].rowCount = k
                        }),
                        u.totalRows = c.reduce(function(k, B) {
                            return k + B
                        }),
                        l = JSON.stringify(o, void 0, s ? 2 : void 0),
                        d = l.lastIndexOf("]"),
                        h = l.substring(0, d),
                        r.push(h),
                        g = e.filter,
                        _ = function(k) {
                            var B, I, A, C, M, v, y, N, O, te, z, pe;
                            return en(this, function(P) {
                                switch (P.label) {
                                case 0:
                                    B = t.table(k),
                                    I = B.schema.primKey,
                                    A = !!I.keyPath,
                                    C = e.numRowsPerChunk || Ry,
                                    M = A ? {
                                        tableName: B.name,
                                        inbound: !0,
                                        rows: []
                                    } : {
                                        tableName: B.name,
                                        inbound: !1,
                                        rows: []
                                    },
                                    v = JSON.stringify(M, void 0, s ? 2 : void 0),
                                    s && (v = v.split(`
`).join(`
    `)),
                                    y = v.lastIndexOf("]"),
                                    r.push(v.substring(0, y)),
                                    N = null,
                                    O = 0,
                                    te = !0,
                                    z = function() {
                                        var W, ve, tt, Pt, se, kt, Ut, kn, se;
                                        return en(this, function(Ce) {
                                            switch (Ce.label) {
                                            case 0:
                                                return a && Qe.ignoreTransaction(function() {
                                                    return a(u)
                                                }),
                                                W = N == null ? B.limit(C) : B.where(":id").above(N).limit(C),
                                                [4, W.toArray()];
                                            case 1:
                                                return ve = Ce.sent(),
                                                ve.length === 0 ? [2, "break"] : (N != null && O > 0 && (r.push(","),
                                                s && r.push(`
      `)),
                                                te = ve.length === C,
                                                A ? (tt = g ? ve.filter(function(ot) {
                                                    return g(k, ot)
                                                }) : ve,
                                                Pt = tt.map(function(ot) {
                                                    return qt.encapsulate(ot)
                                                }),
                                                qt.mustFinalize() ? [4, Qe.waitFor(qt.finalize(Pt))] : [3, 3]) : [3, 4]);
                                            case 2:
                                                Ce.sent(),
                                                Ce.label = 3;
                                            case 3:
                                                return se = JSON.stringify(Pt, void 0, s ? 2 : void 0),
                                                s && (se = se.split(`
`).join(`
      `)),
                                                r.push(new Blob([se.substring(1, se.length - 1)])),
                                                O = tt.length,
                                                N = ve.length > 0 ? Qe.getByKeyPath(ve[ve.length - 1], I.keyPath) : null,
                                                [3, 8];
                                            case 4:
                                                return [4, W.primaryKeys()];
                                            case 5:
                                                return kt = Ce.sent(),
                                                Ut = kt.map(function(ot, R) {
                                                    return [ot, ve[R]]
                                                }),
                                                g && (Ut = Ut.filter(function(ot) {
                                                    var R = ot[0]
                                                      , j = ot[1];
                                                    return g(k, j, R)
                                                })),
                                                kn = Ut.map(function(ot) {
                                                    return qt.encapsulate(ot)
                                                }),
                                                qt.mustFinalize() ? [4, Qe.waitFor(qt.finalize(kn))] : [3, 7];
                                            case 6:
                                                Ce.sent(),
                                                Ce.label = 7;
                                            case 7:
                                                se = JSON.stringify(kn, void 0, s ? 2 : void 0),
                                                s && (se = se.split(`
`).join(`
      `)),
                                                r.push(new Blob([se.substring(1, se.length - 1)])),
                                                O = Ut.length,
                                                N = kt.length > 0 ? kt[kt.length - 1] : null,
                                                Ce.label = 8;
                                            case 8:
                                                return u.completedRows += ve.length,
                                                [2]
                                            }
                                        })
                                    }
                                    ,
                                    P.label = 1;
                                case 1:
                                    return te ? [5, z()] : [3, 3];
                                case 2:
                                    return pe = P.sent(),
                                    pe === "break" ? [3, 3] : [3, 1];
                                case 3:
                                    return r.push(v.substr(y)),
                                    u.completedTables += 1,
                                    u.completedTables < u.totalTables && r.push(","),
                                    [2]
                                }
                            })
                        }
                        ,
                        b = 0,
                        x = i,
                        S.label = 2;
                    case 2:
                        return b < x.length ? (E = x[b].name,
                        [5, _(E)]) : [3, 5];
                    case 3:
                        S.sent(),
                        S.label = 4;
                    case 4:
                        return b++,
                        [3, 2];
                    case 5:
                        return r.push(l.substr(d)),
                        u.done = !0,
                        a && Qe.ignoreTransaction(function() {
                            return a(u)
                        }),
                        [2]
                    }
                })
            })
        }
        var r, i, s, o, a, u;
        return en(this, function(c) {
            switch (c.label) {
            case 0:
                e = e || {},
                r = [],
                i = t.tables.map(function(l) {
                    return {
                        name: l.name,
                        schema: ky(l),
                        rowCount: 0
                    }
                }),
                s = e.prettyJson,
                o = {
                    formatName: "dexie",
                    formatVersion: 1,
                    data: {
                        databaseName: t.name,
                        databaseVersion: t.verno,
                        tables: i,
                        data: []
                    }
                },
                a = e.progressCallback,
                u = {
                    done: !1,
                    completedRows: 0,
                    completedTables: 0,
                    totalRows: NaN,
                    totalTables: t.tables.length
                },
                c.label = 1;
            case 1:
                return c.trys.push([1, , 6, 7]),
                e.noTransaction ? [4, n()] : [3, 3];
            case 2:
                return c.sent(),
                [3, 5];
            case 3:
                return [4, t.transaction("r", t.tables, n)];
            case 4:
                c.sent(),
                c.label = 5;
            case 5:
                return [3, 7];
            case 6:
                return qt.finalize(),
                [7];
            case 7:
                return [2, new Blob(r,{
                    type: "text/json"
                })]
            }
        })
    })
}
var Iy = 1
  , Py = {
    Stream: function() {}
}
  , Cy = La(function(t, e) {
    (function(n) {
        var r = typeof process == "object" && process.env ? process.env : self;
        n.parser = function(v) {
            return new g(v)
        }
        ,
        n.CParser = g,
        n.CStream = b,
        n.createStream = _,
        n.MAX_BUFFER_LENGTH = 10 * 1024 * 1024,
        n.DEBUG = r.CDEBUG === "debug",
        n.INFO = r.CDEBUG === "debug" || r.CDEBUG === "info",
        n.EVENTS = ["value", "string", "key", "openobject", "closeobject", "openarray", "closearray", "error", "end", "ready"];
        var i = {
            textNode: void 0,
            numberNode: ""
        }, s = n.EVENTS.filter(function(v) {
            return v !== "error" && v !== "end"
        }), o = 0, a;
        n.STATE = {
            BEGIN: o++,
            VALUE: o++,
            OPEN_OBJECT: o++,
            CLOSE_OBJECT: o++,
            OPEN_ARRAY: o++,
            CLOSE_ARRAY: o++,
            TEXT_ESCAPE: o++,
            STRING: o++,
            BACKSLASH: o++,
            END: o++,
            OPEN_KEY: o++,
            CLOSE_KEY: o++,
            TRUE: o++,
            TRUE2: o++,
            TRUE3: o++,
            FALSE: o++,
            FALSE2: o++,
            FALSE3: o++,
            FALSE4: o++,
            NULL: o++,
            NULL2: o++,
            NULL3: o++,
            NUMBER_DECIMAL_POINT: o++,
            NUMBER_DIGIT: o++
        };
        for (var u in n.STATE)
            n.STATE[n.STATE[u]] = u;
        o = n.STATE;
        const c = {
            tab: 9,
            lineFeed: 10,
            carriageReturn: 13,
            space: 32,
            doubleQuote: 34,
            plus: 43,
            comma: 44,
            minus: 45,
            period: 46,
            _0: 48,
            _9: 57,
            colon: 58,
            E: 69,
            openBracket: 91,
            backslash: 92,
            closeBracket: 93,
            a: 97,
            b: 98,
            e: 101,
            f: 102,
            l: 108,
            n: 110,
            r: 114,
            s: 115,
            t: 116,
            u: 117,
            openBrace: 123,
            closeBrace: 125
        };
        Object.create || (Object.create = function(v) {
            function y() {
                this.__proto__ = v
            }
            return y.prototype = v,
            new y
        }
        ),
        Object.getPrototypeOf || (Object.getPrototypeOf = function(v) {
            return v.__proto__
        }
        ),
        Object.keys || (Object.keys = function(v) {
            var y = [];
            for (var N in v)
                v.hasOwnProperty(N) && y.push(N);
            return y
        }
        );
        function l(v) {
            var y = Math.max(n.MAX_BUFFER_LENGTH, 10)
              , N = 0;
            for (var O in i) {
                var te = v[O] === void 0 ? 0 : v[O].length;
                if (te > y)
                    switch (O) {
                    case "text":
                        closeText(v);
                        break;
                    default:
                        I(v, "Max buffer length exceeded: " + O)
                    }
                N = Math.max(N, te)
            }
            v.bufferCheckPosition = n.MAX_BUFFER_LENGTH - N + v.position
        }
        function d(v) {
            for (var y in i)
                v[y] = i[y]
        }
        var h = /[\\"\n]/g;
        function g(v) {
            if (!(this instanceof g))
                return new g(v);
            var y = this;
            d(y),
            y.bufferCheckPosition = n.MAX_BUFFER_LENGTH,
            y.q = y.c = y.p = "",
            y.opt = v || {},
            y.closed = y.closedRoot = y.sawRoot = !1,
            y.tag = y.error = null,
            y.state = o.BEGIN,
            y.stack = new Array,
            y.position = y.column = 0,
            y.line = 1,
            y.slashed = !1,
            y.unicodeI = 0,
            y.unicodeS = null,
            y.depth = 0,
            x(y, "onready")
        }
        g.prototype = {
            end: function() {
                A(this)
            },
            write: M,
            resume: function() {
                return this.error = null,
                this
            },
            close: function() {
                return this.write(null)
            }
        };
        try {
            a = Py.Stream
        } catch {
            a = function() {}
        }
        function _(v) {
            return new b(v)
        }
        function b(v) {
            if (!(this instanceof b))
                return new b(v);
            this._parser = new g(v),
            this.writable = !0,
            this.readable = !0,
            this.bytes_remaining = 0,
            this.bytes_in_sequence = 0,
            this.temp_buffs = {
                2: new Buffer(2),
                3: new Buffer(3),
                4: new Buffer(4)
            },
            this.string = "";
            var y = this;
            a.apply(y),
            this._parser.onend = function() {
                y.emit("end")
            }
            ,
            this._parser.onerror = function(N) {
                y.emit("error", N),
                y._parser.error = null
            }
            ,
            s.forEach(function(N) {
                Object.defineProperty(y, "on" + N, {
                    get: function() {
                        return y._parser["on" + N]
                    },
                    set: function(O) {
                        if (!O)
                            return y.removeAllListeners(N),
                            y._parser["on" + N] = O,
                            O;
                        y.on(N, O)
                    },
                    enumerable: !0,
                    configurable: !1
                })
            })
        }
        b.prototype = Object.create(a.prototype, {
            constructor: {
                value: b
            }
        }),
        b.prototype.write = function(v) {
            v = new Buffer(v);
            for (var y = 0; y < v.length; y++) {
                var N = v[y];
                if (this.bytes_remaining > 0) {
                    for (var O = 0; O < this.bytes_remaining; O++)
                        this.temp_buffs[this.bytes_in_sequence][this.bytes_in_sequence - this.bytes_remaining + O] = v[O];
                    this.string = this.temp_buffs[this.bytes_in_sequence].toString(),
                    this.bytes_in_sequence = this.bytes_remaining = 0,
                    y = y + O - 1,
                    this._parser.write(this.string),
                    this.emit("data", this.string);
                    continue
                }
                if (this.bytes_remaining === 0 && N >= 128)
                    if (N >= 194 && N <= 223 && (this.bytes_in_sequence = 2),
                    N >= 224 && N <= 239 && (this.bytes_in_sequence = 3),
                    N >= 240 && N <= 244 && (this.bytes_in_sequence = 4),
                    this.bytes_in_sequence + y > v.length) {
                        for (var te = 0; te <= v.length - 1 - y; te++)
                            this.temp_buffs[this.bytes_in_sequence][te] = v[y + te];
                        return this.bytes_remaining = y + this.bytes_in_sequence - v.length,
                        !0
                    } else {
                        this.string = v.slice(y, y + this.bytes_in_sequence).toString(),
                        y = y + this.bytes_in_sequence - 1,
                        this._parser.write(this.string),
                        this.emit("data", this.string);
                        continue
                    }
                for (var z = y; z < v.length && !(v[z] >= 128); z++)
                    ;
                this.string = v.slice(y, z).toString(),
                this._parser.write(this.string),
                this.emit("data", this.string),
                y = z - 1
            }
        }
        ,
        b.prototype.end = function(v) {
            return v && v.length && this._parser.write(v.toString()),
            this._parser.end(),
            !0
        }
        ,
        b.prototype.on = function(v, y) {
            var N = this;
            return !N._parser["on" + v] && s.indexOf(v) !== -1 && (N._parser["on" + v] = function() {
                var O = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
                O.splice(0, 0, v),
                N.emit.apply(N, O)
            }
            ),
            a.prototype.on.call(N, v, y)
        }
        ,
        b.prototype.destroy = function() {
            d(this._parser),
            this.emit("close")
        }
        ;
        function x(v, y, N) {
            n.INFO && console.log("-- emit", y, N),
            v[y] && v[y](N)
        }
        function E(v, y, N) {
            S(v),
            x(v, y, N)
        }
        function S(v, y) {
            v.textNode = B(v.opt, v.textNode),
            v.textNode !== void 0 && x(v, y || "onvalue", v.textNode),
            v.textNode = void 0
        }
        function k(v) {
            v.numberNode && x(v, "onvalue", parseFloat(v.numberNode)),
            v.numberNode = ""
        }
        function B(v, y) {
            return y === void 0 || (v.trim && (y = y.trim()),
            v.normalize && (y = y.replace(/\s+/g, " "))),
            y
        }
        function I(v, y) {
            return S(v),
            y += `
Line: ` + v.line + `
Column: ` + v.column + `
Char: ` + v.c,
            y = new Error(y),
            v.error = y,
            x(v, "onerror", y),
            v
        }
        function A(v) {
            return (v.state !== o.VALUE || v.depth !== 0) && I(v, "Unexpected end"),
            S(v),
            v.c = "",
            v.closed = !0,
            x(v, "onend"),
            g.call(v, v.opt),
            v
        }
        function C(v) {
            return v === c.carriageReturn || v === c.lineFeed || v === c.space || v === c.tab
        }
        function M(v) {
            var y = this;
            if (this.error)
                throw this.error;
            if (y.closed)
                return I(y, "Cannot write after close. Assign an onready handler.");
            if (v === null)
                return A(y);
            var N = 0
              , O = v.charCodeAt(0)
              , te = y.p;
            for (n.DEBUG && console.log("write -> [" + v + "]"); O && (te = O,
            y.c = O = v.charCodeAt(N++),
            te !== O ? y.p = te : te = y.p,
            !!O); )
                switch (n.DEBUG && console.log(N, O, n.STATE[y.state]),
                y.position++,
                O === c.lineFeed ? (y.line++,
                y.column = 0) : y.column++,
                y.state) {
                case o.BEGIN:
                    O === c.openBrace ? y.state = o.OPEN_OBJECT : O === c.openBracket ? y.state = o.OPEN_ARRAY : C(O) || I(y, "Non-whitespace before {[.");
                    continue;
                case o.OPEN_KEY:
                case o.OPEN_OBJECT:
                    if (C(O))
                        continue;
                    if (y.state === o.OPEN_KEY)
                        y.stack.push(o.CLOSE_KEY);
                    else if (O === c.closeBrace) {
                        x(y, "onopenobject"),
                        this.depth++,
                        x(y, "oncloseobject"),
                        this.depth--,
                        y.state = y.stack.pop() || o.VALUE;
                        continue
                    } else
                        y.stack.push(o.CLOSE_OBJECT);
                    O === c.doubleQuote ? y.state = o.STRING : I(y, 'Malformed object key should start with "');
                    continue;
                case o.CLOSE_KEY:
                case o.CLOSE_OBJECT:
                    if (C(O))
                        continue;
                    y.state,
                    o.CLOSE_KEY,
                    O === c.colon ? (y.state === o.CLOSE_OBJECT ? (y.stack.push(o.CLOSE_OBJECT),
                    S(y, "onopenobject"),
                    this.depth++) : S(y, "onkey"),
                    y.state = o.VALUE) : O === c.closeBrace ? (E(y, "oncloseobject"),
                    this.depth--,
                    y.state = y.stack.pop() || o.VALUE) : O === c.comma ? (y.state === o.CLOSE_OBJECT && y.stack.push(o.CLOSE_OBJECT),
                    S(y),
                    y.state = o.OPEN_KEY) : I(y, "Bad object");
                    continue;
                case o.OPEN_ARRAY:
                case o.VALUE:
                    if (C(O))
                        continue;
                    if (y.state === o.OPEN_ARRAY)
                        if (x(y, "onopenarray"),
                        this.depth++,
                        y.state = o.VALUE,
                        O === c.closeBracket) {
                            x(y, "onclosearray"),
                            this.depth--,
                            y.state = y.stack.pop() || o.VALUE;
                            continue
                        } else
                            y.stack.push(o.CLOSE_ARRAY);
                    O === c.doubleQuote ? y.state = o.STRING : O === c.openBrace ? y.state = o.OPEN_OBJECT : O === c.openBracket ? y.state = o.OPEN_ARRAY : O === c.t ? y.state = o.TRUE : O === c.f ? y.state = o.FALSE : O === c.n ? y.state = o.NULL : O === c.minus ? y.numberNode += "-" : c._0 <= O && O <= c._9 ? (y.numberNode += String.fromCharCode(O),
                    y.state = o.NUMBER_DIGIT) : I(y, "Bad value");
                    continue;
                case o.CLOSE_ARRAY:
                    if (O === c.comma)
                        y.stack.push(o.CLOSE_ARRAY),
                        S(y, "onvalue"),
                        y.state = o.VALUE;
                    else if (O === c.closeBracket)
                        E(y, "onclosearray"),
                        this.depth--,
                        y.state = y.stack.pop() || o.VALUE;
                    else {
                        if (C(O))
                            continue;
                        I(y, "Bad array")
                    }
                    continue;
                case o.STRING:
                    y.textNode === void 0 && (y.textNode = "");
                    var z = N - 1
                      , pe = y.slashed
                      , P = y.unicodeI;
                    e: for (; ; ) {
                        for (n.DEBUG && console.log(N, O, n.STATE[y.state], pe); P > 0; )
                            if (y.unicodeS += String.fromCharCode(O),
                            O = v.charCodeAt(N++),
                            y.position++,
                            P === 4 ? (y.textNode += String.fromCharCode(parseInt(y.unicodeS, 16)),
                            P = 0,
                            z = N - 1) : P++,
                            !O)
                                break e;
                        if (O === c.doubleQuote && !pe) {
                            y.state = y.stack.pop() || o.VALUE,
                            y.textNode += v.substring(z, N - 1),
                            y.position += N - 1 - z;
                            break
                        }
                        if (O === c.backslash && !pe && (pe = !0,
                        y.textNode += v.substring(z, N - 1),
                        y.position += N - 1 - z,
                        O = v.charCodeAt(N++),
                        y.position++,
                        !O))
                            break;
                        if (pe) {
                            if (pe = !1,
                            O === c.n ? y.textNode += `
` : O === c.r ? y.textNode += "\r" : O === c.t ? y.textNode += "	" : O === c.f ? y.textNode += "\f" : O === c.b ? y.textNode += "\b" : O === c.u ? (P = 1,
                            y.unicodeS = "") : y.textNode += String.fromCharCode(O),
                            O = v.charCodeAt(N++),
                            y.position++,
                            z = N - 1,
                            O)
                                continue;
                            break
                        }
                        h.lastIndex = N;
                        var W = h.exec(v);
                        if (W === null) {
                            N = v.length + 1,
                            y.textNode += v.substring(z, N - 1),
                            y.position += N - 1 - z;
                            break
                        }
                        if (N = W.index + 1,
                        O = v.charCodeAt(W.index),
                        !O) {
                            y.textNode += v.substring(z, N - 1),
                            y.position += N - 1 - z;
                            break
                        }
                    }
                    y.slashed = pe,
                    y.unicodeI = P;
                    continue;
                case o.TRUE:
                    O === c.r ? y.state = o.TRUE2 : I(y, "Invalid true started with t" + O);
                    continue;
                case o.TRUE2:
                    O === c.u ? y.state = o.TRUE3 : I(y, "Invalid true started with tr" + O);
                    continue;
                case o.TRUE3:
                    O === c.e ? (x(y, "onvalue", !0),
                    y.state = y.stack.pop() || o.VALUE) : I(y, "Invalid true started with tru" + O);
                    continue;
                case o.FALSE:
                    O === c.a ? y.state = o.FALSE2 : I(y, "Invalid false started with f" + O);
                    continue;
                case o.FALSE2:
                    O === c.l ? y.state = o.FALSE3 : I(y, "Invalid false started with fa" + O);
                    continue;
                case o.FALSE3:
                    O === c.s ? y.state = o.FALSE4 : I(y, "Invalid false started with fal" + O);
                    continue;
                case o.FALSE4:
                    O === c.e ? (x(y, "onvalue", !1),
                    y.state = y.stack.pop() || o.VALUE) : I(y, "Invalid false started with fals" + O);
                    continue;
                case o.NULL:
                    O === c.u ? y.state = o.NULL2 : I(y, "Invalid null started with n" + O);
                    continue;
                case o.NULL2:
                    O === c.l ? y.state = o.NULL3 : I(y, "Invalid null started with nu" + O);
                    continue;
                case o.NULL3:
                    O === c.l ? (x(y, "onvalue", null),
                    y.state = y.stack.pop() || o.VALUE) : I(y, "Invalid null started with nul" + O);
                    continue;
                case o.NUMBER_DECIMAL_POINT:
                    O === c.period ? (y.numberNode += ".",
                    y.state = o.NUMBER_DIGIT) : I(y, "Leading zero not followed by .");
                    continue;
                case o.NUMBER_DIGIT:
                    c._0 <= O && O <= c._9 ? y.numberNode += String.fromCharCode(O) : O === c.period ? (y.numberNode.indexOf(".") !== -1 && I(y, "Invalid number has two dots"),
                    y.numberNode += ".") : O === c.e || O === c.E ? ((y.numberNode.indexOf("e") !== -1 || y.numberNode.indexOf("E") !== -1) && I(y, "Invalid number has two exponential"),
                    y.numberNode += "e") : O === c.plus || O === c.minus ? (te === c.e || te === c.E || I(y, "Invalid symbol in number"),
                    y.numberNode += String.fromCharCode(O)) : (k(y),
                    N--,
                    y.state = y.stack.pop() || o.VALUE);
                    continue;
                default:
                    I(y, "Unknown state: " + y.state)
                }
            return y.position >= y.bufferCheckPosition && l(y),
            y
        }
    }
    )(e)
});
function jy(t) {
    var e = 0
      , n = Dy(!0)
      , r = {
        pullAsync: function(i) {
            return Kn(this, void 0, void 0, function() {
                var s, o, a;
                return en(this, function(u) {
                    switch (u.label) {
                    case 0:
                        return s = t.slice(e, e + i),
                        e += i,
                        [4, wl(s, "text")];
                    case 1:
                        return o = u.sent(),
                        a = n.write(o),
                        r.result = a || {},
                        [2, a]
                    }
                })
            })
        },
        pullSync: function(i) {
            var s = t.slice(e, e + i);
            e += i;
            var o = El(s, "text")
              , a = n.write(o);
            return r.result = a || {},
            a
        },
        done: function() {
            return n.done()
        },
        eof: function() {
            return e >= t.size
        },
        result: {}
    };
    return r
}
function Dy(t) {
    var e = Cy.parser(), n = 0, r, i = [], s, o, a = !1, u = !1;
    return e.onopenobject = function(c) {
        var l = {};
        l.incomplete = !0,
        r || (r = l),
        s && (i.push([o, s, u]),
        t && (u ? s.push(l) : s[o] = l)),
        s = l,
        o = c,
        u = !1,
        ++n
    }
    ,
    e.onkey = function(c) {
        return o = c
    }
    ,
    e.onvalue = function(c) {
        return u ? s.push(c) : s[o] = c
    }
    ,
    e.oncloseobject = function() {
        var c;
        if (delete s.incomplete,
        o = null,
        --n === 0)
            a = !0;
        else {
            var l = s;
            c = i.pop(),
            o = c[0],
            s = c[1],
            u = c[2],
            t || (u ? s.push(l) : s[o] = l)
        }
    }
    ,
    e.onopenarray = function() {
        var c = [];
        c.incomplete = !0,
        r || (r = c),
        s && (i.push([o, s, u]),
        t && (u ? s.push(c) : s[o] = c)),
        s = c,
        u = !0,
        o = null,
        ++n
    }
    ,
    e.onclosearray = function() {
        var c;
        if (delete s.incomplete,
        o = null,
        --n === 0)
            a = !0;
        else {
            var l = s;
            c = i.pop(),
            o = c[0],
            s = c[1],
            u = c[2],
            t || (u ? s.push(l) : s[o] = l)
        }
    }
    ,
    {
        write: function(c) {
            return e.write(c),
            r
        },
        done: function() {
            return a
        }
    }
}
var Tl = 1024;
function By(t, e) {
    return Kn(this, void 0, void 0, function() {
        var n, r, i, s;
        return en(this, function(o) {
            switch (o.label) {
            case 0:
                return e = e || {},
                n = e.chunkSizeBytes || Tl * 1024,
                [4, Ol(t, n)];
            case 1:
                return r = o.sent(),
                i = r.result.data,
                s = new Qe(i.databaseName),
                s.version(i.databaseVersion).stores(xy(i)),
                [4, Ma(s, r, e)];
            case 2:
                return o.sent(),
                [2, s]
            }
        })
    })
}
function Ma(t, e, n) {
    return Kn(this, void 0, void 0, function() {
        function r() {
            return Kn(this, void 0, void 0, function() {
                var _, b, x, E, S;
                return en(this, function(k) {
                    switch (k.label) {
                    case 0:
                        _ = function(B) {
                            var I, A, C, M, v, y, N, O, te, z, pe, P;
                            return en(this, function(W) {
                                switch (W.label) {
                                case 0:
                                    if (!B.rows)
                                        return [2, "break"];
                                    if (!B.rows.incomplete && B.rows.length === 0)
                                        return [2, "continue"];
                                    if (c && Qe.ignoreTransaction(function() {
                                        return c(l)
                                    }),
                                    I = B.tableName,
                                    A = t.table(I),
                                    C = u.tables.filter(function(ve) {
                                        return ve.name === I
                                    })[0].schema,
                                    !A) {
                                        if (n.acceptMissingTables)
                                            return [2, "continue"];
                                        throw new Error("Exported table ".concat(B.tableName, " is missing in installed database"))
                                    }
                                    if (!n.acceptChangedPrimaryKey && C.split(",")[0] != A.schema.primKey.src)
                                        throw new Error("Primary key differs for table ".concat(B.tableName, ". "));
                                    for (M = B.rows,
                                    v = [],
                                    y = 0; y < M.length && (N = M[y],
                                    !N.incomplete); y++)
                                        v.push(qt.revive(N));
                                    return O = n.filter,
                                    te = O ? B.inbound ? v.filter(function(ve) {
                                        return O(I, ve)
                                    }) : v.filter(function(ve) {
                                        var tt = ve[0]
                                          , Pt = ve[1];
                                        return O(I, Pt, tt)
                                    }) : v,
                                    z = B.inbound ? [void 0, te] : [te.map(function(ve) {
                                        return ve[0]
                                    }), v.map(function(ve) {
                                        return ve[1]
                                    })],
                                    pe = z[0],
                                    P = z[1],
                                    n.overwriteValues ? [4, A.bulkPut(P, pe)] : [3, 2];
                                case 1:
                                    return W.sent(),
                                    [3, 4];
                                case 2:
                                    return [4, A.bulkAdd(P, pe)];
                                case 3:
                                    W.sent(),
                                    W.label = 4;
                                case 4:
                                    return l.completedRows += v.length,
                                    v.incomplete || (l.completedTables += 1),
                                    M.splice(0, v.length),
                                    [2]
                                }
                            })
                        }
                        ,
                        b = 0,
                        x = u.data,
                        k.label = 1;
                    case 1:
                        return b < x.length ? (E = x[b],
                        [5, _(E)]) : [3, 4];
                    case 2:
                        if (S = k.sent(),
                        S === "break")
                            return [3, 4];
                        k.label = 3;
                    case 3:
                        return b++,
                        [3, 1];
                    case 4:
                        for (; u.data.length > 0 && u.data[0].rows && !u.data[0].rows.incomplete; )
                            u.data.splice(0, 1);
                        return !s.done() && !s.eof() ? a ? (s.pullSync(i),
                        [3, 7]) : [3, 5] : [3, 8];
                    case 5:
                        return [4, Qe.waitFor(s.pullAsync(i))];
                    case 6:
                        k.sent(),
                        k.label = 7;
                    case 7:
                        return [3, 9];
                    case 8:
                        return [3, 10];
                    case 9:
                        return [3, 0];
                    case 10:
                        return [2]
                    }
                })
            })
        }
        var i, s, o, a, u, c, l, d, h, g;
        return en(this, function(_) {
            switch (_.label) {
            case 0:
                return n = n || {},
                i = n.chunkSizeBytes || Tl * 1024,
                [4, Ol(e, i)];
            case 1:
                if (s = _.sent(),
                o = s.result,
                a = "FileReaderSync"in self,
                u = o.data,
                !n.acceptNameDiff && t.name !== u.databaseName)
                    throw new Error("Name differs. Current database name is ".concat(t.name, " but export is ").concat(u.databaseName));
                if (!n.acceptVersionDiff && t.verno !== u.databaseVersion)
                    throw new Error("Database version differs. Current database is in version ".concat(t.verno, " but export is ").concat(u.databaseVersion));
                if (c = n.progressCallback,
                l = {
                    done: !1,
                    completedRows: 0,
                    completedTables: 0,
                    totalRows: u.tables.reduce(function(b, x) {
                        return b + x.rowCount
                    }, 0),
                    totalTables: u.tables.length
                },
                c && Qe.ignoreTransaction(function() {
                    return c(l)
                }),
                !n.clearTablesBeforeImport)
                    return [3, 5];
                d = 0,
                h = t.tables,
                _.label = 2;
            case 2:
                return d < h.length ? (g = h[d],
                [4, g.clear()]) : [3, 5];
            case 3:
                _.sent(),
                _.label = 4;
            case 4:
                return d++,
                [3, 2];
            case 5:
                return n.noTransaction ? [4, r()] : [3, 7];
            case 6:
                return _.sent(),
                [3, 9];
            case 7:
                return [4, t.transaction("rw", t.tables, r)];
            case 8:
                _.sent(),
                _.label = 9;
            case 9:
                return l.done = !0,
                c && Qe.ignoreTransaction(function() {
                    return c(l)
                }),
                [2]
            }
        })
    })
}
function Ol(t, e) {
    return Kn(this, void 0, void 0, function() {
        var n, r;
        return en(this, function(i) {
            switch (i.label) {
            case 0:
                n = "slice"in t ? jy(t) : t,
                i.label = 1;
            case 1:
                return n.eof() ? [3, 3] : [4, n.pullAsync(e)];
            case 2:
                return i.sent(),
                n.result.data && n.result.data.data ? [3, 3] : [3, 1];
            case 3:
                if (r = n.result,
                !r || r.formatName != "dexie")
                    throw new Error("Given file is not a dexie export");
                if (r.formatVersion > Iy)
                    throw new Error("Format version ".concat(r.formatVersion, " not supported"));
                if (!r.data)
                    throw new Error("No data in export file");
                if (!r.data.databaseName)
                    throw new Error("Missing databaseName in export file");
                if (!r.data.databaseVersion)
                    throw new Error("Missing databaseVersion in export file");
                if (!r.data.tables)
                    throw new Error("Missing tables in export file");
                return [2, n]
            }
        })
    })
}
Qe.prototype.export = function(t) {
    return xl(this, t)
}
;
Qe.prototype.import = function(t, e) {
    return Ma(this, t, e)
}
;
Qe.import = function(t, e) {
    return By(t, e)
}
;
const $y = 21;
class Ly extends Qe {
    constructor() {
        super("/_savedata");
        Ua(this, "FILE_DATA");
        this.version($y).stores({
            FILE_DATA: ", timestamp"
        })
    }
}
const Lt = new Ly
  , My = async(t,e)=>{
    let n = await (Lt == null ? void 0 : Lt.FILE_DATA.where(":id").startsWith(t).primaryKeys()) ?? [];
    return e && (n = n.filter(i=>e.test(i))),
    await Promise.all(n == null ? void 0 : n.map(async i=>{
        const s = await (Lt == null ? void 0 : Lt.FILE_DATA.get(i));
        return {
            key: i,
            value: s
        }
    }
    ))
}
  , Uy = async(t,e)=>await (Lt == null ? void 0 : Lt.FILE_DATA.put(e, t))
  , Fy = async t=>await Promise.all(t.map(({key: e, value: n})=>n && Uy(e, n)))
  , Ky = async(t,e)=>Lt ? await xl(Lt, {
    filter: (r,i,s)=>typeof s == "string" && s.startsWith(t) && (e ? e.test(s) : !0)
}) : void 0
  , qy = async t=>Lt && await Ma(Lt, t, {
    overwriteValues: !0
});
function Gy(t) {
    const e = async n=>{
        const r = async(i,s)=>{
            const o = bn();
            if (!(!o || n.origin !== o) && n.data.eventId === i)
                try {
                    const a = await s();
                    window.parent.postMessage({
                        eventId: `${i}_RESPONSE`,
                        ...a
                    }, o)
                } catch (a) {
                    console.error(a),
                    window.parent.postMessage({
                        eventId: `${i}_REJECT`
                    }, o)
                }
        }
        ;
        r("DB_PUT_MANY", async()=>await Fy(n.data.entries)),
        r("DB_GET_FILES", async()=>({
            entries: await My(n.data.keyStart, n.data.keyRegex)
        })),
        r("DB_SET_READY", ()=>ju.set(!0)),
        r("DB_GET_BLOB", async()=>({
            blob: await Ky(n.data.keyStart, n.data.keyRegex)
        })),
        r("DB_IMPORT", async()=>await qy(n.data.blob))
    }
    ;
    return window.addEventListener("message", e),
    un(()=>{
        window.removeEventListener("message", e)
    }
    ),
    []
}
class Yy extends St {
    constructor(e) {
        super(),
        Et(this, e, Gy, null, pt, {})
    }
}
const Nl = Gr([])
  , Vy = AudioContext
  , Zy = Vy.prototype.resume;
let Dc = !1;
Pu.subscribe(t=>{
    t || Dc || Nl.update(e=>(e.map(n=>(n.resume = Zy,
    n)),
    e.forEach(n=>{
        n.resume()
    }
    ),
    Dc = !0,
    e))
}
);
function Hy(t, e, n) {
    let r, i;
    et(t, It, l=>n(0, r = l)),
    et(t, Pu, l=>n(1, i = l));
    const s = ()=>{
        const l = window.AudioContext;
        return window.AudioContext = class extends l {
            constructor(...h) {
                super(...h),
                i && (this.resume = ()=>Promise.resolve(void 0),
                this.suspend()),
                Nl.update(g=>[...g, this])
            }
        }
        ,
        ()=>{
            window.AudioContext = l
        }
    }
      , o = ()=>{
        const l = window.fetch;
        return window.fetch = (d,h)=>typeof d == "string" ? l(vr(d, r), h) : d instanceof Request ? l(new Request(vr(d.url, r),d), h) : d instanceof URL ? l(new URL(vr(d.href, r),d), h) : l(d, h),
        ()=>{
            window.fetch = l
        }
    }
      , a = ()=>{
        const l = XMLHttpRequest.prototype.open;
        return XMLHttpRequest.prototype.open = function(d, h, ...g) {
            const _ = vr(h instanceof URL ? h.href : h, r);
            return l.call(this, d, _, ...g)
        }
        ,
        ()=>{
            XMLHttpRequest.prototype.open = l
        }
    }
      , u = ()=>(Co.set(!0),
    ()=>Co.set(!1))
      , c = [];
    return ar(()=>{
        c.push(...[s, o, a, u].map(l=>l()))
    }
    ),
    un(()=>{
        c.slice().reverse().forEach(l=>l())
    }
    ),
    []
}
class zy extends St {
    constructor(e) {
        super(),
        Et(this, e, Hy, null, pt, {})
    }
}
const {window: mo} = Ru;
function Wy(t) {
    let e, n;
    return {
        c: Ne,
        m(r, i) {
            e || (n = [yn(mo, "keydown", t[0]), yn(mo, "keyup", t[1]), yn(mo, "blur", t[2])],
            e = !0)
        },
        p: Ne,
        i: Ne,
        o: Ne,
        d(r) {
            e = !1,
            qn(n)
        }
    }
}
function Jy(t) {
    const e = new Map
      , n = s=>{
        const o = bn();
        if (!o)
            return;
        const {key: a} = s;
        e.get(a) || e.set(a, setTimeout(()=>{
            window.parent.postMessage({
                event_id: "KEY_HELD_EVENT",
                key: a
            }, o)
        }
        , 250))
    }
      , r = s=>{
        const {key: o} = s
          , a = e.get(o);
        a && (clearTimeout(a),
        e.delete(o))
    }
      , i = ()=>{
        e.forEach(s=>{
            clearTimeout(s)
        }
        ),
        e.clear()
    }
    ;
    return un(()=>{
        e.forEach(s=>{
            clearTimeout(s)
        }
        )
    }
    ),
    [n, r, i]
}
class Xy extends St {
    constructor(e) {
        super(),
        Et(this, e, Jy, Wy, pt, {})
    }
}
function Qy(t) {
    const e = t - 1;
    return e * e * e + 1
}
function eg(t, {delay: e=0, duration: n=400, easing: r=Eu}={}) {
    const i = +getComputedStyle(t).opacity;
    return {
        delay: e,
        duration: n,
        easing: r,
        css: s=>`opacity: ${s * i}`
    }
}
function Bc(t) {
    let e, n, r, i, s, o, a, u, c, l, d, h, g, _ = t[2] && $c(t);
    return {
        c() {
            e = Ve("div"),
            n = Ve("div"),
            r = Xe(),
            i = Ve("div"),
            s = Xe(),
            o = Ve("div"),
            a = Ve("span"),
            u = or(t[4]),
            c = Xe(),
            l = Ve("div"),
            d = Xe(),
            _ && _.c(),
            U(n, "class", "absolute inset-0 z-0 bg-contain bg-center bg-no-repeat grayscale"),
            Ot(n, "background-image", "url(" + t[1].coverImage + ")"),
            U(i, "class", "absolute inset-0 z-0 bg-contain bg-center bg-no-repeat transition-[clip-path]"),
            Ot(i, "clip-path", "inset(0 " + 100 * (1 - t[0]) + "% 0 0)"),
            Ot(i, "background-image", "url(" + t[1].coverImage + ")"),
            U(a, "class", "text-xs font-normal tracking-[0.3px] text-neutral-100"),
            U(l, "class", "lower absolute bottom-0 left-0 h-[2px] svelte-1o38ugv"),
            Ot(l, "width", t[0] * 100 + "%"),
            U(o, "class", "absolute bottom-0 right-0 flex h-[24px] w-full items-center bg-neutral-8/40 pl-1"),
            U(e, "class", "absolute inset-0 m-auto aspect-[16/9]")
        },
        m(b, x) {
            Me(b, e, x),
            de(e, n),
            de(e, r),
            de(e, i),
            de(e, s),
            de(e, o),
            de(o, a),
            de(a, u),
            de(o, c),
            de(o, l),
            de(e, d),
            _ && _.m(e, null),
            g = !0
        },
        p(b, x) {
            t = b,
            (!g || x & 2) && Ot(n, "background-image", "url(" + t[1].coverImage + ")"),
            (!g || x & 1) && Ot(i, "clip-path", "inset(0 " + 100 * (1 - t[0]) + "% 0 0)"),
            (!g || x & 2) && Ot(i, "background-image", "url(" + t[1].coverImage + ")"),
            (!g || x & 16) && Ou(u, t[4]),
            (!g || x & 1) && Ot(l, "width", t[0] * 100 + "%"),
            t[2] ? _ ? _.p(t, x) : (_ = $c(t),
            _.c(),
            _.m(e, null)) : _ && (_.d(1),
            _ = null)
        },
        i(b) {
            g || (h && h.end(1),
            g = !0)
        },
        o(b) {
            h = ep(e, eg, {
                duration: 1e3,
                easing: Qy
            }),
            g = !1
        },
        d(b) {
            b && Te(e),
            _ && _.d(),
            b && h && h.end()
        }
    }
}
function $c(t) {
    let e;
    return {
        c() {
            e = Ve("div"),
            U(e, "class", "absolute inset-0 z-0 bg-contain bg-center bg-no-repeat"),
            Ot(e, "background-image", "url(" + t[1].coverImage + ")")
        },
        m(n, r) {
            Me(n, e, r)
        },
        p(n, r) {
            r & 2 && Ot(e, "background-image", "url(" + n[1].coverImage + ")")
        },
        d(n) {
            n && Te(e)
        }
    }
}
function tg(t) {
    let e, n, r = t[3] && Bc(t);
    return {
        c() {
            r && r.c(),
            e = mi()
        },
        m(i, s) {
            r && r.m(i, s),
            Me(i, e, s),
            n = !0
        },
        p(i, [s]) {
            i[3] ? r ? (r.p(i, s),
            s & 8 && $e(r, 1)) : (r = Bc(i),
            r.c(),
            $e(r, 1),
            r.m(e.parentNode, e)) : r && (ba(),
            Ge(r, 1, 1, ()=>{
                r = null
            }
            ),
            wa())
        },
        i(i) {
            n || ($e(r),
            n = !0)
        },
        o(i) {
            Ge(r),
            n = !1
        },
        d(i) {
            r && r.d(i),
            i && Te(e)
        }
    }
}
function ng(t, e, n) {
    let r, i, s, o, a;
    et(t, cr, h=>n(5, i = h)),
    et(t, pp, h=>n(0, s = h)),
    et(t, Bu, h=>n(6, o = h)),
    et(t, It, h=>n(1, a = h));
    const u = bn()
      , c = setInterval(()=>{}
    , 1e3);
    let l = !0;
    setTimeout(()=>{
        n(2, l = s > .8)
    }
    , 700);
    let d = !0;
    return un(()=>{
        clearInterval(c)
    }
    ),
    t.$$.update = ()=>{
        t.$$.dirty & 67 && u && o !== "on-demand" && window.parent.postMessage({
            event_id: "LOAD_PROGRESS",
            gameId: a.gameId,
            loadingStrategy: o,
            progress: s
        }, u),
        t.$$.dirty & 1 && n(4, r = (()=>{
            switch (!0) {
            case s < 1:
                return "Downloading data";
            default:
                return "Launching game!"
            }
        }
        )()),
        t.$$.dirty & 32 && i && (clearInterval(c),
        setTimeout(()=>{
            n(3, d = !1)
        }
        , 100))
    }
    ,
    [s, a, l, d, r, i, o]
}
class rg extends St {
    constructor(e) {
        super(),
        Et(this, e, ng, tg, pt, {})
    }
}
const ig = "modulepreload"
  , sg = function(t, e) {
    return t.startsWith(".") ? new URL(t,e).href : t
}
  , Lc = {}
  , og = function(e, n, r) {
    if (!n || n.length === 0)
        return e();
    const i = document.getElementsByTagName("link");
    return Promise.all(n.map(s=>{
        if (s = sg(s, r),
        s in Lc)
            return;
        Lc[s] = !0;
        const o = s.endsWith(".css")
          , a = o ? '[rel="stylesheet"]' : "";
        if (!!r)
            for (let l = i.length - 1; l >= 0; l--) {
                const d = i[l];
                if (d.href === s && (!o || d.rel === "stylesheet"))
                    return
            }
        else if (document.querySelector(`link[href="${s}"]${a}`))
            return;
        const c = document.createElement("link");
        if (c.rel = o ? "stylesheet" : ig,
        o || (c.as = "script",
        c.crossOrigin = ""),
        c.href = s,
        document.head.appendChild(c),
        o)
            return new Promise((l,d)=>{
                c.addEventListener("load", l),
                c.addEventListener("error", ()=>d(new Error(`Unable to preload CSS for ${s}`)))
            }
            )
    }
    )).then(()=>e())
};
function ag(t) {
    const e = [];
    return ar(async()=>{
        const {default: n} = await og(()=>import("./tick-worker.js"), [], import.meta.url)
          , r = new n;
        e.push(()=>{
            r.terminate()
        }
        );
        const i = o=>{
            var a;
            switch (o.data) {
            case "tick":
                (a = window.GM_tick) == null || a.call(window, performance.now());
                break;
            default:
                o.data
            }
        }
        ;
        r.addEventListener("message", i),
        e.push(()=>r.removeEventListener("message", i));
        const s = o=>{
            var a;
            if ((a = window == null ? void 0 : window.GM_is_multiplayer) != null && a.call(window))
                switch (document.visibilityState) {
                case "hidden":
                    r.postMessage("run");
                    break;
                case "visible":
                    r.postMessage("stop");
                    break
                }
        }
        ;
        document.addEventListener("visibilitychange", s),
        e.push(()=>document.removeEventListener("visibilitychange", s))
    }
    ),
    un(()=>{
        e.slice().reverse().forEach(n=>n())
    }
    ),
    []
}
class cg extends St {
    constructor(e) {
        super(),
        Et(this, e, ag, null, pt, {})
    }
}
function ug(t) {
    let e, n, r, i, s;
    return {
        c() {
            e = Ve("button"),
            n = or("Quit"),
            U(e, "class", "select-none rounded-md border border-solid border-primary-100 bg-primary-100/25 px-6 py-3 hover:brightness-[1.15] active:brightness-[0.85]"),
            e.hidden = r = !t[1]
        },
        m(o, a) {
            Me(o, e, a),
            de(e, n),
            i || (s = yn(e, "click", $u.quit),
            i = !0)
        },
        p(o, a) {
            a & 2 && r !== (r = !o[1]) && (e.hidden = r)
        },
        d(o) {
            o && Te(e),
            i = !1,
            s()
        }
    }
}
function lg(t) {
    let e, n, r, i, s, o, a, u = ug(t);
    return {
        c() {
            e = Ve("div"),
            n = Ve("div"),
            r = Ve("div"),
            i = Ve("button"),
            i.textContent = "Resume",
            s = Xe(),
            u && u.c(),
            U(i, "class", "rounded-md border border-solid border-primary-100 bg-primary-100 px-6 py-3 font-medium hover:brightness-[1.15] active:brightness-[0.85]"),
            U(r, "class", "flex flex-col gap-3 rounded bg-gradient-to-b from-neutral-20 from-15% via-neutral-20/80 via-55% to-neutral-20 to-90% px-6 py-10 [clip-path:polygon(10px_0,100%_0,100%_100%,0_100%,0_10px)]"),
            U(n, "class", "rounded bg-gradient-to-br from-primary-100 to-transparent to-40% p-px [clip-path:polygon(10.5px_0,100%_0,100%_100%,0_100%,0_10.5px)]"),
            U(e, "class", "absolute inset-0 flex flex-col justify-center p-14 font-medium text-white grayscale-0 backdrop-blur-sm backdrop-grayscale transition-all duration-500"),
            rt(e, "invisible", !t[0]),
            rt(e, "visible", t[0]),
            rt(e, "opacity-0", !t[0]),
            rt(e, "opacity-100", t[0])
        },
        m(c, l) {
            Me(c, e, l),
            de(e, n),
            de(n, r),
            de(r, i),
            de(r, s),
            u && u.m(r, null),
            o || (a = yn(i, "click", t[2]),
            o = !0)
        },
        p(c, [l]) {
            u.p(c, l),
            l & 1 && rt(e, "invisible", !c[0]),
            l & 1 && rt(e, "visible", c[0]),
            l & 1 && rt(e, "opacity-0", !c[0]),
            l & 1 && rt(e, "opacity-100", c[0])
        },
        i: Ne,
        o: Ne,
        d(c) {
            c && Te(e),
            u && u.d(),
            o = !1,
            a()
        }
    }
}
function fg(t, e, n) {
    let r, i;
    return et(t, vs, o=>n(0, r = o)),
    et(t, $u, o=>n(1, i = o)),
    [r, i, ()=>{
        vs.resume(),
        jo()
    }
    ]
}
class dg extends St {
    constructor(e) {
        super(),
        Et(this, e, fg, lg, pt, {})
    }
}
function hg(t) {
    let e, n;
    return {
        c() {
            e = Ve("script"),
            e.async = !0,
            Ao(e.src, n = "https://www.googletagmanager.com/gtag/js?id=G-J7V7XM0DL9") || U(e, "src", n)
        },
        m(r, i) {
            de(document.head, e)
        },
        p: Ne,
        i: Ne,
        o: Ne,
        d(r) {
            Te(e)
        }
    }
}
function _r(...t) {
    window.dataLayer || (window.dataLayer = []),
    window.dataLayer.push(arguments)
}
function pg(t, e, n) {
    let r;
    et(t, It, s=>n(1, r = s)),
    _r("js", new Date),
    r.clientId && r.sessionId ? _r("config", "G-J7V7XM0DL9", {
        client_id: r.clientId,
        cookie_flags: "secure;samesite=none",
        session_id: r.sessionId,
        transport_type: "beacon"
    }) : _r("config", "G-J7V7XM0DL9", {
        cookie_flags: "secure;samesite=none",
        transport_type: "beacon"
    });
    const i = [];
    return ar(()=>{
        const s = new Date
          , o = a=>{
            const c = {
                metric1: (new Date().getTime() - s.getTime()) / 1e3,
                page_location: window.location.href
            };
            _r("event", "page_unload", c)
        }
        ;
        window.addEventListener("pagehide", o),
        i.push(()=>window.removeEventListener("pagehide", o))
    }
    ),
    un(()=>{
        i.slice().reverse().forEach(s=>s())
    }
    ),
    [_r]
}
class mg extends St {
    constructor(e) {
        super(),
        Et(this, e, pg, hg, pt, {
            gtag: 0
        })
    }
    get gtag() {
        return _r
    }
}
const yo = ({playState: t, playId: e})=>{
    const n = bn();
    !n || !e || window.parent.postMessage({
        event_id: "PLAY_EVENT",
        playId: e,
        playState: t
    }, n)
}
  , yg = function*() {
    yield[0, "started"];
    let t = 1;
    for (; t < 10; )
        t++,
        yield[1e3, "playing-1s"];
    for (yield[1e3, "playing-10s"],
    t = 2; t < 6; )
        t++,
        yield[10 * 1e3, "playing-10s"];
    for (yield[10 * 1e3, "playing-1m"],
    t = 2; t < 60; )
        t++,
        yield[60 * 1e3, "playing-1m"];
    for (yield[60 * 1e3, "playing-1h"]; ; )
        yield[60 * 60 * 1e3, "playing-1h"]
};
function gg(t, e, n) {
    let r, i;
    et(t, It, o=>n(0, r = o)),
    et(t, cr, o=>n(1, i = o));
    const s = [];
    return ar(()=>{
        const o = a=>{
            yo({
                playId: r.gamePlayId,
                playState: "error"
            })
        }
        ;
        window.addEventListener("error", o),
        s.push(()=>window.removeEventListener("error", o))
    }
    ),
    un(()=>{
        s.slice().reverse().forEach(o=>o())
    }
    ),
    t.$$.update = ()=>{
        if (t.$$.dirty & 3 && i && r.gamePlayId) {
            const o = yg();
            let a;
            const u = ()=>{
                const [l,d] = o.next().value;
                a = setTimeout(h=>{
                    yo({
                        playId: r.gamePlayId,
                        playState: h
                    }),
                    u()
                }
                , l, d)
            }
            ;
            u(),
            s.push(()=>clearTimeout(a));
            const c = ()=>{
                yo({
                    playId: r.gamePlayId,
                    playState: "ended"
                })
            }
            ;
            window.addEventListener("pagehide", c),
            s.push(()=>window.removeEventListener("pagehide", c))
        }
    }
    ,
    [r, i]
}
class _g extends St {
    constructor(e) {
        super(),
        Et(this, e, gg, null, pt, {})
    }
}
const Mc = async({playId: t, status: e})=>{
    t && await fetch(`https://api.gx.games/gg/v2/game-plays/${t}`, {
        body: JSON.stringify({
            status: e
        }),
        credentials: "include",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        keepalive: !0,
        method: "PATCH"
    })
}
  , vg = function*(t) {
    const e = t.getTime();
    yield[t, "LOADED"],
    yield[t, "PLAYING"];
    for (const n of [1, 2, 5, 10, 20, 30])
        yield[new Date(e + n * 60 * 1e3), "PLAYING"];
    for (let n = 1; ; n += 1)
        yield[new Date(e + n * 60 * 60 * 1e3), "PLAYING"]
};
function bg(t, e, n) {
    let r, i;
    et(t, It, o=>n(0, r = o)),
    et(t, cr, o=>n(1, i = o));
    const s = [];
    return un(()=>{
        s.slice().reverse().forEach(o=>o())
    }
    ),
    t.$$.update = ()=>{
        if (t.$$.dirty & 3 && i && r.gamePlayId) {
            const o = vg(new Date);
            let a;
            const u = ()=>{
                const [l,d] = o.next().value;
                a = setTimeout(h=>{
                    Mc({
                        playId: r.gamePlayId,
                        status: h
                    }),
                    u()
                }
                , l.getTime() - new Date().getTime(), d)
            }
            ;
            u(),
            s.push(()=>clearTimeout(a));
            const c = ()=>{
                Mc({
                    playId: r.gamePlayId,
                    status: "ENDED"
                })
            }
            ;
            window.addEventListener("pagehide", c),
            s.push(()=>window.removeEventListener("pagehide", c))
        }
    }
    ,
    [r, i]
}
class wg extends St {
    constructor(e) {
        super(),
        Et(this, e, bg, null, pt, {})
    }
}
const Eg = Ir.object({
    data: Ir.object({
        title: Ir.string()
    })
})
  , Al = Vt(It, ({gameId: t, trackId: e},n)=>{
    fetch(`https://api.gx.games/gg/games/${t}?trackId=${e}`).then(r=>r.json()).then(r=>Eg.parseAsync(r)).then(n).catch(r=>console.error(`Failed fetching game info: ${r}`))
}
, null);
Vt(Al, t=>(t == null ? void 0 : t.data.title) ?? null);
function Uc(t) {
    return document.title = t[0],
    {
        c: Ne,
        m: Ne,
        d: Ne
    }
}
function Sg(t) {
    let e, n;
    return e = new dg({}),
    {
        c() {
            Nt(e.$$.fragment)
        },
        m(r, i) {
            vt(e, r, i),
            n = !0
        },
        i(r) {
            n || ($e(e.$$.fragment, r),
            n = !0)
        },
        o(r) {
            Ge(e.$$.fragment, r),
            n = !1
        },
        d(r) {
            bt(e, r)
        }
    }
}
function kg(t) {
    let e, n;
    return e = new Om({}),
    {
        c() {
            Nt(e.$$.fragment)
        },
        m(r, i) {
            vt(e, r, i),
            n = !0
        },
        i(r) {
            n || ($e(e.$$.fragment, r),
            n = !0)
        },
        o(r) {
            Ge(e.$$.fragment, r),
            n = !1
        },
        d(r) {
            bt(e, r)
        }
    }
}
function xg(t) {
    let e, n;
    return e = new Yy({}),
    {
        c() {
            Nt(e.$$.fragment)
        },
        m(r, i) {
            vt(e, r, i),
            n = !0
        },
        i(r) {
            n || ($e(e.$$.fragment, r),
            n = !0)
        },
        o(r) {
            Ge(e.$$.fragment, r),
            n = !1
        },
        d(r) {
            bt(e, r)
        }
    }
}
function Tg(t) {
    let e, n;
    return e = new bp({}),
    {
        c() {
            Nt(e.$$.fragment)
        },
        m(r, i) {
            vt(e, r, i),
            n = !0
        },
        i(r) {
            n || ($e(e.$$.fragment, r),
            n = !0)
        },
        o(r) {
            Ge(e.$$.fragment, r),
            n = !1
        },
        d(r) {
            bt(e, r)
        }
    }
}
function Og(t) {
    let e, n, r, i, s, o, a, u, c = si(), l, d = !si(), h, g, _, b, x, E, S, k, B, I, A, C, M = si() || ip() || sp() || op(), v, y, N = t[0] && Uc(t);
    r = new _p({}),
    s = new Xy({}),
    a = new rg({});
    let O = c && Sg()
      , te = d && kg();
    g = new cg({}),
    b = new _g({}),
    E = new wg({}),
    k = new mg({}),
    I = new zy({});
    let z = xg()
      , pe = M && Tg();
    return {
        c() {
            N && N.c(),
            e = mi(),
            n = Xe(),
            Nt(r.$$.fragment),
            i = Xe(),
            Nt(s.$$.fragment),
            o = Xe(),
            Nt(a.$$.fragment),
            u = Xe(),
            O && O.c(),
            l = Xe(),
            te && te.c(),
            h = Xe(),
            Nt(g.$$.fragment),
            _ = Xe(),
            Nt(b.$$.fragment),
            x = Xe(),
            Nt(E.$$.fragment),
            S = Xe(),
            Nt(k.$$.fragment),
            B = Xe(),
            Nt(I.$$.fragment),
            A = Xe(),
            z && z.c(),
            C = Xe(),
            pe && pe.c(),
            v = mi()
        },
        m(P, W) {
            N && N.m(document.head, null),
            de(document.head, e),
            Me(P, n, W),
            vt(r, P, W),
            Me(P, i, W),
            vt(s, P, W),
            Me(P, o, W),
            vt(a, P, W),
            Me(P, u, W),
            O && O.m(P, W),
            Me(P, l, W),
            te && te.m(P, W),
            Me(P, h, W),
            vt(g, P, W),
            Me(P, _, W),
            vt(b, P, W),
            Me(P, x, W),
            vt(E, P, W),
            Me(P, S, W),
            vt(k, P, W),
            Me(P, B, W),
            vt(I, P, W),
            Me(P, A, W),
            z && z.m(P, W),
            Me(P, C, W),
            pe && pe.m(P, W),
            Me(P, v, W),
            y = !0
        },
        p(P, [W]) {
            P[0] ? N || (N = Uc(P),
            N.c(),
            N.m(e.parentNode, e)) : N && (N.d(1),
            N = null)
        },
        i(P) {
            y || ($e(r.$$.fragment, P),
            $e(s.$$.fragment, P),
            $e(a.$$.fragment, P),
            $e(O),
            $e(te),
            $e(g.$$.fragment, P),
            $e(b.$$.fragment, P),
            $e(E.$$.fragment, P),
            $e(k.$$.fragment, P),
            $e(I.$$.fragment, P),
            $e(z),
            $e(pe),
            y = !0)
        },
        o(P) {
            Ge(r.$$.fragment, P),
            Ge(s.$$.fragment, P),
            Ge(a.$$.fragment, P),
            Ge(O),
            Ge(te),
            Ge(g.$$.fragment, P),
            Ge(b.$$.fragment, P),
            Ge(E.$$.fragment, P),
            Ge(k.$$.fragment, P),
            Ge(I.$$.fragment, P),
            Ge(z),
            Ge(pe),
            y = !1
        },
        d(P) {
            N && N.d(P),
            Te(e),
            P && Te(n),
            bt(r, P),
            P && Te(i),
            bt(s, P),
            P && Te(o),
            bt(a, P),
            P && Te(u),
            O && O.d(P),
            P && Te(l),
            te && te.d(P),
            P && Te(h),
            bt(g, P),
            P && Te(_),
            bt(b, P),
            P && Te(x),
            bt(E, P),
            P && Te(S),
            bt(k, P),
            P && Te(B),
            bt(I, P),
            P && Te(A),
            z && z.d(P),
            P && Te(C),
            pe && pe.d(P),
            P && Te(v)
        }
    }
}
function Ng(t, e, n) {
    let r, i;
    return et(t, Al, s=>n(1, i = s)),
    t.$$.update = ()=>{
        var s, o, a, u;
        t.$$.dirty & 2 && n(0, r = (s = i == null ? void 0 : i.data) == null ? void 0 : s.title),
        t.$$.dirty & 1 && r && ((u = (a = (o = window.oprt) == null ? void 0 : o.gameFiles) == null ? void 0 : a.setDisplayName) == null || u.call(a, r))
    }
    ,
    [r, i]
}
class Ag extends St {
    constructor(e) {
        super(),
        Et(this, e, Ng, Og, pt, {})
    }
}
Rh({
    dsn: "https://6f66460a4f1342758c183e89efe23b22@sentry-relay.opera-api.com/512",
    environment: "canary",
    release: "1.11.0 (4d9215e923) canary",
    tracesSampleRate: .1
});
{
    const t = [`
 ██████╗ ██╗  ██╗    ██████╗  █████╗ ███╗   ███╗███████╗███████╗
██╔════╝ ╚██╗██╔╝   ██╔════╝ ██╔══██╗████╗ ████║██╔════╝██╔════╝
██║  ███╗ ╚███╔╝    ██║  ███╗███████║██╔████╔██║█████╗  ███████╗
██║   ██║ ██╔██╗    ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝  ╚════██║
╚██████╔╝██╔╝ ██╗██╗╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗███████║
 ╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝
`, "=== Game Wrapper ===", "", "Version   : 1.11.0 (4d9215e923) canary", `Timestamp : ${new Date("2023-11-10T10:51:33.299Z")}`, ""]
      , e = Math.max(...t.flatMap(n=>n.split(`
`).map(r=>r.length)));
    console.log(["-".repeat(e), ...t, "-".repeat(e)].join(`
`))
}
ap();
new Ag({
    target: document.body
});
