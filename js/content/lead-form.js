'use strict';

function showHiddenLeadFormEditor() {
  const findHiddenScriptEditor = setInterval(() => {
    const hiddenLeadFormEditor = document.querySelector('#discriptionTextArea > div.pb10[style*="display:none"]');

    if (hiddenLeadFormEditor) {
      clearInterval(findHiddenScriptEditor);
      const actionTitle = hiddenLeadFormEditor.querySelector('.textTitleStyle.disInline').textContent;

      if (actionTitle === 'Custom Script') {
        hiddenLeadFormEditor.style.display = 'block';
      }
    }
  }, 1000);

  setTimeout(() => {
    clearInterval(findHiddenScriptEditor);
  }, 6000);
}

if (window.location.href.includes('https://mail.notifyvisitors.com/forms/editor/home?formID')) {
  const descriptionStep = document.querySelector('li[data-step="description"]');

  showHiddenLeadFormEditor();

  descriptionStep && descriptionStep.addEventListener('click', showHiddenLeadFormEditor);
}

function fixDevUrlIssue(dev) {
  if (window.location.href.includes('dev1.notifyvisitors.com') || window.location.href.includes('devanal1.notifyvisitors.com')) {
    window.location.href = window.location.href.replace('dev1', 'dev' + dev);
  }

  if (window.location.href.includes('devanal.notifyvisitors.com')) {
    window.location.href = window.location.href.replace('devanal.', 'devanal' + dev + '.');
  }

  if (window.location.href.includes('devmail.')) {
    window.location.href = window.location.href.replace('devmail.', 'devmail' + dev + '.');
  }

  if (window.location.href.includes('devmobile.')) {
    window.location.href = window.location.href.replace('devmobile.', 'devmobile' + dev + '.');
  }
}

// Survey
fixDevUrlIssue(29);

function addSurveyEye() {
  const editorEye = `
  <div style="display: inline-block; height: 20px; width: 20px; cursor: pointer; margin-top: 10px;" id="nv-show-survey">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"/></svg>
  </div>`;

  const findUpdateBtn = setInterval(function () {
    const updateBtn = document.querySelector('.submitDescription').parentElement;

    if (updateBtn) {
      clearInterval(findUpdateBtn);

      updateBtn.insertAdjacentHTML('afterend', editorEye);

      const eyeBtn = document.getElementById('nv-show-survey');

      eyeBtn.addEventListener('click', function () {
        const textareaContainer = document.querySelector('#customizeDescription > div:nth-child(2)');
        const allTextareas = document.querySelectorAll('textarea[id^=customSurvey]');

        eyeBtn.style.display = 'none';
        if (textareaContainer) {
          textareaContainer.style.display = 'block';
        }
        if (allTextareas && allTextareas.length) {
          for (const textarea of allTextareas) {
            textarea.parentElement.style.height = 'unset';
          }
        }
      });
    }
  }, 500);

  setTimeout(function () {
    clearInterval(findUpdateBtn);
  }, 6000);
}

window.addEventListener('load', function () {
  if (window.location.href.includes('https://www.notifyvisitors.com/brand/newNotification/basic')) addSurveyEye();
});

// if (window.location.href.includes('notifyvisitors.com') && window.location.href.includes('editor')) {
//   const codeIcon = document.createElement('div');

//   codeIcon.className = 'code-icon';
//   codeIcon.id = 'nvCodeSnippets';

//   const initialSnippetDropdown = `
//     <ol>
//       <li id="cookieSnippets">Cookie</li>
//     </ol>
//   `;

//   codeIcon.innerHTML = `
//     <img class="code-snippet-img" id="code-snippet-img" src="https://img.icons8.com/pastel-glyph/64/000000/code--v1.png" alt="show" />
//     <div class="no-display" id="codeIconDropDown">
//       <div id="codeSnippetHead">
//         <p style="font-weight: bold; font-size: 15px;" id="snippetBackBtn">&larr;</p>
//       </div>
//       <div id="codeSnippetBody">
//         ${initialSnippetDropdown}
//       </div>
//     </div>
//   `;

//   document.body.append(codeIcon);

//   const codeSnippetIcon = document.querySelector('#code-snippet-img');

//   const codeSnippetDropdown = document.querySelector('#codeIconDropDown');
//   const codeSnippetBody = document.querySelector('#codeSnippetBody');

//   const snippetBackBtn = document.querySelector('#snippetBackBtn');
//   if (snippetBackBtn) {
//     snippetBackBtn.addEventListener('click', () => {
//       codeSnippetBody.innerHTML = initialSnippetDropdown;
//     });
//   }

//   codeSnippetIcon.addEventListener('click', () => {
//     if (codeSnippetDropdown) {
//       codeSnippetDropdown.classList.toggle('no-display');
//     }
//   });

//   const cookieSnippets = document.querySelector('#cookieSnippets');
//   cookieSnippets.addEventListener('click', () => {
//     codeSnippetBody.innerHTML = `
//         document.cookie = 'name:val; expires: before; path: /;';
//       `;
//   });
// }
