// KEP v5.2 — final navigation and role-based layout helper
(function(){
  const file=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const groups={
    public:new Set(['index.html','kankor-info.html','girls-education.html','subjects.html','library.html','about.html','privacy.html','terms.html','contact.html','public-launch-checklist.html','practice.html','volunteer.html','submit-content.html','auth.html','google-forms.html']),
    student:new Set(['student-home.html','student-db.html','practice-db.html','mock-db.html','progress-analytics.html','study-plan-db.html','dashboard.html','library-db.html','girls-pathway.html','study-packs.html','mock.html']),
    admin:new Set(['admin-home.html','admin-db.html','admin-review-db.html','review-dashboard.html','content-quality-db.html','ai-review-assistant.html','ai-suggestions-db.html','ai-edge-setup.html','ai-automation.html']),
    developer:new Set(['developer-setup.html','deploy-guide.html','production-checklist.html','launch-mode.html','release-notes.html','database-setup.html','supabase-setup.html','ai-edge-setup.html','migrate-to-db.html','system-review.html','deployment-checklist.html','public-launch-checklist.html','kankor-rules.html'])
  };
  const area=groups.admin.has(file)?'admin':groups.developer.has(file)?'developer':groups.student.has(file)?'student':'public';
  document.body.dataset.kepArea=area;
  const links={
    public:[['Home','index.html'],['Kankor Info','kankor-info.html'],['Girls Education','girls-education.html'],['Subjects','subjects.html'],['Library','library.html'],['Login','auth.html']],
    student:[['Student Home','student-home.html'],['Practice','practice-db.html'],['Mock Exam','mock-db.html'],['Study Plan','study-plan-db.html'],['Library','library-db.html'],['Profile','student-db.html']],
    admin:[['Admin Home','admin-home.html'],['Review Content','admin-review-db.html'],['Admin DB','admin-db.html'],['AI Assistant','ai-review-assistant.html'],
      ['Saved AI','ai-suggestions-db.html'],
      ['AI Setup','ai-edge-setup.html'],['Student View','student-home.html']],
    developer:[['Setup Hub','developer-setup.html'],['Database','database-setup.html'],['Supabase','supabase-setup.html'],['Migration','migrate-to-db.html'],['System Review','system-review.html'],['Deploy Check','deployment-checklist.html'],
      ['Launch','public-launch-checklist.html']]
  };
  const actions={
    public:[['Start Learning','student-home.html','btn btn-primary'],['Login','auth.html','btn btn-secondary']],
    student:[['Take Mock','mock-db.html','btn btn-primary'],['Study Plan','study-plan-db.html','btn btn-secondary']],
    admin:[['Review Queue','admin-review-db.html','btn btn-primary'],['Setup Hub','developer-setup.html','btn btn-secondary']],
    developer:[['Student View','student-home.html','btn btn-primary'],['Admin Home','admin-home.html','btn btn-secondary']]
  };
  const nav=document.querySelector('.nav-links');
  if(nav){nav.innerHTML=links[area].map(([t,h])=>`<a href="${h}"${file===h?' class="active"':''}>${t}</a>`).join('');}
  const box=document.querySelector('.nav-actions');
  if(box){box.innerHTML=actions[area].map(([t,h,c])=>`<a class="${c}" href="${h}">${t}</a>`).join('');}
  const logo=document.querySelector('.logo');
  if(logo&&!logo.querySelector('.area-pill')){const p=document.createElement('span');p.className=`area-pill area-${area}`;p.textContent=area==='developer'?'Setup':area.charAt(0).toUpperCase()+area.slice(1);logo.appendChild(p);}
  const toggle=document.querySelector('.mobile-toggle');
  if(toggle&&nav&&!toggle.dataset.kepNavReady){toggle.dataset.kepNavReady='true';toggle.addEventListener('click',()=>nav.classList.toggle('open'));}
})();


/* KEP v6.0.1 — robust nav toggle fix */
(function(){
  function initMobileNav(){
    const btn=document.querySelector('.mobile-toggle');
    const navLinks=document.querySelector('.nav-links');
    if(!btn||!navLinks||btn.dataset.v601Ready)return;
    btn.dataset.v601Ready='true';
    btn.addEventListener('click',function(){
      document.body.classList.toggle('nav-open');
      navLinks.classList.toggle('open');
      btn.setAttribute('aria-expanded',document.body.classList.contains('nav-open')?'true':'false');
    });
    navLinks.addEventListener('click',function(e){
      if(e.target.closest('a')){
        document.body.classList.remove('nav-open');
        navLinks.classList.remove('open');
        btn.setAttribute('aria-expanded','false');
      }
    });
  }
  document.addEventListener('DOMContentLoaded',initMobileNav);
  setTimeout(initMobileNav,400);
})();
