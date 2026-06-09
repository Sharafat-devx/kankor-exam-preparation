// KEP v5.2 — final navigation and role-based layout helper
(function(){
  const file=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const groups={
    public:new Set(['index.html','kankor-info.html','girls-education.html','subjects.html','library.html','about.html','privacy.html','terms.html','contact.html','public-launch-checklist.html','practice.html','volunteer.html','submit-content.html','auth.html','google-forms.html']),
    student:new Set(['student-home.html','student-db.html','practice-db.html','mock-db.html','progress-analytics.html','study-plan-db.html','dashboard.html','library-db.html','girls-pathway.html','study-packs.html','mock.html']),
    admin:new Set(['admin-home.html','admin-db.html','admin-review-db.html','review-dashboard.html','content-quality-db.html','ai-review-assistant.html','ai-suggestions-db.html','admin-feedback-db.html','ai-edge-setup.html','ai-automation.html']),
    developer:new Set(['developer-setup.html','deploy-guide.html','production-checklist.html','launch-mode.html','release-notes.html','database-setup.html','supabase-setup.html','ai-edge-setup.html','migrate-to-db.html','system-review.html','deployment-checklist.html','public-launch-checklist.html','kankor-rules.html'])
  };
  const area=groups.admin.has(file)?'admin':groups.developer.has(file)?'developer':groups.student.has(file)?'student':'public';
  document.body.dataset.kepArea=area;
  const links={
    public:[['Home','index.html'],['Kankor Info','kankor-info.html'],['Girls Education','girls-education.html'],['Subjects','subjects.html'],['Library','library.html'],['Login','auth.html']],
    student:[['Student Home','student-home.html'],['Practice','practice-db.html'],['Mock Exam','mock-db.html'],['Study Plan','study-plan-db.html'],['Library','library-db.html'],['Profile','student-db.html']],
    admin:[['Admin Home','admin-home.html'],['Review Content','admin-review-db.html'],['Admin DB','admin-db.html'],['AI Assistant','ai-review-assistant.html'],
      ['Saved AI','ai-suggestions-db.html'],
        ['Feedback','admin-feedback-db.html'],
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


/* KEP v6.0.4 — final role-based clean navigation override
   This runs after older nav scripts and rebuilds the header so students do not see
   developer/admin navigation mixed into their learning area. */
(function(){
  const PUBLIC_PAGES = new Set([
    'index.html','kankor-info.html','girls-education.html','subjects.html','library.html',
    'about.html','contact.html','tester-instructions.html','tester-feedback.html','report-question.html','privacy.html','terms.html','public-launch-checklist.html','auth.html'
  ]);

  const STUDENT_PAGES = new Set([
    'student-home.html','student-db.html','practice-db.html','mock-db.html','progress-analytics.html',
    'study-plan-db.html','library-db.html','student-experience.html','dashboard.html','practice.html'
  ]);

  const ADMIN_PAGES = new Set([
    'admin-home.html','admin-db.html','admin-review-db.html','review-dashboard.html','content-quality-db.html',
    'ai-review-assistant.html','ai-suggestions-db.html','admin-feedback-db.html','ai-edge-setup.html'
  ]);

  const DEV_PAGES = new Set([
    'developer-setup.html','database-setup.html','supabase-setup.html','migrate-to-db.html',
    'system-review.html','deployment-checklist.html','deploy-guide.html','production-checklist.html',
    'launch-mode.html','release-notes.html','content-launch-pack.html','google-forms.html','submit-content.html'
  ]);

  function pageName(){
    const name = location.pathname.split('/').pop();
    return name || 'index.html';
  }

  function areaFor(page){
    if(STUDENT_PAGES.has(page)) return 'student';
    if(ADMIN_PAGES.has(page)) return 'admin';
    if(DEV_PAGES.has(page)) return 'developer';
    return 'public';
  }

  function link(label, href, current){
    return `<a href="${href}"${href === current ? ' class="active"' : ''}>${label}</a>`;
  }

  function linksFor(area, current){
    if(area === 'student'){
      return [
        ['Student Home','student-home.html'],
        ['Practice','practice-db.html'],
        ['Mock Exam','mock-db.html'],
        ['Progress','progress-analytics.html'],
        ['Study Plan','study-plan-db.html'],
        ['Library','library-db.html'],
        ['Profile','student-db.html']
      ].map(x => link(x[0], x[1], current)).join('');
    }

    if(area === 'admin'){
      return [
        ['Admin Home','admin-home.html'],
        ['Content Quality','content-quality-db.html'],
        ['Review Content','admin-review-db.html'],
        ['AI Assistant','ai-review-assistant.html'],
        ['Saved AI','ai-suggestions-db.html'],
        ['Feedback','admin-feedback-db.html']
      ].map(x => link(x[0], x[1], current)).join('');
    }

    if(area === 'developer'){
      return [
        ['Setup Hub','developer-setup.html'],
        ['Database','database-setup.html'],
        ['Supabase','supabase-setup.html'],
        ['Content Pack','content-launch-pack.html'],
        ['Deploy','deploy-guide.html'],
        ['Checklist','production-checklist.html']
      ].map(x => link(x[0], x[1], current)).join('');
    }

    return [
      ['Home','index.html'],
      ['Kankor Info','kankor-info.html'],
      ['Girls Education','girls-education.html'],
      ['Subjects','subjects.html'],
      ['Library','library.html'],
      ['About','about.html'],
      ['Contact','contact.html'],
      ['Feedback','tester-feedback.html']
    ].map(x => link(x[0], x[1], current)).join('');
  }

  function actionsFor(area){
    if(area === 'student'){
      return `
        <a class="btn btn-primary" href="mock-db.html">Take Mock</a>
        <a class="btn btn-secondary" href="study-plan-db.html">Study Plan</a>
      `;
    }

    if(area === 'admin'){
      return `
        <a class="btn btn-primary" href="admin-review-db.html">Review Queue</a>
        <a class="btn btn-secondary" href="content-quality-db.html">Quality</a>
      `;
    }

    if(area === 'developer'){
      return `
        <a class="btn btn-primary" href="deploy-guide.html">Deploy</a>
        <a class="btn btn-secondary" href="admin-home.html">Admin</a>
      `;
    }

    return `
      <a class="btn btn-primary" href="student-home.html">Start Learning</a>
      <a class="btn btn-secondary" href="auth.html">Login</a>
    `;
  }

  function buildHeader(){
    const header = document.querySelector('.header');
    if(!header || header.dataset.v604Clean === 'true') return;

    const current = pageName();
    const area = areaFor(current);
    header.dataset.v604Clean = 'true';
    document.body.dataset.kepArea = area;

    header.innerHTML = `
      <div class="container nav v604-nav">
        <a class="logo" href="index.html" aria-label="KEP home">
          <img src="assets/logo-header.png" alt="KEP logo">
        </a>
        <nav class="nav-links" aria-label="${area} navigation">
          ${linksFor(area, current)}
        </nav>
        <div class="nav-actions">
          ${actionsFor(area)}
        </div>
        <button class="mobile-toggle" type="button" aria-label="Menu" aria-expanded="false">☰</button>
      </div>
    `;

    initMobileNav();
  }

  function initMobileNav(){
    const btn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if(!btn || !navLinks) return;

    btn.addEventListener('click', function(){
      const open = !document.body.classList.contains('nav-open');
      document.body.classList.toggle('nav-open', open);
      navLinks.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    navLinks.addEventListener('click', function(e){
      if(e.target.closest('a')){
        document.body.classList.remove('nav-open');
        navLinks.classList.remove('open');
        btn.setAttribute('aria-expanded','false');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', buildHeader);
  setTimeout(buildHeader, 50);
  setTimeout(buildHeader, 400);
})();


/* KEP v6.3 — Simplify & Launch Mode Navigation
   Final simple navigation: students see learning only, admins see management only,
   developer setup stays separate and quiet. */
(function(){
  const PUBLIC = new Set([
    'index.html','start.html','kankor-info.html','girls-education.html','subjects.html','library.html',
    'about.html','contact.html','tester-instructions.html','tester-feedback.html','report-question.html',
    'privacy.html','terms.html','auth.html'
  ]);

  const STUDENT = new Set([
    'student-home.html','student-db.html','practice-db.html','mock-db.html','progress-analytics.html',
    'study-plan-db.html','library-db.html','student-experience.html','dashboard.html','practice.html'
  ]);

  const ADMIN = new Set([
    'admin-home.html','admin-db.html','admin-review-db.html','review-dashboard.html','content-quality-db.html',
    'admin-feedback-db.html','ai-review-assistant.html','ai-suggestions-db.html','ai-edge-setup.html'
  ]);

  const DEV = new Set([
    'developer-setup.html','database-setup.html','supabase-setup.html','migrate-to-db.html',
    'content-launch-pack.html','deploy-guide.html','production-checklist.html','launch-mode.html',
    'release-notes.html','system-review.html','deployment-checklist.html','public-launch-checklist.html',
    'google-forms.html','submit-content.html'
  ]);

  function currentPage(){
    return (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  }

  function areaFor(page){
    if(STUDENT.has(page)) return 'student';
    if(ADMIN.has(page)) return 'admin';
    if(DEV.has(page)) return 'developer';
    return 'public';
  }

  function a(label, href, current){
    return `<a href="${href}"${href === current ? ' class="active"' : ''}>${label}</a>`;
  }

  function links(area, current){
    if(area === 'student'){
      return [
        ['Home','student-home.html'],
        ['Practice','practice-db.html'],
        ['Mock','mock-db.html'],
        ['Progress','progress-analytics.html'],
        ['Profile','student-db.html'],
        ['Report','report-question.html']
      ].map(x => a(x[0], x[1], current)).join('');
    }

    if(area === 'admin'){
      return [
        ['Admin','admin-home.html'],
        ['Review','admin-review-db.html'],
        ['Quality','content-quality-db.html'],
        ['Feedback','admin-feedback-db.html']
      ].map(x => a(x[0], x[1], current)).join('');
    }

    if(area === 'developer'){
      return [
        ['Setup','developer-setup.html'],
        ['Database','database-setup.html'],
        ['Content','content-launch-pack.html'],
        ['Deploy','deploy-guide.html']
      ].map(x => a(x[0], x[1], current)).join('');
    }

    return [
      ['Home','index.html'],
      ['Start','start.html'],
      ['Girls Education','girls-education.html'],
      ['About','about.html'],
      ['Feedback','tester-feedback.html']
    ].map(x => a(x[0], x[1], current)).join('');
  }

  function actions(area){
    if(area === 'student'){
      return `<a class="btn btn-primary" href="practice-db.html">Practice</a><a class="btn btn-secondary" href="mock-db.html">Mock</a>`;
    }
    if(area === 'admin'){
      return `<a class="btn btn-primary" href="admin-feedback-db.html">Feedback</a><a class="btn btn-secondary" href="content-quality-db.html">Quality</a>`;
    }
    if(area === 'developer'){
      return `<a class="btn btn-primary" href="content-launch-pack.html">Content</a><a class="btn btn-secondary" href="deploy-guide.html">Deploy</a>`;
    }
    return `<a class="btn btn-primary" href="start.html">Start Learning</a><a class="btn btn-secondary" href="auth.html">Login</a>`;
  }

  function build(){
    const header = document.querySelector('.header');
    if(!header || header.dataset.v63Simple === 'true') return;

    const current = currentPage();
    const area = areaFor(current);
    document.body.dataset.kepArea = area;
    header.dataset.v63Simple = 'true';

    header.innerHTML = `
      <div class="container nav v604-nav v63-nav">
        <a class="logo" href="index.html" aria-label="KEP home">
          <img src="assets/logo-header.png" alt="KEP logo">
        </a>
        <nav class="nav-links" aria-label="${area} navigation">${links(area,current)}</nav>
        <div class="nav-actions">${actions(area)}</div>
        <button class="mobile-toggle" type="button" aria-label="Menu" aria-expanded="false">☰</button>
      </div>
    `;

    const btn = header.querySelector('.mobile-toggle');
    const nav = header.querySelector('.nav-links');
    if(btn && nav){
      btn.addEventListener('click', () => {
        const open = !document.body.classList.contains('nav-open');
        document.body.classList.toggle('nav-open', open);
        nav.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      nav.addEventListener('click', (e) => {
        if(e.target.closest('a')){
          document.body.classList.remove('nav-open');
          nav.classList.remove('open');
          btn.setAttribute('aria-expanded','false');
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded', build);
  setTimeout(build, 80);
  setTimeout(build, 500);
})();
