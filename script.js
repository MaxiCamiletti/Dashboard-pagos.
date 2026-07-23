/* ═══════════════════════════════════════════════
   DATOS — TODOS LOS MÉTODOS DE PAGO
═══════════════════════════════════════════════ */
const datos = [
  // BASE
  {
    metodo: "Efectivo",
    categoria: "base",
    fija: "$0",
    variable: "0%",
    variableNum: 0,
    minimo: "$1",
    demora: "Inmediato",
    demoraNum: 0,
    riesgo: "bajo",
    riesgoNum: 1,
    moneda: "ARS",
    color: "#a1a1aa"
  },
  {
    metodo: "Transferencia bancaria",
    categoria: "base",
    fija: "$0",
    variable: "0%",
    variableNum: 0,
    minimo: "$1",
    demora: "Inmediato",
    demoraNum: 0,
    riesgo: "bajo",
    riesgoNum: 1,
    moneda: "ARS",
    color: "#a1a1aa"
  },

  // ARGENTINA FINTECH
  {
    metodo: "Mercado Pago",
    categoria: "argentina",
    fija: "$0",
    variable: "6.4%",
    variableNum: 6.4,
    minimo: "$100",
    demora: "Inmediato / 14 días",
    demoraNum: 0,
    riesgo: "medio",
    riesgoNum: 2,
    moneda: "ARS",
    color: "#009EE3"
  },
  {
    metodo: "Ualá",
    categoria: "argentina",
    fija: "$0",
    variable: "5%",
    variableNum: 5,
    minimo: "$100",
    demora: "Inmediato",
    demoraNum: 0,
    riesgo: "medio",
    riesgoNum: 2,
    moneda: "ARS",
    color: "#7C3AED"
  },
  {
    metodo: "Naranja X",
    categoria: "argentina",
    fija: "$0",
    variable: "6%",
    variableNum: 6,
    minimo: "$100",
    demora: "Inmediato",
    demoraNum: 0,
    riesgo: "medio",
    riesgoNum: 2,
    moneda: "ARS",
    color: "#FF4500"
  },
  {
    metodo: "Personal Pay",
    categoria: "argentina",
    fija: "$0",
    variable: "5%",
    variableNum: 5,
    minimo: "$100",
    demora: "Inmediato",
    demoraNum: 0,
    riesgo: "medio",
    riesgoNum: 2,
    moneda: "ARS",
    color: "#00C2E0"
  },
  {
    metodo: "Prex",
    categoria: "argentina",
    fija: "$0",
    variable: "4%",
    variableNum: 4,
    minimo: "$100",
    demora: "24h",
    demoraNum: 1,
    riesgo: "medio",
    riesgoNum: 2,
    moneda: "ARS",
    color: "#22d3ee"
  },

  // TARJETAS
  {
    metodo: "Débito",
    categoria: "tarjeta",
    fija: "$0",
    variable: "2%",
    variableNum: 2,
    minimo: "$100",
    demora: "24-48h",
    demoraNum: 2,
    riesgo: "medio",
    riesgoNum: 2,
    moneda: "ARS",
    color: "#a855f7"
  },
  {
    metodo: "Crédito 1 cuota",
    categoria: "tarjeta",
    fija: "$0",
    variable: "8%",
    variableNum: 8,
    minimo: "$100",
    demora: "30 días",
    demoraNum: 30,
    riesgo: "alto",
    riesgoNum: 3,
    moneda: "ARS",
    color: "#c084fc"
  },
  {
    metodo: "Crédito cuotas",
    categoria: "tarjeta",
    fija: "$0",
    variable: "10-15%",
    variableNum: 12.5,
    minimo: "$100",
    demora: "30-60 días",
    demoraNum: 45,
    riesgo: "alto",
    riesgoNum: 3,
    moneda: "ARS",
    color: "#e879f9"
  },

  // INTERNACIONAL
  {
    metodo: "PayPal",
    categoria: "internacional",
    fija: "0.30 USD",
    variable: "6%",
    variableNum: 6,
    minimo: "$1",
    demora: "Inmediato",
    demoraNum: 0,
    riesgo: "alto",
    riesgoNum: 3,
    moneda: "USD",
    color: "#0070E0"
  },
  {
    metodo: "Wise",
    categoria: "internacional",
    fija: "$0",
    variable: "3%",
    variableNum: 3,
    minimo: "$1",
    demora: "24h",
    demoraNum: 1,
    riesgo: "medio",
    riesgoNum: 2,
    moneda: "USD/EUR",
    color: "#9EE86F"
  },
  {
    metodo: "Payoneer",
    categoria: "internacional",
    fija: "$0",
    variable: "3%",
    variableNum: 3,
    minimo: "$50",
    demora: "24-48h",
    demoraNum: 2,
    riesgo: "medio",
    riesgoNum: 2,
    moneda: "USD",
    color: "#ff4800"
  },
  {
    metodo: "Stripe",
    categoria: "internacional",
    fija: "0.30 USD",
    variable: "3.6%",
    variableNum: 3.6,
    minimo: "$1",
    demora: "7 días",
    demoraNum: 7,
    riesgo: "medio",
    riesgoNum: 2,
    moneda: "USD",
    color: "#635BFF"
  },
  {
    metodo: "Neteller",
    categoria: "internacional",
    fija: "$0",
    variable: "3.99%",
    variableNum: 3.99,
    minimo: "$1",
    demora: "48h",
    demoraNum: 2,
    riesgo: "medio",
    riesgoNum: 2,
    moneda: "USD",
    color: "#1a56db"
  },
  {
    metodo: "Skrill",
    categoria: "internacional",
    fija: "$0",
    variable: "2.99%",
    variableNum: 2.99,
    minimo: "$1",
    demora: "48h",
    demoraNum: 2,
    riesgo: "medio",
    riesgoNum: 2,
    moneda: "USD",
    color: "#8b2fc9"
  },
  {
    metodo: "Zelle",
    categoria: "internacional",
    fija: "$0",
    variable: "0%",
    variableNum: 0,
    minimo: "$1",
    demora: "Inmediato",
    demoraNum: 0,
    riesgo: "bajo",
    riesgoNum: 1,
    moneda: "USD",
    color: "#6d28d9"
  },
  {
    metodo: "Zinli",
    categoria: "internacional",
    fija: "$0",
    variable: "2%",
    variableNum: 2,
    minimo: "$1",
    demora: "24h",
    demoraNum: 1,
    riesgo: "bajo",
    riesgoNum: 1,
    moneda: "USD",
    color: "#7c3aed"
  },

  // CRIPTO
  {
    metodo: "USDT (TRC20)",
    categoria: "cripto",
    fija: "$1",
    variable: "1%",
    variableNum: 1,
    minimo: "$10",
    demora: "5 min",
    demoraNum: 0,
    riesgo: "medio",
    riesgoNum: 2,
    moneda: "USDT",
    color: "#26a17b"
  },
  {
    metodo: "USDC",
    categoria: "cripto",
    fija: "$0",
    variable: "0.5%",
    variableNum: 0.5,
    minimo: "$1",
    demora: "5 min",
    demoraNum: 0,
    riesgo: "medio",
    riesgoNum: 2,
    moneda: "USDC",
    color: "#2775ca"
  },
  {
    metodo: "DAI",
    categoria: "cripto",
    fija: "$0",
    variable: "0.5%",
    variableNum: 0.5,
    minimo: "$1",
    demora: "5 min",
    demoraNum: 0,
    riesgo: "medio",
    riesgoNum: 2,
    moneda: "DAI",
    color: "#f5ac37"
  },
  {
    metodo: "Bitcoin",
    categoria: "cripto",
    fija: "variable",
    variable: "1-3%",
    variableNum: 2,
    minimo: "$10",
    demora: "10-30 min",
    demoraNum: 0,
    riesgo: "medio",
    riesgoNum: 2,
    moneda: "BTC",
    color: "#F7931A"
  },
  {
    metodo: "Binance Pay",
    categoria: "cripto",
    fija: "$0",
    variable: "0.5%",
    variableNum: 0.5,
    minimo: "$1",
    demora: "Inmediato",
    demoraNum: 0,
    riesgo: "medio",
    riesgoNum: 2,
    moneda: "BNB/USDT",
    color: "#F3BA2F"
  },
  {
    metodo: "Pix",
    categoria: "base",
    fija: "$0",
    variable: "0%",
    variableNum: 0,
    minimo: "$1",
    demora: "Inmediato",
    demoraNum: 0,
    riesgo: "bajo",
    riesgoNum: 1,
    moneda: "BRL",
    color: "#00B9AE"
  },
  {
    metodo: "Nequi",
    categoria: "argentina",
    fija: "$0",
    variable: "0%",
    variableNum: 0,
    minimo: "$1",
    demora: "Inmediato",
    demoraNum: 0,
    riesgo: "bajo",
    riesgoNum: 1,
    moneda: "COP",
    color: "#8B5CF6"
  },
  {
    metodo: "Pago Móvil",
    categoria: "argentina",
    fija: "$0",
    variable: "0%",
    variableNum: 0,
    minimo: "$1",
    demora: "Inmediato",
    demoraNum: 0,
    riesgo: "bajo",
    riesgoNum: 1,
    moneda: "VES",
    color: "#cf4647"
  }
];

