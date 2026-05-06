// ===== PARTICLES =====
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let W, H, pts = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', () => { resize(); init(); });

function init() {
  pts = [];
  const n = Math.floor(W / 20);
  for (let i = 0; i < n; i++) {
    pts.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25,
      r: Math.random() * 1.2 + .3, a: Math.random() * .4 + .1
    });
  }
}
init();

function draw() {
  ctx.clearRect(0, 0, W, H);
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i];
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > W) p.vx *= -1;
    if (p.y < 0 || p.y > H) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(203,172,249,${p.a})`;
    ctx.fill();
    for (let j = i + 1; j < pts.length; j++) {
      const q = pts[j];
      const d = Math.hypot(p.x - q.x, p.y - q.y);
      if (d < 90) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(203,172,249,${.06 * (1 - d / 90)})`;
        ctx.lineWidth = .5; ctx.stroke();
      }
    }
  }
  requestAnimationFrame(draw);
}
draw();

// ===== SCROLL REVEAL =====
const ro = new IntersectionObserver((es) => {
  es.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('in'), i * 70);
  });
}, { threshold: .08 });
document.querySelectorAll('.rv').forEach(el => ro.observe(el));

// ===== ACTIVE NAV =====
const secs = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('nav ul a');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if (scrollY >= s.offsetTop - 160) cur = s.id; });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
}, { passive: true });

// ===== STAT COUNTERS =====
const co = new IntersectionObserver((es) => {
  es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    let cur = 0;
    const step = target / 50;
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = Math.floor(cur) + suffix;
      if (cur >= target) clearInterval(t);
    }, 25);
    co.unobserve(el);
  });
}, { threshold: .5 });
document.querySelectorAll('[data-count]').forEach(el => co.observe(el));

