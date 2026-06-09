// KEP v6.2 — Tester Feedback Pack
(function(){
  const $ = (id) => document.getElementById(id);
  function getClient(){
    if(window.KEP_DB && typeof window.KEP_DB.client === 'function') return window.KEP_DB.client();
    if(window.kepSupabase) return window.kepSupabase;
    return null;
  }
  function setStatus(message, type='info'){
    const el = $('feedbackStatus');
    if(!el) return;
    el.className = `status-box ${type}`;
    el.textContent = message;
  }
  async function getUser(){
    const client = getClient();
    if(!client) return null;
    const { data } = await client.auth.getUser();
    return data && data.user ? data.user : null;
  }
  async function submitFeedback(e){
    e.preventDefault();
    const client = getClient();
    if(!client){ setStatus('Database is not connected. Open Database Setup first.', 'warn'); return; }
    const user = await getUser();
    if(!user){ setStatus('Please login first, then submit feedback.', 'warn'); return; }
    const form = e.currentTarget;
    const payload = {
      user_id: user.id,
      reporter_email: user.email || (form.reporter_email ? form.reporter_email.value : ''),
      report_type: form.report_type ? form.report_type.value : 'general_feedback',
      priority: form.priority ? form.priority.value : 'normal',
      page_url: form.page_url ? form.page_url.value : location.href,
      question_id: form.question_id ? form.question_id.value : '',
      subject_name: form.subject_name ? form.subject_name.value : '',
      question_text: form.question_text ? form.question_text.value : '',
      message: form.message ? form.message.value : '',
      screenshot_note: form.screenshot_note ? form.screenshot_note.value : '',
      status: 'new'
    };
    if(!payload.message.trim()){ setStatus('Please write the feedback message first.', 'warn'); return; }
    setStatus('Submitting feedback...', 'info');
    const { error } = await client.from('feedback_reports').insert(payload);
    if(error){ setStatus(`Could not submit feedback: ${error.message}`, 'error'); return; }
    form.reset();
    if(form.page_url) form.page_url.value = location.href;
    setStatus('Feedback submitted. Thank you for helping improve KEP.', 'ok');
  }
  async function loadAdminFeedback(){
    const tbody = $('feedbackRows');
    const count = $('feedbackCount');
    if(!tbody) return;
    const client = getClient();
    if(!client){ tbody.innerHTML = '<tr><td colspan="6">Database is not connected.</td></tr>'; return; }
    tbody.innerHTML = '<tr><td colspan="6">Loading feedback...</td></tr>';
    const { data, error } = await client.from('feedback_reports').select('*').order('created_at', { ascending:false }).limit(100);
    if(error){ tbody.innerHTML = `<tr><td colspan="6">Could not load feedback: ${escapeHtml(error.message)}</td></tr>`; return; }
    const rows = data || [];
    if(count) count.textContent = `${rows.length} report(s)`;
    if(!rows.length){ tbody.innerHTML = '<tr><td colspan="6">No feedback yet.</td></tr>'; return; }
    tbody.innerHTML = rows.map(r => `
      <tr>
        <td><span class="pill">${escapeHtml(r.status || 'new')}</span></td>
        <td>${escapeHtml(r.report_type || '')}<br><small>${escapeHtml(r.priority || '')}</small></td>
        <td>${escapeHtml(r.subject_name || '—')}<br><small>${escapeHtml(r.question_id || '')}</small></td>
        <td>${escapeHtml((r.message || '').slice(0,180))}</td>
        <td>${new Date(r.created_at).toLocaleString()}</td>
        <td><button class="mini-btn" data-feedback-id="${r.id}" data-status="reviewed">Reviewed</button><button class="mini-btn" data-feedback-id="${r.id}" data-status="fixed">Fixed</button></td>
      </tr>`).join('');
  }
  async function updateFeedbackStatus(id, status){
    const client = getClient(); if(!client) return;
    const { error } = await client.from('feedback_reports').update({ status }).eq('id', id);
    if(error){ alert(`Could not update: ${error.message}`); return; }
    loadAdminFeedback();
  }
  function escapeHtml(str){ return String(str ?? '').replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[s])); }
  document.addEventListener('DOMContentLoaded', () => {
    const form = $('feedbackForm');
    if(form){ if(form.page_url) form.page_url.value = location.href; form.addEventListener('submit', submitFeedback); }
    if($('feedbackRows')) setTimeout(loadAdminFeedback, 350);
    document.addEventListener('click', (e) => { const btn = e.target.closest('[data-feedback-id]'); if(btn) updateFeedbackStatus(btn.dataset.feedbackId, btn.dataset.status); });
  });
})();