/* ═══════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════ */
let filtroActivo = "todos";
let busqueda = "";
let sortField = null;
let sortDir = "asc";
let charts = {};

/* ═══════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════ */
function getDatosFiltrados() {
  let resultado = [...datos];

  if (filtroActivo !== "todos") {
    resultado = resultado.filter(d => d.categoria === filtroActivo);
  }

  if (busqueda.trim()) {
    const q = busqueda.toLowerCase();
    resultado = resultado.filter(d =>
      d.metodo.toLowerCase().includes(q) ||
      d.categoria.toLowerCase().includes(q) ||
      d.moneda.toLowerCase().includes(q)
    );
  }

  if (sortField) {
    resultado.sort((a, b) => {
      let va = a[sortField];
      let vb = b[sortField];
      if (typeof va === "string") va = va.toLowerCase();
      if (typeof vb === "string") vb = vb.toLowerCase();
      if (va < vb) return sortDir === "asc" ? -1 : 1;
      if (va > vb) return sortDir === "asc" ?  1 : -1;
      return 0;
    });
  }

  return resultado;
}

function getVariableColor(num) {
  if (num === 0)    return "num-low";
  if (num <= 3)     return "num-low";
  if (num <= 7)     return "num-mid";
  return "num-high";
}

function getCatLabel(cat) {
  const map = {
    argentina:     { label: "🇦🇷 Argentina",     cls: "cat-argentina" },
    internacional: { label: "🌍 Internacional",  cls: "cat-internacional" },
    cripto:        { label: "₿ Cripto",          cls: "cat-cripto" },
    tarjeta:       { label: "💳 Tarjeta",        cls: "cat-tarjeta" },
    base:          { label: "🏦 Base",            cls: "cat-base" },
  };
  return map[cat] || { label: cat, cls: "cat-base" };
}

