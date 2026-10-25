/* A geometric overlay of two triangular lattices, drawn only on input. */
(() => {
  let dispose = () => {};
  function initHome() {
    dispose();
    const widget = document.querySelector(".moire-widget");
    if (!widget) return;
    const stage = widget.querySelector(".moire-stage");
    const canvas = widget.querySelector("canvas");
    const range = widget.querySelector("#twist-angle");
    const output = widget.querySelector("output");
    const reset = widget.querySelector("#moire-reset");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const events = new AbortController();
    const options = { signal: events.signal };
    let frame = 0;
    let drag = null;
    function draw() {
      const width = stage.clientWidth, height = stage.clientHeight;
      if (!width || !height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, width * dpr / 2, height * dpr / 2);
      ctx.clearRect(-width / 2, -height / 2, width, height);
      const spacing = 10, rowHeight = spacing * Math.sqrt(3) / 2;
      const radius = Math.hypot(width, height) / 2 + spacing;
      const rows = Math.ceil(radius / rowHeight), cols = Math.ceil(radius / spacing);
      function lattice(angle, color) {
        ctx.save(); ctx.rotate(angle); ctx.fillStyle = color; ctx.beginPath();
        for (let row = -rows; row <= rows; row++) {
          for (let col = -cols; col <= cols; col++) {
            const x = col * spacing + (Math.abs(row) % 2) * spacing / 2, y = row * rowHeight;
            ctx.moveTo(x + 1.45, y); ctx.arc(x, y, 1.45, 0, Math.PI * 2);
          }
        }
        ctx.fill(); ctx.restore();
      }
      lattice(0, "rgba(31, 95, 87, .74)");
      lattice(Number(range.value) * Math.PI / 180, "rgba(180, 92, 58, .67)");
      widget.classList.add("is-ready");
    }
    function schedule() { cancelAnimationFrame(frame); frame = requestAnimationFrame(draw); }
    function update(value) {
      range.value = String(Math.min(12, Math.max(1, value)));
      const angle = Number(range.value).toFixed(1);
      output.value = `${angle}°`;
      range.setAttribute("aria-valuetext", `${angle} degrees`);
      stage.setAttribute("aria-label", `Two triangular lattices overlap at a ${angle} degree twist angle, creating a larger moiré pattern.`);
      schedule();
    }
    range.disabled = false; reset.disabled = false;
    range.addEventListener("input", () => update(Number(range.value)), options);
    reset.addEventListener("click", () => update(3), options);
    stage.addEventListener("pointerdown", event => {
      if (event.button !== 0) return;
      drag = { x: event.clientX, angle: Number(range.value), id: event.pointerId };
      stage.setPointerCapture(event.pointerId);
    }, options);
    stage.addEventListener("pointermove", event => {
      if (drag && event.pointerId === drag.id) update(drag.angle + (event.clientX - drag.x) / 28);
    }, options);
    const endDrag = () => { drag = null; };
    stage.addEventListener("pointerup", endDrag, options);
    stage.addEventListener("pointercancel", endDrag, options);
    stage.addEventListener("lostpointercapture", endDrag, options);
    const observer = new ResizeObserver(schedule); observer.observe(stage); update(3);
    dispose = () => { events.abort(); observer.disconnect(); cancelAnimationFrame(frame); };
  }
  // Material's instant navigation replaces the page without a full reload.
  if (typeof document$ !== "undefined") document$.subscribe(initHome);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initHome, { once: true });
  else initHome();
})();
