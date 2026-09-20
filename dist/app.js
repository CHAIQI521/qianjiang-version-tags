const iconPaths={tool:'<path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-3-3Z"/>',spark:'<path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/>',database:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',shield:'<path d="M12 3 4.5 6v5.5c0 4.6 3.2 7.7 7.5 9.5 4.3-1.8 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="m9 12 2 2 4-4"/>',key:'<circle cx="8" cy="15" r="4"/><path d="m11 12 8-8m-2 2 2 2m-5 1 2 2"/>',code:'<path d="m8 9-4 3 4 3m8-6 4 3-4 3m-3-9-2 12"/>',bot:'<rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 3v4M8 12h.01M16 12h.01M8 16h8"/>',tag:'<path d="M4 4h7l9 9-7 7-9-9V4Z"/><circle cx="8.5" cy="8.5" r="1"/>',chevron:'<path d="m9 10 3 3 3-3"/>',up:'<path d="m9 14 3-3 3 3"/>',panel:'<path d="M4 5h16v14H4zM9 5v14M6 9h1M6 12h1"/>',plus:'<path d="M12 5v14M5 12h14"/>',file:'<path d="M6 3h8l4 4v14H6zM14 3v5h5M9 13h6M9 17h6"/>',trend:'<path d="m4 17 5-5 4 4 7-8M15 8h5v5"/>',alert:'<path d="M12 4 3.5 19h17L12 4Z"/><path d="M12 9v4m0 3h.01"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',filter:'<path d="M4 5h16l-6 7v6l-4 2v-8L4 5Z"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H3v-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V3h4v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',refresh:'<path d="M20 6v5h-5M4 18v-5h5"/><path d="M6.1 9A7 7 0 0 1 18 6l2 5M18 15a7 7 0 0 1-12 3l-2-5"/>',download:'<path d="M12 3v12m-4-4 4 4 4-4M5 20h14"/>',more:'<circle cx="5" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="19" cy="12" r="1" fill="currentColor"/>',edit:'<path d="m4 16-.8 4 4-.8L18 8.4 15.6 6 4 16ZM14 7.5l2.5 2.5"/>',eye:'<path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/>',trash:'<path d="M4 7h16M9 7V4h6v3m3 0-1 14H7L6 7m4 4v6m4-6v6"/>'};
function svg(name){return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name]||''}</svg>`}
document.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=svg(el.dataset.icon)});

let groups=['产品版本','版本阶段','发布渠道'];
let tags=[
  {id:1,name:'V2.4.1',desc:'生产环境当前稳定版本',group:'产品版本',docs:32,time:'2026-09-20 11:42',enabled:true},
  {id:2,name:'V2.4.0',desc:'上一个正式发布版本',group:'产品版本',docs:28,time:'2026-09-19 16:08',enabled:true},
  {id:3,name:'Release Candidate',desc:'发布前验证与回归测试版本',group:'版本阶段',docs:21,time:'2026-09-19 10:24',enabled:true},
  {id:4,name:'V2.3.x',desc:'V2.3 系列长期维护版本',group:'产品版本',docs:19,time:'2026-09-18 17:36',enabled:true},
  {id:5,name:'灰度版本',desc:'仅用于灰度环境和小流量验证',group:'发布渠道',docs:17,time:'2026-09-17 14:52',enabled:true},
  {id:6,name:'正式发布',desc:'已完成验收并推送至生产环境',group:'版本阶段',docs:14,time:'2026-09-16 18:31',enabled:true},
  {id:7,name:'草稿版',desc:'尚未进入评审的编辑中版本',group:'版本阶段',docs:39,time:'2026-09-15 09:18',enabled:true},
  {id:8,name:'历史归档',desc:'不再维护的历史版本',group:'版本阶段',docs:16,time:'2026-09-12 15:05',enabled:false}
];

const tbody=document.querySelector('#tagRows');
const empty=document.querySelector('#emptyState');
const resultCount=document.querySelector('#resultCount');
const groupFilter=document.querySelector('#groupFilter');
const createGroupSelect=document.querySelector('#createGroupSelect');

function renderGroupOptions(){
  const filterValue=groupFilter.value;
  groupFilter.innerHTML='<option value="">全部分组</option>'+groups.map(g=>`<option>${g}</option>`).join('');
  groupFilter.value=groups.includes(filterValue)?filterValue:'';
  createGroupSelect.innerHTML='<option value="">请选择分组</option>'+groups.map(g=>`<option>${g}</option>`).join('');
}

function render(){
  const q=document.querySelector('#searchInput').value.trim().toLowerCase();
  const g=groupFilter.value;
  const s=document.querySelector('#statusFilter').value;
  const list=tags.filter(t=>(!q||(t.name+t.desc).toLowerCase().includes(q))&&(!g||t.group===g)&&(!s||(s==='enabled')===t.enabled));
  tbody.innerHTML=list.map(t=>`<tr data-id="${t.id}"><td><input type="checkbox" aria-label="选择 ${t.name}"></td><td><div class="tag-cell"><span class="tag-symbol">${svg('tag')}</span><div class="tag-meta"><b>${t.name}</b><small>${t.desc}</small></div></div></td><td><span class="group-pill">${t.group}</span></td><td><span class="doc-count" data-open="${t.id}">${t.docs} 篇</span></td><td>${t.time}</td><td><span class="status-pill ${t.enabled?'':'disabled'}">${t.enabled?'已启用':'已停用'}</span></td><td><div class="actions"><button title="查看详情" data-open="${t.id}">${svg('eye')}</button><button class="toggle ${t.enabled?'on':''}" title="${t.enabled?'停用':'启用'}" data-toggle="${t.id}"></button><button title="更多">${svg('more')}</button></div></td></tr>`).join('');
  empty.style.display=list.length?'none':'block';
  resultCount.textContent=list.length;
}

renderGroupOptions();render();
['searchInput','groupFilter','statusFilter'].forEach(id=>document.querySelector('#'+id).addEventListener(id==='searchInput'?'input':'change',render));
document.querySelector('#clearFilter').onclick=()=>{document.querySelector('#searchInput').value='';groupFilter.value='';document.querySelector('#statusFilter').value='';render()};
tbody.addEventListener('click',e=>{const open=e.target.closest('[data-open]'),toggle=e.target.closest('[data-toggle]');if(open)openDrawer(+open.dataset.open);if(toggle){const t=tags.find(x=>x.id===+toggle.dataset.toggle);t.enabled=!t.enabled;render();notify(`标签“${t.name}”已${t.enabled?'启用':'停用'}`)}});

const modal=document.querySelector('#modalOverlay');
document.querySelector('#createBtn').onclick=()=>{renderGroupOptions();modal.hidden=false;modal.querySelector('input').focus()};
document.querySelectorAll('[data-close]').forEach(x=>x.onclick=()=>modal.hidden=true);
modal.onclick=e=>{if(e.target===modal)modal.hidden=true};
document.querySelector('#createForm').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);tags.unshift({id:Date.now(),name:f.get('name'),desc:f.get('description')||'暂无版本说明',group:f.get('group'),docs:0,time:'2026-09-20 '+new Date().toTimeString().slice(0,5),enabled:f.get('enabled')==='on'});modal.hidden=true;e.target.reset();render();notify('版本标签创建成功')};

const groupOverlay=document.querySelector('#groupOverlay');
document.querySelector('#groupManageBtn').onclick=()=>{renderGroupList();groupOverlay.hidden=false;document.querySelector('#groupNameInput').focus()};
document.querySelectorAll('[data-group-close]').forEach(x=>x.onclick=()=>groupOverlay.hidden=true);
groupOverlay.onclick=e=>{if(e.target===groupOverlay)groupOverlay.hidden=true};
document.querySelector('#groupForm').onsubmit=e=>{e.preventDefault();const input=document.querySelector('#groupNameInput');const name=input.value.trim();if(!name)return;if(groups.includes(name)){notify('分组名称已存在');return}groups.push(name);input.value='';renderGroupOptions();renderGroupList();notify('分组已新增')};
function renderGroupList(){document.querySelector('#groupList').innerHTML=groups.map((g,i)=>{const used=tags.filter(t=>t.group===g).length;return `<div class="group-item"><span class="group-order">${String(i+1).padStart(2,'0')}</span><div><b>${g}</b><small>${used} 个标签</small></div><button class="group-delete" data-delete-group="${g}" ${used?'disabled':''} title="${used?'该分组正在使用':'删除分组'}">${svg('trash')}</button></div>`}).join('')}
document.querySelector('#groupList').onclick=e=>{const button=e.target.closest('[data-delete-group]');if(!button)return;groups=groups.filter(g=>g!==button.dataset.deleteGroup);renderGroupOptions();renderGroupList();notify('分组已删除')};

function openDrawer(id){const t=tags.find(x=>x.id===id);if(!t)return;document.querySelector('#drawerTitle').textContent=t.name;document.querySelector('#drawerTag').textContent=t.name;document.querySelector('#drawerStatus').textContent=t.enabled?'已启用':'已停用';document.querySelector('#drawerGroup').textContent=t.group;document.querySelector('#drawerTime').textContent=t.time;document.querySelector('#drawerCount').textContent=t.docs+' 篇';document.querySelector('#relatedDocs').innerHTML=['1.9.指导文章','0.开发架构','5.1.后端状态整理'].map((n,i)=>`<div class="doc-item"><span class="doc-icon">K</span><div><b>${n}</b><small>更新于 2026-09-${18-i} · ${t.name}</small></div></div>`).join('');document.querySelector('#drawerShell').hidden=false}
document.querySelectorAll('[data-drawer-close]').forEach(x=>x.onclick=()=>document.querySelector('#drawerShell').hidden=true);
document.querySelector('#refreshBtn').onclick=e=>{const i=e.currentTarget.querySelector('svg');i.classList.add('spin');setTimeout(()=>{i.classList.remove('spin');notify('版本标签已更新')},650)};
function notify(msg){const t=document.querySelector('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),2200)}
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();document.querySelector('#searchInput').focus()}if(e.key==='Escape'){modal.hidden=true;groupOverlay.hidden=true;document.querySelector('#drawerShell').hidden=true}});