/* ═══════════════════════════════════════════════
   KPI CARDS
═══════════════════════════════════════════════ */
function actualizarKPIs(datos_filtrados) {
  document.getElementById("total-metodos").textContent = datos_filtrados.length;

  // Menor comisión variable
  const ordenadosPorCom = [...datos_filtrados].sort((a, b) => a.variableNum - b.variableNum);
  const menorCom = ordenadosPorCom[0];
  if (menorCom) {
    document.getElementById("val-menor").textContent = menorCom.variable;
    document.getElementById("sub-menor").textContent = menorCom.metodo;
  }

  // Más rápido
  const ordenadosPorDemora = [...datos_filtrados].sort((a, b) => a.demoraNum - b.demoraNum);
  const masRapido = ordenadosPorDemora[0];
  if (masRapido) {
    document.getElementById("val-rapido").textContent = masRapido.demora;
    document.getElementById("sub-rapido").textContent = masRapido.metodo;
    document.getElementById("metodo-rapido").textContent = masRapido.metodo;
  }

  // Menor riesgo (bajo)
  const bajos = datos_filtrados.filter(d => d.riesgo === "bajo");
  const menorRiesgo = bajos[0] || datos_filtrados[0];
  if (menorRiesgo) {
    document.getElementById("val-riesgo").textContent = "Riesgo bajo";
    document.getElementById("sub-riesgo").textContent =
      bajos.length + " método" + (bajos.length !== 1 ? "s" : "") + " seguros";
  }

  // Comisión promedio
  const conCom = datos_filtrados.filter(d => d.variableNum > 0);
  const promedio = conCom.length
    ? (conCom.reduce((s, d) => s + d.variableNum, 0) / conCom.length).toFixed(2)
    : "0";
  document.getElementById("val-promedio").textContent = promedio + "%";

  // Header stats
  document.getElementById("metodo-economico").textContent = menorCom ? menorCom.metodo : "—";
}

