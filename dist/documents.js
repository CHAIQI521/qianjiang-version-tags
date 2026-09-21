const iconPaths={tool:'<path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-3-3Z"/>',spark:'<path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z"/>',database:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',shield:'<path d="M12 3 4.5 6v5.5c0 4.6 3.2 7.7 7.5 9.5 4.3-1.8 7.5-4.9 7.5-9.5V6L12 3Z"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m11 12 8-8m-2 2 2 2"/>',code:'<path d="m8 9-4 3 4 3m8-6 4 3-4 3m-3-9-2 12"/>',bot:'<rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 3v4M8 12h.01M16 12h.01"/>',file:'<path d="M6 3h8l4 4v14H6zM14 3v5h5M9 13h6M9 17h6"/>',chevron:'<path d="m9 10 3 3 3-3"/>',up:'<path d="m9 14 3-3 3 3"/>',panel:'<path d="M4 5h16v14H4zM9 5v14"/>',plus:'<path d="M12 5v14M5 12h14"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',refresh:'<path d="M20 6v5h-5M4 18v-5h5"/><path d="M6.1 9A7 7 0 0 1 18 6l2 5M18 15a7 7 0 0 1-12 3l-2-5"/>',upload:'<path d="M12 16V4m-4 4 4-4 4 4M5 14v6h14v-6"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1.1M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1.1"/>',check:'<path d="m5 12 4 4L19 6"/>',close:'<path d="m7 7 10 10M17 7 7 17"/>'};
function svg(name){return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name]||''}</svg>`}
document.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=svg(el.dataset.icon)});

const tagGroups={
  '产品版本':['V2.4.1','V2.4.0','V2.3.x'],
  '版本阶段':['草稿版','Release Candidate','正式发布','历史归档'],
  '发布渠道':['灰度版本','全量版本','客户定制版本']
};
const selectedGroups=new Set();
const selectedTags={};
const overlay=document.querySelector('#documentOverlay');
const menu=document.querySelector('#groupMenu');
const trigger=document.querySelector('#groupTrigger');

function renderGroupMenu(){
  menu.innerHTML=Object.keys(tagGroups).map(group=>`<label class="multi-option"><input type="checkbox" value="${group}" ${selectedGroups.has(group)?'checked':''}><span class="check-box">${selectedGroups.has(group)?svg('check'):''}</span><span><b>${group}</b><small>${tagGroups[group].length} 个可用标签</small></span></label>`).join('');
}
function renderCascade(){
  const groups=[...selectedGroups];
  document.querySelector('#groupTriggerText').textContent=groups.length?`已选 ${groups.length} 个分组`:'请选择标签分组';
  document.querySelector('#cascadeSelections').innerHTML=groups.length?groups.map((group,index)=>`<div class="cascade-row"><div class="cascade-index">${index+1}</div><div class="cascade-group"><span>标签分组</span><b>${group}</b></div><div class="cascade-arrow">→</div><label class="cascade-tag"><span>该分组标签 <em>单选</em></span><select data-tag-group="${group}"><option value="">请选择标签</option>${tagGroups[group].map(tag=>`<option ${selectedTags[group]===tag?'selected':''}>${tag}</option>`).join('')}</select></label><button type="button" class="cascade-remove" data-remove-group="${group}" aria-label="移除 ${group}">${svg('close')}</button></div>`).join(''):`<div class="cascade-empty">${svg('link')}<span>选择分组后，这里将显示对应的标签选项</span></div>`;
  renderSummary();
}
function renderSummary(){
  const entries=Object.entries(selectedTags).filter(([group,tag])=>selectedGroups.has(group)&&tag);
  const summary=document.querySelector('#selectionSummary');
  summary.hidden=!entries.length;
  document.querySelector('#selectedTagChips').innerHTML=entries.map(([group,tag])=>`<span class="selected-chip"><small>${group}</small>${tag}</span>`).join('');
}
renderGroupMenu();renderCascade();
trigger.onclick=()=>{menu.hidden=!menu.hidden;trigger.classList.toggle('open',!menu.hidden)};
menu.onchange=e=>{const input=e.target.closest('input[type=checkbox]');if(!input)return;if(input.checked)selectedGroups.add(input.value);else{selectedGroups.delete(input.value);delete selectedTags[input.value]}renderGroupMenu();renderCascade()};
document.querySelector('#cascadeSelections').onchange=e=>{const select=e.target.closest('[data-tag-group]');if(!select)return;selectedTags[select.dataset.tagGroup]=select.value;renderSummary()};
document.querySelector('#cascadeSelections').onclick=e=>{const button=e.target.closest('[data-remove-group]');if(!button)return;selectedGroups.delete(button.dataset.removeGroup);delete selectedTags[button.dataset.removeGroup];renderGroupMenu();renderCascade()};
document.addEventListener('click',e=>{if(!e.target.closest('#groupMultiSelect')){menu.hidden=true;trigger.classList.remove('open')}});

document.querySelector('#openDocumentModal').onclick=()=>overlay.hidden=false;
document.querySelectorAll('[data-document-close]').forEach(button=>button.onclick=()=>overlay.hidden=true);
overlay.onclick=e=>{if(e.target===overlay)overlay.hidden=true};
document.querySelector('#fileInput').onchange=e=>{const file=e.target.files[0];if(!file)return;document.querySelector('#uploadTitle').textContent=file.name;document.querySelector('#uploadHint').textContent=`${(file.size/1024/1024).toFixed(1)} MB · 已准备上传`};
document.querySelector('#documentForm').onsubmit=e=>{e.preventDefault();const incomplete=[...selectedGroups].filter(group=>!selectedTags[group]);if(incomplete.length){notify(`请先选择“${incomplete[0]}”的标签`);return}notify('文档创建任务已提交');overlay.hidden=true};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.hidden=true;overlay.hidden=true}});
function notify(message){const toast=document.querySelector('#toast');toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2200)}