// ===== VSCODE CODE SWITCHER =====
const codes = {
  etl: `<span class="c-cm"># ETL Pipeline — Shopee/Lazada/TikTok → BigQuery</span>
<span class="c-cm"># Ingests 1,000–2,000 records daily, fully automated</span>

<span class="c-kw">import</span> <span class="c-var">pandas</span> <span class="c-kw">as</span> <span class="c-var">pd</span>
<span class="c-kw">from</span> <span class="c-var">google.cloud</span> <span class="c-kw">import</span> <span class="c-var">bigquery</span>

<span class="c-kw">def</span> <span class="c-fn">run_etl_pipeline</span>(<span class="c-var">platform</span>: <span class="c-var">str</span>, <span class="c-var">date</span>: <span class="c-var">str</span>):
    <span class="c-cm">  """Triggered by Lark Bot — zero manual intervention"""</span>
    <span class="c-var">  raw</span> = <span class="c-fn">fetch_api_data</span>(<span class="c-var">platform</span>, <span class="c-var">date</span>)
    <span class="c-var">  flat</span> = <span class="c-fn">flatten_json</span>(<span class="c-var">raw</span>)           <span class="c-cm"># Normalize nested JSON</span>
    <span class="c-var">  clean</span> = <span class="c-fn">apply_business_rules</span>(<span class="c-var">flat</span>)  <span class="c-cm"># Dedup, type cast, validate</span>
    <span class="c-fn">  load_to_bigquery</span>(<span class="c-var">clean</span>, <span class="c-str">f"data_mart.{platform}"</span>)
    <span class="c-kw">  return</span> <span class="c-str">f"✅ {len(clean)} records loaded"</span>`,

  b2b: `<span class="c-cm"># B2B PDF Order Parser — pdfplumber + Greedy Pack Algorithm</span>
<span class="c-cm"># Supports 5 vendor formats: GS25, Circle K, Guardian...</span>

<span class="c-kw">import</span> <span class="c-var">pdfplumber</span>
<span class="c-kw">from</span> <span class="c-var">algorithms</span> <span class="c-kw">import</span> <span class="c-var">greedy_pack_convert</span>

<span class="c-kw">def</span> <span class="c-fn">parse_po</span>(<span class="c-var">pdf_path</span>: <span class="c-var">str</span>, <span class="c-var">vendor</span>: <span class="c-var">str</span>) -> <span class="c-var">dict</span>:
    <span class="c-kw">  with</span> <span class="c-var">pdfplumber</span>.<span class="c-fn">open</span>(<span class="c-var">pdf_path</span>) <span class="c-kw">as</span> <span class="c-var">pdf</span>:
        <span class="c-var">    tables</span> = <span class="c-var">pdf</span>.<span class="c-var">pages</span>[<span class="c-num">0</span>].<span class="c-fn">extract_tables</span>()
    <span class="c-var">  items</span> = <span class="c-fn">map_sku</span>(<span class="c-var">tables</span>, <span class="c-var">vendor</span>)     <span class="c-cm"># Multi-layer SKU mapping</span>
    <span class="c-var">  packed</span> = <span class="c-fn">greedy_pack_convert</span>(<span class="c-var">items</span>) <span class="c-cm"># Thùng / Khay / Lẻ logic</span>
    <span class="c-kw">  return</span> <span class="c-fn">sync_to_lark</span>(<span class="c-var">packed</span>)          <span class="c-cm"># → Lark Base auto-populated</span>

<span class="c-cm"># Result: 60 minutes of manual work → 30 seconds</span>`,

  ai: `<span class="c-cm"># AI Agent — Text-to-SQL via MCP BigQuery</span>
<span class="c-cm"># Non-tech staff query BigQuery in Vietnamese</span>

<span class="c-kw">from</span> <span class="c-var">antigravity</span> <span class="c-kw">import</span> <span class="c-var">Agent</span>, <span class="c-var">MCPConnector</span>

<span class="c-var">bq_mcp</span> = <span class="c-var">MCPConnector</span>(<span class="c-str">"bigquery"</span>, <span class="c-var">project</span>=<span class="c-str">"playah-data"</span>)
<span class="c-var">agent</span> = <span class="c-var">Agent</span>(<span class="c-var">tools</span>=[<span class="c-var">bq_mcp</span>])

<span class="c-cm"># Staff asks in Vietnamese:</span>
<span class="c-var">query</span> = <span class="c-str">"doanh thu tháng 4 của kênh Shopee là bao nhiêu?"</span>
<span class="c-var">result</span> = <span class="c-var">agent</span>.<span class="c-fn">run</span>(<span class="c-var">query</span>)

<span class="c-cm"># Agent auto-generates and executes:</span>
<span class="c-cm"># SELECT SUM(revenue) FROM data_mart.shopee</span>
<span class="c-cm"># WHERE DATE_TRUNC(date, MONTH) = '2026-04-01'</span>
<span class="c-cm"># → Returns: "Doanh thu Shopee tháng 4: 847,231,000 VND"</span>`,

  audit: `<span class="c-cm"># 80M VND Inventory Audit — BigQuery Reconciliation</span>
<span class="c-cm"># Automated SKU-level discrepancy detection</span>

<span class="c-var">audit_query</span> = <span class="c-str">"""
  WITH warehouse_stock AS (
    SELECT sku_id, SUM(quantity) AS actual_qty
    FROM warehouse.inventory_log
    GROUP BY sku_id
  ),
  system_stock AS (
    SELECT sku_id, SUM(quantity) AS system_qty
    FROM data_mart.orders
    GROUP BY sku_id
  )
  SELECT
    w.sku_id,
    w.actual_qty - s.system_qty AS discrepancy,
    (w.actual_qty - s.system_qty) * p.unit_price AS vnd_loss
  FROM warehouse_stock w
  JOIN system_stock s USING(sku_id)
  JOIN products p USING(sku_id)
  WHERE ABS(w.actual_qty - s.system_qty) > 0
  ORDER BY vnd_loss DESC
"""</span>
<span class="c-cm"># Result: Detected 80,000,000 VND inventory loss 🎯</span>`
};

function showCode(key) {
  document.getElementById('vscode-display').innerHTML = codes[key];
  document.querySelectorAll('.vscode-file').forEach(f => f.classList.remove('active'));
  event.target.classList.add('active');
}
