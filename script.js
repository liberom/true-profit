// TrueProfit calculator logic
function $(id){return document.getElementById(id)}

function formatMoney(v){
  if (isNaN(v) || v===null) return '—'
  return '$' + v.toFixed(2)
}

function calculate(){
  const sale = parseFloat($('salePrice').value) || 0
  const cogs = parseFloat($('costOfGoods').value) || 0
  const shipping = parseFloat($('shippingCost').value) || 0
  const payPct = parseFloat($('paymentPct').value) || 0
  const payFixed = parseFloat($('paymentFixed').value) || 0
  const marketPct = parseFloat($('marketPct').value) || 0

  const paymentFee = sale * (payPct/100) + payFixed
  const marketFee = sale * (marketPct/100)

  const netProfit = sale - cogs - shipping - paymentFee - marketFee
  const margin = sale > 0 ? (netProfit / sale) * 100 : 0

  $('paymentFee').textContent = formatMoney(paymentFee)
  $('marketFee').textContent = formatMoney(marketFee)
  $('shippingOut').textContent = formatMoney(shipping)
  $('cogsOut').textContent = formatMoney(cogs)
  $('netProfit').textContent = formatMoney(netProfit)
  $('profitMargin').textContent = sale>0 ? margin.toFixed(2) + '%' : '—'
}

function resetForm(){
  $('calcForm').reset()
  // restore defaults
  $('paymentPct').value = 2.9
  $('paymentFixed').value = 0.30
  $('marketPct').value = 6.5
  ['paymentFee','marketFee','shippingOut','cogsOut','netProfit','profitMargin'].forEach(id=>$(id).textContent='—')
}

document.addEventListener('DOMContentLoaded',()=>{
  $('calculateBtn').addEventListener('click',calculate)
  $('resetBtn').addEventListener('click',resetForm)

  // calculate live when inputs change (optional)
  const inputs = ['salePrice','costOfGoods','shippingCost','paymentPct','paymentFixed','marketPct']
  let debounceTimeout
  inputs.forEach(id=>$(id).addEventListener('input',()=>{
    // live but with small debounce
    if (debounceTimeout) clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(calculate, 220)
  }))
  // Defensive: ensure inputs are not accidentally disabled/readonly by external CSS/JS
  ;(function enableInputs(){
    const controls = Array.from(document.querySelectorAll('input,select,textarea,button'))
    controls.forEach(el=>{
      try{
        if (el.hasAttribute('disabled')) el.removeAttribute('disabled')
        el.disabled = false // Explicitly set to false
        if (el.hasAttribute('readonly')) el.removeAttribute('readonly')
        el.readOnly = false // Explicitly set to false
        el.style.pointerEvents = 'auto'
        if (el.tabIndex < 0) el.tabIndex = 0
      }catch(e){/* ignore */}
    })
  })()
})