/* ═══════════════════════════════════════════════
   TABLA
═══════════════════════════════════════════════ */
function renderTabla() {
  const tbody = document.getElementById("tabla-body");
  const datos_filtrados = getDatosFiltrados();

  actualizarKPIs(datos_filtrados);

  document.getElementById("row-count").textContent =
    datos_filtrados.length + " método" + (datos_filtrados.length !== 1 ? "s" : "");

  if (datos_filtrados.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8">
          <div class="no-results">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <p>No se encontraron resultados</p>
          </div>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = datos_filtrados.map((d, i) => {
    const cat = getCatLabel(d.categoria);
    const numCls = getVariableColor(d.variableNum);
    const delay = Math.min(i * 0.03, 0.5);
    return `
      <tr style="animation-delay: ${delay}s">
        <td>
          <div class="method-cell">
            <span class="method-dot" style="background:${d.color}; box-shadow: 0 0 6px ${d.color}60"></span>
            <span class="method-name">${d.metodo}</span>
          </div>
        </td>
        <td><span class="cat-badge ${cat.cls}">${cat.label}</span></td>
        <td class="num-cell ${d.fija === "$0" ? "num-low" : "num-mid"}">${d.fija}</td>
        <td class="num-cell ${numCls}">${d.variable}</td>
        <td class="num-cell" style="color:var(--text-secondary)">${d.minimo}</td>
        <td style="color:var(--text-secondary); font-size:13px">${d.demora}</td>
        <td>
          <span class="risk-badge risk-${d.riesgo}">
            <span class="risk-dot"></span>
            ${d.riesgo}
          </span>
        </td>
        <td><span class="currency-tag">${d.moneda}</span></td>
      </tr>
    `;
  }).join("");

  actualizarGraficos(datos_filtrados);
}

/* ═══════════════════════════════════════════════
   ORDENAMIENTO
═══════════════════════════════════════════════ */
document.querySelectorAll("thead th[data-sort]").forEach(th => {
  th.addEventListener("click", () => {
    const field = th.dataset.sort;
    if (sortField === field) {
      sortDir = sortDir === "asc" ? "desc" : "asc";
    } else {
      sortField = field;
      sortDir = "asc";
    }
    document.querySelectorAll("thead th").forEach(t => {
      t.classList.remove("sort-asc", "sort-desc");
    });
    th.classList.add(sortDir === "asc" ? "sort-asc" : "sort-desc");
    const icon = th.querySelector(".sort-icon");
    if (icon) icon.textContent = sortDir === "asc" ? "↑" : "↓";
    renderTabla();
  });
});

/* ═══════════════════════════════════════════════
   FILTROS
═══════════════════════════════════════════════ */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filtroActivo = btn.dataset.filter;
    renderTabla();
  });
});

document.getElementById("search-input").addEventListener("input", e => {
  busqueda = e.target.value;
  renderTabla();
});

/* ═══════════════════════════════════════════════
   CHART.JS — CONFIGURACIÓN GLOBAL
═══════════════════════════════════════════════ */
Chart.defaults.color = "#71717a";
Chart.defaults.font.family = "'DM Sans', sans-serif";
Chart.defaults.font.size = 12;

function getGradient(ctx, color) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 280);
  gradient.addColorStop(0, color + "cc");
  gradient.addColorStop(1, color + "22");
  return gradient;
}

