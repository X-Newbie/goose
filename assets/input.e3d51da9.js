!(function (e = ".", o = "__import__") {
  try {
    self[o] = new Function("u", "return import(u)");
  } catch (t) {
    const r = new URL(e, location),
      n = (e) => {
        URL.revokeObjectURL(e.src), e.remove();
      };
    (self[o] = (e) =>
      new Promise((t, s) => {
        const c = new URL(e, r);
        if (self[o].moduleMap[c]) return t(self[o].moduleMap[c]);
        const a = new Blob(
            [`import * as m from '${c}';`, `${o}.moduleMap['${c}']=m;`],
            { type: "text/javascript" }
          ),
          l = Object.assign(document.createElement("script"), {
            type: "module",
            src: URL.createObjectURL(a),
            onerror() {
              s(new Error(`Failed to import: ${e}`)), n(l);
            },
            onload() {
              t(self[o].moduleMap[c]), n(l);
            },
          });
        document.head.appendChild(l);
      })),
      (self[o].moduleMap = {});
  }
})("./../assets/");
