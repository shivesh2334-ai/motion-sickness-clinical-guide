'use strict';
const $=id=>document.getElementById(id);
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function showView(name){
 if(!['assess','tests','treatment','brands','followup','sources'].includes(name)) name='assess';
 document.querySelectorAll('.view').forEach(el=>el.hidden=el.id!==name);
 document.querySelectorAll('nav button').forEach(el=>{if(el.dataset.view===name)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current');});
}
document.querySelectorAll('nav button').forEach(b=>b.addEventListener('click',()=>{location.hash=b.dataset.view;showView(b.dataset.view);}));
window.addEventListener('hashchange',()=>showView(location.hash.slice(1)));
showView(['assess','tests','treatment','brands','followup','sources'].includes(location.hash.slice(1))?location.hash.slice(1):'assess');
$('assessment').addEventListener('submit',e=>{
 e.preventDefault(); const p={};
 $('assessment').querySelectorAll('input,select').forEach(el=>p[el.id]=el.type==='checkbox'?el.checked:el.value);
 const r=assess(p);
 $('result').className='card result '+r.level;
 $('result').innerHTML='<div class="eyebrow">ASSESSMENT SUMMARY</div><h2>'+escapeHTML(r.title)+'</h2><ul>'+r.items.filter(Boolean).map(i=>'<li>'+escapeHTML(i)+'</li>').join('')+'</ul>'+(r.warnings?.length?'<h3>Medication safety modifiers</h3><ul>'+r.warnings.map(w=>'<li>'+escapeHTML(w)+'</li>').join('')+'</ul>':'')+'<small>Generated '+new Date().toLocaleString('en-IN')+' · Review with the patient and treating clinician.</small>';
 $('result').focus();
});
$('reset').addEventListener('click',()=>{$('assessment').reset();$('result').replaceChildren();$('result').className='';$('age').focus();});
$('print').addEventListener('click',()=>window.print());
[...new Set(BRANDS.map(b=>b[0]))].forEach(g=>{const opt=document.createElement('option');opt.value=g;opt.textContent=g;$('group').append(opt);});
function renderBrands(){
 const q=$('search').value.trim().toLowerCase(),group=$('group').value;
 const rows=BRANDS.filter(b=>(!group||b[0]===group)&&b.slice(0,4).join(' ').toLowerCase().includes(q));
 $('brand-count').textContent=rows.length+' of '+BRANDS.length+' references';
 $('brand-results').innerHTML=rows.length?[...new Set(rows.map(b=>b[0]))].map(g=>'<div class="card"><h3>'+escapeHTML(g)+'</h3><div class="table-wrap"><table><thead><tr><th>Brand</th><th>Ingredient / strength</th><th>Listed company</th><th>Evidence</th></tr></thead><tbody>'+rows.filter(b=>b[0]===g).map(b=>'<tr><td><strong>'+escapeHTML(b[1])+'</strong></td><td>'+escapeHTML(b[2])+'</td><td>'+escapeHTML(b[3])+'</td><td><a href="'+SOURCES[b[4]][2]+'" target="_blank" rel="noopener noreferrer">Listing ↗</a></td></tr>').join('')+'</tbody></table></div>'+(g.startsWith('Combination')?'<p class="muted">Vertigo products; no automatic recommendation for travel sickness. Do not add duplicate cinnarizine or dimenhydrinate.</p>':'')+'</div>').join(''):'<div class="card">No matching medicine. Try a different ingredient or group.</div>';
}
$('search').addEventListener('input',renderBrands);$('group').addEventListener('change',renderBrands);renderBrands();
$('sources-list').innerHTML=SOURCES.map((s,i)=>'<article class="source"><span>'+String(i+1).padStart(2,'0')+'</span><div><strong>'+escapeHTML(s[0])+'</strong><p>'+escapeHTML(s[1])+'</p>'+(s[2]?'<a href="'+s[2]+'" target="_blank" rel="noopener noreferrer">Open reference ↗</a>':'<small>User-provided baseline; not publicly redistributed.</small>')+'</div></article>').join('');