/* ═══════════════════════════════════════════════
   GRÁFICOS
═══════════════════════════════════════════════ */
function actualizarGraficos(datos_filtrados) {

  // ── 1. BARRAS: comisión variable ───────────────
  const ctxBarras = document.getElementById("grafico-barras");
  const labelsBar = datos_filtrados.map(d => d.metodo);
  const dataBar   = datos_filtrados.map(d => d.variableNum);
  const coloresBar = datos_filtrados.map(d => d.color);

  if (charts.barras) {
    charts.barras.destroy();
  }

  charts.barras = new Chart(ctxBarras, {
    type: "bar",
    data: {
      labels: labelsBar,
      datasets: [{
        label: "Comisión variable (%)",
        data: dataBar,
        backgroundColor: datos_filtrados.map(d => d.color + "80"),
        borderColor: coloresBar,
        borderWidth: 1.5,
        borderRadius: 6,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(18,18,22,0.95)",
          borderColor: "rgba(255,255,255,0.1)",
          borderWidth: 1,
          padding: 12,
          titleFont: { size: 13, weight: "600" },
          bodyFont:  { size: 12 },
          callbacks: {
            label: ctx => ` Comisión: ${ctx.parsed.y}%`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: {
            maxRotation: 45,
            font: { size: 10 },
            color: "#52525b",
          }
        },
        y: {
          grid: {
            color: "rgba(255,255,255,0.04)",
            lineWidth: 1,
          },
          border: { display: false, dash: [4, 4] },
          ticks: {
            callback: v => v + "%",
            font: { size: 11 },
            color: "#52525b",
          }
        }
      },
      animation: {
        duration: 600,
        easing: "easeOutQuart"
      }
    }
  });

  // ── 2. DONUT: distribución por categoría ───────
  const ctxDonut = document.getElementById("grafico-donut");
  const catCount = {};
  datos_filtrados.forEach(d => {
    catCount[d.categoria] = (catCount[d.categoria] || 0) + 1;
  });

  const catLabels  = Object.keys(catCount).map(k => getCatLabel(k).label);
  const catValues  = Object.values(catCount);
  const catColors  = {
    argentina:     "#009EE3",
    internacional: "#635BFF",
    cripto:        "#F3BA2F",
    tarjeta:       "#a855f7",
    base:          "#71717a"
  };
  const donutColors = Object.keys(catCount).map(k => catColors[k] || "#71717a");

  if (charts.donut) {
    charts.donut.destroy();
  }

  charts.donut = new Chart(ctxDonut, {
    type: "doughnut",
    data: {
      labels: catLabels,
      datasets: [{
        data: catValues,
        backgroundColor: donutColors.map(c => c + "99"),
        borderColor: donutColors,
        borderWidth: 2,
        hoverOffset: 8,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "68%",
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            padding: 14,
            usePointStyle: true,
            pointStyleWidth: 8,
            font: { size: 11 },
            color: "#a1a1aa",
          }
        },
        tooltip: {
          backgroundColor: "rgba(18,18,22,0.95)",
          borderColor: "rgba(255,255,255,0.1)",
          borderWidth: 1,
          padding: 12,
          callbacks: {
            label: ctx => ` ${ctx.label}: ${ctx.parsed} métodos`
          }
        }
      },
      animation: {
        duration: 700,
        easing: "easeOutQuart"
      }
    }
  });

  // ── 3. COMPARATIVA: comisión vs demora ─────────
  const ctxComp = document.getElementById("grafico-comparativa");
  const top15 = [...datos_filtrados]
    .sort((a, b) => b.variableNum - a.variableNum)
    .slice(0, 15);

  if (charts.comparativa) {
    charts.comparativa.destroy();
  }

  charts.comparativa = new Chart(ctxComp, {
    type: "bar",
    data: {
      labels: top15.map(d => d.metodo),
      datasets: [
        {
          label: "Comisión variable (%)",
          data: top15.map(d => d.variableNum),
          backgroundColor: top15.map(d => d.color + "88"),
          borderColor:     top15.map(d => d.color),
          borderWidth: 1.5,
          borderRadius: { topLeft: 6, topRight: 6 },
          borderSkipped: false,
          yAxisID: "y",
        },
        {
          label: "Demora (días)",
          data: top15.map(d => d.demoraNum),
          type: "line",
          borderColor: "#a5b4fc",
          backgroundColor: "transparent",
          pointBackgroundColor: "#a5b4fc",
          pointBorderColor: "#09090b",
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7,
          borderWidth: 2,
          tension: 0.35,
          yAxisID: "y1",
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false,
      },
      plugins: {
        legend: {
          position: "top",
          align: "end",
          labels: {
            usePointStyle: true,
            pointStyleWidth: 8,
            font: { size: 11 },
            color: "#a1a1aa",
            padding: 16,
          }
        },
        tooltip: {
          backgroundColor: "rgba(18,18,22,0.95)",
          borderColor: "rgba(255,255,255,0.1)",
          borderWidth: 1,
          padding: 12,
          titleFont: { size: 13, weight: "600" },
          bodyFont:  { size: 12 },
          callbacks: {
            label: ctx => {
              if (ctx.datasetIndex === 0) return ` Comisión: ${ctx.parsed.y}%`;
              return ` Demora: ${ctx.parsed.y} días`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: {
            maxRotation: 35,
            font: { size: 10 },
            color: "#52525b",
          }
        },
        y: {
          type: "linear",
          position: "left",
          grid: {
            color: "rgba(255,255,255,0.04)",
          },
          border: { display: false },
          ticks: {
            callback: v => v + "%",
            font: { size: 11 },
            color: "#52525b",
          }
        },
        y1: {
          type: "linear",
          position: "right",
          grid: { drawOnChartArea: false },
          border: { display: false },
          ticks: {
            callback: v => v + "d",
            font: { size: 11 },
            color: "#52525b",
          }
        }
      },
      animation: {
        duration: 700,
        easing: "easeOutQuart"
      }
    }
  });
}

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  renderTabla();
});
