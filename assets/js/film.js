/* 4C House crayon film in the hero. Needs gsap.min.js and MotionPathPlugin.min.js loaded first. */
(function () {
  const root = document.querySelector("[data-film]");
  if (!root || !window.gsap) return;
  gsap.registerPlugin(MotionPathPlugin);
  const $ = s => root.querySelector(s), $$ = s => root.querySelectorAll(s);
  const NS = "http://www.w3.org/2000/svg";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const capEl = root.querySelector("[data-film-cap]"), dots = root.querySelectorAll("[data-film-dots] i");
  const CAPS = ["Leads come in. Nobody is free to catch them.", "Meet your business doctor.", "First, we diagnose.", "Then AI catches every lead.", "More bookings. Less stress.",
    "And leads are just step one.", "Operations: stock and deliveries on track.", "Finance: invoices chased, books up to date.",
    "HR: leave, payroll and paperwork sorted.", "Your whole business, running smoothly."];

  // Calendar cells (5 x 3) and pre-built "booked" markers
  const cells = [];
  for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) cells.push({ x: 496 + 34 * c, y: 107 + 28 * r });
  const COLORS = ["#FFC94D", "#FF7A59", "#1FA971", "#00D9FF"];
  const books = cells.map((p, i) => {
    const g = document.createElementNS(NS, "g");
    g.innerHTML = '<rect x="-12" y="-9" width="24" height="18" rx="4" fill="' + COLORS[i % 4] + '"/><path d="M-6 0 L-2 4 L6 -5" stroke="#0B2730" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
    $("#books").appendChild(g);
    gsap.set(g, { x: p.x, y: p.y, scale: 0, transformOrigin: "50% 50%" });
    return g;
  });
  function env() {
    const u = document.createElementNS(NS, "use");
    u.setAttribute("href", "#env"); u.setAttribute("width", "26"); u.setAttribute("height", "18");
    u.setAttribute("x", "-13"); u.setAttribute("y", "-9");
    $("#envs").appendChild(u);
    return u;
  }
  const lost = [0, 1, 2, 3].map(env), fresh = [0, 1, 2].map(env);
  const PILE = [[304, 432, -14], [323, 434, 9], [343, 431, -5], [362, 433, 13]];
  const CATCH = { x: 470, y: 278 };
  function toCell(i) {
    const p = cells[i];
    return [{ x: CATCH.x, y: CATCH.y }, { x: (CATCH.x + p.x) / 2, y: Math.min(p.y, 210) - 40 }, { x: p.x, y: p.y }];
  }

  const home = el => { const m = /translate\(([-\d.]+),([-\d.]+)\) rotate\(([-\d.]+)\)/.exec(el.getAttribute("transform")); return { x: +m[1], y: +m[2], rotation: +m[3] }; };
  const rcpts = [...$$(".rcpt")].map(e => ({ e, h: home(e) })), sheets = [...$$(".sheet")].map(e => ({ e, h: home(e) }));
  const SX = 800; // second room offset
  function zap(x, y) {
    const tl = gsap.timeline();
    [0, 0.12].forEach(d => {
      const c = document.createElementNS(NS, "circle");
      c.setAttribute("cx", x); c.setAttribute("cy", y); c.setAttribute("r", 8);
      c.setAttribute("stroke", "#00D9FF"); c.setAttribute("stroke-width", "2.5"); c.setAttribute("fill", "none"); c.setAttribute("opacity", "0");
      $("#fx").appendChild(c);
      tl.fromTo(c, { attr: { r: 8 }, opacity: 0.9 }, { attr: { r: 46 }, opacity: 0, duration: 0.7, ease: "power1.out", immediateRender: false }, d);
    });
    return tl;
  }

  function setCap(i) {
    gsap.to(capEl, { opacity: 0, y: 6, duration: 0.25, onComplete: () => { capEl.textContent = CAPS[i]; gsap.to(capEl, { opacity: 1, y: 0, duration: 0.35 }); } });
    dots.forEach((d, k) => d.classList.toggle("on", k <= i));
  }

  // ---------- initial state ----------
  function initial() {
    gsap.set("#cam", { scale: 1.5, svgOrigin: "250 300" });
    gsap.set("#doc", { x: 420 });
    gsap.set("#notes .note", { opacity: 0, scale: 0.5, transformOrigin: "0% 50%" });
    gsap.set("#cal", { opacity: 0, y: -14 });
    gsap.set("#steam", { opacity: 0.7 });
    gsap.set(["#noteOk", "#diag", "#sparkles", "#chart", "#sweat", "#mouthHappy", "#browsCalm", "#armMug", "#thumb", "#chartArrow"], { opacity: 0 });
    gsap.set(["#mouthWorried", "#browsWorried", "#armDown", "#mug", "#docHand", "#opsLate", "#stampDue", ".hrdot"], { opacity: 1 });
    gsap.set(["#plan", ".ptick", "#opsOk", "#stampPaid", ".hrtick", "#payroll"], { opacity: 0 });
    gsap.set("#cam", { x: 0 }); gsap.set("#robotShadow", { opacity: 0.3 });
    gsap.set("#opsB2", { rotation: 16, svgOrigin: "138 198" });
    gsap.set("#opsB5", { rotation: -13, svgOrigin: "152 268" });
    gsap.set("#opsB3", { x: 28, y: 243, rotation: -14, svgOrigin: "195 198" });
    gsap.set("#truck", { x: 0 });
    gsap.set($$(".coin")[0] ? [...$$(".coin")].slice(1) : [], { opacity: 0, y: -10 });
    rcpts.forEach(({ e, h }) => gsap.set(e, { x: h.x, y: h.y, rotation: h.rotation, opacity: 1, scale: 1 }));
    sheets.forEach(({ e, h }) => gsap.set(e, { x: h.x, y: h.y, rotation: h.rotation, opacity: 1, scale: 1 }));
    $("#fx").innerHTML = "";
    gsap.set("#diag", { scale: 0.8, transformOrigin: "50% 50%" });
    gsap.set("#diag .x", { opacity: 1 }); gsap.set("#diag .tick", { opacity: 0 });
    gsap.set("#robot", { opacity: 0, x: 102, y: 52, scale: 0.15, transformOrigin: "50% 50%" });
    gsap.set("#lid", { rotation: 0, svgOrigin: "544 368" });
    gsap.set("#docArm", { rotation: 0, svgOrigin: "654 312" });
    gsap.set("#ownerHead", { rotation: 0, svgOrigin: "230 290" });
    gsap.set("#stethoLine", { strokeDashoffset: 1 });
    gsap.set("#chart .bar", { scaleY: 0, transformOrigin: "50% 100%" });
    gsap.set("#chartLine", { strokeDashoffset: 1 });
    gsap.set("#phoneGlow", { fill: "#FF5A5A" });
    gsap.set([...lost, ...fresh], { x: -60, y: 60, opacity: 0, rotation: 0 });
    gsap.set(books, { scale: 0 });
    gsap.set($$(".ring"), { attr: { r: 10 }, opacity: 0 });
    capEl.textContent = CAPS[0]; gsap.set(capEl, { opacity: 1, y: 0 });
    dots.forEach((d, k) => d.classList.toggle("on", k === 0));
  }

  // ---------- the film ----------
  function build() {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    // SCENE 1: leads arrive, nobody catches them
    tl.addLabel("s1", 0.2);
    lost.forEach((e, i) => {
      const t = 0.3 + i * 0.62, [px, py, pr] = PILE[i];
      tl.set(e, { opacity: 1 }, t)
        .to(e, { duration: 0.9, ease: "power1.inOut", rotation: 18 * (i % 2 ? 1 : -1), motionPath: { path: [{ x: -40, y: 60 + i * 22 }, { x: 150, y: 70 + i * 8 }, { x: 300, y: 130 }, { x: 330 + i * 8, y: 300 }], curviness: 1.1 } }, t)
        .to(e, { duration: 0.55, ease: "bounce.out", x: px, y: py, rotation: pr }, t + 0.9);
    });
    $$("#notes .note").forEach((n, i) => tl.to(n, { opacity: 1, scale: 1, duration: 0.45, ease: "back.out(2.2)" }, 0.6 + i * 0.6));
    tl.to("#phone", { rotation: 7, svgOrigin: "351 366", duration: 0.07, yoyo: true, repeat: 23, ease: "none" }, 0.4)
      .to("#ownerHead", { rotation: -5, duration: 0.3, yoyo: true, repeat: 5, ease: "sine.inOut" }, 0.9)
      .to("#sweat", { opacity: 1, y: 6, duration: 0.6 }, 1.5);

    // SCENE 2: camera pulls back, the doctor-mechanic walks in
    tl.addLabel("s2", 3.5).call(setCap, [1], "s2")
      .to("#cam", { scale: 1, duration: 1.5, ease: "power2.inOut" }, "s2")
      .to("#cal", { opacity: 1, y: 0, duration: 0.7, ease: "back.out(1.6)" }, "s2+=0.9")
      .to("#doc", { x: 0, duration: 1.9, ease: "power1.out" }, "s2+=0.2")
      .to("#docBody", { y: -6, duration: 0.17, yoyo: true, repeat: 9, ease: "sine.inOut" }, "s2+=0.2")
      .to("#docArm", { rotation: -24, duration: 0.22, yoyo: true, repeat: 3, ease: "sine.inOut" }, "s2+=1.9");

    // SCENE 3: diagnosis
    tl.addLabel("s3", 6).call(setCap, [2], "s3")
      .to("#cam", { scale: 1.14, svgOrigin: "380 300", duration: 1.2, ease: "power2.inOut" }, "s3")
      .to("#stethoLine", { strokeDashoffset: 0, duration: 1, ease: "power2.inOut" }, "s3+=0.2");
    $$(".ring").forEach((r, i) => tl.fromTo(r, { attr: { r: 10 }, opacity: 0.9 }, { attr: { r: 44 }, opacity: 0, duration: 0.9, ease: "power1.out" }, "s3+=" + (1.2 + i * 0.3)));
    tl.to("#diag", { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.8)" }, "s3+=1.5");

    // SCENE 4: the fix
    tl.addLabel("s4", 8.7).call(setCap, [3], "s4")
      .to("#cam", { scale: 1, duration: 1.1, ease: "power2.inOut" }, "s4")
      .to("#stethoLine", { strokeDashoffset: 1, duration: 0.5, ease: "power2.in" }, "s4")
      .to("#lid", { rotation: -115, duration: 0.45, ease: "back.out(2)" }, "s4+=0.3")
      .to("#robot", { opacity: 1, duration: 0.15 }, "s4+=0.55")
      .to("#robot", { scale: 1, duration: 0.9, ease: "back.out(1.6)", motionPath: { path: [{ x: 102, y: 52 }, { x: 70, y: -40 }, { x: 0, y: 0 }], curviness: 1.3 } }, "s4+=0.55")
      .to("#sweat", { opacity: 0, duration: 0.4 }, "s4+=0.8");
    lost.forEach((e, i) => {
      const t = "s4+=" + (1.5 + i * 0.42);
      tl.to(e, { duration: 0.45, rotation: 0, ease: "power2.out", motionPath: { path: [{ x: PILE[i][0], y: PILE[i][1] }, { x: 430, y: 380 }, CATCH], curviness: 1.1 } }, t)
        .fromTo("#antenna", { scale: 1.8, fill: "#ffffff", transformOrigin: "50% 50%" }, { scale: 1, fill: "#FFC94D", duration: 0.35 }, "s4+=" + (1.95 + i * 0.42))
        .to(e, { duration: 0.6, ease: "power2.inOut", motionPath: { path: toCell(i), curviness: 1.2 } }, "s4+=" + (1.95 + i * 0.42))
        .to(e, { opacity: 0, scale: 0.4, duration: 0.15 }, "s4+=" + (2.5 + i * 0.42))
        .to(books[i], { scale: 1, duration: 0.4, ease: "back.out(2.5)" }, "s4+=" + (2.5 + i * 0.42));
    });
    fresh.forEach((e, i) => {
      const k = 4 + i, t0 = 1.9 + i * 0.42;
      tl.set(e, { opacity: 1, x: -40, y: 80 }, "s4+=" + (t0 - 0.2))
        .to(e, { duration: 0.85, ease: "power1.inOut", rotation: 0, motionPath: { path: [{ x: -40, y: 80 }, { x: 260, y: 150 }, CATCH], curviness: 1.2 } }, "s4+=" + (t0 - 0.2))
        .to(e, { duration: 0.6, ease: "power2.inOut", motionPath: { path: toCell(k), curviness: 1.2 } }, "s4+=" + (t0 + 0.65 + 0.42 * 2))
        .to(e, { opacity: 0, scale: 0.4, duration: 0.15 }, "s4+=" + (t0 + 1.25 + 0.42 * 2))
        .to(books[k], { scale: 1, duration: 0.4, ease: "back.out(2.5)" }, "s4+=" + (t0 + 1.25 + 0.42 * 2));
    });
    tl.to("#robotBody", { rotation: 10, svgOrigin: "470 332", duration: 0.12, yoyo: true, repeat: 13, ease: "sine.inOut" }, "s4+=1.5");
    $$("#diag .row").forEach((r, i) => {
      tl.to(r.querySelector(".x"), { opacity: 0, duration: 0.2 }, "s4+=" + (2.6 + i * 0.5))
        .fromTo(r.querySelector(".tick"), { opacity: 0, scale: 0.4, transformOrigin: "50% 50%" }, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2.5)" }, "s4+=" + (2.7 + i * 0.5));
    });
    tl.to("#notes .note", { opacity: 0, scale: 0.6, duration: 0.3, stagger: 0.08 }, "s4+=3.2")
      .fromTo("#noteOk", { opacity: 0, scale: 0.5, transformOrigin: "0% 50%" }, { opacity: 1, scale: 1, duration: 0.45, ease: "back.out(2.2)" }, "s4+=3.5")
      .to("#phoneGlow", { fill: "#1FA971", duration: 0.4 }, "s4+=3.5");

    // SCENE 5: relief
    tl.addLabel("s5", 13.2).call(setCap, [4], "s5")
      .to("#diag", { opacity: 0, scale: 0.9, duration: 0.4 }, "s5")
      .to(["#mouthWorried", "#browsWorried"], { opacity: 0, duration: 0.25 }, "s5")
      .to(["#mouthHappy", "#browsCalm"], { opacity: 1, duration: 0.25 }, "s5+=0.1")
      .to("#armDown", { opacity: 0, duration: 0.2 }, "s5+=0.3")
      .to("#armMug", { opacity: 1, duration: 0.2 }, "s5+=0.3")
      .to(["#mug", "#steam"], { opacity: 0, duration: 0.2 }, "s5+=0.3")
      .to("#ownerHead", { rotation: -4, duration: 0.6, ease: "sine.inOut" }, "s5+=0.3")
      .to("#chart", { opacity: 1, duration: 0.3 }, "s5+=0.5")
      .to("#chart .bar", { scaleY: 1, duration: 0.6, stagger: 0.12, ease: "back.out(1.6)" }, "s5+=0.6")
      .to("#chartLine", { strokeDashoffset: 0, duration: 0.7, ease: "power2.inOut" }, "s5+=1.1")
      .to("#chartArrow", { opacity: 1, duration: 0.2 }, "s5+=1.75")
      .to("#sparkles", { opacity: 1, duration: 0.4 }, "s5+=1");

    // SCENE 6: the plan, then on to the rest of the business
    const ticks = $$(".ptick");
    tl.addLabel("s6", 15.8).call(setCap, [5], "s6")
      .fromTo("#plan", { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.8)" }, "s6")
      .fromTo(ticks[0], { opacity: 0, scale: 0.4, transformOrigin: "50% 50%" }, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2.5)" }, "s6+=0.8")
      .to("#cam", { x: -SX, duration: 1.7, ease: "power2.inOut" }, "s6+=2")
      .to("#robotShadow", { opacity: 0, duration: 0.3 }, "s6+=2")
      .to("#robot", { duration: 1.7, ease: "power2.inOut", motionPath: { path: [{ x: 0, y: 0 }, { x: 300, y: -130 }, { x: 562, y: 0 }], curviness: 1.2 } }, "s6+=2");

    // SCENE 7: operations
    tl.addLabel("s7", 19.6).call(setCap, [6], "s7")
      .add(zap(SX + 160, 220), "s7+=0.2")
      .to("#opsB2", { rotation: 0, duration: 0.5, ease: "back.out(2)" }, "s7+=0.4")
      .to("#opsB5", { rotation: 0, duration: 0.5, ease: "back.out(2)" }, "s7+=0.55")
      .to("#opsB3", { duration: 0.8, ease: "power2.inOut", rotation: 0, motionPath: { path: [{ x: 28, y: 243 }, { x: 60, y: 80 }, { x: 0, y: 0 }], curviness: 1.3 } }, "s7+=0.7")
      .to("#opsLate", { opacity: 0, scale: 0.6, transformOrigin: "50% 50%", duration: 0.25 }, "s7+=1.6")
      .fromTo("#opsOk", { opacity: 0, scale: 0.5, transformOrigin: "50% 50%" }, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2.2)" }, "s7+=1.75")
      .to("#truck", { y: -5, duration: 0.15, yoyo: true, repeat: 3, ease: "sine.inOut" }, "s7+=1.8")
      .to("#robotBody", { rotation: 8, svgOrigin: "470 332", duration: 0.12, yoyo: true, repeat: 5, ease: "sine.inOut" }, "s7+=0.2");

    // SCENE 8: accounts and finance
    tl.addLabel("s8", 22.6).call(setCap, [7], "s8")
      .to("#robot", { duration: 0.9, ease: "power2.inOut", motionPath: { path: [{ x: 562, y: 0 }, { x: 590, y: -100 }, { x: 630, y: -132 }], curviness: 1.2 } }, "s8")
      .add(zap(SX + 405, 300), "s8+=0.8");
    rcpts.forEach(({ e }, i) => {
      const t = "s8+=" + (1 + i * 0.22);
      tl.to(e, { duration: 0.5, ease: "power2.inOut", rotation: 0, motionPath: { path: [{ x: gsap.getProperty(e, "x"), y: gsap.getProperty(e, "y") }, { x: 450, y: 250 }, { x: 472, y: 296 }], curviness: 1.2 } }, t)
        .to(e, { opacity: 0, scale: 0.4, duration: 0.12 }, "s8+=" + (1.5 + i * 0.22));
    });
    tl.to("#binder", { scaleY: 1.06, transformOrigin: "50% 100%", duration: 0.12, yoyo: true, repeat: 5 }, "s8+=1.5")
      .to("#stampDue", { opacity: 0, duration: 0.2 }, "s8+=1.4")
      .fromTo("#stampPaid", { opacity: 0, scale: 1.8, transformOrigin: "50% 50%" }, { opacity: 1, scale: 1, duration: 0.35, ease: "power3.in" }, "s8+=1.5")
      .to([...$$(".coin")].slice(1), { opacity: 1, y: 0, duration: 0.3, stagger: 0.14, ease: "bounce.out" }, "s8+=1.9");

    // SCENE 9: HR
    tl.addLabel("s9", 25.8).call(setCap, [8], "s9")
      .to("#robot", { duration: 0.8, ease: "power2.inOut", motionPath: { path: [{ x: 630, y: -132 }, { x: 760, y: -150 }, { x: 872, y: -30 }], curviness: 1.1 } }, "s9")
      .add(zap(SX + 665, 170), "s9+=0.7");
    $$(".hrdot").forEach((d, i) => {
      tl.to(d, { opacity: 0, duration: 0.15 }, "s9+=" + (0.9 + i * 0.3))
        .fromTo($$(".hrtick")[i], { opacity: 0, scale: 0.4, transformOrigin: "50% 50%" }, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2.5)" }, "s9+=" + (0.95 + i * 0.3));
    });
    sheets.forEach(({ e }, i) => {
      tl.to(e, { x: 660, y: 340, rotation: 0, duration: 0.4, ease: "power2.in" }, "s9+=" + (1.2 + i * 0.18))
        .to(e, { opacity: 0, scale: 0.5, duration: 0.1 }, "s9+=" + (1.55 + i * 0.18));
    });
    tl.fromTo("#payroll", { opacity: 0, scale: 0.5, transformOrigin: "50% 50%" }, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2.2)" }, "s9+=2.1");

    // SCENE 10: back to the owner, every box ticked
    tl.addLabel("s10", 29).call(setCap, [9], "s10")
      .to("#cam", { x: 0, duration: 1.7, ease: "power2.inOut" }, "s10")
      .to("#robot", { duration: 1.7, ease: "power2.inOut", motionPath: { path: [{ x: 872, y: -30 }, { x: 430, y: -150 }, { x: 0, y: 0 }], curviness: 1.2 } }, "s10");
    [1, 2, 3].forEach((k, i) => tl.fromTo(ticks[k], { opacity: 0, scale: 0.4, transformOrigin: "50% 50%" }, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(2.5)" }, "s10+=" + (1.8 + i * 0.3)));
    tl.to("#robotShadow", { opacity: 0.3, duration: 0.4 }, "s10+=1.6")
      .to("#docArm", { rotation: 12, duration: 0.4, ease: "back.out(2)" }, "s10+=2.2")
      .to("#docHand", { opacity: 0, duration: 0.1 }, "s10+=2.35")
      .fromTo("#thumb", { opacity: 0, scale: 0.6, transformOrigin: "50% 80%" }, { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(2.5)" }, "s10+=2.35")
      .to("#ownerHead", { rotation: -6, duration: 0.5, yoyo: true, repeat: 1, ease: "sine.inOut" }, "s10+=2.4");
    return tl;
  }

  // ---------- idle life after the film ----------
  let idle = [], idleEnvs = [];
  function startIdle() {
    idle.push(gsap.to("#robotBody", { y: -7, duration: 1.3, yoyo: true, repeat: -1, ease: "sine.inOut" }));
    idle.push(gsap.to("#robotShadow", { scaleX: 0.8, transformOrigin: "50% 50%", duration: 1.3, yoyo: true, repeat: -1, ease: "sine.inOut" }));
    idle.push(gsap.to("#antenna", { opacity: 0.35, duration: 0.6, yoyo: true, repeat: -1 }));
    idle.push(gsap.to("#sparkles path", { opacity: 0.3, scale: 0.7, transformOrigin: "50% 50%", duration: 1.2, yoyo: true, repeat: -1, stagger: 0.4, ease: "sine.inOut" }));
    let next = 7;
    const loop = gsap.timeline({ repeat: -1, repeatDelay: 1.6 });
    loop.call(() => {
      const e = env(); idleEnvs.push(e);
      const k = next < cells.length ? next++ : Math.floor(Math.random() * cells.length);
      gsap.timeline({ onComplete: () => e.remove() })
        .set(e, { x: -40, y: 90, opacity: 1 })
        .to(e, { duration: 1, ease: "power1.inOut", motionPath: { path: [{ x: -40, y: 90 }, { x: 270, y: 140 }, CATCH], curviness: 1.2 } })
        .to(e, { duration: 0.65, ease: "power2.inOut", motionPath: { path: toCell(k), curviness: 1.2 } })
        .to(e, { opacity: 0, scale: 0.4, duration: 0.15 })
        .fromTo(books[k], { scale: books[k]._gsap && gsap.getProperty(books[k], "scale") > 0.5 ? 1.35 : 0 }, { scale: 1, duration: 0.45, ease: "back.out(2.5)" }, "<");
    });
    idle.push(loop);
  }
  function stopIdle() { idle.forEach(t => t.kill()); idle = []; idleEnvs.forEach(e => e.remove()); idleEnvs = []; }

  // Always-on ambience
  gsap.to("#steam path", { y: -8, opacity: 0, duration: 1.8, repeat: -1, stagger: 0.6, ease: "sine.out" });
  gsap.to("#ownerBody", { y: 1.6, duration: 1.7, yoyo: true, repeat: -1, ease: "sine.inOut" });
  (function blink() {
    gsap.timeline({ onComplete: () => gsap.delayedCall(2.5 + Math.random() * 2.5, blink) })
      .to(["#ownerEyes", "#docEyes", "#robotEyes"], { scaleY: 0.1, transformOrigin: "50% 50%", duration: 0.08 })
      .to(["#ownerEyes", "#docEyes", "#robotEyes"], { scaleY: 1, duration: 0.1 });
  })();

  let film;
  function play() {
    stopIdle(); if (film) film.kill();
    initial();
    root.classList.remove("done");
    film = build();
    film.eventCallback("onComplete", () => { root.classList.add("done"); startIdle(); });
  }
  initial();
  if (reduce) {
    film = build(); film.progress(1).pause(); root.classList.add("done");
  } else {
    play();
  }
  const rp = root.querySelector("[data-film-replay]");
  if (rp) rp.addEventListener("click", play);

  // Pause everything while the film is scrolled out of view
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting) gsap.globalTimeline.resume(); else gsap.globalTimeline.pause();
  }).observe(root);
})();
